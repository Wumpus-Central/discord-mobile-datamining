// === Module 1827: getStylesFromObject ===

// Module 1827 (getStylesFromObject)
import t from "t" /* 1665 */;
import isJest from "isJest" /* 1657 */;

let obj = { fps: 60 };
function getStylesFromObject(jestInlineStyle) {
  if (undefined === jestInlineStyle) {
    let fromEntriesResult = {};
  } else {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(jestInlineStyle);
    fromEntriesResult = Object.fromEntries(entries.map((arg0) => {
      [tmp, iter] = arg0;
      const items = [tmp, ];
      let value = iter;
      if (iter._isReanimatedSharedValue) {
        value = iter.value;
      }
      items[1] = value;
      return items;
    }));
  }
  return fromEntriesResult;
}
function getCurrentStyle(props) {
  const style = props.props.style;
  obj = {};
  if (Array.isArray(style)) {
    const item = style.forEach((arg0) => {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(arg0);
    });
  }
  const jestInlineStyle = props.props.jestInlineStyle;
  if (props.props.jestAnimatedStyle != null) {
    const value = iter.value;
  }
  if (Array.isArray(jestInlineStyle)) {
    const iter2 = jestInlineStyle[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      if (!("jestAnimatedValues" in nextResult)) {
        let tmp16 = getStylesFromObject;
        let tmp17 = nextResult;
        let tmp18 = getStylesFromObject(tmp15);
        obj = {};
        let tmp19 = obj;
        let tmp20 = obj;
        let merged = Object.assign(obj);
        let tmp22 = obj;
        let tmp23 = tmp18;
        let merged1 = Object.assign(tmp18);
      }
      continue;
    }
    obj = {};
    const merged2 = Object.assign(obj);
    const merged3 = Object.assign(value);
    return obj;
  } else {
    const tmp3 = getStylesFromObject(jestInlineStyle);
    obj = {};
    if (((value) => {
      let tmp = !value;
      if (value) {
        const _Object = Object;
        tmp = 0 === Object.keys(value).length;
      }
      return tmp;
    })(value)) {
      const merged4 = Object.assign(tmp3);
      let tmp7 = obj;
    } else {
      const merged5 = Object.assign(value);
      tmp7 = obj;
    }
    obj = tmp7;
    return tmp7;
  }
}
function checkEqual(obj, obj2) {
  if (Array.isArray(obj2)) {
    const _Array = Array;
    if (Array.isArray(obj)) {
      if (obj2.length === obj.length) {
        let num4 = 0;
        if (0 < obj.length) {
          while (checkEqual(obj[num4], obj2[num4])) {
            num4 = num4 + 1;
          }
          return false;
        }
      }
    }
    return false;
  } else {
    if (typeof obj === "object") {
      if (obj) {
        if (typeof obj2 === "object") {
          if (obj2) {
            for (const key10009 in arg1) {
              let tmp4 = key10009;
              let tmp5 = checkEqual;
              if (checkEqual(arg0[key10009], arg1[key10009])) {
                continue;
              } else {
                let flag = false;
                return false;
              }
            }
          }
        }
        return false;
      }
    }
    return obj === obj2;
  }
  return true;
}
function compareAndFormatDifferences(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  closure_0 = undefined;
  closure_1 = undefined;
  closure_2 = undefined;
  const items = [];
  let flag2 = true;
  let flag3 = true;
  const keys = Object.keys();
  if (keys !== undefined) {
    flag3 = flag2;
    while (keys[tmp] !== undefined) {
      let tmp24 = tmp4;
      let tmp25 = checkEqual;
      let arr4 = arg0[tmp4];
      let arr5 = arg1[tmp4];
      if (typeof checkEqual !== "function") {
        let str2 = "Trying to call a non-function";
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      }
      let _Array = Array;
      if (Array.isArray(arr5)) {
        let _Array4 = Array;
        let flag4 = false;
        if (Array.isArray(arr4)) {
          flag4 = false;
          if (arr5.length === arr4.length) {
            let num3 = 0;
            flag4 = true;
            if (0 < arr4.length) {
              while (true) {
                let tmp13 = checkEqual;
                let arr2 = arr4[num3];
                let arr3 = arr5[num3];
                let sum1 = num3;
                if (typeof checkEqual !== "function") {
                  let str4 = "Trying to call a non-function";
                  let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
                }
                let _Array5 = Array;
                if (Array.isArray(arr3)) {
                  let _Array6 = Array;
                  let flag6 = false;
                  if (Array.isArray(arr2)) {
                    flag6 = false;
                    if (arr3.length === arr2.length) {
                      let num2 = 0;
                      flag6 = true;
                      if (0 < arr2.length) {
                        let tmp18 = checkEqual;
                        let sum = num2;
                        flag6 = false;
                        while (checkEqual(arr2[num2], arr3[num2])) {
                          sum = sum + 1;
                          num2 = sum;
                          flag6 = true;
                          if (sum >= arr2.length) {
                            break;
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (typeof arr2 === "object") {
                    if (arr2) {
                      flag6 = false;
                      if (typeof arr3 === "object") {
                        flag6 = false;
                        if (arr3) {
                          let tmp15 = arr3;
                          flag6 = true;
                          let keys1 = Object.keys();
                          if (keys1 !== undefined) {
                            flag6 = true;
                            let tmp17 = keys1[sum];
                            while (tmp17 !== undefined) {
                              let tmp33 = tmp17;
                              let tmp34 = checkEqual;
                              flag6 = false;
                              if (checkEqual(arr2[tmp17], arr3[tmp17])) {
                                continue;
                              } else {
                                break;
                              }
                              break;
                            }
                          }
                        }
                      }
                    }
                  }
                  flag6 = arr2 === arr3;
                }
                flag4 = false;
                if (!flag6) {
                  break;
                } else {
                  sum1 = sum1 + 1;
                  num3 = sum1;
                  flag4 = true;
                  if (sum1 >= arr4.length) {
                    break;
                  }
                }
              }
            }
          }
        }
      } else {
        if (typeof arr4 === "object") {
          if (arr4) {
            flag4 = false;
            if (typeof arr5 === "object") {
              flag4 = false;
              if (arr5) {
                let tmp5 = arr5;
                flag4 = true;
                let keys2 = Object.keys();
                if (keys2 !== undefined) {
                  flag4 = true;
                  let tmp7 = keys2[sum1];
                  while (tmp7 !== undefined) {
                    let tmp27 = tmp7;
                    let tmp28 = checkEqual;
                    let arr6 = arr4[tmp7];
                    let arr7 = arr5[tmp7];
                    if (typeof checkEqual !== "function") {
                      let str3 = "Trying to call a non-function";
                      let throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
                    }
                    let _Array2 = Array;
                    if (Array.isArray(arr7)) {
                      let _Array3 = Array;
                      let flag5 = false;
                      if (Array.isArray(arr6)) {
                        flag5 = false;
                        if (arr7.length === arr6.length) {
                          let num = 0;
                          flag5 = true;
                          if (0 < arr6.length) {
                            let tmp11 = checkEqual;
                            sum = num;
                            flag5 = false;
                            while (checkEqual(arr6[num], arr7[num])) {
                              sum = sum + 1;
                              num = sum;
                              flag5 = true;
                              if (sum >= arr6.length) {
                                break;
                              }
                            }
                          }
                        }
                      }
                    } else {
                      if (typeof arr6 === "object") {
                        if (arr6) {
                          flag5 = false;
                          if (typeof arr7 === "object") {
                            flag5 = false;
                            if (arr7) {
                              let tmp8 = arr7;
                              flag5 = true;
                              let keys3 = Object.keys();
                              if (keys3 !== undefined) {
                                flag5 = true;
                                let tmp10 = keys3[sum];
                                while (tmp10 !== undefined) {
                                  let tmp30 = tmp10;
                                  let tmp31 = checkEqual;
                                  flag5 = false;
                                  if (checkEqual(arr6[tmp10], arr7[tmp10])) {
                                    continue;
                                  } else {
                                    break;
                                  }
                                  break;
                                }
                              }
                            }
                          }
                        }
                      }
                      flag5 = arr6 === arr7;
                    }
                    flag4 = false;
                    if (flag5) {
                      continue;
                    } else {
                      break;
                    }
                    break;
                  }
                }
              }
            }
          }
        }
        flag4 = arr4 === arr5;
      }
      if (flag4) {
        continue;
      } else {
        obj = { property: null, current: null, expect: null };
        obj[0] = tmp4;
        obj[1] = arg0[tmp4];
        obj[2] = arg1[tmp4];
        let arr = items.push(obj);
        flag2 = false;
        continue;
      }
      continue;
    }
  }
  let flag7 = flag3;
  if (flag) {
    const _Object = Object;
    const _Object2 = Object;
    flag7 = flag3;
    if (Object.keys(arg0).length !== Object.keys(arg1).length) {
      flag7 = false;
      const keys4 = Object.keys();
      if (keys4 !== undefined) {
        flag7 = false;
        const first = keys4[0];
        while (first !== undefined) {
          let tmp35 = first;
          if (undefined !== arg1[first]) {
            continue;
          } else {
            obj = { property: null, current: null, expect: null };
            obj[0] = first;
            obj[1] = arg0[first];
            obj[2] = arg1[first];
            arr = items.push(obj);
            continue;
          }
          continue;
        }
      }
    }
  }
  if (flag7) {
    obj = { message: null, pass: true };
    obj[0] = function message() {
      return "ok";
    };
    return obj;
  } else {
    const _JSON = JSON;
    closure_0 = JSON.stringify(arg0);
    const _JSON2 = JSON;
    closure_1 = JSON.stringify(arg1);
    const mapped = items.map((expect) => {
      const json = JSON.stringify(expect.expect);
      return "- '" + expect.property + "' should be " + json + ", but is " + JSON.stringify(expect.current);
    });
    closure_2 = mapped.join("\n");
    obj1 = { message: null, pass: false };
    obj1[0] = function message() {
      return "Expected: " + closure_1 + "\nReceived: " + closure_0 + "\n\nDifferences:\n" + closure_2;
    };
    return obj1;
  }
}
let closure_8 = Math.round(1000 / obj.fps);
if (!isJest.isJest()) {
  require = () => {
    const reanimatedError = new t.ReanimatedError("`setUpTests` is available only in Jest environment.");
    throw reanimatedError;
  };
}

export const withReanimatedTimer = (arg0) => {
  console.warn("This method is deprecated, you should define your own before and after test hooks to enable jest.useFakeTimers(). Check out the documentation for details on testing");
  const fakeTimers = globalThis.jest.useFakeTimers();
  arg0();
  globalThis.jest.runOnlyPendingTimers();
  const realTimers = globalThis.jest.useRealTimers();
};
export const advanceAnimationByTime = () => {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_8;
  }
  console.warn("This method is deprecated, use jest.advanceTimersByTime directly");
  globalThis.jest.advanceTimersByTime(tmp);
  globalThis.jest.runOnlyPendingTimers();
};
export const advanceAnimationByFrame = (arg0) => {
  console.warn("This method is deprecated, use jest.advanceTimersByTime directly");
  globalThis.jest.advanceTimersByTime(arg0 * closure_8);
  globalThis.jest.runOnlyPendingTimers();
};
export const setUpTests = () => {
  obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let _default = global.expect;
  if (undefined === _default) {
    const tmp2 = require("expect");
    _default = tmp2;
    if (!tmp3) {
      _default = tmp2.default;
    }
    tmp3 = undefined !== tmp2 && undefined !== tmp2.extend;
  }
  obj = {};
  let merged = Object.assign(obj);
  const merged1 = Object.assign(obj);
  closure_8 = Math.round(1000 / obj.fps);
  obj = {
    toHaveAnimatedProps(props) {
      if (props.props.jestAnimatedProps) {
        const _Object = Object;
        if (0 === Object.keys(props.props.jestAnimatedProps.value).length) {
          obj = { message: null, pass: false };
          obj[0] = function message() {
            return "Component doesn't have props.";
          };
          let tmp7 = obj;
        }
        return tmp7;
      }
      let value;
      if (props.props.jestAnimatedProps != null) {
        value = iter.value;
      }
      obj = {};
      if (value) {
        const merged = Object.assign(value);
        let tmp3 = obj;
      } else {
        tmp3 = obj;
      }
      tmp7 = callback2(tmp3, arg1);
    }
  };
  _default.extend(obj);
  _default.extend({
    toHaveAnimatedStyle(props) {
      obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      if (props.props.style) {
        obj = callback2(callback(props), arg1, obj.shouldMatchAllProps);
      } else {
        obj = { message: null, pass: false };
        obj[0] = function message() {
          return "Component doesn't have a style.";
        };
      }
      return obj;
    }
  });
};
export const getAnimatedStyle = (props) => getCurrentStyle(props);