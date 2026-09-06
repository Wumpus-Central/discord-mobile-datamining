// _runtime/metro/01021__.js
import RN_GLOBAL_OBJ2 from "../00681_RN_GLOBAL_OBJ.js";
import _mod682 from "00682__.js";

require = arg1;
const dependencyMap = arg6;
function createSpanJSON(span_id) {
  let obj = _mod682;
  const merged = Object.assign({ status: "ok" }, span_id);
  if (span_id.span_id) {
    span_id = span_id.span_id;
  } else {
    let tmpResult = _mod682;
    span_id = tmpResult.uuid4().substring(16);
    const str = tmpResult.uuid4();
  }
  obj = { span_id, trace_id: null, data: null };
  if (span_id.trace_id) {
    let trace_id = span_id.trace_id;
  } else {
    tmpResult = _mod682;
    trace_id = tmpResult.uuid4();
  }
  obj.trace_id = trace_id;
  obj = {
    [_mod682.SEMANTIC_ATTRIBUTE_SENTRY_OP]: span_id.op,
    [_mod682.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: span_id.origin,
  };
  obj.data = _mod682.dropUndefinedKeys(Object.assign(obj, span_id.data ? span_id.data : {}));
  return obj.dropUndefinedKeys(Object.assign(merged, obj));
}
let closure_2 = Date.now();

export const defaultTransactionSource = "component";
export const customTransactionSource = "custom";
export const MARGIN_OF_ERROR_SECONDS = 0.05;
export function getTimeOriginMilliseconds() {
  return closure_2;
}
export const isNearToNow = function isNearToNow(timestamp2) {
  let tmp = timestamp2;
  if (tmp) {
    const _Math = Math;
    tmp = Math.abs(_mod682.timestampInSeconds() - timestamp2) <= 0.05;
  }
  return tmp;
};
export const setSpanDurationAsMeasurement = function setSpanDurationAsMeasurement(time_to_full_display, _undefined) {
  ({ timestamp, start_timestamp } = _mod682.spanToJSON(_undefined));
  let tmp4 = timestamp;
  if (timestamp) {
    tmp4 = start_timestamp;
  }
  if (tmp4) {
    _mod682.setMeasurement(time_to_full_display, 1000 * (timestamp - start_timestamp), "millisecond");
    const tmpResult = _mod682;
  }
  const spanToJSONResult = _mod682.spanToJSON(_undefined);
};
export const setSpanDurationAsMeasurementOnSpan = function setSpanDurationAsMeasurementOnSpan(
  time_to_initial_display,
  arg1,
  activeSpan,
) {
  let obj = _mod682;
  ({ timestamp, start_timestamp } = obj.spanToJSON(arg1));
  let tmp4 = timestamp;
  if (timestamp) {
    tmp4 = start_timestamp;
  }
  if (tmp4) {
    obj = {};
    const result = 1000 * (timestamp - start_timestamp);
    obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = result;
    obj[_mod682.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    activeSpan.addEvent(time_to_initial_display, obj);
  }
  const spanToJSONResult = obj.spanToJSON(arg1);
};
export const setSpanMeasurement = function setSpanMeasurement(addEvent, STALL_COUNT, value, unit) {
  addEvent.addEvent(STALL_COUNT, {
    [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value,
    [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit,
  });
};
export const getLatestChildSpanEndTimestamp = function getLatestChildSpanEndTimestamp(activeSpan) {
  const spanDescendants = _mod682.getSpanDescendants(activeSpan);
  const mapped = spanDescendants.map((item) => _mod682.spanToJSON(item).timestamp);
  const found = mapped.filter((item) => item);
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
export const getBundleStartTimestampMs = function getBundleStartTimestampMs() {
  const __BUNDLE_START_TIME__ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ.__BUNDLE_START_TIME__;
  if (__BUNDLE_START_TIME__) {
    let sum = __BUNDLE_START_TIME__;
    if (RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ.nativePerformanceNow) {
      const _Date = Date;
      const timestamp = Date.now();
      const RN_GLOBAL_OBJ = RN_GLOBAL_OBJ2.RN_GLOBAL_OBJ;
      sum = timestamp - RN_GLOBAL_OBJ.nativePerformanceNow() + __BUNDLE_START_TIME__;
    }
    return sum;
  } else {
    const debug = _mod682.debug;
    debug.warn("Missing the bundle start time on the global object.");
  }
};
export { createSpanJSON };
export const createChildSpanJSON = function createChildSpanJSON(op, arg1) {
  const obj = { op: op.op, trace_id: op.trace_id, parent_span_id: op.span_id, origin: null };
  let str = op.origin;
  if (!str) {
    str = "manual";
  }
  obj.origin = str;
  return createSpanJSON(Object.assign(obj, arg1));
};
