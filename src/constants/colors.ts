// ── Gray Scale ────────────────────────────────────────
export const gray = {
  gray50:  '#F8F8FC',
  gray100: '#F0F0F5',
  gray200: '#E4E4EC',
  gray300: '#D1D1DE',
  gray400: '#A8A8BC',
  gray500: '#84849A',
  gray600: '#606078',
  gray700: '#4A4A60',
  gray800: '#2E2E42',
  gray900: '#1A1A2E',
} as const;

export const white = '#FAFAFA';
export const black = '#000000';

// ── White Alpha ───────────────────────────────────────
export const whiteAlpha = {
  whiteAlpha5:  '#FFFFFF0D',
  whiteAlpha10: '#FFFFFF1A',
  whiteAlpha20: '#FFFFFF33',
  whiteAlpha30: '#FFFFFF4D',
  whiteAlpha50: '#FFFFFF80',
  whiteAlpha70: '#FFFFFFB3',
  whiteAlpha90: '#FFFFFFE6',
} as const;

// ── Black Alpha ───────────────────────────────────────
export const blackAlpha = {
  blackAlpha5:  '#0000000D',
  blackAlpha10: '#0000001A',
  blackAlpha20: '#00000033',
  blackAlpha30: '#0000004D',
  blackAlpha50: '#00000080',
  blackAlpha70: '#000000B3',
  blackAlpha90: '#000000E6',
} as const;

// ── Primary (Deep Indigo) ─────────────────────────────
export const primary = {
  primary50:  '#E8EAF6',
  primary100: '#C5CAE9',
  primary200: '#9FA8DA',
  primary300: '#7986CB',
  primary400: '#5C6BC0',
  primary500: '#3F51B5',
  primary600: '#3949AB',
  primary700: '#303F9F',
  primary800: '#283593',
  primary900: '#1A237E',
} as const;

// ── Secondary (Warm Amber) ────────────────────────────
export const secondary = {
  secondary50:  '#FFF8E1',
  secondary100: '#FFECB3',
  secondary200: '#FFE082',
  secondary300: '#FFD54F',
  secondary400: '#FFCA28',
  secondary500: '#FFC107',
  secondary600: '#FFB300',
  secondary700: '#FFA000',
  secondary800: '#FF8F00',
  secondary900: '#FF6F00',
} as const;

// ── Error ─────────────────────────────────────────────
export const error = {
  error50:  '#FFEBEE',
  error100: '#FFCDD2',
  error300: '#E57373',
  error500: '#F44336',
  error700: '#D32F2F',
  error900: '#B71C1C',
} as const;

// ── Warning ───────────────────────────────────────────
export const warning = {
  warning50:  '#FFF3E0',
  warning100: '#FFE0B2',
  warning300: '#FFB74D',
  warning500: '#FF9800',
  warning700: '#F57C00',
  warning900: '#E65100',
} as const;

// ── Success ───────────────────────────────────────────
export const success = {
  success50:  '#E8F5E9',
  success100: '#C8E6C9',
  success300: '#81C784',
  success500: '#4CAF50',
  success700: '#388E3C',
  success900: '#1B5E20',
} as const;

// ── 통합 Export ───────────────────────────────────────
export const colors = {
  ...gray,
  white,
  black,
  ...whiteAlpha,
  ...blackAlpha,
  ...primary,
  ...secondary,
  ...error,
  ...warning,
  ...success,
} as const;