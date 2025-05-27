# a11yado - Accesibilidad accesible

Una guía práctica y directa sobre accesibilidad web, sin complicaciones innecesarias.

## 🎯 ¿Qué es a11yado?

a11yado es un proyecto personal que busca hacer la accesibilidad web más comprensible y práctica. En lugar de perderse en documentación extensa, aquí encontrarás:

- **Guías directas** con ejemplos visuales
- **Herramientas recomendadas** organizadas por tipo de usuario
- **Demostraciones interactivas** que muestran por qué importa la accesibilidad
- **Enlaces a documentación oficial** cuando necesites profundizar

## 🚀 Estructura del proyecto

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout principal con navegación
│   └── pages/
│       ├── index.astro           # Página de inicio
│       ├── documentation.astro   # Documentación oficial (WCAG, ADA, etc.)
│       ├── tools.astro          # Herramientas de accesibilidad
│       └── guides/
│           ├── index.astro       # Índice de guías prácticas
│           └── colors.astro      # Guía de colores y contraste
└── package.json
```

## 🛠️ Tecnología

- **Astro** - Generador de sitios estáticos
- **CSS puro** - Sin frameworks, máximo control
- **Diseño accesible** - Practicamos lo que enseñamos

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                   | Acción                                               |
| :------------------------ | :--------------------------------------------------- |
| `npm install`             | Instala las dependencias                             |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`      |
| `npm run preview`         | Previsualiza la construcción localmente              |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtiene ayuda usando el CLI de Astro                 |

## 🎨 Filosofía del proyecto

- **Simplicidad**: Sin jerga innecesaria
- **Practicidad**: Ejemplos que puedes usar inmediatamente
- **Accesibilidad**: El sitio mismo es un ejemplo de buenas prácticas
- **Complementario**: No reemplaza la documentación oficial, la hace más accesible

## 🤝 Contribuciones

Este es un proyecto personal, pero las sugerencias y correcciones son bienvenidas a través de issues en GitHub.

## 📚 Recursos adicionales

- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/) - Estándar actual
- [WebAIM](https://webaim.org/) - Recursos y herramientas
- [WAI](https://www.w3.org/WAI/) - Iniciativa de Accesibilidad Web

---

**Autor**: Francisco Cerdán  
**Repositorio**: [github.com/fracergu/a11yado](https://github.com/fracergu/a11yado)
