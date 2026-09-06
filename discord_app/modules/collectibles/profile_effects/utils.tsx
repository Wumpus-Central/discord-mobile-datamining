// === Module 8802: utils ===

// Module 8802 (utils)
import _mod12 from "module_12" /* 12 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/utils.tsx");

export const sortEffectLayers = function sortEffectLayers(effects) {
  return effects.sort((zIndex, zIndex2) => {
    let num = zIndex.zIndex;
    if (num == null) {
      num = 0;
    }
    let num2 = zIndex2.zIndex;
    if (num2 == null) {
      num2 = 0;
    }
    return num - num2;
  });
};
export const usePotentiallyRandomizedProfileEffect = function usePotentiallyRandomizedProfileEffect(arg0) {
  closure_0 = undefined;
  let tmp6 = arg0;
  [tmp4, tmp5] = _slicedToArray(noop.useState(arg0), 2);
  if (null != arg0) {
    const cloneDeepResult = _mod12.cloneDeep(arg0);
    const effects = cloneDeepResult.effects;
    let _Math = Math;
    const _Math2 = Math;
    const diff = effects.reduce((acc, randomizedSources) => {
      randomizedSources = randomizedSources.randomizedSources;
      let num;
      if (randomizedSources != null) {
        num = randomizedSources.length;
      }
      if (num == null) {
        num = 0;
      }
      let tmp = acc;
      if (num > 0) {
        let bound = num;
        if (0 !== acc) {
          const _Math = Math;
          bound = Math.min(acc, num);
        }
        tmp = bound;
      }
      return tmp;
    }, 0) - 1;
    closure_0 = Math.floor(Math.random() * (diff + 1));
    const effects1 = cloneDeepResult.effects;
    cloneDeepResult.effects = effects1.map((randomizedSources) => {
      let tmp = null != randomizedSources.randomizedSources;
      if (tmp) {
        tmp = randomizedSources.randomizedSources.length > 0;
      }
      if (tmp) {
        randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
      }
      return randomizedSources;
    });
    tmp6 = cloneDeepResult;
  }
  const tmp3 = _slicedToArray(noop.useState(arg0), 2);
  [tmp8, tmp9] = _slicedToArray(noop.useState(tmp6), 2);
  const tmp2Result = _slicedToArray(noop.useState(tmp6), 2);
  if (!obj.isEqual(tmp4, arg0)) {
    tmp5(arg0);
    closure_0 = undefined;
    let tmp13 = arg0;
    if (null != arg0) {
      const cloneDeepResult1 = _mod12.cloneDeep(arg0);
      const effects2 = cloneDeepResult1.effects;
      const _Math3 = Math;
      const _Math4 = Math;
      const diff1 = effects2.reduce((acc, randomizedSources) => {
        randomizedSources = randomizedSources.randomizedSources;
        let num;
        if (randomizedSources != null) {
          num = randomizedSources.length;
        }
        if (num == null) {
          num = 0;
        }
        let tmp = acc;
        if (num > 0) {
          let bound = num;
          if (0 !== acc) {
            const _Math = Math;
            bound = Math.min(acc, num);
          }
          tmp = bound;
        }
        return tmp;
      }, 0) - 1;
      closure_0 = Math.floor(Math.random() * (diff1 + 1));
      const effects3 = cloneDeepResult1.effects;
      cloneDeepResult1.effects = effects3.map((randomizedSources) => {
        let tmp = null != randomizedSources.randomizedSources;
        if (tmp) {
          tmp = randomizedSources.randomizedSources.length > 0;
        }
        if (tmp) {
          randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
        }
        return randomizedSources;
      });
      tmp13 = cloneDeepResult1;
      const tmp10Result = _mod12;
    }
    tmp9(tmp13);
  }
  return tmp8;
};