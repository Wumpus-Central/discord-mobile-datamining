// _runtime/12802_spanTimeInputToSeconds.js
import _mod12797 from "metro/12797__.js";
import _mod12803 from "metro/12803__.js";
import generatePropagationContext from "12807_generatePropagationContext.js";
import _mod12809 from "metro/12809__.js";
import _mod12811 from "metro/12811__.js";
import _mod12812 from "metro/12812__.js";
import _mod12813 from "metro/12813__.js";
import _mod12814 from "metro/12814__.js";
import _mod12815 from "metro/12815__.js";
import _mod12816 from "metro/12816__.js";
import _mod12819 from "metro/12819__.js";
import _mod12824 from "metro/12824__.js";

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
        sum = _mod12811.timestampInSeconds();
      }
    }
  }
  return sum;
}
function spanToJSON(getSpanJSON) {
  if (
    (function spanIsSentrySpan(getSpanJSON) {
      return typeof getSpanJSON.getSpanJSON === "function";
    })(getSpanJSON)
  ) {
    return getSpanJSON.getSpanJSON();
  } else {
    try {
      ({ spanId, traceId } = getSpanJSON.spanContext());
      if (
        (function spanIsOpenTelemetrySdkTraceBaseSpan(attributes) {
          return (
            attributes.attributes && attributes.startTime && attributes.name && attributes.endTime && attributes.status
          );
        })(getSpanJSON)
      ) {
        const attributes = getSpanJSON.attributes;
        ({ startTime, name, endTime, parentSpanId, status } = getSpanJSON);
        let obj = {
          span_id: spanId,
          trace_id: traceId,
          data: attributes,
          description: name,
          parent_span_id: parentSpanId,
          start_timestamp: spanTimeInputToSeconds(startTime),
          timestamp: null,
          status: null,
          op: null,
          origin: null,
          _metrics_summary: null,
        };
        const obj2 = _mod12803;
        obj.timestamp = spanTimeInputToSeconds(endTime);
        obj.status = getStatusMessage(status);
        obj.op = attributes[_mod12812.SEMANTIC_ATTRIBUTE_SENTRY_OP];
        obj.origin = attributes[_mod12812.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
        const tmp8 = spanTimeInputToSeconds(endTime);
        obj._metrics_summary = _mod12813.getMetricSummaryJsonForSpan(getSpanJSON);
        return obj2.dropUndefinedKeys(obj);
      } else {
        obj = { span_id: spanId, trace_id: traceId };
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
    if (code.code !== _mod12814.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== _mod12814.SPAN_STATUS_OK) {
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
export const addChildSpanToSpan = function addChildSpanToSpan(parentSpan, sentrySpan) {
  let tmp2 = parentSpan[_sentryRootSpan];
  if (!tmp2) {
    tmp2 = parentSpan;
  }
  const result = _mod12803.addNonEnumerableProperty(sentrySpan, _sentryRootSpan, tmp2);
  if (parentSpan[_sentryChildSpans]) {
    parentSpan[_sentryChildSpans].add(sentrySpan);
  } else {
    const _Set = Set;
    const items = [sentrySpan];
    const set = new Set(items);
    const result1 = _mod12803.addNonEnumerableProperty(parentSpan, _sentryChildSpans, set);
    const tmp3Result = _mod12803;
  }
};
export const getActiveSpan = function getActiveSpan() {
  const mainCarrier = _mod12815.getMainCarrier();
  const asyncContextStrategy = _mod12816.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = _mod12824;
    activeSpan = tmpResult._getSpanForScope(tmpResult.getCurrentScope());
  }
  return activeSpan;
};
export const getRootSpan = function getRootSpan(activeSpan) {
  return activeSpan[_sentryRootSpan] || activeSpan;
};
export const getSpanDescendants = function getSpanDescendants(c12) {
  const set = new Set();
  function addSpanChildren(c12) {
    if (!set.has(dependencyMap)) {
      if (spanIsSampled(dependencyMap)) {
        set.add(dependencyMap);
        let tmp3 = _sentryChildSpans;
        if (dependencyMap[_sentryChildSpans]) {
          const _Array = Array;
          let items = Array.from(dependencyMap[tmp3]);
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
};
export { getStatusMessage };
export const removeChildSpanFromSpan = function removeChildSpanFromSpan(c12, isRecording) {
  if (dependencyMap[_sentryChildSpans]) {
    dependencyMap[tmp].delete(isRecording);
  }
};
export const showSpanDropWarning = function showSpanDropWarning() {
  if (!c2) {
    _mod12797.consoleSandbox(() => {
      console.warn(
        "[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.",
      );
    });
    c2 = true;
  }
};
export { spanIsSampled };
export { spanTimeInputToSeconds };
export { spanToJSON };
export const spanToTraceContext = function spanToTraceContext(spanContext) {
  const trace_id = spanContext.spanContext();
  ({ spanId, isRemote } = trace_id);
  let parent_span_id = span_id;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  if (isRemote) {
    span_id = generatePropagationContext.generateSpanId();
  }
  return _mod12803.dropUndefinedKeys({ parent_span_id, span_id, trace_id: trace_id.traceId });
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  return _mod12809.generateSentryTraceHeader(traceId, spanId, 1 === spanContext.spanContext().traceFlags);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  ({ spanId, traceId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  const tmp2 = spanToJSON(spanContext);
  return _mod12803.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
export const updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(
  metricType,
  sanitizeMetricKeyResult,
  diff,
  sanitizeUnitResult,
  tags,
  bucketKey,
) {
  const mainCarrier = _mod12815.getMainCarrier();
  const asyncContextStrategy = _mod12816.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = _mod12824;
    activeSpan = tmpResult._getSpanForScope(tmpResult.getCurrentScope());
  }
  if (activeSpan) {
    const tmpResult1 = _mod12813;
    const result = tmpResult1.updateMetricSummaryOnSpan(
      activeSpan,
      metricType,
      sanitizeMetricKeyResult,
      diff,
      sanitizeUnitResult,
      tags,
      bucketKey,
    );
  }
};
export const updateSpanName = function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  updateName.setAttributes({
    [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
    [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1,
  });
};
