// === Module 8461: getAssetWHRatio ===

// Module 8461 (getAssetWHRatio)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/getAssetWHRatio.tsx");

export const DEFAULT_PROFILE_EFFECT_WH_RATIO = 0.5113636363636364;
export const getAssetWHRatio = function getAssetWHRatio(width) {
  return (width.width ?? 450) / (width.height ?? 880);
};