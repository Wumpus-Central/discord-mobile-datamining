// === Module 13279: spanTimeInputToSeconds ===

// Module 13279 (spanTimeInputToSeconds)
import _mod13274 from "module_13274" /* 13274 */;
import _mod13280 from "module_13280" /* 13280 */;
import generatePropagationContext from "generatePropagationContext" /* 13284 */;
import _mod13286 from "module_13286" /* 13286 */;
import _mod13288 from "module_13288" /* 13288 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 13289 */;
import _mod13290 from "module_13290" /* 13290 */;
import _mod13291 from "module_13291" /* 13291 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13293 from "module_13293" /* 13293 */;
import _mod13296 from "module_13296" /* 13296 */;
import _mod13301 from "module_13301" /* 13301 */;

require = arg1;
const dependencyMap = arg6;
function spanTimeInputToSeconds(getTime) {
  if (typeof getTime === "number") {
    let result = getTime;
    if (getTime > 9999999999) {
      result = getTime / 1000;
    }
    let sum = result;
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
        sum = _mod13288.timestampInSeconds();
      }
    }
  }
  return sum;
}
function spanToJSON(getSpanJSON) {
  if ((function spanIsSentrySpan(getSpanJSON) {
    return typeof getSpanJSON.getSpanJSON === "function";
  })(getSpanJSON)) {
    return getSpanJSON.getSpanJSON();
  } else {
    try {
      ({ spanId, traceId } = getSpanJSON.spanContext());
      if ((function spanIsOpenTelemetrySdkTraceBaseSpan(attributes) {
        return attributes.attributes && attributes.startTime && attributes.name && attributes.endTime && attributes.status;
      })(getSpanJSON)) {
        const attributes = getSpanJSON.attributes;
        ({ startTime, name, endTime, parentSpanId, status } = getSpanJSON);
        const obj3 = { span_id: spanId, trace_id: traceId, data: attributes, description: name, parent_span_id: parentSpanId, start_timestamp: spanTimeInputToSeconds(startTime), timestamp: null, status: null, op: null, origin: null, _metrics_summary: null };
        const obj2 = _mod13280;
        obj3.timestamp = spanTimeInputToSeconds(endTime);
        obj3.status = getStatusMessage(status);
        obj3.op = attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP];
        obj3.origin = attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
        const tmp8 = spanTimeInputToSeconds(endTime);
        obj3._metrics_summary = _mod13290.getMetricSummaryJsonForSpan(getSpanJSON);
        return obj2.dropUndefinedKeys(obj3);
      } else {
        const obj = { span_id: spanId, trace_id: traceId };
        return obj;
      }
      const spanContextResult = getSpanJSON.spanContext();
    } catch (err) {
      return {};
    }
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
function getStatusMessage(code) {
  if (code) {
    if (code.code !== _mod13291.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== _mod13291.SPAN_STATUS_OK) {
        str = code.message || "unknown_error";
        const tmp3 = code.message || "unknown_error";
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
export function addChildSpanToSpan(parentSpan, sentrySpan) {
  let tmp2 = parentSpan[_sentryRootSpan];
  if (!tmp2) {
    tmp2 = parentSpan;
  }
  const result = _mod13280.addNonEnumerableProperty(sentrySpan, _sentryRootSpan, tmp2);
  if (parentSpan[_sentryChildSpans]) {
    parentSpan[_sentryChildSpans].add(sentrySpan);
  } else {
    const _Set = Set;
    items = [sentrySpan];
    const set = new Set(items);
    const result1 = _mod13280.addNonEnumerableProperty(parentSpan, _sentryChildSpans, set);
    const tmp3Result = _mod13280;
  }
}
export function getActiveSpan() {
  const mainCarrier = _mod13292.getMainCarrier();
  const asyncContextStrategy = _mod13293.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = _mod13296;
    activeSpan = tmpResult._getSpanForScope(_mod13301.getCurrentScope());
    const tmpResult2 = _mod13301;
  }
  return activeSpan;
}
export function getRootSpan(activeSpan) {
  return activeSpan[_sentryRootSpan] || activeSpan;
}
export function getSpanDescendants(c12) {
  const set = new Set();
  function addSpanChildren(c12) {
    if (!set.has(dependencyMap)) {
      if (spanIsSampled(dependencyMap)) {
        set.add(dependencyMap);
        let tmp3 = _sentryChildSpans;
        if (dependencyMap[_sentryChildSpans]) {
          const _Array = Array;
          items = Array.from(dependencyMap[tmp3]);
        } else {
          items = [];
        }
        tmp3 = items;
        items[Symbol.iterator]();
      }
    }
  }
  addSpanChildren(c12);
  return Array.from(set);
}
export { getStatusMessage };
export function removeChildSpanFromSpan(c12, isRecording) {
  if (dependencyMap[_sentryChildSpans]) {
    dependencyMap[tmp].delete(isRecording);
  }
}
export function showSpanDropWarning() {
  if (!c2) {
    _mod13274.consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    c2 = true;
  }
}
export { spanIsSampled };
export { spanTimeInputToSeconds };
export { spanToJSON };
export function spanToTraceContext(spanContext) {
  const trace_id = spanContext.spanContext();
  ({ spanId, isRemote } = trace_id);
  let parent_span_id = span_id;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  if (isRemote) {
    span_id = generatePropagationContext.generateSpanId();
  }
  return _mod13280.dropUndefinedKeys({ parent_span_id, span_id, trace_id: trace_id.traceId });
}
export function spanToTraceHeader(spanContext) {
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  return _mod13286.generateSentryTraceHeader(traceId, spanId, 1 === spanContext.spanContext().traceFlags);
}
export function spanToTransactionTraceContext(spanContext) {
  ({ spanId, traceId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  const tmp2 = spanToJSON(spanContext);
  return _mod13280.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
}
export function updateMetricSummaryOnActiveSpan(metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey) {
  const mainCarrier = _mod13292.getMainCarrier();
  const asyncContextStrategy = _mod13293.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = _mod13296;
    activeSpan = tmpResult._getSpanForScope(_mod13301.getCurrentScope());
    const tmpResult3 = _mod13301;
  }
  if (activeSpan) {
    const tmpResult4 = _mod13290;
    const result = tmpResult4.updateMetricSummaryOnSpan(activeSpan, metricType, sanitizeMetricKeyResult, diff, sanitizeUnitResult, tags, bucketKey);
  }
}
export function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  updateName.setAttributes({ [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 });
}