# Ejercicio 2: API con Express

## Crear un servidor básico con Express

### Rutas a manejar:

- **GET /user**: que lean un archivo llamado user y devuelvan el contenido, si el archivo no existe que devuelva un not found.

- **POST /user**: que reciba datos JSON y lo graben en un archivo llamado user (si mando multiples posts, debo ir agregando datos al archivo)

- **PUT /user**: que reciba datos JSON y que actualice el user

- **DELETE /user**: que elimine el archivo del user

- Maneja una ruta 404 que devuelva un mensaje de error cuando se intente acceder a una ruta inexistente.

### Challenge especial:

- Guardar cada usuario en el archivo con la siguiente sintaxis: `ID|user|password`. Mantener un usuario por línea en el archivo. Ejemplo:

  ```
  1|Ezequiel|mySuperSecretPassword
  2|Luiggi|LuiggisSuperSecretPassword
  3|BlaBla|password
  ```

- **GET /user**: Enviar por query string el ID del usuario que se quiere obtener. Leer el archivo y devolver solo la información de ese usuario.
- **PUT /user**: Enviar por body el ID del usuario a actualizar y actualizar solo los datos de ese usuario en el archivo.
- **DELETE /user**: Enviar por body el ID del usuario a eliminar y borrar solo ese usuario del archivo.
