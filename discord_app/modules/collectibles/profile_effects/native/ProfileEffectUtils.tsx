// === Module 9496: ProfileEffectUtils ===

// Module 9496 (ProfileEffectUtils)
import getAssetWHRatio from "getAssetWHRatio" /* 9497 */;
import size from "module_2" /* 2 */;

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