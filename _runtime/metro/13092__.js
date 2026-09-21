// === Module 13092: ? ===

// Module 13092
import _mod13050 from "module_13050" /* 13050 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13055 */;
import _mod13065 from "module_13065" /* 13065 */;
import _mod13078 from "module_13078" /* 13078 */;

require = arg1;
const dependencyMap = arg6;

export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  if (activeSpan === undefined) {
    activeSpan = spanTimeInputToSeconds.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod13078.DEBUG_BUILD) {
      const logger = _mod13050.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    const obj2 = {};
    obj2[_mod13065.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj2[_mod13065.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj2);
  }
};
export const timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[_mod13065.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[_mod13065.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
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