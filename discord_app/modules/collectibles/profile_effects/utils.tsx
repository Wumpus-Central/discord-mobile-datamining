// === Module 8511: sortEffectLayers ===

// Module 8511 (sortEffectLayers)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/collectibles/profile_effects/utils.tsx");

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
  let _require;
  let tmp6 = arg0;
  [tmp4, tmp5] = callback(React.useState(arg0), 2);
  if (null != arg0) {
    const cloneDeepResult = _require(12).cloneDeep(arg0);
    const effects = cloneDeepResult.effects;
    let _Math = Math;
    const _Math2 = Math;
    const diff = effects.reduce((arg0, randomizedSources) => {
      randomizedSources = randomizedSources.randomizedSources;
      let num;
      if (randomizedSources != null) {
        num = randomizedSources.length;
      }
      if (num == null) {
        num = 0;
      }
      let tmp = arg0;
      if (num > 0) {
        let bound = num;
        if (0 !== arg0) {
          const _Math = Math;
          bound = Math.min(arg0, num);
        }
        tmp = bound;
      }
      return tmp;
    }, 0) - 1;
    _require = Math.floor(Math.random() * (diff + 1));
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
    const obj2 = _require(12);
  }
  const tmp2 = callback;
  const tmp3 = callback(React.useState(arg0), 2);
  [tmp8, tmp9] = callback(React.useState(tmp6), 2);
  const tmp10 = _require;
  const tmp2Result = callback(React.useState(tmp6), 2);
  if (!obj.isEqual(tmp4, arg0)) {
    tmp5(arg0);
    _require = undefined;
    let tmp13 = arg0;
    if (null != arg0) {
      const cloneDeepResult1 = tmp10(12).cloneDeep(arg0);
      const effects2 = cloneDeepResult1.effects;
      const _Math3 = Math;
      const _Math4 = Math;
      const diff1 = effects2.reduce((arg0, randomizedSources) => {
        randomizedSources = randomizedSources.randomizedSources;
        let num;
        if (randomizedSources != null) {
          num = randomizedSources.length;
        }
        if (num == null) {
          num = 0;
        }
        let tmp = arg0;
        if (num > 0) {
          let bound = num;
          if (0 !== arg0) {
            const _Math = Math;
            bound = Math.min(arg0, num);
          }
          tmp = bound;
        }
        return tmp;
      }, 0) - 1;
      _require = Math.floor(Math.random() * (diff1 + 1));
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
      const tmp10Result = tmp10(12);
    }
    tmp9(tmp13);
  }
  return tmp8;
};