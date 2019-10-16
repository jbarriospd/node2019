## Node

Node.js es un entorno en tiempo de ejecución multiplataforma de código abierto para la capa del servidor basado en el lenguaje de programación ECMAScript, asíncrono y basado en el motor V8 de Google.

Muchos proyectos utilizan Node para funcionar, como:

  - Webpack
  - Babel
  - PM2
  - Electron

## Métodos, cabeceras y estados

Métodos HTTP:

- GET: Recoger información del servidor.
- POST: Añadir información al servidor.
- PUT: Reemplazar información en el servidor.
- PATCH: Actualizar parte de la información.
- DELETE: Eliminar información del servidor.
- OPTIONS: Pedir información sobre métodos (saber si podemos ejecutar alguno de los métodos anteriores).

Las **cabeceras** serán el envío al servidor de cómo queremos hacer la petición.

Ej: En los metodos POST, PATCH Y DELETE:

- Autenticación: Asegurarte que puedes pedir cosas en el servidor
- Cache: Almacenaminto temporal.
- Inidicaciones: 
- Condiciones: 
- Cors: Compartir recursos desde diferentes origenes
- Cookies: Comparir informacion entre peticiones

Otros:
- Accept: Definir el tipo de contenido que acepta: JSON, XML etc.
  - Accept
  - Accept-Charset
  - Accept-encoding
 

Los **estados** son números que indica el estado de la petición:

- 2XX: Todo ha ido bien.
 - 200: Ok
 - 201: Creado
- 3XX: La petición se ha redirigido.
 - 301: "Moved permanently"
 - 304: "Not modified"
- 4XX: Errores del cliente.
  - 400: Bad request - Se ha enviado algo mal.
  - 401: unauthorized - no autorizado
  - 403: Forbideen - Prohibido , estas autorizdo pero no es permitido acceder a este recurso 	
  - 404: Not found
- 5XX: Ha habido un error al procesar la petición.

### Cuerpo y query de la petición

El cuerpo de la petición es la información en sí que queremos enviar, editar o que el servidor nos devuelva.

Esto puede depender de las cabeceras:

 content/type: html,css,js


Las queries van a permitirte añadir información extra a los datos que queramos enviarle al servidor, compatir datos con el frontend **Es por esto que no se debe devolver información sensible desde aqui**

Ej: yotube.com/watch**?v=jsndfud**

Estructura:

- añadir **?** añ final de la url
- nombre=valor Ej: id=
- separados con **&**

### Comenzar con node

Aramar el package.json
```
npm init
```

Instalar expres express, utilizar el metodo router de express para utilizar los metodos

```
const express = require('express');
const router = express.Router();

app.use(router);

router.get('/', function(req, res){
    res.send('GEEETTT')
});

router.post('/', function(req, res){
    res.send('POST')
});
```
iniciar en localhost en el puerto :3000
```
app.listen(3000)
```
instalar nodemon como un liveserver

```
npn i -g nodemon
```
Ejecutar 

```
nodemon server	
```

Instalar bodyParser es un modulo de express que nos permitira trabajar con el body de la peticion
```
npm i body-parser

const bodyParser = require('body-parser')
```

