export const colors = {
  dark: '#051224',
  light: '#F5F3E0',
  primaryLight: '#027C75',
  primaryDark: '#FB3640',
  hiLiteLight: 'rgba(2, 161, 153, 0.25)',
  hiLiteDark: 'rgba(251, 54, 64, 0.25)',

  otherAccents: ['#ED1C24', '#03B5AA', '#FB3640', '#F46036'],
  red: '#c90939',
  lightRed: '#f4154d',
  blue: '#1b7288',
  lightBlue: '#33b6d7',
  orange: '#EA8634',

  // twitter: '#1da1f2',
  // facebook: '#3b5998',
  // instagram: '#e1306c',
}

const fonts = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Helvetica, sans-serif`

const theme = {
  breakpoints: [32, 48, 64, 96, 128].map(w => `${w}em`),
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 16, 20, 24, 32, 48, 64, 96, 128, 160, 192],
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...colors,
    primary: colors.primaryLight,
    hiLite: colors.hiLiteLight,
    inverted: colors.white,
    accent: colors.red,
    accentBlue: colors.blue,
    accentOrange: colors.orange,

    text: colors.dark,
    background: colors.light,

    svgfilter:
      'invert(3%) sepia(5%) saturate(3045%) hue-rotate(161deg) brightness(103%) contrast(93%)',
    inversesvgfilter:
      'invert(94%) sepia(12%) saturate(86%) hue-rotate(108deg) brightness(102%) contrast(95%)',

    modes: {
      dark: {
        primary: colors.primaryDark,
        hiLite: colors.hiLiteDark,
        accentBlue: colors.lightBlue,
        inverted: colors.darker,
        text: colors.light,
        background: colors.dark,

        svgfilter:
          'invert(94%) sepia(12%) saturate(86%) hue-rotate(108deg) brightness(102%) contrast(95%)',
        inversesvgfilter:
          'invert(3%) sepia(5%) saturate(3045%) hue-rotate(161deg) brightness(103%) contrast(93%)',
      },
    },
  },
  fonts: {
    monospace: 'ui-monospace, "Roboto Mono", Menlo, Consolas, monospace',
    heading: `"Cabinet Grotesk", ui-rounded, ${fonts}`,
    body: `"Lora", ${fonts}`,
  },
  lineHeights: {
    limit: 0.875,
    title: 1,
    heading: 1.125,
    subheading: 1.25,
    caption: 1.375,
    body: 1.5,
  },
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 800,
  },
  letterSpacings: {
    title: '0.005em',
    headline: '0.01em',
  },
  sizes: {
    widePlus: 2048,
    wide: 1536,
    layoutPlus: 1200,
    layout: 1024,
    copyUltra: 980,
    copyPlus: 768,
    copy: 680,
    narrowPlus: 600,
    narrow: 512,
  },
  radii: {
    small: 3,
    default: 6,
    extra: 9,
    ultra: 18,
    circle: 99999,
  },
  shadows: {
    text: '0 1px 2px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.125)',
    small: '0 1px 2px rgba(0, 0, 0, 0.0625), 0 2px 4px rgba(0, 0, 0, 0.0625)',
    card: '0 4px 8px rgba(0, 0, 0, 0.125)',
    elevated:
      '0 1px 2px rgba(0, 0, 0, 0.0625), 0 8px 12px rgba(0, 0, 0, 0.125)',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'headline',
      mt: 0,
      mb: 0,
    },
    ultratitle: {
      fontSize: [6, 6, 7],
      lineHeight: 'title',
      fontWeight: 'heading',
      letterSpacing: 'title',
    },
    title: {
      variant: 'text.heading',
      fontFamily: 'heading',
      fontSize: [5, 5, 7],
      letterSpacing: 'title',
      lineHeight: 'title',
    },
    subtitle: {
      mt: 1,
      mb: 4,
      fontSize: [4, 4, 5],
      fontFamily: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'headline',
      lineHeight: 'subheading',
    },
    headline: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      letterSpacing: 'headline',
      lineHeight: 'heading',
      fontSize: 4,
      mt: 3,
      mb: 3,
    },
    subheadline: {
      fontFamily: 'heading',
      lineHeight: 'subheading',
      fontSize: 3,
      mt: 0,
      mb: 3,
    },
    eyebrow: {
      color: 'muted',
      fontSize: [3, 4],
      fontWeight: 'bold',
      letterSpacing: 'headline',
      lineHeight: 'subheading',
      textTransform: 'uppercase',
      mt: 0,
      mb: 2,
    },
    lead: {
      fontSize: [2, 3],
      my: [2, 3],
    },
    caption: {
      color: 'muted',
      fontSize: 1,
      letterSpacing: 'headline',
      lineHeight: 'caption',
    },
  },
  alerts: {
    primary: {
      borderRadius: 'default',
      bg: 'yellow',
      color: 'background',
      fontWeight: 'body',
      lineHeight: 'heading',
    },
  },
  badges: {
    pill: {
      borderRadius: 'circle',
      px: 3,
      py: 1,
    },
    outline: {
      borderRadius: 'circle',
      px: 3,
      py: 1,
      bg: 'transparent',
      borderStyle: 'solid',
      borderWidth: [3, 5],
      borderColor: 'currentColor',
    },
  },
  buttons: {
    primary: {
      py: 2,
      px: 3,
      textDecoration: 'none',
      display: 'inline-block',
      color: 'white',
      cursor: 'pointer',
      fontFamily: 'heading',
      fontWeight: 'bold',
      borderRadius: 'default',
      textShadow: 'none',
      boxShadow: 'card',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':focus,:hover': {
        boxShadow: 'elevated',
        transform: 'scale(1.0625)',
      },
      svg: { ml: -1, mr: 2, verticalAlign: 'middle' },
    },
    lg: {
      variant: 'buttons.primary',
      fontSize: 3,
      lineHeight: 'title',
      px: 4,
      py: 3,
    },
    outline: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'primary',
      border: '3px solid currentColor',
    },
    outlineLg: {
      variant: 'buttons.primary',
      bg: 'transparent',
      color: 'primary',
      border: '2px solid currentColor',
      lineHeight: 'title',
      fontSize: 3,
      px: 4,
      py: 3,
    },
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      overflow: 'hidden',
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra',
      'th, td': { borderColor: 'muted' },
    },
    interactive: {
      variant: 'cards.primary',
      textDecoration: 'none',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated',
      },
    },
  },
  forms: {
    input: {
      color: 'text',
      fontFamily: 'inherit',
      borderRadius: 'base',
      border: 0,
      '::-webkit-input-placeholder': { color: 'placeholder' },
      '::-moz-placeholder': { color: 'placeholder' },
      ':-ms-input-placeholder': { color: 'placeholder' },
      '&[type="search"]::-webkit-search-decoration': { display: 'none' },
    },
    textarea: { variant: 'forms.input' },
    select: { variant: 'forms.input' },
    label: {
      color: 'text',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'left',
      lineHeight: 'caption',
      fontSize: 2,
    },
  },
  layout: {
    container: {
      maxWidth: ['layout', null, 'layoutPlus'],
      width: '100%',
      mx: 'auto',
      px: 3,
    },
    wide: {
      variant: 'layout.container',
      maxWidth: ['layout', null, 'wide'],
    },
    copy: {
      variant: 'layout.container',
      maxWidth: ['copy', null, 'copyPlus'],
    },
    narrow: {
      variant: 'layout.container',
      maxWidth: ['narrow', null, 'narrowPlus'],
    },
  },
  links: {
    primary: {
      textDecoration: 'none',
      color: 'primary',
      fontWeight: 'bold',
      backgroundColor: 'background',
      backgroundPosition: '0% 0%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 200px',
      transition:
        'background-color 0.3s',
      ':hover,:focus': {
        textDecoration: 'none',
        backgroundColor: 'hiLite',
        backgroundSize: '100% 200px',
        borderRadius: '3px',
      },
    },
    big: {
      textDecoration: 'none',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: '18px',
      color: 'text',
      margin: 0,
      overflowX: 'hidden',
      minHeight: '100vh',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.eyebrow',
      fontSize: 3,
      mb: 0,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontWeight: 'body',
      lineHeight: 'body',
      my: 3,
    },
    img: {
      maxWidth: '100%',
    },
    hr: {
      border: '2px solid',
      borderColor: 'accent',
      borderRadius: 2,
      maxWidth: 256,
      mx: 'auto',
      my: 4,
    },
    a: {
      color: 'primary',
      textDecoration: 'inherit',
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'sunken',
      overflow: 'auto',
      borderRadius: 'default',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
      color: 'accent',
      bg: 'sunken',
      borderRadius: 'small',
      mx: 1,
      px: 1,
    },
    li: {
      my: 2,
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'border',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '1px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '0.5px',
    },
  },
  util: {
    motion: '@media (prefers-reduced-motion: no-preference)',
    reduceMotion: '@media (prefers-reduced-motion: reduce)',
    reduceTransparency: '@media (prefers-reduced-transparency: reduce)',
    supportsClipText: '@supports (-webkit-background-clip: text)',
    supportsBackdrop:
      '@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none)',
  },
}

theme.util.cx = c => theme.colors[c] || c
theme.util.gx = (from, to) => `radial-gradient(
  ellipse farthest-corner at top left,
  ${theme.util.cx(from)},
  ${theme.util.cx(to)}
)`
theme.util.gxText = (from, to) => ({
  color: theme.util.cx(to),
  [theme.util.supportsClipText]: {
    backgroundImage: theme.util.gx(from, to),
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
})

theme.cards.translucent = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  color: 'text',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
  },
}
theme.cards.translucentDark = {
  // variant: 'cards.primary',
  backgroundColor: 'rgba(0, 0, 0, 0.875)',
  color: 'white',
  boxShadow: 'none',
  [theme.util.supportsBackdrop]: {
    backgroundColor: 'rgba(0, 0, 0, 0.625)',
    backdropFilter: 'saturate(180%) blur(16px)',
    WebkitBackdropFilter: 'saturate(180%) blur(16px)',
  },
  [theme.util.reduceTransparency]: {
    backdropFilter: 'none',
    WebkitBackdropFilter: 'none',
  },
}

export default theme
