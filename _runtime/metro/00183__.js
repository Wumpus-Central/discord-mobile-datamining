// === Module 183: ? ===

// Module 183
import _mod38 from "module_38" /* 38 */;
import _mod39 from "module_39" /* 39 */;
import toError from "toError" /* 184 */;
import TimingDefault from "Timing" /* 185 */;

const require = globalThis.__r;
let _global, _require;

function _callTimer(arr, _performance, didTimeout) {
  _global = _performance;
  if (arr > closure_12) {
    const _console = console;
    console.warn("Tried to call timer with ID %s but no such timer exists.", arr);
  }
  const index = closure_7.indexOf(arr);
  if (-1 !== index) {
    if (closure_5[index]) {
      if (closure_6[index]) {
        if ("setInterval" !== closure_6[index]) {
          _clearIndex(index);
        }
        try {
          if ("setTimeout" !== closure_6[index]) {
            if ("setInterval" !== closure_6[index]) {
              if ("queueReactNativeMicrotask" !== closure_6[index]) {
                if ("requestAnimationFrame" === closure_6[index]) {
                  _performance = _global.performance;
                  closure_5[index](_performance.now());
                } else if ("requestIdleCallback" === closure_6[index]) {
                  obj = {
                    timeRemaining() {
                                      _performance = global.performance;
                                      return Math.max(0, c4 - (_performance.now() - closure_0));
                                    },
                    didTimeout
                  };
                  closure_5[index](obj);
                } else {
                  const _console3 = console;
                  console.error("Tried to call a callback with invalid type: " + closure_6[index]);
                }
              }
            }
          }
          closure_5[index]();
        } catch (tmp15) {
          const push = closure_13.push;
          const obj2 = toError;
          arr = push(obj2.default(tmp15));
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
  closure_8.push(index);
}
let c4 = 16.666666666666668;
let closure_5 = [];
let closure_6 = [];
let closure_7 = [];
let closure_8 = [];
let closure_9 = [];
let closure_10 = [];
let closure_11 = {};
let closure_12 = 1;
let closure_13 = [];
let c14 = false;
let obj = {
  setTimeout(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = [...arguments].slice();
    closure_12 = tmp + 1;
    let length = closure_8.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    let num = arg1;
    closure_7[length] = +closure_12;
    closure_5[length] = () => closure_0.apply(undefined, closure_1);
    closure_6[length] = "setTimeout";
    if (!arg1) {
      num = 0;
    }
    const timestamp = Date.now();
    const tmp4 = _mod38;
    tmp4(TimingDefault, "NativeTiming is available");
    obj = TimingDefault;
    const timer = obj.createTimer(tmp, num, timestamp, false);
    return +closure_12;
  },
  setInterval(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = [...arguments].slice();
    closure_12 = tmp + 1;
    let length = closure_8.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    let num = arg1;
    closure_7[length] = +closure_12;
    closure_5[length] = () => closure_0.apply(undefined, closure_1);
    closure_6[length] = "setInterval";
    if (!arg1) {
      num = 0;
    }
    const timestamp = Date.now();
    const tmp4 = _mod38;
    tmp4(TimingDefault, "NativeTiming is available");
    obj = TimingDefault;
    const timer = obj.createTimer(tmp, num, timestamp, true);
    return +closure_12;
  },
  queueReactNativeMicrotask(arg0) {
    let closure_0 = arg0;
    let closure_1 = [...arguments].slice();
    closure_12 = tmp + 1;
    let length = closure_8.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    closure_7[length] = +closure_12;
    closure_5[length] = () => closure_0.apply(undefined, closure_1);
    closure_6[length] = "queueReactNativeMicrotask";
    closure_9.push(+closure_12);
    return +closure_12;
  },
  requestAnimationFrame(step) {
    closure_12 = tmp + 1;
    let length = closure_8.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    closure_7[length] = +closure_12;
    closure_5[length] = step;
    closure_6[length] = "requestAnimationFrame";
    const timestamp = Date.now();
    const tmp4 = _mod38;
    tmp4(TimingDefault, "NativeTiming is available");
    obj = TimingDefault;
    const timer = obj.createTimer(tmp, 1, timestamp, false);
    return +closure_12;
  },
  requestIdleCallback(arg0, timeout) {
    let closure_1;
    let fn = arg0;
    let closure_0 = arg0;
    if (0 === closure_10.length) {
      const tmp = _require;
      const tmp3 = require("module_38");
      tmp3(TimingDefault, "NativeTiming is available");
      obj = TimingDefault;
      obj.setSendIdleEvents(true);
    }
    if (null != (timeout && timeout.timeout)) {
      fn = (arg0) => {
        if (closure_11[closure_1]) {
          obj.clearTimeout(closure_11[closure_1]);
          delete tmp[tmp2];
        }
        return closure_0(arg0);
      };
    }
    closure_12 = tmp8 + 1;
    let length = closure_8.pop();
    if (undefined === length) {
      length = closure_7.length;
    }
    closure_7[length] = +closure_12;
    closure_5[length] = fn;
    closure_6[length] = "requestIdleCallback";
    _require = tmp8;
    closure_10.push(+closure_12);
    if (null != (timeout && timeout.timeout)) {
      closure_11[+closure_12] = obj.setTimeout(() => {
        const index = closure_10.indexOf(closure_1);
        if (index > -1) {
          closure_10.splice(index, 1);
          const _performance = global.performance;
          _callTimer(closure_1, _performance.now(), true);
        }
        delete closure_11[closure_1];
        if (0 === closure_10.length) {
          const tmp10 = _mod38;
          tmp10(TimingDefault, "NativeTiming is available");
          obj = TimingDefault;
          obj.setSendIdleEvents(false);
        }
      }, timeout && timeout.timeout);
    }
    return +closure_12;
  },
  cancelIdleCallback(arg0) {
    const tmp = arg0;
    if (null != arg0) {
      const index = closure_7.indexOf(arg0);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        closure_6[index] = null;
        closure_8.push(index);
        const tmp2 = "queueReactNativeMicrotask" !== tmp25 && "requestIdleCallback" !== tmp25;
        if (tmp2) {
          const tmp5 = _mod38;
          tmp5(TimingDefault, "NativeTiming is available");
          obj = TimingDefault;
          obj.deleteTimer(arg0);
        }
      }
    }
    const index1 = closure_10.indexOf(arg0);
    if (-1 !== index1) {
      closure_10.splice(index1, 1);
    }
    if (closure_11[arg0]) {
      obj.clearTimeout(closure_11[arg0]);
      delete tmp12[tmp];
    }
    if (0 === closure_10.length) {
      const tmp18 = _mod38;
      tmp18(TimingDefault, "NativeTiming is available");
      const obj2 = TimingDefault;
      obj2.setSendIdleEvents(false);
    }
  },
  clearTimeout(arg0) {
    if (null != arg0) {
      const index = closure_7.indexOf(arg0);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        closure_6[index] = null;
        closure_8.push(index);
        const tmp = "queueReactNativeMicrotask" !== tmp11 && "requestIdleCallback" !== tmp11;
        if (tmp) {
          const tmp4 = _mod38;
          tmp4(TimingDefault, "NativeTiming is available");
          obj = TimingDefault;
          obj.deleteTimer(arg0);
        }
      }
    }
  },
  clearInterval(current) {
    if (null != current) {
      const index = closure_7.indexOf(current);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        closure_6[index] = null;
        closure_8.push(index);
        const tmp = "queueReactNativeMicrotask" !== tmp11 && "requestIdleCallback" !== tmp11;
        if (tmp) {
          const tmp4 = _mod38;
          tmp4(TimingDefault, "NativeTiming is available");
          obj = TimingDefault;
          obj.deleteTimer(current);
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
        closure_6[index] = null;
        closure_8.push(index);
        const tmp = "queueReactNativeMicrotask" !== tmp14 && "requestIdleCallback" !== tmp14;
        if (tmp) {
          const tmp4 = _mod38;
          tmp4(TimingDefault, "NativeTiming is available");
          obj = TimingDefault;
          obj.deleteTimer(arg0);
        }
      }
    }
    const index1 = closure_9.indexOf(arg0);
    if (-1 !== index1) {
      closure_9.splice(index1, 1);
    }
  },
  cancelAnimationFrame(current) {
    if (null != current) {
      const index = closure_7.indexOf(current);
      if (-1 !== index) {
        closure_7[index] = null;
        closure_5[index] = null;
        closure_6[index] = null;
        closure_8.push(index);
        const tmp = "queueReactNativeMicrotask" !== tmp11 && "requestIdleCallback" !== tmp11;
        if (tmp) {
          const tmp4 = _mod38;
          tmp4(TimingDefault, "NativeTiming is available");
          obj = TimingDefault;
          obj.deleteTimer(current);
        }
      }
    }
  },
  callTimers(arg0) {
    let length;
    _mod38(0 !== arg0.length, "Cannot call `callTimers` with an empty list of IDs.");
    closure_13.length = 0;
    let num = 0;
    if (0 < arg0.length) {
      do {
        let tmp3 = _callTimer(arg0[num], 0);
        num = num + 1;
        length = arg0.length;
      } while (num < length);
    }
    if (closure_13.length > 0) {
      let tmp5 = closure_13;
      if (closure_13.length > 1) {
        let num2 = 1;
        tmp5 = closure_13;
        if (1 < closure_13.length) {
          do {
            let fn = (arg0) => {
              throw arg0;
            };
            let timerId = obj.setTimeout(fn.bind(null, closure_13[num2]), 0);
            num2 = num2 + 1;
            tmp5 = closure_13;
          } while (num2 < closure_13.length);
        }
      }
      throw tmp5[0];
    }
  },
  callIdleCallbacks(_performance) {
    let length;
    let timeout;
    if (c4 - (Date.now() - _performance) >= 1) {
      closure_13.length = 0;
      if (closure_10.length > 0) {
        closure_10 = [];
        let num = 0;
        if (0 < closure_10.length) {
          do {
            let tmp2 = _callTimer(arr[num], _performance);
            num = num + 1;
            length = arr.length;
          } while (num < length);
        }
      }
      if (0 === closure_10.length) {
        const tmp6 = _mod38;
        tmp6(TimingDefault, "NativeTiming is available");
        obj = TimingDefault;
        obj.setSendIdleEvents(false);
      }
      const item = closure_13.forEach((item) => {
        let closure_0 = item;
        return timeout.setTimeout(() => {
          throw closure_0;
        }, 0);
      });
    }
  },
  callReactNativeMicrotasks() {
    let flag2;
    let length;
    let length2;
    let timeout;
    closure_13.length = 0;
    let flag = false;
    if (0 !== closure_9.length) {
      closure_9 = [];
      let num2 = 0;
      if (0 < closure_9.length) {
        do {
          let tmp2 = _callTimer(arr[num2], 0);
          num2 = num2 + 1;
          length = arr.length;
        } while (num2 < length);
      }
      flag = closure_9.length > 0;
    }
    if (flag) {
      do {
        flag2 = false;
        if (0 !== closure_9.length) {
          let arr2 = closure_9;
          closure_9 = [];
          let num3 = 0;
          if (0 < closure_9.length) {
            do {
              let tmp6 = _callTimer(arr2[num3], 0);
              num3 = num3 + 1;
              length2 = arr2.length;
            } while (num3 < length2);
          }
          flag2 = closure_9.length > 0;
        }
      } while (flag2);
    }
    const item = closure_13.forEach((item) => {
      let closure_0 = item;
      return timeout.setTimeout(() => {
        throw closure_0;
      }, 0);
    });
  },
  emitTimeDriftWarning(arg0) {
    const tmp = c14;
    if (!tmp) {
      c14 = true;
      const _console = console;
      console.warn(arg0);
    }
  }
};
let tmp2 = obj;
if (!TimingDefault) {
  let _console = console;
  const str = "Timing native module is not available, can't set timers.";
  console.warn("Timing native module is not available, can't set timers.");
  const obj3 = { callReactNativeMicrotasks: null, queueReactNativeMicrotask: null };
  ({ callReactNativeMicrotasks: obj2.callReactNativeMicrotasks, queueReactNativeMicrotask: obj2.queueReactNativeMicrotask } = obj);
  tmp2 = obj3;
}
const _default = _mod39.default;
const result = _default.setReactNativeMicrotasksCallback(obj.callReactNativeMicrotasks);
global._flushReactNativeMicrotasks = () => obj.callReactNativeMicrotasks();

export default tmp2;