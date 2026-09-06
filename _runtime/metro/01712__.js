// === Module 1712: ? ===

// Module 1712
import module_1639 from "module_1639" /* 1639 */;

let num = 1;
if (module_1639.isWeb()) {
  num = 0.05;
}
function isValidRubberBandConfig(rubberBandEffect) {
  let isArray = rubberBandEffect.rubberBandEffect;
  if (isArray) {
    const _Array = Array;
    isArray = Array.isArray(rubberBandEffect.clamp);
  }
  if (isArray) {
    isArray = 2 === rubberBandEffect.clamp.length;
  }
  return isArray;
}
isValidRubberBandConfig.__closure = {};
isValidRubberBandConfig.__workletHash = 5674674993606;
isValidRubberBandConfig.__initData = { code: "function isValidRubberBandConfig_Pnpm_utilsTs1(config){return!!config.rubberBandEffect&&Array.isArray(config.clamp)&&config.clamp.length===2;}" };

export const VELOCITY_EPS = num;
export const SLOPE_FACTOR = 0.1;
export { isValidRubberBandConfig };