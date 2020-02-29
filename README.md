# Login con Laravel Airlock

## Acerca de este repo

Login por medio de cookies encriptadas usando Airlock, en el frontend se ha usado vue, vue-router y vuex, este ultimo para almacenar los datos del usuario logeado

## Instucciones

1. Renombrar `.env.example` a `.env`.

2. Crear una base de datos y configurar los datos de conexion en el archivo `.env`.

3. Ejecutar `composer install` y `npm install && npm run dev`.

4. Ejecutar las migraciones y seeder `php artisan migrate --seed`

5. Configurar las variables `AIRLOCK_STATEFUL_DOMAINS` y `SESSION_DOMAIN` en el archivo `.env` dependiendo de tu entorno de desarrollo.

6. Cambiar el baseURL de axios en el archivo `resources\js\helper.js` dependiendo de tu entorno de desarrollo
