// === Module 8052: getFallbackHeroColor ===

// Module 8052 (getFallbackHeroColor)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 709 */;

const result = set.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = ThemesDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation });
};