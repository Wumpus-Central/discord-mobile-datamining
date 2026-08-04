import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { useState } from "noop";

const require = arg1;
class TimeToInitialDisplay {
  constructor(arg0) {
    tmp = closure_0;
    tmp2 = closure_1;
    obj = require("registerSpanErrorInstrumentation");
    activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      tmp4 = WeakMap;
      flag = true;
      result = WeakMap.set(activeSpan, true);
    }
    span_id = activeSpan;
    if (activeSpan) {
      tmpResult = require("registerSpanErrorInstrumentation");
      span_id = tmpResult.spanToJSON(activeSpan).span_id;
    }
    obj = { initialDisplay: global.record, parentSpanId: span_id };
    return noop.createElement(TimeToDisplay, obj, global.children);
  }
}
class TimeToFullDisplay {
  constructor(arg0) {
    tmp = closure_0;
    tmp2 = closure_1;
    obj = require("registerSpanErrorInstrumentation");
    activeSpan = obj.getActiveSpan();
    span_id = activeSpan;
    if (activeSpan) {
      tmpResult = require("registerSpanErrorInstrumentation");
      span_id = tmpResult.spanToJSON(activeSpan).span_id;
    }
    obj = { fullDisplay: global.record, parentSpanId: span_id };
    return noop.createElement(TimeToDisplay, obj, global.children);
  }
}
function TimeToDisplay(initialDisplay) {
  let obj = require(1189) /* _isNativeReflectConstruct */;
  obj = { initialDisplay: initialDisplay.initialDisplay, fullDisplay: initialDisplay.fullDisplay, parentSpanId: initialDisplay.parentSpanId };
  return <>{React.createElement(obj.getRNSentryOnDrawReporter(), { initialDisplay: arg0.initialDisplay, fullDisplay: arg0.fullDisplay, parentSpanId: arg0.parentSpanId })}{arg0.children}</>;
}
function startTimeToInitialDisplaySpan(isAutoInstrumented) {
  let obj = spanId(817);
  const activeSpan = obj.getActiveSpan();
  const obj2 = spanId(817);
  if (activeSpan) {
    const spanDescendants = obj2.getSpanDescendants(activeSpan);
    const found = spanDescendants.find((arg0) => "ui.load.initial_display" === spanId(table[2]).spanToJSON(arg0).op);
    let tmpResult = tmp(817);
    if (found) {
      const debug2 = tmpResult.debug;
      debug2.log("[TimeToDisplay] Found existing ui.load.initial_display span.");
      return found;
    } else {
      const _Object = Object;
      obj = { op: "ui.load.initial_display", name: "Time To Initial Display", startTime: null };
      tmpResult = tmp(817);
      obj[2] = tmpResult.spanToJSON(activeSpan).start_timestamp;
      const startInactiveSpanResult = tmpResult.startInactiveSpan(Object.assign(obj, isAutoInstrumented));
      spanId = startInactiveSpanResult;
      if (startInactiveSpanResult) {
        spanId = startInactiveSpanResult.spanContext().spanId;
        fn(undefined, undefined, undefined, function*() {
          if (c5 === 2) {
            c5 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let timeout = tmp3;
                  let closure_0 = tmp7;
                  closure_0 = undefined;
                  timeout = undefined;
                  let _slicedToArray;
                  if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                    let c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj1 = { value: null, done: false };
                    obj1[0] = outer1_15();
                    return obj1;
                  }
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  c3 = _slicedToArray;
                  const debug3 = outer1_0(outer1_1[2]).debug;
                  const _HermesInternal3 = HermesInternal;
                  debug3.log("[TimeToDisplay] Failed to capture start frames for span " + outer1_0 + ".", c3);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  closure_0 = arg1;
                  const _setTimeout = setTimeout;
                  timeout = setTimeout(() => {
                    if (outer1_8.get(callback)) {
                      outer1_8.delete(tmp);
                      const debug = callback(table[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + tmp + " after timeout.");
                    }
                  }, 60000);
                  if (!outer1_8.has(closure_0)) {
                    obj = { startFrames: null, endFrames: null, cleanupTimeout: null };
                    obj[2] = timeout;
                    const result = outer1_8.set(closure_0, obj);
                  }
                  _slicedToArray = outer1_8.get(outer1_0);
                  if (_slicedToArray) {
                    _slicedToArray.startFrames = closure_0;
                    _slicedToArray.cleanupTimeout = timeout;
                    const debug2 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log("[TimeToDisplay] Captured start frames for span " + outer1_0 + ".", closure_0);
                    c3 = 0;
                  } else {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(timeout);
                    let debug = outer1_0(outer1_1[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Span " + outer1_0 + " already ended, discarding start frames.");
                    c3 = 0;
                    c5 = 3;
                    const obj2 = { value: null, done: true };
                    obj2[0] = undefined;
                    return obj2;
                  }
                }
                c3 = 0;
                c5 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              }
              c5 = 3;
            } catch (tmp48) {
              _slicedToArray = tmp48;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp48;
              } else {
                c4 = tmp;
              }
            }
          }
        }).catch((arg0) => {
          const debug = spanId(outer1_1[2]).debug;
          debug.log("[TimeToDisplay] Failed to capture start frames for initial display span (" + spanId.spanContext().spanId + ").", arg0);
        });
        isAutoInstrumented = undefined;
        if (null != isAutoInstrumented) {
          isAutoInstrumented = isAutoInstrumented.isAutoInstrumented;
        }
        if (isAutoInstrumented) {
          const attr = startInactiveSpanResult.setAttribute(tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1158).SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
        } else {
          const result = weakMap.set(activeSpan, true);
          const attr1 = startInactiveSpanResult.setAttribute(tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1158).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
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
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { timeoutMs: 30000 };
  }
  let spanId;
  let dependencyMap;
  let timeout;
  const activeSpan = spanId(817).getActiveSpan();
  let obj3 = spanId(817);
  if (activeSpan) {
    const spanDescendants = obj3.getSpanDescendants(activeSpan);
    const found = spanDescendants.find((arg0) => "ui.load.initial_display" === spanId(_undefined[2]).spanToJSON(arg0).op);
    spanId = found;
    if (found) {
      const found1 = spanDescendants.find((arg0) => "ui.load.full_display" === spanId(_undefined[2]).spanToJSON(arg0).op);
      let tmpResult = tmp(817);
      if (found1) {
        let debug3 = tmpResult.debug;
        debug3.log("[TimeToDisplay] Found existing ui.load.full_display span.");
        return found1;
      } else {
        const _Object = Object;
        obj = { op: "ui.load.full_display", name: "Time To Full Display", startTime: null };
        tmpResult = tmp(817);
        obj[2] = tmpResult.spanToJSON(found).start_timestamp;
        const startInactiveSpanResult = tmpResult.startInactiveSpan(Object.assign(obj, obj));
        dependencyMap = startInactiveSpanResult;
        if (startInactiveSpanResult) {
          spanId = startInactiveSpanResult.spanContext().spanId;
          fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let timeout = tmp3;
                    let closure_0 = tmp7;
                    closure_0 = undefined;
                    timeout = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      let c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj1 = { value: null, done: false };
                      obj1[0] = outer1_15();
                      return obj1;
                    }
                  }
                } else {
                  if (1 === tmp7) {
                    c3 = 0;
                    c3 = _slicedToArray;
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Failed to capture start frames for span " + outer1_0 + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 !== 2) {
                    closure_0 = arg1;
                    const _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      if (outer1_8.get(callback)) {
                        outer1_8.delete(tmp);
                        const debug = callback(table[2]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + tmp + " after timeout.");
                      }
                    }, 60000);
                    if (!outer1_8.has(closure_0)) {
                      obj = { startFrames: null, endFrames: null, cleanupTimeout: null };
                      obj[2] = timeout;
                      const result = outer1_8.set(closure_0, obj);
                    }
                    _slicedToArray = outer1_8.get(outer1_0);
                    if (_slicedToArray) {
                      _slicedToArray.startFrames = closure_0;
                      _slicedToArray.cleanupTimeout = timeout;
                      const debug2 = outer1_0(outer1_1[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.log("[TimeToDisplay] Captured start frames for span " + outer1_0 + ".", closure_0);
                      c3 = 0;
                    } else {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(timeout);
                      let debug = outer1_0(outer1_1[2]).debug;
                      let _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Span " + outer1_0 + " already ended, discarding start frames.");
                      c3 = 0;
                      c5 = 3;
                      const obj2 = { value: null, done: true };
                      obj2[0] = undefined;
                      return obj2;
                    }
                  }
                  c3 = 0;
                  c5 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
                c5 = 3;
              } catch (tmp48) {
                _slicedToArray = tmp48;
                if (tmp4 === c3) {
                  c5 = tmp2;
                  throw tmp48;
                } else {
                  c4 = tmp;
                }
              }
            }
          }).catch((arg0) => {
            const debug = spanId(_undefined[2]).debug;
            debug.log("[TimeToDisplay] Failed to capture start frames for full display span (" + _undefined.spanContext().spanId + ").", arg0);
          });
          let _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let obj = spanId(_undefined[2]);
            let obj2 = _undefined;
            if (!obj.spanToJSON(_undefined).timestamp) {
              obj = { code: null, message: "deadline_exceeded" };
              obj[0] = tmp(tmp2[2]).SPAN_STATUS_ERROR;
              obj2.setStatus(obj);
              const promise = outer1_5(undefined, undefined, undefined, function*() {
                if (c5 === 2) {
                  c5 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c5 = 2;
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let c1 = tmp4;
                        let spanId = tmp8;
                        spanId = undefined;
                        c1 = undefined;
                        let _slicedToArray;
                        if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                          spanId = outer1_0.spanContext().spanId;
                          const value = outer1_8.get(spanId);
                          c1 = value;
                          let startFrames;
                          if (null != value) {
                            startFrames = value.startFrames;
                          }
                          if (startFrames) {
                            let c3 = 2;
                            c4 = 3;
                            c5 = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = outer1_15();
                            return obj1;
                          } else {
                            let debug2 = outer1_0(outer1_1[2]).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                          }
                        }
                        c5 = 3;
                      }
                    } else if (1 !== tmp8) {
                      if (2 === tmp8) {
                        c3 = 1;
                        c3 = _slicedToArray;
                        let debug = outer1_0(outer1_1[2]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        if (c1.cleanupTimeout) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(c1.cleanupTimeout);
                        }
                        outer1_8.delete(spanId);
                        c5 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        _slicedToArray = arg1;
                        c1.endFrames = _slicedToArray;
                        (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                          const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                          const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                          const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                          if (diff <= 0) {
                            if (diff1 <= 0) {
                              if (diff2 <= 0) {
                                const debug2 = spanId(_undefined[2]).debug;
                                const _HermesInternal = HermesInternal;
                                debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                              }
                            }
                          }
                          const attr = spanId.setAttribute("frames.total", diff);
                          const attr1 = spanId.setAttribute("frames.slow", diff1);
                          const attr2 = spanId.setAttribute("frames.frozen", diff2);
                          const debug = spanId(_undefined[2]).debug;
                          debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                        })(spanId, c1.startFrames, _slicedToArray);
                        const debug3 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal3 = HermesInternal;
                        debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                        c3 = 1;
                      }
                      c3 = 0;
                      if (c1.cleanupTimeout) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(c1.cleanupTimeout);
                      }
                      outer1_8.delete(spanId);
                    }
                    c3 = 0;
                    if (outer1_1.cleanupTimeout) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(outer1_1.cleanupTimeout);
                    }
                    outer1_8.delete(outer1_0);
                    throw _slicedToArray;
                  } catch (tmp58) {
                    _slicedToArray = tmp58;
                    if (tmp5 === c3) {
                      c5 = tmp3;
                      throw tmp58;
                    } else if (tmp2 === tmp60) {
                      c4 = tmp2;
                    } else {
                      c4 = tmp;
                    }
                  }
                }
              });
              outer1_5(undefined, undefined, undefined, function*() {
                if (c5 === 2) {
                  c5 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c5 = 2;
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let c1 = tmp4;
                        let spanId = tmp8;
                        spanId = undefined;
                        c1 = undefined;
                        let _slicedToArray;
                        if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                          spanId = outer1_0.spanContext().spanId;
                          const value = outer1_8.get(spanId);
                          c1 = value;
                          let startFrames;
                          if (null != value) {
                            startFrames = value.startFrames;
                          }
                          if (startFrames) {
                            let c3 = 2;
                            c4 = 3;
                            c5 = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = outer1_15();
                            return obj1;
                          } else {
                            let debug2 = outer1_0(outer1_1[2]).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                          }
                        }
                        c5 = 3;
                      }
                    } else if (1 !== tmp8) {
                      if (2 === tmp8) {
                        c3 = 1;
                        c3 = _slicedToArray;
                        let debug = outer1_0(outer1_1[2]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        if (c1.cleanupTimeout) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(c1.cleanupTimeout);
                        }
                        outer1_8.delete(spanId);
                        c5 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        _slicedToArray = arg1;
                        c1.endFrames = _slicedToArray;
                        (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                          const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                          const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                          const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                          if (diff <= 0) {
                            if (diff1 <= 0) {
                              if (diff2 <= 0) {
                                const debug2 = spanId(_undefined[2]).debug;
                                const _HermesInternal = HermesInternal;
                                debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                              }
                            }
                          }
                          const attr = spanId.setAttribute("frames.total", diff);
                          const attr1 = spanId.setAttribute("frames.slow", diff1);
                          const attr2 = spanId.setAttribute("frames.frozen", diff2);
                          const debug = spanId(_undefined[2]).debug;
                          debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                        })(spanId, c1.startFrames, _slicedToArray);
                        const debug3 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal3 = HermesInternal;
                        debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                        c3 = 1;
                      }
                      c3 = 0;
                      if (c1.cleanupTimeout) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(c1.cleanupTimeout);
                      }
                      outer1_8.delete(spanId);
                    }
                    c3 = 0;
                    if (outer1_1.cleanupTimeout) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(outer1_1.cleanupTimeout);
                    }
                    outer1_8.delete(outer1_0);
                    throw _slicedToArray;
                  } catch (tmp58) {
                    _slicedToArray = tmp58;
                    if (tmp5 === c3) {
                      c5 = tmp3;
                      throw tmp58;
                    } else if (tmp2 === tmp60) {
                      c4 = tmp2;
                    } else {
                      c4 = tmp;
                    }
                  }
                }
              }).then(() => {
                const debug = obj2(outer1_1[2]).debug;
                debug.log("[TimeToDisplay] span " + closure_1.spanContext().spanId + " updated with frame data.");
                closure_1.end(obj2(outer1_1[2]).spanToJSON(obj2).timestamp);
                obj2 = obj2(outer1_1[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", closure_1);
              }).catch(() => {
                const debug = obj2(outer1_1[2]).debug;
                debug.warn("[TimeToDisplay] Failed to capture end frames for full display span (" + closure_1.spanContext().spanId + ").");
                closure_1.end(obj2(outer1_1[2]).spanToJSON(obj2).timestamp);
                obj2 = obj2(outer1_1[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", closure_1);
              });
              let debug = tmp(tmp2[2]).debug;
              debug.warn("[TimeToDisplay] Full display span deadline_exceeded.");
              const nextPromise = outer1_5(undefined, undefined, undefined, function*() {
                if (c5 === 2) {
                  c5 = 3;
                  HermesBuiltin.throwTypeError();
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw arg1;
                  } else if (arg0 === 2) {
                    let obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c5 = 2;
                    if (0 === c4) {
                      if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        let c1 = tmp4;
                        let spanId = tmp8;
                        spanId = undefined;
                        c1 = undefined;
                        let _slicedToArray;
                        if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                          spanId = outer1_0.spanContext().spanId;
                          const value = outer1_8.get(spanId);
                          c1 = value;
                          let startFrames;
                          if (null != value) {
                            startFrames = value.startFrames;
                          }
                          if (startFrames) {
                            let c3 = 2;
                            c4 = 3;
                            c5 = 1;
                            const obj1 = { value: null, done: false };
                            obj1[0] = outer1_15();
                            return obj1;
                          } else {
                            let debug2 = outer1_0(outer1_1[2]).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                          }
                        }
                        c5 = 3;
                      }
                    } else if (1 !== tmp8) {
                      if (2 === tmp8) {
                        c3 = 1;
                        c3 = _slicedToArray;
                        let debug = outer1_0(outer1_1[2]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw arg1;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        if (c1.cleanupTimeout) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(c1.cleanupTimeout);
                        }
                        outer1_8.delete(spanId);
                        c5 = 3;
                        obj = { value: null, done: true };
                        obj[0] = arg1;
                        return obj;
                      } else {
                        _slicedToArray = arg1;
                        c1.endFrames = _slicedToArray;
                        (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                          const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                          const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                          const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                          if (diff <= 0) {
                            if (diff1 <= 0) {
                              if (diff2 <= 0) {
                                const debug2 = spanId(_undefined[2]).debug;
                                const _HermesInternal = HermesInternal;
                                debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                              }
                            }
                          }
                          const attr = spanId.setAttribute("frames.total", diff);
                          const attr1 = spanId.setAttribute("frames.slow", diff1);
                          const attr2 = spanId.setAttribute("frames.frozen", diff2);
                          const debug = spanId(_undefined[2]).debug;
                          debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                        })(spanId, c1.startFrames, _slicedToArray);
                        const debug3 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal3 = HermesInternal;
                        debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                        c3 = 1;
                      }
                      c3 = 0;
                      if (c1.cleanupTimeout) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(c1.cleanupTimeout);
                      }
                      outer1_8.delete(spanId);
                    }
                    c3 = 0;
                    if (outer1_1.cleanupTimeout) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(outer1_1.cleanupTimeout);
                    }
                    outer1_8.delete(outer1_0);
                    throw _slicedToArray;
                  } catch (tmp58) {
                    _slicedToArray = tmp58;
                    if (tmp5 === c3) {
                      c5 = tmp3;
                      throw tmp58;
                    } else if (tmp2 === tmp60) {
                      c4 = tmp2;
                    } else {
                      c4 = tmp;
                    }
                  }
                }
              }).then(() => {
                const debug = obj2(outer1_1[2]).debug;
                debug.log("[TimeToDisplay] span " + closure_1.spanContext().spanId + " updated with frame data.");
                closure_1.end(obj2(outer1_1[2]).spanToJSON(obj2).timestamp);
                obj2 = obj2(outer1_1[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", closure_1);
              });
            }
          }, obj.timeoutMs);
          let promise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let timeout = tmp3;
                    let closure_0 = tmp7;
                    closure_0 = undefined;
                    timeout = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      let c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj1 = { value: null, done: false };
                      obj1[0] = outer1_15();
                      return obj1;
                    }
                  }
                } else {
                  if (1 === tmp7) {
                    c3 = 0;
                    c3 = _slicedToArray;
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Failed to capture start frames for span " + outer1_0 + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 !== 2) {
                    closure_0 = arg1;
                    const _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      if (outer1_8.get(callback)) {
                        outer1_8.delete(tmp);
                        const debug = callback(table[2]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + tmp + " after timeout.");
                      }
                    }, 60000);
                    if (!outer1_8.has(closure_0)) {
                      obj = { startFrames: null, endFrames: null, cleanupTimeout: null };
                      obj[2] = timeout;
                      const result = outer1_8.set(closure_0, obj);
                    }
                    _slicedToArray = outer1_8.get(outer1_0);
                    if (_slicedToArray) {
                      _slicedToArray.startFrames = closure_0;
                      _slicedToArray.cleanupTimeout = timeout;
                      const debug2 = outer1_0(outer1_1[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.log("[TimeToDisplay] Captured start frames for span " + outer1_0 + ".", closure_0);
                      c3 = 0;
                    } else {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(timeout);
                      let debug = outer1_0(outer1_1[2]).debug;
                      let _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Span " + outer1_0 + " already ended, discarding start frames.");
                      c3 = 0;
                      c5 = 3;
                      const obj2 = { value: null, done: true };
                      obj2[0] = undefined;
                      return obj2;
                    }
                  }
                  c3 = 0;
                  c5 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                }
                c5 = 3;
              } catch (tmp48) {
                _slicedToArray = tmp48;
                if (tmp4 === c3) {
                  c5 = tmp2;
                  throw tmp48;
                } else {
                  c4 = tmp;
                }
              }
            }
          });
          tmp(817).fill(startInactiveSpanResult, "end", (arg0) => {
            let closure_0 = arg0;
            return (arg0) => {
              clearTimeout(outer1_2);
              const call = closure_0.call;
              if (typeof call === "unknown") {
                closure_0(arg0);
              } else {
                call(outer1_1, arg0);
              }
            };
          });
          let isAutoInstrumented;
          if (null != obj) {
            isAutoInstrumented = obj.isAutoInstrumented;
          }
          const setAttribute = startInactiveSpanResult.setAttribute;
          const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
          const tmpResult2 = tmp(1158);
          if (isAutoInstrumented) {
            let attr = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmpResult2.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
          } else {
            let attr1 = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmpResult2.SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
          }
          return startInactiveSpanResult;
        }
      }
    } else {
      let debug2 = tmp(817).debug;
      debug2.warn("[TimeToDisplay] No initial display span found to attach ui.load.full_display to.");
    }
  } else {
    let debug = obj3.debug;
    debug.warn("[TimeToDisplay] No active span found to attach ui.load.full_display to.");
  }
}
function updateFullDisplaySpan(arg0, arg1) {
  let _require = arg0;
  const activeSpan = _require(timestamp[2]).getActiveSpan();
  if (activeSpan) {
    let found = arg1;
    if (!arg1) {
      let tmpResult = tmp(tmp2[2]);
      const spanDescendants = tmpResult.getSpanDescendants(activeSpan);
      found = spanDescendants.find((arg0) => "ui.load.initial_display" === callback(timestamp[2]).spanToJSON(arg0).op);
    }
    timestamp = found;
    if (found) {
      tmpResult = tmp(tmp2[2]);
      timestamp = tmpResult.spanToJSON(found).timestamp;
    }
    if (timestamp) {
      const tmp10 = startTimeToFullDisplaySpan({ isAutoInstrumented: true });
      let _slicedToArray = tmp10;
      const tmpResult1 = tmp(tmp2[2]);
      if (tmp10) {
        const spanToJSONResult = tmpResult1.spanToJSON(tmp10);
        let noop = spanToJSONResult;
        if (spanToJSONResult.timestamp) {
          const debug4 = tmp(tmp2[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug4.warn("[TimeToDisplay] " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") span already ended.");
        } else {
          _require = tmp10;
          const promise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let c1 = tmp4;
                    let spanId = tmp8;
                    spanId = undefined;
                    c1 = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      spanId = outer1_0.spanContext().spanId;
                      const value = outer1_8.get(spanId);
                      c1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        let c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = outer1_15();
                        return obj1;
                      } else {
                        let debug2 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    c3 = _slicedToArray;
                    let debug = outer1_0(outer1_1[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (c1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(c1.cleanupTimeout);
                    }
                    outer1_8.delete(spanId);
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    _slicedToArray = arg1;
                    c1.endFrames = _slicedToArray;
                    (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                      const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                      const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                      const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = spanId(_undefined[2]).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanId.setAttribute("frames.total", diff);
                      const attr1 = spanId.setAttribute("frames.slow", diff1);
                      const attr2 = spanId.setAttribute("frames.frozen", diff2);
                      const debug = spanId(_undefined[2]).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                    })(spanId, c1.startFrames, _slicedToArray);
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (c1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(c1.cleanupTimeout);
                  }
                  outer1_8.delete(spanId);
                }
                c3 = 0;
                if (outer1_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(outer1_1.cleanupTimeout);
                }
                outer1_8.delete(outer1_0);
                throw _slicedToArray;
              } catch (tmp58) {
                _slicedToArray = tmp58;
                if (tmp5 === c3) {
                  c5 = tmp3;
                  throw tmp58;
                } else if (tmp2 === tmp60) {
                  c4 = tmp2;
                } else {
                  c4 = tmp;
                }
              }
            }
          });
          fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let c1 = tmp4;
                    let spanId = tmp8;
                    spanId = undefined;
                    c1 = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      spanId = outer1_0.spanContext().spanId;
                      const value = outer1_8.get(spanId);
                      c1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        let c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = outer1_15();
                        return obj1;
                      } else {
                        let debug2 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    c3 = _slicedToArray;
                    let debug = outer1_0(outer1_1[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (c1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(c1.cleanupTimeout);
                    }
                    outer1_8.delete(spanId);
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    _slicedToArray = arg1;
                    c1.endFrames = _slicedToArray;
                    (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                      const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                      const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                      const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = spanId(_undefined[2]).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanId.setAttribute("frames.total", diff);
                      const attr1 = spanId.setAttribute("frames.slow", diff1);
                      const attr2 = spanId.setAttribute("frames.frozen", diff2);
                      const debug = spanId(_undefined[2]).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                    })(spanId, c1.startFrames, _slicedToArray);
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (c1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(c1.cleanupTimeout);
                  }
                  outer1_8.delete(spanId);
                }
                c3 = 0;
                if (outer1_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(outer1_1.cleanupTimeout);
                }
                outer1_8.delete(outer1_0);
                throw _slicedToArray;
              } catch (tmp58) {
                _slicedToArray = tmp58;
                if (tmp5 === c3) {
                  c5 = tmp3;
                  throw tmp58;
                } else if (tmp2 === tmp60) {
                  c4 = tmp2;
                } else {
                  c4 = tmp;
                }
              }
            }
          }).then(() => {
            let tmp3 = callback;
            if (timestamp > callback) {
              tmp3 = tmp;
            }
            if (timestamp > tmp2) {
              const debug = callback(timestamp[2]).debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            tmp10.end(tmp3);
            tmp10.setStatus({ code: callback(timestamp[2]).SPAN_STATUS_OK });
            const debug2 = callback(timestamp[2]).debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: callback(timestamp[2]).SPAN_STATUS_OK };
            tmp2 = callback;
            const result = callback(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp10);
          }).catch((arg0) => {
            const debug = callback(timestamp[2]).debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for full display span.", arg0);
            let tmp4 = callback;
            if (timestamp > callback) {
              tmp4 = timestamp;
            }
            tmp10.end(tmp4);
            tmp10.setStatus({ code: callback(timestamp[2]).SPAN_STATUS_OK });
            const obj = { code: callback(timestamp[2]).SPAN_STATUS_OK };
            const result = callback(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp10);
          });
          const nextPromise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let c1 = tmp4;
                    let spanId = tmp8;
                    spanId = undefined;
                    c1 = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      spanId = outer1_0.spanContext().spanId;
                      const value = outer1_8.get(spanId);
                      c1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        let c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = outer1_15();
                        return obj1;
                      } else {
                        let debug2 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    c3 = _slicedToArray;
                    let debug = outer1_0(outer1_1[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (c1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(c1.cleanupTimeout);
                    }
                    outer1_8.delete(spanId);
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    _slicedToArray = arg1;
                    c1.endFrames = _slicedToArray;
                    (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                      const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                      const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                      const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = spanId(_undefined[2]).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanId.setAttribute("frames.total", diff);
                      const attr1 = spanId.setAttribute("frames.slow", diff1);
                      const attr2 = spanId.setAttribute("frames.frozen", diff2);
                      const debug = spanId(_undefined[2]).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                    })(spanId, c1.startFrames, _slicedToArray);
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (c1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(c1.cleanupTimeout);
                  }
                  outer1_8.delete(spanId);
                }
                c3 = 0;
                if (outer1_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(outer1_1.cleanupTimeout);
                }
                outer1_8.delete(outer1_0);
                throw _slicedToArray;
              } catch (tmp58) {
                _slicedToArray = tmp58;
                if (tmp5 === c3) {
                  c5 = tmp3;
                  throw tmp58;
                } else if (tmp2 === tmp60) {
                  c4 = tmp2;
                } else {
                  c4 = tmp;
                }
              }
            }
          }).then(() => {
            let tmp3 = callback;
            if (timestamp > callback) {
              tmp3 = tmp;
            }
            if (timestamp > tmp2) {
              const debug = callback(timestamp[2]).debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            tmp10.end(tmp3);
            tmp10.setStatus({ code: callback(timestamp[2]).SPAN_STATUS_OK });
            const debug2 = callback(timestamp[2]).debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: callback(timestamp[2]).SPAN_STATUS_OK };
            tmp2 = callback;
            const result = callback(timestamp[5]).setSpanDurationAsMeasurement("time_to_full_display", tmp10);
          });
        }
      } else {
        const debug3 = tmpResult1.debug;
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
  return new Promise((arg0, arg1) => {
    const callback = arg0;
    const table = arg1;
    let c2 = false;
    const timeout = setTimeout(() => {
      if (!c2) {
        c2 = true;
        callback2("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = callback(table[6]).NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    nativeFrames.then((arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(noop);
        c2 = true;
        if (arg0) {
          callback(arg0);
        } else {
          callback2("Native frames response is null.");
        }
      }
    }).then(undefined, (arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(noop);
        c2 = true;
        callback2(arg0);
      }
    });
  });
}
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    let noop = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        try {
          step(iter.next(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      function rejected(arg0) {
        try {
          step(iter.throw(arg0));
        } catch (tmp5) {
          callback2(tmp5);
        }
      }
      let iter = rejected;
      function step(done) {
        if (done.done) {
          callback(done.value);
        } else {
          let tmp = done.value;
          callback = tmp;
          if (!(tmp instanceof fulfilled)) {
            tmp = new tmp((arg0) => {
              arg0(closure_0);
            });
          }
          tmp.then(fulfilled, iter);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      const iter2 = iter.next();
      const value = iter2.value;
      if (iter2.done) {
        arg0(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((arg0) => {
            arg0(closure_0);
          });
        }
        tmp3.then(fulfilled, rejected);
      }
    });
    return _Promise;
  };
}
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
const map = new Map();

export const manualInitialDisplaySpans = weakMap;
export { TimeToInitialDisplay };
export { TimeToFullDisplay };
export { startTimeToInitialDisplaySpan };
export { startTimeToFullDisplaySpan };
export const updateInitialDisplaySpan = function updateInitialDisplaySpan(arg0) {
  let span = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let activeSpan = obj.activeSpan;
  if (activeSpan === undefined) {
    activeSpan = span(activeSpan[2]).getActiveSpan();
    const obj2 = span(activeSpan[2]);
  }
  span = obj.span;
  if (span === undefined) {
    span = startTimeToInitialDisplaySpan();
  }
  let obj3 = span(activeSpan[2]);
  if (span) {
    if (activeSpan) {
      let tmp4Result = tmp4(tmp5[2]);
      if (obj3.spanToJSON(span).parent_span_id === tmp4Result.spanToJSON(activeSpan).span_id) {
        tmp4Result = tmp4(tmp5[2]);
        if (tmp4Result.spanToJSON(span).timestamp) {
          const debug4 = tmp4(tmp5[2]).debug;
          let _HermesInternal = HermesInternal;
          debug4.warn("[TimeToDisplay] " + tmp4(tmp5[2]).spanToJSON(span).description + " span already ended.");
          const tmp4Result1 = tmp4(tmp5[2]);
        } else {
          const promise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let c1 = tmp4;
                    let spanId = tmp8;
                    spanId = undefined;
                    c1 = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      spanId = outer1_0.spanContext().spanId;
                      const value = outer1_8.get(spanId);
                      c1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        let c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = outer1_15();
                        return obj1;
                      } else {
                        let debug2 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    c3 = _slicedToArray;
                    let debug = outer1_0(outer1_1[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (c1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(c1.cleanupTimeout);
                    }
                    outer1_8.delete(spanId);
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    _slicedToArray = arg1;
                    c1.endFrames = _slicedToArray;
                    (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                      const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                      const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                      const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = spanId(_undefined[2]).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanId.setAttribute("frames.total", diff);
                      const attr1 = spanId.setAttribute("frames.slow", diff1);
                      const attr2 = spanId.setAttribute("frames.frozen", diff2);
                      const debug = spanId(_undefined[2]).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                    })(spanId, c1.startFrames, _slicedToArray);
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (c1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(c1.cleanupTimeout);
                  }
                  outer1_8.delete(spanId);
                }
                c3 = 0;
                if (outer1_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(outer1_1.cleanupTimeout);
                }
                outer1_8.delete(outer1_0);
                throw _slicedToArray;
              } catch (tmp58) {
                _slicedToArray = tmp58;
                if (tmp5 === c3) {
                  c5 = tmp3;
                  throw tmp58;
                } else if (tmp2 === tmp60) {
                  c4 = tmp2;
                } else {
                  c4 = tmp;
                }
              }
            }
          });
          fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let c1 = tmp4;
                    let spanId = tmp8;
                    spanId = undefined;
                    c1 = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      spanId = outer1_0.spanContext().spanId;
                      const value = outer1_8.get(spanId);
                      c1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        let c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = outer1_15();
                        return obj1;
                      } else {
                        let debug2 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    c3 = _slicedToArray;
                    let debug = outer1_0(outer1_1[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (c1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(c1.cleanupTimeout);
                    }
                    outer1_8.delete(spanId);
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    _slicedToArray = arg1;
                    c1.endFrames = _slicedToArray;
                    (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                      const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                      const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                      const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = spanId(_undefined[2]).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanId.setAttribute("frames.total", diff);
                      const attr1 = spanId.setAttribute("frames.slow", diff1);
                      const attr2 = spanId.setAttribute("frames.frozen", diff2);
                      const debug = spanId(_undefined[2]).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                    })(spanId, c1.startFrames, _slicedToArray);
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (c1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(c1.cleanupTimeout);
                  }
                  outer1_8.delete(spanId);
                }
                c3 = 0;
                if (outer1_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(outer1_1.cleanupTimeout);
                }
                outer1_8.delete(outer1_0);
                throw _slicedToArray;
              } catch (tmp58) {
                _slicedToArray = tmp58;
                if (tmp5 === c3) {
                  c5 = tmp3;
                  throw tmp58;
                } else if (tmp2 === tmp60) {
                  c4 = tmp2;
                } else {
                  c4 = tmp;
                }
              }
            }
          }).then(() => {
            let obj = span;
            span.end(span);
            obj = { code: span(activeSpan[2]).SPAN_STATUS_OK };
            span.setStatus(obj);
            const debug = span(activeSpan[2]).debug;
            debug.log("[TimeToDisplay] " + span(activeSpan[2]).spanToJSON(span).description + " span updated with end timestamp and frame data.");
            if (outer1_7.has(activeSpan)) {
              obj4.delete(tmp7);
              const debug2 = tmp3(tmp4[2]).debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + obj.spanContext().spanId + ") end.");
              outer1_14(tmp, obj);
            }
            const obj3 = span(activeSpan[2]);
            obj4 = outer1_7;
            tmp = span;
            const result = span(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", obj, tmp7);
          }).catch((arg0) => {
            const debug = span(activeSpan[2]).debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for initial display span.", arg0);
            let obj = span;
            span.end(span);
            obj = { code: span(activeSpan[2]).SPAN_STATUS_OK };
            span.setStatus(obj);
            if (outer1_7.has(activeSpan)) {
              outer1_7.delete(tmp7);
              const debug2 = tmp(tmp2[2]).debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + obj.spanContext().spanId + ") end.");
              outer1_14(span, obj);
            }
            const result = span(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", obj, tmp7);
          });
          const nextPromise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw arg1;
              } else if (arg0 === 2) {
                let obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c5 = 2;
                if (0 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let c1 = tmp4;
                    let spanId = tmp8;
                    spanId = undefined;
                    c1 = undefined;
                    let _slicedToArray;
                    if (outer1_0(outer1_1[6]).NATIVE.enableNative) {
                      spanId = outer1_0.spanContext().spanId;
                      const value = outer1_8.get(spanId);
                      c1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        let c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = outer1_15();
                        return obj1;
                      } else {
                        let debug2 = outer1_0(outer1_1[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    c3 = _slicedToArray;
                    let debug = outer1_0(outer1_1[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + spanId + ".", c3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (c1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(c1.cleanupTimeout);
                    }
                    outer1_8.delete(spanId);
                    c5 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    _slicedToArray = arg1;
                    c1.endFrames = _slicedToArray;
                    (function attachFrameDataToSpan(spanId, startFrames, _slicedToArray) {
                      const diff = _slicedToArray.totalFrames - startFrames.totalFrames;
                      const diff1 = _slicedToArray.slowFrames - startFrames.slowFrames;
                      const diff2 = _slicedToArray.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = spanId(_undefined[2]).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanId.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanId.setAttribute("frames.total", diff);
                      const attr1 = spanId.setAttribute("frames.slow", diff1);
                      const attr2 = spanId.setAttribute("frames.frozen", diff2);
                      const debug = spanId(_undefined[2]).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanId.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                    })(spanId, c1.startFrames, _slicedToArray);
                    const debug3 = outer1_0(outer1_1[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + spanId + ".", _slicedToArray);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (c1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(c1.cleanupTimeout);
                  }
                  outer1_8.delete(spanId);
                }
                c3 = 0;
                if (outer1_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(outer1_1.cleanupTimeout);
                }
                outer1_8.delete(outer1_0);
                throw _slicedToArray;
              } catch (tmp58) {
                _slicedToArray = tmp58;
                if (tmp5 === c3) {
                  c5 = tmp3;
                  throw tmp58;
                } else if (tmp2 === tmp60) {
                  c4 = tmp2;
                } else {
                  c4 = tmp;
                }
              }
            }
          }).then(() => {
            let obj = span;
            span.end(span);
            obj = { code: span(activeSpan[2]).SPAN_STATUS_OK };
            span.setStatus(obj);
            const debug = span(activeSpan[2]).debug;
            debug.log("[TimeToDisplay] " + span(activeSpan[2]).spanToJSON(span).description + " span updated with end timestamp and frame data.");
            if (outer1_7.has(activeSpan)) {
              obj4.delete(tmp7);
              const debug2 = tmp3(tmp4[2]).debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + obj.spanContext().spanId + ") end.");
              outer1_14(tmp, obj);
            }
            const obj3 = span(activeSpan[2]);
            obj4 = outer1_7;
            tmp = span;
            const result = span(activeSpan[5]).setSpanDurationAsMeasurementOnSpan("time_to_initial_display", obj, tmp7);
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
      tmp = outer1_2(outer1_4(false), 2);
      [record, useFocusEffect] = tmp;
      tmp2 = useFocusEffect(() => { ... });
      tmp3 = outer1_3;
      tmp4 = closure_1;
      if (record) {
        record = useFocusEffect.record;
      }
      return outer1_3.createElement(tmp4, Object.assign({}, useFocusEffect, { record }));
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
      tmp = outer1_2(outer1_4(false), 2);
      [record, useFocusEffect] = tmp;
      tmp2 = useFocusEffect(() => { ... });
      tmp3 = outer1_3;
      tmp4 = closure_1;
      if (record) {
        record = useFocusEffect.record;
      }
      return outer1_3.createElement(tmp4, Object.assign({}, useFocusEffect, { record }));
    }
  }
  TimeToDisplayWrapper.displayName = "TimeToDisplayWrapper";
  return TimeToDisplayWrapper;
};