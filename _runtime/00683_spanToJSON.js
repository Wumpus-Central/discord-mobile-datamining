// === Module 683: spanToJSON ===

// Module 683 (spanToJSON)
import unwrapScopeFromWeakRef from "unwrapScopeFromWeakRef" /* 684 */;
import _mod686 from "module_686" /* 686 */;
import consoleSandbox from "consoleSandbox" /* 688 */;
import _mod689 from "module_689" /* 689 */;
import generateSpanId from "generateSpanId" /* 693 */;
import _mod698 from "module_698" /* 698 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 702 */;
import GEN_AI_CONVERSATION_ID_ATTRIBUTE from "GEN_AI_CONVERSATION_ID_ATTRIBUTE" /* 703 */;
import SPAN_STATUS_ERROR from "SPAN_STATUS_ERROR" /* 704 */;
import _mod705 from "module_705" /* 705 */;
import _getSpanForScope from "_getSpanForScope" /* 708 */;
import _mod712 from "module_712" /* 712 */;

require = arg1;
const dependencyMap = arg6;
function spanToJSON(activeSpan) {
  if (typeof activeSpan.getSpanJSON === "function") {
    return activeSpan.getSpanJSON();
  } else {
    ({ spanId, traceId } = activeSpan.spanContext());
    if (tmp) {
      ({ attributes, startTime, endTime, status, links } = activeSpan);
      const obj2 = { span_id: spanId, trace_id: traceId, data: attributes, description: activeSpan.name, parent_span_id: null, start_timestamp: null, timestamp: null, status: null, op: null, origin: null, links: null };
      if ("parentSpanId" in activeSpan) {
        let parentSpanId = activeSpan.parentSpanId;
      } else if ("parentSpanContext" in activeSpan) {
        const parentSpanContext = activeSpan.parentSpanContext;
        let spanId1;
        if (parentSpanContext != null) {
          spanId1 = parentSpanContext.spanId;
        }
        parentSpanId = spanId1;
      }
      obj2.parent_span_id = parentSpanId;
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
      obj2.start_timestamp = sum;
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
      obj2.timestamp = sum1;
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
      obj2.status = tmp16;
      obj2.op = attributes[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_OP];
      obj2.origin = attributes[GEN_AI_CONVERSATION_ID_ATTRIBUTE.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN];
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
      obj2.links = mapped;
      return obj2;
    } else {
      const obj = { span_id: spanId, trace_id: traceId, start_timestamp: 0, data: {} };
      return obj;
    }
    const spanContextResult = activeSpan.spanContext();
    tmp = activeSpan.attributes && activeSpan.startTime && activeSpan.name && activeSpan.endTime && activeSpan.status;
  }
}
function spanIsSampled(parentSpan) {
  return 1 === parentSpan.spanContext().traceFlags;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
  const result = _mod686.addNonEnumerableProperty(sentrySpan, _sentryRootSpan, tmp2);
  if (parentSpan[_sentryChildSpans]) {
    parentSpan[_sentryChildSpans].add(sentrySpan);
  } else {
    const _Set = Set;
    items = [sentrySpan];
    const set = new Set(items);
    const result1 = _mod686.addNonEnumerableProperty(parentSpan, _sentryChildSpans, set);
    const tmp3Result = _mod686;
  }
}
export function convertSpanLinksForEnvelope(_links) {
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
}
export function getActiveSpan() {
  const mainCarrier = _mod689.getMainCarrier();
  const asyncContextStrategy = _mod705.getAsyncContextStrategy(mainCarrier);
  if (asyncContextStrategy.getActiveSpan) {
    let activeSpan = asyncContextStrategy.getActiveSpan();
  } else {
    const tmpResult = _getSpanForScope;
    activeSpan = tmpResult._getSpanForScope(_mod712.getCurrentScope());
    const tmpResult2 = _mod712;
  }
  return activeSpan;
}
export function getRootSpan(activeSpan) {
  return activeSpan[_sentryRootSpan] || activeSpan;
}
export function getSpanDescendants(activeSpan) {
  const set = new Set();
  function addSpanChildren(activeSpan) {
    if (!set.has(activeSpan)) {
      if (spanIsSampled(activeSpan)) {
        set.add(activeSpan);
        let tmp3 = _sentryChildSpans;
        if (activeSpan[_sentryChildSpans]) {
          const _Array = Array;
          items = Array.from(activeSpan[tmp3]);
        } else {
          items = [];
        }
        tmp3 = items;
        items[Symbol.iterator]();
      }
    }
  }
  addSpanChildren(activeSpan);
  return Array.from(set);
}
export function getStatusMessage(_status) {
  if (_status) {
    if (_status.code !== SPAN_STATUS_ERROR.SPAN_STATUS_UNSET) {
      let str = "ok";
      if (_status.code !== SPAN_STATUS_ERROR.SPAN_STATUS_OK) {
        str = _status.message || "internal_error";
        const tmp3 = _status.message || "internal_error";
      }
      return str;
    }
  }
}
export function removeChildSpanFromSpan(c14, isRecording) {
  if (dependencyMap[_sentryChildSpans]) {
    dependencyMap[tmp].delete(isRecording);
  }
}
export function showSpanDropWarning() {
  if (!c2) {
    consoleSandbox.consoleSandbox(() => {
      console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
    });
    c2 = true;
  }
}
export { spanIsSampled };
export function spanTimeInputToSeconds(startTime) {
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
  return sum;
}
export { spanToJSON };
export function spanToTraceContext(activeSpan) {
  const spanContextResult = activeSpan.spanContext();
  ({ spanId, isRemote } = spanContextResult);
  let parent_span_id = spanId;
  if (!isRemote) {
    parent_span_id = spanToJSON(activeSpan).parent_span_id;
  }
  const scope = unwrapScopeFromWeakRef.getCapturedScopesOnSpan(activeSpan).scope;
  const obj2 = { parent_span_id, span_id: null, trace_id: null };
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
  obj2.span_id = spanId;
  obj2.trace_id = spanContextResult.traceId;
  return obj2;
}
export function spanToTraceHeader(span) {
  ({ traceId, spanId } = span.spanContext());
  const spanContextResult = span.spanContext();
  return _mod698.generateSentryTraceHeader(traceId, spanId, 1 === span.spanContext().traceFlags);
}
export function spanToTraceparentHeader(span) {
  ({ traceId, spanId } = span.spanContext());
  const spanContextResult = span.spanContext();
  return _mod698.generateTraceparentHeader(traceId, spanId, 1 === span.spanContext().traceFlags);
}
export function spanToTransactionTraceContext(self) {
  ({ spanId, traceId } = self.spanContext());
  const tmp2 = spanToJSON(self);
  return { parent_span_id: tmp2.parent_span_id, span_id: spanId, trace_id: traceId, data: tmp2.data, op: tmp2.op, status: tmp2.status, origin: tmp2.origin, links: tmp2.links };
}
export function updateSpanName(updateName, arg1) {
  updateName.updateName(arg1);
  updateName.setAttributes({ [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "custom", [closure_1_0(closure_1_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME]: arg1 });
}