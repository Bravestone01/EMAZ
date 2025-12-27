export const typography = {
  font: {
    // Must match font file names linked via react-native.config.js
    // src/assets/fonts/
    regular: "NotoSansArabic-Regular",
    medium: "NotoSansArabic-Medium",
    bold: "NotoSansArabic-Bold",

    // Display / brand
    display: "Cinzel-Bold",
    displayBold: "Cinzel-ExtraBold",
  },

  // Display (English / brand marks)
  display1: { fontFamily: "Cinzel-ExtraBold", fontSize: 34, lineHeight: 40 },
  display2: { fontFamily: "Cinzel-Bold", fontSize: 28, lineHeight: 34 },

  // Headings (Urdu/Arabic friendly)
  h1: { fontFamily: "NotoSansArabic-Bold", fontSize: 32, lineHeight: 38 },
  h2: { fontFamily: "NotoSansArabic-Bold", fontSize: 26, lineHeight: 32 },
  h3: { fontFamily: "NotoSansArabic-Medium", fontSize: 20, lineHeight: 26 },

  body: { fontFamily: "NotoSansArabic-Regular", fontSize: 14, lineHeight: 20 },
  bodyMedium: { fontFamily: "NotoSansArabic-Medium", fontSize: 14, lineHeight: 20 },
  caption: { fontFamily: "NotoSansArabic-Medium", fontSize: 12, lineHeight: 16 },

  button: {
    fontFamily: "NotoSansArabic-Bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
  },
};
