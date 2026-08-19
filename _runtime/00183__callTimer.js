// === Module 183: _callTimer ===

// Module 183 (_callTimer)
import _mod38 from "module_38" /* 38 */;
import toError from "toError" /* 184 */;
import TimingDefault from "Timing" /* 185 */;

require = fn;
function _callTimer(arr, _performance, arg2) {
  const _global = _performance;
  if (arr > c12) {
    const _console = console;
    console.warn("Tried to call timer with ID %s but no such timer exists.", arr);
  }
  const index = closure_7.indexOf(arr);
  if (-1 !== index) {
    if (table[index]) {
      if (tmp21) {
        if ("setInterval" !== tmp21) {
          _clearIndex(index);
        }
        try {
          if ("setTimeout" !== tmp21) {
            if ("setInterval" !== tmp21) {
              if ("queueReactNativeMicrotask" !== tmp21) {
                if ("requestAnimationFrame" === tmp21) {
                  _performance = _global.performance;
                  tmp23(_performance.now());
                } else if ("requestIdleCallback" === tmp21) {
                  obj = { timeRemaining: null, didTimeout: null };
                  obj[0] = function timeRemaining() {
                    _performance = _performance.performance;
                    return Math.max(0, closure_1_4 - (_performance.now() - _performance));
                  };
                  obj[1] = arg2;
                  tmp23(obj);
                } else {
                  const _console3 = console;
                  console.error("Tried to call a callback with invalid type: " + tmp21);
                }
              }
            }
          }
          tmp23();
        } catch (tmp15) {
          arr = arr4.push(toError.default(tmp15));
        }
      }
    }
    const _console2 = console;
    console.error(`No callback found for timerID ${arr}`);
  }
}
function _clearIndex(index) {
  closure_7[index] = null;
  closure_5[index] = null;
  closure_6[index] = null;
}
let c4 = 16.666666666666668;
let closure_5 = [];
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
let closure_9 = [];
let closure_10 = [];
let closure_11 = {};
let c12 = 1;
let closure_13 = [];
let c14 = false;
let obj = {
  setTimeout(arg0, arg1) {
    closure_0 = arg0;
    const _require = [...arguments].slice();
    closure_12 = tmp + 1;
    let length = arr.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    let num = arg1;
    closure_7[length] = +closure_12;
    closure_5[length] = () => callback.apply(undefined, closure_1);
    closure_6[length] = "setTimeout";
    if (!arg1) {
      num = 0;
    }
    const timestamp = Date.now();
    _require(38)(TimingDefault, "NativeTiming is available");
    const tmp4 = _require(38);
    const timer = TimingDefault.createTimer(tmp, num, timestamp, false);
    return +closure_12;
  },
  setInterval(arg0, arg1) {
    closure_0 = arg0;
    const _require = [...arguments].slice();
    closure_12 = tmp + 1;
    let length = arr.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    let num = arg1;
    closure_7[length] = +closure_12;
    closure_5[length] = () => callback.apply(undefined, closure_1);
    closure_6[length] = "setInterval";
    if (!arg1) {
      num = 0;
    }
    const timestamp = Date.now();
    _require(38)(TimingDefault, "NativeTiming is available");
    const tmp4 = _require(38);
    const timer = TimingDefault.createTimer(tmp, num, timestamp, true);
    return +closure_12;
  },
  queueReactNativeMicrotask(arg0) {
    closure_0 = arg0;
    closure_1 = [...arguments].slice();
    closure_12 = tmp + 1;
    let length = arr.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    closure_7[length] = +closure_12;
    closure_5[length] = () => callback.apply(undefined, closure_1);
    closure_6[length] = "queueReactNativeMicrotask";
    return +closure_12;
  },
  requestAnimationFrame(scrollAnimation, items) {
    closure_12 = tmp + 1;
    let length = arr.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    closure_7[length] = +closure_12;
    closure_5[length] = scrollAnimation;
    closure_6[length] = "requestAnimationFrame";
    const timestamp = Date.now();
    _mod38(TimingDefault, "NativeTiming is available");
    const timer = TimingDefault.createTimer(tmp, 1, timestamp, false);
    return +closure_12;
  },
  requestIdleCallback(arg0, timeout) {
    let fn = arg0;
    closure_0 = arg0;
    if (0 === arr3.length) {
      _require(38)(TimingDefault, "NativeTiming is available");
      obj = TimingDefault;
      obj.setSendIdleEvents(true);
      const tmp3 = _require(38);
    }
    if (timeout) {
      timeout = timeout.timeout;
    }
    if (null != timeout) {
      fn = (arg0) => {
        if (closure_1_11[closure_1]) {
          obj.clearTimeout(tmp3);
          delete tmp2[tmp];
        }
        return lib(arg0);
      };
    }
    closure_12 = tmp7 + 1;
    let length = arr.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    closure_7[length] = +closure_12;
    closure_5[length] = fn;
    closure_6[length] = "requestIdleCallback";
    _require = tmp7;
    if (null != timeout) {
      closure_11[tmp7] = obj.setTimeout(() => {
        const index = closure_1_10.indexOf(callback);
        if (index > -1) {
          closure_1_10.splice(index, 1);
          const _performance = lib.performance;
          _callTimer(callback, _performance.now(), true);
        }
        delete tmp[tmp2];
        if (0 === closure_1_10.length) {
          callback(dependencyMap[1])(TimingDefault, "NativeTiming is available");
          const tmp12 = callback(dependencyMap[1]);
          TimingDefault.setSendIdleEvents(false);
        }
      }, timeout);
    }
    return +closure_12;
  },
  cancelIdleCallback(dependencyMap) {
    if (null != dependencyMap) {
      const index = closure_7.indexOf(dependencyMap);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        dependencyMap[index] = null;
        arr = arr.push(index);
        let tmp3 = "queueReactNativeMicrotask" !== tmp25;
        if (tmp3) {
          tmp3 = "requestIdleCallback" !== tmp25;
        }
        if (tmp3) {
          _mod38(TimingDefault, "NativeTiming is available");
          obj = TimingDefault;
          obj.deleteTimer(dependencyMap);
        }
      }
    }
    const index1 = arr3.indexOf(dependencyMap);
    if (-1 !== index1) {
      arr3.splice(index1, 1);
    }
    if (table2[dependencyMap]) {
      obj.clearTimeout(tmp13);
      delete tmp[tmp2];
    }
    if (0 === arr3.length) {
      _mod38(TimingDefault, "NativeTiming is available");
      TimingDefault.setSendIdleEvents(false);
    }
  },
  clearTimeout(arg0) {
    if (null != arg0) {
      const index = closure_7.indexOf(arg0);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        dependencyMap[index] = null;
        arr = arr.push(index);
        let tmp = "queueReactNativeMicrotask" !== tmp11;
        if (tmp) {
          tmp = "requestIdleCallback" !== tmp11;
        }
        if (tmp) {
          _mod38(TimingDefault, "NativeTiming is available");
          TimingDefault.deleteTimer(arg0);
        }
      }
    }
  },
  clearInterval(closure_0) {
    if (null != closure_0) {
      const index = closure_7.indexOf(closure_0);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        dependencyMap[index] = null;
        arr = arr.push(index);
        let tmp = "queueReactNativeMicrotask" !== tmp11;
        if (tmp) {
          tmp = "requestIdleCallback" !== tmp11;
        }
        if (tmp) {
          _mod38(TimingDefault, "NativeTiming is available");
          TimingDefault.deleteTimer(closure_0);
        }
      }
    }
  },
  clearReactNativeMicrotask(arg0) {
    if (null != arg0) {
      const index = closure_7.indexOf(arg0);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        dependencyMap[index] = null;
        arr = arr.push(index);
        let tmp = "queueReactNativeMicrotask" !== tmp14;
        if (tmp) {
          tmp = "requestIdleCallback" !== tmp14;
        }
        if (tmp) {
          _mod38(TimingDefault, "NativeTiming is available");
          TimingDefault.deleteTimer(arg0);
        }
      }
    }
    const index1 = arr2.indexOf(arg0);
    if (-1 !== index1) {
      arr2.splice(index1, 1);
    }
  },
  cancelAnimationFrame(closure_0) {
    if (null != closure_0) {
      const index = closure_7.indexOf(closure_0);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        dependencyMap[index] = null;
        arr = arr.push(index);
        let tmp = "queueReactNativeMicrotask" !== tmp11;
        if (tmp) {
          tmp = "requestIdleCallback" !== tmp11;
        }
        if (tmp) {
          _mod38(TimingDefault, "NativeTiming is available");
          TimingDefault.deleteTimer(closure_0);
        }
      }
    }
  },
  callTimers(arg0) {
    let length;
    _mod38(0 !== arg0.length, "Cannot call `callTimers` with an empty list of IDs.");
    arr4.length = 0;
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp3 = _callTimer(arg0[num], 0);
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    if (arr4.length > 0) {
      let tmp5 = arr4;
      if (length2 > 1) {
        let num2 = 1;
        tmp5 = arr4;
        if (1 < length2) {
          do {
            let fn = (arg0) => {
              throw arg0;
            };
            let timerId = obj.setTimeout(fn.bind(null, arr4[num2]), 0);
            num2 = num2 + 1;
            tmp5 = arr4;
          } while (num2 < length2);
        }
      }
      throw tmp5[0];
    }
  },
  callIdleCallbacks(_performance) {
    let length;
    if (c4 - (Date.now() - _performance) >= 1) {
      arr4.length = 0;
      if (arr3.length > 0) {
        arr3 = [];
        let num = 0;
        if (0 < arr3.length) {
          do {
            let tmp2 = _callTimer(arr[num], _performance);
            num = num + 1;
            length = arr.length;
          } while (num < length);
        }
      }
      if (0 === arr3.length) {
        _mod38(TimingDefault, "NativeTiming is available");
        TimingDefault.setSendIdleEvents(false);
      }
      const item = arr4.forEach((item, index) => {
        closure_0 = item;
        return timeout.setTimeout(() => {
          throw closure_0;
        }, 0);
      });
    }
  },
  callReactNativeMicrotasks() {
    let flag2;
    let length;
    arr4.length = 0;
    let flag = false;
    if (0 !== arr2.length) {
      arr2 = [];
      let num2 = 0;
      if (0 < arr2.length) {
        do {
          let tmp2 = _callTimer(arr[num2], 0);
          num2 = num2 + 1;
          length = arr.length;
        } while (num2 < length);
      }
      flag = arr2.length > 0;
    }
    if (flag) {
      do {
        flag2 = false;
        if (0 !== arr2.length) {
          arr2 = [];
          let num3 = 0;
          if (0 < arr2.length) {
            do {
              let tmp6 = _callTimer(arr2[num3], 0);
              num3 = num3 + 1;
              length2 = arr2.length;
            } while (num3 < length2);
          }
          flag2 = arr2.length > 0;
        }
      } while (flag2);
    }
    const item = arr4.forEach((item, index) => {
      closure_0 = item;
      return timeout.setTimeout(() => {
        throw closure_0;
      }, 0);
    });
  },
  emitTimeDriftWarning(arg0) {
    if (!c14) {
      c14 = true;
      const _console = console;
      console.warn(arg0);
    }
  }
};
let tmp2 = obj;
if (!TimingDefault) {
  let _console = console;
  console.warn("Timing native module is not available, can't set timers.");
  obj = { callReactNativeMicrotasks: null, queueReactNativeMicrotask: null };
  ({ callReactNativeMicrotasks: obj2[0], queueReactNativeMicrotask: obj2[1] } = obj);
  tmp2 = obj;
}
const result = require("MessageQueue").default.setReactNativeMicrotasksCallback(obj.callReactNativeMicrotasks);
global._flushReactNativeMicrotasks = () => obj.callReactNativeMicrotasks();

export default tmp2;