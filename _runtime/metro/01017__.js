// === Module 1017: ? ===

// Module 1017
import _mod682 from "module_682" /* 682 */;
import _mod987 from "module_987" /* 987 */;
import patchAppRegistryRunApplication from "patchAppRegistryRunApplication" /* 1018 */;

require = arg1;
let dependencyMap = arg6;
function setSpanDurationAsMeasurementOnTransactionEvent(measurements, arg1, timestamp) {
  if (timestamp.timestamp) {
    if (timestamp.start_timestamp) {
      measurements.measurements = measurements.measurements || {};
      const obj = { value: 1000 * (timestamp.timestamp - timestamp.start_timestamp), unit: "millisecond" };
      measurements.measurements[arg1] = obj;
      const tmp3 = measurements.measurements || {};
    }
  }
  const debug = _mod682.debug;
  debug.warn("Span is missing start or end timestamp. Cam not set measurement on transaction event.");
}
let fn = this;
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
const AppStart = "AppStart";
let global;
let c5 = false;
let c6;
let c7 = false;
function _setAppStartEndData(arg0) {
  if (global) {
    const debug = _mod682.debug;
    debug.warn("Overwriting already set app start end data.");
  }
  global = arg0;
}

export const captureAppStart = function captureAppStart() {
  c0 = true;
  return fn(undefined, undefined, undefined, function*(arg0, value) {
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
            _true = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            const client = _true(tmp3[0]).getClient();
            closure_128_0 = client;
            if (client) {
              c5 = c0;
              let obj2 = _true(tmp3[0]);
              closure_128_1 = 1000 * obj2.timestampInSeconds();
              closure_128_2 = null;
              if (_true(tmp3[1]).NATIVE.enableNative) {
                c3 = 1;
                const NATIVE = _true(tmp3[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj1 = { value: NATIVE.fetchNativeFrames(), done: false };
                return obj1;
              }
            } else {
              const debug3 = _true(tmp3[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj9 = _true(tmp3[0]);
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_3 = closure_2;
          const debug2 = _true(tmp3[0]).debug;
          debug2.log("[AppStart] Failed to capture end frames for app start.", closure_128_3);
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_2 = value;
            const debug = _true(tmp3[0]).debug;
            debug.log("[AppStart] Captured end frames for app start.", closure_128_2);
            c3 = 0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        const obj3 = { timestampMs: closure_128_1, endFrames: closure_128_2 };
        _setAppStartEndData(obj3);
        const integrationByName = closure_128_0.getIntegrationByName(c3);
        closure_129_1 = integrationByName;
        let result;
        if (null !== integrationByName) {
          if (undefined !== closure_129_1) {
            result = closure_129_1.captureStandaloneAppStart();
          }
        }
        c4 = 3;
        c5 = 1;
        const obj4 = { value: result, done: false };
        return obj4;
      } catch (tmp45) {
        closure_2 = tmp45;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp45;
        } else {
          c4 = tmp;
        }
      }
    }
  });
};
export const _captureAppStart = function _captureAppStart(_captureAppStartResult3) {
  const isManual = _captureAppStartResult3.isManual;
  c1 = undefined;
  return fn(this, undefined, undefined, function*(arg0, value) {
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
            _true = tmp7;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            const client = _true(tmp3[0]).getClient();
            closure_128_0 = client;
            if (client) {
              c5 = c0;
              let obj2 = _true(tmp3[0]);
              closure_128_1 = 1000 * obj2.timestampInSeconds();
              closure_128_2 = null;
              if (_true(tmp3[1]).NATIVE.enableNative) {
                c3 = 1;
                const NATIVE = _true(tmp3[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj1 = { value: NATIVE.fetchNativeFrames(), done: false };
                return obj1;
              }
            } else {
              const debug3 = _true(tmp3[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj9 = _true(tmp3[0]);
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_3 = closure_2;
          const debug2 = _true(tmp3[0]).debug;
          debug2.log("[AppStart] Failed to capture end frames for app start.", closure_128_3);
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_2 = value;
            const debug = _true(tmp3[0]).debug;
            debug.log("[AppStart] Captured end frames for app start.", closure_128_2);
            c3 = 0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        const obj3 = { timestampMs: closure_128_1, endFrames: closure_128_2 };
        _setAppStartEndData(obj3);
        const integrationByName = closure_128_0.getIntegrationByName(c3);
        closure_129_1 = integrationByName;
        let result;
        if (null !== integrationByName) {
          if (undefined !== closure_129_1) {
            result = closure_129_1.captureStandaloneAppStart();
          }
        }
        c4 = 3;
        c5 = 1;
        const obj4 = { value: result, done: false };
        return obj4;
      } catch (tmp45) {
        closure_2 = tmp45;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp45;
        } else {
          c4 = tmp;
        }
      }
    }
  });
};
export const setRootComponentCreationTimestampMs = function setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != global) {
    timestampMs = global.timestampMs;
  }
  if (timestampMs) {
    const debug = _mod682.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (c6) {
    const debug2 = _mod682.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  c6 = arg0;
  c7 = true;
};
export const _setRootComponentCreationTimestampMs = function _setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != global) {
    timestampMs = global.timestampMs;
  }
  if (timestampMs) {
    const debug = _mod682.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (c6) {
    const debug2 = _mod682.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  c6 = arg0;
  c7 = false;
};
export { _setAppStartEndData };
export function _clearRootComponentCreationTimestampMs() {
  c6 = undefined;
}
export const appStartIntegration = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.standalone;
  if (flag === undefined) {
    flag = false;
  }
  function attachAppStartToTransactionEvent(arg0) {
    closure_0 = arg0;
    return c2(undefined, undefined, undefined, function*(arg0, value) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
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
          c4 = 2;
          let num2 = 0;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp2;
              dependencyMap = tmp3;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              closure_129_2 = undefined;
              closure_129_3 = undefined;
              closure_129_4 = undefined;
              closure_129_5 = undefined;
              let spans2;
              closure_129_7 = undefined;
              closure_129_8 = undefined;
              closure_129_9 = undefined;
              closure_129_10 = undefined;
              closure_129_11 = undefined;
              closure_129_12 = undefined;
              let spans3;
              closure_129_14 = undefined;
              closure_129_15 = undefined;
              closure_129_16 = undefined;
              closure_129_17 = undefined;
              if (!c3) {
                const contexts = closure_0.contexts;
                let trace;
                if (null !== contexts) {
                  if (undefined !== contexts) {
                    trace = contexts.trace;
                  }
                }
                if (trace) {
                  if (!closure_0) {
                    if (closure_1_5) {
                      if (tmp213 !== closure_0.contexts.trace.span_id) {
                        const debug13 = closure_0(682).debug;
                        debug13.warn("[AppStart] First started active root span id does not match the transaction event span id. Can not attached app start.");
                        c4 = 3;
                        let obj1 = { value: undefined, done: true };
                        return obj1;
                      }
                    } else {
                      const debug12 = closure_0(682).debug;
                      debug12.warn("[AppStart] No first started active root span id recorded. Can not attach app start.");
                      c4 = 3;
                      let obj2 = { value: undefined, done: true };
                      return obj2;
                    }
                  }
                  const NATIVE = closure_0(866).NATIVE;
                  c3 = 1;
                  c4 = 1;
                  let obj3 = { value: NATIVE.fetchNativeAppStart(), done: false };
                  return obj3;
                } else {
                  const debug11 = closure_0(682).debug;
                  debug11.warn("[AppStart] Transaction event is missing trace context. Can not attach app start.");
                }
              }
              c4 = 3;
            }
          } else {
            let num6 = 1;
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_129_0 = value;
              if (!closure_129_0) {
                let debug = closure_0(682).debug;
                debug.warn("[AppStart] Failed to retrieve the app start metrics from the native layer.");
              }
            }
          }
          if (closure_129_0.has_fetched) {
            const debug10 = closure_0(682).debug;
            debug10.warn("[AppStart] Measured app start metrics were already reported from the native layer.");
          } else {
            closure_129_1 = closure_129_0.app_start_timestamp_ms;
            if (closure_129_1) {
              let timestampMs;
              if (null != _true) {
                timestampMs = _true.timestampMs;
              }
              if (!timestampMs) {
                obj = closure_0(1021);
                timestampMs = obj.getBundleStartTimestampMs();
              }
              closure_129_2 = timestampMs;
              if (closure_129_2) {
                if (closure_130_0.start_timestamp) {
                  if (closure_129_1 >= 1000 * closure_130_0.start_timestamp - 60000) {
                    closure_129_3 = closure_129_2 - closure_129_1;
                    if (closure_129_3 >= 60000) {
                      const debug9 = closure_0(682).debug;
                      debug9.warn("[AppStart] App start duration is over a minute long, not adding app start span.");
                    } else if (closure_129_3 < num2) {
                      const debug8 = closure_0(682).debug;
                      debug8.warn("[AppStart] Last recorded app start end timestamp is before the app start timestamp.", "This is usually caused by missing `Sentry.wrap(RootComponent)` call.");
                    } else {
                      c3 = true;
                      let data = closure_130_0.contexts.trace.data;
                      if (!data) {
                        data = {};
                      }
                      closure_130_0.contexts.trace.data = data;
                      closure_130_0.contexts.trace.data[closure_0(1022).SEMANTIC_ATTRIBUTE_SENTRY_OP] = closure_0(1020).UI_LOAD;
                      closure_130_0.contexts.trace.op = closure_0(1020).UI_LOAD;
                      const tmp59 = closure_0(1023);
                      if (closure_2_5) {
                        let SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_MANUAL_APP_START;
                      } else {
                        SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_AUTO_APP_START;
                      }
                      closure_129_4 = SPAN_ORIGIN_AUTO_APP_START;
                      closure_130_0.contexts.trace.data[closure_0(682).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = closure_129_4;
                      closure_130_0.contexts.trace.origin = closure_129_4;
                      closure_129_5 = closure_129_1 / 1000;
                      closure_130_0.start_timestamp = closure_129_5;
                      let spans = closure_130_0.spans;
                      if (!spans) {
                        spans = [];
                      }
                      closure_130_0.spans = spans;
                      spans2 = closure_130_0.spans;
                      closure_129_7 = spans2.find((op) => "ui.load.initial_display" === op.op);
                      if (closure_129_7) {
                        closure_129_7.start_timestamp = closure_129_5;
                        setSpanDurationAsMeasurementOnTransactionEvent(closure_130_0, "time_to_initial_display", closure_129_7);
                      }
                      closure_129_8 = spans2.find((op) => "ui.load.full_display" === op.op);
                      if (closure_129_8) {
                        closure_129_8.start_timestamp = closure_129_5;
                        setSpanDurationAsMeasurementOnTransactionEvent(closure_130_0, "time_to_full_display", closure_129_8);
                      }
                      closure_129_9 = closure_129_2 / 1000;
                      let timestamp = closure_130_0.timestamp;
                      if (timestamp) {
                        timestamp = closure_130_0.timestamp < closure_129_9;
                      }
                      if (timestamp) {
                        const debug5 = closure_0(682).debug;
                        debug5.log("[AppStart] Transaction event timestamp is before app start end. Adjusting transaction event timestamp.");
                        closure_130_0.timestamp = closure_129_9;
                      }
                      if ("cold" === closure_129_0.type) {
                        let APP_START_WARM = closure_0(1020).APP_START_COLD;
                      } else {
                        APP_START_WARM = closure_0(1020).APP_START_WARM;
                      }
                      closure_129_10 = APP_START_WARM;
                      obj2 = closure_0(1021);
                      let obj5 = { op: closure_129_10, description: null, start_timestamp: null, timestamp: null, trace_id: null, parent_span_id: null, origin: null };
                      let str9 = "Warm Start";
                      if ("cold" === closure_129_0.type) {
                        str9 = "Cold Start";
                      }
                      obj5.description = str9;
                      obj5.start_timestamp = closure_129_5;
                      obj5.timestamp = closure_129_9;
                      obj5.trace_id = closure_130_0.contexts.trace.trace_id;
                      obj5.parent_span_id = closure_130_0.contexts.trace.span_id;
                      obj5.origin = closure_129_4;
                      closure_129_11 = obj2.createSpanJSON(obj5);
                      let endFrames;
                      if (null != _true) {
                        endFrames = _true.endFrames;
                      }
                      if (endFrames) {
                        (function attachFrameDataToSpan(spanId, endFrames) {
                          if (endFrames.totalFrames <= 0) {
                            if (endFrames.slowFrames <= 0) {
                              if (endFrames.totalFrames <= 0) {
                                const debug2 = closure_1_0(682).debug;
                                const _HermesInternal = HermesInternal;
                                debug2.warn("[AppStart] Detected zero slow or frozen frames. Not adding measurements to spanId (" + spanId.span_id + ").");
                              }
                            }
                          }
                          spanId.data = spanId.data || {};
                          ({ totalFrames: spanId.data["frames.total"], slowFrames: spanId.data["frames.slow"], frozenFrames: spanId.data["frames.frozen"] } = endFrames);
                          const debug = closure_1_0(682).debug;
                          debug.log("[AppStart] Attached frame data to span.", { spanId: spanId.span_id, frameData: { total: endFrames.totalFrames, slow: endFrames.slowFrames, frozen: endFrames.frozenFrames } });
                        })(closure_129_11, _true.endFrames);
                      }
                      closure_129_14 = (function createJSExecutionStartSpan(start_timestamp, arg1) {
                        let obj = closure_1_0(1021);
                        const bundleStartTimestampMs = obj.getBundleStartTimestampMs();
                        if (bundleStartTimestampMs) {
                          const result = bundleStartTimestampMs / 1000;
                          if (result < start_timestamp.start_timestamp) {
                            const debug2 = tmp(682).debug;
                            debug2.warn("Bundle start timestamp is before the app start span start timestamp. Skipping JS execution span.");
                          } else if (arg1) {
                            tmp(1021);
                            obj = { description: "JS Bundle Execution Before React Root", start_timestamp: result, timestamp: arg1 / 1000, origin: null };
                            const tmpResult = tmp(1023);
                            obj.origin = closure_1_7 ? tmpResult.SPAN_ORIGIN_MANUAL_APP_START : tmpResult.SPAN_ORIGIN_AUTO_APP_START;
                            return tmpResult.createChildSpanJSON(start_timestamp, obj);
                          } else {
                            const debug = tmp(682).debug;
                            debug.warn("Missing the root component first constructor call timestamp.");
                            obj = { description: "JS Bundle Execution Start", start_timestamp: result, timestamp: result, origin: tmp(1023).SPAN_ORIGIN_AUTO_APP_START };
                            return tmp(1021).createChildSpanJSON(start_timestamp, obj);
                          }
                        }
                      })(closure_129_11, recordFirstStartedActiveRootSpanId);
                      const items = [closure_129_11];
                      closure_0 = num6;
                      if (closure_129_14) {
                        const items1 = [closure_129_14];
                        let items2 = items1;
                      } else {
                        items2 = [];
                      }
                      closure_0 = HermesBuiltin.arraySpread(items2, num6);
                      closure_129_12 = closure_129_11;
                      spans3 = closure_129_0.spans;
                      const found = spans3.filter((start_timestamp_ms) => start_timestamp_ms.start_timestamp_ms / 1000 >= start_timestamp.start_timestamp);
                      closure_0 = HermesBuiltin.arraySpread(found.map((description) => {
                        let start_timestamp_ms = description;
                        if ("UIKit init" === description.description) {
                          let obj = closure_0(1025);
                          let obj1 = closure_0(1021);
                          let bundleStartTimestampMs = obj1.getBundleStartTimestampMs();
                          if (!bundleStartTimestampMs) {
                            obj = { description: "UIKit Init", start_timestamp: start_timestamp_ms.start_timestamp_ms / 1000, timestamp: start_timestamp_ms.end_timestamp_ms / 1000, origin: closure_0(1023).SPAN_ORIGIN_AUTO_APP_START };
                            let childSpanJSON = closure_0(1021).createChildSpanJSON(tmp3, obj);
                            obj.setMainThreadInfo(childSpanJSON);
                            const obj3 = closure_0(1021);
                          }
                          obj = { description: "UIKit Init to JS Exec Start", start_timestamp: null, timestamp: null, origin: null };
                          start_timestamp_ms = start_timestamp_ms.start_timestamp_ms;
                          obj.start_timestamp = start_timestamp_ms / 1000;
                          obj.timestamp = bundleStartTimestampMs / 1000;
                          bundleStartTimestampMs = closure_0;
                          obj.origin = closure_0(1023).SPAN_ORIGIN_AUTO_APP_START;
                          childSpanJSON = closure_0(1021).createChildSpanJSON(tmp3, obj);
                          const obj5 = closure_0(1021);
                        } else {
                          const obj7 = closure_0(1025);
                          obj1 = { description: start_timestamp_ms.description, start_timestamp: start_timestamp_ms.start_timestamp_ms / 1000, timestamp: start_timestamp_ms.end_timestamp_ms / 1000, origin: closure_0(1023).SPAN_ORIGIN_AUTO_APP_START };
                          return obj7.setMainThreadInfo(closure_0(1021).createChildSpanJSON(start_timestamp, obj1));
                        }
                      }), closure_0);
                      closure_129_15 = items;
                      const push = spans2.push;
                      const items3 = [];
                      HermesBuiltin.arraySpread(closure_129_15, 0);
                      HermesBuiltin.apply(items3, spans2);
                      const debug6 = closure_0(682).debug;
                      num2 = JSON;
                      debug6.log("[AppStart] Added app start spans to transaction event.", JSON.stringify(closure_129_15, undefined, 2));
                      if ("cold" === closure_129_0.type) {
                        let APP_START_WARM2 = closure_0(1024).APP_START_COLD;
                      } else {
                        APP_START_WARM2 = closure_0(1024).APP_START_WARM;
                      }
                      closure_129_16 = APP_START_WARM2;
                      const obj6 = { value: closure_129_3, unit: "millisecond" };
                      closure_129_17 = obj6;
                      let measurements = closure_130_0.measurements;
                      if (!measurements) {
                        measurements = {};
                      }
                      closure_130_0.measurements = measurements;
                      num6 = closure_130_0.measurements;
                      num6[closure_129_16] = closure_129_17;
                      const debug7 = closure_0(682).debug;
                      const _JSON = JSON;
                      debug7.log("[AppStart] Added app start measurement to transaction event.", JSON.stringify(closure_129_17, undefined, 2));
                    }
                  }
                }
                const debug4 = closure_0(682).debug;
                debug4.warn("[AppStart] App start timestamp is too far in the past to be used for app start span.");
              } else {
                const debug3 = closure_0(682).debug;
                debug3.warn("[AppStart] Javascript failed to record app start end. `_setAppStartEndData` was not called nor could the bundle start be found.");
              }
            } else {
              let debug2 = closure_0(682).debug;
              debug2.warn("[AppStart] App start timestamp could not be loaded from the native layer.");
            }
          }
        } catch (tmp223) {
          c4 = tmp;
          throw tmp223;
        }
      }
    });
  }
  closure_1 = undefined;
  c2 = true;
  name = false;
  c4 = false;
  closure_5 = undefined;
  function recordFirstStartedActiveRootSpanId(spanContext) {
    if (!spanId) {
      if (obj.isRootSpan(spanContext)) {
        spanId = spanContext.spanContext().spanId;
        const debug = tmp2(682).debug;
        debug.log("[AppStart] First started active root span id recorded.", spanId);
      }
      obj = _mod987;
      tmp2 = require;
    }
  }
  obj = {
    name,
    setup(getOptions) {
      closure_1 = getOptions;
      if (!getOptions.getOptions().enableAppStartTracking) {
        c2 = false;
        const debug = _mod682.debug;
        debug.warn("[AppStart] App start tracking is disabled.");
      }
      getOptions.on("spanStart", recordFirstStartedActiveRootSpanId);
    },
    afterAllSetup(arg0) {
      if (!c4) {
        c4 = true;
        const appRegistryIntegration = patchAppRegistryRunApplication.getAppRegistryIntegration(arg0);
        if (!tmp5) {
          appRegistryIntegration.onRunApplication(() => {
            const debug = flag(closure_1[0]).debug;
            const log = debug.log;
            if (c3) {
              log("[AppStartIntegration] Resetting app start data flushed flag based on runApplication call.");
              c3 = false;
              c5 = undefined;
            } else {
              log("[AppStartIntegration] Waiting for initial app start was flush, before updating based on runApplication call.");
            }
          });
        }
        tmp5 = null === appRegistryIntegration || undefined === appRegistryIntegration;
      }
    },
    processEvent(arg0) {
      closure_0 = arg0;
      return c2(undefined, undefined, undefined, function*(arg0, value) {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
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
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let tmp5 = !c2;
                if (c2) {
                  tmp5 = tmp4;
                }
                if (!tmp5) {
                  tmp5 = "transaction" !== tmp4.type;
                }
                if (!tmp5) {
                  c1 = 1;
                  c2 = 1;
                  const obj1 = { value: attachAppStartToTransactionEvent(tmp4), done: false };
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            }
            c2 = 3;
            const obj2 = { value: closure_128_0, done: true };
            return obj2;
          } catch (tmp10) {
            c2 = tmp;
            throw tmp10;
          }
        }
      });
    },
    captureStandaloneAppStart() {
      return fn(this, undefined, undefined, function*(arg0, value) {
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
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                closure_128_3 = undefined;
                if (closure_2_1) {
                  const debug2 = closure_0(tmp3[0]).debug;
                  const log = debug2.log;
                  if (flag) {
                    log("[AppStart] App start tracking standalone root span (transaction).");
                    let endFrames;
                    if (null != c4) {
                      endFrames = c4.endFrames;
                    }
                    if (!endFrames) {
                      if (closure_0(tmp3[1]).NATIVE.enableNative) {
                        c3 = 1;
                        const NATIVE = closure_0(tmp3[1]).NATIVE;
                        c4 = 2;
                        c5 = 1;
                        const obj1 = { value: NATIVE.fetchNativeFrames(), done: false };
                        return obj1;
                      }
                    }
                  } else {
                    log("[AppStart] App start tracking is enabled. App start will be added to the first transaction as a child span.");
                  }
                } else {
                  const _console = console;
                  console.warn("[AppStart] Could not capture App Start, missing client, call `Sentry.init` first.");
                }
                c5 = 3;
                c5 = 3;
                let obj2 = { value, done: true };
                return obj2;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_128_4 = closure_2;
              const debug = closure_0(tmp3[0]).debug;
              debug.log("[AppStart] Failed to capture frames for standalone app start.", closure_128_4);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = value;
                const debug4 = closure_0(tmp3[0]).debug;
                debug4.log("[AppStart] Captured end frames for standalone app start.", closure_128_0);
                let timestampMs;
                if (null != c4) {
                  timestampMs = c4.timestampMs;
                }
                if (!timestampMs) {
                  obj2 = closure_0(tmp3[0]);
                  timestampMs = 1000 * obj2.timestampInSeconds();
                }
                closure_128_1 = timestampMs;
                const obj4 = { timestampMs: closure_128_1, endFrames: closure_128_0 };
                closure_1_8(obj4);
                c3 = 0;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (closure_128_3.spans) {
                if (0 !== closure_128_3.spans.length) {
                  let scope = closure_0(tmp3[0]).getCapturedScopesOnSpan(closure_128_2).scope;
                  if (!scope) {
                    obj = closure_0(tmp3[0]);
                    scope = obj.getCurrentScope();
                  }
                  scope.captureEvent(closure_128_3);
                  const obj15 = closure_0(tmp3[0]);
                }
              }
            }
            let obj6 = closure_0(tmp3[0]);
            const obj5 = { forceTransaction: true, name: "App Start", op: closure_0(tmp3[4]).UI_LOAD };
            closure_128_2 = obj6.startInactiveSpan(obj5);
            if (!(closure_128_2 instanceof closure_0(tmp3[0]).SentryNonRecordingSpan)) {
              const obj9 = closure_0(tmp3[3]);
              obj9.setEndTimeValue(closure_128_2, closure_0(tmp3[0]).timestampInSeconds());
              closure_129_1.emit("spanEnd", closure_128_2);
              const obj10 = closure_0(tmp3[0]);
              closure_128_3 = closure_0(tmp3[3]).convertSpanToTransaction(closure_128_2);
              if (closure_128_3) {
                c4 = 3;
                c5 = 1;
                obj6 = { value: closure_129_7(closure_128_3), done: false };
                return obj6;
              } else {
                const debug3 = closure_0(tmp3[0]).debug;
                debug3.warn("[AppStart] Failed to convert App Start span to transaction.");
              }
              const obj11 = closure_0(tmp3[3]);
            }
          } catch (tmp81) {
            closure_2 = tmp81;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp81;
            } else {
              c4 = tmp;
            }
          }
        }
      });
    },
    setFirstStartedActiveRootSpanId(arg0) {
      closure_5 = arg0;
      const debug = _mod682.debug;
      debug.log("[AppStart] First started active root span id recorded.", closure_5);
    }
  };
  return obj;
};