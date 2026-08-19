// _runtime/01161_onThisSpanEnd.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { isSentrySpan } from "01122_isSentrySpan.js";

const AppState = get_ActivityIndicator.AppState;

export const onThisSpanEnd = function onThisSpanEnd(on) {
  closure_0 = arg1;
  closure_1 = arg2;
  on.on("spanEnd", (arg0) => {
    if (closure_0 === arg0) {
      callback(arg0);
    }
  });
};
export const adjustTransactionDuration = (client, activeSpan, finalTimeout) => {
  const _require = activeSpan;
  dependencyMap = finalTimeout;
  if (obj.isRootSpan(activeSpan)) {
    client.on("spanEnd", (arg0) => {
      let obj = activeSpan;
      if (arg0 === activeSpan) {
        let timestamp = activeSpan(817).spanToJSON(obj).timestamp;
        const obj3 = activeSpan(817);
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
              obj[0] = activeSpan(817).SPAN_STATUS_ERROR;
              obj.setStatus(obj);
              const attr = obj.setAttribute("maxTransactionDurationExceeded", "true");
            }
          }
        }
        const obj4 = activeSpan(817);
      }
    });
  } else {
    const debug = require("00817_registerSpanErrorInstrumentation.js").debug;
    debug.warn("Not sampling empty back spans only works for Sentry Transactions (Root Spans).");
  }
};
export const ignoreEmptyBackNavigation = (client, c4) => {
  closure_0 = c4;
  const f69347 = (arg0) => {
    const data = callback(f69347[2]).spanToJSON(arg0).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data["route.has_been_seen"];
      }
    }
    return true === prop;
  };
  const f69348 = () => {
    const debug = callback(f69347[2]).debug;
    debug.log("Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.");
  };
  if (client) {
    if (c4) {
      let tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        tmpResult = tmp(tmp2[1]);
        if (tmpResult.isSentrySpan(c4)) {
          client.on("spanEnd", (arg0) => {
            if (arg0 === lib) {
              if (f69349(tmp)) {
                lib = tmp;
                const spanDescendants = lib(f69349[2]).getSpanDescendants(tmp);
                if (spanDescendants.filter((item, index) => {
                  let tmp = item.spanContext().spanId !== lib.spanContext().spanId;
                  if (tmp) {
                    tmp = "ui.load.initial_display" !== lib(closure_1_1[2]).spanToJSON(item).op;
                    const obj = lib(closure_1_1[2]);
                  }
                  if (tmp) {
                    tmp = "navigation.processing" !== lib(closure_1_1[2]).spanToJSON(item).op;
                    const obj2 = lib(closure_1_1[2]);
                  }
                  return tmp;
                }).length <= 0) {
                  f69350(tmp);
                  tmp._sampled = false;
                }
                let obj = lib(f69349[2]);
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
  closure_0 = c4;
  const f69349 = (arg0) => {
    const spanToJSONResult = lib(f69349[2]).spanToJSON(arg0);
    let tmp2 = spanToJSONResult.description === f69349;
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
      tmp2 = f69350();
    }
    return tmp2;
  };
  const f69350 = (arg0) => {
    const debug = lib(f69349[2]).debug;
    debug.log("Discarding empty \"" + f69349 + "\" transaction that never received route information.");
    if (null != lib) {
      lib.recordDroppedEvent("sample_rate", "transaction");
    }
  };
  if (client) {
    if (c4) {
      let tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        tmpResult = tmp(tmp2[1]);
        if (tmpResult.isSentrySpan(c4)) {
          client.on("spanEnd", (arg0) => {
            if (arg0 === lib) {
              if (f69349(tmp)) {
                lib = tmp;
                const spanDescendants = lib(f69349[2]).getSpanDescendants(tmp);
                if (spanDescendants.filter((item, index) => {
                  let tmp = item.spanContext().spanId !== lib.spanContext().spanId;
                  if (tmp) {
                    tmp = "ui.load.initial_display" !== lib(closure_1_1[2]).spanToJSON(item).op;
                    const obj = lib(closure_1_1[2]);
                  }
                  if (tmp) {
                    tmp = "navigation.processing" !== lib(closure_1_1[2]).spanToJSON(item).op;
                    const obj2 = lib(closure_1_1[2]);
                  }
                  return tmp;
                }).length <= 0) {
                  f69350(tmp);
                  tmp._sampled = false;
                }
                let obj = lib(f69349[2]);
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
  const _require = startIdleSpanResult;
  if (obj.isRootSpan(startIdleSpanResult)) {
    if (tmpResult.isSentrySpan(startIdleSpanResult)) {
      client.on("spanEnd", (arg0) => {
        if (arg0 === startIdleSpanResult) {
          if (obj2.getSpanDescendants(startIdleSpanResult).length <= 1) {
            const debug = startIdleSpanResult(dependencyMap[2]).debug;
            const _HermesInternal = HermesInternal;
            debug.log("Not sampling as " + startIdleSpanResult(dependencyMap[2]).spanToJSON(startIdleSpanResult).op + " transaction has no child spans.");
            startIdleSpanResult._sampled = false;
            const tmp4Result = startIdleSpanResult(dependencyMap[2]);
          }
          obj2 = startIdleSpanResult(dependencyMap[2]);
        }
      });
    }
    tmpResult = tmp(1122);
  }
  let debug = tmp(817).debug;
  debug.warn("Not sampling childless spans only works for Sentry Transactions (Root Spans).");
  obj = isSentrySpan;
};
export const cancelInBackground = (client, startIdleSpanResult) => {
  closure_0 = startIdleSpanResult;
  const listener = AppState.addEventListener("change", (event) => {
    if ("background" === event) {
      const debug = startIdleSpanResult(listener[2]).debug;
      let obj = startIdleSpanResult(listener[2]);
      const _HermesInternal = HermesInternal;
      debug.log("Setting " + obj.spanToJSON(startIdleSpanResult).op + " transaction to cancelled because the app is in the background.");
      obj = { code: null, message: "cancelled" };
      obj[0] = startIdleSpanResult(listener[2]).SPAN_STATUS_ERROR;
      startIdleSpanResult.setStatus(obj);
      startIdleSpanResult.end();
    }
  });
  if (listener) {
    client.on("spanEnd", (arg0) => {
      if (arg0 === startIdleSpanResult) {
        const debug = startIdleSpanResult(listener[2]).debug;
        const _HermesInternal = HermesInternal;
        debug.log("Removing AppState listener for " + startIdleSpanResult(listener[2]).spanToJSON(tmp).op + " transaction.");
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
        const obj = startIdleSpanResult(listener[2]);
        tmp3 = null === remove || undefined === remove;
      }
    });
  }
};