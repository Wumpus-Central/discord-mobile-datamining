// _runtime/01053_TimeToInitialDisplay.js
import _mod682 from "metro/00682__.js";
import _mod1021 from "metro/01021__.js";
import _mod1054 from "metro/01054__.js";
import _slicedToArray from "metro/00032__.js";
import noop from "metro/00019__.js";

require = fn;
class TimeToInitialDisplay {
  constructor(arg0) {
    tmp = closure_0;
    tmp2 = closure_1;
    obj = closure_0(closure_1[2]);
    activeSpan = obj.getActiveSpan();
    if (activeSpan) {
      tmp4 = closure_6;
      flag = true;
      result = closure_6.set(activeSpan, true);
    }
    span_id = activeSpan;
    if (activeSpan) {
      tmpResult = tmp(tmp2[2]);
      span_id = tmpResult.spanToJSON(activeSpan).span_id;
    }
    obj = { initialDisplay: global.record, parentSpanId: span_id };
    return closure_3.createElement(TimeToDisplay, obj, global.children);
  }
}
class TimeToFullDisplay {
  constructor(arg0) {
    tmp = closure_0;
    tmp2 = closure_1;
    obj = closure_0(closure_1[2]);
    activeSpan = obj.getActiveSpan();
    span_id = activeSpan;
    if (activeSpan) {
      tmpResult = tmp(tmp2[2]);
      span_id = tmpResult.spanToJSON(activeSpan).span_id;
    }
    obj = { fullDisplay: global.record, parentSpanId: span_id };
    return closure_3.createElement(TimeToDisplay, obj, global.children);
  }
}
function TimeToDisplay(initialDisplay) {
  const obj = { initialDisplay: initialDisplay.initialDisplay, fullDisplay: initialDisplay.fullDisplay, parentSpanId: initialDisplay.parentSpanId };
  return <>{noop.createElement(obj.getRNSentryOnDrawReporter(), { initialDisplay: initialDisplay.initialDisplay, fullDisplay: initialDisplay.fullDisplay, parentSpanId: initialDisplay.parentSpanId })}{initialDisplay.children}</>;
}
function startTimeToInitialDisplaySpan(isAutoInstrumented) {
  let obj = _mod682;
  const activeSpan = obj.getActiveSpan();
  const obj2 = _mod682;
  if (activeSpan) {
    const spanDescendants = obj2.getSpanDescendants(activeSpan);
    const found = spanDescendants.find((item) => "ui.load.initial_display" === startInactiveSpanResult(dependencyMap[2]).spanToJSON(item).op);
    let tmpResult = tmp(682);
    if (found) {
      const debug2 = tmpResult.debug;
      debug2.log("[TimeToDisplay] Found existing ui.load.initial_display span.");
      return found;
    } else {
      const _Object = Object;
      obj = { op: "ui.load.initial_display", name: "Time To Initial Display", startTime: null };
      tmpResult = tmp(682);
      obj.startTime = tmpResult.spanToJSON(activeSpan).start_timestamp;
      const startInactiveSpanResult = tmpResult.startInactiveSpan(Object.assign(obj, isAutoInstrumented));
      const require = startInactiveSpanResult;
      if (startInactiveSpanResult) {
        const spanId = startInactiveSpanResult.spanContext().spanId;
        fn(undefined, undefined, undefined, function*() {
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              let obj = { value, done: true };
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
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_0 = tmp7;
                  closure_128_0 = undefined;
                  let timeout;
                  closure_128_2 = undefined;
                  if (closure_0(tmp3[6]).NATIVE.enableNative) {
                    c3 = 1;
                    c4 = 2;
                    c5 = 1;
                    const obj1 = { value: fetchNativeFramesWithTimeout(), done: false };
                    return obj1;
                  }
                }
              } else {
                if (1 === tmp7) {
                  c3 = 0;
                  closure_128_3 = closure_2;
                  const debug3 = closure_0(tmp3[2]).debug;
                  const _HermesInternal3 = HermesInternal;
                  debug3.log("[TimeToDisplay] Failed to capture start frames for span " + closure_129_0 + ".", closure_128_3);
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 !== 2) {
                  closure_128_0 = value;
                  const _setTimeout = setTimeout;
                  timeout = setTimeout(() => {
                    if (map.get(closure_1_0)) {
                      map.delete(closure_1_0);
                      const debug = closure_0(closure_1[2]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + closure_1_0 + " after timeout.");
                    }
                  }, 60000);
                  if (!map.has(closure_129_0)) {
                    obj = { startFrames: null, endFrames: null, cleanupTimeout: timeout };
                    const result = map.set(closure_129_0, obj);
                  }
                  closure_128_2 = map.get(closure_129_0);
                  if (closure_128_2) {
                    closure_128_2.startFrames = closure_128_0;
                    closure_128_2.cleanupTimeout = timeout;
                    const debug2 = closure_0(tmp3[2]).debug;
                    const _HermesInternal2 = HermesInternal;
                    debug2.log("[TimeToDisplay] Captured start frames for span " + closure_129_0 + ".", closure_128_0);
                    c3 = 0;
                  } else {
                    const _clearTimeout = clearTimeout;
                    clearTimeout(timeout);
                    let debug = closure_0(tmp3[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Span " + closure_129_0 + " already ended, discarding start frames.");
                    c3 = 0;
                    c5 = 3;
                    const obj2 = { value: undefined, done: true };
                    return obj2;
                  }
                }
                c3 = 0;
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              }
              c5 = 3;
            } catch (tmp48) {
              closure_2 = tmp48;
              if (tmp4 === c3) {
                c5 = tmp2;
                throw tmp48;
              } else {
                c4 = tmp;
              }
            }
          }
        }).catch((error) => {
          const debug = _mod682.debug;
          debug.log("[TimeToDisplay] Failed to capture start frames for initial display span (" + startInactiveSpanResult.spanContext().spanId + ").", error);
        });
        isAutoInstrumented = undefined;
        if (null != isAutoInstrumented) {
          isAutoInstrumented = isAutoInstrumented.isAutoInstrumented;
        }
        if (isAutoInstrumented) {
          const attr = startInactiveSpanResult.setAttribute(tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1023).SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
        } else {
          const result = weakMap.set(activeSpan, true);
          const attr1 = startInactiveSpanResult.setAttribute(tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmp(1023).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
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
  let found;
  dependencyMap = undefined;
  let timeout;
  const activeSpan = found(682).getActiveSpan();
  let obj3 = found(682);
  if (activeSpan) {
    const spanDescendants = obj3.getSpanDescendants(activeSpan);
    found = spanDescendants.find((item) => "ui.load.initial_display" === found(_undefined[2]).spanToJSON(item).op);
    if (found) {
      const found1 = spanDescendants.find((item) => "ui.load.full_display" === found(_undefined[2]).spanToJSON(item).op);
      let tmpResult = tmp(682);
      if (found1) {
        let debug3 = tmpResult.debug;
        debug3.log("[TimeToDisplay] Found existing ui.load.full_display span.");
        return found1;
      } else {
        const _Object = Object;
        obj = { op: "ui.load.full_display", name: "Time To Full Display", startTime: null };
        tmpResult = tmp(682);
        obj.startTime = tmpResult.spanToJSON(found).start_timestamp;
        const startInactiveSpanResult = tmpResult.startInactiveSpan(Object.assign(obj, obj));
        dependencyMap = startInactiveSpanResult;
        if (startInactiveSpanResult) {
          let spanId = startInactiveSpanResult.spanContext().spanId;
          fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_0 = tmp7;
                    closure_128_0 = undefined;
                    let timeout;
                    closure_128_2 = undefined;
                    if (closure_0(tmp3[6]).NATIVE.enableNative) {
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj1 = { value: fetchNativeFramesWithTimeout(), done: false };
                      return obj1;
                    }
                  }
                } else {
                  if (1 === tmp7) {
                    c3 = 0;
                    closure_128_3 = closure_2;
                    const debug3 = closure_0(tmp3[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Failed to capture start frames for span " + closure_129_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    closure_128_0 = value;
                    const _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      if (map.get(closure_1_0)) {
                        map.delete(closure_1_0);
                        const debug = closure_0(closure_1[2]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + closure_1_0 + " after timeout.");
                      }
                    }, 60000);
                    if (!map.has(closure_129_0)) {
                      obj = { startFrames: null, endFrames: null, cleanupTimeout: timeout };
                      const result = map.set(closure_129_0, obj);
                    }
                    closure_128_2 = map.get(closure_129_0);
                    if (closure_128_2) {
                      closure_128_2.startFrames = closure_128_0;
                      closure_128_2.cleanupTimeout = timeout;
                      const debug2 = closure_0(tmp3[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.log("[TimeToDisplay] Captured start frames for span " + closure_129_0 + ".", closure_128_0);
                      c3 = 0;
                    } else {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(timeout);
                      let debug = closure_0(tmp3[2]).debug;
                      let _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Span " + closure_129_0 + " already ended, discarding start frames.");
                      c3 = 0;
                      c5 = 3;
                      const obj2 = { value: undefined, done: true };
                      return obj2;
                    }
                  }
                  c3 = 0;
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                }
                c5 = 3;
              } catch (tmp48) {
                closure_2 = tmp48;
                if (tmp4 === c3) {
                  c5 = tmp2;
                  throw tmp48;
                } else {
                  c4 = tmp;
                }
              }
            }
          }).catch((error) => {
            const debug = _mod682.debug;
            debug.log("[TimeToDisplay] Failed to capture start frames for full display span (" + _undefined.spanContext().spanId + ").", error);
          });
          let _setTimeout = setTimeout;
          timeout = setTimeout(() => {
            let obj = _mod682;
            if (!obj.spanToJSON(status).timestamp) {
              obj = { code: _mod682.SPAN_STATUS_ERROR, message: "deadline_exceeded" };
              status.setStatus(obj);
              const promise = fn(undefined, undefined, undefined, function*() {
                if (c5 === 2) {
                  c5 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj = { value, done: true };
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
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        obj2 = tmp8;
                        closure_128_0 = undefined;
                        closure_128_1 = undefined;
                        closure_128_2 = undefined;
                        if (obj2(tmp4[6]).NATIVE.enableNative) {
                          const spanId = obj2.spanContext().spanId;
                          closure_128_0 = spanId;
                          value = map.get(spanId);
                          closure_128_1 = value;
                          let startFrames;
                          if (null != value) {
                            startFrames = value.startFrames;
                          }
                          if (startFrames) {
                            c3 = 2;
                            c4 = 3;
                            c5 = 1;
                            const obj1 = { value: closure_1_15(), done: false };
                            return obj1;
                          } else {
                            let debug2 = obj2(tmp4[2]).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                          }
                        }
                        c5 = 3;
                      }
                    } else if (1 !== tmp8) {
                      if (2 === tmp8) {
                        c3 = 1;
                        closure_128_3 = closure_2;
                        let debug = obj2(tmp4[2]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        if (closure_128_1.cleanupTimeout) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(closure_128_1.cleanupTimeout);
                        }
                        map.delete(closure_128_0);
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        closure_128_2 = value;
                        closure_128_1.endFrames = closure_128_2;
                        (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                          const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                          const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                          const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                          if (diff <= 0) {
                            if (diff1 <= 0) {
                              if (diff2 <= 0) {
                                const debug2 = closure_1_0(682).debug;
                                const _HermesInternal = HermesInternal;
                                debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                              }
                            }
                          }
                          const attr = spanContext.setAttribute("frames.total", diff);
                          const attr1 = spanContext.setAttribute("frames.slow", diff1);
                          const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                          const debug = closure_1_0(682).debug;
                          debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                          const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                        })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                        const debug3 = obj2(tmp4[2]).debug;
                        const _HermesInternal3 = HermesInternal;
                        debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                        c3 = 1;
                      }
                      c3 = 0;
                      if (closure_128_1.cleanupTimeout) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(closure_128_1.cleanupTimeout);
                      }
                      map.delete(closure_128_0);
                    }
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    throw closure_2;
                  } catch (tmp58) {
                    closure_2 = tmp58;
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
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj = { value, done: true };
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
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        obj2 = tmp8;
                        closure_128_0 = undefined;
                        closure_128_1 = undefined;
                        closure_128_2 = undefined;
                        if (obj2(tmp4[6]).NATIVE.enableNative) {
                          const spanId = obj2.spanContext().spanId;
                          closure_128_0 = spanId;
                          value = map.get(spanId);
                          closure_128_1 = value;
                          let startFrames;
                          if (null != value) {
                            startFrames = value.startFrames;
                          }
                          if (startFrames) {
                            c3 = 2;
                            c4 = 3;
                            c5 = 1;
                            const obj1 = { value: closure_1_15(), done: false };
                            return obj1;
                          } else {
                            let debug2 = obj2(tmp4[2]).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                          }
                        }
                        c5 = 3;
                      }
                    } else if (1 !== tmp8) {
                      if (2 === tmp8) {
                        c3 = 1;
                        closure_128_3 = closure_2;
                        let debug = obj2(tmp4[2]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        if (closure_128_1.cleanupTimeout) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(closure_128_1.cleanupTimeout);
                        }
                        map.delete(closure_128_0);
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        closure_128_2 = value;
                        closure_128_1.endFrames = closure_128_2;
                        (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                          const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                          const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                          const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                          if (diff <= 0) {
                            if (diff1 <= 0) {
                              if (diff2 <= 0) {
                                const debug2 = closure_1_0(682).debug;
                                const _HermesInternal = HermesInternal;
                                debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                              }
                            }
                          }
                          const attr = spanContext.setAttribute("frames.total", diff);
                          const attr1 = spanContext.setAttribute("frames.slow", diff1);
                          const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                          const debug = closure_1_0(682).debug;
                          debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                          const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                        })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                        const debug3 = obj2(tmp4[2]).debug;
                        const _HermesInternal3 = HermesInternal;
                        debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                        c3 = 1;
                      }
                      c3 = 0;
                      if (closure_128_1.cleanupTimeout) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(closure_128_1.cleanupTimeout);
                      }
                      map.delete(closure_128_0);
                    }
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    throw closure_2;
                  } catch (tmp58) {
                    closure_2 = tmp58;
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
                const debug = found(dependencyMap[2]).debug;
                debug.log("[TimeToDisplay] span " + _undefined.spanContext().spanId + " updated with frame data.");
                _undefined.end(found(dependencyMap[2]).spanToJSON(obj2).timestamp);
                obj2 = found(dependencyMap[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", _undefined);
              }).catch(() => {
                const debug = found(dependencyMap[2]).debug;
                debug.warn("[TimeToDisplay] Failed to capture end frames for full display span (" + _undefined.spanContext().spanId + ").");
                _undefined.end(found(dependencyMap[2]).spanToJSON(obj2).timestamp);
                obj2 = found(dependencyMap[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", _undefined);
              });
              let debug = _mod682.debug;
              debug.warn("[TimeToDisplay] Full display span deadline_exceeded.");
              const nextPromise = fn(undefined, undefined, undefined, function*() {
                if (c5 === 2) {
                  c5 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp7 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    let obj = { value, done: true };
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
                        throw value;
                      } else if (arg0 === 2) {
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        obj2 = tmp8;
                        closure_128_0 = undefined;
                        closure_128_1 = undefined;
                        closure_128_2 = undefined;
                        if (obj2(tmp4[6]).NATIVE.enableNative) {
                          const spanId = obj2.spanContext().spanId;
                          closure_128_0 = spanId;
                          value = map.get(spanId);
                          closure_128_1 = value;
                          let startFrames;
                          if (null != value) {
                            startFrames = value.startFrames;
                          }
                          if (startFrames) {
                            c3 = 2;
                            c4 = 3;
                            c5 = 1;
                            const obj1 = { value: closure_1_15(), done: false };
                            return obj1;
                          } else {
                            let debug2 = obj2(tmp4[2]).debug;
                            const _HermesInternal2 = HermesInternal;
                            debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                          }
                        }
                        c5 = 3;
                      }
                    } else if (1 !== tmp8) {
                      if (2 === tmp8) {
                        c3 = 1;
                        closure_128_3 = closure_2;
                        let debug = obj2(tmp4[2]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                      } else if (arg0 === 1) {
                        c5 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 0;
                        if (closure_128_1.cleanupTimeout) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(closure_128_1.cleanupTimeout);
                        }
                        map.delete(closure_128_0);
                        c5 = 3;
                        obj = { value, done: true };
                        return obj;
                      } else {
                        closure_128_2 = value;
                        closure_128_1.endFrames = closure_128_2;
                        (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                          const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                          const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                          const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                          if (diff <= 0) {
                            if (diff1 <= 0) {
                              if (diff2 <= 0) {
                                const debug2 = closure_1_0(682).debug;
                                const _HermesInternal = HermesInternal;
                                debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                              }
                            }
                          }
                          const attr = spanContext.setAttribute("frames.total", diff);
                          const attr1 = spanContext.setAttribute("frames.slow", diff1);
                          const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                          const debug = closure_1_0(682).debug;
                          debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                          const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                        })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                        const debug3 = obj2(tmp4[2]).debug;
                        const _HermesInternal3 = HermesInternal;
                        debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                        c3 = 1;
                      }
                      c3 = 0;
                      if (closure_128_1.cleanupTimeout) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(closure_128_1.cleanupTimeout);
                      }
                      map.delete(closure_128_0);
                    }
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    throw closure_2;
                  } catch (tmp58) {
                    closure_2 = tmp58;
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
                const debug = found(dependencyMap[2]).debug;
                debug.log("[TimeToDisplay] span " + _undefined.spanContext().spanId + " updated with frame data.");
                _undefined.end(found(dependencyMap[2]).spanToJSON(obj2).timestamp);
                obj2 = found(dependencyMap[5]);
                const result = obj2.setSpanDurationAsMeasurement("time_to_full_display", _undefined);
              });
            }
          }, obj.timeoutMs);
          let promise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp6 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_0 = tmp7;
                    closure_128_0 = undefined;
                    let timeout;
                    closure_128_2 = undefined;
                    if (closure_0(tmp3[6]).NATIVE.enableNative) {
                      c3 = 1;
                      c4 = 2;
                      c5 = 1;
                      const obj1 = { value: fetchNativeFramesWithTimeout(), done: false };
                      return obj1;
                    }
                  }
                } else {
                  if (1 === tmp7) {
                    c3 = 0;
                    closure_128_3 = closure_2;
                    const debug3 = closure_0(tmp3[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Failed to capture start frames for span " + closure_129_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 !== 2) {
                    closure_128_0 = value;
                    const _setTimeout = setTimeout;
                    timeout = setTimeout(() => {
                      if (map.get(closure_1_0)) {
                        map.delete(closure_1_0);
                        const debug = closure_0(closure_1[2]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[TimeToDisplay] Cleaned up stale frame data for span " + closure_1_0 + " after timeout.");
                      }
                    }, 60000);
                    if (!map.has(closure_129_0)) {
                      obj = { startFrames: null, endFrames: null, cleanupTimeout: timeout };
                      const result = map.set(closure_129_0, obj);
                    }
                    closure_128_2 = map.get(closure_129_0);
                    if (closure_128_2) {
                      closure_128_2.startFrames = closure_128_0;
                      closure_128_2.cleanupTimeout = timeout;
                      const debug2 = closure_0(tmp3[2]).debug;
                      const _HermesInternal2 = HermesInternal;
                      debug2.log("[TimeToDisplay] Captured start frames for span " + closure_129_0 + ".", closure_128_0);
                      c3 = 0;
                    } else {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(timeout);
                      let debug = closure_0(tmp3[2]).debug;
                      let _HermesInternal = HermesInternal;
                      debug.log("[TimeToDisplay] Span " + closure_129_0 + " already ended, discarding start frames.");
                      c3 = 0;
                      c5 = 3;
                      const obj2 = { value: undefined, done: true };
                      return obj2;
                    }
                  }
                  c3 = 0;
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                }
                c5 = 3;
              } catch (tmp48) {
                closure_2 = tmp48;
                if (tmp4 === c3) {
                  c5 = tmp2;
                  throw tmp48;
                } else {
                  c4 = tmp;
                }
              }
            }
          });
          tmp(682).fill(startInactiveSpanResult, "end", (arg0) => {
            closure_0 = arg0;
            return (arg0) => {
              clearTimeout(closure_2);
              const call = closure_0.call;
              if (typeof call === "unknown") {
                closure_0(arg0);
              } else {
                call(c1, arg0);
              }
            };
          });
          let isAutoInstrumented;
          if (null != obj) {
            isAutoInstrumented = obj.isAutoInstrumented;
          }
          const setAttribute = startInactiveSpanResult.setAttribute;
          const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = tmp(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
          const tmpResult2 = tmp(1023);
          if (isAutoInstrumented) {
            let attr = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmpResult2.SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY);
          } else {
            let attr1 = setAttribute(SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, tmpResult2.SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY);
          }
          return startInactiveSpanResult;
        }
      }
    } else {
      let debug2 = tmp(682).debug;
      debug2.warn("[TimeToDisplay] No initial display span found to attach ui.load.full_display to.");
    }
  } else {
    let debug = obj3.debug;
    debug.warn("[TimeToDisplay] No active span found to attach ui.load.full_display to.");
  }
  let obj2 = found(682);
}
function updateFullDisplaySpan(arg0, arg1) {
  _require = arg0;
  const activeSpan = require("metro/00682__.js").getActiveSpan();
  if (activeSpan) {
    let found = arg1;
    if (!arg1) {
      let tmpResult = tmp(tmp2[2]);
      const spanDescendants = tmpResult.getSpanDescendants(activeSpan);
      found = spanDescendants.find((item) => "ui.load.initial_display" === closure_0(timestamp[2]).spanToJSON(item).op);
    }
    timestamp = found;
    if (found) {
      tmpResult = tmp(tmp2[2]);
      timestamp = tmpResult.spanToJSON(found).timestamp;
    }
    if (timestamp) {
      const tmp10 = startTimeToFullDisplaySpan({ isAutoInstrumented: true });
      closure_2 = tmp10;
      const tmpResult1 = tmp(tmp2[2]);
      if (tmp10) {
        const spanToJSONResult = tmpResult1.spanToJSON(tmp10);
        noop = spanToJSONResult;
        if (spanToJSONResult.timestamp) {
          const debug4 = tmp(tmp2[2]).debug;
          const _HermesInternal2 = HermesInternal;
          debug4.warn("[TimeToDisplay] " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") span already ended.");
        } else {
          closure_129_0 = tmp10;
          const promise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    obj2 = tmp8;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (obj2(tmp4[6]).NATIVE.enableNative) {
                      const spanId = obj2.spanContext().spanId;
                      closure_128_0 = spanId;
                      value = map.get(spanId);
                      closure_128_1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: closure_1_15(), done: false };
                        return obj1;
                      } else {
                        let debug2 = obj2(tmp4[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    closure_128_3 = closure_2;
                    let debug = obj2(tmp4[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_2 = value;
                    closure_128_1.endFrames = closure_128_2;
                    (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                      const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                      const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                      const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = closure_1_0(682).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanContext.setAttribute("frames.total", diff);
                      const attr1 = spanContext.setAttribute("frames.slow", diff1);
                      const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                      const debug = closure_1_0(682).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                      const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                    })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                    const debug3 = obj2(tmp4[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (closure_128_1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(closure_128_1.cleanupTimeout);
                  }
                  map.delete(closure_128_0);
                }
                c3 = 0;
                if (closure_128_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(closure_128_1.cleanupTimeout);
                }
                map.delete(closure_128_0);
                throw closure_2;
              } catch (tmp58) {
                closure_2 = tmp58;
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
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    obj2 = tmp8;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (obj2(tmp4[6]).NATIVE.enableNative) {
                      const spanId = obj2.spanContext().spanId;
                      closure_128_0 = spanId;
                      value = map.get(spanId);
                      closure_128_1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: closure_1_15(), done: false };
                        return obj1;
                      } else {
                        let debug2 = obj2(tmp4[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    closure_128_3 = closure_2;
                    let debug = obj2(tmp4[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_2 = value;
                    closure_128_1.endFrames = closure_128_2;
                    (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                      const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                      const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                      const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = closure_1_0(682).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanContext.setAttribute("frames.total", diff);
                      const attr1 = spanContext.setAttribute("frames.slow", diff1);
                      const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                      const debug = closure_1_0(682).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                      const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                    })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                    const debug3 = obj2(tmp4[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (closure_128_1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(closure_128_1.cleanupTimeout);
                  }
                  map.delete(closure_128_0);
                }
                c3 = 0;
                if (closure_128_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(closure_128_1.cleanupTimeout);
                }
                map.delete(closure_128_0);
                throw closure_2;
              } catch (tmp58) {
                closure_2 = tmp58;
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
            let tmp3 = closure_0;
            if (timestamp > closure_0) {
              tmp3 = timestamp;
            }
            if (timestamp > closure_0) {
              const debug = _mod682.debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            closure_2.end(tmp3);
            closure_2.setStatus({ code: _mod682.SPAN_STATUS_OK });
            const debug2 = _mod682.debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: _mod682.SPAN_STATUS_OK };
            const result = _mod1021.setSpanDurationAsMeasurement("time_to_full_display", closure_2);
          }).catch((error) => {
            const debug = _mod682.debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for full display span.", error);
            let tmp4 = closure_0;
            if (timestamp > closure_0) {
              tmp4 = timestamp;
            }
            closure_2.end(tmp4);
            closure_2.setStatus({ code: _mod682.SPAN_STATUS_OK });
            const obj = { code: _mod682.SPAN_STATUS_OK };
            const result = _mod1021.setSpanDurationAsMeasurement("time_to_full_display", closure_2);
            const tmpResult = _mod1021;
          });
          const nextPromise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    obj2 = tmp8;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (obj2(tmp4[6]).NATIVE.enableNative) {
                      const spanId = obj2.spanContext().spanId;
                      closure_128_0 = spanId;
                      value = map.get(spanId);
                      closure_128_1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: closure_1_15(), done: false };
                        return obj1;
                      } else {
                        let debug2 = obj2(tmp4[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    closure_128_3 = closure_2;
                    let debug = obj2(tmp4[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_2 = value;
                    closure_128_1.endFrames = closure_128_2;
                    (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                      const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                      const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                      const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = closure_1_0(682).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanContext.setAttribute("frames.total", diff);
                      const attr1 = spanContext.setAttribute("frames.slow", diff1);
                      const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                      const debug = closure_1_0(682).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                      const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                    })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                    const debug3 = obj2(tmp4[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (closure_128_1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(closure_128_1.cleanupTimeout);
                  }
                  map.delete(closure_128_0);
                }
                c3 = 0;
                if (closure_128_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(closure_128_1.cleanupTimeout);
                }
                map.delete(closure_128_0);
                throw closure_2;
              } catch (tmp58) {
                closure_2 = tmp58;
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
            let tmp3 = closure_0;
            if (timestamp > closure_0) {
              tmp3 = timestamp;
            }
            if (timestamp > closure_0) {
              const debug = _mod682.debug;
              debug.warn("[TimeToDisplay] Using initial display end. Full display end frame timestamp is before initial display end.");
            }
            closure_2.end(tmp3);
            closure_2.setStatus({ code: _mod682.SPAN_STATUS_OK });
            const debug2 = _mod682.debug;
            debug2.log("[TimeToDisplay] span " + spanToJSONResult.description + " (" + spanToJSONResult.span_id + ") updated with end timestamp and frame data.");
            const obj = { code: _mod682.SPAN_STATUS_OK };
            const result = _mod1021.setSpanDurationAsMeasurement("time_to_full_display", closure_2);
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
  let obj = require("metro/00682__.js");
}
function fetchNativeFramesWithTimeout() {
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c2 = false;
    const timeout = setTimeout(() => {
      if (!c2) {
        c2 = true;
        closure_1("Fetching native frames took too long. Dropping frames.");
      }
    }, 2000);
    const NATIVE = require("NativeModules").NATIVE;
    const nativeFrames = NATIVE.fetchNativeFrames();
    nativeFrames.then((result) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        if (result) {
          closure_0(result);
        } else {
          closure_1("Native frames response is null.");
        }
      }
    }).then(undefined, (arg0) => {
      if (!c2) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_3);
        c2 = true;
        closure_1(arg0);
      }
    });
  });
}
const useState = fn(19).useState;
fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let _Promise = arg2;
    closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((fn, arg1) => {
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
          closure_0(done.value);
        } else {
          let tmp = done.value;
          closure_0 = tmp;
          if (!(tmp instanceof Promise)) {
            tmp = new tmp((fn) => {
              fn(value);
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
      value = iter2.value;
      if (iter2.done) {
        fn(value);
      } else {
        closure_0 = value;
        let tmp3 = value;
        if (!(value instanceof fulfilled)) {
          tmp3 = new tmp3((fn) => {
            fn(value);
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
  _require = arg0;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let activeSpan = obj.activeSpan;
  if (activeSpan === undefined) {
    activeSpan = require("metro/00682__.js").getActiveSpan();
    const obj2 = require("metro/00682__.js");
  }
  let span = obj.span;
  if (span === undefined) {
    span = startTimeToInitialDisplaySpan();
  }
  let obj3 = require("metro/00682__.js");
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
          closure_129_0 = span;
          const promise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    obj2 = tmp8;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (obj2(tmp4[6]).NATIVE.enableNative) {
                      const spanId = obj2.spanContext().spanId;
                      closure_128_0 = spanId;
                      value = map.get(spanId);
                      closure_128_1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: closure_1_15(), done: false };
                        return obj1;
                      } else {
                        let debug2 = obj2(tmp4[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    closure_128_3 = closure_2;
                    let debug = obj2(tmp4[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_2 = value;
                    closure_128_1.endFrames = closure_128_2;
                    (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                      const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                      const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                      const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = closure_1_0(682).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanContext.setAttribute("frames.total", diff);
                      const attr1 = spanContext.setAttribute("frames.slow", diff1);
                      const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                      const debug = closure_1_0(682).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                      const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                    })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                    const debug3 = obj2(tmp4[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (closure_128_1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(closure_128_1.cleanupTimeout);
                  }
                  map.delete(closure_128_0);
                }
                c3 = 0;
                if (closure_128_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(closure_128_1.cleanupTimeout);
                }
                map.delete(closure_128_0);
                throw closure_2;
              } catch (tmp58) {
                closure_2 = tmp58;
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
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    obj2 = tmp8;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (obj2(tmp4[6]).NATIVE.enableNative) {
                      const spanId = obj2.spanContext().spanId;
                      closure_128_0 = spanId;
                      value = map.get(spanId);
                      closure_128_1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: closure_1_15(), done: false };
                        return obj1;
                      } else {
                        let debug2 = obj2(tmp4[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    closure_128_3 = closure_2;
                    let debug = obj2(tmp4[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_2 = value;
                    closure_128_1.endFrames = closure_128_2;
                    (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                      const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                      const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                      const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = closure_1_0(682).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanContext.setAttribute("frames.total", diff);
                      const attr1 = spanContext.setAttribute("frames.slow", diff1);
                      const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                      const debug = closure_1_0(682).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                      const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                    })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                    const debug3 = obj2(tmp4[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (closure_128_1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(closure_128_1.cleanupTimeout);
                  }
                  map.delete(closure_128_0);
                }
                c3 = 0;
                if (closure_128_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(closure_128_1.cleanupTimeout);
                }
                map.delete(closure_128_0);
                throw closure_2;
              } catch (tmp58) {
                closure_2 = tmp58;
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
            span.end(closure_0);
            const obj = { code: _mod682.SPAN_STATUS_OK };
            span.setStatus(obj);
            const debug = _mod682.debug;
            debug.log("[TimeToDisplay] " + _mod682.spanToJSON(span).description + " span updated with end timestamp and frame data.");
            if (weakMap1.has(activeSpan)) {
              weakMap1.delete(activeSpan);
              const debug2 = _mod682.debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + obj.spanContext().spanId + ") end.");
              updateFullDisplaySpan(closure_0, obj);
            }
            const result = _mod1021.setSpanDurationAsMeasurementOnSpan("time_to_initial_display", obj, activeSpan);
            const tmp3Result = _mod1021;
          }).catch((error) => {
            const debug = _mod682.debug;
            debug.log("[TimeToDisplay] Failed to capture frame data for initial display span.", error);
            span.end(closure_0);
            const obj = { code: _mod682.SPAN_STATUS_OK };
            span.setStatus(obj);
            if (weakMap1.has(activeSpan)) {
              weakMap1.delete(activeSpan);
              const debug2 = _mod682.debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + obj.spanContext().spanId + ") end.");
              updateFullDisplaySpan(closure_0, obj);
            }
            const result = _mod1021.setSpanDurationAsMeasurementOnSpan("time_to_initial_display", obj, activeSpan);
            const tmpResult = _mod1021;
          });
          const nextPromise = fn(undefined, undefined, undefined, function*() {
            if (c5 === 2) {
              c5 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp7 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj = { value, done: true };
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
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    obj2 = tmp8;
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    closure_128_2 = undefined;
                    if (obj2(tmp4[6]).NATIVE.enableNative) {
                      const spanId = obj2.spanContext().spanId;
                      closure_128_0 = spanId;
                      value = map.get(spanId);
                      closure_128_1 = value;
                      let startFrames;
                      if (null != value) {
                        startFrames = value.startFrames;
                      }
                      if (startFrames) {
                        c3 = 2;
                        c4 = 3;
                        c5 = 1;
                        const obj1 = { value: closure_1_15(), done: false };
                        return obj1;
                      } else {
                        let debug2 = obj2(tmp4[2]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log("[TimeToDisplay] No start frames found for span " + spanId + ", skipping frame data collection.");
                      }
                    }
                    c5 = 3;
                  }
                } else if (1 !== tmp8) {
                  if (2 === tmp8) {
                    c3 = 1;
                    closure_128_3 = closure_2;
                    let debug = obj2(tmp4[2]).debug;
                    let _HermesInternal = HermesInternal;
                    debug.log("[TimeToDisplay] Failed to capture end frames for span " + closure_128_0 + ".", closure_128_3);
                  } else if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 0;
                    if (closure_128_1.cleanupTimeout) {
                      const _clearTimeout = clearTimeout;
                      clearTimeout(closure_128_1.cleanupTimeout);
                    }
                    map.delete(closure_128_0);
                    c5 = 3;
                    obj = { value, done: true };
                    return obj;
                  } else {
                    closure_128_2 = value;
                    closure_128_1.endFrames = closure_128_2;
                    (function attachFrameDataToSpan(spanContext, startFrames, totalFrames2) {
                      const diff = totalFrames2.totalFrames - startFrames.totalFrames;
                      const diff1 = totalFrames2.slowFrames - startFrames.slowFrames;
                      const diff2 = totalFrames2.frozenFrames - startFrames.frozenFrames;
                      if (diff <= 0) {
                        if (diff1 <= 0) {
                          if (diff2 <= 0) {
                            const debug2 = closure_1_0(682).debug;
                            const _HermesInternal = HermesInternal;
                            debug2.warn("[TimeToDisplay] Detected zero slow or frozen frames. Not adding measurements to span (" + spanContext.spanContext().spanId + ").");
                          }
                        }
                      }
                      const attr = spanContext.setAttribute("frames.total", diff);
                      const attr1 = spanContext.setAttribute("frames.slow", diff1);
                      const attr2 = spanContext.setAttribute("frames.frozen", diff2);
                      const debug = closure_1_0(682).debug;
                      debug.log("[TimeToDisplay] Attached frame data to span.", { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } });
                      const obj = { spanId: spanContext.spanContext().spanId, frameData: { total: diff, slow: diff1, frozen: diff2 } };
                    })(closure_129_0, closure_128_1.startFrames, closure_128_2);
                    const debug3 = obj2(tmp4[2]).debug;
                    const _HermesInternal3 = HermesInternal;
                    debug3.log("[TimeToDisplay] Captured and attached end frames for span " + closure_128_0 + ".", closure_128_2);
                    c3 = 1;
                  }
                  c3 = 0;
                  if (closure_128_1.cleanupTimeout) {
                    const _clearTimeout2 = clearTimeout;
                    clearTimeout(closure_128_1.cleanupTimeout);
                  }
                  map.delete(closure_128_0);
                }
                c3 = 0;
                if (closure_128_1.cleanupTimeout) {
                  const _clearTimeout3 = clearTimeout;
                  clearTimeout(closure_128_1.cleanupTimeout);
                }
                map.delete(closure_128_0);
                throw closure_2;
              } catch (tmp58) {
                closure_2 = tmp58;
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
            span.end(closure_0);
            const obj = { code: _mod682.SPAN_STATUS_OK };
            span.setStatus(obj);
            const debug = _mod682.debug;
            debug.log("[TimeToDisplay] " + _mod682.spanToJSON(span).description + " span updated with end timestamp and frame data.");
            if (weakMap1.has(activeSpan)) {
              weakMap1.delete(activeSpan);
              const debug2 = _mod682.debug;
              const _HermesInternal = HermesInternal;
              debug2.log("[TimeToDisplay] Updating full display with initial display (" + obj.spanContext().spanId + ") end.");
              updateFullDisplaySpan(closure_0, obj);
            }
            const result = _mod1021.setSpanDurationAsMeasurementOnSpan("time_to_initial_display", obj, activeSpan);
            const tmp3Result = _mod1021;
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
  closure_1 = TimeToFullDisplay;
  class TimeToDisplayWrapper {
    constructor(arg0) {
      tmp = closure_2(useState(false), 2);
      [record, closure_0] = tmp;
      tmp2 = useFocusEffect(() => { ... });
      tmp3 = closure_3;
      tmp4 = closure_1;
      if (record) {
        record = useFocusEffect.record;
      }
      return closure_3.createElement(tmp4, Object.assign({}, useFocusEffect, { record }));
    }
  }
  TimeToDisplayWrapper.displayName = "TimeToDisplayWrapper";
  return TimeToDisplayWrapper;
};
export const createTimeToInitialDisplay = function createTimeToInitialDisplay(useFocusEffect) {
  useFocusEffect = useFocusEffect.useFocusEffect;
  closure_1 = TimeToInitialDisplay;
  class TimeToDisplayWrapper {
    constructor(arg0) {
      tmp = closure_2(useState(false), 2);
      [record, closure_0] = tmp;
      tmp2 = useFocusEffect(() => { ... });
      tmp3 = closure_3;
      tmp4 = closure_1;
      if (record) {
        record = useFocusEffect.record;
      }
      return closure_3.createElement(tmp4, Object.assign({}, useFocusEffect, { record }));
    }
  }
  TimeToDisplayWrapper.displayName = "TimeToDisplayWrapper";
  return TimeToDisplayWrapper;
};