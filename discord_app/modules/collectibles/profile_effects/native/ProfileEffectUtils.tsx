// discord_app/modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx
import getAssetWHRatio from "getAssetWHRatio.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export function shouldAnimate(start, current) {
  if (current >= start.start) {
    if (!start.loop) {
      if (current > start.duration + start.start) {
        return false;
      }
    }
    if (start.loop) {
      if (undefined !== start.loopDelay) {
        if (start.loopDelay > 0) {
          let loopDelay;
          if (start != null) {
            loopDelay = start.loopDelay;
          }
          if ((current - start.start) % (start.duration + loopDelay) > start.duration) {
            return false;
          }
        }
      }
    }
    return true;
  } else {
    return false;
  }
}
export function calculateProfileEffectHeight(layerConfig, width) {
  return width / getAssetWHRatio.getAssetWHRatio(layerConfig);
}
