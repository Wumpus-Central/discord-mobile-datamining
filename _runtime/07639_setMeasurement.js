// === Module 7639: setMeasurement ===

// Module 7639 (setMeasurement)
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 7602 */;
import _mod7612 from "module_7612" /* 7612 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7625 */;

require = arg1;
const dependencyMap = arg6;
arg5.setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    let obj = spanTimeInputToSeconds;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = spanTimeInputToSeconds.getRootSpan(activeSpan);
    const obj3 = spanTimeInputToSeconds;
  }
  if (rootSpan) {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const logger = tmp9(7597).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    obj = {};
    obj[_mod7612.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj[_mod7612.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj);
  }
};
arg5.timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[obj(undefined, closure_1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[obj(undefined, closure_1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
        let tmp4 = typeof tmp2 === "string";
        if (typeof tmp2 === "string") {
          tmp4 = typeof tmp3 === "number";
        }
        if (tmp4) {
          obj = { value: null, unit: null };
          obj[0] = tmp3;
          obj[1] = tmp2;
          obj[attributes.name] = obj;
        }
      });
      return obj;
    }
  }
};