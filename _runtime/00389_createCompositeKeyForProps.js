// _runtime/00389_createCompositeKeyForProps.js
import noop from "noop";

let c3;
let c4;
let c5;
function createCompositeKeyForProps(arg0, style) {
  const keys = Object.keys(arg0);
  let num = 0;
  let tmp = null;
  let tmp2 = null;
  if (0 < keys.length) {
    do {
      let tmp3 = keys[num];
      let arr2 = arg0[tmp3];
      let tmp4 = num;
      let tmp5 = tmp;
      if (null == style) {
        if ("style" === tmp3) {
          let tmp43 = importDefault;
          let tmp44 = dependencyMap;
          let tmp45 = require("00148_flattenStyle.js")(arr2);
          if (null != tmp45) {
            style = undefined;
            let tmp46 = createCompositeKeyForObject;
            if (style != null) {
              style = style.style;
            }
            let tmp46Result = tmp46(tmp45, style);
          }
        } else {
          let tmp48 = importDefault;
          let tmp49 = dependencyMap;
          tmp46Result = arr2;
          if (!(arr2 instanceof require("00367__assertNativeAnimatedModule.js"))) {
            let tmp8 = require;
            tmp46Result = arr2;
            if (!(arr2 instanceof require("00384_AnimatedEvent.js") /* AnimatedEvent */.AnimatedEvent)) {
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
                      let tmp13 = importDefault;
                      let tmp14 = dependencyMap;
                      let tmp15 = num3;
                      let tmp16 = tmp41;
                      let tmp17 = arr3;
                      if (!(arr3 instanceof require("00367__assertNativeAnimatedModule.js"))) {
                        let _Array2 = Array;
                        if (Array.isArray(arr3)) {
                          let length2 = arr3.length;
                          let num2 = 0;
                          let tmp20 = null;
                          let tmp21 = null;
                          if (0 < length2) {
                            do {
                              let tmp22 = arr3[num2];
                              let tmp23 = importDefault;
                              let tmp24 = dependencyMap;
                              let tmp25 = num2;
                              let tmp26 = tmp20;
                              let tmp27 = tmp22;
                              if (!(tmp22 instanceof require("00367__assertNativeAnimatedModule.js"))) {
                                let _Array3 = Array;
                                if (Array.isArray(tmp22)) {
                                  let tmp30 = createCompositeKeyForArray;
                                  tmp27 = createCompositeKeyForArray(tmp22);
                                } else {
                                  let tmp28 = require;
                                  let obj3 = require("00382__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */;
                                  if (obj3.isPlainObject(tmp22)) {
                                    let tmp29 = createCompositeKeyForObject;
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
                                  let tmp35 = array;
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
                          let tmp18 = require;
                          let obj2 = require("00382__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */;
                          if (obj2.isPlainObject(arr3)) {
                            let tmp19 = createCompositeKeyForObject;
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
                          let tmp40 = array;
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
                let tmp8Result = tmp8(382);
                if (tmp8Result.isPlainObject(arr2)) {
                  let tmp10 = arr2;
                  if (null != style) {
                    let tmp11 = createCompositeKeyForObject;
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
        let tmp6 = fn;
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
      let tmp4 = importDefault;
      let tmp5 = dependencyMap;
      let tmp6 = num;
      let tmp7 = tmp;
      let tmp8 = tmp3;
      if (!(tmp3 instanceof require("00367__assertNativeAnimatedModule.js"))) {
        let _Array = Array;
        if (Array.isArray(tmp3)) {
          let tmp11 = createCompositeKeyForArray;
          tmp8 = createCompositeKeyForArray(tmp3);
        } else {
          let tmp9 = require;
          let obj = require("00382__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */;
          if (obj.isPlainObject(tmp3)) {
            let tmp10 = createCompositeKeyForObject;
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
          let tmp16 = array;
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
      let tmp4 = num;
      let tmp5 = tmp;
      if (null == D) {
        arr2 = arr2[tmp3];
        let tmp8 = importDefault;
        let tmp9 = dependencyMap;
        let tmp10 = arr2;
        if (!(arr2 instanceof require("00367__assertNativeAnimatedModule.js"))) {
          let _Array = Array;
          if (Array.isArray(arr2)) {
            let length2 = arr2.length;
            let num2 = 0;
            let tmp13 = null;
            let tmp14 = null;
            if (0 < length2) {
              do {
                let arr3 = arr2[num2];
                let tmp15 = importDefault;
                let tmp16 = dependencyMap;
                let tmp17 = num2;
                let tmp18 = tmp13;
                let tmp19 = arr3;
                if (!(arr3 instanceof require("00367__assertNativeAnimatedModule.js"))) {
                  let _Array2 = Array;
                  if (Array.isArray(arr3)) {
                    let length3 = arr3.length;
                    let num3 = 0;
                    let tmp22 = null;
                    let tmp23 = null;
                    if (0 < length3) {
                      do {
                        let tmp24 = arr3[num3];
                        let tmp25 = importDefault;
                        let tmp26 = dependencyMap;
                        let tmp27 = num3;
                        let tmp28 = tmp22;
                        let tmp29 = tmp24;
                        if (!(tmp24 instanceof require("00367__assertNativeAnimatedModule.js"))) {
                          let _Array3 = Array;
                          if (Array.isArray(tmp24)) {
                            let tmp32 = createCompositeKeyForArray;
                            tmp29 = createCompositeKeyForArray(tmp24);
                          } else {
                            let tmp30 = require;
                            let obj3 = require("00382__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */;
                            if (obj3.isPlainObject(tmp24)) {
                              let tmp31 = createCompositeKeyForObject;
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
                            let tmp37 = array;
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
                    let tmp20 = require;
                    let obj2 = require("00382__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */;
                    if (obj2.isPlainObject(arr3)) {
                      let tmp21 = createCompositeKeyForObject;
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
                    let tmp42 = array;
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
            let tmp11 = require;
            let obj = require("00382__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */;
            if (obj.isPlainObject(arr2)) {
              let tmp12 = createCompositeKeyForObject;
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
        let tmp6 = fn;
        tmp7 = tmp;
      }
      num = num + 1;
      tmp = tmp7;
      tmp2 = tmp7;
    } while (num < length);
  }
  return tmp2;
}
function areCompositeKeysEqual(arg0, D) {
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
                let tmp10 = areCompositeKeyComponentsEqual;
                if (!areCompositeKeyComponentsEqual(tmp4, tmp5)) {
                  let flag5 = false;
                  return false;
                }
              } else {
                let tmp6 = importDefault;
                let tmp7 = dependencyMap;
                if (!(tmp4 instanceof require("00367__assertNativeAnimatedModule.js"))) {
                  let tmp8 = require;
                  if (!(tmp4 instanceof require("00384_AnimatedEvent.js") /* AnimatedEvent */.AnimatedEvent)) {
                    if (null == arg2) {
                      if (tmp4 !== tmp5) {
                        let flag3 = false;
                        return false;
                      }
                    } else {
                      let tmp9 = areCompositeKeyComponentsEqual;
                      if (!areCompositeKeyComponentsEqual(tmp4, tmp5)) {
                        let flag2 = false;
                        return false;
                      }
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
function areCompositeKeyComponentsEqual(arg0, arg1) {
  if (arg0 === arg1) {
    return true;
  } else if (arg0 instanceof require("00367__assertNativeAnimatedModule.js")) {
    return tmp;
  } else {
    const _Array = Array;
    if (Array.isArray(arg0)) {
      const _Array2 = Array;
      if (Array.isArray(arg1)) {
        if (arg0.length !== arg1.length) {
          return false;
        } else {
          let num6 = 0;
          if (0 < length2) {
            while (areCompositeKeyComponentsEqual(arg0[num6], arg1[num6])) {
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
      if (obj.isPlainObject(arg0)) {
        if (tmp5Result.isPlainObject(arg1)) {
          const _Object = Object;
          const keys = Object.keys(arg0);
          const _Object2 = Object;
          if (keys.length !== Object.keys(arg1).length) {
            return false;
          } else {
            let num3 = 0;
            if (0 < length) {
              while (fn(require("00070_nullthrows.js")(arg1), keys[num3])) {
                let tmp11 = areCompositeKeyComponentsEqual;
                if (!areCompositeKeyComponentsEqual(arg0[tmp6], arg1[tmp6])) {
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
        tmp5Result = tmp5(382);
      } else {
        return false;
      }
      obj = require("00382__isNativeReflectConstruct.js") /* _isNativeReflectConstruct */;
      tmp5 = require;
    }
  }
}
({ useInsertionEffect: c3, useMemo: c4, useRef: c5 } = noop);
let fn = Object.hasOwn;
if (fn == null) {
  fn = (arg0, arg1) => {
    const call = hasOwnProperty.call;
    return typeof call === "unknown" ? hasOwnProperty(arg1) : call(arg0, arg1);
  };
}

export function createAnimatedPropsMemoHook(arg0) {
  let closure_0 = arg0;
  return function useAnimatedPropsMemo(arg0, arg1) {
    let closure_0 = arg1;
    const items = [arg1];
    const tmp = outer1_4(() => outer2_6(closure_0, closure_0), items);
    const tmp2 = outer1_5();
    let closure_1 = tmp2;
    let current = tmp2.current;
    if (null == current) {
      const obj = { compositeKey: null, node: null };
      obj[0] = tmp;
      obj[1] = arg0();
      current = obj;
    }
    const items1 = [current];
    outer1_3(() => {
      closure_1.current = current;
    }, items1);
    return current.node;
  };
}
export { createCompositeKeyForProps };
export { areCompositeKeysEqual };