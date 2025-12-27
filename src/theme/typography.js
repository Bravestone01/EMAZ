export const typography = {
  font: {
    // Must match font file names linked via react-native.config.js
    // src/assets/fonts/NotoSansArabic-*.ttf
    regular: "NotoSansArabic-Regular",
    medium: "NotoSansArabic-Medium",
    bold: "NotoSansArabic-Bold",
  },

  h1: { fontFamily: "NotoSansArabic-Bold", fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: "NotoSansArabic-Bold", fontSize: 26, lineHeight: 32 },
  h3: { fontFamily: "NotoSansArabic-Medium", fontSize: 20, lineHeight: 26 },

  body: { fontFamily: "NotoSansArabic-Regular", fontSize: 14, lineHeight: 20 },
  bodyMedium: { fontFamily: "NotoSansArabic-Medium", fontSize: 15, lineHeight: 22 },

  button: { fontFamily: "NotoSansArabic-Bold", fontSize: 15, letterSpacing: 1 },
  caption: { fontFamily: "NotoSansArabic-Regular", fontSize: 12, lineHeight: 16 },
};
