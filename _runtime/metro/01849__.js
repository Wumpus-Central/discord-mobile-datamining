// === Module 1849: ? ===

// Module 1849
const items = [{ code: "(function isValidRubberBandConfig_Pnpm_utilsCommonTs1(config){return!!config.rubberBandEffect&&Array.isArray(config.clamp)&&config.clamp.length===2;})" }];
[tmp2] = items;
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
isValidRubberBandConfig.__workletHash = 2508176012714;
isValidRubberBandConfig.__initData = tmp2;

export const SLOPE_FACTOR = 0.1;
export { isValidRubberBandConfig };