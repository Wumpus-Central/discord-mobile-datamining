// _runtime/01880_filterCSSProps.js
import smellsLikeTimingFunction from "01760_smellsLikeTimingFunction.js";

require = arg1;
const dependencyMap = arg6;

export function filterCSSProps(props) {
  const obj = {};
  for (const key10005 in arg0) {
    let obj3 = smellsLikeTimingFunction;
    if (obj3.isCSSCallbackProp(key10005)) {
      continue;
    } else {
      obj[key10005] = arg0[key10005];
      continue;
    }
    continue;
  }
  if ("style" in props) {
    const style = props.style;
    const _Array = Array;
    if (Array.isArray(style)) {
      let mapped = style.map((arr) => {
        if (Array.isArray(arr)) {
          let mapped = arr.map((arr) => {
            if (Array.isArray(arr)) {
              let mapped = arr.map((arr) => {
                if (Array.isArray(arr)) {
                  let mapped = arr.map((arr) => {
                    if (Array.isArray(arr)) {
                      let mapped = arr.map(/* F83312 */ function() { ... });
                    } else {
                      mapped = arr;
                      if (arr) {
                        mapped = arr;
                        if (typeof arr === "object") {
                          let obj = {};
                          mapped = obj;
                          let keys = Object.keys();
                          if (keys !== undefined) {
                            mapped = obj;
                            while (keys[tmp] !== undefined) {
                              let obj3 = closure_1_0(closure_1_1[0]);
                              if (obj3.isCSSConfigProp(tmp3)) {
                                continue;
                              } else {
                                let tmp4 = arr[tmp3];
                                let tmp8Result = closure_1_0(closure_1_1[0]);
                                if (tmp8Result.isPseudoSelectorValue(tmp4)) {
                                  let _default = tmp4.default;
                                  if (undefined === _default) {
                                    continue;
                                  } else {
                                    obj[tmp3] = _default;
                                    continue;
                                  }
                                  continue;
                                } else {
                                  obj[tmp3] = tmp4;
                                  continue;
                                }
                                continue;
                              }
                              continue;
                            }
                          }
                        }
                      }
                    }
                    return mapped;
                  });
                } else {
                  mapped = arr;
                  if (arr) {
                    mapped = arr;
                    if (typeof arr === "object") {
                      let obj = {};
                      mapped = obj;
                      let keys = Object.keys();
                      if (keys !== undefined) {
                        mapped = obj;
                        while (keys[tmp] !== undefined) {
                          let obj3 = closure_1_0(closure_1_1[0]);
                          if (obj3.isCSSConfigProp(tmp3)) {
                            continue;
                          } else {
                            let tmp4 = arr[tmp3];
                            let tmp8Result = closure_1_0(closure_1_1[0]);
                            if (tmp8Result.isPseudoSelectorValue(tmp4)) {
                              let _default = tmp4.default;
                              if (undefined === _default) {
                                continue;
                              } else {
                                obj[tmp3] = _default;
                                continue;
                              }
                              continue;
                            } else {
                              obj[tmp3] = tmp4;
                              continue;
                            }
                            continue;
                          }
                          continue;
                        }
                      }
                    }
                  }
                }
                return mapped;
              });
            } else {
              mapped = arr;
              if (arr) {
                mapped = arr;
                if (typeof arr === "object") {
                  let obj = {};
                  mapped = obj;
                  let keys = Object.keys();
                  if (keys !== undefined) {
                    mapped = obj;
                    while (keys[tmp] !== undefined) {
                      let obj3 = closure_1_0(closure_1_1[0]);
                      if (obj3.isCSSConfigProp(tmp3)) {
                        continue;
                      } else {
                        let tmp4 = arr[tmp3];
                        let tmp8Result = closure_1_0(closure_1_1[0]);
                        if (tmp8Result.isPseudoSelectorValue(tmp4)) {
                          let _default = tmp4.default;
                          if (undefined === _default) {
                            continue;
                          } else {
                            obj[tmp3] = _default;
                            continue;
                          }
                          continue;
                        } else {
                          obj[tmp3] = tmp4;
                          continue;
                        }
                        continue;
                      }
                      continue;
                    }
                  }
                }
              }
            }
            return mapped;
          });
        } else {
          mapped = arr;
          if (arr) {
            mapped = arr;
            if (typeof arr === "object") {
              let obj = {};
              mapped = obj;
              let keys = Object.keys();
              if (keys !== undefined) {
                mapped = obj;
                while (keys[tmp] !== undefined) {
                  let obj3 = closure_1_0(closure_1_1[0]);
                  if (obj3.isCSSConfigProp(tmp3)) {
                    continue;
                  } else {
                    let tmp4 = arr[tmp3];
                    let tmp8Result = closure_1_0(closure_1_1[0]);
                    if (tmp8Result.isPseudoSelectorValue(tmp4)) {
                      let _default = tmp4.default;
                      if (undefined === _default) {
                        continue;
                      } else {
                        obj[tmp3] = _default;
                        continue;
                      }
                      continue;
                    } else {
                      obj[tmp3] = tmp4;
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
              }
            }
          }
        }
        return mapped;
      });
    } else {
      mapped = style;
      if (style) {
        mapped = style;
        if (typeof style === "object") {
          const obj2 = {};
          mapped = obj2;
          const keys = Object.keys();
          if (keys !== undefined) {
            mapped = obj2;
            while (keys[tmp] !== undefined) {
              let obj5 = smellsLikeTimingFunction;
              if (obj5.isCSSConfigProp(tmp4)) {
                continue;
              } else {
                let tmp5 = style[tmp4];
                let tmp12Result = smellsLikeTimingFunction;
                if (tmp12Result.isPseudoSelectorValue(tmp5)) {
                  let _default = tmp5.default;
                  if (undefined === _default) {
                    continue;
                  } else {
                    obj2[tmp4] = _default;
                    continue;
                  }
                  continue;
                } else {
                  obj2[tmp4] = tmp5;
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        }
      }
    }
    obj.style = mapped;
  }
  return obj;
}