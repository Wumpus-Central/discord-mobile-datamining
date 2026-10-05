// _runtime/01032_defaultTransactionSource.js
import RN_GLOBAL_OBJ2 from "00692_RN_GLOBAL_OBJ.js";
import _mod693 from "metro/00693__.js";

function createSpanJSON(span_id) {
  let obj2;
  let tmpResult4;
  let trace_id;
  const dropUndefinedKeys = _mod693.dropUndefinedKeys;
  const _Object = Object;
  _mod693;
  const merged = Object.assign({ status: "ok" }, span_id);
  if (span_id.span_id) {
    span_id = span_id.span_id;
  } else {
    const tmpResult = _mod693;
    const str = tmpResult.uuid4();
    span_id = str.substring(16);
  }
  const obj = {
    span_id,
    trace_id,
    data: tmpResult4.dropUndefinedKeys(Object.assign(obj2, span_id.data ? span_id.data : {})),
  };
  if (span_id.trace_id) {
    trace_id = span_id.trace_id;
  } else {
    const tmpResult3 = _mod693;
    trace_id = tmpResult3.uuid4();
  }
  tmpResult4 = _mod693;
  obj2 = {
    [_mod693.SEMANTIC_ATTRIBUTE_SENTRY_OP]: span_id.op,
    [_mod693.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: span_id.origin,
  };
  return dropUndefinedKeys(assign(merged, obj));
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
    const obj = _mod693;
    tmp = abs(obj.timestampInSeconds() - timestamp2) <= 0.05;
  }
  return tmp;
};
export const setSpanDurationAsMeasurement = function setSpanDurationAsMeasurement(time_to_full_display, _undefined) {
  let start_timestamp;
  let timestamp;
  const obj = _mod693;
  ({ timestamp, start_timestamp } = obj.spanToJSON(_undefined));
  obj.spanToJSON(_undefined);
  const tmp4 = timestamp && start_timestamp;
  if (tmp4) {
    const tmpResult = _mod693;
    tmpResult.setMeasurement(time_to_full_display, 1000 * (timestamp - start_timestamp), "millisecond");
  }
};
export const setSpanDurationAsMeasurementOnSpan = function setSpanDurationAsMeasurementOnSpan(
  time_to_initial_display,
  span,
  activeSpan,
) {
  let start_timestamp;
  let timestamp;
  const obj = _mod693;
  ({ timestamp, start_timestamp } = obj.spanToJSON(span));
  obj.spanToJSON(span);
  const tmp4 = timestamp && start_timestamp;
  if (tmp4) {
    const obj2 = {};
    const result = 1000 * (timestamp - start_timestamp);
    obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE] = result;
    obj2[_mod693.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT] = "millisecond";
    activeSpan.addEvent(time_to_initial_display, obj2);
  }
};
export const setSpanMeasurement = function setSpanMeasurement(addEvent, STALL_COUNT, value, unit) {
  const obj = {
    [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE]: value,
    [closure_1_0(closure_1_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT]: unit,
  };
  addEvent.addEvent(STALL_COUNT, obj);
};
export const getLatestChildSpanEndTimestamp = function getLatestChildSpanEndTimestamp(activeSpan) {
  let obj = _mod693;
  const spanDescendants = obj.getSpanDescendants(activeSpan);
  const mapped = spanDescendants.map((item) => {
    const obj = _mod693;
    return obj.spanToJSON(item).timestamp;
  });
  const found = mapped.filter((item) => item);
  let applyResult;
  if (found.length) {
    const _Math = Math;
    const items = [];
    HermesBuiltin.arraySpread(items, found, 0);
    const _Math2 = Math;
    applyResult = HermesBuiltin.apply(max, items, Math);
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
    const debug = _mod693.debug;
    debug.warn("Missing the bundle start time on the global object.");
  }
};
export { createSpanJSON };
export const createChildSpanJSON = function createChildSpanJSON(op, arg1) {
  let str;
  const obj = { op: op.op, trace_id: op.trace_id, parent_span_id: op.span_id, origin: str };
  str = op.origin;
  const _Object = Object;
  if (!str) {
    str = "manual";
  }
  return createSpanJSON(assign(obj, arg1));
};
