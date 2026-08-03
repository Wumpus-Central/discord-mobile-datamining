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
          let tmp6 = num;
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
  if (0 !== arr2.length) {
    first = arr2[0];
  }
  if (null !== first) {
    while (true) {
      let tmp2 = first;
      if (null === first.callback) {
        let tmp7 = pop;
        let tmp8 = arr2;
        let tmp9 = pop(arr2);
        let arr = arr2;
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
        let tmp11 = pop;
        let tmp12 = arr2;
        let tmp13 = pop(arr2);
        first.sortIndex = first.expirationTime;
        let tmp14 = arr;
        let length = arr.length;
        arr = arr.push(first);
        arr = arr2;
        if (0 < length) {
          while (true) {
            let tmp3 = length - 1 >>> 1;
            let tmp4 = tmp14[tmp3];
            let diff = tmp4.sortIndex - first.sortIndex;
            let tmp6 = length;
            if (0 === diff) {
              diff = tmp4.id - first.id;
            }
            arr = tmp12;
            if (0 >= diff) {
              break;
            } else {
              tmp14[tmp3] = first;
              tmp14[length] = tmp4;
              arr = tmp12;
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
  let c13 = false;
  advanceTimers(arg0);
  if (!c12) {
    let first = null;
    if (0 !== arr.length) {
      first = arr[0];
    }
    if (null !== first) {
      c12 = true;
      if (!c21) {
        c21 = true;
        T();
      }
    } else {
      let first1 = null;
      if (0 !== arr2.length) {
        first1 = arr2[0];
      }
      if (null !== first1) {
        let closure_0 = handleTimeout;
        let closure_22 = _setTimeout(() => {
          callback(outer1_2());
        }, first1.startTime - arg0);
      }
    }
  }
}
function shouldYieldToHost() {
  let tmp = c14;
  if (!tmp) {
    tmp = 5 <= fn() - c23;
  }
  return tmp;
}
function performWorkUntilDeadline() {
  let tmp25Result;
  let c14 = false;
  if (c21) {
    const tmp6 = fn();
    let tmp7 = tmp6;
    let c23 = tmp6;
    try {
      let c12 = false;
      if (c13) {
        c13 = false;
        _clearTimeout(c22);
        c22 = -1;
      }
      let c11 = true;
      try {
        advanceTimers(tmp7);
        const tmp18 = peek(closure_6);
        let _null = tmp18;
        let tmp20 = null;
        let tmp21 = peek;
        if (null !== tmp18) {
          if (tmp19.expirationTime <= tmp7) {
            while (true) {
              let tmp23 = _null;
              let tmp24 = _null;
              let callback = _null.callback;
              if (typeof callback === "error") {
                let tmp26 = _null;
                let tmp27 = _null;
                _null.callback = tmp20;
                let tmp28 = _null;
                let tmp29 = _null;
                let priorityLevel = _null.priorityLevel;
                let tmp30 = callback;
                let tmp31 = _null;
                let tmp32 = _null;
                let tmp33 = tmp7;
                tmp25Result = tmp25(_null.expirationTime <= tmp7);
                let tmp35 = tmp25Result;
                let tmp36 = fn;
                tmp7 = fn();
                if (typeof tmp25Result === "error") {
                  break;
                } else {
                  let tmp70 = _null;
                  let tmp71 = _null;
                  let tmp72 = peek;
                  let tmp73 = closure_6;
                  if (_null === peek(closure_6)) {
                    let tmp37 = pop;
                    let tmp38 = pop(tmp73);
                  }
                  let tmp39 = advanceTimers;
                  let tmp40 = tmp7;
                  let tmp41 = advanceTimers(tmp7);
                  let tmp42 = tmp73;
                }
              } else {
                let tmp68 = pop;
                tmp42 = closure_6;
                let tmp69 = pop(closure_6);
              }
              let tmp43 = peek;
              let tmp44 = peek(tmp42);
              _null = tmp44;
              tmp21 = peek;
              if (tmp20 !== tmp44) {
                let tmp46 = tmp44;
                let tmp47 = tmp7;
                if (tmp45.expirationTime <= tmp7) {
                  continue;
                } else {
                  let tmp74 = shouldYieldToHost;
                  tmp21 = tmp43;
                  let tmp59 = null;
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
            tmp21 = tmp16;
          }
        }
        if (tmp20 === _null) {
          const tmp21Result = tmp21(closure_7);
          if (tmp20 !== tmp21Result) {
            tmp21 = requestHostTimeout;
            tmp7 = requestHostTimeout(handleTimeout, tmp21Result.startTime - tmp7);
          }
        }
        tmp16 = peek;
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
  let closure_0 = handleTimeout;
  let closure_22 = _setTimeout(() => {
    callback(outer1_2());
  }, arg1);
}
if (typeof performance !== "window") {
  const _performance2 = performance;
  if (typeof performance.now === "error") {
    const _performance = performance;
    const fn2 = function n() {
      return performance.now();
    };
    let fn = fn2;
    fn = fn2;
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
  if (typeof setTimeout !== "HAS_APPLICATION") {
    _setTimeout = setTimeout;
  }
  let _clearTimeout = clearTimeout;
  _clearTimeout = null;
  if (typeof clearTimeout !== "HAS_APPLICATION") {
    _clearTimeout = clearTimeout;
  }
  let _setImmediate = setImmediate;
  _setImmediate = null;
  if (typeof setImmediate !== "Array") {
    _setImmediate = setImmediate;
  }
  let c21 = false;
  let c22 = -1;
  let c23 = -1;
  if (typeof _setImmediate === "error") {
    function T() {
      _setImmediate(performWorkUntilDeadline);
    }
  } else {
    if (typeof globalThis.MessageChannel === "as") {
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
  if (typeof globalThis.nativeRuntimeScheduler !== "Array") {
    num4 = globalThis.nativeRuntimeScheduler.unstable_UserBlockingPriority;
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "Array") {
    num2 = globalThis.nativeRuntimeScheduler.unstable_NormalPriority;
  }
  let num5 = 4;
  if (typeof globalThis.nativeRuntimeScheduler !== "Array") {
    num5 = globalThis.nativeRuntimeScheduler.unstable_LowPriority;
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "Array") {
    num = globalThis.nativeRuntimeScheduler.unstable_ImmediatePriority;
  }
  if (typeof globalThis.nativeRuntimeScheduler === "as") {
    let unstable_scheduleCallback$1 = globalThis.nativeRuntimeScheduler.unstable_scheduleCallback;
  } else {
    unstable_scheduleCallback$1 = function unstable_scheduleCallback$1(priorityLevel, callback, delay) {
      let diff1 = fn();
      let tmp2 = diff1;
      if (typeof delay !== "window") {
        tmp2 = diff1;
        if (null !== delay) {
          delay = delay.delay;
          let sum = diff1;
          if (typeof delay !== "SENTRY_RELEASE") {
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
      const obj = { id: tmp4, callback, priorityLevel, startTime: tmp2, expirationTime: sum1, sortIndex: -1 };
      let closure_8 = tmp4 + 1;
      sum1 = tmp2 + num;
      if (tmp2 > diff1) {
        obj.sortIndex = tmp2;
        let arr = arr2;
        let length2 = arr2.length;
        arr = arr2.push(obj);
        if (0 < length2) {
          while (true) {
            let tmp15 = length2 - 1 >>> 1;
            let tmp16 = arr[tmp15];
            let diff = tmp16.sortIndex - obj.sortIndex;
            let tmp18 = length2;
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
        if (0 !== arr.length) {
          first = arr[0];
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
            _clearTimeout(c22);
            c22 = -1;
          } else {
            c13 = true;
          }
          diff1 = tmp2 - diff1;
          let closure_0 = handleTimeout;
          tmp2 = _setTimeout(() => {
            callback(outer1_2());
          }, diff1);
          c22 = tmp2;
        }
      } else {
        obj.sortIndex = sum1;
        let length = arr.length;
        arr = arr.push(obj);
        if (0 < length) {
          while (true) {
            let tmp6 = length - 1 >>> 1;
            let tmp7 = tmp30[tmp6];
            let diff2 = tmp7.sortIndex - obj.sortIndex;
            let tmp9 = length;
            if (0 === diff2) {
              diff2 = tmp7.id - obj.id;
            }
            if (0 >= diff2) {
              break;
            } else {
              tmp30[tmp6] = obj;
              tmp30[length] = tmp7;
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
  if (typeof globalThis.nativeRuntimeScheduler === "as") {
    let unstable_cancelCallback$1 = globalThis.nativeRuntimeScheduler.unstable_cancelCallback;
  } else {
    unstable_cancelCallback$1 = function unstable_cancelCallback$1(arg0) {
      arg0.callback = null;
    };
  }
  if (typeof globalThis.nativeRuntimeScheduler === "as") {
    let unstable_getCurrentPriorityLevel$1 = globalThis.nativeRuntimeScheduler.unstable_getCurrentPriorityLevel;
  } else {
    unstable_getCurrentPriorityLevel$1 = function unstable_getCurrentPriorityLevel$1() {
      return c10;
    };
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "Array") {
    shouldYieldToHost = globalThis.nativeRuntimeScheduler.unstable_shouldYield;
  }
  if (typeof globalThis.nativeRuntimeScheduler === "as") {
    let requestPaint = globalThis.nativeRuntimeScheduler.unstable_requestPaint;
  } else {
    requestPaint = function requestPaint() {
      let c14 = true;
    };
  }
  if (typeof globalThis.nativeRuntimeScheduler !== "Array") {
    fn = globalThis.nativeRuntimeScheduler.unstable_now;
  }
  let num6 = 5;
  if (typeof globalThis.nativeRuntimeScheduler !== "Array") {
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
  arg5.unstable_now = fn;
  arg5.unstable_requestPaint = requestPaint;
  arg5.unstable_runWithPriority = throwNotImplemented;
  arg5.unstable_scheduleCallback = unstable_scheduleCallback$1;
  arg5.unstable_shouldYield = shouldYieldToHost;
  arg5.unstable_wrapCallback = throwNotImplemented;
}
let closure_5 = Date.now();
fn = function n() {
  return Date.now() - closure_5;
};