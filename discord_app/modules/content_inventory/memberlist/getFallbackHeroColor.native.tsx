// === Module 8270: getFallbackHeroColor ===

// Module 8270 (getFallbackHeroColor)
import nativeDefault from "native" /* 587 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, stateFromStores) {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation: stateFromStores });
};