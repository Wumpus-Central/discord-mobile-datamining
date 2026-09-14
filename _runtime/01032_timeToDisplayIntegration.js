// _runtime/01032_timeToDisplayIntegration.js
import _mod1033 from "metro/01033__.js";

require = arg1;
let dependencyMap = arg6;
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
    return new _Promise((fn, arg1) => {
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
          let tmp1 = done.value;
          closure_0 = tmp1;
          if (!(tmp1 instanceof Promise)) {
            tmp1 = new tmp((fn) => {
              fn(value);
            });
          }
          tmp1.then(fulfilled, iter);
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
        let tmp32 = value;
        if (!(value instanceof fulfilled)) {
          tmp32 = new tmp3((fn) => {
            fn(value);
          });
        }
        tmp32.then(fulfilled, rejected);
      }
    });
  };
}
const TimeToDisplay = "TimeToDisplay";
function isDeadlineExceeded(arg0) {
  return arg0 > 30000;
}

export const INTEGRATION_NAME = "TimeToDisplay";
export () => {
  closure_0 = false;
  return {
    name: TimeToDisplay,
    afterAllSetup(getIntegrationByName) {
      const reactNavigationIntegration = _mod1033.getReactNavigationIntegration(getIntegrationByName);
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
      return fn(undefined, undefined, undefined, function*() {
        const v0 = 0;
        if ("transaction" !== v0.type) {
          return v0;
        }
        let contexts = v0.contexts;
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
        closure_128_3 = span_id;
        if (!span_id) {
          let debug = v0(682).debug;
          let _HermesInternal = HermesInternal;
          debug.warn("[" + TimeToDisplay + "] No root span id found in transaction.");
          return v0;
        }
        const start_timestamp = v0.start_timestamp;
        closure_128_4 = start_timestamp;
        if (!start_timestamp) {
          let debug2 = v0(682).debug;
          let _HermesInternal2 = HermesInternal;
          debug2.warn("[" + TimeToDisplay + "] No transaction start timestamp found in transaction.");
          return v0;
        }
        let spans = v0.spans;
        if (!spans) {
          spans = [];
        }
        v0.spans = spans;
        let measurements = v0.measurements;
        if (!measurements) {
          measurements = {};
        }
        v0.measurements = measurements;
        yield (function addTimeToInitialDisplay(arg0) {
          ({ event: closure_0, rootSpanId: closure_1, transactionStartTimestampSeconds: closure_2, enableTimeToInitialDisplayForPreloadedRoutes: closure_3 } = arg0);
          c4 = undefined;
          return closure_2(undefined, undefined, undefined, function*() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                let obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    let obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    let NATIVE = tmp2(tmp5[2]).NATIVE;
                    const _HermesInternal5 = HermesInternal;
                    c2 = 1;
                    c3 = 1;
                    const obj5 = { value: NATIVE.popTimeToDisplayFor("ttid-" + closure_2_1), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  let obj6 = { value, done: true };
                  return obj6;
                } else {
                  closure_128_0 = value;
                  let spans1 = closure_129_0.spans;
                  if (!spans1) {
                    spans1 = [];
                  }
                  closure_129_0.spans = spans1;
                  let spans = closure_129_0.spans;
                  closure_129_4 = spans;
                  let debug1;
                  let found;
                  if (null !== spans) {
                    if (debug1 !== closure_129_4) {
                      found = closure_129_4.find(() => { ... });
                    }
                  }
                  closure_128_1 = found;
                  if (closure_128_1) {
                    if (debug1 === closure_128_1.status) {
                      if (!closure_128_0) {
                        let debug = tmp2(tmp5[1]).debug;
                        let _HermesInternal = HermesInternal;
                        debug.log("[" + c3 + "] Ttid span already exists and is ok.", closure_128_1);
                        c3 = 3;
                      }
                    }
                  }
                  if (!closure_128_0) {
                    let str2 = tmp2(tmp5[1]).debug;
                    let _HermesInternal2 = HermesInternal;
                    str2.log("[" + c3 + "] No manual ttid end timestamp found for span " + closure_129_1 + ".");
                    let obj = { event: closure_129_0, rootSpanId: closure_129_1, transactionStartTimestampSeconds: closure_129_2, enableTimeToInitialDisplayForPreloadedRoutes: closure_129_3 };
                    (function addAutomaticTimeToInitialDisplay() { ... })(obj);
                  }
                  let status;
                  if (null != closure_128_1) {
                    status = closure_128_1.status;
                  }
                  if (!status) {
                    let obj7 = { op: tmp2(tmp5[3]).UI_LOAD_INITIAL_DISPLAY, description: "Time To Initial Display", start_timestamp: closure_129_2, timestamp: closure_128_0, origin: tmp2(tmp5[5]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY, parent_span_id: closure_129_1, data: null };
                    let obj8 = {};
                    obj8[tmp2(tmp5[6]).SPAN_THREAD_NAME] = tmp2(tmp5[6]).SPAN_THREAD_NAME_JAVASCRIPT;
                    obj7.data = obj8;
                    closure_128_1 = tmp2(tmp5[4]).createSpanJSON(obj7);
                    let debug2 = tmp2(tmp5[1]).debug;
                    let _HermesInternal3 = HermesInternal;
                    debug2.log("[" + c3 + "] Added ttid span to transaction.", closure_128_1);
                    const spans2 = closure_129_0.spans;
                    spans2.push(closure_128_1);
                    let obj2 = tmp2(tmp5[4]);
                  } else {
                    str2 = "ok";
                  }
                  closure_128_1.status = str2;
                  closure_128_1.timestamp = closure_128_0;
                  debug1 = tmp2(tmp5[1]).debug;
                  str2 = debug1.log;
                  let _HermesInternal4 = HermesInternal;
                  str2("[" + c3 + "] Updated existing ttid span.", closure_128_1);
                }
              } catch (tmp87) {
                c3 = tmp;
                throw tmp87;
              }
            }
          });
        })({ event: v0, rootSpanId: span_id, transactionStartTimestampSeconds: start_timestamp, enableTimeToInitialDisplayForPreloadedRoutes: v0 });
        closure_128_5 = value;
        yield (function addTimeToFullDisplay(arg0) {
          ({ event: closure_0, rootSpanId: closure_1, transactionStartTimestampSeconds: closure_2, ttidSpan: closure_3 } = arg0);
          c4 = undefined;
          return closure_2(undefined, undefined, undefined, function*() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp5 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "HermesInternal", done: null };
              }
            } else {
              try {
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_128_0 = undefined;
                    closure_128_1 = undefined;
                    let timestamp2;
                    closure_128_3 = undefined;
                    const NATIVE = tmp3(tmp2[2]).NATIVE;
                    const _HermesInternal3 = HermesInternal;
                    c2 = 1;
                    c3 = 1;
                    const obj4 = { value: NATIVE.popTimeToDisplayFor("ttfd-" + closure_2_1), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  closure_128_0 = value;
                  if (closure_129_3) {
                    if (closure_128_0) {
                      let spans1 = closure_129_0.spans;
                      if (!spans1) {
                        spans1 = [];
                      }
                      closure_129_0.spans = spans1;
                      const spans = closure_129_0.spans;
                      closure_129_4 = spans;
                      let debug1;
                      let found;
                      if (null !== spans) {
                        if (debug1 !== closure_129_4) {
                          found = closure_129_4.find(() => { ... });
                        }
                      }
                      closure_128_1 = found;
                      timestamp2 = closure_128_0;
                      let timestamp = closure_129_3.timestamp;
                      if (timestamp) {
                        timestamp = closure_128_0 < closure_129_3.timestamp;
                      }
                      if (timestamp) {
                        timestamp = closure_129_3.timestamp;
                      }
                      if (timestamp) {
                        timestamp2 = closure_129_3.timestamp;
                      }
                      let str = timestamp2 - closure_129_2;
                      closure_128_3 = 1000 * str;
                      let status;
                      if (null != closure_128_1) {
                        status = closure_128_1.status;
                      }
                      if (!status) {
                        let str2 = "ok";
                        if (_undefined(closure_128_3)) {
                          str2 = "deadline_exceeded";
                        }
                        const obj6 = { status: str2, op: tmp3(tmp2[3]).UI_LOAD_FULL_DISPLAY, description: "Time To Full Display", start_timestamp: closure_129_2, timestamp: timestamp2, origin: tmp3(tmp2[5]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY, parent_span_id: closure_129_1, data: null };
                        const obj7 = {};
                        obj7[tmp3(tmp2[6]).SPAN_THREAD_NAME] = tmp3(tmp2[6]).SPAN_THREAD_NAME_JAVASCRIPT;
                        obj6.data = obj7;
                        closure_128_1 = tmp3(tmp2[4]).createSpanJSON(obj6);
                        const debug = tmp3(tmp2[1]).debug;
                        const _HermesInternal = HermesInternal;
                        debug.log("[" + c3 + "] Added ttfd span to transaction.", closure_128_1);
                        const spans2 = closure_129_0.spans;
                        spans2.push(closure_128_1);
                        c3 = 3;
                        const obj = tmp3(tmp2[4]);
                      } else {
                        str = "ok";
                      }
                      closure_128_1.status = str;
                      closure_128_1.timestamp = timestamp2;
                      debug1 = tmp3(tmp2[1]).debug;
                      str = debug1.log;
                      const _HermesInternal2 = HermesInternal;
                      str("[" + c3 + "] Updated existing ttfd span.", closure_128_1);
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
        })({ event: closure_129_0, rootSpanId: closure_128_3, transactionStartTimestampSeconds: closure_128_4, ttidSpan: closure_128_5 });
        closure_128_6 = value;
        if (null != closure_128_5) {
          let start_timestamp1 = closure_128_5.start_timestamp;
        }
        if (start_timestamp1) {
          let timestamp1;
          if (null != closure_128_5) {
            timestamp1 = closure_128_5.timestamp;
          }
          start_timestamp1 = timestamp1;
        }
        if (start_timestamp1) {
          closure_129_0.measurements.time_to_initial_display = { value: 1000 * (closure_128_5.timestamp - closure_128_5.start_timestamp), unit: "millisecond" };
        }
        if (null != closure_128_6) {
          const start_timestamp2 = closure_128_6.start_timestamp;
        }
        if (start_timestamp2) {
          let timestamp2;
          if (null != closure_128_6) {
            timestamp2 = closure_128_6.timestamp;
          }
          if (timestamp2) {
            closure_128_7 = 1000 * (closure_128_6.timestamp - closure_128_6.start_timestamp);
            if (isDeadlineExceeded(closure_128_7)) {
              if (closure_129_0.measurements.time_to_initial_display) {
                closure_129_0.measurements.time_to_full_display = closure_129_0.measurements.time_to_initial_display;
              }
            } else {
              closure_129_0.measurements.time_to_full_display = { value: closure_128_7, unit: "millisecond" };
            }
          }
        }
        if (null != closure_128_5) {
          const timestamp3 = closure_128_5.timestamp;
        }
        closure_128_0 = timestamp3;
        let num6 = -1;
        if (null !== timestamp3) {
          num6 = -1;
          if (undefined !== closure_128_0) {
            num6 = closure_128_0;
          }
        }
        if (null != closure_128_6) {
          const timestamp4 = closure_128_6.timestamp;
        }
        closure_128_1 = timestamp4;
        let num7 = -1;
        if (null !== timestamp4) {
          num7 = -1;
          if (undefined !== closure_128_1) {
            num7 = closure_128_1;
          }
        }
        let timestamp = closure_129_0.timestamp;
        closure_128_2 = timestamp;
        let num8 = -1;
        if (null !== timestamp) {
          num8 = -1;
          if (undefined !== closure_128_2) {
            num8 = closure_128_2;
          }
        }
        closure_128_8 = Math.max(num6, num7, num8);
        if (-1 !== closure_128_8) {
          closure_129_0.timestamp = closure_128_8;
        }
        return closure_129_0;
      });
    }
  };
}