// discord_app/modules/collectibles/profile_effects/native/getAssetWHRatio.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/getAssetWHRatio.tsx");

export const DEFAULT_PROFILE_EFFECT_WH_RATIO = 0.5113636363636364;
export const getAssetWHRatio = function getAssetWHRatio(width) {
  let num = width.width;
  if (null == num) {
    num = 450;
  }
  let num3 = width.height;
  if (null == num3) {
    num3 = 880;
  }
  return num / num3;
};
