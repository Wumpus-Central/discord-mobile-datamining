// === Module 12406: getTraceData ===

// Module 12406 (getTraceData)
import errorCallback from "errorCallback" /* 12331 */;
import getClient from "getClient" /* 12362 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 12334 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 12349 */;

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
      let tmpResult = tmp(12353);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(12354);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12362).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12340).getActiveSpan();
          const tmpResult2 = tmp(12340);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12340).spanToTraceHeader(span);
          const tmpResult3 = tmp(12340);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12347).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(12347);
        }
        const tmpResult5 = tmp(12371);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(12362);
        const result = tmp(12348).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12347).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(12335).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};