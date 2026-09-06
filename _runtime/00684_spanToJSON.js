// === Module 684: spanToJSON ===

// Module 684 (spanToJSON)
import unwrapScopeFromWeakRef from "unwrapScopeFromWeakRef" /* 685 */;
import _mod687 from "module_687" /* 687 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import _mod690 from "module_690" /* 690 */;
import generateSpanId from "generateSpanId" /* 694 */;
import _mod699 from "module_699" /* 699 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 703 */;
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "SEMANTIC_ATTRIBUTE_CACHE_HIT" /* 704 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 705 */;
import _mod706 from "module_706" /* 706 */;
import _getSpanForScope from "_getSpanForScope" /* 709 */;
import _mod713 from "module_713" /* 713 */;

require = arg1;
const dependencyMap = arg6;
function spanToJSON(getSpanJSON) {
  if (typeof getSpanJSON.getSpanJSON === "function") {
    return getSpanJSON.getSpanJSON();
  } else {
    ({ spanId, traceId } = getSpanJSON.spanContext());
    if (tmp) {
      ({ attributes, startTime, endTime, status, links } = getSpanJSON);
      let obj = { span_id: spanId, trace_id: traceId, data: attributes, description: getSpanJSON.name, parent_span_id: null, start_timestamp: null, timestamp: null, status: null, op: null, origin: null, links: null };
      if ("parentSpanId" in getSpanJSON) {
        let parentSpanId = getSpanJSON.parentSpanId;
      } else if ("parentSpanContext" in getSpanJSON) {
        const parentSpanContext = getSpanJSON.parentSpanContext;
        spanId = undefined;
        if (parentSpanContext != null) {
          spanId = parentSpanContext.spanId;
        }
        parentSpanId = spanId;
      }
      obj.parent_span_id = parentSpanId;
      if (typeof startTime === "number") {
        let result = startTime;
        if (startTime > 9999999999) {
          result = startTime / 1000;
        }
        let sum = result;
      } else {
        const _Array = Array;
        if (Array.isArray(startTime)) {
          sum = startTime[0] + startTime[1] / 1000000000;
        } else {
          const _Date = Date;
          if (startTime instanceof Date) {
            const time = startTime.getTime();
            let result1 = time;
            if (time > 9999999999) {
              result1 = time / 1000;
            }
            sum = result1;
          } else {
            sum = dateTimestampInSeconds.timestampInSeconds();
          }
        }
      }
      obj.start_timestamp = sum;
      if (typeof endTime === "number") {
        let result2 = endTime;
        if (endTime > 9999999999) {
          result2 = endTime / 1000;
        }
        let sum1 = result2;
      } else {
        const _Array2 = Array;
        if (Array.isArray(endTime)) {
          sum1 = endTime[0] + endTime[1] / 1000000000;
        } else {
          const _Date2 = Date;
          if (endTime instanceof Date) {
            const time1 = endTime.getTime();
            let result3 = time1;
            if (time1 > 9999999999) {
              result3 = time1 / 1000;
            }
            sum1 = result3;
          } else {
            sum1 = dateTimestampInSeconds.timestampInSeconds();
          }
        }
      }
      obj.timestamp = sum1;
      let tmp16;
      if (status) {
        if (status.code !== SPAN_STATUS_ERROR.SPAN_STATUS_UNSET) {
          let str3 = "ok";
          if (status.code !== SPAN_STATUS_ERROR.SPAN_STATUS_OK) {
            str3 = status.message || "internal_error";
            const tmp19 = status.message || "internal_error";
          }
          tmp16 = str3;
        }
      }
      obj.status = tmp16;
      obj.op = attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_OP];
      obj.origin = attributes[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      let mapped;
      if (links) {
        if (links.length > 0) {
          mapped = links.map((attributes) => {
            const context = attributes.context;
            ({ spanId, traceId, traceFlags } = context);
            const merged = Object.assign(Object.assign(context, Object.assign({ spanId: 0, traceId: 0, traceFlags: 0 })));
            return { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: attributes.attributes };
          });
        }
      }
      obj.links = mapped;
      return obj;
    } else {
      obj = { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
      return obj;
    }
    const spanContextResult = getSpanJSON.spanContext();
    tmp = getSpanJSON.attributes && getSpanJSON.startTime && getSpanJSON.name && getSpanJSON.endTime && getSpanJSON.status;
  }
}
function spanIsSampled(spanContext) {
  return 1 === spanContext.spanContext().traceFlags;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
  const result = _mod687.addNonEnumerableProperty(sentrySpan, _sentryRootSpan, tmp2);
  if (parentSpan[_sentryChildSpans]) {
    parentSpan[_sentryChildSpans].add(sentrySpan);
  } else {
    const _Set = Set;
    const items = [sentrySpan];
    const set = new Set(items);
    const result1 = _mod687.addNonEnumerableProperty(parentSpan, _sentryChildSpans, set);
    const tmp3Result = _mod687;
  }
};
export const convertSpanLinksForEnvelope = function convertSpanLinksForEnvelope(_links) {
  let mapped;
  if (_links) {
    if (_links.length > 0) {
      mapped = _links.map((attributes) => {
        const context = attributes.context;
        ({ spanId, traceId, traceFlags } = context);
        const merged = Object.assign(Object.assign(context, Object.assign({ spanId: 0, traceId: 0, traceFlags: 0 })));
        return { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: attributes.attributes };
      });
    }
  }
  return mapped;
};
export const getActiveSpan = function getActiveSpan() {
  const mainCarrier = _mod690.getMainCarrier();
  const asyncContextStrategy = _mod706.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = _mod713;
    activeSpan = tmpResult._getSpanForScope(tmpResult.getCurrentScope());
  }
  return activeSpan;
};
export const getRootSpan = function getRootSpan(_getSpanForScopeResult) {
  return _getSpanForScopeResult[_sentryRootSpan] || _getSpanForScopeResult;
};
export const getSpanDescendants = function getSpanDescendants(arg0) {
  const set = new Set();
  function addSpanChildren(arg0) {
    if (!set.has(arg0)) {
      if (spanIsSampled(arg0)) {
        set.add(arg0);
        let tmp3 = _sentryChildSpans;
        if (arg0[_sentryChildSpans]) {
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
export const getStatusMessage = function getStatusMessage(code) {
  if (code) {
    if (code.code !== SPAN_STATUS_ERROR.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== SPAN_STATUS_ERROR.SPAN_STATUS_OK) {
        str = code.message || "internal_error";
        const tmp3 = code.message || "internal_error";
      }
      return str;
    }
  }
};
export const removeChildSpanFromSpan = function removeChildSpanFromSpan(c14, isRecording) {
  if (dependencyMap[_sentryChildSpans]) {
    dependencyMap[tmp].delete(isRecording);
  }
};
export const showSpanDropWarning = function showSpanDropWarning() {
  if (!c2) {
    consoleSandbox.consoleSandbox(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    c2 = true;
  }
};
export { spanIsSampled };
export const spanTimeInputToSeconds = function spanTimeInputToSeconds(getTime) {
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
        sum = dateTimestampInSeconds.timestampInSeconds();
      }
    }
  }
  return sum;
};
export { spanToJSON };
export const spanToTraceContext = function spanToTraceContext(spanContext) {
  const spanContextResult = spanContext.spanContext();
  ({ spanId, isRemote } = spanContextResult);
  let parent_span_id = spanId;
  if (!isRemote) {
    parent_span_id = spanToJSON(spanContext).parent_span_id;
  }
  let obj = unwrapScopeFromWeakRef;
  const scope = obj.getCapturedScopesOnSpan(spanContext).scope;
  obj = { parent_span_id, span_id: null, trace_id: null };
  if (isRemote) {
    let propagationSpanId;
    if (scope != null) {
      propagationSpanId = scope.getPropagationContext().propagationSpanId;
    }
    if (!propagationSpanId) {
      propagationSpanId = generateSpanId.generateSpanId();
      const tmp3Result = generateSpanId;
    }
    spanId = propagationSpanId;
  }
  obj.span_id = spanId;
  obj.trace_id = spanContextResult.traceId;
  return obj;
};
export const spanToTraceHeader = function spanToTraceHeader(spanContext) {
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  return _mod699.generateSentryTraceHeader(traceId, spanId, 1 === spanContext.spanContext().traceFlags);
};
export const spanToTraceparentHeader = function spanToTraceparentHeader(span) {
  ({ traceId, spanId } = span.spanContext());
  const spanContextResult = span.spanContext();
  return _mod699.generateTraceparentHeader(traceId, spanId, 1 === span.spanContext().traceFlags);
};
export const spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  ({ spanId, traceId } = spanContext.spanContext());
  const tmp2 = spanToJSON(spanContext);
  return { parent_span_id: tmp2.parent_span_id, span_id: spanId, trace_id: traceId, data: tmp2.data, op: tmp2.op, status: tmp2.status, origin: tmp2.origin, links: tmp2.links };
};
export const updateSpanName = function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  updateName.setAttributes({ [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 });
};