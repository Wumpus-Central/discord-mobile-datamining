// _runtime/metro/12868__.js
import errorCallback from "../12793_errorCallback.js";
import _mod12824 from "12824__.js";
import "module_12796";
import __SENTRY_DEBUG__ from "12825__.js";
import dateTimestampInSeconds from "12811__.js";

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12824.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(12815);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(12816);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12824).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12802).getActiveSpan();
          const tmpResult2 = tmp(12802);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12802).spanToTraceHeader(span);
          const tmpResult3 = tmp(12802);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12809).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(12809);
        }
        const tmpResult5 = tmp(12833);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(12824);
        const result = tmp(12810).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12809).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = tmp(12797).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
