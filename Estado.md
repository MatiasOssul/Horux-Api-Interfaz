# Descripción de la API de Monitoreo de Vehículos

Esta API proporciona información detallada sobre el estado y la actividad de varios vehículos. A continuación se describe la estructura de los datos devueltos por la API.

## Estructura de la Respuesta

La respuesta de la API contiene una lista de objetos, cada uno representando un vehículo y su estado. Aquí se detallan los campos más relevantes:

### Campos Principales

- **patente**: Identificación del vehículo.
- **heartbeat**: Marca de tiempo del último latido del sistema.

### Estado del Sensor

El campo `estadoSensor` proporciona información sobre varios sensores del vehículo:

- **authenticationFailure**: Indica si hubo un fallo de autenticación.
- **bootloaderFirmwareFailure**: Indica si hubo un fallo en el firmware del bootloader.
- **buzzerFault**: Indica si hay un fallo en el buzzer.
- **cameraDetected**: Indica si la cámara fue detectada.
- **cameraFault**: Indica si hay un fallo en la cámara.
- **clockDrift**: Desviación del reloj.
- **cmosBatteryFault**: Indica si hay un fallo en la batería CMOS.
- **configurationFilesOk**: Indica si los archivos de configuración están correctos.
- **cpuLoadOk**: Indica si la carga de la CPU es adecuada.
- **cpuPercent**: Porcentaje de uso de la CPU.
- **errorFlags**: Banderas de error.
- **eventFlags**: Banderas de evento.
- **exceptionInProgress**: Indica si hay una excepción en progreso.
- **ffcFault**: Indica si hay un fallo en el FFC.
- **ffcNoData**: Indica si no hay datos en el FFC.
- **ffcNotDetected**: Indica si el FFC no fue detectado.
- **gpsDetected**: Indica si el GPS fue detectado.
- **gpsPercent**: Porcentaje de uso del GPS.
- **ipAddress**: Dirección IP.
- **irPodsInactive**: Indica si los pods IR están inactivos.
- **logDisk**: Espacio en disco de logs.
- **logDiskDetected**: Indica si el disco de logs fue detectado.
- **macAddress**: Dirección MAC.
- **maxRebootsExceeded**: Indica si se excedió el número máximo de reinicios.
- **overTemperature**: Indica si hay sobretemperatura.
- **psuFault**: Indica si hay un fallo en la fuente de alimentación.
- **simError**: Indica si hay un error en la SIM.
- **speakerFault**: Indica si hay un fallo en el altavoz.
- **systemDisk**: Espacio en disco del sistema.
- **systemDiskDetected**: Indica si el disco del sistema fue detectado.
- **systemTimeUtc**: Hora del sistema en UTC.
- **temperature**: Temperatura del sistema.
- **tracking**: Estado del seguimiento.
- **unverifiedSystemTime**: Indica si la hora del sistema no está verificada.
- **vibrationMotorFault**: Indica si hay un fallo en el motor de vibración.
- **vibrationMotorOverheat**: Indica si hay sobrecalentamiento en el motor de vibración.
- **warnings**: Advertencias.

### Localización

El campo `localizacion` proporciona datos de ubicación GPS:

- **altitude**: Altitud.
- **course**: Curso.
- **gpsTimeUtc**: Hora GPS en UTC.
- **latitude**: Latitud.
- **longitude**: Longitud.
- **speedMps**: Velocidad en metros por segundo.
- **suppressed**: Indica si los datos están suprimidos.
- **valid**: Indica si los datos son válidos.

### Agregado Diario

El campo `agregadoDiario` proporciona estadísticas diarias del vehículo:

- **accelerationEvents**: Eventos de aceleración.
- **account**: Información de la cuenta asociada.
- **averageSpeedKph**: Velocidad promedio en km/h.
- **averageTemperatureC**: Temperatura promedio en °C.
- **buzzerState**: Estado del buzzer.
- **cameraDetection**: Detección de la cámara.
- **cameraState**: Estado de la cámara.
- **distanceTravelledKms**: Distancia recorrida en km.
- **distractionEvents**: Eventos de distracción.
- **fatigueEvents**: Eventos de fatiga.
- **ffcData**: Datos del FFC.
- **ffcDetection**: Detección del FFC.
- **ffcStreaming**: Transmisión del FFC.
- **fleet**: Información de la flota asociada.
- **fovExceptions**: Excepciones del FOV.
- **fovInProgress**: FOV en progreso.
- **gpsDetection**: Detección del GPS.
- **heartbeatEvents**: Eventos de latido.
- **heartbeatsPerHour**: Latidos por hora.
- **irIlluminatorState**: Estado del iluminador IR.
- **maximumSpeedKph**: Velocidad máxima en km/h.
- **maximumTemperatureC**: Temperatura máxima en °C.
- **mobileTimeHours**: Tiempo móvil en horas.
- **operatingTimeHours**: Tiempo de operación en horas.
- **operatorEvents**: Eventos del operador.
- **overspeedEvents**: Eventos de exceso de velocidad.
- **powerSupplyState**: Estado de la fuente de alimentación.
- **serviceProvider**: Proveedor de servicios.
- **speakerState**: Estado del altavoz.
- **temperatureState**: Estado de la temperatura.
- **tracking**: Estado del seguimiento.
- **vehicle**: Información del vehículo asociado.
- **vibrationMotorState**: Estado del motor de vibración.

### Fechas

- **fechaAgregado**: Fecha en la que se agregaron los datos.
- **fechaHoraGeneracionAgregadoUTC**: Fecha y hora en que se generó el agregado de datos en UTC.

## Ejemplo de Respuesta

```json
[
  {
    "patente": "212",
    "heartbeat": "2024-05-24 15:57:47",
    "estadoSensor": {
      "authenticationFailure": true,
      "bootloaderFirmwareFailure": false,
      "buzzerFault": false,
      "cameraDetected": true,
      "cameraFault": false,
      "clockDrift": 0,
      "cmosBatteryFault": false,
      "configurationFilesOk": true,
      "cpuLoadOk": false,
      "cpuPercent": 0.69,
      "errorFlags": "00028000",
      "eventFlags": "00000400",
      "exceptionInProgress": false,
      "ffcFault": false,
      "ffcNoData": false,
      "ffcNotDetected": true,
      "gpsDetected": true,
      "gpsPercent": 0,
      "ipAddress": "",
      "irPodsInactive": false,
      "logDisk": 25097,
      "logDiskDetected": true,
      "macAddress": "",
      "maxRebootsExceeded": true,
      "overTemperature": false,
      "psuFault": false,
      "simError": false,
      "speakerFault": false,
      "systemDisk": 2334,
      "systemDiskDetected": true,
      "systemTimeUtc": "2025-01-25T14:08:03Z",
      "temperature": 35,
      "tracking": null,
      "unverifiedSystemTime": false,
      "vibrationMotorFault": false,
      "vibrationMotorOverheat": false,
      "warnings": "00000200"
    },
    "localizacion": {
      "altitude": 53,
      "course": 4.687832,
      "gpsTimeUtc": "2024-05-24T15:57:35Z",
      "latitude": -36.655352300008,
      "longitude": -72.473393799994,
      "speedMps": 0.015999999,
      "suppressed": false,
      "valid": true
    },
    "agregadoDiario": {
      "accelerationEvents": 0,
      "account": {
        "id": 197,
        "name": "(SMLA) ARAUCO"
      },
      "averageSpeedKph": 0,
      "averageTemperatureC": 35,
      "buzzerState": 1,
      "cameraDetection": 1,
      "cameraState": 1,
      "distanceTravelledKms": 0,
      "distractionEvents": 0,
      "fatigueEvents": 0,
      "ffcData": 1,
      "ffcDetection": 0.207081,
      "ffcStreaming": 1,
      "fleet": {
        "id": 1161,
        "name": "(SMLA) ARAUCO-SALGADO-VALDIVIA"
      },
      "fovExceptions": 0,
      "fovInProgress": 0,
      "gpsDetection": 1,
      "heartbeatEvents": 3,
      "heartbeatsPerHour": 14,
      "irIlluminatorState": 1,
      "maximumSpeedKph": 0,
      "maximumTemperatureC": 35,
      "mobileTimeHours": 0.22,
      "operatingTimeHours": 0.22,
      "operatorEvents": 0,
      "overspeedEvents": 0,
      "powerSupplyState": 1,
      "serviceProvider": {
        "id": 214,
        "name": "Seeing Machines Latin America || (SMLA)"
      },
      "speakerState": 1,
      "temperatureState": 1,
      "tracking": 1,
      "vehicle": {
        "id": 43709,
        "name": "HXJK11-SG420"
      },
      "vibrationMotorState": 1
    },
    "fechaAgregado": "2025-01-25",
    "fechaHoraGeneracionAgregadoUTC": "2025-01-27 02:00:24"
  },