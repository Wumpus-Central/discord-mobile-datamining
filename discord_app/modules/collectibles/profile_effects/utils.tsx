// discord_app/modules/collectibles/profile_effects/utils.tsx
import apply from "../../../../_runtime/00012_apply.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/utils.tsx");

export function sortEffectLayers(effects) {
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
}
export function usePotentiallyRandomizedProfileEffect(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  [tmp5, tmp6] = noop.useState(arg0);
  _slicedToArray(noop.useState(tmp), 2);
  let rounded1;
  if (null == arg0) {
    [tmp16, tmp17] = noop.useState(arg0);
    const tmp3Result = _slicedToArray(noop.useState(arg0), 2);
    if (!tmp20) {
      tmp6(arg0);
      tmp9(tmp);
      rounded1 = undefined;
      if (null == arg0) {
        tmp17(arg0);
      } else {
        const cloneDeepResult = apply.cloneDeep(arg0);
        const effects = cloneDeepResult.effects;
        let reduced = effects.reduce((acc, randomizedSources) => {
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
        }, 0);
        if (null == tmp) {
          const _Math5 = Math;
          const _Math6 = Math;
          const diff = reduced - 1;
          let rounded = Math.floor(Math.random() * (diff + 1));
        } else {
          const _Math4 = Math;
          rounded = Math.floor(tmp * reduced);
        }
        rounded1 = rounded;
        reduced = cloneDeepResult.effects;
        cloneDeepResult.effects = reduced.map((randomizedSources) => {
          let tmp = null != randomizedSources.randomizedSources;
          if (tmp) {
            tmp = randomizedSources.randomizedSources.length > 0;
          }
          if (tmp) {
            randomizedSources.src = randomizedSources.randomizedSources[rounded1].src;
          }
          return randomizedSources;
        });
        const tmp18Result = apply;
      }
    }
    return tmp16;
  } else {
    const cloneDeepResult1 = apply.cloneDeep(arg0);
    const effects1 = cloneDeepResult1.effects;
    let reduced1 = effects1.reduce((acc, randomizedSources) => {
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
    }, 0);
    if (null == tmp) {
      const _Math2 = Math;
      const _Math3 = Math;
      const diff1 = reduced1 - 1;
      rounded1 = Math.floor(Math.random() * (diff1 + 1));
    } else {
      let _Math = Math;
      rounded1 = Math.floor(tmp * reduced1);
    }
    reduced1 = cloneDeepResult1.effects;
    cloneDeepResult1.effects = reduced1.map((randomizedSources) => {
      let tmp = null != randomizedSources.randomizedSources;
      if (tmp) {
        tmp = randomizedSources.randomizedSources.length > 0;
      }
      if (tmp) {
        randomizedSources.src = randomizedSources.randomizedSources[rounded1].src;
      }
      return randomizedSources;
    });
  }
  const tmp4 = _slicedToArray(noop.useState(arg0), 2);
}
