// _runtime/metro/00959__.js
import triggerHandlers from "../00898_triggerHandlers.js";
import _mod937 from "00937__.js";
import registerSpanErrorInstrumentation from "00682__.js";

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
      if (_mod937.DEBUG_BUILD) {
        const debug = registerSpanErrorInstrumentation.debug;
        debug.log("Using Sidecar URL", closure_0);
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
      const nativeImplementation = triggerHandlers.getNativeImplementation("fetch");
      c2 = 0;
      on.on("beforeEnvelope", (arg0) => {
        if (c2 > 3) {
          let debug = closure_0(682).debug;
          debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", c2);
        } else {
          const request = {
            method: "POST",
            body: closure_0(682).serializeEnvelope(arg0),
            headers: { "Content-Type": "application/x-sentry-envelope" },
            mode: "cors",
          };
          const obj2 = closure_0(682);
          closure_1(closure_0, request).then(
            (status) => {
              let tmp = status.status >= 200;
              if (tmp) {
                tmp = status.status < 400;
              }
              if (tmp) {
                closure_2 = 0;
              }
            },
            (arg0) => {
              closure_2 = closure_2 + 1;
              const debug = closure_0(closure_1[1]).debug;
              debug.error(
                "Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/",
                arg0,
              );
            },
          );
          const promise = closure_1(closure_0, request);
        }
      });
    },
  };
  return obj;
});
