// _runtime/07417_setMeasurement.js
const require = arg1;
const dependencyMap = arg6;
arg5.setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    let obj = require(7380) /* spanTimeInputToSeconds */;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = require(7380) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
    const obj3 = require(7380) /* spanTimeInputToSeconds */;
  }
  if (rootSpan) {
    if (require(7403) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = tmp9(7375).logger;
      const _HermesInternal = HermesInternal;
      logger.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    obj = {};
    obj[require(7390).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj[require(7390).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
    rootSpan.addEvent(arg0, obj);
  }
};
arg5.timedEventsToMeasurements = function timedEventsToMeasurements(arr) {
  if (arr) {
    if (0 !== arr.length) {
      let obj = {};
      const item = arr.forEach((attributes) => {
        const tmp = attributes.attributes || {};
        const tmp2 = tmp[obj(undefined, outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT];
        const tmp3 = tmp[obj(undefined, outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE];
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