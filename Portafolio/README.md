# Mi Portafolio Web

Este es un portafolio web personalizable creado con HTML, CSS y JavaScript. Puedes usarlo como base para crear tu propio sitio web profesional.

## Estructura del Proyecto

```
/
├── index.html              # Página principal
├── css/
│   ├── styles.css          # Estilos principales
│   └── animations.css      # Animaciones
├── js/
│   └── main.js             # Funcionalidades JavaScript
├── img/                    # Carpeta para imágenes
│   ├── seccion_inicio/     # Imágenes para la sección de inicio
│   │   └── showcase.jpg    # Imagen de fondo para la sección hero
│   ├── profile.jpg         # Tu foto de perfil
│   └── projects/           # Imágenes de proyectos
│       ├── project1.jpg
│       ├── project2.jpg
│       └── project3.jpg
└── cv.pdf                  # Tu CV en formato PDF
```

## Personalización

### 1. Información Personal

Edita `index.html` para incluir tu información personal:
- Cambia "Tu Nombre" por tu nombre real
- Actualiza la descripción profesional
- Edita la sección "Sobre Mí"
- Actualiza los datos de contacto

### 2. Proyectos

Para cada proyecto que quieras mostrar:
1. Añade una imagen representativa en la carpeta `img/projects/`
2. Edita la sección de proyectos en `index.html` con:
   - Título del proyecto
   - Descripción
   - Enlaces a demo y código fuente

### 3. Habilidades

Personaliza la sección de habilidades:
1. Ajusta las categorías según tu experiencia
2. Modifica los nombres de las tecnologías
3. Cambia los porcentajes para representar tu nivel de dominio

### 4. Estilo

Para personalizar los colores:
1. Abre `css/styles.css`
2. Modifica las variables CSS en el selector `:root`:
   ```css
   :root {
     --primary-color: #3498db; /* Color principal */
     --secondary-color: #2c3e50; /* Color secundario */
     --light-color: #f4f4f4; /* Color claro */
     --dark-color: #333; /* Color oscuro */
   }
   ```

### 5. Imágenes

- Reemplaza `img/profile.jpg` con tu foto de perfil
- Coloca la imagen para la sección de inicio en `img/seccion_inicio/showcase.jpg`
- Añade imágenes de tus proyectos en `img/projects/`

## Funcionalidades

Este portafolio incluye:
- Diseño responsive para todos los dispositivos
- Navegación suave con scroll
- Menú hamburguesa para móviles
- Animaciones al hacer scroll
- Formulario de contacto

## Despliegue

Para publicar tu portafolio en Internet, puedes usar servicios gratuitos como:
- GitHub Pages
- Netlify
- Vercel

## Créditos

Diseño e implementación inspirados en las mejores prácticas de desarrollo web moderno.
