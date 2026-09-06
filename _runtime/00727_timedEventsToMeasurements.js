// === Module 727: timedEventsToMeasurements ===

// Module 727 (timedEventsToMeasurements)
import spanToJSON from "spanToJSON" /* 684 */;
import _mod688 from "module_688" /* 688 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = _getSpanForScopeResult;
  if (_getSpanForScopeResult === undefined) {
    let obj = spanToJSON;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanToJSON.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod688.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    obj = {};
    obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj);
  }
};
export const timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
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
};