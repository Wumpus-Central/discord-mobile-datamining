// discord_common/js/packages/tokens/shims.native.tsx
import set from "../../../../_runtime/00002_set.js";
import ThemesDefault from "native.tsx";

const result = set.fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

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