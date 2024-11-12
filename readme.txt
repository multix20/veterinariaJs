Aquí tienes el contenido del archivo `README.txt`. Puedes copiarlo y pegarlo directamente en tu proyecto:

---

```
# Veterinaria JS

Este proyecto es una aplicación backend sencilla desarrollada con **Node.js** para gestionar citas en una veterinaria. Permite registrar y leer citas almacenadas en un archivo JSON.

## Descripción
La aplicación registra información sobre las citas de atención veterinaria, incluyendo:
- Nombre del animal
- Edad
- Tipo de animal
- Color
- Enfermedad

### Archivos del proyecto
- **`index.js`**: Archivo principal para interactuar con la aplicación.
- **`operaciones.js`**: Contiene las funciones para registrar y leer citas.
- **`citas.json`**: Archivo JSON para almacenar las citas.

---

## Instalación
Sigue estos pasos para instalar y ejecutar el proyecto:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/veterinaria-js.git
   ```

2. **Accede a la carpeta del proyecto**:
   ```bash
   cd veterinaria-js
   ```

3. **Instala Node.js**:
   - Asegúrate de tener Node.js instalado en tu máquina.
   - Verifica la instalación con:
     ```bash
     node --version
     ```

4. **Inicia el proyecto**:
   No se requieren dependencias externas. Los archivos están listos para usarse.

---

## Uso
La aplicación se ejecuta desde la terminal con el comando `node index.js` seguido de la operación deseada (`registrar` o `leer`).

### Registrar una cita
Usa el siguiente comando para registrar una nueva cita:
```bash
node index.js registrar <nombre> <edad> <tipo> <color> <enfermedad>
```

#### Ejemplo:
```bash
node index.js registrar Benito "2 años" perro blanco vomitos
```

- **Salida esperada en la terminal**:
  ```
  Cita registrada con éxito: { nombre: 'Benito', edad: '2 años', tipo: 'perro', color: 'blanco', enfermedad: 'vomitos' }
  ```

- **Archivo `citas.json` actualizado**:
  ```json
  [
    {
      "nombre": "Benito",
      "edad": "2 años",
      "tipo": "perro",
      "color": "blanco",
      "enfermedad": "vomitos"
    }
  ]
  ```

### Leer las citas
Usa el siguiente comando para leer todas las citas registradas:
```bash
node index.js leer
```

#### Ejemplo:
```bash
node index.js leer
```

- **Salida esperada en la terminal**:
  ```
  Citas registradas:
  [
    {
      "nombre": "Benito",
      "edad": "2 años",
      "tipo": "perro",
      "color": "blanco",
      "enfermedad": "vomitos"
    }
  ]
  ```

---

## Estructura del proyecto
```plaintext
veterinaria-js/
├── index.js          # Archivo principal
├── operaciones.js    # Funciones de registrar y leer
├── citas.json        # Archivo JSON para almacenar las citas
└── README.md         # Documentación del proyecto
```

---

## Requerimientos cubiertos
- ✅ Ejecutar scripts con Node.js desde la terminal.
- ✅ Crear archivos con el módulo File System.
- ✅ Leer archivos con el módulo File System.
- ✅ Importar y exportar módulos en Node.js.
- ✅ Utilizar argumentos escritos por línea de comandos.

---

## Licencia
Este proyecto está bajo la [Licencia MIT](https://opensource.org/licenses/MIT).

---

## Autor
**Juan Pablo Monsalve Suazo**  
Proyecto desarrollado como parte del aprendizaje en Node.js.
```

---

