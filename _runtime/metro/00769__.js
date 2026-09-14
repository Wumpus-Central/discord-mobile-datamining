// _runtime/metro/00769__.js
import _mod713 from "00713__.js";

const spanToJSON = tmp3(684);
const consoleSandbox = tmp3(689);
const _mod690 = tmp3(690);
const _mod699 = tmp3(699);
const MAX_BAGGAGE_STRING_LENGTH = tmp3(700);
const _mod706 = tmp3(706);
const _mod722 = tmp3(722);
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
    client = _mod713.getClient();
  }
  let tmp3 = require;
  let spanToTraceparentHeader = dependencyMap;
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod690.getMainCarrier();
      const tmp3Result = _mod690;
      const asyncContextStrategy = _mod706.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let scope = obj.scope;
        if (!scope) {
          scope = _mod713.getCurrentScope();
          const tmp3Result10 = _mod713;
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
          spanToTraceHeaderResult = _mod699.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
          const tmp3Result13 = _mod699;
        }
        const tmp3Result14 = _mod722;
        if (span) {
          let dynamicSamplingContextFromSpan = tmp3Result14.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmp3Result14.getDynamicSamplingContextFromScope(client, scope);
        }
        const result =
          MAX_BAGGAGE_STRING_LENGTH.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod699.TRACEPARENT_REGEXP;
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
              result1 = _mod699.generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
              const tmp3Result16 = _mod699;
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
      const tmp3Result9 = _mod706;
    }
  }
  return {};
};
