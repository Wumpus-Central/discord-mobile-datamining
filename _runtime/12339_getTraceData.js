// === Module 12339: getTraceData ===

// Module 12339 (getTraceData)
import errorCallback from "errorCallback" /* 12264 */;
import getClient from "getClient" /* 12295 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 12267 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 12282 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = getClient.getClient();
  const obj2 = getClient;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(12286);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(12287);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12295).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12273).getActiveSpan();
          const tmpResult2 = tmp(12273);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12273).spanToTraceHeader(span);
          const tmpResult3 = tmp(12273);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12280).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(12280);
        }
        const tmpResult5 = tmp(12304);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(12295);
        const result = tmp(12281).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12280).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(12268).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};