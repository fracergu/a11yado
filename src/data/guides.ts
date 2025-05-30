export interface Guide {
  id: string;
  title: string;
  description: string;
  topics: string[];
  status: "available" | "coming-soon";
  href?: string;
  category: string;
}

export interface GuideSection {
  id: string;
  title: string;
  description: string;
  guides: Guide[];
}

export const guidesData: GuideSection[] = [
  {
    id: "visual-foundations",
    title: "Fundamentos Visuales",
    description:
      "Aspectos básicos de accesibilidad que afectan la percepción visual del contenido.",
    guides: [
      {
        id: "colors-contrast",
        title: "Colores y Contraste",
        description:
          "Aprende a usar colores con contraste adecuado para que todos puedan leer tu contenido. Incluye ejemplos prácticos y herramientas.",
        topics: ["Ratios de contraste", "Independencia de color", "Daltonismo"],
        status: "available",
        href: "/a11yado/guides/colors",
        category: "visual",
      },
      {
        id: "accessible-typography",
        title: "Tipografía Accesible",
        description:
          "Tamaños de fuente, espaciado, legibilidad y cómo elegir tipografías que funcionen para todos los usuarios.",
        topics: ["Tamaños mínimos", "Interlineado", "Fuentes legibles"],
        status: "available",
        href: "/a11yado/guides/typography",
        category: "visual",
      },
      {
        id: "responsive-design",
        title: "Diseño Responsivo Accesible",
        description:
          "Cómo crear diseños que funcionen en todos los dispositivos y tamaños de pantalla de forma accesible.",
        topics: [
          "Breakpoints accesibles",
          "Áreas de toque",
          "Orientación de pantalla",
        ],
        status: "coming-soon",
        category: "visual",
      },
    ],
  },
  {
    id: "interaction-navigation",
    title: "Interacción y Navegación",
    description:
      "Cómo hacer tu sitio navegable y usable para todos los usuarios.",
    guides: [
      {
        id: "focus-states",
        title: "Estados de Foco",
        description:
          "Las 4 reglas oficiales de WCAG para crear estados de foco accesibles que funcionen para todos los usuarios de teclado.",
        topics: [
          "Indicadores visibles",
          "Outline y contraste",
          "Navegación por teclado",
        ],
        status: "available",
        href: "/a11yado/guides/focus-states",
        category: "interaction",
      },
      {
        id: "hover-states",
        title: "Estados Hover",
        description:
          "Las 6 preguntas reveladoras para crear estados hover accesibles y consistentes con la navegación por teclado.",
        topics: [
          "Dispositivos táctiles",
          "Consistencia hover/focus",
          "Señalizadores apropiados",
        ],
        status: "available",
        href: "/a11yado/guides/hover-states",
        category: "interaction",
      },
      {
        id: "buttons-links",
        title: "Botones y Enlaces",
        description:
          "Cómo escribir texto claro y descriptivo para botones y enlaces que comunique efectivamente la acción o destino.",
        topics: [
          "Texto descriptivo",
          "Frontloading",
          "Señalizadores efectivos",
        ],
        status: "available",
        href: "/a11yado/guides/buttons-links",
        category: "interaction",
      },
      {
        id: "button-styling",
        title: "Estilizado de Botones",
        description:
          "Las 7 técnicas clave para hacer botones que se vean claramente interactivos y comuniquen su función de forma inmediata.",
        topics: [
          "Jerarquía visual",
          "Targets táctiles",
          "Formas y señalizadores",
        ],
        status: "available",
        href: "/a11yado/guides/button-styling",
        category: "interaction",
      },
      {
        id: "link-styling",
        title: "Estilizado de Enlaces",
        description:
          "Cómo hacer que los enlaces sean visualmente distinguibles del texto normal y consistentes entre sí, usando técnicas accesibles.",
        topics: [
          "Subrayado y color",
          "Indicadores visuales",
          "Colores luminosos",
        ],
        status: "available",
        href: "/a11yado/guides/link-styling",
        category: "interaction",
      },
      {
        id: "keyboard-navigation",
        title: "Navegación por Teclado",
        description:
          "Orden de tabulación, enlaces de salto y técnicas avanzadas para navegación completa por teclado.",
        topics: ["Orden de tabulación", "Skip links", "Trampas de teclado"],
        status: "available",
        href: "/a11yado/guides/keyboard-navigation",
        category: "interaction",
      },
      {
        id: "menus-navigation",
        title: "Menús y Navegación",
        description:
          "Crear menús de navegación accesibles, migas de pan, y sistemas de navegación complejos.",
        topics: ["Menús desplegables", "Navegación móvil", "Migas de pan"],
        status: "coming-soon",
        category: "interaction",
      },
    ],
  },
  {
    id: "forms-data",
    title: "Formularios e Entrada de Datos",
    description:
      "Cómo crear formularios que sean fáciles de usar y accesibles para todos.",
    guides: [
      {
        id: "accessible-forms",
        title: "Formularios Accesibles",
        description:
          "Etiquetas, validación, mensajes de error y cómo estructurar formularios para que sean accesibles.",
        topics: [
          "Etiquetas apropiadas",
          "Validación accesible",
          "Mensajes de error",
        ],
        status: "coming-soon",
        category: "forms",
      },
      {
        id: "input-components",
        title: "Componentes de Entrada",
        description:
          "Checkboxes, botones de radio, selects, selectores de fecha y otros componentes accesibles de entrada de datos.",
        topics: [
          "Inputs personalizados",
          "Retroalimentación visual",
          "Estados de validación",
        ],
        status: "coming-soon",
        category: "forms",
      },
    ],
  },
  {
    id: "content-structure",
    title: "Contenido y Estructura",
    description: "Cómo organizar y presentar contenido de forma accesible.",
    guides: [
      {
        id: "semantic-structure",
        title: "Estructura Semántica",
        description:
          "Usar HTML semántico correctamente: encabezados, landmarks, listas y otros elementos estructurales.",
        topics: [
          "Jerarquía de encabezados",
          "Landmarks ARIA",
          "Elementos semánticos",
        ],
        status: "coming-soon",
        category: "content",
      },
      {
        id: "images-multimedia",
        title: "Imágenes y Multimedia",
        description:
          "Texto alternativo, imágenes decorativas, videos accesibles, transcripciones y subtítulos.",
        topics: [
          "Texto alt efectivo",
          "Imágenes decorativas",
          "Multimedia accesible",
        ],
        status: "coming-soon",
        category: "content",
      },
      {
        id: "data-tables",
        title: "Tablas de Datos",
        description:
          "Crear tablas accesibles con encabezados apropiados, título descriptivo y estructura clara para lectores de pantalla.",
        topics: [
          "Encabezados de tabla",
          "Título descriptivo",
          "Tablas complejas",
        ],
        status: "coming-soon",
        category: "content",
      },
    ],
  },
];

export const getAllGuides = (): Guide[] => {
  return guidesData.flatMap((section) => section.guides);
};

export const getGuidesByStatus = (
  status: "available" | "coming-soon",
): Guide[] => {
  return getAllGuides().filter((guide) => guide.status === status);
};

export const getGuideById = (id: string): Guide | undefined => {
  return getAllGuides().find((guide) => guide.id === id);
};

export const getGuidesByCategory = (category: string): Guide[] => {
  return getAllGuides().filter((guide) => guide.category === category);
};
