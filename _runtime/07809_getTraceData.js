// _runtime/07809_getTraceData.js
import errorCallback from "errorCallback" /* 7734 */;
import getClient from "getClient" /* 7765 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7737 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 7752 */;

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
      let tmpResult = tmp(7756);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7757);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7765).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7743).getActiveSpan();
          const tmpResult2 = tmp(7743);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7743).spanToTraceHeader(span);
          const tmpResult3 = tmp(7743);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7750).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7750);
        }
        const tmpResult5 = tmp(7774);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7765);
        const result = tmp(7751).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7750).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7738).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};