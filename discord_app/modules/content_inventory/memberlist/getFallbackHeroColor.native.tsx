// discord_app/modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx
const result = require("set").fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = require("../../../../discord_common/js/packages/tokens/native.tsx").internal;
  return internal.resolveSemanticColor(stateFromStores1, require("../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_SURFACE_HIGH, { saturation });
};