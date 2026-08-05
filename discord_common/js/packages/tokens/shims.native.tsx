// discord_common/js/packages/tokens/shims.native.tsx
import { Themes } from "native.tsx";
const result = require("set").fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return Themes.unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = Themes.internal;
  return internal.adjustColorSaturation(Themes.unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return Themes.themes;
};
export const getRadii = function getRadii() {
  return Themes.radii;
};