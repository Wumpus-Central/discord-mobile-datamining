// === Module 9213: shouldAnimate ===

// Module 9213 (shouldAnimate)
import obj132 from "obj132" /* 2 */;
import DEFAULT_PROFILE_EFFECT_WH_RATIO from "DEFAULT_PROFILE_EFFECT_WH_RATIO" /* 9214 */;

const result = obj132.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export const shouldAnimate = function shouldAnimate(aPNGPlayerControls, current) {
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
          if ((current - aPNGPlayerControls.start) % (aPNGPlayerControls.duration + loopDelay) > aPNGPlayerControls.duration) {
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