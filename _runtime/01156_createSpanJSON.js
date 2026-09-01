// _runtime/01156_createSpanJSON.js
import RN_GLOBAL_OBJ2 from "00816_RN_GLOBAL_OBJ.js";
import registerSpanErrorInstrumentation from "00817_registerSpanErrorInstrumentation.js";

require = arg1;
const dependencyMap = arg6;
function createSpanJSON(span_id) {
  let obj = registerSpanErrorInstrumentation;
  const merged = Object.assign({ status: "ok" }, span_id);
  if (span_id.span_id) {
    span_id = span_id.span_id;
  } else {
    let tmpResult = tmp(817);
    span_id = tmpResult.uuid4().substring(16);
    const str = tmpResult.uuid4();
  }
  obj = { span_id, trace_id: null, data: null };
  if (span_id.trace_id) {
    let trace_id = span_id.trace_id;
  } else {
    tmpResult = tmp(817);
    trace_id = tmpResult.uuid4();
  }
  obj[1] = trace_id;
  obj = {
    [tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_OP]: span_id.op,
    [tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: span_id.origin,
  };
  obj[2] = registerSpanErrorInstrumentation.dropUndefinedKeys(Object.assign(obj, span_id.data ? span_id.data : {}));
  return obj.dropUndefinedKeys(Object.assign(merged, obj));
}
let closure_2 = Date.now();
arg5.defaultTransactionSource = "component";
arg5.customTransactionSource = "custom";
arg5.MARGIN_OF_ERROR_SECONDS = 0.05;
arg5.getTimeOriginMilliseconds = function getTimeOriginMilliseconds() {
  return closure_2;
};
arg5.isNearToNow = function isNearToNow(timestamp2) {
  let tmp = timestamp2;
  if (tmp) {
    const _Math = Math;
    tmp = Math.abs(registerSpanErrorInstrumentation.timestampInSeconds() - timestamp2) <= 0.05;
    const obj = registerSpanErrorInstrumentation;
  }
  return tmp;
};
arg5.setSpanDurationAsMeasurement = function setSpanDurationAsMeasurement(time_to_full_display, closure_1) {
  const obj = registerSpanErrorInstrumentation;
  const tmp = require;
  ({ timestamp, start_timestamp } = registerSpanErrorInstrumentation.spanToJSON(closure_1));
  let tmp4 = timestamp;
  if (timestamp) {
    tmp4 = start_timestamp;
  }
  if (tmp4) {
    registerSpanErrorInstrumentation.setMeasurement(
      time_to_full_display,
      1000 * (timestamp - start_timestamp),
      "millisecond",
    );
    const tmpResult = registerSpanErrorInstrumentation;
  }
};
arg5.setSpanDurationAsMeasurementOnSpan = function setSpanDurationAsMeasurementOnSpan(
  time_to_initial_display,
  arg1,
  addEvent,
) {
  let obj = registerSpanErrorInstrumentation;
  ({ timestamp, start_timestamp } = obj.spanToJSON(arg1));
  let tmp4 = timestamp;
  if (timestamp) {
    tmp4 = start_timestamp;
  }
  if (tmp4) {
    obj = {};
    const result = 1000 * (timestamp - start_timestamp);
    obj[tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = result;
    obj[tmp(817).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    addEvent.addEvent(time_to_initial_display, obj);
  }
};
arg5.setSpanMeasurement = function setSpanMeasurement(addEvent, STALL_COUNT, value, unit) {
  addEvent.addEvent(STALL_COUNT, {
    [closure_0(closure_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value,
    [closure_0(closure_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit,
  });
};
arg5.getLatestChildSpanEndTimestamp = function getLatestChildSpanEndTimestamp(activeSpan) {
  const spanDescendants = registerSpanErrorInstrumentation.getSpanDescendants(activeSpan);
  const mapped = spanDescendants.map((arg0) => callback(table[0]).spanToJSON(arg0).timestamp);
  const found = mapped.filter((arg0) => arg0);
  let applyResult;
  if (found.length) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(found, 0);
    const _Math2 = Math;
    applyResult = HermesBuiltin.apply(items, Math);
  }
  return applyResult;
};
arg5.getBundleStartTimestampMs = function getBundleStartTimestampMs() {
  const __BUNDLE_START_TIME__ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ.__BUNDLE_START_TIME__;
  if (__BUNDLE_START_TIME__) {
    let sum = __BUNDLE_START_TIME__;
    if (tmp(816).RN_GLOBAL_OBJ.nativePerformanceNow) {
      const _Date = Date;
      const timestamp = Date.now();
      const RN_GLOBAL_OBJ = tmp(816).RN_GLOBAL_OBJ;
      sum = timestamp - RN_GLOBAL_OBJ.nativePerformanceNow() + __BUNDLE_START_TIME__;
    }
    return sum;
  } else {
    const debug = tmp(817).debug;
    debug.warn("Missing the bundle start time on the global object.");
  }
};
arg5.createSpanJSON = createSpanJSON;
arg5.createChildSpanJSON = function createChildSpanJSON(c12, arg1) {
  const obj = { op: c12.op, trace_id: c12.trace_id, parent_span_id: c12.span_id, origin: null };
  let str = c12.origin;
  if (!str) {
    str = "manual";
  }
  obj[3] = str;
  return createSpanJSON(Object.assign(obj, arg1));
};
