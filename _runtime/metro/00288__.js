// === Module 288: ? ===

// Module 288
let _null, closure_8;

function peek(arg0) {
  let first = null;
  if (0 !== arg0.length) {
    first = arg0[0];
  }
  return first;
}
function pop(arr) {
  if (0 === arr.length) {
    return null;
  } else {
    const first = arr[0];
    arr = arr.pop();
    if (arr !== first) {
      arr[0] = arr;
      let num = 0;
      if (0 < arr.length >>> 1) {
        while (true) {
          let tmp8;
          let diff = 2 * (num + 1) - 1;
          let tmp2 = arr[diff];
          let sum = diff + 1;
          let tmp4 = arr[sum];
          let diff1 = tmp2.sortIndex - arr.sortIndex;
          if (0 === diff1) {
            diff1 = tmp2.id - arr.id;
          }
          if (0 > diff1) {
            if (sum < length) {
              let diff2 = tmp4.sortIndex - tmp2.sortIndex;
              if (0 === diff2) {
                diff2 = tmp4.id - tmp2.id;
              }
              if (0 > diff2) {
                arr[num] = tmp4;
                arr[sum] = arr;
                tmp8 = sum;
                num = tmp8;
                if (tmp8 >= tmp13) {
                  break;
                }
              }
            }
            arr[num] = tmp2;
            arr[diff] = arr;
            tmp8 = diff;
          } else if (sum >= length) {
            break;
          } else {
            let diff3 = tmp4.sortIndex - arr.sortIndex;
            if (0 === diff3) {
              diff3 = tmp4.id - arr.id;
            }
            if (0 <= diff3) {
              break;
            } else {
              arr[num] = tmp4;
              arr[sum] = arr;
              tmp8 = sum;
            }
          }
          break;
        }
      }
    }
    return first;
  }
}
function advanceTimers(arg0) {
  let first = null;
  if (0 !== closure_7.length) {
    first = closure_7[0];
  }
  if (null !== first) {
    while (true) {
      let arr;
      if (null === first.callback) {
        let tmp9 = pop(closure_7);
        arr = closure_7;
        let first1 = null;
        if (0 !== arr.length) {
          first1 = arr[0];
        }
        first = first1;
        if (null === first1) {
          break;
        }
      } else if (first.startTime > arg0) {
        break;
      } else {
        let tmp13 = pop(closure_7);
        first.sortIndex = first.expirationTime;
        let length = closure_6.length;
        let arr2 = closure_6.push(first);
        arr = closure_7;
        if (0 < length) {
          while (true) {
            let tmp3 = length - 1 >>> 1;
            let tmp4 = closure_6[tmp3];
            let diff = tmp4.sortIndex - first.sortIndex;
            if (0 === diff) {
              diff = tmp4.id - first.id;
            }
            arr = closure_7;
            if (0 >= diff) {
              break;
            } else {
              closure_6[tmp3] = first;
              closure_6[length] = tmp4;
              arr = closure_7;
              length = tmp3;
              if (0 < tmp3) {
                continue;
              } else {
                break;
              }
              break;
            }
          }
        }
      }
      break;
    }
  }
}
function handleTimeout(arg0) {
  c13 = false;
  advanceTimers(arg0);
  const tmp2 = c12;
  if (!tmp2) {
    let first = null;
    if (0 !== closure_6.length) {
      first = closure_6[0];
    }
    if (null !== first) {
      c12 = true;
      const tmp8 = c21;
      if (!tmp8) {
        c21 = true;
        T();
      }
    } else {
      let first1 = null;
      if (0 !== closure_7.length) {
        first1 = closure_7[0];
      }
      if (null !== first1) {
        let closure_0 = handleTimeout;
        let closure_22 = _setTimeout1(() => {
          closure_0(fn());
        }, first1.startTime - arg0);
      }
    }
  }
}
function shouldYieldToHost() {
  const tmp = c14 || 5 <= fn() - closure_23;
  return tmp;
}
function performWorkUntilDeadline() {
  let tmp22Result;
  c14 = false;
  const tmp = c21;
  if (tmp) {
    const tmp3 = fn();
    let tmp4 = tmp3;
    closure_23 = tmp3;
    let flag2 = true;
    try {
      c12 = false;
      const tmp5 = c13;
      if (tmp5) {
        c13 = false;
        _clearTimeout1(c22);
        c22 = -1;
      }
      c11 = true;
      try {
        advanceTimers(tmp4);
        const tmp15 = peek(closure_6);
        _null = tmp15;
        let tmp18 = peek;
        if (null !== tmp15) {
          if (tmp16.expirationTime <= tmp4) {
            while (true) {
              let tmp39;
              let callback = _null.callback;
              if (typeof callback === "function") {
                _null.callback = null;
                let priorityLevel = _null.priorityLevel;
                tmp22Result = tmp22(_null.expirationTime <= tmp4);
                tmp4 = fn();
                if (typeof tmp22Result === "function") {
                  break;
                } else {
                  if (_null === peek(closure_6)) {
                    let tmp35 = pop(closure_6);
                  }
                  let tmp38 = advanceTimers(tmp4);
                  tmp39 = closure_6;
                }
              } else {
                tmp39 = closure_6;
                let tmp72 = pop(closure_6);
              }
              let tmp41 = peek(tmp39);
              _null = tmp41;
              tmp18 = peek;
              if (null !== tmp41) {
                if (tmp42.expirationTime <= tmp4) {
                  continue;
                } else {
                  tmp18 = peek;
                  _null = null;
                  priorityLevel = tmp9;
                  c11 = false;
                  let tmp60 = flag2;
                  if (tmp60) {
                    let tmp62 = T();
                  } else {
                    c21 = false;
                  }
                }
              }
            }
            _null.callback = tmp22Result;
            advanceTimers(tmp4);
            flag2 = true;
          } else {
            tmp18 = peek;
          }
        }
        if (null !== _null) {
          flag2 = true;
        } else {
          const tmp18Result = tmp18(closure_7);
          if (null !== tmp18Result) {
            requestHostTimeout(handleTimeout, tmp18Result.startTime - tmp4);
          }
          flag2 = false;
        }
      } catch (tmp63) {
        _null = null;
        priorityLevel = tmp9;
        c11 = false;
        throw tmp63;
      }
    } catch (tmp66) {
      if (flag2) {
        T();
      } else {
        c21 = false;
      }
      throw tmp66;
    }
  }
}
function requestHostTimeout(handleTimeout, arg1) {
  let closure_0 = handleTimeout;
  let closure_22 = _setTimeout1(() => {
    closure_0(fn());
  }, arg1);
}
if (typeof performance === "object") {
  let unstable_now;
  let unstable_scheduleCallback$1;
  let unstable_cancelCallback$1;
  let unstable_getCurrentPriorityLevel$1;
  let requestPaint;
  const _performance2 = performance;
  if (typeof performance.now === "function") {
    const _performance = performance;
    const fn2 = function n() {
      return performance.now();
    };
    unstable_now = fn2;
  }
  let closure_6 = [];
  let closure_7 = [];
  let num = 1;
  let c8 = 1;
  let tmp = null;
  let c9 = null;
  let num2 = 3;
  let closure_10 = 3;
  let c11 = false;
  let c12 = false;
  let c13 = false;
  let c14 = false;
  const _setTimeout = setTimeout;
  let _setTimeout1 = null;
  if (typeof setTimeout === "function") {
    _setTimeout1 = setTimeout;
  }
  const _clearTimeout = clearTimeout;
  let _clearTimeout1 = null;
  if (typeof clearTimeout === "function") {
    _clearTimeout1 = clearTimeout;
  }
  const _setImmediate = setImmediate;
  let _setImmediate1 = null;
  if (typeof setImmediate !== "undefined") {
    _setImmediate1 = setImmediate;
  }
  let c21 = false;
  let c22 = -1;
  let closure_23 = -1;
  if (typeof _setImmediate1 === "function") {
    function T() {
      _setImmediate1(performWorkUntilDeadline);
    }
  } else {
    const MessageChannel2 = globalThis.MessageChannel;
    if (typeof globalThis.MessageChannel !== "undefined") {
      const self = this;
      const self2 = this;
      const messageChannel = new globalThis.MessageChannel();
      let tmp6 = messageChannel;
      const port2 = messageChannel.port2;
      messageChannel.port1.onmessage = performWorkUntilDeadline;
      T = function T() {
        port2.postMessage(null);
      };
    } else {
      T = function T() {
        _setTimeout1(performWorkUntilDeadline, 0);
      };
    }
  }
  let num4 = 2;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler16 = globalThis.nativeRuntimeScheduler;
    num4 = globalThis.nativeRuntimeScheduler.unstable_UserBlockingPriority;
  }
  const nativeRuntimeScheduler2 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler17 = globalThis.nativeRuntimeScheduler;
    num2 = globalThis.nativeRuntimeScheduler.unstable_NormalPriority;
  }
  const nativeRuntimeScheduler3 = globalThis.nativeRuntimeScheduler;
  let num5 = 4;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler18 = globalThis.nativeRuntimeScheduler;
    num5 = globalThis.nativeRuntimeScheduler.unstable_LowPriority;
  }
  const nativeRuntimeScheduler4 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler19 = globalThis.nativeRuntimeScheduler;
    num = globalThis.nativeRuntimeScheduler.unstable_ImmediatePriority;
  }
  const nativeRuntimeScheduler5 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler6 = globalThis.nativeRuntimeScheduler;
    unstable_scheduleCallback$1 = globalThis.nativeRuntimeScheduler.unstable_scheduleCallback;
  } else {
    unstable_scheduleCallback$1 = function unstable_scheduleCallback$1(priorityLevel, callback, delay) {
      let sum1;
      const tmp = fn();
      let tmp2 = tmp;
      if (typeof delay === "object") {
        tmp2 = tmp;
        if (null !== delay) {
          delay = delay.delay;
          let sum = tmp;
          if (typeof delay === "number") {
            sum = tmp;
            if (0 < delay) {
              sum = tmp + delay;
            }
          }
          tmp2 = sum;
        }
      }
      let num = -1;
      if (1 !== priorityLevel) {
        if (2 === priorityLevel) {
          num = 250;
        } else if (5 === priorityLevel) {
          num = 1073741823;
        } else {
          num = 4 === priorityLevel ? 10000 : 5000;
        }
      }
      const obj = { id: +closure_8, callback, priorityLevel, startTime: tmp2, expirationTime: sum1, sortIndex: -1 };
      closure_8 = tmp4 + 1;
      sum1 = tmp2 + num;
      if (tmp2 > tmp) {
        obj.sortIndex = tmp2;
        let length2 = closure_7.length;
        closure_7.push(obj);
        if (0 < length2) {
          while (true) {
            let tmp15 = length2 - 1 >>> 1;
            let tmp16 = closure_7[tmp15];
            let diff = tmp16.sortIndex - obj.sortIndex;
            if (0 === diff) {
              diff = tmp16.id - obj.id;
            }
            if (0 >= diff) {
              break;
            } else {
              closure_7[tmp15] = obj;
              closure_7[length2] = tmp16;
              length2 = tmp15;
              if (0 >= tmp15) {
                break;
              }
            }
          }
        }
        let first = null;
        if (0 !== closure_6.length) {
          first = closure_6[0];
        }
        let tmp21 = null === first;
        if (tmp21) {
          let first1 = null;
          if (0 !== closure_7.length) {
            first1 = closure_7[0];
          }
          tmp21 = obj === first1;
        }
        if (tmp21) {
          const tmp23 = c13;
          if (tmp23) {
            _clearTimeout1(closure_22);
            closure_22 = -1;
          } else {
            c13 = true;
          }
          let closure_0 = handleTimeout;
          closure_22 = _setTimeout1(() => {
            closure_0(fn());
          }, tmp2 - tmp);
        }
      } else {
        obj.sortIndex = sum1;
        let length = closure_6.length;
        closure_6.push(obj);
        if (0 < length) {
          while (true) {
            let tmp6 = length - 1 >>> 1;
            let tmp7 = closure_6[tmp6];
            let diff1 = tmp7.sortIndex - obj.sortIndex;
            if (0 === diff1) {
              diff1 = tmp7.id - obj.id;
            }
            if (0 >= diff1) {
              break;
            } else {
              closure_6[tmp6] = obj;
              closure_6[length] = tmp7;
              length = tmp6;
              if (0 >= tmp6) {
                break;
              }
            }
          }
        }
        const tmp10 = c12 || c11;
        if (!tmp10) {
          c12 = true;
          const tmp11 = c21;
          if (!tmp11) {
            c21 = true;
            T();
          }
        }
      }
      return obj;
    };
  }
  const nativeRuntimeScheduler7 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler8 = globalThis.nativeRuntimeScheduler;
    unstable_cancelCallback$1 = globalThis.nativeRuntimeScheduler.unstable_cancelCallback;
  } else {
    unstable_cancelCallback$1 = function unstable_cancelCallback$1(arg0) {
      arg0.callback = null;
    };
  }
  const nativeRuntimeScheduler9 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler10 = globalThis.nativeRuntimeScheduler;
    unstable_getCurrentPriorityLevel$1 = globalThis.nativeRuntimeScheduler.unstable_getCurrentPriorityLevel;
  } else {
    unstable_getCurrentPriorityLevel$1 = function unstable_getCurrentPriorityLevel$1() {
      return closure_10;
    };
  }
  const nativeRuntimeScheduler11 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler20 = globalThis.nativeRuntimeScheduler;
    shouldYieldToHost = globalThis.nativeRuntimeScheduler.unstable_shouldYield;
  }
  const nativeRuntimeScheduler12 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler13 = globalThis.nativeRuntimeScheduler;
    requestPaint = globalThis.nativeRuntimeScheduler.unstable_requestPaint;
  } else {
    requestPaint = function requestPaint() {
      c14 = true;
    };
  }
  const nativeRuntimeScheduler14 = globalThis.nativeRuntimeScheduler;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler21 = globalThis.nativeRuntimeScheduler;
    unstable_now = globalThis.nativeRuntimeScheduler.unstable_now;
  }
  const nativeRuntimeScheduler15 = globalThis.nativeRuntimeScheduler;
  let num6 = 5;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    const nativeRuntimeScheduler22 = globalThis.nativeRuntimeScheduler;
    num6 = globalThis.nativeRuntimeScheduler.unstable_IdlePriority;
  }
  let tmp7 = exports;
  function throwNotImplemented() {
    throw Error("Not implemented.");
  }
  exports.unstable_IdlePriority = num6;
  exports.unstable_ImmediatePriority = num;
  exports.unstable_LowPriority = num5;
  exports.unstable_NormalPriority = num2;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = num4;
  exports.unstable_cancelCallback = unstable_cancelCallback$1;
  exports.unstable_forceFrameRate = throwNotImplemented;
  exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel$1;
  exports.unstable_next = throwNotImplemented;
  exports.unstable_now = unstable_now;
  exports.unstable_requestPaint = requestPaint;
  exports.unstable_runWithPriority = throwNotImplemented;
  exports.unstable_scheduleCallback = unstable_scheduleCallback$1;
  exports.unstable_shouldYield = shouldYieldToHost;
  exports.unstable_wrapCallback = throwNotImplemented;
}
let closure_5 = Date.now();
unstable_now = function n() {
  return Date.now() - closure_5;
};