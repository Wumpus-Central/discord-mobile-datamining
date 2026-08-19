// === Module 711: unsafe_getRawColor ===

// Module 711 (unsafe_getRawColor)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;

const result = obj132.fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return ThemesDefault.unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = ThemesDefault.internal;
  return internal.adjustColorSaturation(ThemesDefault.unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return ThemesDefault.themes;
};
export const getRadii = function getRadii() {
  return ThemesDefault.radii;
};