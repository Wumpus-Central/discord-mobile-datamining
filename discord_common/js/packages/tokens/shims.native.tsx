const result = require("set").fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return importDefault(712).unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = importDefault(712).internal;
  return internal.adjustColorSaturation(importDefault(712).unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return importDefault(712).themes;
};
export const getRadii = function getRadii() {
  return importDefault(712).radii;
};