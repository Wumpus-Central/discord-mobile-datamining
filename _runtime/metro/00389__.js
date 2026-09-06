// === Module 389: ? ===

// Module 389
import nullthrowsDefault from "nullthrows" /* 70 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import _assertNativeAnimatedModuleDefault from "_assertNativeAnimatedModule" /* 367 */;
import _mod382 from "module_382" /* 382 */;
import AnimatedEvent from "AnimatedEvent" /* 384 */;
import noop from "module_19" /* 19 */;

function createCompositeKeyForProps(arg0, style) {
  const keys = Object.keys(arg0);
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < keys.length) {
    do {
      let tmp3 = keys[num];
      let arr2 = arg0[tmp3];
      if (null == style) {
        if ("style" === tmp3) {
          let tmp45 = flattenStyleDefault(arr2);
          if (null != tmp45) {
            style = undefined;
            if (style != null) {
              style = style.style;
            }
            let tmp46Result = createCompositeKeyForObject(tmp45, style);
          }
        } else {
          tmp46Result = arr2;
          if (!(arr2 instanceof _assertNativeAnimatedModuleDefault)) {
            tmp46Result = arr2;
            if (!(arr2 instanceof AnimatedEvent.AnimatedEvent)) {
              let _Array = Array;
              if (Array.isArray(arr2)) {
                let tmp12 = arr2;
                if (null != style) {
                  let length3 = arr2.length;
                  let num3 = 0;
                  let tmp41 = null;
                  let tmp42 = null;
                  if (0 < length3) {
                    do {
                      let arr3 = arr2[num3];
                      let tmp17 = arr3;
                      if (!(arr3 instanceof _assertNativeAnimatedModuleDefault)) {
                        let _Array2 = Array;
                        if (Array.isArray(arr3)) {
                          let length2 = arr3.length;
                          let num2 = 0;
                          let tmp20 = null;
                          let tmp21 = null;
                          if (0 < length2) {
                            do {
                              let tmp22 = arr3[num2];
                              let tmp27 = tmp22;
                              if (!(tmp22 instanceof _assertNativeAnimatedModuleDefault)) {
                                let _Array3 = Array;
                                if (Array.isArray(tmp22)) {
                                  tmp27 = createCompositeKeyForArray(tmp22);
                                } else {
                                  let obj3 = _mod382;
                                  if (obj3.isPlainObject(tmp22)) {
                                    tmp27 = createCompositeKeyForObject(tmp22);
                                  }
                                }
                              }
                              let tmp31 = tmp20;
                              if (null != tmp27) {
                                let fillResult = tmp20;
                                if (null == tmp20) {
                                  let _Array4 = Array;
                                  let tmp33 = new.target;
                                  let tmp34 = new.target;
                                  let array = new Array(arr3.length);
                                  fillResult = array.fill(null);
                                }
                                fillResult[num2] = tmp27;
                                tmp31 = fillResult;
                              }
                              num2 = num2 + 1;
                              tmp20 = tmp31;
                              tmp21 = tmp31;
                            } while (num2 < length2);
                          }
                          tmp17 = tmp21;
                        } else {
                          let obj2 = _mod382;
                          if (obj2.isPlainObject(arr3)) {
                            tmp17 = createCompositeKeyForObject(arr3);
                          }
                        }
                      }
                      let tmp36 = tmp41;
                      if (null != tmp17) {
                        let fillResult1 = tmp41;
                        if (null == tmp41) {
                          let _Array5 = Array;
                          let tmp38 = new.target;
                          let tmp39 = new.target;
                          array = new Array(arr2.length);
                          fillResult1 = array.fill(null);
                        }
                        fillResult1[num3] = tmp17;
                        tmp36 = fillResult1;
                      }
                      num3 = num3 + 1;
                      tmp41 = tmp36;
                      tmp42 = tmp36;
                    } while (num3 < length3);
                  }
                  tmp12 = tmp42;
                }
                tmp46Result = tmp12;
              } else {
                let tmp8Result = _mod382;
                if (tmp8Result.isPlainObject(arr2)) {
                  let tmp10 = arr2;
                  if (null != style) {
                    tmp10 = createCompositeKeyForObject(arr2);
                  }
                  tmp46Result = tmp10;
                }
              }
            }
          }
        }
        let tmp7 = tmp;
        if (null != tmp46Result) {
          let obj = tmp;
          if (null == tmp) {
            obj = {};
          }
          obj[tmp3] = tmp46Result;
          tmp7 = obj;
        }
      } else {
        tmp7 = tmp;
      }
      num = num + 1;
      tmp = tmp7;
      tmp2 = tmp7;
    } while (num < length);
  }
  return tmp2;
}
function createCompositeKeyForArray(arg0) {
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < arg0.length) {
    do {
      let tmp3 = arg0[num];
      let tmp8 = tmp3;
      if (!(tmp3 instanceof _assertNativeAnimatedModuleDefault)) {
        let _Array = Array;
        if (Array.isArray(tmp3)) {
          tmp8 = createCompositeKeyForArray(tmp3);
        } else {
          let obj = _mod382;
          if (obj.isPlainObject(tmp3)) {
            tmp8 = createCompositeKeyForObject(tmp3);
          }
        }
      }
      let tmp12 = tmp;
      if (null != tmp8) {
        let fillResult = tmp;
        if (null == tmp) {
          let _Array2 = Array;
          let tmp14 = new.target;
          let tmp15 = new.target;
          let array = new Array(arg0.length);
          fillResult = array.fill(null);
        }
        fillResult[num] = tmp8;
        tmp12 = fillResult;
      }
      num = num + 1;
      tmp = tmp12;
      tmp2 = tmp12;
    } while (num < length);
  }
  return tmp2;
}
function createCompositeKeyForObject(arr2, D) {
  const keys = Object.keys(arr2);
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < keys.length) {
    do {
      let tmp3 = keys[num];
      if (null == D) {
        arr2 = arr2[tmp3];
        let tmp10 = arr2;
        if (!(arr2 instanceof _assertNativeAnimatedModuleDefault)) {
          let _Array = Array;
          if (Array.isArray(arr2)) {
            let length2 = arr2.length;
            let num2 = 0;
            let tmp13 = null;
            let tmp14 = null;
            if (0 < length2) {
              do {
                let arr3 = arr2[num2];
                let tmp19 = arr3;
                if (!(arr3 instanceof _assertNativeAnimatedModuleDefault)) {
                  let _Array2 = Array;
                  if (Array.isArray(arr3)) {
                    let length3 = arr3.length;
                    let num3 = 0;
                    let tmp22 = null;
                    let tmp23 = null;
                    if (0 < length3) {
                      do {
                        let tmp24 = arr3[num3];
                        let tmp29 = tmp24;
                        if (!(tmp24 instanceof _assertNativeAnimatedModuleDefault)) {
                          let _Array3 = Array;
                          if (Array.isArray(tmp24)) {
                            tmp29 = createCompositeKeyForArray(tmp24);
                          } else {
                            let obj3 = _mod382;
                            if (obj3.isPlainObject(tmp24)) {
                              tmp29 = createCompositeKeyForObject(tmp24);
                            }
                          }
                        }
                        let tmp33 = tmp22;
                        if (null != tmp29) {
                          let fillResult = tmp22;
                          if (null == tmp22) {
                            let _Array4 = Array;
                            let tmp35 = new.target;
                            let tmp36 = new.target;
                            let array = new Array(arr3.length);
                            fillResult = array.fill(null);
                          }
                          fillResult[num3] = tmp29;
                          tmp33 = fillResult;
                        }
                        num3 = num3 + 1;
                        tmp22 = tmp33;
                        tmp23 = tmp33;
                      } while (num3 < length3);
                    }
                    tmp19 = tmp23;
                  } else {
                    let obj2 = _mod382;
                    if (obj2.isPlainObject(arr3)) {
                      tmp19 = createCompositeKeyForObject(arr3);
                    }
                  }
                }
                let tmp38 = tmp13;
                if (null != tmp19) {
                  let fillResult1 = tmp13;
                  if (null == tmp13) {
                    let _Array5 = Array;
                    let tmp40 = new.target;
                    let tmp41 = new.target;
                    array = new Array(arr2.length);
                    fillResult1 = array.fill(null);
                  }
                  fillResult1[num2] = tmp19;
                  tmp38 = fillResult1;
                }
                num2 = num2 + 1;
                tmp13 = tmp38;
                tmp14 = tmp38;
              } while (num2 < length2);
            }
            tmp10 = tmp14;
          } else {
            let obj = _mod382;
            if (obj.isPlainObject(arr2)) {
              tmp10 = createCompositeKeyForObject(arr2);
            }
          }
        }
        let tmp7 = tmp;
        if (null != tmp10) {
          obj = tmp;
          if (null == tmp) {
            obj = {};
          }
          obj[tmp3] = tmp10;
          tmp7 = obj;
        }
      } else {
        tmp7 = tmp;
      }
      num = num + 1;
      tmp = tmp7;
      tmp2 = tmp7;
    } while (num < length);
  }
  return tmp2;
}
function areCompositeKeysEqual(arg0, D, arg2) {
  if (arg0 === D) {
    return true;
  } else {
    if (null !== arg0) {
      if (null !== D) {
        const _Object = Object;
        const keys = Object.keys(arg0);
        const _Object2 = Object;
        if (keys.length !== Object.keys(D).length) {
          return false;
        } else {
          let num = 0;
          if (0 < length) {
            while (fn(D, keys[num])) {
              let tmp4 = arg0[tmp];
              let tmp5 = D[tmp];
              if ("style" === tmp) {
                if (!areCompositeKeyComponentsEqual(tmp4, tmp5)) {
                  let flag5 = false;
                  return false;
                }
              } else {
                if (!(tmp4 instanceof _assertNativeAnimatedModuleDefault)) {
                  if (!(tmp4 instanceof AnimatedEvent.AnimatedEvent)) {
                    if (null == arg2) {
                      if (tmp4 !== tmp5) {
                        let flag3 = false;
                        return false;
                      }
                    } else if (!areCompositeKeyComponentsEqual(tmp4, tmp5)) {
                      let flag2 = false;
                      return false;
                    }
                  }
                }
                if (tmp4 !== tmp5) {
                  let flag4 = false;
                  return false;
                }
              }
              num = num + 1;
            }
            return false;
          }
          return true;
        }
      }
    }
    return false;
  }
}
function areCompositeKeyComponentsEqual(icon, icon) {
  if (icon === icon) {
    return true;
  } else if (icon instanceof _assertNativeAnimatedModuleDefault) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(icon)) {
      const _Array2 = Array;
      if (Array.isArray(icon)) {
        if (icon.length !== icon.length) {
          return false;
        } else {
          let num6 = 0;
          if (0 < length2) {
            while (areCompositeKeyComponentsEqual(icon[num6], icon[num6])) {
              num6 = num6 + 1;
            }
            return false;
          }
          return true;
        }
      } else {
        return false;
      }
    } else {
      if (obj.isPlainObject(icon)) {
        if (tmp5Result.isPlainObject(icon)) {
          const _Object = Object;
          const keys = Object.keys(icon);
          const _Object2 = Object;
          if (keys.length !== Object.keys(icon).length) {
            return false;
          } else {
            let num3 = 0;
            if (0 < length) {
              while (fn(nullthrowsDefault(icon), keys[num3])) {
                if (!areCompositeKeyComponentsEqual(icon[tmp6], icon[tmp6])) {
                  break;
                } else {
                  num3 = num3 + 1;
                }
              }
              return false;
            }
            return true;
          }
        } else {
          return false;
        }
        tmp5Result = _mod382;
      } else {
        return false;
      }
      obj = _mod382;
    }
  }
}
({ useInsertionEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = noop);
hasOwnProperty = Object.prototype.hasOwnProperty;
let fn = Object.hasOwn;
if (fn == null) {
  fn = (arg0, View) => {
    const call = hasOwnProperty.call;
    return typeof call === "unknown" ? hasOwnProperty(View) : call(arg0, View);
  };
}

export function createAnimatedPropsMemoHook(arg0) {
  closure_0 = arg0;
  return function useAnimatedPropsMemo(fn, arg1) {
    closure_0 = arg1;
    const items = [arg1];
    const tmp2 = closure_1_5();
    closure_1 = tmp2;
    let current = tmp2.current;
    if (null == current) {
      const obj = { compositeKey: tmp, node: fn() };
      current = obj;
    }
    const items1 = [current];
    closure_1_3(() => {
      closure_1.current = current;
    }, items1);
    return current.node;
  };
}
export { createCompositeKeyForProps };
export { areCompositeKeysEqual };