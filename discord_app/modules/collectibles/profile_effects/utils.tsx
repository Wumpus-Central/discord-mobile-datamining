// === Module 8491: utils ===

// Module 8491 (utils)
import _mod12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const f97537 = (acc, randomizedSources) => {
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
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(2);
  [tmp6, tmp7] = react.useState(arg0);
  _slicedToArray(react.useState(arg0), 2);
  if (cResult[0] !== arg0) {
    let tmp10 = arg0;
    if (null != arg0) {
      const tmpResult = _mod12;
      const cloneDeepResult = tmpResult.cloneDeep(arg0);
      const effects = cloneDeepResult.effects;
      const _Math = Math;
      const _Math2 = Math;
      const diff = effects.reduce(f97537, 0) - 1;
      let closure_0 = Math.floor(Math.random() * (diff + 1));
      const effects1 = cloneDeepResult.effects;
      cloneDeepResult.effects = effects1.map((randomizedSources) => {
        const tmp = null != randomizedSources.randomizedSources && randomizedSources.randomizedSources.length > 0;
        if (tmp) {
          randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
        }
        return randomizedSources;
      });
      tmp10 = cloneDeepResult;
    }
    cResult[0] = arg0;
    cResult[1] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  [tmp12, tmp13] = react.useState(tmp8);
  _slicedToArray(react.useState(tmp8), 2);
  const tmpResult3 = _mod12;
  if (!tmpResult3.isEqual(tmp6, arg0)) {
    tmp7(arg0);
    closure_0 = undefined;
    let tmp16 = arg0;
    if (null != arg0) {
      const tmpResult4 = _mod12;
      const cloneDeepResult1 = tmpResult4.cloneDeep(arg0);
      const effects2 = cloneDeepResult1.effects;
      const _Math3 = Math;
      const _Math4 = Math;
      const diff1 = effects2.reduce(f97537, 0) - 1;
      closure_0 = Math.floor(Math.random() * (diff1 + 1));
      const effects3 = cloneDeepResult1.effects;
      cloneDeepResult1.effects = effects3.map((randomizedSources) => {
        const tmp = null != randomizedSources.randomizedSources && randomizedSources.randomizedSources.length > 0;
        if (tmp) {
          randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
        }
        return randomizedSources;
      });
      tmp16 = cloneDeepResult1;
    }
    tmp13(tmp16);
  }
  return tmp12;
}) : ((arg0) => {
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  let closure_0;
  let tmp6 = arg0;
  [tmp4, tmp5] = _slicedToArray(react.useState(arg0), 2);
  const useState = react.useState;
  const tmp3 = _slicedToArray(react.useState(arg0), 2);
  if (null != arg0) {
    const obj2 = _mod12;
    const cloneDeepResult = obj2.cloneDeep(arg0);
    const effects = cloneDeepResult.effects;
    let num = 0;
    let _Math = Math;
    const _Math2 = Math;
    const diff = effects.reduce(f97537, 0) - 1;
    closure_0 = Math.floor(Math.random() * (diff + 1));
    const effects1 = cloneDeepResult.effects;
    cloneDeepResult.effects = effects1.map((randomizedSources) => {
      const tmp = null != randomizedSources.randomizedSources && randomizedSources.randomizedSources.length > 0;
      if (tmp) {
        randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
      }
      return randomizedSources;
    });
    tmp6 = cloneDeepResult;
  }
  [tmp8, tmp9] = useState(tmp6);
  _slicedToArray(useState(tmp6), 2);
  const obj = _mod12;
  if (!obj.isEqual(tmp4, arg0)) {
    tmp5(arg0);
    closure_0 = undefined;
    let tmp13 = arg0;
    if (null != arg0) {
      const tmp10Result = _mod12;
      const cloneDeepResult1 = tmp10Result.cloneDeep(arg0);
      const effects2 = cloneDeepResult1.effects;
      const _Math3 = Math;
      const _Math4 = Math;
      const diff1 = effects2.reduce(f97537, 0) - 1;
      closure_0 = Math.floor(Math.random() * (diff1 + 1));
      const effects3 = cloneDeepResult1.effects;
      cloneDeepResult1.effects = effects3.map((randomizedSources) => {
        const tmp = null != randomizedSources.randomizedSources && randomizedSources.randomizedSources.length > 0;
        if (tmp) {
          randomizedSources.src = randomizedSources.randomizedSources[closure_0].src;
        }
        return randomizedSources;
      });
      tmp13 = cloneDeepResult1;
    }
    tmp9(tmp13);
  }
  return tmp8;
});
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
export const usePotentiallyRandomizedProfileEffect = tmp2;