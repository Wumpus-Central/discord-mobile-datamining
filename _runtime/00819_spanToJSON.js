// === Module 819: spanToJSON ===

// Module 819 (spanToJSON)
import unwrapScopeFromWeakRef from "unwrapScopeFromWeakRef" /* 820 */;
import addNonEnumerableProperty from "addNonEnumerableProperty" /* 822 */;
import consoleSandbox from "consoleSandbox" /* 824 */;
import getGlobalSingleton from "getGlobalSingleton" /* 825 */;
import generateSpanId from "generateSpanId" /* 829 */;
import regExp from "regExp" /* 834 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 838 */;
import _mod839 from "module_839" /* 839 */;
import getSpanStatusFromHttpCode from "getSpanStatusFromHttpCode" /* 840 */;
import getAsyncContextStrategy from "getAsyncContextStrategy" /* 841 */;
import _getSpanForScope from "_getSpanForScope" /* 844 */;
import getClient from "getClient" /* 848 */;

require = arg1;
const dependencyMap = arg6;
function spanToJSON(getSpanJSON) {
  if (typeof getSpanJSON.getSpanJSON === "function") {
    return getSpanJSON.getSpanJSON();
  } else {
    ({ spanId, traceId } = getSpanJSON.spanContext());
    if (tmp) {
      ({ attributes, startTime, endTime, status, links } = getSpanJSON);
      let obj = { span_id: null, trace_id: null, data: null, description: null, parent_span_id: null, start_timestamp: null, timestamp: null, status: null, op: null, origin: null, links: null };
      obj[0] = spanId;
      obj[1] = traceId;
      obj[2] = attributes;
      obj[3] = getSpanJSON.name;
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
      obj[4] = parentSpanId;
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
      obj[5] = sum;
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
      obj[6] = sum1;
      let tmp16;
      if (status) {
        if (status.code !== getSpanStatusFromHttpCode.SPAN_STATUS_UNSET) {
          let str3 = "ok";
          if (status.code !== getSpanStatusFromHttpCode.SPAN_STATUS_OK) {
            str3 = status.message || "internal_error";
          }
          tmp16 = str3;
        }
      }
      obj[7] = tmp16;
      obj[8] = attributes[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_OP];
      obj[9] = attributes[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      let mapped;
      if (links) {
        if (links.length > 0) {
          mapped = links.map((item, index) => {
            const context = item.context;
            ({ spanId, traceId, traceFlags } = context);
            const merged = Object.assign(Object.assign(context, Object.create(null)));
            return { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: item.attributes };
          });
        }
      }
      obj[10] = mapped;
      return obj;
    } else {
      obj = { span_id: null, trace_id: null, start_timestamp: 0, data: null };
      obj[0] = spanId;
      obj[1] = traceId;
      obj[3] = {};
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
arg5.TRACE_FLAG_NONE = 0;
arg5.TRACE_FLAG_SAMPLED = 1;
arg5.addChildSpanToSpan = function addChildSpanToSpan(arg0, arg1) {
  let tmp2 = arg0[_sentryRootSpan];
  if (!tmp2) {
    tmp2 = arg0;
  }
  const result = addNonEnumerableProperty.addNonEnumerableProperty(arg1, _sentryRootSpan, tmp2);
  if (arg0[_sentryChildSpans]) {
    arg0[_sentryChildSpans].add(arg1);
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = addNonEnumerableProperty.addNonEnumerableProperty(arg0, _sentryChildSpans, set);
    const tmp3Result = addNonEnumerableProperty;
  }
};
arg5.convertSpanLinksForEnvelope = function convertSpanLinksForEnvelope(_links) {
  let mapped;
  if (_links) {
    if (_links.length > 0) {
      mapped = _links.map((item, index) => {
        const context = item.context;
        ({ spanId, traceId, traceFlags } = context);
        const merged = Object.assign(Object.assign(context, Object.create(null)));
        return { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: item.attributes };
      });
    }
  }
  return mapped;
};
arg5.getActiveSpan = function getActiveSpan() {
  const mainCarrier = getGlobalSingleton.getMainCarrier();
  const asyncContextStrategy = getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = getClient;
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
arg5.getStatusMessage = function getStatusMessage(code) {
  if (code) {
    if (code.code !== getSpanStatusFromHttpCode.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (code.code !== getSpanStatusFromHttpCode.SPAN_STATUS_OK) {
        str = code.message || "internal_error";
      }
      return str;
    }
  }
};
arg5.removeChildSpanFromSpan = function removeChildSpanFromSpan(arg0, arg1) {
  if (arg0[_sentryChildSpans]) {
    arg0[tmp].delete(arg1);
  }
};
arg5.showSpanDropWarning = function showSpanDropWarning() {
  if (!c2) {
    consoleSandbox.consoleSandbox(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    c2 = true;
  }
};
arg5.spanIsSampled = spanIsSampled;
arg5.spanTimeInputToSeconds = function spanTimeInputToSeconds(getTime) {
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
arg5.spanToJSON = spanToJSON;
arg5.spanToTraceContext = function spanToTraceContext(spanContext) {
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
  obj[1] = spanId;
  obj[2] = spanContextResult.traceId;
  return obj;
};
arg5.spanToTraceHeader = function spanToTraceHeader(spanContext) {
  ({ traceId, spanId } = spanContext.spanContext());
  const spanContextResult = spanContext.spanContext();
  return regExp.generateSentryTraceHeader(traceId, spanId, 1 === spanContext.spanContext().traceFlags);
};
arg5.spanToTraceparentHeader = function spanToTraceparentHeader(span) {
  ({ traceId, spanId } = span.spanContext());
  const spanContextResult = span.spanContext();
  return regExp.generateTraceparentHeader(traceId, spanId, 1 === span.spanContext().traceFlags);
};
arg5.spanToTransactionTraceContext = function spanToTransactionTraceContext(spanContext) {
  ({ spanId, traceId } = spanContext.spanContext());
  const tmp2 = spanToJSON(spanContext);
  return { parent_span_id: tmp2.parent_span_id, span_id: spanId, trace_id: traceId, data: tmp2.data, op: tmp2.op, status: tmp2.status, origin: tmp2.origin, links: tmp2.links };
};
arg5.updateSpanName = function updateSpanName(updateName) {
  updateName.updateName(arg1);
  updateName.setAttributes({ [closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 });
};