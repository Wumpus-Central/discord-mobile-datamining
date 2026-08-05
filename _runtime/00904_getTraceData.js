// _runtime/00904_getTraceData.js
import { getClient } from "00848_getClient.js";
const require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getTraceData = function getTraceData() {
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
    client = getClient.getClient();
    const obj2 = getClient;
  }
  let tmp3 = require;
  let spanToTraceparentHeader = dependencyMap;
  if (obj3.isEnabled()) {
    if (client) {
      let tmp3Result = tmp3(825);
      const mainCarrier = tmp3Result.getMainCarrier();
      tmp3Result = tmp3(841);
      const asyncContextStrategy = tmp3Result.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let scope = obj.scope;
        if (!scope) {
          scope = tmp3(848).getCurrentScope();
          const tmp3Result1 = tmp3(848);
        }
        let span = obj.span;
        if (!span) {
          span = tmp3(819).getActiveSpan();
          const tmp3Result2 = tmp3(819);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp3(819).spanToTraceHeader(span);
          const tmp3Result3 = tmp3(819);
        } else {
          const propagationContext = scope.getPropagationContext();
          ({ traceId, sampled, propagationSpanId } = propagationContext);
          spanToTraceHeaderResult = tmp3(834).generateSentryTraceHeader(traceId, propagationSpanId, sampled);
          const tmp3Result4 = tmp3(834);
        }
        const tmp3Result5 = tmp3(857);
        if (span) {
          let dynamicSamplingContextFromSpan = tmp3Result5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmp3Result5.getDynamicSamplingContextFromScope(client, scope);
        }
        const result = tmp3(835).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp3(834).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
          if (!obj.propagateTraceparent) {
            return obj;
          } else {
            if (span) {
              tmp3 = tmp3(819);
              spanToTraceparentHeader = tmp3.spanToTraceparentHeader;
              let result1 = spanToTraceparentHeader(span);
            } else {
              const propagationContext1 = scope.getPropagationContext();
              ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
              result1 = tmp3(834).generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
              const tmp3Result7 = tmp3(834);
            }
            obj.traceparent = result1;
          }
        } else {
          const debug = tmp3(824).debug;
          debug.warn("Invalid sentry-trace data. Cannot generate trace data");
          return {};
        }
        const tmp3Result6 = tmp3(835);
      }
    }
  }
  return {};
};