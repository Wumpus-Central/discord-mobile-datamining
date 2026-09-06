// === Module 8804: ProfileEffectUtils ===

// Module 8804 (ProfileEffectUtils)
import getAssetWHRatio from "getAssetWHRatio" /* 8805 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/ProfileEffectUtils.tsx");

export const shouldAnimate = function shouldAnimate(entering, current) {
  if (current >= entering.start) {
    if (!entering.loop) {
      if (current > entering.duration + entering.start) {
        return false;
      }
    }
    if (entering.loop) {
      if (undefined !== entering.loopDelay) {
        if (entering.loopDelay > 0) {
          let loopDelay;
          if (entering != null) {
            loopDelay = entering.loopDelay;
          }
          if ((current - entering.start) % (entering.duration + loopDelay) > entering.duration) {
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
  return width / getAssetWHRatio.getAssetWHRatio(layerConfig);
};