// _runtime/00816_spanToJSON.js
import unwrapScopeFromWeakRef from "00817_unwrapScopeFromWeakRef.js";
import addNonEnumerableProperty from "00819_addNonEnumerableProperty.js";
import consoleSandbox from "00821_consoleSandbox.js";
import getGlobalSingleton from "00822_getGlobalSingleton.js";
import generateSpanId from "00826_generateSpanId.js";
import regExp from "00831_regExp.js";
import dateTimestampInSeconds from "00835_dateTimestampInSeconds.js";
import _mod836 from "metro/00836__.js";
import getSpanStatusFromHttpCode from "00837_getSpanStatusFromHttpCode.js";
import getAsyncContextStrategy from "00838_getAsyncContextStrategy.js";

require = arg1;
const dependencyMap = arg6;
function spanToJSON(getSpanJSON) {
  if (typeof getSpanJSON.getSpanJSON === "function") {
    return getSpanJSON.getSpanJSON();
  } else {
    ({ spanId, traceId } = getSpanJSON.spanContext());
    if (tmp) {
      ({ attributes, startTime, endTime, status, links } = getSpanJSON);
      let obj = {
        span_id: null,
        trace_id: null,
        data: null,
        description: null,
        parent_span_id: null,
        start_timestamp: null,
        timestamp: null,
        status: null,
        op: null,
        origin: null,
        links: null,
      };
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
            const obj3 = dateTimestampInSeconds;
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
            const obj4 = dateTimestampInSeconds;
          }
        }
      }
      obj[6] = sum1;
      let tmp16;
      if (status) {
        if (status.code !== getSpanStatusFromHttpCode.SPAN_STATUS_UNSET) {
          let str3 = "ok";
          if (status.code !== tmp17(837).SPAN_STATUS_OK) {
            str3 = status.message || "internal_error";
            const tmp19 = status.message || "internal_error";
          }
          tmp16 = str3;
        }
        tmp17 = require;
      }
      obj[7] = tmp16;
      obj[8] = attributes[_mod836.SEMANTIC_ATTRIBUTE_SENTRY_OP];
      obj[9] = attributes[_mod836.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
      let mapped;
      if (links) {
        if (links.length > 0) {
          mapped = links.map((attributes) => {
            const context = attributes.context;
            ({ spanId, traceId, traceFlags } = context);
            const merged = Object.assign(Object.assign(context, Object.create(null)));
            return { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: attributes.attributes };
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
    tmp =
      getSpanJSON.attributes && getSpanJSON.startTime && getSpanJSON.name && getSpanJSON.endTime && getSpanJSON.status;
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
    arg0[tmp6].add(arg1);
    const obj3 = arg0[tmp6];
  } else {
    const _Set = Set;
    const items = [arg1];
    const set = new Set(items);
    const result1 = addNonEnumerableProperty.addNonEnumerableProperty(arg0, tmp6, set);
    const tmp3Result = addNonEnumerableProperty;
  }
};
arg5.convertSpanLinksForEnvelope = function convertSpanLinksForEnvelope(_links) {
  let mapped;
  if (_links) {
    if (_links.length > 0) {
      mapped = _links.map((attributes) => {
        const context = attributes.context;
        ({ spanId, traceId, traceFlags } = context);
        const merged = Object.assign(Object.assign(context, Object.create(null)));
        return { span_id: spanId, trace_id: traceId, sampled: 1 === traceFlags, attributes: attributes.attributes };
      });
    }
  }
  return mapped;
};
arg5.getActiveSpan = function getActiveSpan() {
  const mainCarrier = getGlobalSingleton.getMainCarrier();
  const obj = getGlobalSingleton;
  const asyncContextStrategy = getAsyncContextStrategy.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    let tmpResult = tmp(841);
    tmpResult = tmp(845);
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
      if (closure_1_4(arg0)) {
        set.add(arg0);
        let tmp3 = closure_1_5;
        if (arg0[closure_1_5]) {
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
      if (code.code !== tmp(837).SPAN_STATUS_OK) {
        str = code.message || "internal_error";
        const tmp3 = code.message || "internal_error";
      }
      return str;
    }
    tmp = require;
  }
};
arg5.removeChildSpanFromSpan = function removeChildSpanFromSpan(arg0, arg1) {
  if (arg0[_sentryChildSpans]) {
    arg0[tmp].delete(arg1);
    const obj = arg0[tmp];
  }
};
arg5.showSpanDropWarning = function showSpanDropWarning() {
  if (!c2) {
    consoleSandbox.consoleSandbox(() => {
      console.warn(
        "[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.",
      );
    });
    c2 = true;
    const obj = consoleSandbox;
  }
};
arg5.spanIsSampled = spanIsSampled;
arg5.spanTimeInputToSeconds = function spanTimeInputToSeconds(num) {
  if (typeof num === "number") {
    let result = num;
    if (num > 9999999999) {
      result = num / 1000;
    }
    let sum = result;
  } else {
    const _Array = Array;
    if (Array.isArray(num)) {
      sum = num[0] + num[1] / 1000000000;
    } else {
      const _Date = Date;
      if (num instanceof Date) {
        const time = num.getTime();
        let result1 = time;
        if (time > 9999999999) {
          result1 = time / 1000;
        }
        sum = result1;
      } else {
        sum = dateTimestampInSeconds.timestampInSeconds();
        const obj = dateTimestampInSeconds;
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
  return {
    parent_span_id: tmp2.parent_span_id,
    span_id: spanId,
    trace_id: traceId,
    data: tmp2.data,
    op: tmp2.op,
    status: tmp2.status,
    origin: tmp2.origin,
    links: tmp2.links,
  };
};
arg5.updateSpanName = function updateSpanName(updateName) {
  updateName.updateName(arg1);
  updateName.setAttributes({
    [closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom",
    [closure_0(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1,
  });
};
