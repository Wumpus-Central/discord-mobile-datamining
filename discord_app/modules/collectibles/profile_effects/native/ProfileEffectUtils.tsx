// === Module 8526: shouldAnimate ===

// Module 8526 (shouldAnimate)
import set from "set" /* 2 */;
import DEFAULT_PROFILE_EFFECT_WH_RATIO from "DEFAULT_PROFILE_EFFECT_WH_RATIO" /* 8527 */;

const result = set.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export const shouldAnimate = function shouldAnimate(start, current) {
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
};
export const calculateProfileEffectHeight = function calculateProfileEffectHeight(layerConfig, width) {
  return width / DEFAULT_PROFILE_EFFECT_WH_RATIO.getAssetWHRatio(layerConfig);
};