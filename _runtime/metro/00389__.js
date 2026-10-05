// _runtime/metro/00389__.js
import nullthrowsDefault from "../00070_nullthrows.js";
import flattenStyleDefault from "../00148_flattenStyle.js";
import _modDef367 from "00367__.js";
import _mod382 from "00382__.js";
import attachNativeEventImpl from "../00384_attachNativeEventImpl.js";
import react from "../00019_react.js";

let c3;
let closure_4;
let hasOwnProperty;
function createCompositeKeyForProps(arr2, style) {
  const keys = Object.keys(arr2);
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < keys.length) {
    do {
      let tmp7;
      let tmp3 = keys[num];
      arr2 = arr2[tmp3];
      if (null == style) {
        let tmp42Result;
        if ("style" === tmp3) {
          let tmp41 = flattenStyleDefault(arr2);
          if (null != tmp41) {
            style = undefined;
            if (style != null) {
              style = style.style;
            }
            tmp42Result = createCompositeKeyForObject(tmp41, style);
          }
        } else {
          tmp42Result = arr2;
          if (!(arr2 instanceof _modDef367)) {
            tmp42Result = arr2;
            if (!(arr2 instanceof attachNativeEventImpl.AnimatedEvent)) {
              let _Array = Array;
              if (Array.isArray(arr2)) {
                let tmp12 = arr2;
                if (null != style) {
                  let length3 = arr2.length;
                  let num3 = 0;
                  let tmp37 = null;
                  let tmp38 = null;
                  if (0 < length3) {
                    do {
                      let arr3 = arr2[num3];
                      let tmp17 = arr3;
                      if (!(arr3 instanceof _modDef367)) {
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
                              if (!(tmp22 instanceof _modDef367)) {
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
                                  let self = this;
                                  let self2 = this;
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
                      let tmp34 = tmp37;
                      if (null != tmp17) {
                        let fillResult1 = tmp37;
                        if (null == tmp37) {
                          let _Array5 = Array;
                          let self3 = this;
                          let self4 = this;
                          let array2 = new Array(arr2.length);
                          fillResult1 = array2.fill(null);
                        }
                        fillResult1[num3] = tmp17;
                        tmp34 = fillResult1;
                      }
                      num3 = num3 + 1;
                      tmp37 = tmp34;
                      tmp38 = tmp34;
                    } while (num3 < length3);
                  }
                  tmp12 = tmp38;
                }
                tmp42Result = tmp12;
              } else {
                let tmp8Result = _mod382;
                if (tmp8Result.isPlainObject(arr2)) {
                  let tmp10 = arr2;
                  if (null != style) {
                    tmp10 = createCompositeKeyForObject(arr2);
                  }
                  tmp42Result = tmp10;
                }
              }
            }
          }
        }
        tmp7 = tmp;
        if (null != tmp42Result) {
          let obj = tmp;
          if (null == tmp) {
            obj = {};
          }
          obj[tmp3] = tmp42Result;
          tmp7 = obj;
        }
      } else {
        tmp7 = tmp;
      }
      num = num + 1;
      tmp = tmp7;
      tmp2 = tmp7;
    } while (num < keys.length);
  }
  return tmp2;
}
function createCompositeKeyForArray(arr2) {
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < arr2.length) {
    do {
      let tmp3 = arr2[num];
      let tmp8 = tmp3;
      if (!(tmp3 instanceof _modDef367)) {
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
          let self = this;
          let self2 = this;
          let array = new Array(arr2.length);
          fillResult = array.fill(null);
        }
        fillResult[num] = tmp8;
        tmp12 = fillResult;
      }
      num = num + 1;
      tmp = tmp12;
      tmp2 = tmp12;
    } while (num < arr2.length);
  }
  return tmp2;
}
function createCompositeKeyForObject(arr2, style) {
  const keys = Object.keys(arr2);
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < keys.length) {
    do {
      let tmp7;
      let tmp3 = keys[num];
      if (null == style) {
        arr2 = arr2[tmp3];
        let tmp10 = arr2;
        if (!(arr2 instanceof _modDef367)) {
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
                if (!(arr3 instanceof _modDef367)) {
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
                        if (!(tmp24 instanceof _modDef367)) {
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
                            let self = this;
                            let self2 = this;
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
                let tmp36 = tmp13;
                if (null != tmp19) {
                  let fillResult1 = tmp13;
                  if (null == tmp13) {
                    let _Array5 = Array;
                    let self3 = this;
                    let self4 = this;
                    let array2 = new Array(arr2.length);
                    fillResult1 = array2.fill(null);
                  }
                  fillResult1[num2] = tmp19;
                  tmp36 = fillResult1;
                }
                num2 = num2 + 1;
                tmp13 = tmp36;
                tmp14 = tmp36;
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
        tmp7 = tmp;
        if (null != tmp10) {
          let obj4 = tmp;
          if (null == tmp) {
            obj4 = {};
          }
          obj4[tmp3] = tmp10;
          tmp7 = obj4;
        }
      } else {
        tmp7 = tmp;
      }
      num = num + 1;
      tmp = tmp7;
      tmp2 = tmp7;
    } while (num < keys.length);
  }
  return tmp2;
}
function areCompositeKeysEqual(arr2, arr22, arg2) {
  if (arr2 === arr2) {
    return true;
  } else {
    if (null !== arr2) {
      if (null !== arr2) {
        const _Object = Object;
        const keys = Object.keys(arr2);
        const _Object2 = Object;
        if (keys.length !== Object.keys(arr2).length) {
          return false;
        } else {
          let num = 0;
          if (0 < keys.length) {
            while (fn(arr2, keys[num])) {
              let tmp4 = arr2[tmp];
              let tmp5 = arr2[tmp];
              if ("style" === tmp) {
                if (!areCompositeKeyComponentsEqual(tmp4, tmp5)) {
                  let flag5 = false;
                  return false;
                }
              } else {
                if (!(tmp4 instanceof _modDef367)) {
                  if (!(tmp4 instanceof attachNativeEventImpl.AnimatedEvent)) {
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
function areCompositeKeyComponentsEqual(arr2, arr22) {
  if (arr2 === arr2) {
    return true;
  } else if (arr2 instanceof _modDef367) {
    return arr2 === arr2;
  } else {
    const _Array = Array;
    if (Array.isArray(arr2)) {
      const _Array2 = Array;
      if (Array.isArray(arr2)) {
        if (arr2.length !== arr2.length) {
          return false;
        } else {
          let num6 = 0;
          if (0 < arr2.length) {
            while (areCompositeKeyComponentsEqual(arr2[num6], arr2[num6])) {
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
      const obj = _mod382;
      if (obj.isPlainObject(arr2)) {
        const tmp5Result = _mod382;
        if (tmp5Result.isPlainObject(arr2)) {
          const _Object = Object;
          const keys = Object.keys(arr2);
          const _Object2 = Object;
          if (keys.length !== Object.keys(arr2).length) {
            return false;
          } else {
            let num3 = 0;
            if (0 < keys.length) {
              while (fn(nullthrowsDefault(arr2), keys[num3])) {
                if (!areCompositeKeyComponentsEqual(arr2[tmp6], arr2[tmp6])) {
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
      } else {
        return false;
      }
    }
  }
}
({ useInsertionEffect: c3, useMemo: closure_4, useRef: hasOwnProperty } = react);
hasOwnProperty = Object.prototype.hasOwnProperty;
let fn = Object.hasOwn;
if (fn == null) {
  fn = (arg0, arg1) => hasOwnProperty.call(arg0, arg1);
}

export function createAnimatedPropsMemoHook(arg0) {
  let closure_0 = arg0;
  return function useAnimatedPropsMemo(fn, arg1) {
    closure_0 = arg1;
    const items = [arg1];
    const tmp = closure_1_4(() => createCompositeKeyForProps(closure_0, closure_0), items);
    const tmp2 = closure_1_5();
    let closure_1 = tmp2;
    let current = tmp2.current;
    if (null == current) {
      current = { compositeKey: tmp, node: fn() };
      const obj = { compositeKey: tmp, node: fn() };
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
