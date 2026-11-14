// === Module 1771: filterCSSAndStyleProperties ===

// Module 1771 (filterCSSAndStyleProperties)
import _mod1668 from "module_1668" /* 1668 */;
import smellsLikeTimingFunction from "smellsLikeTimingFunction" /* 1763 */;
import _mod1772 from "module_1772" /* 1772 */;

require = arg1;
const dependencyMap = arg6;

export function filterCSSAndStyleProperties(arg0) {
  let obj = {};
  let obj2 = {};
  const obj3 = {};
  const obj4 = {};
  let tmp3 = obj2;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp3 = obj2;
    while (keys[tmp2] !== undefined) {
      let tmp27 = arg0[tmp6];
      if (undefined === tmp27) {
        continue;
      } else {
        let obj5 = smellsLikeTimingFunction;
        if (obj5.isAnimationProp(tmp6)) {
          obj[tmp6] = tmp27;
          obj2 = tmp5;
          continue;
        } else {
          let tmp7Result = smellsLikeTimingFunction;
          if (tmp7Result.isTransitionProp(tmp6)) {
            if ("transition" === tmp6) {
              let obj6 = { transition: tmp27 };
              obj2 = obj6;
              continue;
            } else {
              tmp5[tmp6] = tmp27;
              obj2 = tmp5;
              continue;
            }
            continue;
          } else {
            let tmp7Result5 = _mod1772;
            obj2 = tmp5;
            if (tmp7Result5.isSharedValue(tmp27)) {
              continue;
            } else {
              let tmp7Result6 = smellsLikeTimingFunction;
              if (tmp7Result6.isPseudoSelectorValue(tmp27)) {
                let _default = tmp27.default;
                if (undefined !== _default) {
                  obj3[tmp6] = _default;
                }
                obj2 = tmp5;
                let keys1 = Object.keys();
                if (keys1 === undefined) {
                  continue;
                } else {
                  obj2 = tmp5;
                  let tmp16 = keys1[tmp];
                  while (tmp16 !== undefined) {
                    if ("default" === tmp16) {
                      continue;
                    } else {
                      let tmp17 = obj4[tmp16];
                      if (tmp17 == null) {
                        let obj7 = { selectorStyle: {}, defaultStyle: {} };
                        obj4[tmp16] = obj7;
                        tmp17 = obj7;
                      }
                      tmp17.selectorStyle[tmp6] = tmp27[tmp16];
                      tmp17.defaultStyle[tmp6] = _default;
                      continue;
                    }
                    continue;
                  }
                }
                continue;
              } else {
                let tmp7Result7 = _mod1668;
                if (tmp7Result7.isEmptyObject(tmp27)) {
                  let tmp7Result8 = _mod1668;
                  if (tmp7Result8.isSupportedStyleProp(tmp6)) {
                    let tmp9 = globalThis;
                    let _Error = Error;
                    let _HermesInternal = HermesInternal;
                    let str = "\": an empty object is not a valid style value.";
                    let str2 = "[Reanimated] Invalid value for \"";
                    let tmp10 = new.target;
                    let tmp11 = new.target;
                    let error = new Error("[Reanimated] Invalid value for \"" + tmp6 + "\": an empty object is not a valid style value.");
                    throw error;
                  }
                }
                obj3[tmp6] = tmp27;
                obj2 = tmp5;
                continue;
              }
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
  }
  const animationName = obj.animationName;
  if (animationName) {
    const _Array = Array;
    let tmp19 = animationName;
    if (!Array.isArray(animationName)) {
      items = [animationName];
      tmp19 = items;
    }
    let items1 = tmp19;
  } else {
    items1 = [];
  }
  let tmp20 = null;
  if (items1.length > 0) {
    tmp20 = null;
    if (items1.every((item) => {
      let tmp = "none" !== item;
      if (tmp) {
        let isCSSKeyframesRuleResult = smellsLikeTimingFunction.isCSSKeyframesRule(item);
        if (!isCSSKeyframesRuleResult) {
          isCSSKeyframesRuleResult = smellsLikeTimingFunction.isCSSKeyframesObject(item);
          const tmp2Result = smellsLikeTimingFunction;
        }
        tmp = isCSSKeyframesRuleResult;
      }
      return tmp;
    })) {
      const obj8 = {};
      const merged = Object.assign(obj);
      obj8.animationName = animationName;
      tmp20 = obj8;
    }
  }
  const items2 = [tmp20, , , ];
  let tmp24 = null;
  if (Object.keys(tmp3).length > 0) {
    tmp24 = tmp3;
  }
  items2[1] = tmp24;
  let tmp25 = null;
  if (Object.keys(obj4).length > 0) {
    tmp25 = obj4;
  }
  items2[2] = tmp25;
  items2[3] = obj3;
  return items2;
}
export function splitCSSCallbacks(arg0) {
  const obj = {};
  const obj2 = {};
  let flag = false;
  let flag2 = false;
  for (const item10018 of tmp) {
    let tmp3 = arg0[item10018];
    if (undefined !== tmp3) {
      obj[tmp2] = tmp4;
      flag = true;
    }
    continue;
  }
  for (const item10034 of tmp7) {
    let tmp9 = arg0[item10034];
    if (undefined !== tmp9) {
      obj2[tmp8] = tmp10;
      flag2 = true;
    }
    continue;
  }
  let tmp13 = null;
  if (flag) {
    tmp13 = obj;
  }
  items = [tmp13, ];
  let tmp14 = null;
  if (flag2) {
    tmp14 = obj2;
  }
  items[1] = tmp14;
  return items;
}