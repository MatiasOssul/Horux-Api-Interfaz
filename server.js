import express from 'express';
import bodyParser from 'body-parser';
import soap from 'soap';
import dotenv from 'dotenv';
import crypto from 'crypto';
const app = express();
const port = 3000;

dotenv.config();
const MAIL_EVENT = process.env.MAIL_EVENT;
const PASSWORD_EVENT = process.env.PASSWORD_EVENT;
const MAIL_STATUS = process.env.MAIL_STATUS;
const PASSWORD_STATUS = process.env.PASSWORD_STATUS;
const URL_EVENT = process.env.URL_EVENT;
const URL_STATUS = process.env.URL_STATUS;

app.use(bodyParser.json());
app.use(express.static('public'));
const sessions = {}

app.post('/iniciarSesion', (req, res) => {
    const { email, password } = req.body;

    if ((email === MAIL_EVENT || email === MAIL_STATUS) && (password === PASSWORD_EVENT || password === PASSWORD_STATUS)) {
        console.log('Inicio de sesión exitoso');
        const sessionId = crypto.randomBytes(16).toString('hex');
        sessions[sessionId] = { email };
        res.send({ success: true, message: 'Inicio de sesión exitoso', sessionId});
    } else {
        res.status(401).send({ success: false, message: 'Credenciales incorrectas' });
    }
});

app.post('/fetchEvents', (req, res) => {
    const {sessionId, fechaHoraDesdeFormatted = '2025-01-28T00:46:00', fechaHoraHastaFormatted = '2025-01-28T11:46:00' } = req.body;

    const args = {
        fechaHoraDesde: fechaHoraDesdeFormatted,
        fechaHoraHasta: fechaHoraHastaFormatted,
        email: MAIL_EVENT,
        password: PASSWORD_EVENT
    };
    soap.createClient(URL_EVENT, function(err, client) {
        if (err) {
            res.status(500).send({ error: 'Error al crear el cliente SOAP' });
            return;
        }
        if (sessions[sessionId]){
            client.eventoSM(args, function(err, result) {
                if (err) {
                    res.status(500).send({ error: 'Error en la solicitud SOAP' });
                    return;
                }
                try {
                    const jsonObject = JSON.parse(result.evento);
                    res.send(jsonObject);
                } catch (parseError) {
                    res.status(500).send({ error: 'Error al parsear la respuesta del servicio' });
                }
            });
        } else {
            res.status(401).json({ error: 'No autorizado' });
        }    
    });
});

app.post('/fetchStatus', (req, res) => {
    const {sessionId} = req.body

    const args = {
        email: MAIL_STATUS,
        password: PASSWORD_STATUS
    };

    soap.createClient(URL_STATUS, function(err, client) {
        if (err) {
            res.status(500).send({ error: 'Error al crear el cliente SOAP' });
            return;
        }  
        if (sessions[sessionId]) {
            client.eventoSM(args, function(err, result) {
                if (err) {
                    res.status(500).send({ error: 'Error en la solicitud SOAP' });
                    return;
                }
                try {
                    const jsonObject = JSON.parse(result.evento);
                    res.send(jsonObject);
                } catch (parseError) {
                    res.status(500).send({ error: 'Error al parsear la respuesta del servicio' });
                }   
            });
        } else {
            res.status(401).json({ error: 'No autorizado' });
        }  
    });
});

app.post('/fetchSimList', async (req, res) => {
    const { sessionId } = req.body;
    const API_BASE = process.env.API_BASE;
    const TOKEN = process.env.TOKEN;

    if (sessions[sessionId]) {
        try {
            const response = await fetch(`${API_BASE}/simList`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': TOKEN,
                }
            });

            if (!response.ok) {
                res.status(response.status).send({ error: 'Error en la solicitud a la API externa' });
                return;
            }

            const data = await response.json();
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Error al realizar la solicitud' });
        }
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

app.post('/fetchSimDetails', async (req, res) => {
    const { sessionId, filter, value } = req.body;  
    const API_BASE = process.env.API_BASE;
    const TOKEN = process.env.TOKEN;

    if (sessions[sessionId]) {
        try {
            const response = await fetch(`${API_BASE}/simDetails/${filter}/${value}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': TOKEN,
                }
            });

            if (!response.ok) {
                res.status(response.status).send({ error: 'Error en la solicitud a la API externa' });
                return;
            }

            const data = await response.json();
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Error al realizar la solicitud' });
        }
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

app.post('/testGsm', async (req, res) => {
    const { sessionId, filter, value } = req.body;
    const API_BASE = process.env.API_BASE;
    const TOKEN = process.env.TOKEN;

    if (sessions[sessionId]) {
        try {
            const response = await fetch(`${API_BASE}/testGsm/${filter}/${value}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': TOKEN,
                }
            });

            if (!response.ok) {
                res.status(response.status).send({ error: 'Error en la solicitud a la API externa' });
                return;
            }

            const data = await response.json();
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Error al realizar la solicitud' });
        }
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

app.post('/testGprs', async (req, res) => {
    const { sessionId, filter, value } = req.body;
    const API_BASE = process.env.API_BASE;
    const TOKEN = process.env.TOKEN;

    if (sessions[sessionId]) {
        try {
            const response = await fetch(`${API_BASE}/testGprs/${filter}/${value}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': TOKEN,
                }
            });

            if (!response.ok) {
                res.status(response.status).send({ error: 'Error en la solicitud a la API externa' });
                return;
            }

            const data = await response.json();
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Error al realizar la solicitud' });
        }
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

app.post('/resetSimcard', async (req, res) => {
    const { sessionId, filter, value } = req.body;
    const API_BASE = process.env.API_BASE;
    const TOKEN = process.env.TOKEN;

    if (sessions[sessionId]) {
        try {
            const response = await fetch(`${API_BASE}/reset/${filter}/${value}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': TOKEN,
                }
            });

            if (!response.ok) {
                res.status(response.status).send({ error: 'Error en la solicitud a la API externa' });
                return;
            }

            const data = await response.json();
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Error al realizar la solicitud' });
        }
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

app.post('/sendSMS', async (req, res) => {
    const { sessionId, filter, value, message } = req.body;
    const API_BASE = process.env.API_BASE;
    const TOKEN = process.env.TOKEN;

    if (sessions[sessionId]) {
        try {
            const response = await fetch(`${API_BASE}/sms/${filter}/${value}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': TOKEN,
                },
                body: JSON.stringify({ message })
            });

            if (!response.ok) {
                res.status(response.status).send({ error: 'Error en la solicitud a la API externa' });
                return;
            }

            const data = await response.json();
            res.send(data);
        } catch (error) {
            res.status(500).send({ error: 'Error al realizar la solicitud' });
        }
    } else {
        res.status(401).json({ error: 'No autorizado' });
    }
});

app.post('/validateSession', (req, res) => {
    const { sessionId } = req.body;
    if (sessions.hasOwnProperty(sessionId)) {
        res.send({ valid: true });
    } else {
        res.status(401).send({ valid: false });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});