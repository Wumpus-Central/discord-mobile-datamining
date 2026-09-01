// _runtime/01094_INTEGRATION_NAME.js
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const SpotlightBrowser = "SpotlightBrowser";

export const INTEGRATION_NAME = "SpotlightBrowser";
export const isSpotlightInteraction = function isSpotlightInteraction(type) {
  let spans = "transaction" === type.type;
  if (spans) {
    spans = type.spans;
  }
  if (spans) {
    const contexts = type.contexts;
    let trace;
    if (contexts != null) {
      trace = contexts.trace;
    }
    spans = trace;
  }
  if (spans) {
    spans = "ui.action.click" === type.contexts.trace.op;
  }
  if (spans) {
    const spans2 = type.spans;
    spans = spans2.some((description) => {
      description = description.description;
      let hasItem;
      if (description != null) {
        hasItem = description.includes("#sentry-spotlight");
      }
      return hasItem;
    });
  }
  return Boolean(spans);
};
export const spotlightBrowserIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  closure_0 = obj.sidecarUrl || "http://localhost:8969/stream";
  obj = {
    name: SpotlightBrowser,
    setup() {
      if (callback(closure_1_1[0]).DEBUG_BUILD) {
        const debug = callback(closure_1_1[1]).debug;
        debug.log("Using Sidecar URL", callback);
      }
    },
    processEvent(type) {
      let spans = "transaction" === type.type;
      if (spans) {
        spans = type.spans;
      }
      if (spans) {
        const contexts = type.contexts;
        let trace;
        if (contexts != null) {
          trace = contexts.trace;
        }
        spans = trace;
      }
      if (spans) {
        spans = "ui.action.click" === type.contexts.trace.op;
      }
      if (spans) {
        const spans2 = type.spans;
        spans = spans2.some((description) => {
          description = description.description;
          let hasItem;
          if (description != null) {
            hasItem = description.includes("#sentry-spotlight");
          }
          return hasItem;
        });
      }
      let tmp3 = null;
      if (!Boolean(spans)) {
        tmp3 = type;
      }
      return tmp3;
    },
    afterAllSetup(on) {
      const nativeImplementation = callback(closure_1_1[2]).getNativeImplementation("fetch");
      c2 = 0;
      on.on("beforeEnvelope", (arg0) => {
        if (c2 > 3) {
          let debug = callback(817).debug;
          debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", c2);
        } else {
          const obj = { method: "POST", body: null, headers: null, mode: "cors" };
          obj[1] = callback(817).serializeEnvelope(arg0);
          obj[2] = { "Content-Type": "application/x-sentry-envelope" };
          const obj2 = callback(817);
          dependencyMap(callback, obj).then(
            (status) => {
              let tmp = status.status >= 200;
              if (tmp) {
                tmp = status.status < 400;
              }
              if (tmp) {
                c2 = 0;
              }
            },
            (arg0) => {
              closure_2 = closure_2 + 1;
              const debug = closure_1_0(closure_1_1[1]).debug;
              debug.error(
                "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/",
                arg0,
              );
            },
          );
          const promise = dependencyMap(callback, obj);
        }
      });
    },
  };
  return obj;
});
