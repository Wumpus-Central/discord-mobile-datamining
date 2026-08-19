// discord_app/modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";

const result = obj132.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = ThemesDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation });
};