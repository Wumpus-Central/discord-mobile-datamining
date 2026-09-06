// === Module 288: ? ===

// Module 288
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
                let tmp8 = sum;
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
      if (null === first.callback) {
        let tmp9 = pop(closure_7);
        let arr = closure_7;
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
        closure_6.push(first);
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
  if (!c12) {
    let first = null;
    if (0 !== closure_6.length) {
      first = closure_6[0];
    }
    if (null !== first) {
      c12 = true;
      if (!c21) {
        c21 = true;
        T();
      }
    } else {
      let first1 = null;
      if (0 !== closure_7.length) {
        first1 = closure_7[0];
      }
      if (null !== first1) {
        closure_0 = handleTimeout;
        closure_22 = _setTimeout(() => {
          closure_0(fn());
        }, first1.startTime - arg0);
      }
    }
  }
}
function shouldYieldToHost() {
  let tmp = c14;
  if (!tmp) {
    tmp = 5 <= fn() - closure_23;
  }
  return tmp;
}
function performWorkUntilDeadline() {
  let tmp25Result;
  c14 = false;
  if (c21) {
    const tmp6 = fn();
    let tmp7 = tmp6;
    closure_23 = tmp6;
    try {
      c12 = false;
      if (c13) {
        c13 = false;
        _clearTimeout(c22);
        c22 = -1;
      }
      c11 = true;
      try {
        advanceTimers(tmp7);
        const tmp18 = peek(closure_6);
        _null = tmp18;
        let tmp20 = null;
        let tmp21 = peek;
        if (null !== tmp18) {
          if (tmp19.expirationTime <= tmp7) {
            while (true) {
              let callback = _null.callback;
              if (typeof callback === "function") {
                _null.callback = tmp20;
                let priorityLevel = _null.priorityLevel;
                tmp25Result = tmp25(_null.expirationTime <= tmp7);
                tmp7 = fn();
                if (typeof tmp25Result === "function") {
                  break;
                } else {
                  if (_null === peek(closure_6)) {
                    let tmp38 = pop(closure_6);
                  }
                  let tmp41 = advanceTimers(tmp7);
                  let tmp42 = closure_6;
                }
              } else {
                tmp42 = closure_6;
                let tmp69 = pop(closure_6);
              }
              let tmp44 = peek(tmp42);
              _null = tmp44;
              tmp21 = peek;
              if (tmp20 !== tmp44) {
                if (tmp45.expirationTime <= tmp7) {
                  continue;
                } else {
                  tmp21 = peek;
                  _null = tmp20;
                  tmp20 = tmp12;
                  priorityLevel = tmp12;
                  c11 = false;
                }
              }
            }
            _null.callback = tmp25Result;
            advanceTimers(tmp7);
          } else {
            tmp21 = peek;
          }
        }
        if (tmp20 === _null) {
          const tmp21Result = tmp21(closure_7);
          if (tmp20 !== tmp21Result) {
            tmp21 = requestHostTimeout;
            tmp7 = requestHostTimeout(handleTimeout, tmp21Result.startTime - tmp7);
          }
        }
      } catch (tmp60) {
        _null = null;
        priorityLevel = tmp4;
        c11 = tmp2;
        throw tmp60;
      }
    } catch (tmp63) {
      if (tmp3) {
        T();
      } else {
        c21 = tmp2;
      }
      throw tmp63;
    }
  }
}
function requestHostTimeout(handleTimeout, arg1) {
  closure_0 = handleTimeout;
  closure_22 = _setTimeout(() => {
    closure_0(fn());
  }, arg1);
}
if (typeof performance === "object") {
  const _performance2 = performance;
  if (typeof performance.now === "function") {
    const _performance = performance;
    const fn2 = function n() {
      return performance.now();
    };
    let unstable_now = fn2;
  }
  let closure_6 = [];
  let closure_7 = [];
  let num = 1;
  let c8 = 1;
  let c9 = null;
  let num2 = 3;
  let c10 = 3;
  let c11 = false;
  let c12 = false;
  let c13 = false;
  let c14 = false;
  let _setTimeout = setTimeout;
  _setTimeout = null;
  if (typeof setTimeout === "function") {
    _setTimeout = setTimeout;
  }
  let _clearTimeout = clearTimeout;
  _clearTimeout = null;
  if (typeof clearTimeout === "function") {
    _clearTimeout = clearTimeout;
  }
  let _setImmediate = setImmediate;
  _setImmediate = null;
  if (typeof setImmediate !== "undefined") {
    _setImmediate = setImmediate;
  }
  let c21 = false;
  let c22 = -1;
  let closure_23 = -1;
  if (typeof _setImmediate === "function") {
    function T() {
      _setImmediate(performWorkUntilDeadline);
    }
  } else {
    if (typeof globalThis.MessageChannel !== "undefined") {
      const messageChannel = new globalThis.MessageChannel();
      const port2 = messageChannel.port2;
      messageChannel.port1.onmessage = performWorkUntilDeadline;
      T = function T() {
        port2.postMessage(null);
      };
    } else {
      T = function T() {
        _setTimeout(performWorkUntilDeadline, 0);
      };
    }
  }
  let num4 = 2;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    num4 = globalThis.nativeRuntimeScheduler.unstable_UserBlockingPriority;
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    num2 = globalThis.nativeRuntimeScheduler.unstable_NormalPriority;
  }
  let num5 = 4;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    num5 = globalThis.nativeRuntimeScheduler.unstable_LowPriority;
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    num = globalThis.nativeRuntimeScheduler.unstable_ImmediatePriority;
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    let unstable_scheduleCallback$1 = globalThis.nativeRuntimeScheduler.unstable_scheduleCallback;
  } else {
    unstable_scheduleCallback$1 = function unstable_scheduleCallback$1(priorityLevel, callback, delay) {
      let diff1 = fn();
      let tmp2 = diff1;
      if (typeof delay === "object") {
        tmp2 = diff1;
        if (null !== delay) {
          delay = delay.delay;
          let sum = diff1;
          if (typeof delay === "number") {
            sum = diff1;
            if (0 < delay) {
              sum = diff1 + delay;
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
      const obj = { id: null, callback, priorityLevel, startTime: tmp2, expirationTime: null, sortIndex: -1 };
      closure_8 = tmp4 + 1;
      obj.id = +closure_8;
      const sum1 = tmp2 + num;
      obj.expirationTime = sum1;
      if (tmp2 > diff1) {
        obj.sortIndex = tmp2;
        let length2 = closure_7.length;
        let arr = closure_7.push(obj);
        if (0 < length2) {
          while (true) {
            let tmp15 = length2 - 1 >>> 1;
            let tmp16 = arr[tmp15];
            let diff = tmp16.sortIndex - obj.sortIndex;
            if (0 === diff) {
              diff = tmp16.id - obj.id;
            }
            if (0 >= diff) {
              break;
            } else {
              arr[tmp15] = obj;
              arr[length2] = tmp16;
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
          if (0 !== arr.length) {
            first1 = arr[0];
          }
          tmp21 = obj === first1;
        }
        if (tmp21) {
          if (c13) {
            _clearTimeout(closure_22);
            closure_22 = -1;
          } else {
            c13 = true;
          }
          diff1 = tmp2 - diff1;
          closure_0 = handleTimeout;
          tmp2 = _setTimeout(() => {
            closure_0(fn());
          }, diff1);
          closure_22 = tmp2;
        }
      } else {
        obj.sortIndex = sum1;
        let length = closure_6.length;
        arr = closure_6.push(obj);
        if (0 < length) {
          while (true) {
            let tmp6 = length - 1 >>> 1;
            let tmp7 = closure_6[tmp6];
            let diff2 = tmp7.sortIndex - obj.sortIndex;
            if (0 === diff2) {
              diff2 = tmp7.id - obj.id;
            }
            if (0 >= diff2) {
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
        let tmp10 = c12;
        if (!c12) {
          tmp10 = c11;
        }
        if (!tmp10) {
          c12 = true;
          if (!c21) {
            c21 = true;
            T();
          }
        }
      }
      return obj;
    };
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    let unstable_cancelCallback$1 = globalThis.nativeRuntimeScheduler.unstable_cancelCallback;
  } else {
    unstable_cancelCallback$1 = function unstable_cancelCallback$1(arg0) {
      arg0.callback = null;
    };
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    let unstable_getCurrentPriorityLevel$1 = globalThis.nativeRuntimeScheduler.unstable_getCurrentPriorityLevel;
  } else {
    unstable_getCurrentPriorityLevel$1 = function unstable_getCurrentPriorityLevel$1() {
      return closure_10;
    };
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    shouldYieldToHost = globalThis.nativeRuntimeScheduler.unstable_shouldYield;
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    let requestPaint = globalThis.nativeRuntimeScheduler.unstable_requestPaint;
  } else {
    requestPaint = function requestPaint() {
      c14 = true;
    };
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    unstable_now = globalThis.nativeRuntimeScheduler.unstable_now;
  }
  let num6 = 5;
  if (typeof globalThis.nativeRuntimeScheduler !== "undefined") {
    num6 = globalThis.nativeRuntimeScheduler.unstable_IdlePriority;
  }
  function throwNotImplemented() {
    throw Error("Not implemented.");
  }
  arg5.unstable_IdlePriority = num6;
  arg5.unstable_ImmediatePriority = num;
  arg5.unstable_LowPriority = num5;
  arg5.unstable_NormalPriority = num2;
  arg5.unstable_Profiling = null;
  arg5.unstable_UserBlockingPriority = num4;
  arg5.unstable_cancelCallback = unstable_cancelCallback$1;
  arg5.unstable_forceFrameRate = throwNotImplemented;
  arg5.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel$1;
  arg5.unstable_next = throwNotImplemented;
  arg5.unstable_now = unstable_now;
  arg5.unstable_requestPaint = requestPaint;
  arg5.unstable_runWithPriority = throwNotImplemented;
  arg5.unstable_scheduleCallback = unstable_scheduleCallback$1;
  arg5.unstable_shouldYield = shouldYieldToHost;
  arg5.unstable_wrapCallback = throwNotImplemented;
}
let closure_5 = Date.now();
unstable_now = function n() {
  return Date.now() - closure_5;
};