// _runtime/00862_setMeasurement.js
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.setMeasurement = function setMeasurement(arg0, arg1, arg2) {
  let activeSpan = arg3;
  if (arg3 === undefined) {
    let obj = require(819) /* spanToJSON */;
    activeSpan = obj.getActiveSpan();
  }
  let rootSpan = activeSpan;
  if (activeSpan) {
    rootSpan = require(819) /* spanToJSON */.getRootSpan(activeSpan);
    const obj3 = require(819) /* spanToJSON */;
  }
  if (rootSpan) {
    if (require(823) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const debug = tmp9(824).debug;
      const _HermesInternal = HermesInternal;
      debug.log("[Measurement] Setting measurement on root span: " + arg0 + " = " + arg1 + " " + arg2);
    }
    obj = {};
    obj[require(839).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = arg1;
    obj[require(839).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = arg2;
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
        let tmp4 = typeof tmp2 === "y";
        if (typeof tmp2 !== "__FORMATJS_LISTFORMAT_DATA__") {
          tmp4 = typeof tmp3 === "Object";
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