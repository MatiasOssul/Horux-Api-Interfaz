# Estructura del JSON de Eventos

Este documento describe la estructura del JSON utilizado para representar eventos de guardian.

## Ejemplo de JSON

```json
{
  "evento": [
    {
      "guardianEvent": {
        "id": 2445481186,
        "version": "2024.306A",
        "acceleration": null,
        "account": {
          "id": 197,
          "name": "(SMLA) ARAUCO"
        },
        "audioLevel": 255,
        "classification": {
          "id": 10,
          "falsePositive": true,
          "labels": ["criteria not met", "criterios no cumplidos"]
        },
        "confirmationState": "false positive",
        "createTimeUtc": "2025-01-28T12:21:14.798386Z",
        "crew": null,
        "detectedEventType": {
          "value": "distraction",
          "labels": ["distraction", "distracción"]
        },
        "detectionFrame": {
          "altitudeMetres": 167,
          "courseRadians": 1.90356,
          "frameNumber": 100895,
          "frameTimeUtc": "2025-01-28T12:21:02.624Z",
          "gpsTimeUtc": "2025-01-28T12:21:03Z",
          "location": {
            "latitude": -38.989159,
            "longitude": -72.37994
          },
          "speedMps": 23.237
        },
        "durationSeconds": 9.01,
        "endFrame": {
          "altitudeMetres": 167,
          "courseRadians": 1.90356,
          "frameNumber": 100896,
          "frameTimeUtc": "2025-01-28T12:21:02.638Z",
          "gpsTimeUtc": "2025-01-28T12:21:03Z",
          "location": {
            "latitude": -38.989159,
            "longitude": -72.37994
          },
          "speedMps": 23.237
        },
        "eventTimeUtc": "2025-01-28T12:20:53.627Z",
        "eventType": {
          "value": "distraction",
          "labels": ["distraction", "distracción"]
        },
        "fleet": {
          "id": 1161,
          "name": "(SMLA) ARAUCO-SALGADO-VALDIVIA"
        },
        "gpioLevel": 0,
        "media": [
          {
            "contentType": "video/mp4",
            "frameNumber": null,
            "imageCrop": "full_frame",
            "sizeBytes": 211974,
            "payloadType": "video",
            "url": "https://g-prod-s3-archive-managed1-a-uswe2.s3.us-west-2.amazonaws.com/eod/P1001229-S00015333/202501/20250128/20250128T114955Z_034596/P1001229-S00015333_20250128T114955Z_034596_0001858627_01_dfc_N_ef5e40441926b59a4606b3a80ee16b42.mp4?X-Amz-Expires=21600&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWG3BTDCWBKCBDFAG%2F20250128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250128T122138Z&X-Amz-SignedHeaders=host&X-Amz-Signature=70573a0d5a9e07b60309a7fa2e185332a7abdb74f874cd422323ee14be6b6efa"
          }
        ],
        "modifiedTimeUtc": "2025-01-28T12:21:37.691649Z",
        "operator": null,
        "sensor": {
          "id": 29775,
          "serialNumber": "P1001229-S00015333",
          "softwareVersion": "1.4.7"
        },
        "shift": null,
        "shiftStatistics": null,
        "speedMps": 21.494444,
        "startFrame": {
          "altitudeMetres": 167,
          "courseRadians": 1.90792,
          "frameNumber": 100420,
          "frameTimeUtc": "2025-01-28T12:20:53.627Z",
          "gpsTimeUtc": "2025-01-28T12:20:53Z",
          "location": {
            "latitude": -38.988498,
            "longitude": -72.382365
          },
          "speedMps": 21.104
        },
        "tags": null,
        "trigger": "criteria not met",
        "trip": {
          "id": 517187283,
          "endFrame": {
            "altitudeMetres": 168,
            "courseRadians": 1.90585,
            "frameNumber": 101024,
            "frameTimeUtc": "2025-01-28T12:21:05.007Z",
            "gpsTimeUtc": "2025-01-28T12:21:06Z",
            "location": {
              "latitude": -38.989368,
              "longitude": -72.379168
            },
            "speedMps": 23.835
          },
          "startLocation": {
            "latitude": -38.956465,
            "longitude": -72.666237
          },
          "startTimeUtc": "2025-01-28T11:49:55Z",
          "utcOffsetMinutes": -180,
          "createTimeUtc": "2025-01-28T11:51:10.79818Z"
        },
        "tripStatistics": {
          "averageSpeedMps": 17.308203,
          "distanceTravelledMetres": 27381,
          "endTimeUtc": "2025-01-28T12:20:53.627Z",
          "gpsPercent": 1,
          "maximumSpeedMps": 25.064001,
          "operatingTimeSeconds": 1867,
          "startFrame": 0,
          "startTimeUtc": "2025-01-28T11:49:55Z",
          "stationaryTimeSeconds": 242,
          "trackingPerformance": 0.96202534
        },
        "tsUtc": "2025-01-28T12:21:38.051634Z",
        "utcOffsetMinutes": -180,
        "vehicle": {
          "id": 44041,
          "class": "mining haul",
          "group": null,
          "name": "JSSB68-SG466",
          "type": "Truck"
        }
      }
    }
  ]
}
```

## Descripción de la Estructura

- **evento**: Array de objetos que contiene los eventos de guardian.
  - **guardianEvent**: Objeto que representa un evento específico.
    - **id**: Identificador único del evento.
    - **version**: Versión del evento.
    - **acceleration**: Información de aceleración (puede ser `null`).
    - **account**: Información de la cuenta.
      - **id**: Identificador de la cuenta.
      - **name**: Nombre de la cuenta.
    - **audioLevel**: Nivel de audio.
    - **classification**: Clasificación del evento.
      - **id**: Identificador de la clasificación.
      - **falsePositive**: Indica si es un falso positivo.
      - **labels**: Etiquetas de la clasificación.
    - **confirmationState**: Estado de confirmación del evento.
    - **createTimeUtc**: Fecha y hora de creación del evento en formato UTC.
    - **crew**: Información de la tripulación (puede ser `null`).
    - **detectedEventType**: Tipo de evento detectado.
      - **value**: Valor del tipo de evento.
      - **labels**: Etiquetas del tipo de evento.
    - **detectionFrame**: Información del cuadro de detección.
      - **altitudeMetres**: Altitud en metros.
      - **courseRadians**: Curso en radianes.
      - **frameNumber**: Número de cuadro.
      - **frameTimeUtc**: Fecha y hora del cuadro en formato UTC.
      - **gpsTimeUtc**: Fecha y hora del GPS en formato UTC.
      - **location**: Ubicación del evento.
        - **latitude**: Latitud.
        - **longitude**: Longitud.
      - **speedMps**: Velocidad en metros por segundo.
    - **durationSeconds**: Duración del evento en segundos.
    - **endFrame**: Información del cuadro final.
      - **altitudeMetres**: Altitud en metros.
      - **courseRadians**: Curso en radianes.
      - **frameNumber**: Número de cuadro.
      - **frameTimeUtc**: Fecha y hora del cuadro en formato UTC.
      - **gpsTimeUtc**: