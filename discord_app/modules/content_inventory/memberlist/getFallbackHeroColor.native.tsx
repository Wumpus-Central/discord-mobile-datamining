// discord_app/modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/content_inventory/memberlist/getFallbackHeroColor.native.tsx");

export const getFallbackHeroColor = function getFallbackHeroColor(stateFromStores1, saturation) {
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(stateFromStores1, nativeDefault.colors.BACKGROUND_SURFACE_HIGH, { saturation });
};
