// === Module 12909: ? ===

// Module 12909
import _mod12867 from "module_12867" /* 12867 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12872 */;
import _mod12882 from "module_12882" /* 12882 */;
import _mod12895 from "module_12895" /* 12895 */;

require = arg1;
const dependencyMap = arg6;

export const setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  if (activeSpan === undefined) {
    let obj = spanTimeInputToSeconds;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
  }
  if (rootSpan) {
    if (_mod12895.DEBUG_BUILD) {
      const logger = _mod12867.logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    obj = {};
    obj[_mod12882.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj[_mod12882.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj);
  }
};
export const timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[_mod12882.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[_mod12882.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
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