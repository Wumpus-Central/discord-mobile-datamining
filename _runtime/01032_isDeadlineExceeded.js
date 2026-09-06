// _runtime/01032_isDeadlineExceeded.js
const require = arg1;
const dependencyMap = arg6;
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
const TimeToDisplay = "TimeToDisplay";
function isDeadlineExceeded(arg0) {
  return arg0 > 30000;
}
arg5.INTEGRATION_NAME = "TimeToDisplay";
arg5.timeToDisplayIntegration = () => {
  c0 = false;
  return {
    name: TimeToDisplay,
    afterAllSetup(getIntegrationByName) {
      const reactNavigationIntegration = callback(closure_1_1[0]).getReactNavigationIntegration(getIntegrationByName);
      let prop;
      if (null !== reactNavigationIntegration) {
        if (undefined !== reactNavigationIntegration) {
          prop = reactNavigationIntegration.options.enableTimeToInitialDisplayForPreloadedRoutes;
        }
      }
      closure_0 = null !== prop && undefined !== prop && prop;
    },
    processEvent(arg0) {
      closure_0 = arg0;
      return closure_1_2(undefined, undefined, undefined, function*() {
        let timestamp2 = 0;
        let tmp = closure_1_0;
        if ("transaction" !== closure_1_0.type) {
          return closure_1_0;
        }
        tmp = closure_1_0;
        let contexts = closure_1_0.contexts;
        tmp = null;
        if (null !== contexts) {
          if (undefined !== contexts) {
            let trace = contexts.trace;
          }
        }
        if (null !== trace) {
          if (undefined !== trace) {
            const span_id = trace.span_id;
          }
        }
        if (!span_id) {
          let debug = callback(closure_2_1[1]).debug;
          let _HermesInternal = HermesInternal;
          debug.warn("[" + closure_2_3 + "] No root span id found in transaction.");
          return closure_1_0;
        }
        let start_timestamp = closure_1_0.start_timestamp;
        if (!start_timestamp) {
          let debug2 = callback(closure_2_1[1]).debug;
          let _HermesInternal2 = HermesInternal;
          debug2.warn("[" + closure_2_3 + "] No transaction start timestamp found in transaction.");
          return closure_1_0;
        }
        let spans = closure_1_0.spans;
        if (!spans) {
          spans = [];
        }
        closure_1_0.spans = spans;
        let measurements = closure_1_0.measurements;
        if (!measurements) {
          measurements = {};
        }
        closure_1_0.measurements = measurements;
        let obj2 = { event: null, rootSpanId: null, transactionStartTimestampSeconds: null, enableTimeToInitialDisplayForPreloadedRoutes: null };
        obj2[0] = closure_1_0;
        obj2[1] = span_id;
        obj2[2] = start_timestamp;
        obj2[3] = closure_1_0;
        closure_5 = yield (function addTimeToInitialDisplay(arg0) {
          ({ event: timestamp2, rootSpanId: timestamp3, transactionStartTimestampSeconds: timestamp, enableTimeToInitialDisplayForPreloadedRoutes: c3 } = arg0);
          c4 = undefined;
          return timestamp(undefined, undefined, undefined, function*() {
            if (closure_3 === 2) {
              closure_3 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp4 === 3) {
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
                closure_3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    closure_3 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    closure_3 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_0 = undefined;
                    closure_1 = undefined;
                    let NATIVE = closure_1_0(found[2]).NATIVE;
                    const _HermesInternal5 = HermesInternal;
                    c2 = 1;
                    closure_3 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = NATIVE.popTimeToDisplayFor("ttid-" + found);
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  closure_3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  closure_3 = 3;
                  let obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_0 = arg1;
                  let spans = closure_0.spans;
                  if (!spans) {
                    spans = [];
                  }
                  closure_0.spans = spans;
                  spans = closure_0.spans;
                  let debug;
                  found = undefined;
                  if (null !== spans) {
                    if (debug !== spans) {
                      found = spans.find(() => { ... });
                    }
                  }
                  if (found) {
                    if (debug === found.status) {
                      if (!closure_1_0) {
                        debug = closure_1_0(found[1]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[" + c3 + "] Ttid span already exists and is ok.", found);
                        closure_3 = 3;
                      }
                    }
                  }
                  if (!closure_0) {
                    let str2 = closure_1_0(found[1]).debug;
                    let _HermesInternal2 = HermesInternal;
                    str2.log("[" + c3 + "] No manual ttid end timestamp found for span " + found + ".");
                    obj = { event: null, rootSpanId: null, transactionStartTimestampSeconds: null, enableTimeToInitialDisplayForPreloadedRoutes: null };
                    obj[0] = closure_1_0;
                    obj[1] = found;
                    obj[2] = c2;
                    obj[3] = c3;
                    (function addAutomaticTimeToInitialDisplay() { ... })(obj);
                  }
                  let status;
                  if (null != closure_1) {
                    status = closure_1.status;
                  }
                  if (!status) {
                    obj1 = closure_1_0(found[4]);
                    let obj3 = { op: null, description: "Time To Initial Display", start_timestamp: null, timestamp: null, origin: null, parent_span_id: null, data: null };
                    obj3[0] = closure_1_0(found[3]).UI_LOAD_INITIAL_DISPLAY;
                    obj3[2] = c2;
                    obj3[3] = closure_0;
                    obj3[4] = closure_1_0(found[5]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY;
                    obj3[5] = closure_1;
                    let obj4 = {};
                    obj4[closure_1_0(found[6]).SPAN_THREAD_NAME] = closure_1_0(found[6]).SPAN_THREAD_NAME_JAVASCRIPT;
                    obj3[6] = obj4;
                    closure_1 = obj1.createSpanJSON(obj3);
                    let debug2 = closure_1_0(found[1]).debug;
                    let _HermesInternal3 = HermesInternal;
                    debug2.log("[" + c3 + "] Added ttid span to transaction.", closure_1);
                    const spans1 = closure_0.spans;
                    spans1.push(closure_1);
                    let tmp73 = closure_1;
                  } else {
                    str2 = "ok";
                  }
                  closure_1.status = str2;
                  closure_1.timestamp = closure_0;
                  debug = closure_1_0(found[1]).debug;
                  str2 = debug.log;
                  let _HermesInternal4 = HermesInternal;
                  str2("[" + c3 + "] Updated existing ttid span.", closure_1);
                  tmp73 = closure_1;
                  const tmp95 = closure_0;
                }
              } catch (tmp87) {
                closure_3 = tmp;
                throw tmp87;
              }
            }
          });
        })(obj2);
        const obj7 = { event: null, rootSpanId: null, transactionStartTimestampSeconds: null, ttidSpan: null };
        obj7[0] = callback;
        obj7[1] = c3;
        obj7[2] = start_timestamp;
        obj7[3] = closure_5;
        closure_6 = yield (function addTimeToFullDisplay(arg0) {
          ({ event: timestamp2, rootSpanId: timestamp3, transactionStartTimestampSeconds: timestamp, ttidSpan: c3 } = arg0);
          c4 = undefined;
          return timestamp(undefined, undefined, undefined, function*() {
            if (c3 === 2) {
              c3 = 3;
              HermesBuiltin.throwTypeError();
            } else if (tmp5 === 3) {
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
                c3 = 2;
                if (0 === timestamp) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    obj = { value: null, done: true };
                    obj[0] = arg1;
                    return obj;
                  } else {
                    let found = tmp2;
                    closure_0 = tmp3;
                    closure_0 = undefined;
                    found = undefined;
                    timestamp = undefined;
                    c3 = undefined;
                    const NATIVE = closure_1_0(status[2]).NATIVE;
                    const _HermesInternal3 = HermesInternal;
                    timestamp = 1;
                    c3 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = NATIVE.popTimeToDisplayFor("ttfd-" + status);
                    return obj1;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else {
                  closure_0 = arg1;
                  if (c3) {
                    if (closure_0) {
                      let spans = closure_0.spans;
                      if (!spans) {
                        spans = [];
                      }
                      closure_0.spans = spans;
                      spans = closure_0.spans;
                      let debug;
                      found = undefined;
                      if (null !== spans) {
                        if (debug !== spans) {
                          found = spans.find(() => { ... });
                        }
                      }
                      timestamp = closure_0;
                      timestamp = closure_3.timestamp;
                      if (timestamp) {
                        timestamp = closure_0 < c3.timestamp;
                      }
                      if (timestamp) {
                        timestamp = c3.timestamp;
                      }
                      if (timestamp) {
                        timestamp = closure_3.timestamp;
                      }
                      let str = c2 - timestamp;
                      closure_3 = 1000 * str;
                      status = undefined;
                      if (null != status) {
                        status = found.status;
                      }
                      if (!status) {
                        obj = closure_1_0(status[4]);
                        let str2 = "ok";
                        if (closure_1_4(closure_3)) {
                          str2 = "deadline_exceeded";
                        }
                        const obj3 = { status: null, op: null, description: "Time To Full Display", start_timestamp: null, timestamp: null, origin: null, parent_span_id: null, data: null };
                        obj3[0] = str2;
                        obj3[1] = closure_1_0(status[3]).UI_LOAD_FULL_DISPLAY;
                        obj3[3] = c2;
                        obj3[4] = c2;
                        obj3[5] = closure_1_0(status[5]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY;
                        obj3[6] = status;
                        const obj4 = {};
                        obj4[closure_1_0(status[6]).SPAN_THREAD_NAME] = closure_1_0(status[6]).SPAN_THREAD_NAME_JAVASCRIPT;
                        obj3[7] = obj4;
                        status = obj.createSpanJSON(obj3);
                        debug = closure_1_0(status[1]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[" + closure_3 + "] Added ttfd span to transaction.", status);
                        const spans1 = closure_1_0.spans;
                        spans1.push(status);
                        c3 = 3;
                      } else {
                        str = "ok";
                      }
                      status.status = str;
                      status.timestamp = c2;
                      debug = closure_1_0(status[1]).debug;
                      str = debug.log;
                      const _HermesInternal2 = HermesInternal;
                      str("[" + closure_3 + "] Updated existing ttfd span.", status);
                      const tmp8 = closure_0;
                    }
                  }
                  c3 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp83) {
                c3 = tmp;
                throw tmp83;
              }
            }
          });
        })(obj7);
        tmp = closure_5;
        tmp = null;
        if (null != closure_5) {
          start_timestamp = closure_5.start_timestamp;
        }
        if (start_timestamp) {
          let timestamp;
          if (null != closure_5) {
            timestamp = closure_5.timestamp;
          }
          start_timestamp = timestamp;
        }
        if (start_timestamp) {
          let obj = { value: null, unit: "millisecond" };
          obj[0] = 1000 * (closure_5.timestamp - closure_5.start_timestamp);
          timestamp2.measurements.time_to_initial_display = obj;
        }
        if (null != closure_6) {
          const start_timestamp1 = closure_6.start_timestamp;
        }
        if (start_timestamp1) {
          let timestamp1;
          if (null != closure_6) {
            timestamp1 = closure_6.timestamp;
          }
          if (timestamp1) {
            closure_7 = 1000 * (closure_6.timestamp - closure_6.start_timestamp);
            if (closure_2_4(closure_7)) {
              if (timestamp2.measurements.time_to_initial_display) {
                timestamp2.measurements.time_to_full_display = timestamp2.measurements.time_to_initial_display;
              }
            } else {
              const obj10 = { value: null, unit: "millisecond" };
              obj10[0] = closure_7;
              timestamp2.measurements.time_to_full_display = obj10;
            }
          }
        }
        if (null != closure_5) {
          timestamp2 = closure_5.timestamp;
        }
        let num6 = -1;
        if (null !== timestamp2) {
          num6 = -1;
          if (undefined !== timestamp2) {
            num6 = timestamp2;
          }
        }
        if (null != closure_6) {
          const timestamp3 = closure_6.timestamp;
        }
        let num7 = -1;
        if (null !== timestamp3) {
          num7 = -1;
          if (undefined !== timestamp3) {
            num7 = timestamp3;
          }
        }
        let num8 = -1;
        if (null !== timestamp) {
          num8 = -1;
          if (undefined !== timestamp) {
            num8 = timestamp;
          }
        }
        closure_8 = Math.max(num6, num7, num8);
        if (-1 !== closure_8) {
          callback.timestamp = closure_8;
        }
        return timestamp2;
      });
    }
  };
};