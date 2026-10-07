// _runtime/metro/00780__.js
import _mod724 from "00724__.js";

const spanToJSON = tmp3(695);
const consoleSandbox = tmp3(700);
const _mod701 = tmp3(701);
const _mod710 = tmp3(710);
const MAX_BAGGAGE_STRING_LENGTH = tmp3(711);
const _mod717 = tmp3(717);
const _mod733 = tmp3(733);
require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _mod724.getClient();
  }
  let tmp3 = require;
  let spanToTraceparentHeader = dependencyMap;
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod701.getMainCarrier();
      const tmp3Result = _mod701;
      const asyncContextStrategy = _mod717.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let scope = obj.scope;
        if (!scope) {
          scope = _mod724.getCurrentScope();
          const tmp3Result10 = _mod724;
        }
        let span = obj.span;
        if (!span) {
          span = spanToJSON.getActiveSpan();
          const tmp3Result11 = spanToJSON;
        }
        if (span) {
          let spanToTraceHeaderResult = spanToJSON.spanToTraceHeader(span);
          const tmp3Result12 = spanToJSON;
        } else {
          const propagationContext = scope.getPropagationContext();
          ({ traceId, sampled, propagationSpanId } = propagationContext);
          spanToTraceHeaderResult = _mod710.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
          const tmp3Result13 = _mod710;
        }
        const tmp3Result14 = _mod733;
        if (span) {
          let dynamicSamplingContextFromSpan = tmp3Result14.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmp3Result14.getDynamicSamplingContextFromScope(client, scope);
        }
        const result =
          MAX_BAGGAGE_STRING_LENGTH.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod710.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          if (!obj.propagateTraceparent) {
            return obj4;
          } else {
            if (span) {
              tmp3 = spanToJSON;
              spanToTraceparentHeader = tmp3.spanToTraceparentHeader;
              let result1 = spanToTraceparentHeader(span);
            } else {
              const propagationContext1 = scope.getPropagationContext();
              ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
              result1 = _mod710.generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
              const tmp3Result16 = _mod710;
            }
            obj4.traceparent = result1;
          }
        } else {
          const debug = consoleSandbox.debug;
          debug.warn("Invalid sentry-trace data. Cannot generate trace data");
          return {};
        }
        const tmp3Result15 = MAX_BAGGAGE_STRING_LENGTH;
      }
      const tmp3Result9 = _mod717;
    }
  }
  return {};
};
