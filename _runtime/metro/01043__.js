// _runtime/metro/01043__.js
import _mod1044 from "01044__.js";

let c2, c3;

const fn =
  (this && this.__awaiter) ||
  ((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let _Promise = arg2;
    const Promise = arg2;
    let closure_3 = arg3;
    if (!arg2) {
      let tmp = globalThis;
      _Promise = Promise;
    }
    const _Promise1 = new _Promise(function (fn, arg1) {
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
const TimeToDisplay = "TimeToDisplay";
function isDeadlineExceeded(arg0) {
  return arg0 > 30000;
}

export const INTEGRATION_NAME = "TimeToDisplay";
export const timeToDisplayIntegration = () => {
  let closure_0 = false;
  let obj = {
    name: TimeToDisplay,
    afterAllSetup(getIntegrationByName) {
      const obj = _mod1044;
      const reactNavigationIntegration = obj.getReactNavigationIntegration(getIntegrationByName);
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
      return fn(undefined, undefined, undefined, function* () {
        let span_id;
        let start_timestamp1;
        let start_timestamp2;
        let timestamp3;
        let timestamp4;
        let trace;
        let value;
        function addTimeToInitialDisplay(arg0) {
          let closure_2;
          let closure_3;
          ({
            event: closure_0,
            rootSpanId: closure_1,
            transactionStartTimestampSeconds: closure_2,
            enableTimeToInitialDisplayForPreloadedRoutes: closure_3,
          } = arg0);
          let c4;
          return closure_2(undefined, undefined, undefined, function* () {
            let obj8;
            function addAutomaticTimeToInitialDisplay(arg0) {
              let closure_2;
              let closure_3;
              ({
                event: closure_0,
                rootSpanId: closure_1,
                transactionStartTimestampSeconds: closure_2,
                enableTimeToInitialDisplayForPreloadedRoutes: closure_3,
              } = arg0);
              c4 = undefined;
              let c5;
              let c6;
              let c7;
              let c8;
              let c9;
              return closure_2(undefined, undefined, undefined, function* () {
                let obj5;
                let obj9;
                let str6;
                if (c3 === 2) {
                  c3 = 3;
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
                  try {
                    let tmp;
                    let view_names;
                    let first;
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
                        tmp = undefined;
                        closure_1 = undefined;
                        timestamp = undefined;
                        view_names = undefined;
                        first = undefined;
                        value = undefined;
                        const NATIVE = tmp(closure_1[2]).NATIVE;
                        const _HermesInternal4 = HermesInternal;
                        c2 = 1;
                        c3 = 1;
                        const obj4 = {
                          value: NATIVE.popTimeToDisplayFor("ttid-navigation-" + closure_2_1),
                          done: false,
                        };
                        return obj4;
                      }
                    } else if (1 === c2) {
                      if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj6 = { value, done: true };
                        return obj6;
                      } else {
                        tmp = value;
                        c2 = 2;
                        c3 = 1;
                        const obj7 = { value: obj5.getTimeToInitialDisplayFallback(parent_span_id), done: false };
                        obj5 = tmp(closure_1[7]);
                        return obj7;
                      }
                    } else if (arg0 === 1) {
                      c3 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c3 = 3;
                      const obj8 = { value, done: true };
                      return obj8;
                    } else {
                      let tmp25;
                      closure_1 = value;
                      const contexts2 = closure_129_0.contexts;
                      let trace;
                      if (null !== contexts2) {
                        if (undefined !== contexts2) {
                          trace = contexts2.trace;
                        }
                      }
                      let data;
                      if (null !== trace) {
                        if (undefined !== trace) {
                          data = trace.data;
                        }
                      }
                      let tmp12;
                      if (null !== data) {
                        if (undefined !== data) {
                          tmp12 = data[tmp(undefined, closure_1[8]).SEMANTIC_ATTRIBUTE_ROUTE_HAS_BEEN_SEEN];
                        }
                      }
                      if (tmp12) {
                        if (!closure_129_3) {
                          const debug = tmp(closure_1[1]).debug;
                          const _HermesInternal = HermesInternal;
                          debug.log(
                            "[" +
                              c3 +
                              "] Route has been seen and time to initial display is disabled for preloaded routes.",
                          );
                        }
                        c3 = 3;
                        return { value: "IconComponent", done: null };
                      }
                      if (null != tmp) {
                        tmp25 = tmp;
                      } else {
                        tmp25 = closure_1;
                      }
                      timestamp = tmp25;
                      if (timestamp) {
                        const contexts = closure_129_0.contexts;
                        let app;
                        if (null !== contexts) {
                          if (undefined !== contexts) {
                            app = contexts.app;
                          }
                        }
                        view_names = undefined;
                        if (null !== app) {
                          if (undefined !== app) {
                            view_names = app.view_names;
                          }
                        }
                        const _Array = Array;
                        if (Array.isArray(view_names)) {
                          first = tmp47[0];
                        } else {
                          first = tmp47;
                        }
                        const obj = {
                          op: tmp(closure_1[3]).UI_LOAD_INITIAL_DISPLAY,
                          description: str6,
                          start_timestamp,
                          timestamp,
                          origin: tmp(closure_1[5]).SPAN_ORIGIN_AUTO_UI_TIME_TO_DISPLAY,
                          parent_span_id,
                          data: obj9,
                        };
                        const createSpanJSON = tmp(closure_1[4]).createSpanJSON;
                        const tmp53 = tmp(closure_1[4]);
                        str6 = "Time To Initial Display";
                        if (first) {
                          const _HermesInternal3 = HermesInternal;
                          str6 = "" + first + " initial display";
                        }
                        obj9 = {};
                        obj9[tmp(closure_1[6]).SPAN_THREAD_NAME] = tmp(closure_1[6]).SPAN_THREAD_NAME_JAVASCRIPT;
                        value = createSpanJSON(obj);
                        const spans = closure_129_0.spans;
                        if (null !== spans) {
                          let items;
                          if (undefined !== spans) {
                            items = spans;
                          }
                          tmp70.spans = items;
                          const spans1 = closure_129_0.spans;
                          spans1.push(value);
                          c3 = 3;
                          const obj10 = { value, done: true };
                          return obj10;
                        }
                        items = [];
                      } else {
                        const debug2 = tmp(closure_1[1]).debug;
                        const _HermesInternal2 = HermesInternal;
                        debug2.log(
                          "[" + c3 + "] No automatic ttid end timestamp found for span " + parent_span_id + ".",
                        );
                      }
                    }
                  } catch (tmp84) {
                    c3 = 3;
                    throw tmp84;
                  }
                }
              });
            }
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                let tmp4;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    let obj3 = { value, done: true };
                    return obj3;
                  } else {
                    timestamp = undefined;
                    tmp4 = undefined;
                    let NATIVE = timestamp(tmp4[2]).NATIVE;
                    const _HermesInternal5 = HermesInternal;
                    c2 = 1;
                    c3 = 1;
                    let obj4 = { value: NATIVE.popTimeToDisplayFor("ttid-" + closure_1), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  let obj5 = { value, done: true };
                  return obj5;
                } else {
                  let tmp41;
                  timestamp = value;
                  let spans1 = event.spans || [];
                  event.spans = spans1;
                  let spans = event.spans;
                  let found;
                  if (null !== spans) {
                    if (undefined !== spans) {
                      let tmp12 = spans;
                      found = spans.find((op) => op.op === timestamp(closure_1_1[3]).UI_LOAD_INITIAL_DISPLAY);
                    }
                  }
                  tmp4 = found;
                  const tmp14 = tmp4;
                  if (tmp14) {
                    if (undefined === tmp4.status) {
                      let tmp27;
                      const tmp19 = timestamp;
                      if (!tmp19) {
                        let debug = timestamp(tmp4[1]).debug;
                        const tmp24 = globalThis;
                        let _HermesInternal = HermesInternal;
                        const str2 = "] Ttid span already exists and is ok.";
                        const str3 = "[";
                        let tmp25 = tmp4;
                        const logResult = debug.log("[" + c3 + "] Ttid span already exists and is ok.", tmp4);
                        tmp27 = tmp4;
                      }
                      c3 = 3;
                      let obj6 = { value: tmp27, done: true };
                      return obj6;
                    } else {
                      const str = "ok";
                    }
                  }
                  const tmp29 = timestamp;
                  if (tmp29) {
                    let status;
                    if (null != tmp4) {
                      status = tmp4.status;
                    }
                    if (status) {
                      let tmp73;
                      const tmp47 = tmp4;
                      const str7 = "ok";
                      if ("ok" !== tmp4.status) {
                        tmp4.status = "ok";
                        tmp4.timestamp = timestamp;
                        const debug4 = timestamp(tmp4[1]).debug;
                        const tmp82 = globalThis;
                        let _HermesInternal4 = HermesInternal;
                        const str10 = "] Updated existing ttid span.";
                        const logResult1 = debug4.log("[" + c3 + "] Updated existing ttid span.", tmp4);
                        tmp73 = tmp4;
                      }
                      tmp41 = tmp73;
                    }
                    const tmp52 = timestamp(tmp4[4]);
                    let obj7 = {
                      op: timestamp(tmp4[3]).UI_LOAD_INITIAL_DISPLAY,
                      description: "Time To Initial Display",
                      start_timestamp: transactionStartTimestampSeconds,
                      timestamp,
                      origin: timestamp(tmp4[5]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY,
                      parent_span_id: rootSpanId,
                      data: obj8,
                    };
                    let tmp53 = timestamp;
                    let createSpanJSON = tmp52.createSpanJSON;
                    obj8 = {};
                    obj8[timestamp(tmp4[6]).SPAN_THREAD_NAME] = timestamp(tmp4[6]).SPAN_THREAD_NAME_JAVASCRIPT;
                    tmp4 = createSpanJSON(obj7);
                    const debug3 = timestamp(tmp4[1]).debug;
                    const tmp67 = globalThis;
                    let _HermesInternal3 = HermesInternal;
                    const str8 = "] Added ttid span to transaction.";
                    const str9 = "[";
                    debug3.log("[" + c3 + "] Added ttid span to transaction.", tmp4);
                    const spans2 = event.spans;
                    const arr = spans2.push(tmp4);
                    tmp73 = tmp4;
                  } else {
                    let debug2 = timestamp(tmp4[1]).debug;
                    let _HermesInternal2 = HermesInternal;
                    const str4 = ".";
                    const str5 = "] No manual ttid end timestamp found for span ";
                    let str6 = "[";
                    debug2.log("[" + c3 + "] No manual ttid end timestamp found for span " + rootSpanId + ".");
                    let obj = {
                      event,
                      rootSpanId,
                      transactionStartTimestampSeconds,
                      enableTimeToInitialDisplayForPreloadedRoutes: closure_129_3,
                    };
                    tmp41 = addAutomaticTimeToInitialDisplay(obj);
                  }
                  tmp27 = tmp41;
                }
              } catch (tmp85) {
                c3 = 3;
                throw tmp85;
              }
            }
          });
        }
        function addTimeToFullDisplay(arg0) {
          let _undefined;
          let closure_2;
          let closure_3;
          ({
            event: closure_0,
            rootSpanId: closure_1,
            transactionStartTimestampSeconds: closure_2,
            ttidSpan: closure_3,
          } = arg0);
          let c4;
          return closure_2(undefined, undefined, undefined, function* () {
            let obj7;
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
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
                let tmp2;
                let tmp;
                let timestamp2;
                let closure_3;
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
                    tmp2 = undefined;
                    tmp = undefined;
                    timestamp2 = undefined;
                    closure_3 = undefined;
                    const NATIVE = tmp2(tmp[2]).NATIVE;
                    const _HermesInternal3 = HermesInternal;
                    c2 = 1;
                    c3 = 1;
                    const obj4 = { value: NATIVE.popTimeToDisplayFor("ttfd-" + closure_1), done: false };
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
                  tmp2 = value;
                  if (closure_129_3) {
                    const tmp6 = tmp2;
                    if (tmp6) {
                      const spans1 = closure_129_0.spans || [];
                      closure_129_0.spans = spans1;
                      const spans = closure_129_0.spans;
                      let found;
                      if (null !== spans) {
                        if (undefined !== spans) {
                          found = spans.find((op) => op.op === closure_1_0(closure_1_1[3]).UI_LOAD_FULL_DISPLAY);
                        }
                      }
                      tmp = found;
                      timestamp2 = tmp2;
                      timestamp = closure_129_3.timestamp && tmp2 < closure_129_3.timestamp && closure_129_3.timestamp;
                      if (timestamp) {
                        timestamp2 = closure_129_3.timestamp;
                      }
                      closure_3 = 1000 * (timestamp2 - start_timestamp);
                      let status;
                      if (null != tmp) {
                        status = tmp.status;
                      }
                      if (status) {
                        let tmp69;
                        if ("ok" !== tmp.status) {
                          tmp.status = "ok";
                          tmp.timestamp = timestamp2;
                          const debug2 = tmp2(tmp[1]).debug;
                          const _HermesInternal2 = HermesInternal;
                          debug2.log("[" + c3 + "] Updated existing ttfd span.", tmp);
                          tmp69 = tmp;
                        }
                        c3 = 3;
                        const obj6 = { value: tmp69, done: true };
                        return obj6;
                      }
                      const createSpanJSON = tmp2(tmp[4]).createSpanJSON;
                      let str2 = "ok";
                      const tmp44 = tmp2(tmp[4]);
                      if (_undefined(closure_3)) {
                        str2 = "deadline_exceeded";
                      }
                      const obj = {
                        status: str2,
                        op: tmp2(tmp[3]).UI_LOAD_FULL_DISPLAY,
                        description: "Time To Full Display",
                        start_timestamp,
                        timestamp: timestamp2,
                        origin: tmp2(tmp[5]).SPAN_ORIGIN_MANUAL_UI_TIME_TO_DISPLAY,
                        parent_span_id,
                        data: obj7,
                      };
                      obj7 = {};
                      obj7[tmp2(tmp[6]).SPAN_THREAD_NAME] = tmp2(tmp[6]).SPAN_THREAD_NAME_JAVASCRIPT;
                      tmp = createSpanJSON(obj);
                      const debug = tmp2(tmp[1]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.log("[" + c3 + "] Added ttfd span to transaction.", tmp);
                      const spans2 = closure_129_0.spans;
                      spans2.push(tmp);
                      tmp69 = tmp;
                    }
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp81) {
                c3 = 3;
                throw tmp81;
              }
            }
          });
        }
        let num15 = 1;
        if (arg0 === 1) {
          throw value;
        }
        if (arg0 === 2) {
          return value;
        }
        const v0 = 0;
        let str6 = "transaction";
        if ("transaction" !== v0.type) {
          return v0;
        }
        let contexts = v0.contexts;
        if (null !== contexts) {
          if (undefined !== contexts) {
            trace = contexts.trace;
          }
        }
        if (null !== trace) {
          if (undefined !== trace) {
            span_id = trace.span_id;
          }
        }
        if (!span_id) {
          let tmp75 = v0;
          let debug = v0(dependencyMap[1]).debug;
          const tmp78 = globalThis;
          let _HermesInternal = HermesInternal;
          let str = "] No root span id found in transaction.";
          let str2 = "[";
          debug.warn("[" + TimeToDisplay + "] No root span id found in transaction.");
          return v0;
        }
        const start_timestamp = v0.start_timestamp;
        if (!start_timestamp) {
          let tmp81 = v0;
          let debug2 = v0(dependencyMap[1]).debug;
          const tmp84 = globalThis;
          let _HermesInternal2 = HermesInternal;
          let str3 = "] No transaction start timestamp found in transaction.";
          let str4 = "[";
          debug2.warn("[" + TimeToDisplay + "] No transaction start timestamp found in transaction.");
          return v0;
        }
        let spans = v0.spans;
        let tmp86 = v0;
        if (!spans) {
          spans = [];
        }
        tmp86.spans = spans;
        let measurements = v0.measurements;
        const tmp88 = v0;
        if (!measurements) {
          measurements = {};
        }
        tmp88.measurements = measurements;
        let obj5 = {
          event: v0,
          rootSpanId: span_id,
          transactionStartTimestampSeconds: start_timestamp,
          enableTimeToInitialDisplayForPreloadedRoutes: v0,
        };
        yield addTimeToInitialDisplay(obj5);
        const ttidSpan = value;
        let obj10 = {
          event: closure_129_0,
          rootSpanId: span_id,
          transactionStartTimestampSeconds: start_timestamp,
          ttidSpan,
        };
        let num12 = 1;
        yield addTimeToFullDisplay(obj10);
        let closure_6 = value;
        if (null != ttidSpan) {
          let tmp4 = v0;
          let tmp5 = ttidSpan;
          start_timestamp1 = ttidSpan.start_timestamp;
        }
        if (start_timestamp1) {
          let timestamp1;
          if (null != ttidSpan) {
            let tmp11 = ttidSpan;
            timestamp1 = ttidSpan.timestamp;
          }
          start_timestamp1 = timestamp1;
        }
        if (start_timestamp1) {
          let tmp12 = v0;
          let tmp13 = closure_1;
          let obj = { value: 1000 * (ttidSpan.timestamp - ttidSpan.start_timestamp), unit: "millisecond" };
          let tmp15 = ttidSpan;
          let num3 = 1000;
          closure_129_0.measurements.time_to_initial_display = obj;
        }
        if (null != closure_6) {
          let tmp20 = v0;
          start_timestamp2 = closure_6.start_timestamp;
        }
        if (start_timestamp2) {
          let tmp22 = v0;
          let tmp23 = closure_6;
          let timestamp2;
          if (null != closure_6) {
            let tmp25 = v0;
            timestamp2 = closure_6.timestamp;
          }
          if (timestamp2) {
            let tmp27 = v0;
            let tmp28 = closure_1;
            let tmp29 = closure_6;
            let tmp30 = closure_6;
            let num4 = 1000;
            value = 1000 * (closure_6.timestamp - closure_6.start_timestamp);
            let tmp32 = value;
            if (isDeadlineExceeded(value)) {
              if (closure_129_0.measurements.time_to_initial_display) {
                closure_129_0.measurements.time_to_full_display = closure_129_0.measurements.time_to_initial_display;
              }
            } else {
              const obj13 = { value, unit: "millisecond" };
              closure_129_0.measurements.time_to_full_display = obj13;
            }
          }
        }
        const tmp43 = globalThis;
        const _Math = Math;
        if (null != ttidSpan) {
          let tmp46 = v0;
          let tmp47 = ttidSpan;
          timestamp3 = ttidSpan.timestamp;
        }
        let num5 = -1;
        let num6 = -1;
        if (null !== timestamp3) {
          let tmp49 = timestamp3;
          num6 = -1;
          if (undefined !== timestamp3) {
            num6 = timestamp3;
          }
        }
        if (null != closure_6) {
          let tmp52 = v0;
          let tmp53 = closure_6;
          timestamp4 = closure_6.timestamp;
        }
        let num7 = -1;
        if (null !== timestamp4) {
          num7 = -1;
          if (undefined !== timestamp4) {
            num7 = timestamp4;
          }
        }
        let timestamp = closure_129_0.timestamp;
        let num8 = -1;
        if (null !== timestamp) {
          let tmp58 = v0;
          num8 = -1;
          if (undefined !== timestamp) {
            num8 = timestamp;
          }
        }
        timestamp = max(num6, num7, num8);
        if (-1 !== timestamp) {
          let tmp62 = v0;
          let tmp63 = closure_1;
          closure_129_0.timestamp = timestamp;
        }
        let num9 = 3;
        return closure_129_0;
      });
    },
  };
  return obj;
};
