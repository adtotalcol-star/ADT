<div align="center">

# ADT - Agencia Digitalizadora Total

### Sitio web corporativo de servicios digitales

[![Estado](https://img.shields.io/badge/Estado-En_Linea-brightgreen?style=for-the-badge)](https://adtotalcol-star.github.io/ADT/)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)](https://adtotalcol-star.github.io/ADT/)
[![Licencia](https://img.shields.io/badge/Licencia-Privada-lightgrey?style=for-the-badge)](#licencia)

<br>

[![VISITAR SITIO WEB](https://img.shields.io/badge/VISITAR_SITIO_WEB-GitHub_Pages-1B4079?style=for-the-badge&logo=google-chrome&logoColor=white)](https://adtotalcol-star.github.io/ADT/)

</div>

---

## Descripcion del Proyecto

Plataforma web moderna para **ADT - Agencia Digitalizadora Total**. Presenta servicios de digitalizacion para negocios, facilita el contacto por WhatsApp y ofrece una experiencia clara, responsive y profesional con modo claro y oscuro.

El sitio esta enfocado en empresas, emprendimientos y marcas que necesitan fortalecer su presencia digital mediante paginas web, tiendas online, gestion de redes sociales y posicionamiento SEO.

---

## Caracteristicas Principales

- **Diseno moderno:** interfaz limpia, animaciones suaves y experiencia responsive para movil, tablet y escritorio.
- **Modo claro/oscuro:** selector de tema con preferencia guardada en el navegador.
- **Enfoque en conversion:** botones directos a WhatsApp y formulario conectado al numero comercial.
- **Servicios con detalle:** cada servicio abre un modal con informacion ampliada y CTA personalizado.
- **Identidad visual:** logo, favicon e iconos personalizados por servicio.
- **Codigo modular:** CSS y JavaScript separados por responsabilidades.

---

## Tecnologias Utilizadas

| Componente | Tecnologia |
|:---:|:---:|
| **Frontend** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) |
| **Estilos** | ![CSS Modules](https://img.shields.io/badge/CSS-Modular-264DE4?style=flat&logo=css3&logoColor=white) ![Responsive](https://img.shields.io/badge/Responsive-Design-8FAD88?style=flat) |
| **Iconos** | ![Icons8](https://img.shields.io/badge/Icons8-117EFF?style=flat) ![Iconscout](https://img.shields.io/badge/Iconscout-3D_Icons-7F52FF?style=flat) |
| **Tipografia** | ![Google Fonts](https://img.shields.io/badge/Google_Fonts-Inter-4285F4?style=flat&logo=googlefonts&logoColor=white) |
| **Hosting** | ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-121011?style=flat&logo=github&logoColor=white) |

---

## Diagrama de Funcionamiento

```mermaid
graph LR
    U[Usuario] -->|Accede a| W[GitHub Pages]
    W -->|Sirve archivos| I[index.html]
    I -->|Carga estilos| C[CSS modular]
    I -->|Carga interacciones| J[JavaScript ES Modules]
    C --> P[Pagina completa]
    J --> P
    P -->|Contacto| WA[WhatsApp]

    style U fill:#CBDF90,stroke:#1B4079,color:#0a1628
    style W fill:#1B4079,stroke:#4D7C8A,color:#ffffff
    style P fill:#8FAD88,stroke:#1B4079,color:#0a1628
    style WA fill:#25D366,stroke:#128C7E,color:#0a1628
```

---

## Estructura del Proyecto

```text
ADT/
├── index.html              # Web principal
├── css/
│   ├── main.css            # Importa todos los estilos
│   ├── variables.css       # Colores, sombras y tema
│   ├── reset.css           # Estilos base
│   ├── layout.css          # Layout y responsive
│   ├── components.css      # Componentes UI
│   └── animations.css      # Animaciones
├── js/
│   ├── app.js              # Entrada principal
│   ├── modules/            # Modulos de secciones
│   └── utils/              # Utilidades visuales
├── components/             # Componentes HTML de referencia
├── img/                    # Logo y favicon
├── robots.txt              # Reglas para rastreadores
├── sitemap.xml             # Mapa del sitio para buscadores
├── site.webmanifest        # Configuracion web app / iconos
└── README.md               # Documentacion
```

---

## Ejecutar Localmente

```bash
python -m http.server 8000
```

Luego visita:

```text
http://localhost:8000
```

---

## SEO y Publicacion

- **URL publica:** `https://adtotalcol-star.github.io/ADT/`
- **Hosting:** GitHub Pages.
- **SEO base:** meta descripcion, canonical, Open Graph, Twitter Card, JSON-LD, favicon, `robots.txt` y `sitemap.xml`.
- **Arquitectura:** sitio sin framework y sin proceso de compilacion.

---

## Licencia

© 2026 ADT - Agencia Digitalizadora Total. Todos los derechos reservados.

<div align="center">
<br>
<p>Desarrollado para <strong>ADT - Agencia Digitalizadora Total</strong></p>
<p>
  <a href="https://adtotalcol-star.github.io/ADT/">Ver sitio web</a>
</p>
</div>
