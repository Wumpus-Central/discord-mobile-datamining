const require = arg1;
const dependencyMap = arg6;
function spanTimeInputToSeconds(getTime) {
  if (typeof getTime === "Object") {
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
        sum = require(6385) /* dateTimestampInSeconds */.timestampInSeconds();
        const obj = require(6385) /* dateTimestampInSeconds */;
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
  let traceId;
  if ((function spanIsSentrySpan(getSpanJSON) {
    return typeof getSpanJSON.getSpanJSON === "fileFinishedImporting";
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
        let obj = { span_id: null, trace_id: null, data: null, description: null, parent_span_id: null, start_timestamp: null, timestamp: null, status: null, op: null, origin: null, _metrics_summary: null };
        obj[0] = spanId;
        obj[1] = traceId;
        obj[2] = attributes;
        obj[3] = name;
        obj[4] = parentSpanId;
        obj[5] = spanTimeInputToSeconds(startTime);
        const tmp8 = spanTimeInputToSeconds(endTime);
        obj[6] = tmp8;
        obj[7] = getStatusMessage(status);
        obj[8] = attributes[require(undefined, 6386).SEMANTIC_ATTRIBUTE_SENTRY_OP];
        obj[9] = attributes[require(undefined, 6386).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
        const obj2 = require(6377) /* addNonEnumerableProperty */;
        obj[10] = require(6387) /* getMetricSummaryJsonForSpan */.getMetricSummaryJsonForSpan(getSpanJSON);
        return obj2.dropUndefinedKeys(obj);
      } else {
        obj = { span_id: null, trace_id: null };
        obj[0] = spanId;
        obj[1] = traceId;
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
    if (code.code !== require(6388) /* getSpanStatusFromHttpCode */.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== tmp(6388).SPAN_STATUS_OK) {
        str = code.message || "unknown_error";
        const tmp3 = code.message || "unknown_error";
      }
      return str;
    }
    tmp = require;
  }
}
let c2 = false;
const _sentryChildSpans = "_sentryChildSpans";
const _sentryRootSpan = "_sentryRootSpan";
arg5.TRACE_FLAG_NONE = 0;
arg5.TRACE_FLAG_SAMPLED = 1;
arg5.addChildSpanToSpan = function addChildSpanToSpan(arg0, arg1) {
  let tmp2 = arg0[_sentryRootSpan];
  if (!tmp2) {
    tmp2 = arg0;
  }
  const result = require(6377) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg1, _sentryRootSpan, tmp2);
  if (arg0[_sentryChildSpans]) {
    arg0[tmp6].add(arg1);
    const obj3 = arg0[tmp6];
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = require(6377) /* addNonEnumerableProperty */.addNonEnumerableProperty(arg0, tmp6, set);
    const tmp3Result = require(6377) /* addNonEnumerableProperty */;
  }
};
arg5.getActiveSpan = function getActiveSpan() {
  const mainCarrier = require(6389) /* getMainCarrier */.getMainCarrier();
  const obj = require(6389) /* getMainCarrier */;
  const asyncContextStrategy = require(6390) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    let tmpResult = tmp(6393);
    tmpResult = tmp(6398);
    activeSpan = tmpResult._getSpanForScope(tmpResult.getCurrentScope());
  }
  return activeSpan;
};
arg5.getRootSpan = function getRootSpan(arg0) {
  return arg0[_sentryRootSpan] || arg0;
};
arg5.getSpanDescendants = function getSpanDescendants(arg0) {
  const set = new Set();
  function addSpanChildren(arg0) {
    if (!set.has(arg0)) {
      if (outer1_5(arg0)) {
        set.add(arg0);
        let tmp3 = outer1_7;
        if (arg0[outer1_7]) {
          const _Array = Array;
          let items = Array.from(arg0[tmp3]);
        } else {
          items = [];
        }
        tmp3 = items;
        items[Symbol.iterator]();
      }
    }
  }
  addSpanChildren(arg0);
  return Array.from(set);
};
arg5.getStatusMessage = getStatusMessage;
arg5.removeChildSpanFromSpan = function removeChildSpanFromSpan(arg0, arg1) {
  if (arg0[_sentryChildSpans]) {
    arg0[tmp].delete(arg1);
    const obj = arg0[tmp];
  }
};
arg5.showSpanDropWarning = function showSpanDropWarning() {
  if (!c2) {
    require(6371) /* consoleSandbox */.consoleSandbox(() => {
      console.warn("[Sentry] Deprecation warning: Returning null from `beforeSendSpan` will be disallowed from SDK version 9.0.0 onwards. The callback will only support mutating spans. To drop certain spans, configure the respective integrations directly.");
    });
    c2 = true;
    const obj = require(6371) /* consoleSandbox */;
  }
};
arg5.spanIsSampled = spanIsSampled;
arg5.spanTimeInputToSeconds = spanTimeInputToSeconds;
arg5.spanToJSON = spanToJSON;
arg5.spanToTraceContext = function spanToTraceContext(spanContext) {
  let isRemote;
  let spanId;
  const trace_id = spanContext.spanContext();
  ({ spanId, isRemote } = trace_id);
  let parent_span_id = span_id;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  if (isRemote) {
    span_id = require(6381) /* generatePropagationContext */.generateSpanId();
    const obj = require(6381) /* generatePropagationContext */;
  }
  return require(6377) /* addNonEnumerableProperty */.dropUndefinedKeys({ parent_span_id, span_id, trace_id: trace_id.traceId });
};
arg5.spanToTraceHeader = function spanToTraceHeader(spanContext) {
  let spanId;
  let traceId;
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  return require(6383) /* regExp */.generateSentryTraceHeader(traceId, spanId, 1 === spanContext.spanContext().traceFlags);
};
arg5.spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  let data;
  let op;
  let origin;
  let parent_span_id;
  let spanId;
  let status;
  let traceId;
  ({ spanId, traceId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  ({ data, op, parent_span_id, status, origin } = spanToJSON(spanContext));
  const tmp2 = spanToJSON(spanContext);
  return require(6377) /* addNonEnumerableProperty */.dropUndefinedKeys({ parent_span_id, span_id, trace_id, data, op, status, origin });
};
arg5.updateMetricSummaryOnActiveSpan = function updateMetricSummaryOnActiveSpan(arg0, sanitizeMetricKeyResult, diff, sanitizeUnitResult, arg4, bucketKey) {
  const mainCarrier = require(6389) /* getMainCarrier */.getMainCarrier();
  const obj = require(6389) /* getMainCarrier */;
  const asyncContextStrategy = require(6390) /* getAsyncContextStrategy */.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    let tmpResult = tmp(6393);
    tmpResult = tmp(6398);
    activeSpan = tmpResult._getSpanForScope(tmpResult.getCurrentScope());
  }
  if (activeSpan) {
    const tmpResult1 = tmp(6387);
    const result = tmpResult1.updateMetricSummaryOnSpan(activeSpan, arg0, sanitizeMetricKeyResult, diff, sanitizeUnitResult, arg4, bucketKey);
  }
};
arg5.updateSpanName = function updateSpanName(updateName) {
  updateName.updateName(arg1);
  updateName.setAttributes({ [closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 });
};