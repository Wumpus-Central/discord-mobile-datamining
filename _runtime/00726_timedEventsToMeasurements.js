// === Module 726: timedEventsToMeasurements ===

// Module 726 (timedEventsToMeasurements)
import spanToJSON from "spanToJSON" /* 683 */;
import _mod687 from "module_687" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "GEN_AI_CONVERSATION_ID_ATTRIBUTE" /* 703 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = _getSpanForScopeResult;
  if (_getSpanForScopeResult === undefined) {
    activeSpan = spanToJSON.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanToJSON.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod687.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    const obj2 = {};
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj2);
  }
}
export function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
        let tmp4 = typeof tmp2 === "string";
        if (typeof tmp2 === "string") {
          tmp4 = typeof tmp3 === "number";
        }
        if (tmp4) {
          obj = { value: tmp3, unit: tmp2 };
          obj[attributes.name] = obj;
        }
      });
      return obj;
    }
  }
}