// _runtime/01161_onThisSpanEnd.js
import { AppState } from "get ActivityIndicator";
import { registerSpanErrorInstrumentation } from "00817_registerSpanErrorInstrumentation.js";


export const onThisSpanEnd = function onThisSpanEnd(on) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  on.on("spanEnd", (arg0) => {
    if (closure_0 === arg0) {
      callback(arg0);
    }
  });
};
export const adjustTransactionDuration = (on, activeSpan) => {
  const _require = activeSpan;
  const dependencyMap = arg2;
  if (obj.isRootSpan(activeSpan)) {
    on.on("spanEnd", (arg0) => {
      let obj = activeSpan;
      if (arg0 === activeSpan) {
        let timestamp = activeSpan(817).spanToJSON(obj).timestamp;
        const obj3 = activeSpan(817);
        const tmp6 = activeSpan;
        const start_timestamp = activeSpan(817).spanToJSON(obj).start_timestamp;
        if (timestamp) {
          if (start_timestamp) {
            const diff = timestamp - start_timestamp;
            if (timestamp) {
              let tmp3 = diff > dependencyMap;
              if (!tmp3) {
                tmp3 = diff < 0;
              }
              timestamp = tmp3;
            }
            if (timestamp) {
              obj = { code: null, message: "deadline_exceeded" };
              obj[0] = tmp6(817).SPAN_STATUS_ERROR;
              obj.setStatus(obj);
              const attr = obj.setAttribute("maxTransactionDurationExceeded", "true");
            }
          }
        }
        const obj4 = activeSpan(817);
      }
    });
  } else {
    const debug = _registerSpanErrorInstrumentation.debug;
    debug.warn("Not sampling empty back spans only works for Sentry Transactions (Root Spans).");
  }
};
export const ignoreEmptyBackNavigation = (on, c4) => {
  let closure_0 = c4;
  const f68755 = (arg0) => {
    const data = c4(f68755[2]).spanToJSON(arg0).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data["route.has_been_seen"];
      }
    }
    return true === prop;
  };
  const f68756 = () => {
    const debug = c4(f68755[2]).debug;
    debug.log("Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.");
  };
  if (on) {
    if (c4) {
      let tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        tmpResult = tmp(tmp2[1]);
        if (tmpResult.isSentrySpan(c4)) {
          on.on("spanEnd", (arg0) => {
            if (arg0 === c4) {
              if (f68757(tmp)) {
                c4 = tmp;
                const spanDescendants = c4(f68757[2]).getSpanDescendants(tmp);
                if (spanDescendants.filter((spanContext) => {
                  tmp = spanContext.spanContext().spanId !== tmp.spanContext().spanId;
                  if (tmp) {
                    tmp = "ui.load.initial_display" !== tmp(outer1_1[2]).spanToJSON(spanContext).op;
                    const obj = tmp(outer1_1[2]);
                  }
                  if (tmp) {
                    tmp = "navigation.processing" !== tmp(outer1_1[2]).spanToJSON(spanContext).op;
                    const obj2 = tmp(outer1_1[2]);
                  }
                  return tmp;
                }).length <= 0) {
                  f68758(tmp);
                  tmp._sampled = false;
                }
                let obj = c4(f68757[2]);
              }
            }
          });
        }
      }
      const debug3 = tmp(tmp2[2]).debug;
      debug3.warn("Not sampling empty navigation spans only works for Sentry Transactions (Root Spans).");
    } else {
      const debug2 = tmp(tmp2[2]).debug;
      debug2.warn("Could not hook on spanEnd event because span is not defined.");
    }
  } else {
    let debug = tmp(tmp2[2]).debug;
    debug.warn("Could not hook on spanEnd event because client is not defined.");
  }
};
export const ignoreEmptyRouteChangeTransactions = (on, c4) => {
  let closure_0 = on;
  let f68757 = arg2;
  let f68758 = arg3;
  closure_0 = c4;
  f68757 = (arg0) => {
    const spanToJSONResult = c4(f68757[2]).spanToJSON(arg0);
    let tmp2 = spanToJSONResult.description === f68757;
    if (tmp2) {
      const data = spanToJSONResult.data;
      let prop;
      if (null !== data) {
        if (undefined !== data) {
          prop = data["route.name"];
        }
      }
      tmp2 = !prop;
    }
    if (tmp2) {
      tmp2 = f68758();
    }
    return tmp2;
  };
  f68758 = (arg0) => {
    const debug = c4(f68757[2]).debug;
    debug.log("Discarding empty \"" + f68757 + "\" transaction that never received route information.");
    if (null != c4) {
      c4.recordDroppedEvent("sample_rate", "transaction");
    }
  };
  if (on) {
    if (c4) {
      let tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        tmpResult = tmp(tmp2[1]);
        if (tmpResult.isSentrySpan(c4)) {
          on.on("spanEnd", (arg0) => {
            if (arg0 === c4) {
              if (f68757(tmp)) {
                c4 = tmp;
                const spanDescendants = c4(f68757[2]).getSpanDescendants(tmp);
                if (spanDescendants.filter((spanContext) => {
                  tmp = spanContext.spanContext().spanId !== tmp.spanContext().spanId;
                  if (tmp) {
                    tmp = "ui.load.initial_display" !== tmp(outer1_1[2]).spanToJSON(spanContext).op;
                    const obj = tmp(outer1_1[2]);
                  }
                  if (tmp) {
                    tmp = "navigation.processing" !== tmp(outer1_1[2]).spanToJSON(spanContext).op;
                    const obj2 = tmp(outer1_1[2]);
                  }
                  return tmp;
                }).length <= 0) {
                  f68758(tmp);
                  tmp._sampled = false;
                }
                let obj = c4(f68757[2]);
              }
            }
          });
        }
      }
      const debug3 = tmp(tmp2[2]).debug;
      debug3.warn("Not sampling empty navigation spans only works for Sentry Transactions (Root Spans).");
    } else {
      const debug2 = tmp(tmp2[2]).debug;
      debug2.warn("Could not hook on spanEnd event because span is not defined.");
    }
  } else {
    let debug = tmp(tmp2[2]).debug;
    debug.warn("Could not hook on spanEnd event because client is not defined.");
  }
};
export const onlySampleIfChildSpans = (on, c4) => {
  const _require = c4;
  if (obj.isRootSpan(c4)) {
    if (tmpResult.isSentrySpan(c4)) {
      on.on("spanEnd", (arg0) => {
        if (arg0 === c4) {
          if (obj2.getSpanDescendants(tmp).length <= 1) {
            const debug = tmp4(tmp5[2]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Not sampling as " + tmp4(tmp5[2]).spanToJSON(tmp).op + " transaction has no child spans.");
            tmp._sampled = false;
            const tmp4Result = tmp4(tmp5[2]);
          }
          obj2 = c4(outer1_1[2]);
        }
      });
    }
  }
  let debug = tmp(817).debug;
  debug.warn("Not sampling childless spans only works for Sentry Transactions (Root Spans).");
};
export const cancelInBackground = (on) => {
  let closure_0 = arg1;
  const listener = AppState.addEventListener("change", (arg0) => {
    if ("background" === arg0) {
      const debug = lib(listener[2]).debug;
      let obj = lib(listener[2]);
      const _HermesInternal = HermesInternal;
      debug.log("Setting " + obj.spanToJSON(lib).op + " transaction to cancelled because the app is in the background.");
      obj = { code: null, message: "cancelled" };
      obj[0] = lib(listener[2]).SPAN_STATUS_ERROR;
      lib.setStatus(obj);
      lib.end();
    }
  });
  if (listener) {
    on.on("spanEnd", (arg0) => {
      if (arg0 === lib) {
        const debug = lib(listener[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("Removing AppState listener for " + lib(listener[2]).spanToJSON(tmp).op + " transaction.");
        let remove;
        if (null != listener) {
          remove = tmp9.remove;
        }
        if (!tmp3) {
          const call = remove.call;
          if (typeof call === "unknown") {
            remove();
          } else {
            call(tmp9);
          }
        }
        const obj = lib(listener[2]);
        tmp3 = null === remove || undefined === remove;
      }
    });
  }
};