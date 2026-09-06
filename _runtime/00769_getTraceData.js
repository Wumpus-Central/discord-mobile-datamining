// === Module 769: getTraceData ===

// Module 769 (getTraceData)
import spanToJSON from "spanToJSON" /* 684 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import getGlobalSingleton from "getGlobalSingleton" /* 690 */;
import regExp from "regExp" /* 699 */;
import baggageHeaderToDynamicSamplingContext from "baggageHeaderToDynamicSamplingContext" /* 700 */;
import getAsyncContextStrategy from "getAsyncContextStrategy" /* 706 */;
import getClient from "getClient" /* 713 */;
import getDynamicSamplingContextFromSpan from "getDynamicSamplingContextFromSpan" /* 722 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getTraceData = function getTraceData() {
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
      let tmp3Result = getGlobalSingleton;
      const mainCarrier = tmp3Result.getMainCarrier();
      tmp3Result = getAsyncContextStrategy;
      const asyncContextStrategy = tmp3Result.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let scope = obj.scope;
        if (!scope) {
          scope = getClient.getCurrentScope();
          const tmp3Result1 = getClient;
        }
        let span = obj.span;
        if (!span) {
          span = spanToJSON.getActiveSpan();
          const tmp3Result2 = spanToJSON;
        }
        if (span) {
          let spanToTraceHeaderResult = spanToJSON.spanToTraceHeader(span);
          const tmp3Result3 = spanToJSON;
        } else {
          const propagationContext = scope.getPropagationContext();
          ({ traceId, sampled, propagationSpanId } = propagationContext);
          spanToTraceHeaderResult = regExp.generateSentryTraceHeader(traceId, propagationSpanId, sampled);
          const tmp3Result4 = regExp;
        }
        const tmp3Result5 = getDynamicSamplingContextFromSpan;
        if (span) {
          let dynamicSamplingContextFromSpan = tmp3Result5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmp3Result5.getDynamicSamplingContextFromScope(client, scope);
        }
        const result = baggageHeaderToDynamicSamplingContext.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = regExp.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
          if (!obj.propagateTraceparent) {
            return obj;
          } else {
            if (span) {
              tmp3 = spanToJSON;
              spanToTraceparentHeader = tmp3.spanToTraceparentHeader;
              let result1 = spanToTraceparentHeader(span);
            } else {
              const propagationContext1 = scope.getPropagationContext();
              ({ traceId: traceId2, sampled: sampled2, propagationSpanId: propagationSpanId2 } = propagationContext1);
              result1 = regExp.generateTraceparentHeader(traceId2, propagationSpanId2, sampled2);
              const tmp3Result7 = regExp;
            }
            obj.traceparent = result1;
          }
        } else {
          const debug = consoleSandbox.debug;
          debug.warn("Invalid sentry-trace data. Cannot generate trace data");
          return {};
        }
        const tmp3Result6 = baggageHeaderToDynamicSamplingContext;
      }
    }
  }
  return {};
};