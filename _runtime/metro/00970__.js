// === Module 970: ? ===

// Module 970
import _addMeasureSpans from "_addMeasureSpans" /* 909 */;
import _mod948 from "module_948" /* 948 */;
import registerSpanErrorInstrumentation from "module_693" /* 693 */;

let closure_2;

const f82687 = (description) => {
  description = description.description;
  let hasItem;
  if (description != null) {
    hasItem = description.includes("#sentry-spotlight");
  }
  return hasItem;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const SpotlightBrowser = "SpotlightBrowser";

export const INTEGRATION_NAME = "SpotlightBrowser";
export const isSpotlightInteraction = function isSpotlightInteraction(type) {
  let spans = "transaction" === type.type;
  const _Boolean = Boolean;
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
    spans = spans2.some(f82687);
  }
  return _Boolean(spans);
};
export const spotlightBrowserIntegration = registerSpanErrorInstrumentation.defineIntegration(() => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let closure_0 = obj.sidecarUrl || "http://localhost:8969/stream";
  let obj2 = {
    name: SpotlightBrowser,
    setup() {
      if (_mod948.DEBUG_BUILD) {
        const debug = registerSpanErrorInstrumentation.debug;
        debug.log("Using Sidecar URL", closure_0);
      }
    },
    processEvent(type) {
      let spans = "transaction" === type.type;
      const _Boolean = Boolean;
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
        spans = spans2.some(f82687);
      }
      let tmp3 = null;
      if (!_Boolean(spans)) {
        tmp3 = type;
      }
      return tmp3;
    },
    afterAllSetup(on) {
      const obj = _addMeasureSpans;
      const nativeImplementation = obj.getNativeImplementation("fetch");
      let c2 = 0;
      on.on("beforeEnvelope", (arg0) => {
        let obj2;
        if (c2 > 3) {
          let debug = closure_2_0(closure_2_1[1]).debug;
          debug.warn("[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests:", c2);
        } else {
          let tmp = arg0;
          const request = { method: "POST", body: obj2.serializeEnvelope(arg0), headers: { "Content-Type": "application/x-sentry-envelope" }, mode: "cors" };
          obj2 = closure_2_0(closure_2_1[1]);
          const promise = closure_1(closure_0, request);
          promise.then((status) => {
            const tmp = status.status >= 200 && status.status < 400;
            if (tmp) {
              closure_2 = 0;
            }
          }, (arg0) => {
            closure_2 = closure_2 + 1;
            const debug = closure_0(closure_1[1]).debug;
            debug.error("Sentry SDK can't connect to Sidecar is it running? See: https://spotlightjs.com/sidecar/npx/", arg0);
          });
        }
      });
    }
  };
  return obj2;
});