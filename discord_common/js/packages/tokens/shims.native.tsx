// discord_common/js/packages/tokens/shims.native.tsx
import nativeDefault from "native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export const unsafe_getRawColor = function unsafe_getRawColor(RED_400) {
  return nativeDefault.unsafe_rawColors[RED_400];
};
export const unsafe_getResolvedRawColor = function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = nativeDefault.internal;
  return internal.adjustColorSaturation(nativeDefault.unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
};
export const getThemes = function getThemes() {
  return nativeDefault.themes;
};
export const getRadii = function getRadii() {
  return nativeDefault.radii;
};
