// === Module 1064: weakMap ===

// Module 1064 (weakMap)
import react2 from "react" /* 19 */;
import _mod693 from "module_693" /* 693 */;
import defaultTransactionSource from "defaultTransactionSource" /* 1032 */;
import SPAN_ORIGIN_AUTO_INTERACTION from "SPAN_ORIGIN_AUTO_INTERACTION" /* 1034 */;
import nativeComponentExists from "nativeComponentExists" /* 1065 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const react_mod = react2;
let _require, assign, c4, c5, createElement, dependencyMap, record, setStatus;

const f82992 = function*() {
  let closure_1;
  let value;
  function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
    const diff = totalFrames2.totalFrames - startFrames.totalFrames;
    const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
    const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
    if (diff <= 0) {
      if (diff1 <= 0) {
        if (diff2 <= 0) {
          const debug2 = closure_1_0(closure_1_1[2]).debug;
          const _HermesInternal = HermesInternal;
          debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
        }
      }
    }
    const attr = spanContext.setAttribute("frames.total", diff);
    const attr1 = spanContext.setAttribute("frames.slow", diff1);
    const attr2 = spanContext.setAttribute("frames.frozen", diff2);
    const debug = closure_1_0(closure_1_1[2]).debug;
    const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
    debug.log("[TimeToDisplay] Attached frame data to span.", obj);
  }
  if (c5 === 2) {
    c5 = 3;
    const str = "Generator functions may not be called on executing generators";
    throw new TypeError("Generator functions may not be called on executing generators");
  } else {
    const str2 = ", skipping frame data collection.";
    if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      let endFrames;
      try {
        let spanId;
        let tmp;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            spanId = undefined;
            tmp = undefined;
            endFrames = undefined;
            if (closure_0(tmp[6]).NATIVE.enableNative) {
              spanId = closure_0.spanContext().spanId;
              value = map.get(spanId);
              tmp = value;
              let startFrames;
              if (null != value) {
                startFrames = value.startFrames;
              }
              if (startFrames) {
                c3 = 2;
                c4 = 3;
                c5 = 1;
                const obj4 = { value: closure_1_15(), done: false };
                return obj4;
              } else {
                let debug2 = closure_0(tmp[2]).debug;
                const _HermesInternal2 = HermesInternal;
                const logResult = debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const tmp35 = endFrames;
          if (tmp.cleanupTimeout) {
            const _clearTimeout3 = clearTimeout;
            clearTimeout(tmp.cleanupTimeout);
          }
          map.delete(spanId);
          throw tmp35;
        } else {
          if (2 === c4) {
            c3 = 1;
            let closure_3 = endFrames;
            let debug = closure_0(tmp[2]).debug;
            let _HermesInternal = HermesInternal;
            debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", closure_3);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            if (tmp.cleanupTimeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp.cleanupTimeout);
            }
            map.delete(spanId);
            c5 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            endFrames = value;
            tmp.endFrames = endFrames;
            attachFrameDataToSpan(closure_129_0, tmp.startFrames, endFrames);
            const debug3 = closure_0(tmp[2]).debug;
            const _HermesInternal3 = HermesInternal;
            debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", endFrames);
            c3 = 1;
          }
          c3 = 0;
          if (tmp.cleanupTimeout) {
            const _clearTimeout2 = clearTimeout;
            clearTimeout(tmp.cleanupTimeout);
          }
          map.delete(spanId);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp54) {
        endFrames = tmp54;
        if (0 === c3) {
          c5 = 3;
          throw tmp54;
        } else if (1 === tmp56) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }
};
class TimeToInitialDisplay {
  constructor(initialDisplay) {
    const obj = _mod693;
    const activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      const result = weakMap.set(activeSpan, true);
    }
    let span_id = activeSpan;
    if (span_id) {
      const tmpResult = _mod693;
      span_id = tmpResult.spanToJSON(activeSpan).span_id;
    }
    return <TimeToDisplay initialDisplay={initialDisplay.record} parentSpanId={span_id}>{initialDisplay.children}</TimeToDisplay>;
  }
}
class TimeToFullDisplay {
  constructor(fullDisplay) {
    const obj = _mod693;
    const activeSpan = obj.getActiveSpan();
    let span_id = activeSpan;
    if (span_id) {
      const tmpResult = _mod693;
      span_id = tmpResult.spanToJSON(activeSpan).span_id;
    }
    return <TimeToDisplay fullDisplay={fullDisplay.record} parentSpanId={span_id}>{fullDisplay.children}</TimeToDisplay>;
  }
}
function TimeToDisplay(initialDisplay) {
  const obj = nativeComponentExists;
  return <>{react.createElement(obj.getRNSentryOnDrawReporter(), { initialDisplay: initialDisplay.initialDisplay, fullDisplay: initialDisplay.fullDisplay, parentSpanId: initialDisplay.parentSpanId })}{initialDisplay.children}</>;
}
function startTimeToInitialDisplaySpan(isAutoInstrumented) {
  let tmpResult2;
  let obj = _mod693;
  const activeSpan = obj.getActiveSpan();
  const obj2 = _mod693;
  if (activeSpan) {
    const spanDescendants = obj2.getSpanDescendants(activeSpan);
    const found = spanDescendants.find((item) => {
      const obj = _mod693;
      return "ui.load.initial_display" === obj.spanToJSON(item).op;
    });
    const tmpResult = _mod693;
    if (found) {
      const debug2 = tmpResult.debug;
      debug2.log("[TimeToDisplay] Found existing ui.load.initial_display span.");
      return found;
    } else {
      const _Object = Object;
      const startInactiveSpan = tmpResult.startInactiveSpan;
      const obj3 = { op: "ui.load.initial_display", name: "Time To Initial Display", startTime: tmpResult2.spanToJSON(activeSpan).start_timestamp };
      tmpResult2 = _mod693;
      const startInactiveSpanResult = startInactiveSpan(assign(obj3, isAutoInstrumented));
      const require = startInactiveSpanResult;
      if (require) {
        const spanId = startInactiveSpanResult.spanContext().spanId;
        const promise = closure_5(undefined, undefined, undefined, function*() {
          if (c5 === 2) {
            c5 = 3;
            const str = "Generator functions may not be called on executing generators";
            throw new TypeError("Generator functions may not be called on executing generators");
          } else {
            const str2 = ".";
            if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let c3;
              try {
                let startFrames;
                let cleanupTimeout;
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    startFrames = undefined;
                    cleanupTimeout = undefined;
                    closure_2 = undefined;
                    if (startFrames(cleanupTimeout[6]).NATIVE.enableNative) {
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj4 = { value: closure_1_15(), done: false };
                      return obj4;
                    }
                  }
                } else if (1 === c4) {
                  c3 = 0;
                  let closure_3 = closure_2;
                  const debug3 = startFrames(cleanupTimeout[2]).debug;
                  const _HermesInternal3 = HermesInternal;
                  const logResult = debug3.log("[TimeToDisplay] Failed to capture start frames for span " + closure_129_0 + ".", closure_3);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  startFrames = value;
                  const _setTimeout = setTimeout;
                  cleanupTimeout = setTimeout(() => {
                    if (map.get(closure_1_0)) {
                      map.delete(closure_1_0);
                      const debug = closure_0(cleanupTimeout[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + closure_1_0 + " after timeout.");
                    }
                  }, 60000);
                  if (!closure_1_8.has(closure_129_0)) {
                    const obj = { startFrames: null, endFrames: null, cleanupTimeout };
                    const result = closure_1_8.set(closure_129_0, obj);
                  }
                  closure_2 = closure_1_8.get(closure_129_0);
                  if (closure_2) {
                    closure_2.startFrames = startFrames;
                    closure_2.cleanupTimeout = cleanupTimeout;
                    const debug2 = startFrames(cleanupTimeout[2]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log("[TimeToDisplay] Captured start frames for span " + closure_129_0 + ".", startFrames);
                    c3 = 0;
                  } else {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(cleanupTimeout);
                    let debug = startFrames(cleanupTimeout[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Span " + closure_129_0 + " already ended, discarding start frames.");
                    c3 = 0;
                    c5 = 3;
                    const obj6 = { value: undefined, done: true };
                    return obj6;
                  }
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              } catch (tmp45) {
                closure_2 = tmp45;
                if (0 === c3) {
                  c5 = 3;
                  throw tmp45;
                } else {
                  c4 = 1;
                }
              }
            }
          }
        });
        promise.catch((error) => {
          const debug = _mod693.debug;
          debug.log("[TimeToDisplay] Failed to capture start frames for initial display span (" + require.spanContext().spanId + ").", error);
        });
        isAutoInstrumented = undefined;
        if (null != isAutoInstrumented) {
          isAutoInstrumented = isAutoInstrumented.isAutoInstrumented;
        }
        if (isAutoInstrumented) {
          const setAttribute2 = startInactiveSpanResult.setAttribute;
          setAttribute2(_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SPAN_ORIGIN_AUTO_INTERACTION.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
        } else {
          const result = weakMap.set(activeSpan, true);
          const setAttribute = startInactiveSpanResult.setAttribute;
          const attr = setAttribute(tmp(693).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1034).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
        }
        return startInactiveSpanResult;
      }
    }
  } else {
    let debug = obj2.debug;
    debug.warn("[TimeToDisplay] No active span found to attach ui.load.initial_display to.");
  }
}
function startTimeToFullDisplaySpan(arg0) {
  let tmpResult4;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { timeoutMs: 30000 };
  }
  let found;
  dependencyMap = undefined;
  let timeout;
  let tmp = found;
  let obj2 = found(693);
  const activeSpan = obj2.getActiveSpan();
  let obj3 = found(693);
  if (activeSpan) {
    const spanDescendants = obj3.getSpanDescendants(activeSpan);
    found = spanDescendants.find((item) => {
      const obj = found(_undefined[2]);
      return "ui.load.initial_display" === obj.spanToJSON(item).op;
    });
    if (found) {
      const found1 = spanDescendants.find((item) => {
        const obj = found(_undefined[2]);
        return "ui.load.full_display" === obj.spanToJSON(item).op;
      });
      const tmpResult = tmp(693);
      if (found1) {
        let debug3 = tmpResult.debug;
        let logResult = debug3.log("[TimeToDisplay] Found existing ui.load.full_display span.");
        return found1;
      } else {
        const _Object = Object;
        let obj4 = { op: "ui.load.full_display", name: "Time To Full Display", startTime: tmpResult4.spanToJSON(found).start_timestamp };
        const startInactiveSpan = tmpResult.startInactiveSpan;
        tmpResult4 = tmp(693);
        const startInactiveSpanResult = startInactiveSpan(assign(obj4, obj));
        dependencyMap = startInactiveSpanResult;
        if (dependencyMap) {
          let spanId = startInactiveSpanResult.spanContext().spanId;
          let promise = closure_5(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              const str = "Generator functions may not be called on executing generators";
              throw new TypeError("Generator functions may not be called on executing generators");
            } else {
              const str2 = ".";
              if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                let c3;
                try {
                  let startFrames;
                  let cleanupTimeout;
                  c5 = 2;
                  if (0 === c4) {
                    if (arg0 === 1) {
                      c5 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      startFrames = undefined;
                      cleanupTimeout = undefined;
                      closure_2 = undefined;
                      if (startFrames(cleanupTimeout[6]).NATIVE.enableNative) {
                        c3 = 1;
                        c4 = 2;
                        c5 = 1;
                        const obj4 = { value: closure_1_15(), done: false };
                        return obj4;
                      }
                    }
                  } else if (1 === c4) {
                    c3 = 0;
                    let closure_3 = closure_2;
                    const debug3 = startFrames(cleanupTimeout[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    const logResult = debug3.log("[TimeToDisplay] Failed to capture start frames for span " + closure_129_0 + ".", closure_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    c5 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    startFrames = value;
                    const _setTimeout = setTimeout;
                    cleanupTimeout = setTimeout(() => {
                      if (map.get(closure_1_0)) {
                        map.delete(closure_1_0);
                        const debug = closure_0(cleanupTimeout[2]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + closure_1_0 + " after timeout.");
                      }
                    }, 60000);
                    if (!closure_1_8.has(closure_129_0)) {
                      const obj = { startFrames: null, endFrames: null, cleanupTimeout };
                      const result = closure_1_8.set(closure_129_0, obj);
                    }
                    closure_2 = closure_1_8.get(closure_129_0);
                    if (closure_2) {
                      closure_2.startFrames = startFrames;
                      closure_2.cleanupTimeout = cleanupTimeout;
                      const debug2 = startFrames(cleanupTimeout[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.log("[TimeToDisplay] Captured start frames for span " + closure_129_0 + ".", startFrames);
                      c3 = 0;
                    } else {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(cleanupTimeout);
                      let debug = startFrames(cleanupTimeout[2]).debug;
                      let _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Span " + closure_129_0 + " already ended, discarding start frames.");
                      c3 = 0;
                      c5 = 3;
                      const obj6 = { value: undefined, done: true };
                      return obj6;
                    }
                  }
                  c5 = 3;
                  return { value: "IconComponent", done: null };
                } catch (tmp45) {
                  closure_2 = tmp45;
                  if (0 === c3) {
                    c5 = 3;
                    throw tmp45;
                  } else {
                    c4 = 1;
                  }
                }
              }
            }
          });
          promise.catch((error) => {
            const debug = _mod693.debug;
            debug.log("[TimeToDisplay] Failed to capture start frames for full display span (" + _undefined.spanContext().spanId + ").", error);
          });
          let _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let obj = _mod693;
            if (!obj.spanToJSON(setStatus).timestamp) {
              let obj2 = { code: _mod693.SPAN_STATUS_ERROR, message: "deadline_exceeded" };
              setStatus = setStatus.setStatus;
              setStatus(obj2);
              let closure_0 = setStatus;
              const promise = closure_5(undefined, undefined, undefined, f82992);
              const nextPromise = promise.then(() => {
                const debug = found(c1[2]).debug;
                debug.log("[TimeToDisplay] span " + _undefined.spanContext().spanId + " updated with frame data.");
                const end = _undefined.end;
                const obj = found(c1[2]);
                end(obj.spanToJSON(closure_1_0).timestamp);
                const obj2 = found(c1[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", _undefined);
              });
              nextPromise.catch(() => {
                const debug = found(c1[2]).debug;
                debug.warn("[TimeToDisplay] Failed to capture end frames for full display span (" + _undefined.spanContext().spanId + ").");
                const end = _undefined.end;
                const obj = found(c1[2]);
                end(obj.spanToJSON(closure_1_0).timestamp);
                const obj2 = found(c1[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", _undefined);
              });
              let debug = _mod693.debug;
              let str = "[TimeToDisplay] Full display span deadline_exceeded.";
              debug.warn("[TimeToDisplay] Full display span deadline_exceeded.");
            }
          }, obj.timeoutMs);
          const tmpResult5 = tmp(693);
          tmpResult5.fill(startInactiveSpanResult, "end", (arg0) => {
            let closure_0 = arg0;
            return (arg0) => {
              clearTimeout(closure_2);
              closure_0.call(c1, arg0);
            };
          });
          let isAutoInstrumented;
          if (null != obj) {
            isAutoInstrumented = obj.isAutoInstrumented;
          }
          const setAttribute = startInactiveSpanResult.setAttribute;
          const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = tmp(693).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
          const tmpResult6 = tmp(1034);
          if (isAutoInstrumented) {
            let attr = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmpResult6.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
          } else {
            let attr1 = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmpResult6.SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
          }
          return startInactiveSpanResult;
        }
      }
    } else {
      let debug2 = tmp(693).debug;
      let str2 = "[TimeToDisplay] No initial display span found to attach ui.load.full_display to.";
      const warnResult = debug2.warn("[TimeToDisplay] No initial display span found to attach ui.load.full_display to.");
    }
  } else {
    let debug = obj3.debug;
    let str = "[TimeToDisplay] No active span found to attach ui.load.full_display to.";
    debug.warn("[TimeToDisplay] No active span found to attach ui.load.full_display to.");
  }
}
function updateFullDisplaySpan(arg0, span) {
  let closure_0;
  let timestamp;
  _require = arg0;
  let obj = require("module_693");
  const activeSpan = obj.getActiveSpan();
  if (activeSpan) {
    let found = span;
    if (!found) {
      let tmpResult = tmp(tmp2[2]);
      const spanDescendants = tmpResult.getSpanDescendants(activeSpan);
      found = spanDescendants.find((item) => {
        const obj = closure_0(timestamp[2]);
        return "ui.load.initial_display" === obj.spanToJSON(item).op;
      });
    }
    timestamp = found;
    if (timestamp) {
      const tmpResult3 = require("module_693");
      timestamp = tmpResult3.spanToJSON(found).timestamp;
    }
    if (timestamp) {
      const tmp10 = startTimeToFullDisplaySpan({ isAutoInstrumented: true });
      let closure_2 = tmp10;
      const tmpResult4 = require("module_693");
      if (tmp10) {
        const spanToJSONResult = tmpResult4.spanToJSON(tmp10);
        react = spanToJSONResult;
        if (spanToJSONResult.timestamp) {
          const debug4 = tmp(tmp2[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug4.warn("[TimeToDisplay] " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") span already ended.");
        } else {
          _require = tmp10;
          const promise = closure_5(undefined, undefined, undefined, f82992);
          const nextPromise = promise.then(() => {
            let tmp3 = closure_0;
            if (timestamp > closure_0) {
              tmp3 = timestamp;
            }
            if (timestamp > closure_0) {
              const debug = _mod693.debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            closure_2.end(tmp3);
            const obj = { code: _mod693.SPAN_STATUS_OK };
            closure_2.setStatus(obj);
            const debug2 = _mod693.debug;
            debug2.log("[TimeToDisplay] span " + react.description + " (" + react.span_id + ") updated with end timestamp and frame data.");
            const obj2 = defaultTransactionSource;
            const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", closure_2);
          });
          nextPromise.catch((error) => {
            const debug = _mod693.debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for full display span.", error);
            let tmp4 = closure_0;
            if (timestamp > closure_0) {
              tmp4 = timestamp;
            }
            closure_2.end(tmp4);
            const obj = { code: _mod693.SPAN_STATUS_OK };
            closure_2.setStatus(obj);
            const tmpResult = defaultTransactionSource;
            const result = tmpResult.setSpanDurationAsMeasurement("time_to_full_display", closure_2);
          });
        }
      } else {
        const debug3 = tmpResult4.debug;
        debug3.warn("[TimeToDisplay] No TimeToFullDisplay span found or created, possibly performance is disabled.");
      }
    } else {
      let result = weakMap1.set(activeSpan, true);
      let debug2 = tmp(tmp2[2]).debug;
      const _HermesInternal = HermesInternal;
      debug2.warn("[TimeToDisplay] Full display called before initial display for active span (" + activeSpan.spanContext().spanId + ").");
    }
  } else {
    let debug = tmp(tmp2[2]).debug;
    debug.warn("[TimeToDisplay] No active span found to update ui.load.full_display in.");
  }
}
function fetchNativeFramesWithTimeout() {
  const promise = new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c2 = false;
    const timeout = setTimeout(() => {
      const tmp = c2;
      if (!tmp) {
        c2 = true;
        closure_1("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = require("module_877").NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    const nextPromise = nativeFrames.then((result) => {
      const tmp = c2;
      if (!tmp) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        if (result) {
          closure_0(result);
        } else {
          closure_1("Native frames response is null.");
        }
      }
    });
    nextPromise.then(undefined, (arg0) => {
      const tmp = c2;
      if (!tmp) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        closure_1(arg0);
      }
    });
  });
  return promise;
}
let react = react_mod;
const useState = react2.useState;
let closure_5 = this && this.__awaiter || ((arg0, arg1, arg2, arg3) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let _Promise = arg2;
  const Promise = arg2;
  let closure_3 = arg3;
  if (!arg2) {
    let tmp = globalThis;
    _Promise = Promise;
  }
  const _Promise1 = new _Promise(function(fn, arg1) {
    closure_0 = fn;
    closure_1 = arg1;
    function fulfilled(result) {
      try {
        step(iter.next(result));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    function rejected(arg0) {
      try {
        step(iter.throw(arg0));
      } catch (tmp5) {
        closure_1(tmp5);
      }
    }
    let iter = rejected;
    function step(done) {
      if (done.done) {
        fn(done.value);
      } else {
        let tmp1 = done.value;
        const value = tmp1;
        if (!(tmp1 instanceof Promise)) {
          const self = this;
          const self2 = this;
          tmp1 = new tmp((fn) => {
            fn(value);
          });
        }
        tmp1.then(fulfilled, iter);
      }
    }
    let items = closure_1;
    const tmp = iter;
    const apply = iter.apply;
    const tmp2 = closure_0;
    if (!closure_1) {
      items = [];
    }
    iter = apply(tmp2, items);
    const iter2 = iter.next();
    let value = iter2.value;
    if (iter2.done) {
      const tmp5 = fn(value);
    } else {
      let tmp32 = value;
      if (!(value instanceof fulfilled)) {
        let self = this;
        let self2 = this;
        tmp32 = new tmp3((fn) => {
          fn(value);
        });
      }
      tmp32.then(fulfilled, rejected);
    }
  });
  return _Promise1;
});
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
const map = new Map();

export const manualInitialDisplaySpans = weakMap;
export { TimeToInitialDisplay };
export { TimeToFullDisplay };
export { startTimeToInitialDisplaySpan };
export { startTimeToFullDisplaySpan };
export const updateInitialDisplaySpan = function updateInitialDisplaySpan(arg0) {
  let closure_0;
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let activeSpan = obj.activeSpan;
  if (activeSpan === undefined) {
    let obj2 = require("module_693");
    activeSpan = obj2.getActiveSpan();
  }
  let span = obj.span;
  if (span === undefined) {
    span = startTimeToInitialDisplaySpan();
  }
  let obj3 = require("module_693");
  if (span) {
    if (activeSpan) {
      const parent_span_id = obj3.spanToJSON(span).parent_span_id;
      const tmp4Result = require("module_693");
      if (parent_span_id === tmp4Result.spanToJSON(activeSpan).span_id) {
        const tmp4Result3 = require("module_693");
        if (tmp4Result3.spanToJSON(span).timestamp) {
          const debug4 = tmp4(tmp5[2]).debug;
          const warn = debug4.warn;
          let _HermesInternal = HermesInternal;
          const tmp4Result4 = require("module_693");
          warn("[TimeToDisplay] " + tmp4Result4.spanToJSON(span).description + " span already ended.");
        } else {
          const promise = closure_5(undefined, undefined, undefined, f82992);
          const nextPromise = promise.then(() => {
            span.end(closure_0);
            const obj2 = { code: _mod693.SPAN_STATUS_OK };
            span.setStatus(obj2);
            const debug = _mod693.debug;
            const log = debug.log;
            const obj3 = _mod693;
            log("[TimeToDisplay] " + obj3.spanToJSON(span).description + " span updated with end timestamp and frame data.");
            if (weakMap1.has(activeSpan)) {
              weakMap1.delete(activeSpan);
              const debug2 = _mod693.debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
              updateFullDisplaySpan(closure_0, span);
            }
            const tmp3Result = defaultTransactionSource;
            const result = tmp3Result.setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
          });
          nextPromise.catch((error) => {
            const debug = _mod693.debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for initial display span.", error);
            span.end(closure_0);
            const obj2 = { code: _mod693.SPAN_STATUS_OK };
            span.setStatus(obj2);
            if (weakMap1.has(activeSpan)) {
              weakMap1.delete(activeSpan);
              const debug2 = _mod693.debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + span.spanContext().spanId + ") end.");
              updateFullDisplaySpan(closure_0, span);
            }
            const tmpResult = defaultTransactionSource;
            const result = tmpResult.setSpanDurationAsMeasurementOnSpan("time_to_initial_display", span, activeSpan);
          });
        }
      } else {
        const debug3 = tmp4(tmp5[2]).debug;
        debug3.warn("[TimeToDisplay] Initial display span is not a child of current active span.");
      }
    } else {
      let debug2 = obj3.debug;
      debug2.warn("[TimeToDisplay] No active span found to attach ui.load.initial_display to.");
    }
  } else {
    let debug = obj3.debug;
    debug.warn("[TimeToDisplay] No span found or created, possibly performance is disabled.");
  }
};
export const createTimeToFullDisplay = function createTimeToFullDisplay(useFocusEffect) {
  useFocusEffect = useFocusEffect.useFocusEffect;
  let closure_1 = TimeToFullDisplay;
  class TimeToDisplayWrapper {
    constructor(arg0) {
      tmp = closure_2(useState(false), 2);
      [record, closure_0] = tmp;
      tmp2 = useFocusEffect(() => { /* body not rendered: F134718 */ });
      tmp3 = closure_3;
      createElement = closure_3.createElement;
      tmp4 = closure_1;
      _Object = Object;
      assign = Object.assign;
      if (record) {
        record = useFocusEffect.record;
      }
      return createElement(tmp4, assign({}, useFocusEffect, { record }));
    }
  }
  TimeToDisplayWrapper.displayName = "TimeToDisplayWrapper";
  return TimeToDisplayWrapper;
};
export const createTimeToInitialDisplay = function createTimeToInitialDisplay(useFocusEffect) {
  useFocusEffect = useFocusEffect.useFocusEffect;
  let closure_1 = TimeToInitialDisplay;
  class TimeToDisplayWrapper {
    constructor(arg0) {
      tmp = closure_2(useState(false), 2);
      [record, closure_0] = tmp;
      tmp2 = useFocusEffect(() => { /* body not rendered: F134718 */ });
      tmp3 = closure_3;
      createElement = closure_3.createElement;
      tmp4 = closure_1;
      _Object = Object;
      assign = Object.assign;
      if (record) {
        record = useFocusEffect.record;
      }
      return createElement(tmp4, assign({}, useFocusEffect, { record }));
    }
  }
  TimeToDisplayWrapper.displayName = "TimeToDisplayWrapper";
  return TimeToDisplayWrapper;
};