// === Module 1026: ? ===

// Module 1026
import _mod17 from "module_17" /* 17 */;
import _mod682 from "module_682" /* 682 */;

const AppState = _mod17.AppState;

export const onThisSpanEnd = function onThisSpanEnd(on, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  on.on("spanEnd", (arg0) => {
    if (closure_0 === arg0) {
      closure_1(arg0);
    }
  });
};
export const adjustTransactionDuration = (client, activeSpan, finalTimeout) => {
  _require = activeSpan;
  dependencyMap = finalTimeout;
  if (obj.isRootSpan(activeSpan)) {
    client.on("spanEnd", (arg0) => {
      let obj = closure_0;
      if (arg0 === closure_0) {
        let timestamp = _mod682.spanToJSON(obj).timestamp;
        const start_timestamp = _mod682.spanToJSON(obj).start_timestamp;
        if (timestamp) {
          if (start_timestamp) {
            const diff = timestamp - start_timestamp;
            if (timestamp) {
              let tmp3 = diff > closure_1;
              if (!tmp3) {
                tmp3 = diff < 0;
              }
              timestamp = tmp3;
            }
            if (timestamp) {
              obj = { code: _mod682.SPAN_STATUS_ERROR, message: "deadline_exceeded" };
              obj.setStatus(obj);
              const attr = obj.setAttribute("maxTransactionDurationExceeded", "true");
            }
          }
        }
      }
    });
  } else {
    const debug = require("module_682").debug;
    debug.warn("Not sampling empty back spans only works for Sentry Transactions (Root Spans).");
  }
};
export const ignoreEmptyBackNavigation = (client, c4) => {
  const f71977 = (arg0) => {
    const data = c4(f71977[2]).spanToJSON(arg0).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data["route.has_been_seen"];
      }
    }
    return true === prop;
  };
  const f71978 = () => {
    const debug = c4(f71977[2]).debug;
    debug.log("Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.");
  };
  if (client) {
    if (c4) {
      let tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        tmpResult = tmp(tmp2[1]);
        if (tmpResult.isSentrySpan(c4)) {
          client.on("spanEnd", (arg0) => {
            if (arg0 === closure_0) {
              if (DEFAULT_NAVIGATION_SPAN_NAME(tmp)) {
                closure_0 = tmp;
                const spanDescendants = _mod682.getSpanDescendants(tmp);
                if (spanDescendants.filter((spanContext) => {
                  let tmp = spanContext.spanContext().spanId !== closure_0.spanContext().spanId;
                  if (tmp) {
                    tmp = "ui.load.initial_display" !== closure_0(682).spanToJSON(spanContext).op;
                    const obj = closure_0(682);
                  }
                  if (tmp) {
                    tmp = "navigation.processing" !== closure_0(682).spanToJSON(spanContext).op;
                    const obj2 = closure_0(682);
                  }
                  return tmp;
                }).length <= 0) {
                  closure_2(tmp);
                  tmp._sampled = false;
                }
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
export const ignoreEmptyRouteChangeTransactions = (client, c4, DEFAULT_NAVIGATION_SPAN_NAME, arg3) => {
  closure_2 = arg3;
  closure_129_0 = c4;
  closure_129_1 = (arg0) => {
    const spanToJSONResult = _mod682.spanToJSON(arg0);
    let tmp2 = spanToJSONResult.description === closure_1;
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
      tmp2 = closure_2();
    }
    return tmp2;
  };
  closure_129_2 = (arg0) => {
    const debug = _mod682.debug;
    debug.log("Discarding empty \"" + closure_1 + "\" transaction that never received route information.");
    if (null != client) {
      client.recordDroppedEvent("sample_rate", "transaction");
    }
  };
  if (client) {
    if (c4) {
      let tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        tmpResult = tmp(tmp2[1]);
        if (tmpResult.isSentrySpan(c4)) {
          client.on("spanEnd", (arg0) => {
            if (arg0 === closure_0) {
              if (DEFAULT_NAVIGATION_SPAN_NAME(tmp)) {
                closure_0 = tmp;
                const spanDescendants = _mod682.getSpanDescendants(tmp);
                if (spanDescendants.filter((spanContext) => {
                  let tmp = spanContext.spanContext().spanId !== closure_0.spanContext().spanId;
                  if (tmp) {
                    tmp = "ui.load.initial_display" !== closure_0(682).spanToJSON(spanContext).op;
                    const obj = closure_0(682);
                  }
                  if (tmp) {
                    tmp = "navigation.processing" !== closure_0(682).spanToJSON(spanContext).op;
                    const obj2 = closure_0(682);
                  }
                  return tmp;
                }).length <= 0) {
                  closure_2(tmp);
                  tmp._sampled = false;
                }
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
export const onlySampleIfChildSpans = (client, startIdleSpanResult) => {
  _require = startIdleSpanResult;
  if (obj.isRootSpan(startIdleSpanResult)) {
    if (tmpResult.isSentrySpan(startIdleSpanResult)) {
      client.on("spanEnd", (arg0) => {
        if (arg0 === closure_0) {
          if (obj2.getSpanDescendants(closure_0).length <= 1) {
            const debug = _mod682.debug;
            const _HermesInternal = HermesInternal;
            debug.log("Not sampling as " + _mod682.spanToJSON(closure_0).op + " transaction has no child spans.");
            closure_0._sampled = false;
            const tmp4Result = _mod682;
          }
          obj2 = _mod682;
        }
      });
    }
    tmpResult = tmp(987);
  }
  let debug = tmp(682).debug;
  debug.warn("Not sampling childless spans only works for Sentry Transactions (Root Spans).");
  obj = require("module_987");
};
export const cancelInBackground = (client, startIdleSpanResult) => {
  const listener = AppState.addEventListener("change", (event) => {
    if ("background" === event) {
      const debug = _mod682.debug;
      let obj = _mod682;
      const _HermesInternal = HermesInternal;
      debug.log("Setting " + obj.spanToJSON(startIdleSpanResult).op + " transaction to cancelled because the app is in the background.");
      obj = { code: _mod682.SPAN_STATUS_ERROR, message: "cancelled" };
      startIdleSpanResult.setStatus(obj);
      startIdleSpanResult.end();
    }
  });
  if (listener) {
    client.on("spanEnd", (arg0) => {
      if (arg0 === closure_0) {
        const debug = _mod682.debug;
        const _HermesInternal = HermesInternal;
        debug.log("Removing AppState listener for " + _mod682.spanToJSON(tmp).op + " transaction.");
        let remove;
        if (null != listener) {
          remove = listener.remove;
        }
        if (!tmp3) {
          const call = remove.call;
          if (typeof call === "unknown") {
            remove();
          } else {
            call(listener);
          }
        }
        tmp3 = null === remove || undefined === remove;
      }
    });
  }
};