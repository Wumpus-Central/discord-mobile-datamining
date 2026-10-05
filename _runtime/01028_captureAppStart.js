// === Module 1028: captureAppStart ===

// Module 1028 (captureAppStart)
import _mod693 from "module_693" /* 693 */;
import _mod998 from "module_998" /* 998 */;
import _mod1029 from "module_1029" /* 1029 */;

let name;

function setSpanDurationAsMeasurementOnTransactionEvent(measurements, arg1, timestamp) {
  if (timestamp.timestamp) {
    if (timestamp.start_timestamp) {
      const tmp3 = measurements.measurements || {};
      measurements.measurements = tmp3;
      const obj = { value: 1000 * (timestamp.timestamp - timestamp.start_timestamp), unit: "millisecond" };
      measurements.measurements[arg1] = obj;
    }
  }
  const debug = _mod693.debug;
  debug.warn("Span is missing start or end timestamp. Cam not set measurement on transaction event.");
}
const fn = this && this.__awaiter || ((arg0, arg1, arg2, arg3) => {
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
const AppStart = "AppStart";
let c4;
let c5 = false;
let c6;
let c7 = false;
function _setAppStartEndData(arg0) {
  const tmp = c4;
  if (tmp) {
    const debug = _mod693.debug;
    debug.warn("Overwriting already set app start end data.");
  }
  c4 = arg0;
}

export const captureAppStart = function captureAppStart() {
  let c0 = true;
  return fn(undefined, undefined, undefined, function*() {
    let closure_0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let timestampMs;
        let client;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _true = tmp4;
            timestampMs = undefined;
            endFrames = undefined;
            const obj9 = _true(timestampMs[0]);
            client = obj9.getClient();
            if (client) {
              c5 = c0;
              const obj3 = _true(timestampMs[0]);
              timestampMs = 1000 * obj3.timestampInSeconds();
              endFrames = null;
              if (_true(timestampMs[1]).NATIVE.enableNative) {
                c3 = 1;
                const NATIVE = _true(timestampMs[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: NATIVE.fetchNativeFrames(), done: false };
                return obj5;
              }
            } else {
              const debug3 = _true(timestampMs[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          let closure_3 = endFrames;
          const debug2 = _true(timestampMs[0]).debug;
          debug2.log("[AppStart] Failed to capture end frames for app start.", closure_3);
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            endFrames = value;
            const debug = _true(timestampMs[0]).debug;
            debug.log("[AppStart] Captured end frames for app start.", endFrames);
            c3 = 0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        const obj7 = { timestampMs, endFrames };
        _setAppStartEndData(obj7);
        const integrationByName = client.getIntegrationByName(c3);
        let result;
        if (null !== integrationByName) {
          if (undefined !== integrationByName) {
            result = integrationByName.captureStandaloneAppStart();
          }
        }
        c4 = 3;
        c5 = 1;
        const obj8 = { value: result, done: false };
        return obj8;
      } catch (tmp42) {
        endFrames = tmp42;
        if (0 === c3) {
          c5 = 3;
          throw tmp42;
        } else {
          c4 = 1;
        }
      }
    }
  });
};
export const _captureAppStart = function _captureAppStart(isManual) {
  isManual = isManual.isManual;
  let c1;
  return fn(this, undefined, undefined, function*() {
    let closure_0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let timestampMs;
        let client;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _true = tmp4;
            timestampMs = undefined;
            endFrames = undefined;
            const obj9 = _true(timestampMs[0]);
            client = obj9.getClient();
            if (client) {
              c5 = c0;
              const obj3 = _true(timestampMs[0]);
              timestampMs = 1000 * obj3.timestampInSeconds();
              endFrames = null;
              if (_true(timestampMs[1]).NATIVE.enableNative) {
                c3 = 1;
                const NATIVE = _true(timestampMs[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj5 = { value: NATIVE.fetchNativeFrames(), done: false };
                return obj5;
              }
            } else {
              const debug3 = _true(timestampMs[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          let closure_3 = endFrames;
          const debug2 = _true(timestampMs[0]).debug;
          debug2.log("[AppStart] Failed to capture end frames for app start.", closure_3);
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            endFrames = value;
            const debug = _true(timestampMs[0]).debug;
            debug.log("[AppStart] Captured end frames for app start.", endFrames);
            c3 = 0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        const obj7 = { timestampMs, endFrames };
        _setAppStartEndData(obj7);
        const integrationByName = client.getIntegrationByName(c3);
        let result;
        if (null !== integrationByName) {
          if (undefined !== integrationByName) {
            result = integrationByName.captureStandaloneAppStart();
          }
        }
        c4 = 3;
        c5 = 1;
        const obj8 = { value: result, done: false };
        return obj8;
      } catch (tmp42) {
        endFrames = tmp42;
        if (0 === c3) {
          c5 = 3;
          throw tmp42;
        } else {
          c4 = 1;
        }
      }
    }
  });
};
export const setRootComponentCreationTimestampMs = function setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != _undefined) {
    timestampMs = _undefined.timestampMs;
  }
  if (timestampMs) {
    const debug = _mod693.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  const tmp6 = c6;
  if (tmp6) {
    const debug2 = _mod693.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  c6 = arg0;
  c7 = true;
};
export const _setRootComponentCreationTimestampMs = function _setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != _undefined) {
    timestampMs = _undefined.timestampMs;
  }
  if (timestampMs) {
    const debug = _mod693.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  const tmp6 = c6;
  if (tmp6) {
    const debug2 = _mod693.debug;
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
  let _false;
  let _true;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.standalone;
  if (flag === undefined) {
    flag = false;
  }
  function attachAppStartToTransactionEvent(arg0) {
    let closure_0 = arg0;
    return _false(undefined, undefined, undefined, function*() {
      let str9;
      let value;
      function attachFrameDataToSpan(spanId, endFrames) {
        if (endFrames.totalFrames <= 0) {
          if (endFrames.slowFrames <= 0) {
            if (endFrames.totalFrames <= 0) {
              const debug2 = closure_1_0(closure_1_1[0]).debug;
              const _HermesInternal = HermesInternal;
              debug2.warn("[AppStart] Detected zero slow or frozen frames. Not adding measurements to spanId (" + spanId.span_id + ").");
            }
          }
        }
        spanId.data = spanId.data || {};
        ({ totalFrames: spanId.data["frames.total"], slowFrames: spanId.data["frames.slow"], frozenFrames: spanId.data["frames.frozen"] } = endFrames);
        const debug = closure_1_0(closure_1_1[0]).debug;
        const obj = { spanId: spanId.span_id, frameData: { total: endFrames.totalFrames, slow: endFrames.slowFrames, frozen: endFrames.frozenFrames } };
        debug.log("[AppStart] Attached frame data to span.", obj);
      }
      function createJSExecutionStartSpan(start_timestamp, recordFirstStartedActiveRootSpanId) {
        let tmpResult3;
        const obj = closure_1_0(closure_1_1[5]);
        const bundleStartTimestampMs = obj.getBundleStartTimestampMs();
        if (bundleStartTimestampMs) {
          const result = bundleStartTimestampMs / 1000;
          if (result < start_timestamp.start_timestamp) {
            const debug2 = closure_1_0(closure_1_1[0]).debug;
            debug2.warn("Bundle start timestamp is before the app start span start timestamp. Skipping JS execution span.");
          } else {
            const tmp12 = recordFirstStartedActiveRootSpanId;
            if (tmp12) {
              const obj2 = { description: "JS Bundle Execution Before React Root", start_timestamp: result, timestamp: recordFirstStartedActiveRootSpanId / 1000, origin: closure_1_7 ? tmpResult3.SPAN_ORIGIN_MANUAL_APP_START : tmpResult3.SPAN_ORIGIN_AUTO_APP_START };
              const createChildSpanJSON2 = closure_1_0(closure_1_1[5]).createChildSpanJSON;
              closure_1_0(closure_1_1[5]);
              tmpResult3 = closure_1_0(closure_1_1[7]);
              return createChildSpanJSON2(start_timestamp, obj2);
            } else {
              const debug = closure_1_0(closure_1_1[0]).debug;
              debug.warn("Missing the root component first constructor call timestamp.");
              const obj3 = { description: "JS Bundle Execution Start", start_timestamp: result, timestamp: result, origin: closure_1_0(closure_1_1[7]).SPAN_ORIGIN_AUTO_APP_START };
              const createChildSpanJSON = closure_1_0(closure_1_1[5]).createChildSpanJSON;
              closure_1_0(closure_1_1[5]);
              return createChildSpanJSON(start_timestamp, obj3);
            }
          }
        }
      }
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_1;
          let app_start_timestamp_ms;
          let timestampMs;
          let SPAN_ORIGIN_AUTO_APP_START;
          let closure_7;
          let closure_8;
          let timestamp;
          let APP_START_WARM;
          let closure_11;
          let start_timestamp;
          let spans;
          let closure_14;
          let items;
          let APP_START_WARM2;
          let obj9;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp2;
              closure_0 = undefined;
              app_start_timestamp_ms = undefined;
              timestampMs = undefined;
              value = undefined;
              SPAN_ORIGIN_AUTO_APP_START = undefined;
              closure_7 = undefined;
              closure_8 = undefined;
              timestamp = undefined;
              APP_START_WARM = undefined;
              closure_11 = undefined;
              start_timestamp = undefined;
              spans = undefined;
              closure_14 = undefined;
              items = undefined;
              APP_START_WARM2 = undefined;
              obj9 = undefined;
              const tmp234 = c3;
              if (!tmp234) {
                const contexts = closure_0.contexts;
                let trace1;
                if (null !== contexts) {
                  if (undefined !== contexts) {
                    trace1 = contexts.trace;
                  }
                }
                if (trace1) {
                  const tmp212 = closure_0;
                  if (!tmp212) {
                    if (closure_1_5) {
                      if (tmp213 !== closure_0.contexts.trace.span_id) {
                        const debug13 = closure_0(_undefined[0]).debug;
                        const warnResult = debug13.warn("[AppStart] First started active root span id does not match the transaction event span id. Can not attached app start.");
                        c4 = 3;
                        let obj4 = { value: undefined, done: true };
                        return obj4;
                      }
                    } else {
                      const debug12 = closure_0(_undefined[0]).debug;
                      const warnResult1 = debug12.warn("[AppStart] No first started active root span id recorded. Can not attach app start.");
                      c4 = 3;
                      const obj5 = { value: undefined, done: true };
                      return obj5;
                    }
                  }
                  const NATIVE = closure_0(_undefined[1]).NATIVE;
                  c3 = 1;
                  c4 = 1;
                  const obj6 = { value: NATIVE.fetchNativeAppStart(), done: false };
                  return obj6;
                } else {
                  const debug11 = closure_0(_undefined[0]).debug;
                  debug11.warn("[AppStart] Transaction event is missing trace context. Can not attach app start.");
                }
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_0 = value;
            const tmp228 = closure_0;
            if (tmp228) {
              if (closure_0.has_fetched) {
                const debug10 = closure_0(_undefined[0]).debug;
                debug10.warn("[AppStart] Measured app start metrics were already reported from the native layer.");
              } else {
                let tmp12 = closure_1;
                app_start_timestamp_ms = closure_0.app_start_timestamp_ms;
                if (app_start_timestamp_ms) {
                  timestampMs = undefined;
                  if (null != _true) {
                    timestampMs = _true.timestampMs;
                  }
                  if (!timestampMs) {
                    let obj = closure_0(_undefined[5]);
                    timestampMs = obj.getBundleStartTimestampMs();
                  }
                  if (timestampMs) {
                    if (closure_130_0.start_timestamp) {
                      if (app_start_timestamp_ms >= 1000 * closure_130_0.start_timestamp - 60000) {
                        value = timestampMs - app_start_timestamp_ms;
                        if (value >= 60000) {
                          const debug9 = closure_0(_undefined[0]).debug;
                          debug9.warn("[AppStart] App start duration is over a minute long, not adding app start span.");
                        } else if (value < 0) {
                          const debug8 = closure_0(_undefined[0]).debug;
                          debug8.warn("[AppStart] Last recorded app start end timestamp is before the app start timestamp.", "This is usually caused by missing `Sentry.wrap(RootComponent)` call.");
                        } else {
                          let items2;
                          c3 = true;
                          let data1 = closure_130_0.contexts.trace.data;
                          const trace = closure_130_0.contexts.trace;
                          if (!data1) {
                            data1 = {};
                          }
                          trace.data = data1;
                          const data = closure_130_0.contexts.trace.data;
                          data[closure_0(_undefined[6]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = closure_0(_undefined[4]).UI_LOAD;
                          closure_130_0.contexts.trace.op = closure_0(_undefined[4]).UI_LOAD;
                          const tmp59 = closure_0(_undefined[7]);
                          if (spanId) {
                            SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_MANUAL_APP_START;
                          } else {
                            SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_AUTO_APP_START;
                          }
                          closure_130_0.contexts.trace.data[closure_0(_undefined[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = SPAN_ORIGIN_AUTO_APP_START;
                          closure_130_0.contexts.trace.origin = SPAN_ORIGIN_AUTO_APP_START;
                          start_timestamp = app_start_timestamp_ms / 1000;
                          closure_130_0.start_timestamp = start_timestamp;
                          spans = closure_130_0.spans || [];
                          closure_130_0.spans = spans;
                          spans = closure_130_0.spans;
                          closure_7 = spans.find((op) => "ui.load.initial_display" === op.op);
                          const tmp77 = closure_7;
                          if (tmp77) {
                            closure_7.start_timestamp = start_timestamp;
                            setSpanDurationAsMeasurementOnTransactionEvent(closure_130_0, "time_to_initial_display", closure_7);
                          }
                          closure_8 = spans.find((op) => "ui.load.full_display" === op.op);
                          const tmp88 = closure_8;
                          if (tmp88) {
                            closure_8.start_timestamp = start_timestamp;
                            setSpanDurationAsMeasurementOnTransactionEvent(closure_130_0, "time_to_full_display", closure_8);
                          }
                          timestamp = timestampMs / 1000;
                          timestamp = closure_130_0.timestamp && closure_130_0.timestamp < timestamp;
                          if (timestamp) {
                            const debug5 = closure_0(_undefined[0]).debug;
                            const logResult = debug5.log("[AppStart] Transaction event timestamp is before app start end. Adjusting transaction event timestamp.");
                            closure_130_0.timestamp = timestamp;
                          }
                          if ("cold" === closure_0.type) {
                            APP_START_WARM = closure_0(_undefined[4]).APP_START_COLD;
                          } else {
                            APP_START_WARM = closure_0(_undefined[4]).APP_START_WARM;
                          }
                          const obj8 = { op: APP_START_WARM, description: str9, start_timestamp, timestamp, trace_id: closure_130_0.contexts.trace.trace_id, parent_span_id: closure_130_0.contexts.trace.span_id, origin: SPAN_ORIGIN_AUTO_APP_START };
                          str9 = "Warm Start";
                          const createSpanJSON = closure_0(_undefined[5]).createSpanJSON;
                          const tmp124 = closure_0(_undefined[5]);
                          if ("cold" === closure_0.type) {
                            str9 = "Cold Start";
                          }
                          closure_11 = createSpanJSON(obj8);
                          let endFrames;
                          if (null != _true) {
                            endFrames = _true.endFrames;
                          }
                          if (endFrames) {
                            attachFrameDataToSpan(closure_11, _true.endFrames);
                          }
                          closure_14 = createJSExecutionStartSpan(closure_11, recordFirstStartedActiveRootSpanId);
                          items = [closure_11];
                          closure_0 = 1;
                          const tmp148 = closure_14;
                          if (tmp148) {
                            const items1 = [closure_14];
                            items2 = items1;
                          } else {
                            items2 = [];
                          }
                          closure_0 = HermesBuiltin.arraySpread(items, items2, 1);
                          start_timestamp = closure_11;
                          spans = closure_0.spans;
                          const found = spans.filter((start_timestamp_ms) => start_timestamp_ms.start_timestamp_ms / 1000 >= start_timestamp.start_timestamp);
                          closure_0 = HermesBuiltin.arraySpread(items, found.map((description) => {
                            let setMainThreadInfoResult;
                            if ("UIKit init" === description.description) {
                              const setMainThreadInfo = closure_0(closure_1[9]).setMainThreadInfo;
                              closure_0(closure_1[9]);
                              const obj = closure_0(closure_1[5]);
                              const bundleStartTimestampMs = obj.getBundleStartTimestampMs();
                              if (bundleStartTimestampMs) {
                                let childSpanJSON2;
                                if (bundleStartTimestampMs < description.end_timestamp_ms) {
                                  const obj2 = { description: "UIKit Init to JS Exec Start", start_timestamp: description.start_timestamp_ms / 1000, timestamp: bundleStartTimestampMs / 1000, origin: closure_0(closure_1[7]).SPAN_ORIGIN_AUTO_APP_START };
                                  const createChildSpanJSON2 = closure_0(closure_1[5]).createChildSpanJSON;
                                  closure_0(closure_1[5]);
                                  childSpanJSON2 = createChildSpanJSON2(start_timestamp, obj2);
                                }
                                setMainThreadInfoResult = setMainThreadInfo(childSpanJSON2);
                              }
                              const obj3 = { description: "UIKit Init", start_timestamp: description.start_timestamp_ms / 1000, timestamp: description.end_timestamp_ms / 1000, origin: closure_0(closure_1[7]).SPAN_ORIGIN_AUTO_APP_START };
                              const createChildSpanJSON = closure_0(closure_1[5]).createChildSpanJSON;
                              closure_0(closure_1[5]);
                              childSpanJSON2 = createChildSpanJSON(start_timestamp, obj3);
                            } else {
                              const setMainThreadInfo2 = closure_0(closure_1[9]).setMainThreadInfo;
                              closure_0(closure_1[9]);
                              const obj4 = { description: description.description, start_timestamp: description.start_timestamp_ms / 1000, timestamp: description.end_timestamp_ms / 1000, origin: closure_0(closure_1[7]).SPAN_ORIGIN_AUTO_APP_START };
                              const createChildSpanJSON3 = closure_0(closure_1[5]).createChildSpanJSON;
                              closure_0(closure_1[5]);
                              setMainThreadInfoResult = setMainThreadInfo2(createChildSpanJSON3(start_timestamp, obj4));
                            }
                            return setMainThreadInfoResult;
                          }), closure_0);
                          const push = spans.push;
                          const items3 = [];
                          HermesBuiltin.arraySpread(items3, items, 0);
                          HermesBuiltin.apply(push, items3, spans);
                          const debug6 = closure_0(_undefined[0]).debug;
                          const _JSON = JSON;
                          debug6.log("[AppStart] Added app start spans to transaction event.", JSON.stringify(items, undefined, 2));
                          if ("cold" === closure_0.type) {
                            APP_START_WARM2 = closure_0(_undefined[8]).APP_START_COLD;
                          } else {
                            APP_START_WARM2 = closure_0(_undefined[8]).APP_START_WARM;
                          }
                          obj9 = { value, unit: "millisecond" };
                          const measurements = closure_130_0.measurements || {};
                          closure_130_0.measurements = measurements;
                          closure_130_0.measurements[APP_START_WARM2] = obj9;
                          const debug7 = closure_0(_undefined[0]).debug;
                          const _JSON2 = JSON;
                          debug7.log("[AppStart] Added app start measurement to transaction event.", JSON.stringify(obj9, undefined, 2));
                        }
                      }
                    }
                    const debug4 = closure_0(_undefined[0]).debug;
                    debug4.warn("[AppStart] App start timestamp is too far in the past to be used for app start span.");
                  } else {
                    const debug3 = closure_0(_undefined[0]).debug;
                    debug3.warn("[AppStart] Javascript failed to record app start end. `_setAppStartEndData` was not called nor could the bundle start be found.");
                  }
                } else {
                  let debug2 = closure_0(_undefined[0]).debug;
                  const str2 = "[AppStart] App start timestamp could not be loaded from the native layer.";
                  debug2.warn("[AppStart] App start timestamp could not be loaded from the native layer.");
                }
              }
            } else {
              let debug = closure_0(_undefined[0]).debug;
              const str = "[AppStart] Failed to retrieve the app start metrics from the native layer.";
              debug.warn("[AppStart] Failed to retrieve the app start metrics from the native layer.");
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp223) {
          c4 = 3;
          throw tmp223;
        }
      }
    });
  }
  let c1;
  let c2 = true;
  name = false;
  let c4 = false;
  let spanId;
  function recordFirstStartedActiveRootSpanId(spanContext) {
    const tmp = spanId;
    if (!tmp) {
      const obj = _mod998;
      if (obj.isRootSpan(spanContext)) {
        spanId = spanContext.spanContext().spanId;
        const debug = _mod693.debug;
        debug.log("[AppStart] First started active root span id recorded.", spanId);
      }
    }
  }
  let obj2 = {
    name,
    setup(getOptions) {
      let c1 = getOptions;
      if (!getOptions.getOptions().enableAppStartTracking) {
        let c2 = false;
        const debug = _mod693.debug;
        debug.warn("[AppStart] App start tracking is disabled.");
      }
      getOptions.on("spanStart", recordFirstStartedActiveRootSpanId);
    },
    afterAllSetup(client) {
      const tmp = c4;
      if (!tmp) {
        flag = true;
        c4 = true;
        const obj = _mod1029;
        const appRegistryIntegration = obj.getAppRegistryIntegration(client);
        const tmp6 = null === appRegistryIntegration || undefined === appRegistryIntegration;
        if (!tmp6) {
          appRegistryIntegration.onRunApplication(() => {
            const debug = flag(c1[0]).debug;
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
      }
    },
    processEvent(arg0) {
      let closure_0 = arg0;
      return _false(undefined, undefined, undefined, function*() {
        if (c2 === 2) {
          c2 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                const type = tmp3;
                const tmp4 = !c2 || type || "transaction" !== type.type;
                if (!tmp4) {
                  c1 = 1;
                  c2 = 1;
                  const obj4 = { value: attachAppStartToTransactionEvent(type), done: false };
                  return obj4;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c2 = 3;
            const obj5 = { value: closure_128_0, done: true };
            return obj5;
          } catch (tmp9) {
            c2 = 3;
            throw tmp9;
          }
        }
      });
    },
    captureStandaloneAppStart() {
      return fn(this, undefined, undefined, function*() {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let closure_2;
          try {
            let closure_1;
            let endFrames;
            let timestampMs;
            let closure_3;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp;
                endFrames = undefined;
                timestampMs = undefined;
                closure_2 = undefined;
                closure_3 = undefined;
                if (_undefined) {
                  const debug2 = endFrames(closure_1[0]).debug;
                  const log = debug2.log;
                  if (flag) {
                    log("[AppStart] App start tracking standalone root span (transaction).");
                    endFrames = undefined;
                    if (null != c4) {
                      endFrames = c4.endFrames;
                    }
                    if (!endFrames) {
                      if (endFrames(closure_1[1]).NATIVE.enableNative) {
                        c3 = 1;
                        const NATIVE = endFrames(closure_1[1]).NATIVE;
                        c4 = 2;
                        c5 = 1;
                        const obj5 = { value: NATIVE.fetchNativeFrames(), done: false };
                        return obj5;
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
                return { value: "IconComponent", done: null };
              }
            } else if (1 === c4) {
              c3 = 0;
              let closure_4 = closure_2;
              const debug = endFrames(closure_1[0]).debug;
              debug.log("[AppStart] Failed to capture frames for standalone app start.", closure_4);
            } else if (2 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                endFrames = value;
                const debug4 = endFrames(closure_1[0]).debug;
                debug4.log("[AppStart] Captured end frames for standalone app start.", endFrames);
                timestampMs = undefined;
                if (null != c4) {
                  timestampMs = c4.timestampMs;
                }
                if (!timestampMs) {
                  const obj3 = endFrames(closure_1[0]);
                  timestampMs = 1000 * obj3.timestampInSeconds();
                }
                const obj7 = { timestampMs, endFrames };
                closure_1_8(obj7);
                c3 = 0;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else if (closure_3.spans) {
              if (0 !== closure_3.spans.length) {
                const obj13 = endFrames(closure_1[0]);
                let scope = obj13.getCapturedScopesOnSpan(closure_2).scope;
                if (!scope) {
                  const obj = endFrames(closure_1[0]);
                  scope = obj.getCurrentScope();
                }
                scope.captureEvent(closure_3);
              }
            }
            const obj11 = { forceTransaction: true, name: "App Start", op: endFrames(closure_1[4]).UI_LOAD };
            const startInactiveSpan = endFrames(closure_1[0]).startInactiveSpan;
            const tmp50 = endFrames(closure_1[0]);
            closure_2 = startInactiveSpan(obj11);
            if (!(closure_2 instanceof endFrames(closure_1[0]).SentryNonRecordingSpan)) {
              const setEndTimeValue = endFrames(closure_1[3]).setEndTimeValue;
              const tmp60 = endFrames(closure_1[3]);
              const obj8 = endFrames(closure_1[0]);
              setEndTimeValue(closure_2, obj8.timestampInSeconds());
              closure_129_1.emit("spanEnd", closure_2);
              const obj9 = endFrames(closure_1[3]);
              closure_3 = obj9.convertSpanToTransaction(closure_2);
              const tmp71 = closure_3;
              if (tmp71) {
                c4 = 3;
                c5 = 1;
                const obj12 = { value: closure_129_7(closure_3), done: false };
                return obj12;
              } else {
                const debug3 = endFrames(closure_1[0]).debug;
                debug3.warn("[AppStart] Failed to convert App Start span to transaction.");
              }
            }
          } catch (tmp80) {
            closure_2 = tmp80;
            if (0 === c3) {
              c5 = 3;
              throw tmp80;
            } else {
              c4 = 1;
            }
          }
        }
      });
    },
    setFirstStartedActiveRootSpanId(arg0) {
      spanId = arg0;
      const debug = _mod693.debug;
      debug.log("[AppStart] First started active root span id recorded.", spanId);
    }
  };
  return obj2;
};