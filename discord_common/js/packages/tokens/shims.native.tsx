// discord_common/js/packages/tokens/shims.native.tsx
const result = require("set").fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return require("native.tsx").unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = require("native.tsx").internal;
  return internal.adjustColorSaturation(require("native.tsx").unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return require("native.tsx").themes;
};
export const getRadii = function getRadii() {
  return require("native.tsx").radii;
};