// === Module 574: shims ===

// Module 574 (shims)
import nativeDefault from "native" /* 575 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/tokens/shims.native.tsx");

export function unsafe_getRawColor(RED_400) {
  return nativeDefault.unsafe_rawColors[RED_400];
}
export function unsafe_getResolvedRawColor(BRAND_500, saturation) {
  const internal = nativeDefault.internal;
  return internal.adjustColorSaturation(nativeDefault.unsafe_rawColors[BRAND_500], saturation.saturation, "generic");
}
export function getThemes() {
  return nativeDefault.themes;
}
export function getRadii() {
  return nativeDefault.radii;
}