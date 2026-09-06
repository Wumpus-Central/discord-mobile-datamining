// === Module 1809: ? ===

// Module 1809
import _mod1647 from "module_1647" /* 1647 */;
import module_1639 from "module_1639" /* 1639 */;

let obj = { fps: 60 };
function getStylesFromObject(jestInlineStyle) {
  if (undefined === jestInlineStyle) {
    let fromEntriesResult = {};
  } else {
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(jestInlineStyle);
    fromEntriesResult = Object.fromEntries(entries.map((item) => {
      [tmp, iter] = item;
      const items = [tmp, ];
      value = iter;
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
    const item = style.forEach((item) => {
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(item);
    });
  }
  const jestInlineStyle = props.props.jestInlineStyle;
  if (props.props.jestAnimatedStyle != null) {
    value = iter.value;
  }
  if (Array.isArray(jestInlineStyle)) {
    const iter2 = jestInlineStyle[Symbol.iterator]();
    const nextResult = iter2.next();
    while (iter2 !== undefined) {
      if (!("jestAnimatedValues" in nextResult)) {
        let tmp18 = getStylesFromObject(tmp15);
        obj = {};
        let merged = Object.assign(obj);
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
function checkEqual(arr2, arr3) {
  if (Array.isArray(arr3)) {
    const _Array = Array;
    if (Array.isArray(arr2)) {
      if (arr3.length === arr2.length) {
        let num4 = 0;
        if (0 < arr2.length) {
          while (checkEqual(arr2[num4], arr3[num4])) {
            num4 = num4 + 1;
          }
          return false;
        }
      }
    }
    return false;
  } else {
    if (typeof arr2 === "object") {
      if (arr2) {
        if (typeof arr3 === "object") {
          if (arr3) {
            for (const key10009 in arg1) {
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
    return arr2 === arr3;
  }
  return true;
}
function compareAndFormatDifferences(currentStyle, arg1) {
  let flag = shouldMatchAllProps;
  if (shouldMatchAllProps === undefined) {
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
      let arr4 = currentStyle[tmp4];
      let arr5 = arg1[tmp4];
      if (typeof checkEqual === "function") {
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
                let arr2 = arr4[num3];
                let arr3 = arr5[num3];
                let sum1 = num3;
                while (typeof checkEqual === "function") {
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
                            flag6 = true;
                            let keys1 = Object.keys();
                            if (keys1 !== undefined) {
                              flag6 = true;
                              let tmp17 = keys1[sum];
                              while (tmp17 !== undefined) {
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
                  if (flag6) {
                    sum1 = sum1 + 1;
                    num3 = sum1;
                    flag4 = true;
                  }
                  continue;
                }
                let str4 = "Trying to call a non-function";
                throw new TypeError("Trying to call a non-function");
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
                  flag4 = true;
                  let keys2 = Object.keys();
                  if (keys2 !== undefined) {
                    flag4 = true;
                    let tmp7 = keys2[sum1];
                    while (tmp7 !== undefined) {
                      let arr6 = arr4[tmp7];
                      let arr7 = arr5[tmp7];
                      if (typeof checkEqual === "function") {
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
                                  flag5 = true;
                                  let keys3 = Object.keys();
                                  if (keys3 !== undefined) {
                                    flag5 = true;
                                    let tmp10 = keys3[sum];
                                    while (tmp10 !== undefined) {
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
                      } else {
                        let str3 = "Trying to call a non-function";
                        throw new TypeError("Trying to call a non-function");
                      }
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
          obj = { property: tmp4, current: currentStyle[tmp4], expect: arg1[tmp4] };
          let arr = items.push(obj);
          flag2 = false;
          continue;
        }
        continue;
      } else {
        let str2 = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  let flag7 = flag3;
  if (flag) {
    const _Object = Object;
    const _Object2 = Object;
    flag7 = flag3;
    if (Object.keys(currentStyle).length !== Object.keys(arg1).length) {
      flag7 = false;
      const keys4 = Object.keys();
      if (keys4 !== undefined) {
        flag7 = false;
        const first = keys4[0];
        while (first !== undefined) {
          if (undefined !== arg1[first]) {
            continue;
          } else {
            obj = { property: first, current: currentStyle[first], expect: arg1[first] };
            arr = items.push(obj);
            continue;
          }
          continue;
        }
      }
    }
  }
  if (flag7) {
    obj = {
      message() {
          return "ok";
        },
      pass: true
    };
    return obj;
  } else {
    const _JSON = JSON;
    closure_0 = JSON.stringify(currentStyle);
    const _JSON2 = JSON;
    closure_1 = JSON.stringify(arg1);
    const mapped = items.map((expect) => {
      const json = JSON.stringify(expect.expect);
      return "- '" + expect.property + "' should be " + json + ", but is " + JSON.stringify(expect.current);
    });
    closure_2 = mapped.join("\n");
    const obj1 = {
      message() {
          return "Expected: " + closure_1 + "\nReceived: " + closure_0 + "\n\nDifferences:\n" + closure_2;
        },
      pass: false
    };
    return obj1;
  }
}
let closure_8 = Math.round(1000 / obj.fps);
if (!module_1639.isJest()) {
  require = () => {
    const reanimatedError = new _mod1647.ReanimatedError("`setUpTests` is available only in Jest environment.");
    throw reanimatedError;
  };
}

export const withReanimatedTimer = (fn) => {
  console.warn("This method is deprecated, you should define your own before and after test hooks to enable jest.useFakeTimers(). Check out the documentation for details on testing");
  const fakeTimers = globalThis.jest.useFakeTimers();
  fn();
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
    toHaveAnimatedProps(props, arg1) {
      if (props.props.jestAnimatedProps) {
        const _Object = Object;
        if (0 === Object.keys(props.props.jestAnimatedProps.value).length) {
          obj = {
            message() {
                  return "Component doesn't have props.";
                },
            pass: false
          };
          let tmp7 = obj;
        }
        return tmp7;
      }
      value = undefined;
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
      tmp7 = compareAndFormatDifferences(tmp3, arg1);
    }
  };
  _default.extend(obj);
  _default.extend({
    toHaveAnimatedStyle(props, arg1) {
      obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      if (props.props.style) {
        obj = compareAndFormatDifferences(getCurrentStyle(props), arg1, obj.shouldMatchAllProps);
      } else {
        obj = {
          message() {
              return "Component doesn't have a style.";
            },
          pass: false
        };
      }
      return obj;
    }
  });
  const obj1 = {
    toHaveAnimatedStyle(props, arg1) {
      obj = arg2;
      if (arg2 === undefined) {
        obj = {};
      }
      if (props.props.style) {
        obj = compareAndFormatDifferences(getCurrentStyle(props), arg1, obj.shouldMatchAllProps);
      } else {
        obj = {
          message() {
              return "Component doesn't have a style.";
            },
          pass: false
        };
      }
      return obj;
    }
  };
};
export const getAnimatedStyle = (props) => getCurrentStyle(props);