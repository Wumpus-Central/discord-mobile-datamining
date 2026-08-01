// === Module 1152: setSpanDurationAsMeasurementOnTransactionEvent ===

// Module 1152 (setSpanDurationAsMeasurementOnTransactionEvent)
const require = arg1;
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
  const debug = require(817) /* registerSpanErrorInstrumentation */.debug;
  debug.warn("Span is missing start or end timestamp. Cam not set measurement on transaction event.");
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
    let closure_3 = arg3;
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
const AppStart = "AppStart";
let c4;
let c5 = false;
let c6;
let c7 = false;
function _setAppStartEndData(arg0) {
  if (closure_4) {
    const debug = require(817) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("Overwriting already set app start end data.");
  }
  closure_4 = arg0;
}
arg5.captureAppStart = function captureAppStart() {
  let c0 = true;
  return fn(undefined, undefined, undefined, function*() {
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
            let closure_1 = tmp3;
            let client = tmp7;
            client = undefined;
            closure_1 = undefined;
            let closure_2;
            client = outer1_0(outer1_1[0]).getClient();
            if (client) {
              c5 = outer1_0;
              let obj2 = outer1_0(outer1_1[0]);
              closure_1 = 1000 * obj2.timestampInSeconds();
              closure_2 = null;
              if (outer1_0(outer1_1[1]).NATIVE.enableNative) {
                let c3 = 1;
                const NATIVE = outer1_0(outer1_1[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = NATIVE.fetchNativeFrames();
                return obj1;
              }
            } else {
              const debug3 = outer1_0(outer1_1[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj9 = outer1_0(outer1_1[0]);
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c3 = closure_2;
          const debug2 = outer1_0(outer1_1[0]).debug;
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
            const debug = outer1_0(outer1_1[0]).debug;
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
        outer1_8(obj3);
        const integrationByName = client.getIntegrationByName(c3);
        outer1_1 = integrationByName;
        let result;
        if (null !== integrationByName) {
          if (undefined !== outer1_1) {
            result = outer1_1.captureStandaloneAppStart();
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
  let c1;
  return fn(this, undefined, undefined, function*() {
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
            let closure_1 = tmp3;
            let client = tmp7;
            client = undefined;
            closure_1 = undefined;
            let closure_2;
            client = outer1_0(outer1_1[0]).getClient();
            if (client) {
              c5 = outer1_0;
              let obj2 = outer1_0(outer1_1[0]);
              closure_1 = 1000 * obj2.timestampInSeconds();
              closure_2 = null;
              if (outer1_0(outer1_1[1]).NATIVE.enableNative) {
                let c3 = 1;
                const NATIVE = outer1_0(outer1_1[1]).NATIVE;
                c4 = 2;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = NATIVE.fetchNativeFrames();
                return obj1;
              }
            } else {
              const debug3 = outer1_0(outer1_1[0]).debug;
              debug3.warn("[AppStart] Could not capture App Start, missing client.");
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const obj9 = outer1_0(outer1_1[0]);
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c3 = closure_2;
          const debug2 = outer1_0(outer1_1[0]).debug;
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
            const debug = outer1_0(outer1_1[0]).debug;
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
        outer1_8(obj3);
        const integrationByName = client.getIntegrationByName(c3);
        outer1_1 = integrationByName;
        let result;
        if (null !== integrationByName) {
          if (undefined !== outer1_1) {
            result = outer1_1.captureStandaloneAppStart();
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
    const debug = require(817) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (closure_6) {
    const debug2 = require(817) /* registerSpanErrorInstrumentation */.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  closure_6 = arg0;
  let c7 = true;
};
arg5._setRootComponentCreationTimestampMs = function _setRootComponentCreationTimestampMs(arg0) {
  let timestampMs;
  if (null != _undefined) {
    timestampMs = _undefined.timestampMs;
  }
  if (timestampMs) {
    const debug = require(817) /* registerSpanErrorInstrumentation */.debug;
    debug.warn("Setting Root component creation timestamp after app start end is set.");
  }
  if (closure_6) {
    const debug2 = require(817) /* registerSpanErrorInstrumentation */.debug;
    debug2.warn("Overwriting already set root component creation timestamp.");
  }
  closure_6 = arg0;
  let c7 = false;
};
arg5._setAppStartEndData = _setAppStartEndData;
arg5._clearRootComponentCreationTimestampMs = function _clearRootComponentCreationTimestampMs() {
  let c6;
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
    let closure_0 = arg0;
    return _true(undefined, undefined, undefined, function*() {
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
                let c2 = tmp2;
                let app_start_timestamp_ms = tmp3;
                let lib;
                app_start_timestamp_ms = undefined;
                c2 = undefined;
                c3 = undefined;
                c4 = undefined;
                let c5;
                let c6;
                let c7;
                let c8;
                let c9;
                let c10;
                let closure_11;
                let c12;
                let c13;
                let c14;
                let c15;
                let c16;
                let c17;
                throwTypeErrorResult = c3;
                if (!c3) {
                  throwTypeErrorResult = outer1_0;
                  const contexts = outer1_0.contexts;
                  throwTypeErrorResult = null;
                  throwTypeErrorResult = undefined;
                  if (null !== contexts) {
                    if (undefined !== contexts) {
                      throwTypeErrorResult = contexts.trace;
                    }
                  }
                  if (throwTypeErrorResult) {
                    throwTypeErrorResult = outer1_0;
                    if (!outer1_0) {
                      if (outer1_5) {
                        throwTypeErrorResult = outer1_0;
                        if (throwTypeErrorResult !== outer1_0.contexts.trace.span_id) {
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = outer2_1;
                          const debug13 = lib(outer2_1[0]).debug;
                          throwTypeErrorResult = debug13.warn("[AppStart] First started active root span id does not match the transaction event span id. Can not attached app start.");
                          c4 = 3;
                          let obj1 = { value: null, done: true };
                          obj1[0] = undefined;
                          return obj1;
                        }
                      } else {
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = outer2_1;
                        const debug12 = lib(outer2_1[0]).debug;
                        throwTypeErrorResult = debug12.warn("[AppStart] No first started active root span id recorded. Can not attach app start.");
                        c4 = 3;
                        let obj2 = { value: null, done: true };
                        obj2[0] = undefined;
                        return obj2;
                      }
                    }
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = outer2_1;
                    const NATIVE = lib(outer2_1[1]).NATIVE;
                    c3 = 1;
                    c4 = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = NATIVE.fetchNativeAppStart();
                    return obj3;
                  } else {
                    throwTypeErrorResult = lib;
                    throwTypeErrorResult = outer2_1;
                    const debug11 = lib(outer2_1[0]).debug;
                    throwTypeErrorResult = debug11.warn("[AppStart] Transaction event is missing trace context. Can not attach app start.");
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
                  let debug = lib(outer2_1[0]).debug;
                  debug.warn("[AppStart] Failed to retrieve the app start metrics from the native layer.");
                }
              }
            }
            if (lib.has_fetched) {
              throwTypeErrorResult = c2;
              throwTypeErrorResult = lib;
              throwTypeErrorResult = outer2_1;
              const debug10 = lib(outer2_1[0]).debug;
              throwTypeErrorResult = debug10.warn("[AppStart] Measured app start metrics were already reported from the native layer.");
            } else {
              app_start_timestamp_ms = lib.app_start_timestamp_ms;
              if (app_start_timestamp_ms) {
                let timestampMs;
                if (null != outer2_4) {
                  timestampMs = outer2_4.timestampMs;
                }
                if (!timestampMs) {
                  obj = lib(outer2_1[5]);
                  timestampMs = obj.getBundleStartTimestampMs();
                }
                const outer2_2 = timestampMs;
                if (outer2_2) {
                  if (lib.start_timestamp) {
                    if (outer2_1 >= 1000 * lib.start_timestamp - 60000) {
                      const outer2_3 = outer2_2 - outer2_1;
                      if (outer2_3 >= 60000) {
                        throwTypeErrorResult = c2;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = outer2_1;
                        const debug9 = lib(outer2_1[0]).debug;
                        throwTypeErrorResult = debug9.warn("[AppStart] App start duration is over a minute long, not adding app start span.");
                      } else {
                        throwTypeErrorResult = app_start_timestamp_ms;
                        throwTypeErrorResult = outer2_3;
                        if (outer2_3 < num2) {
                          throwTypeErrorResult = c2;
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = outer2_1;
                          const debug8 = lib(outer2_1[0]).debug;
                          throwTypeErrorResult = debug8.warn("[AppStart] Last recorded app start end timestamp is before the app start timestamp.", "This is usually caused by missing `Sentry.wrap(RootComponent)` call.");
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
                          outer1_0.contexts.trace.data[lib(outer2_1[6]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = lib(outer2_1[4]).UI_LOAD;
                          outer1_0.contexts.trace.op = lib(outer2_1[4]).UI_LOAD;
                          const tmp59 = lib(outer2_1[7]);
                          if (outer2_5) {
                            let SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_MANUAL_APP_START;
                          } else {
                            SPAN_ORIGIN_AUTO_APP_START = tmp59.SPAN_ORIGIN_AUTO_APP_START;
                          }
                          c4 = SPAN_ORIGIN_AUTO_APP_START;
                          lib.contexts.trace.data[lib(outer2_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = c4;
                          lib.contexts.trace.origin = c4;
                          outer1_5 = outer1_1 / 1000;
                          lib.start_timestamp = outer1_5;
                          let spans = lib.spans;
                          if (!spans) {
                            spans = [];
                          }
                          lib.spans = spans;
                          const outer2_6 = outer1_0.spans;
                          const outer2_7 = outer2_6.find((op) => "ui.load.initial_display" === op.op);
                          if (outer2_7) {
                            outer2_7.start_timestamp = outer2_5;
                            outer2_9(outer1_0, "time_to_initial_display", outer2_7);
                          }
                          const outer2_8 = outer2_6.find((op) => "ui.load.full_display" === op.op);
                          if (outer2_8) {
                            outer2_8.start_timestamp = outer2_5;
                            outer2_9(outer1_0, "time_to_full_display", outer2_8);
                          }
                          outer2_9 = outer2_2 / 1000;
                          throwTypeErrorResult = lib;
                          let timestamp = lib.timestamp;
                          if (timestamp) {
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = outer1_9;
                            timestamp = lib.timestamp < outer1_9;
                          }
                          if (timestamp) {
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = outer2_1;
                            const debug5 = lib(outer2_1[0]).debug;
                            throwTypeErrorResult = debug5.log("[AppStart] Transaction event timestamp is before app start end. Adjusting transaction event timestamp.");
                            throwTypeErrorResult = outer1_0;
                            throwTypeErrorResult = outer2_9;
                            outer1_0.timestamp = outer2_9;
                          }
                          throwTypeErrorResult = app_start_timestamp_ms;
                          throwTypeErrorResult = lib;
                          if ("cold" === lib.type) {
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = outer2_1;
                            let APP_START_WARM = lib(outer2_1[4]).APP_START_COLD;
                          } else {
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = outer2_1;
                            APP_START_WARM = lib(outer2_1[4]).APP_START_WARM;
                          }
                          throwTypeErrorResult = app_start_timestamp_ms;
                          throwTypeErrorResult = c2;
                          const outer2_10 = APP_START_WARM;
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = outer2_1;
                          obj2 = lib(outer2_1[5]);
                          let obj5 = { op: null, description: null, start_timestamp: null, timestamp: null, trace_id: null, parent_span_id: null, origin: null };
                          throwTypeErrorResult = outer2_10;
                          obj5[0] = outer2_10;
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
                          throwTypeErrorResult = outer2_4;
                          throwTypeErrorResult = undefined;
                          if (null != outer2_4) {
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = outer2_4;
                            throwTypeErrorResult = outer2_4.endFrames;
                          }
                          if (throwTypeErrorResult) {
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = outer2_11;
                            throwTypeErrorResult = outer2_4;
                            throwTypeErrorResult = (function attachFrameDataToSpan(outer2_11, endFrames) {
                              if (endFrames.totalFrames <= 0) {
                                if (endFrames.slowFrames <= 0) {
                                  if (endFrames.totalFrames <= 0) {
                                    const debug2 = callback(app_start_timestamp_ms[0]).debug;
                                    const _HermesInternal = HermesInternal;
                                    debug2.warn("[AppStart] Detected zero slow or frozen frames. Not adding measurements to spanId (" + outer2_11.span_id + ").");
                                  }
                                }
                              }
                              outer2_11.data = outer2_11.data || {};
                              ({ totalFrames: outer2_11.data["frames.total"], slowFrames: outer2_11.data["frames.slow"], frozenFrames: outer2_11.data["frames.frozen"] } = endFrames);
                              const debug = callback(app_start_timestamp_ms[0]).debug;
                              obj = { spanId: outer2_11.span_id, frameData: obj };
                              obj = { total: endFrames.totalFrames, slow: endFrames.slowFrames, frozen: endFrames.frozenFrames };
                              debug.log("[AppStart] Attached frame data to span.", obj);
                            })(outer2_11, outer2_4.endFrames);
                          }
                          throwTypeErrorResult = app_start_timestamp_ms;
                          throwTypeErrorResult = c2;
                          throwTypeErrorResult = outer1_11;
                          throwTypeErrorResult = outer2_6;
                          const outer1_14 = (function createJSExecutionStartSpan(outer1_11, outer2_6) {
                            let obj = callback(app_start_timestamp_ms[5]);
                            const bundleStartTimestampMs = obj.getBundleStartTimestampMs();
                            if (bundleStartTimestampMs) {
                              const result = bundleStartTimestampMs / 1000;
                              if (result < outer1_11.start_timestamp) {
                                const debug2 = tmp(tmp2[0]).debug;
                                debug2.warn("Bundle start timestamp is before the app start span start timestamp. Skipping JS execution span.");
                              } else if (outer2_6) {
                                let tmpResult = tmp(tmp2[5]);
                                obj = { description: "JS Bundle Execution Before React Root", start_timestamp: null, timestamp: null, origin: null };
                                obj[1] = result;
                                obj[2] = outer2_6 / 1000;
                                tmpResult = tmp(tmp2[7]);
                                obj[3] = c7 ? tmpResult.SPAN_ORIGIN_MANUAL_APP_START : tmpResult.SPAN_ORIGIN_AUTO_APP_START;
                                return tmpResult.createChildSpanJSON(outer1_11, obj);
                              } else {
                                const debug = tmp(tmp2[0]).debug;
                                debug.warn("Missing the root component first constructor call timestamp.");
                                obj = { description: "JS Bundle Execution Start", start_timestamp: null, timestamp: null, origin: null };
                                obj[1] = result;
                                obj[2] = result;
                                obj[3] = tmp(tmp2[7]).SPAN_ORIGIN_AUTO_APP_START;
                                return tmp(tmp2[5]).createChildSpanJSON(outer1_11, obj);
                              }
                            }
                          })(outer1_11, outer2_6);
                          throwTypeErrorResult = outer1_11;
                          const items = [outer1_11];
                          lib = num6;
                          throwTypeErrorResult = outer1_14;
                          if (outer1_14) {
                            throwTypeErrorResult = app_start_timestamp_ms;
                            throwTypeErrorResult = outer1_14;
                            const items1 = [outer1_14];
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
                          throwTypeErrorResult = outer1_11;
                          const outer1_12 = outer1_11;
                          throwTypeErrorResult = outer1_0;
                          const outer1_13 = outer1_0.spans;
                          throwTypeErrorResult = outer1_13;
                          const found = outer1_13.filter((start_timestamp_ms) => start_timestamp_ms.start_timestamp_ms / 1000 >= _undefined.start_timestamp);
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = items;
                          lib = HermesBuiltin.arraySpread(found.map((description) => {
                            let start_timestamp_ms = description;
                            if ("UIKit init" === description.description) {
                              let obj = callback(app_start_timestamp_ms[9]);
                              let obj1 = callback(app_start_timestamp_ms[5]);
                              let bundleStartTimestampMs = obj1.getBundleStartTimestampMs();
                              if (!bundleStartTimestampMs) {
                                obj = { description: "UIKit Init", start_timestamp: null, timestamp: null, origin: null };
                                obj[1] = start_timestamp_ms.start_timestamp_ms / 1000;
                                obj[2] = start_timestamp_ms.end_timestamp_ms / 1000;
                                obj[3] = callback(app_start_timestamp_ms[7]).SPAN_ORIGIN_AUTO_APP_START;
                                let childSpanJSON = callback(app_start_timestamp_ms[5]).createChildSpanJSON(tmp3, obj);
                                obj.setMainThreadInfo(childSpanJSON);
                                const obj3 = callback(app_start_timestamp_ms[5]);
                              }
                              obj = { description: "UIKit Init to JS Exec Start", start_timestamp: null, timestamp: null, origin: null };
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
                              return obj7.setMainThreadInfo(callback(app_start_timestamp_ms[5]).createChildSpanJSON(c12, obj1));
                            }
                          }), lib);
                          const outer1_15 = items;
                          throwTypeErrorResult = outer1_6;
                          const push = outer1_6.push;
                          throwTypeErrorResult = outer1_15;
                          const items3 = [];
                          throwTypeErrorResult = items3;
                          throwTypeErrorResult = HermesBuiltin.arraySpread(outer1_15, 0);
                          throwTypeErrorResult = push;
                          throwTypeErrorResult = items3;
                          throwTypeErrorResult = outer1_6;
                          throwTypeErrorResult = HermesBuiltin.apply(items3, outer1_6);
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = outer2_1;
                          const debug6 = lib(outer2_1[0]).debug;
                          throwTypeErrorResult = globalThis;
                          num2 = JSON;
                          throwTypeErrorResult = outer1_15;
                          throwTypeErrorResult = debug6.log("[AppStart] Added app start spans to transaction event.", JSON.stringify(outer1_15, undefined, 2));
                          throwTypeErrorResult = outer1_0;
                          if ("cold" === outer1_0.type) {
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = outer2_1;
                            let APP_START_WARM2 = lib(outer2_1[8]).APP_START_COLD;
                          } else {
                            throwTypeErrorResult = c2;
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = outer2_1;
                            APP_START_WARM2 = lib(outer2_1[8]).APP_START_WARM;
                          }
                          throwTypeErrorResult = app_start_timestamp_ms;
                          throwTypeErrorResult = c2;
                          const outer2_16 = APP_START_WARM2;
                          const obj6 = { value: null, unit: "millisecond" };
                          throwTypeErrorResult = outer2_3;
                          obj6[0] = outer2_3;
                          const outer2_17 = obj6;
                          throwTypeErrorResult = lib;
                          let measurements = lib.measurements;
                          throwTypeErrorResult = lib;
                          if (!measurements) {
                            measurements = {};
                          }
                          throwTypeErrorResult = app_start_timestamp_ms;
                          throwTypeErrorResult = c2;
                          throwTypeErrorResult.measurements = measurements;
                          throwTypeErrorResult = outer1_0;
                          num6 = outer1_0.measurements;
                          throwTypeErrorResult = outer2_16;
                          throwTypeErrorResult = outer2_17;
                          num6[outer2_16] = outer2_17;
                          throwTypeErrorResult = lib;
                          throwTypeErrorResult = outer2_1;
                          const debug7 = lib(outer2_1[0]).debug;
                          const _JSON = JSON;
                          throwTypeErrorResult = outer2_17;
                          throwTypeErrorResult = debug7.log("[AppStart] Added app start measurement to transaction event.", JSON.stringify(outer2_17, undefined, 2));
                          const tmp71 = lib;
                        }
                      }
                    }
                  }
                  const debug4 = lib(outer2_1[0]).debug;
                  debug4.warn("[AppStart] App start timestamp is too far in the past to be used for app start span.");
                } else {
                  const debug3 = lib(outer2_1[0]).debug;
                  debug3.warn("[AppStart] Javascript failed to record app start end. `_setAppStartEndData` was not called nor could the bundle start be found.");
                }
              } else {
                let debug2 = lib(outer2_1[0]).debug;
                debug2.warn("[AppStart] App start timestamp could not be loaded from the native layer.");
              }
            }
          } catch (throwTypeErrorResult) {
            c4 = throwTypeErrorResult;
            throw throwTypeErrorResult;
          }
        }
      }
    });
  }
  let c1;
  let c2 = true;
  let c3 = false;
  let c4 = false;
  let c5;
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
      let closure_1 = getOptions;
      if (!getOptions.getOptions().enableAppStartTracking) {
        let c2 = false;
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
            const debug = outer1_0(outer1_1[0]).debug;
            const log = debug.log;
            if (c3) {
              log("[AppStartIntegration] Resetting app start data flushed flag based on runApplication call.");
              c3 = false;
              let c5;
            } else {
              log("[AppStartIntegration] Waiting for initial app start was flush, before updating based on runApplication call.");
            }
          });
        }
        const obj = true(_undefined[2]);
        tmp5 = null === appRegistryIntegration || undefined === appRegistryIntegration;
      }
    },
    processEvent(arg0) {
      let closure_0 = arg0;
      return _true(undefined, undefined, undefined, function*() {
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
                let closure_0 = tmp4;
                let tmp5 = !c2;
                if (c2) {
                  tmp5 = outer1_0;
                }
                if (!tmp5) {
                  tmp5 = "transaction" !== outer1_0.type;
                }
                if (!tmp5) {
                  c1 = 1;
                  c2 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_7(outer1_0);
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
      return _true(this, undefined, undefined, function*() {
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
                let c0 = tmp7;
                c0 = undefined;
                timestampMs = undefined;
                let c2;
                let c3;
                logResult3 = outer1_1;
                if (outer1_1) {
                  const debug2 = outer1_0(outer1_1[0]).debug;
                  const log = debug2.log;
                  if (outer1_0) {
                    log("[AppStart] App start tracking standalone root span (transaction).");
                    let endFrames;
                    if (null != c4) {
                      endFrames = c4.endFrames;
                    }
                    if (!endFrames) {
                      if (outer1_0(outer1_1[1]).NATIVE.enableNative) {
                        c3 = 1;
                        const NATIVE = outer1_0(outer1_1[1]).NATIVE;
                        logResult3 = 2;
                        c5 = 1;
                        const obj1 = { value: null, done: false };
                        obj1[0] = NATIVE.fetchNativeFrames();
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
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              c4 = c2;
              const debug = outer1_0(outer1_1[0]).debug;
              debug.log("[AppStart] Failed to capture frames for standalone app start.", c4);
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
                outer1_0 = arg1;
                logResult3 = outer1_0;
                logResult3 = outer1_1;
                const debug4 = outer1_0(outer1_1[0]).debug;
                logResult3 = outer1_0;
                logResult3 = debug4.log("[AppStart] Captured end frames for standalone app start.", outer1_0);
                logResult3 = c4;
                timestampMs = undefined;
                if (null != c4) {
                  timestampMs = c4.timestampMs;
                }
                if (!timestampMs) {
                  obj2 = outer1_0(outer1_1[0]);
                  timestampMs = 1000 * obj2.timestampInSeconds();
                }
                const obj4 = { timestampMs: null, endFrames: null };
                obj4[0] = timestampMs;
                obj4[1] = c0;
                outer1_8(obj4);
                c3 = 0;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (c3.spans) {
                if (0 !== c3.spans.length) {
                  let scope = outer1_0(outer1_1[0]).getCapturedScopesOnSpan(c2).scope;
                  if (!scope) {
                    obj = outer1_0(outer1_1[0]);
                    scope = obj.getCurrentScope();
                  }
                  scope.captureEvent(c3);
                  const obj15 = outer1_0(outer1_1[0]);
                }
              }
            }
            let obj6 = outer1_0(outer1_1[0]);
            const obj5 = { forceTransaction: true, name: "App Start", op: null };
            obj5[2] = outer1_0(outer1_1[4]).UI_LOAD;
            const outer1_2 = obj6.startInactiveSpan(obj5);
            if (!(outer1_2 instanceof outer1_0(outer1_1[0]).SentryNonRecordingSpan)) {
              const obj9 = outer1_0(outer1_1[3]);
              obj9.setEndTimeValue(outer1_2, outer1_0(outer1_1[0]).timestampInSeconds());
              timestampMs.emit("spanEnd", outer1_2);
              const obj10 = outer1_0(outer1_1[0]);
              c3 = outer1_0(outer1_1[3]).convertSpanToTransaction(outer1_2);
              if (c3) {
                logResult3 = 3;
                c5 = 1;
                obj6 = { value: null, done: false };
                obj6[0] = outer1_7(c3);
                return obj6;
              } else {
                const debug3 = outer1_0(outer1_1[0]).debug;
                debug3.warn("[AppStart] Failed to convert App Start span to transaction.");
              }
              const obj11 = outer1_0(outer1_1[3]);
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
      let closure_5 = arg0;
      const debug = flag(_undefined[0]).debug;
      debug.log("[AppStart] First started active root span id recorded.", closure_5);
    }
  };
  return obj;
};