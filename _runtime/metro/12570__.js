// === Module 12570: ? ===

// Module 12570
import _mod12565 from "module_12565" /* 12565 */;
import _mod12571 from "module_12571" /* 12571 */;
import generatePropagationContext from "generatePropagationContext" /* 12575 */;
import _mod12577 from "module_12577" /* 12577 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12579 */;
import _mod12580 from "module_12580" /* 12580 */;
import _slicedToArray from "_slicedToArray" /* 12581 */;
import _mod12582 from "module_12582" /* 12582 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12584 from "module_12584" /* 12584 */;
import _mod12587 from "module_12587" /* 12587 */;
import _mod12592 from "module_12592" /* 12592 */;

let set;

function spanTimeInputToSeconds(getTime) {
  let sum;
  if (typeof getTime === "number") {
    let result = getTime;
    if (getTime > 9999999999) {
      result = getTime / 1000;
    }
    sum = result;
  } else {
    const _Array = Array;
    if (Array.isArray(getTime)) {
      sum = getTime[0] + getTime[1] / 1000000000;
    } else {
      const _Date = Date;
      if (getTime instanceof Date) {
        const time = getTime.getTime();
        let result1 = time;
        if (time > 9999999999) {
          result1 = time / 1000;
        }
        sum = result1;
      } else {
        const obj = _browserPerformanceTimeOriginMode;
        sum = obj.timestampInSeconds();
      }
    }
  }
  return sum;
}
function spanToJSON(getSpanJSON) {
  let endTime;
  let name;
  let parentSpanId;
  let spanId;
  let startTime;
  let status;
  let tmp5Result;
  let traceId;
  function spanIsSentrySpan(getSpanJSON) {
    return typeof getSpanJSON.getSpanJSON === "function";
  }
  function spanIsOpenTelemetrySdkTraceBaseSpan(attributes) {
    return attributes.attributes && attributes.startTime && attributes.name && attributes.endTime && attributes.status;
  }
  if (spanIsSentrySpan(getSpanJSON)) {
    return getSpanJSON.getSpanJSON();
  } else {
    try {
      ({ spanId, traceId } = getSpanJSON.spanContext());
      getSpanJSON.spanContext();
      if (spanIsOpenTelemetrySdkTraceBaseSpan(getSpanJSON)) {
        const attributes = getSpanJSON.attributes;
        ({ startTime, name, endTime, parentSpanId, status } = getSpanJSON);
        const obj2 = { span_id: spanId, trace_id: traceId, data: attributes, description: name, parent_span_id: parentSpanId, start_timestamp: spanTimeInputToSeconds(startTime), timestamp: spanTimeInputToSeconds(endTime), status: getStatusMessage(status), op: attributes[_mod12580.SEMANTIC_ATTRIBUTE_SENTRY_OP], origin: attributes[_mod12580.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN], _metrics_summary: tmp5Result.getMetricSummaryJsonForSpan(getSpanJSON) };
        const dropUndefinedKeys = _mod12571.dropUndefinedKeys;
        _mod12571;
        spanTimeInputToSeconds(endTime);
        tmp5Result = _slicedToArray;
        return dropUndefinedKeys(obj2);
      } else {
        return { span_id: spanId, trace_id: traceId };
      }
    } catch (err) {
      return {};
    }
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
function getStatusMessage(code) {
  const tmp = code;
  if (tmp) {
    if (code.code !== _mod12582.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== _mod12582.SPAN_STATUS_OK) {
        str = code.message || "unknown_error";
      }
      return str;
    }
  }
}
let c2 = false;
const _sentryChildSpans = "_sentryChildSpans";
const _sentryRootSpan = "_sentryRootSpan";

export const TRACE_FLAG_NONE = 0;
export const TRACE_FLAG_SAMPLED = 1;
export const addChildSpanToSpan = function addChildSpanToSpan(parentSpan, sentrySpan) {
  const tmp2 = parentSpan[_sentryRootSpan] || parentSpan;
  const obj = _mod12571;
  const result = obj.addNonEnumerableProperty(sentrySpan, _sentryRootSpan, tmp2);
  if (parentSpan[_sentryChildSpans]) {
    const obj2 = parentSpan[_sentryChildSpans];
    obj2.add(sentrySpan);
  } else {
    const _Set = Set;
    const items = [sentrySpan];
    const self = this;
    const self2 = this;
    const addNonEnumerableProperty = _mod12571.addNonEnumerableProperty;
    _mod12571;
    set = new Set(items);
    const result1 = addNonEnumerableProperty(parentSpan, _sentryChildSpans, set);
  }
};
export const getActiveSpan = function getActiveSpan() {
  let activeSpan;
  const obj = _mod12583;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12584;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _mod12587._getSpanForScope;
    _mod12587;
    const tmpResult2 = _mod12592;
    activeSpan = _getSpanForScope(tmpResult2.getCurrentScope());
  }
  return activeSpan;
};
export const getRootSpan = function getRootSpan(activeSpan) {
  return activeSpan[_sentryRootSpan] || activeSpan;
};
export const getSpanDescendants = function getSpanDescendants(c12) {
  set = new Set();
  function addSpanChildren(c12) {
    if (!set.has(c12)) {
      if (spanIsSampled(c12)) {
        set.add(c12);
        if (c12[_sentryChildSpans]) {
          const _Array = Array;
          let items = Array.from(c12[tmp3]);
        } else {
          items = [];
        }
        for (const item10019 of items) {
          let tmp8 = addSpanChildren(item10019);
          continue;
        }
      }
    }
  }
  addSpanChildren(c12);
  return Array.from(set);
};
export { getStatusMessage };
export const removeChildSpanFromSpan = function removeChildSpanFromSpan(c12, isRecording) {
  if (c12[_sentryChildSpans]) {
    const obj = c12[tmp];
    obj.delete(isRecording);
  }
};
export const showSpanDropWarning = function showSpanDropWarning() {
  const tmp = c2;
  if (!tmp) {
    const obj = _mod12565;
    obj.consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    c2 = true;
  }
};
export { spanIsSampled };
export { spanTimeInputToSeconds };
export { spanToJSON };
export const spanToTraceContext = function spanToTraceContext(spanContext) {
  let isRemote;
  let spanId;
  let span_id;
  const spanContextResult = spanContext.spanContext();
  ({ spanId, isRemote } = spanContextResult);
  let parent_span_id = span_id;
  const trace_id = spanContextResult.traceId;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  if (isRemote) {
    const obj = generatePropagationContext;
    span_id = obj.generateSpanId();
  }
  const obj2 = _mod12571;
  return obj2.dropUndefinedKeys({ parent_span_id, span_id, trace_id });
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  spanContext.spanContext();
  const traceFlags = spanContext.spanContext().traceFlags;
  const obj = _mod12577;
  return obj.generateSentryTraceHeader(traceId, spanId, 1 === traceFlags);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  let data;
  let op;
  let origin;
  let parent_span_id;
  let spanId;
  let status;
  let traceId;
  ({ spanId, traceId } = spanContext.spanContext());
  spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  spanToJSON(spanContext);
  const obj = _mod12571;
  return obj.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
export const updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  let activeSpan;
  const obj = _mod12583;
  const mainCarrier = obj.getMainCarrier();
  const obj2 = _mod12584;
  const asyncContextStrategy = obj2.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const _getSpanForScope = _mod12587._getSpanForScope;
    _mod12587;
    const tmpResult3 = _mod12592;
    activeSpan = _getSpanForScope(tmpResult3.getCurrentScope());
  }
  if (activeSpan) {
    const tmpResult4 = _slicedToArray;
    const result = tmpResult4.updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
};
export const updateSpanName = function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  const obj = { [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 };
  updateName.setAttributes(obj);
};