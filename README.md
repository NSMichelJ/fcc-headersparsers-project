# Proyecto API de Request Header Parser Microservice

Este proyecto es un requisito para obtener la certificación de Full Stack Developer en Free Code Camp. El objetivo del proyecto es crear un microservicio que parsee los encabezados de una solicitud HTTP y devuelva información sobre el cliente que realizó la solicitud.

# Instrucciones:

## Para ejecutar el proyecto, siga los siguientes pasos:

Instale las dependencias ejecutando el siguiente comando:
```
npm install
```

Inicie el servidor ejecutando el siguiente comando:
```
npm start
```

El servidor se iniciará en el puerto 3000. Puede acceder al microservicio en la siguiente URL:
```
http://localhost:3000/
```

## Uso:

Para obtener información sobre los encabezados de una solicitud HTTP, envíe una solicitud GET a la ruta `/api/whoami`, La respuesta será un objeto JSON con la siguiente información:

```json
{
  "ipaddress":"::ffff:159.20.14.100",
  "language":"en-US,en;q=0.5",
  "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}
```