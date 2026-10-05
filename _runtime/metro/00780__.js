// _runtime/metro/00780__.js
import TRACE_FLAG_NONE from "../00695_TRACE_FLAG_NONE.js";
import CONSOLE_LEVELS from "../00700_CONSOLE_LEVELS.js";
import _mod701 from "00701__.js";
import regExp from "../00710_regExp.js";
import MAX_BAGGAGE_STRING_LENGTH from "../00711_MAX_BAGGAGE_STRING_LENGTH.js";
import _mod717 from "00717__.js";
import _mod724 from "00724__.js";
import freezeDscOnSpan from "../00733_freezeDscOnSpan.js";
import _mod745 from "00745__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getTraceData = function getTraceData(arg0) {
  let propagationSpanId;
  let propagationSpanId2;
  let sampled;
  let sampled2;
  let traceId;
  let traceId2;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    const obj2 = _mod724;
    client = obj2.getClient();
  }
  const obj3 = _mod745;
  if (obj3.isEnabled()) {
    if (client) {
      const tmp3Result = _mod701;
      const mainCarrier = tmp3Result.getMainCarrier();
      const tmp3Result10 = _mod717;
      const asyncContextStrategy = tmp3Result10.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let scope = obj.scope;
        if (!scope) {
          const tmp3Result11 = _mod724;
          scope = tmp3Result11.getCurrentScope();
        }
        let span = obj.span;
        if (!span) {
          const tmp3Result12 = TRACE_FLAG_NONE;
          span = tmp3Result12.getActiveSpan();
        }
        if (span) {
          const tmp3Result13 = TRACE_FLAG_NONE;
          spanToTraceHeaderResult = tmp3Result13.spanToTraceHeader(span);
        } else {
          const propagationContext = scope.getPropagationContext();
          ({ traceId, sampled, propagationSpanId } = propagationContext);
          const tmp3Result14 = regExp;
          spanToTraceHeaderResult = tmp3Result14.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
        }
        const tmp3Result15 = freezeDscOnSpan;
        if (span) {
          dynamicSamplingContextFromSpan = tmp3Result15.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmp3Result15.getDynamicSamplingContextFromScope(client, scope);
        }
        const tmp3Result16 = MAX_BAGGAGE_STRING_LENGTH;
        const result = tmp3Result16.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = regExp.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          if (obj.propagateTraceparent) {
            let result1;
            if (span) {
              const tmp3Result17 = TRACE_FLAG_NONE;
              result1 = tmp3Result17.spanToTraceparentHeader(span);
            } else {
              const propagationContext1 = scope.getPropagationContext();
              ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
              const tmp3Result18 = regExp;
              result1 = tmp3Result18.generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
            }
            obj4.traceparent = result1;
          }
          return obj4;
        } else {
          const debug = CONSOLE_LEVELS.debug;
          debug.warn("Invalid sentry-trace data. Cannot generate trace data");
          return {};
        }
      }
    }
  }
  return {};
};
