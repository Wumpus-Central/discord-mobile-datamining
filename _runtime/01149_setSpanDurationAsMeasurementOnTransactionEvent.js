// _runtime/01149_setSpanDurationAsMeasurementOnTransactionEvent.js
import registerSpanErrorInstrumentation from "00814_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
function setSpanDurationAsMeasurementOnTransactionEvent(measurements, arg1, timestamp) {
  if (timestamp.timestamp) {
    if (timestamp.start_timestamp) {
      measurements.measurements = measurements.measurements || {};
      const obj = { value: null, unit: "millisecond" };
      obj[0] = 1000 * (timestamp.timestamp - timestamp.start_timestamp);
      measurements.measurements[arg1] = obj;
      const tmp3 = measurements.measurements || {};
    }
  }
  const debug = registerSpanErrorInstrumentation.debug;
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
    _Promise = new _Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
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
const AppStart = "AppStart";
let c4;
let c5 = false;
let c6;
let c7 = false;
function _setAppStartEndData(arg0) {
  if (closure_4) {
    const debug = registerSpanErrorInstrumentation.debug;
    debug.warn("Overwriting already set app start end data.");
  }
  closure_4 = arg0;
}
arg5.captureAppStart = function captureAppStart() {
  c0 = true;
  return fn(undefined, undefined, undefined, function* () {
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
            closure_1 = tmp3;
            let client = tmp7;
            client = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            client = closure_1_0(integrationByName[0]).getClient();
            if (client) {
              closure_5 = closure_1_0;
              let obj2 = closure_1_0(integrationByName[0]);
              closure_1 = 1000 * obj2.timestampInSeconds();
              closure_2 = null;
              if (closure_1_0(integrationByName[1]).NATIVE.enableNative) {
                c3 = 1;
                const NATIVE = closure_1_0(integrationByName[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = NATIVE.fetchNativeFrames();
                return obj1;
              }
            } else {
              const debug3 = closure_1_0(integrationByName[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj9 = closure_1_0(integrationByName[0]);
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c3 = closure_2;
          const debug2 = closure_1_0(integrationByName[0]).debug;
          debug2.log("[AppStart] Failed to capture end frames for app start.", c3);
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            const debug = closure_1_0(integrationByName[0]).debug;
            debug.log("[AppStart] Captured end frames for app start.", closure_2);
            c3 = 0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        const obj3 = { timestampMs: null, endFrames: null };
        obj3[0] = closure_1;
        obj3[1] = closure_2;
        closure_1_8(obj3);
        integrationByName = client.getIntegrationByName(c3);
        let result;
        if (null !== integrationByName) {
          if (undefined !== integrationByName) {
            result = integrationByName.captureStandaloneAppStart();
          }
        }
        c4 = 3;
        c5 = 1;
        const obj4 = { value: null, done: false };
        obj4[0] = result;
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
arg5._captureAppStart = function _captureAppStart(isManual) {
  isManual = isManual.isManual;
  c1 = undefined;
  return fn(this, undefined, undefined, function* () {
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
            closure_1 = tmp3;
            let client = tmp7;
            client = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            client = closure_1_0(integrationByName[0]).getClient();
            if (client) {
              closure_5 = closure_1_0;
              let obj2 = closure_1_0(integrationByName[0]);
              closure_1 = 1000 * obj2.timestampInSeconds();
              closure_2 = null;
              if (closure_1_0(integrationByName[1]).NATIVE.enableNative) {
                c3 = 1;
                const NATIVE = closure_1_0(integrationByName[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = NATIVE.fetchNativeFrames();
                return obj1;
              }
            } else {
              const debug3 = closure_1_0(integrationByName[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj9 = closure_1_0(integrationByName[0]);
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c3 = closure_2;
          const debug2 = closure_1_0(integrationByName[0]).debug;
          debug2.log("[AppStart] Failed to capture end frames for app start.", c3);
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            const debug = closure_1_0(integrationByName[0]).debug;
            debug.log("[AppStart] Captured end frames for app start.", closure_2);
            c3 = 0;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        const obj3 = { timestampMs: null, endFrames: null };
        obj3[0] = closure_1;
        obj3[1] = closure_2;
        closure_1_8(obj3);
        integrationByName = client.getIntegrationByName(c3);
        let result;
        if (null !== integrationByName) {
          if (undefined !== integrationByName) {
            result = integrationByName.captureStandaloneAppStart();
          }
        }
        c4 = 3;
        c5 = 1;
        const obj4 = { value: null, done: false };
        obj4[0] = result;
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
arg5.setRootComponentCreationTimestampMs = function setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != _undefined) {
    timestampMs = _undefined.timestampMs;
  }
  if (timestampMs) {
    const debug = registerSpanErrorInstrumentation.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (closure_6) {
    const debug2 = registerSpanErrorInstrumentation.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  closure_6 = arg0;
  c7 = true;
};
arg5._setRootComponentCreationTimestampMs = function _setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != _undefined) {
    timestampMs = _undefined.timestampMs;
  }
  if (timestampMs) {
    const debug = registerSpanErrorInstrumentation.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (closure_6) {
    const debug2 = registerSpanErrorInstrumentation.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  closure_6 = arg0;
  c7 = false;
};
arg5._setAppStartEndData = _setAppStartEndData;
arg5._clearRootComponentCreationTimestampMs = function _clearRootComponentCreationTimestampMs() {
  c6 = undefined;
};
arg5.appStartIntegration = () => {
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
    return _true(undefined, undefined, undefined, () => {
      c3 = 0;
      let SPAN_ORIGIN_AUTO_APP_START = 0;
      return (function* () {
        if (c4 === 2) {
          c4 = 3;
          let throwTypeErrorResult = HermesBuiltin.throwTypeError();
        } else {
          throwTypeErrorResult = arg1;
          throwTypeErrorResult = arg0;
          throwTypeErrorResult = tmp4;
          if (tmp5 === 3) {
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
              c4 = 2;
              let num2 = 0;
              if (0 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c2 = tmp2;
                  let app_start_timestamp_ms = tmp3;
                  let lib;
                  app_start_timestamp_ms = undefined;
                  c2 = undefined;
                  c3 = undefined;
                  c4 = undefined;
                  c5 = undefined;
                  c6 = undefined;
                  c7 = undefined;
                  c8 = undefined;
                  c9 = undefined;
                  c10 = undefined;
                  closure_11 = undefined;
                  c12 = undefined;
                  c13 = undefined;
                  c14 = undefined;
                  c15 = undefined;
                  c16 = undefined;
                  c17 = undefined;
                  throwTypeErrorResult = c3;
                  if (!c3) {
                    throwTypeErrorResult = closure_1_0;
                    const contexts = closure_1_0.contexts;
                    throwTypeErrorResult = null;
                    throwTypeErrorResult = undefined;
                    if (null !== contexts) {
                      if (undefined !== contexts) {
                        throwTypeErrorResult = contexts.trace;
                      }
                    }
                    if (throwTypeErrorResult) {
                      throwTypeErrorResult = closure_1_0;
                      if (!closure_1_0) {
                        if (closure_5) {
                          throwTypeErrorResult = closure_1_0;
                          if (throwTypeErrorResult !== closure_1_0.contexts.trace.span_id) {
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = closure_2_1;
                            const debug13 = lib(closure_2_1[0]).debug;
                            throwTypeErrorResult = debug13.warn(
                              "[AppStart] First started active root span id does not match the transaction event span id. Can not attached app start.",
                            );
                            c4 = 3;
                            obj1 = { value: null, done: true };
                            obj1[0] = undefined;
                            return obj1;
                          }
                        } else {
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = closure_2_1;
                          const debug12 = lib(closure_2_1[0]).debug;
                          throwTypeErrorResult = debug12.warn(
                            "[AppStart] No first started active root span id recorded. Can not attach app start.",
                          );
                          c4 = 3;
                          let obj2 = { value: null, done: true };
                          obj2[0] = undefined;
                          return obj2;
                        }
                      }
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_2_1;
                      const NATIVE = lib(closure_2_1[1]).NATIVE;
                      c3 = 1;
                      c4 = 1;
                      let obj3 = { value: null, done: false };
                      obj3[0] = NATIVE.fetchNativeAppStart();
                      return obj3;
                    } else {
                      throwTypeErrorResult = lib;
                      throwTypeErrorResult = closure_2_1;
                      const debug11 = lib(closure_2_1[0]).debug;
                      throwTypeErrorResult = debug11.warn(
                        "[AppStart] Transaction event is missing trace context. Can not attach app start.",
                      );
                    }
                  }
                  c4 = 3;
                }
              } else {
                let num6 = 1;
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = arg1;
                  return obj4;
                } else {
                  throwTypeErrorResult = app_start_timestamp_ms;
                  lib = arg1;
                  throwTypeErrorResult = lib;
                  if (!lib) {
                    let debug = lib(closure_2_1[0]).debug;
                    debug.warn("[AppStart] Failed to retrieve the app start metrics from the native layer.");
                  }
                }
              }
              if (lib.has_fetched) {
                throwTypeErrorResult = c2;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = closure_2_1;
                const debug10 = lib(closure_2_1[0]).debug;
                throwTypeErrorResult = debug10.warn(
                  "[AppStart] Measured app start metrics were already reported from the native layer.",
                );
              } else {
                app_start_timestamp_ms = lib.app_start_timestamp_ms;
                if (app_start_timestamp_ms) {
                  timestampMs = undefined;
                  if (null != closure_2_4) {
                    timestampMs = closure_2_4.timestampMs;
                  }
                  if (!timestampMs) {
                    obj = lib(closure_2_1[5]);
                    timestampMs = obj.getBundleStartTimestampMs();
                  }
                  if (timestampMs) {
                    if (lib.start_timestamp) {
                      if (closure_2_1 >= 1000 * lib.start_timestamp - 60000) {
                        closure_3 = timestampMs - closure_2_1;
                        if (closure_3 >= 60000) {
                          throwTypeErrorResult = c2;
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = closure_2_1;
                          const debug9 = lib(closure_2_1[0]).debug;
                          throwTypeErrorResult = debug9.warn(
                            "[AppStart] App start duration is over a minute long, not adding app start span.",
                          );
                        } else {
                          throwTypeErrorResult = app_start_timestamp_ms;
                          throwTypeErrorResult = closure_3;
                          if (closure_3 < num2) {
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = closure_2_1;
                            const debug8 = lib(closure_2_1[0]).debug;
                            throwTypeErrorResult = debug8.warn(
                              "[AppStart] Last recorded app start end timestamp is before the app start timestamp.",
                              "This is usually caused by missing `Sentry.wrap(RootComponent)` call.",
                            );
                          } else {
                            throwTypeErrorResult = c2;
                            c3 = true;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = lib;
                            let data = lib.contexts.trace.data;
                            if (!data) {
                              data = {};
                            }
                            lib.contexts.trace.data = data;
                            closure_1_0.contexts.trace.data[lib(closure_2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = lib(
                              closure_2_1[4],
                            ).UI_LOAD;
                            closure_1_0.contexts.trace.op = lib(closure_2_1[4]).UI_LOAD;
                            const tmp59 = lib(closure_2_1[7]);
                            if (closure_2_5) {
                              SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_MANUAL_APP_START;
                            } else {
                              SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_AUTO_APP_START;
                            }
                            lib.contexts.trace.data[lib(closure_2_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] =
                              SPAN_ORIGIN_AUTO_APP_START;
                            lib.contexts.trace.origin = SPAN_ORIGIN_AUTO_APP_START;
                            closure_5 = closure_1_1 / 1000;
                            lib.start_timestamp = closure_5;
                            spans = lib.spans;
                            if (!spans) {
                              spans = [];
                            }
                            lib.spans = spans;
                            spans = closure_1_0.spans;
                            closure_7 = spans.find((op) => "ui.load.initial_display" === op.op);
                            if (closure_7) {
                              closure_7.start_timestamp = closure_2_5;
                              callback(closure_1_0, "time_to_initial_display", closure_7);
                            }
                            closure_8 = spans.find((op) => "ui.load.full_display" === op.op);
                            if (closure_8) {
                              closure_8.start_timestamp = closure_2_5;
                              callback(closure_1_0, "time_to_full_display", closure_8);
                            }
                            callback = timestampMs / 1000;
                            throwTypeErrorResult = lib;
                            let timestamp = lib.timestamp;
                            if (timestamp) {
                              throwTypeErrorResult = app_start_timestamp_ms;
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = closure_1_9;
                              timestamp = lib.timestamp < closure_1_9;
                            }
                            if (timestamp) {
                              throwTypeErrorResult = app_start_timestamp_ms;
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = closure_2_1;
                              const debug5 = lib(closure_2_1[0]).debug;
                              throwTypeErrorResult = debug5.log(
                                "[AppStart] Transaction event timestamp is before app start end. Adjusting transaction event timestamp.",
                              );
                              throwTypeErrorResult = closure_1_0;
                              throwTypeErrorResult = callback;
                              closure_1_0.timestamp = callback;
                            }
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = lib;
                            if ("cold" === lib.type) {
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = closure_2_1;
                              APP_START_WARM = lib(closure_2_1[4]).APP_START_COLD;
                            } else {
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = closure_2_1;
                              APP_START_WARM = lib(closure_2_1[4]).APP_START_WARM;
                            }
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = closure_2_1;
                            obj2 = lib(closure_2_1[5]);
                            let obj5 = {
                              op: null,
                              description: null,
                              start_timestamp: null,
                              timestamp: null,
                              trace_id: null,
                              parent_span_id: null,
                              origin: null,
                            };
                            throwTypeErrorResult = APP_START_WARM;
                            obj5[0] = APP_START_WARM;
                            throwTypeErrorResult = lib;
                            let str9 = "Warm Start";
                            if ("cold" === lib.type) {
                              str9 = "Cold Start";
                            }
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            obj5[1] = str9;
                            throwTypeErrorResult = c5;
                            obj5[2] = c5;
                            throwTypeErrorResult = c9;
                            obj5[3] = c9;
                            throwTypeErrorResult = lib;
                            obj5[4] = lib.contexts.trace.trace_id;
                            throwTypeErrorResult = lib;
                            obj5[5] = lib.contexts.trace.span_id;
                            throwTypeErrorResult = c4;
                            obj5[6] = c4;
                            closure_11 = obj2.createSpanJSON(obj5);
                            throwTypeErrorResult = closure_2_4;
                            throwTypeErrorResult = undefined;
                            if (null != closure_2_4) {
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = closure_2_4;
                              throwTypeErrorResult = closure_2_4.endFrames;
                            }
                            if (throwTypeErrorResult) {
                              throwTypeErrorResult = app_start_timestamp_ms;
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = closure_2_11;
                              throwTypeErrorResult = closure_2_4;
                              throwTypeErrorResult = (function attachFrameDataToSpan(closure_2_11, endFrames) {
                                if (endFrames.totalFrames <= 0) {
                                  if (endFrames.slowFrames <= 0) {
                                    if (endFrames.totalFrames <= 0) {
                                      const debug2 = callback(app_start_timestamp_ms[0]).debug;
                                      const _HermesInternal = HermesInternal;
                                      debug2.warn(
                                        "[AppStart] Detected zero slow or frozen frames. Not adding measurements to spanId (" +
                                          closure_2_11.span_id +
                                          ").",
                                      );
                                    }
                                  }
                                }
                                closure_2_11.data = closure_2_11.data || {};
                                ({
                                  totalFrames: closure_2_11.data["frames.total"],
                                  slowFrames: closure_2_11.data["frames.slow"],
                                  frozenFrames: closure_2_11.data["frames.frozen"],
                                } = endFrames);
                                const debug = callback(app_start_timestamp_ms[0]).debug;
                                obj = { spanId: closure_2_11.span_id, frameData: obj };
                                obj = {
                                  total: endFrames.totalFrames,
                                  slow: endFrames.slowFrames,
                                  frozen: endFrames.frozenFrames,
                                };
                                debug.log("[AppStart] Attached frame data to span.", obj);
                              })(closure_2_11, closure_2_4.endFrames);
                            }
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = closure_1_11;
                            throwTypeErrorResult = spans;
                            closure_14 = (function createJSExecutionStartSpan(closure_1_11, spans) {
                              let obj = callback(app_start_timestamp_ms[5]);
                              const bundleStartTimestampMs = obj.getBundleStartTimestampMs();
                              if (bundleStartTimestampMs) {
                                const result = bundleStartTimestampMs / 1000;
                                if (result < closure_1_11.start_timestamp) {
                                  const debug2 = tmp(tmp2[0]).debug;
                                  debug2.warn(
                                    "Bundle start timestamp is before the app start span start timestamp. Skipping JS execution span.",
                                  );
                                } else if (spans) {
                                  let tmpResult = tmp(tmp2[5]);
                                  obj = {
                                    description: "JS Bundle Execution Before React Root",
                                    start_timestamp: null,
                                    timestamp: null,
                                    origin: null,
                                  };
                                  obj[1] = result;
                                  obj[2] = spans / 1000;
                                  tmpResult = tmp(tmp2[7]);
                                  obj[3] = c7
                                    ? tmpResult.SPAN_ORIGIN_MANUAL_APP_START
                                    : tmpResult.SPAN_ORIGIN_AUTO_APP_START;
                                  return tmpResult.createChildSpanJSON(closure_1_11, obj);
                                } else {
                                  const debug = tmp(tmp2[0]).debug;
                                  debug.warn("Missing the root component first constructor call timestamp.");
                                  obj = {
                                    description: "JS Bundle Execution Start",
                                    start_timestamp: null,
                                    timestamp: null,
                                    origin: null,
                                  };
                                  obj[1] = result;
                                  obj[2] = result;
                                  obj[3] = tmp(tmp2[7]).SPAN_ORIGIN_AUTO_APP_START;
                                  return tmp(tmp2[5]).createChildSpanJSON(closure_1_11, obj);
                                }
                              }
                            })(closure_1_11, spans);
                            throwTypeErrorResult = closure_1_11;
                            items = [closure_1_11];
                            lib = num6;
                            throwTypeErrorResult = closure_14;
                            if (closure_14) {
                              throwTypeErrorResult = app_start_timestamp_ms;
                              throwTypeErrorResult = closure_14;
                              const items1 = [closure_14];
                              let items2 = items1;
                            } else {
                              items2 = [];
                            }
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = items;
                            throwTypeErrorResult = items2;
                            throwTypeErrorResult = num6;
                            lib = HermesBuiltin.arraySpread(items2, num6);
                            throwTypeErrorResult = closure_1_11;
                            closure_12 = closure_1_11;
                            throwTypeErrorResult = closure_1_0;
                            spans = closure_1_0.spans;
                            throwTypeErrorResult = spans;
                            const found = spans.filter(
                              (start_timestamp_ms) =>
                                start_timestamp_ms.start_timestamp_ms / 1000 >= _undefined.start_timestamp,
                            );
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = items;
                            lib = HermesBuiltin.arraySpread(
                              found.map((description) => {
                                let start_timestamp_ms = description;
                                if ("UIKit init" === description.description) {
                                  let obj = callback(app_start_timestamp_ms[9]);
                                  obj1 = callback(app_start_timestamp_ms[5]);
                                  let bundleStartTimestampMs = obj1.getBundleStartTimestampMs();
                                  if (!bundleStartTimestampMs) {
                                    obj = {
                                      description: "UIKit Init",
                                      start_timestamp: null,
                                      timestamp: null,
                                      origin: null,
                                    };
                                    obj[1] = start_timestamp_ms.start_timestamp_ms / 1000;
                                    obj[2] = start_timestamp_ms.end_timestamp_ms / 1000;
                                    obj[3] = callback(app_start_timestamp_ms[7]).SPAN_ORIGIN_AUTO_APP_START;
                                    let childSpanJSON = callback(app_start_timestamp_ms[5]).createChildSpanJSON(
                                      tmp3,
                                      obj,
                                    );
                                    obj.setMainThreadInfo(childSpanJSON);
                                    const obj3 = callback(app_start_timestamp_ms[5]);
                                  }
                                  obj = {
                                    description: "UIKit Init to JS Exec Start",
                                    start_timestamp: null,
                                    timestamp: null,
                                    origin: null,
                                  };
                                  start_timestamp_ms = start_timestamp_ms.start_timestamp_ms;
                                  obj[1] = start_timestamp_ms / 1000;
                                  obj[2] = bundleStartTimestampMs / 1000;
                                  bundleStartTimestampMs = callback;
                                  obj[3] = callback(app_start_timestamp_ms[7]).SPAN_ORIGIN_AUTO_APP_START;
                                  childSpanJSON = callback(app_start_timestamp_ms[5]).createChildSpanJSON(tmp3, obj);
                                  const obj5 = callback(app_start_timestamp_ms[5]);
                                } else {
                                  const obj7 = callback(app_start_timestamp_ms[9]);
                                  obj1 = { description: null, start_timestamp: null, timestamp: null, origin: null };
                                  obj1[0] = start_timestamp_ms.description;
                                  obj1[1] = start_timestamp_ms.start_timestamp_ms / 1000;
                                  obj1[2] = start_timestamp_ms.end_timestamp_ms / 1000;
                                  obj1[3] = callback(app_start_timestamp_ms[7]).SPAN_ORIGIN_AUTO_APP_START;
                                  return obj7.setMainThreadInfo(
                                    callback(app_start_timestamp_ms[5]).createChildSpanJSON(c12, obj1),
                                  );
                                }
                              }),
                              lib,
                            );
                            throwTypeErrorResult = closure_1_6;
                            const push = closure_1_6.push;
                            throwTypeErrorResult = items;
                            const items3 = [];
                            throwTypeErrorResult = items3;
                            throwTypeErrorResult = HermesBuiltin.arraySpread(items, 0);
                            throwTypeErrorResult = push;
                            throwTypeErrorResult = items3;
                            throwTypeErrorResult = closure_1_6;
                            throwTypeErrorResult = HermesBuiltin.apply(items3, closure_1_6);
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = closure_2_1;
                            const debug6 = lib(closure_2_1[0]).debug;
                            throwTypeErrorResult = globalThis;
                            num2 = JSON;
                            throwTypeErrorResult = items;
                            throwTypeErrorResult = debug6.log(
                              "[AppStart] Added app start spans to transaction event.",
                              JSON.stringify(items, undefined, 2),
                            );
                            throwTypeErrorResult = closure_1_0;
                            if ("cold" === closure_1_0.type) {
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = closure_2_1;
                              APP_START_WARM2 = lib(closure_2_1[8]).APP_START_COLD;
                            } else {
                              throwTypeErrorResult = c2;
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = closure_2_1;
                              APP_START_WARM2 = lib(closure_2_1[8]).APP_START_WARM;
                            }
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            obj6 = { value: null, unit: "millisecond" };
                            throwTypeErrorResult = closure_3;
                            obj6[0] = closure_3;
                            throwTypeErrorResult = lib;
                            let measurements = lib.measurements;
                            throwTypeErrorResult = lib;
                            if (!measurements) {
                              measurements = {};
                            }
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult.measurements = measurements;
                            throwTypeErrorResult = closure_1_0;
                            num6 = closure_1_0.measurements;
                            throwTypeErrorResult = APP_START_WARM2;
                            throwTypeErrorResult = obj6;
                            num6[APP_START_WARM2] = obj6;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = closure_2_1;
                            const debug7 = lib(closure_2_1[0]).debug;
                            const _JSON = JSON;
                            throwTypeErrorResult = obj6;
                            throwTypeErrorResult = debug7.log(
                              "[AppStart] Added app start measurement to transaction event.",
                              JSON.stringify(obj6, undefined, 2),
                            );
                            const tmp71 = lib;
                          }
                        }
                      }
                    }
                    const debug4 = lib(closure_2_1[0]).debug;
                    debug4.warn("[AppStart] App start timestamp is too far in the past to be used for app start span.");
                  } else {
                    const debug3 = lib(closure_2_1[0]).debug;
                    debug3.warn(
                      "[AppStart] Javascript failed to record app start end. `_setAppStartEndData` was not called nor could the bundle start be found.",
                    );
                  }
                } else {
                  let debug2 = lib(closure_2_1[0]).debug;
                  debug2.warn("[AppStart] App start timestamp could not be loaded from the native layer.");
                }
              }
            } catch (throwTypeErrorResult) {
              c4 = throwTypeErrorResult;
              throw throwTypeErrorResult;
            }
          }
        }
      })();
    });
  }
  c1 = undefined;
  c2 = true;
  c3 = false;
  c4 = false;
  c5 = undefined;
  function recordFirstStartedActiveRootSpanId(spanContext) {
    if (!spanId) {
      if (obj.isRootSpan(spanContext)) {
        spanId = spanContext.spanContext().spanId;
        const debug = tmp2(tmp3[0]).debug;
        debug.log("[AppStart] First started active root span id recorded.", spanId);
      }
      obj = flag(_undefined[3]);
      tmp2 = flag;
      tmp3 = _undefined;
    }
  }
  obj = {
    name: c3,
    setup(getOptions) {
      closure_1 = getOptions;
      if (!getOptions.getOptions().enableAppStartTracking) {
        c2 = false;
        const debug = flag(_undefined[0]).debug;
        debug.warn("[AppStart] App start tracking is disabled.");
      }
      getOptions.on("spanStart", recordFirstStartedActiveRootSpanId);
    },
    afterAllSetup(arg0) {
      if (!c4) {
        c4 = true;
        const appRegistryIntegration = true(_undefined[2]).getAppRegistryIntegration(arg0);
        if (!tmp5) {
          appRegistryIntegration.onRunApplication(() => {
            const debug = closure_1_0(closure_1_1[0]).debug;
            const log = debug.log;
            if (c3) {
              log("[AppStartIntegration] Resetting app start data flushed flag based on runApplication call.");
              c3 = false;
              c5 = undefined;
            } else {
              log(
                "[AppStartIntegration] Waiting for initial app start was flush, before updating based on runApplication call.",
              );
            }
          });
        }
        const obj = true(_undefined[2]);
        tmp5 = null === appRegistryIntegration || undefined === appRegistryIntegration;
      }
    },
    processEvent(arg0) {
      closure_0 = arg0;
      return _true(undefined, undefined, undefined, function* () {
        if (c2 === 2) {
          c2 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
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
            c2 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_0 = tmp4;
                let tmp5 = !c2;
                if (c2) {
                  tmp5 = closure_1_0;
                }
                if (!tmp5) {
                  tmp5 = "transaction" !== closure_1_0.type;
                }
                if (!tmp5) {
                  c1 = 1;
                  c2 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_7(closure_1_0);
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c2 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = closure_0;
            return obj2;
          } catch (tmp10) {
            c2 = tmp;
            throw tmp10;
          }
        }
      });
    },
    captureStandaloneAppStart() {
      return _true(this, undefined, undefined, function* () {
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
            if (0 === logResult3) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let timestampMs = tmp3;
                c0 = tmp7;
                c0 = undefined;
                timestampMs = undefined;
                c2 = undefined;
                c3 = undefined;
                logResult3 = closure_1_1;
                if (closure_1_1) {
                  const debug2 = callback(closure_1_1[0]).debug;
                  const log = debug2.log;
                  if (callback) {
                    log("[AppStart] App start tracking standalone root span (transaction).");
                    let endFrames;
                    if (null != closure_4) {
                      endFrames = closure_4.endFrames;
                    }
                    if (!endFrames) {
                      if (callback(closure_1_1[1]).NATIVE.enableNative) {
                        c3 = 1;
                        const NATIVE = callback(closure_1_1[1]).NATIVE;
                        logResult3 = 2;
                        c5 = 1;
                        obj1 = { value: null, done: false };
                        obj1[0] = NATIVE.fetchNativeFrames();
                        return obj1;
                      }
                    }
                  } else {
                    log(
                      "[AppStart] App start tracking is enabled. App start will be added to the first transaction as a child span.",
                    );
                  }
                } else {
                  const _console = console;
                  console.warn("[AppStart] Could not capture App Start, missing client, call `Sentry.init` first.");
                }
                c5 = 3;
                c5 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_4 = c2;
              const debug = callback(closure_1_1[0]).debug;
              debug.log("[AppStart] Failed to capture frames for standalone app start.", closure_4);
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                callback = arg1;
                logResult3 = callback;
                logResult3 = closure_1_1;
                const debug4 = callback(closure_1_1[0]).debug;
                logResult3 = callback;
                logResult3 = debug4.log("[AppStart] Captured end frames for standalone app start.", callback);
                logResult3 = closure_4;
                timestampMs = undefined;
                if (null != closure_4) {
                  timestampMs = closure_4.timestampMs;
                }
                if (!timestampMs) {
                  obj2 = callback(closure_1_1[0]);
                  timestampMs = 1000 * obj2.timestampInSeconds();
                }
                const obj4 = { timestampMs: null, endFrames: null };
                obj4[0] = timestampMs;
                obj4[1] = c0;
                closure_1_8(obj4);
                c3 = 0;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (c3.spans) {
                if (0 !== c3.spans.length) {
                  let scope = callback(closure_1_1[0]).getCapturedScopesOnSpan(c2).scope;
                  if (!scope) {
                    obj = callback(closure_1_1[0]);
                    scope = obj.getCurrentScope();
                  }
                  scope.captureEvent(closure_3);
                  const obj15 = callback(closure_1_1[0]);
                }
              }
            }
            let obj6 = callback(closure_1_1[0]);
            const obj5 = { forceTransaction: true, name: "App Start", op: null };
            obj5[2] = callback(closure_1_1[4]).UI_LOAD;
            closure_2 = obj6.startInactiveSpan(obj5);
            if (!(closure_2 instanceof callback(closure_1_1[0]).SentryNonRecordingSpan)) {
              const obj9 = callback(closure_1_1[3]);
              obj9.setEndTimeValue(closure_2, callback(closure_1_1[0]).timestampInSeconds());
              timestampMs.emit("spanEnd", closure_2);
              const obj10 = callback(closure_1_1[0]);
              closure_3 = callback(closure_1_1[3]).convertSpanToTransaction(closure_2);
              if (closure_3) {
                logResult3 = 3;
                c5 = 1;
                obj6 = { value: null, done: false };
                obj6[0] = closure_1_7(closure_3);
                return obj6;
              } else {
                const debug3 = callback(closure_1_1[0]).debug;
                debug3.warn("[AppStart] Failed to convert App Start span to transaction.");
              }
              const obj11 = callback(closure_1_1[3]);
            }
          } catch (tmp81) {
            c2 = tmp81;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp81;
            }
          }
        }
      });
    },
    setFirstStartedActiveRootSpanId(arg0) {
      closure_5 = arg0;
      const debug = flag(_undefined[0]).debug;
      debug.log("[AppStart] First started active root span id recorded.", closure_5);
    },
  };
  return obj;
};
