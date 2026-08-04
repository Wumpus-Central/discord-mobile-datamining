// discord_app/modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx
const result = require("set").fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = importDefault(712).internal;
  return internal.resolveSemanticColor(stateFromStores1, importDefault(712).colors.BACKGROUND_SURFACE_HIGH, { saturation });
};