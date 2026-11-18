// === Module 726: timedEventsToMeasurements ===

// Module 726 (timedEventsToMeasurements)
import spanToJSON from "spanToJSON" /* 683 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "GEN_AI_CONVERSATION_ID_ATTRIBUTE" /* 703 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function setMeasurement(time_to_full_display, value, millisecond) {
  if (activeSpan === undefined) {
    activeSpan = spanToJSON.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanToJSON.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = consoleSandbox.debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Measurement] Setting measurement on root span: " + time_to_full_display + " = " + value + " " + millisecond);
    }
    const obj2 = {};
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = value;
    obj2[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = millisecond;
    rootSpan.addEvent(time_to_full_display, obj2);
  }
}
export function timedEventsToMeasurements(_events) {
  if (_events) {
    if (0 !== _events.length) {
      let obj = {};
      const item = _events.forEach((attributes) => {
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