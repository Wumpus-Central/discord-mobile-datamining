// discord_app/modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx
import getAssetWHRatio from "getAssetWHRatio.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export function shouldAnimate(aPNGPlayerControls, current) {
  if (current >= aPNGPlayerControls.start) {
    if (!aPNGPlayerControls.loop) {
      if (current > aPNGPlayerControls.duration + aPNGPlayerControls.start) {
        return false;
      }
    }
    if (aPNGPlayerControls.loop) {
      if (undefined !== aPNGPlayerControls.loopDelay) {
        if (aPNGPlayerControls.loopDelay > 0) {
          let loopDelay;
          if (aPNGPlayerControls != null) {
            loopDelay = aPNGPlayerControls.loopDelay;
          }
          if (
            (current - aPNGPlayerControls.start) % (aPNGPlayerControls.duration + loopDelay) >
            aPNGPlayerControls.duration
          ) {
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
