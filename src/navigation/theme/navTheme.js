import { colors, typography, spacing, radius, shadows } from "../../theme";

const navFonts = {
  regular: { fontFamily: typography.font.regular, fontWeight: "normal" },
  medium: { fontFamily: typography.font.medium, fontWeight: "500" },
  bold: { fontFamily: typography.font.bold, fontWeight: "700" },
  heavy: { fontFamily: typography.font.bold, fontWeight: "800" },
};

export const navTheme = {
  dark: true,

  colors: {
    primary: colors.brand.primary,
    background: colors.background.app,
    card: colors.background.surface,
    text: colors.text.primary,
    border: colors.ui.border,
    notification: colors.brand.accent,
  },

  // extra safe tokens
  brand: colors.brand,
  backgroundTokens: colors.background,
  textTokens: colors.text,
  ui: colors.ui,
  state: colors.state,

  typography,
  fonts: navFonts,
  spacing,
  radius,
  shadows,
};
