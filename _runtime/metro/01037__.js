// _runtime/metro/01037__.js
import react_native from "../00017_react-native.js";
import _mod693 from "00693__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const AppState = react_native.AppState;

export const onThisSpanEnd = function onThisSpanEnd(on, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  on.on("spanEnd", (arg0) => {
    if (closure_0 === arg0) {
      closure_1(arg0);
    }
  });
};
export const adjustTransactionDuration = (client, activeSpan, finalTimeout) => {
  _require = activeSpan;
  dependencyMap = finalTimeout;
  const obj = require("00998__.js");
  const tmp = _require;
  if (obj.isRootSpan(activeSpan)) {
    client.on("spanEnd", (arg0) => {
      if (arg0 === activeSpan) {
        const obj3 = _mod693;
        let timestamp = obj3.spanToJSON(activeSpan).timestamp;
        const obj4 = _mod693;
        const start_timestamp = obj4.spanToJSON(activeSpan).start_timestamp;
        if (timestamp) {
          if (start_timestamp) {
            const diff = timestamp - start_timestamp;
            if (timestamp) {
              timestamp = diff > finalTimeout || diff < 0;
              const tmp3 = diff > finalTimeout || diff < 0;
            }
            if (timestamp) {
              const setStatus = activeSpan.setStatus;
              const obj2 = { code: _mod693.SPAN_STATUS_ERROR, message: "deadline_exceeded" };
              setStatus(obj2);
              const attr = activeSpan.setAttribute("maxTransactionDurationExceeded", "true");
            }
          }
        }
      }
    });
  } else {
    const debug = tmp(693).debug;
    debug.warn("Not sampling empty back spans only works for Sentry Transactions (Root Spans).");
  }
};
export const ignoreEmptyBackNavigation = (client, c4) => {
  const f82885 = (arg0) => {
    const obj = c4(f82885[2]);
    const data = obj.spanToJSON(arg0).data;
    let prop;
    if (null !== data) {
      if (undefined !== data) {
        prop = data["route.has_been_seen"];
      }
    }
    return true === prop;
  };
  const f82886 = () => {
    const debug = c4(f82885[2]).debug;
    debug.log(
      "Not sampling transaction as route has been seen before. Pass ignoreEmptyBackNavigationTransactions = false to disable this feature.",
    );
  };
  if (client) {
    if (c4) {
      const tmpResult = c4(f82885[1]);
      if (tmpResult.isRootSpan(c4)) {
        const tmpResult2 = c4(f82885[1]);
        if (tmpResult2.isSentrySpan(c4)) {
          client.on("spanEnd", (arg0) => {
            let tmp = closure_0;
            if (arg0 === closure_0) {
              if (f82887(tmp)) {
                closure_0 = tmp;
                let obj = closure_0(DEFAULT_NAVIGATION_SPAN_NAME[2]);
                const spanDescendants = obj.getSpanDescendants(tmp);
                if (
                  spanDescendants.filter((spanContext) => {
                    let tmp = spanContext.spanContext().spanId !== closure_0.spanContext().spanId;
                    if (tmp) {
                      const obj = closure_2_0(closure_2_1[2]);
                      tmp = "ui.load.initial_display" !== obj.spanToJSON(spanContext).op;
                    }
                    if (tmp) {
                      const obj2 = closure_2_0(closure_2_1[2]);
                      tmp = "navigation.processing" !== obj2.spanToJSON(spanContext).op;
                    }
                    return tmp;
                  }).length <= 0
                ) {
                  f82888(tmp);
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
  let closure_1 = DEFAULT_NAVIGATION_SPAN_NAME;
  let closure_2 = arg3;
  let closure_0 = c4;
  const f82887 = (arg0) => {
    const obj = client(DEFAULT_NAVIGATION_SPAN_NAME[2]);
    const spanToJSONResult = obj.spanToJSON(arg0);
    let tmp2 = spanToJSONResult.description === f82887;
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
      tmp2 = f82888();
    }
    return tmp2;
  };
  const f82888 = (arg0) => {
    const debug = client(DEFAULT_NAVIGATION_SPAN_NAME[2]).debug;
    debug.log('Discarding empty "' + f82887 + '" transaction that never received route information.');
    if (null != client) {
      client.recordDroppedEvent("sample_rate", "transaction");
    }
  };
  let tmp = closure_0;
  let tmp2 = closure_1;
  if (client) {
    if (c4) {
      const tmpResult = tmp(tmp2[1]);
      if (tmpResult.isRootSpan(c4)) {
        const tmpResult2 = tmp(tmp2[1]);
        if (tmpResult2.isSentrySpan(c4)) {
          client.on("spanEnd", (arg0) => {
            let tmp = closure_0;
            if (arg0 === closure_0) {
              if (f82887(tmp)) {
                closure_0 = tmp;
                let obj = closure_0(DEFAULT_NAVIGATION_SPAN_NAME[2]);
                const spanDescendants = obj.getSpanDescendants(tmp);
                if (
                  spanDescendants.filter((spanContext) => {
                    let tmp = spanContext.spanContext().spanId !== closure_0.spanContext().spanId;
                    if (tmp) {
                      const obj = closure_2_0(closure_2_1[2]);
                      tmp = "ui.load.initial_display" !== obj.spanToJSON(spanContext).op;
                    }
                    if (tmp) {
                      const obj2 = closure_2_0(closure_2_1[2]);
                      tmp = "navigation.processing" !== obj2.spanToJSON(spanContext).op;
                    }
                    return tmp;
                  }).length <= 0
                ) {
                  f82888(tmp);
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
  const obj = require("00998__.js");
  if (obj.isRootSpan(startIdleSpanResult)) {
    const tmpResult = require("00998__.js");
    if (tmpResult.isSentrySpan(startIdleSpanResult)) {
      client.on("spanEnd", (arg0) => {
        if (arg0 === _require) {
          const obj2 = _mod693;
          if (obj2.getSpanDescendants(_require).length <= 1) {
            const debug = _mod693.debug;
            const log = debug.log;
            const _HermesInternal = HermesInternal;
            const tmp4Result = _mod693;
            log("Not sampling as " + tmp4Result.spanToJSON(_require).op + " transaction has no child spans.");
            _require._sampled = false;
          }
        }
      });
    }
  }
  let debug = tmp(693).debug;
  debug.warn("Not sampling childless spans only works for Sentry Transactions (Root Spans).");
};
export const cancelInBackground = (client, startIdleSpanResult) => {
  const listener = AppState.addEventListener("change", (event) => {
    if ("background" === event) {
      const debug = _mod693.debug;
      const log = debug.log;
      const _HermesInternal = HermesInternal;
      const obj = _mod693;
      log(
        "Setting " +
          obj.spanToJSON(startIdleSpanResult).op +
          " transaction to cancelled because the app is in the background.",
      );
      const setStatus = startIdleSpanResult.setStatus;
      const obj2 = { code: _mod693.SPAN_STATUS_ERROR, message: "cancelled" };
      setStatus(obj2);
      startIdleSpanResult.end();
    }
  });
  if (listener) {
    client.on("spanEnd", (arg0) => {
      if (arg0 === _require) {
        const debug = _mod693.debug;
        const log = debug.log;
        const _HermesInternal = HermesInternal;
        const obj = _mod693;
        log("Removing AppState listener for " + obj.spanToJSON(tmp).op + " transaction.");
        let remove;
        if (null != listener) {
          remove = listener.remove;
        }
        const tmp3 = null === remove || undefined === remove;
        if (!tmp3) {
          remove.call(listener);
        }
      }
    });
  }
};
