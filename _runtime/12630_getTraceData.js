// _runtime/12630_getTraceData.js
import errorCallback from "12555_errorCallback.js";
import getClient from "12586_getClient.js";
import __SENTRY_DEBUG__ from "metro/12558___SENTRY_DEBUG__.js";
import dateTimestampInSeconds from "12573_dateTimestampInSeconds.js";

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
      let tmpResult = tmp(12577);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(12578);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12586).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12564).getActiveSpan();
          const tmpResult2 = tmp(12564);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12564).spanToTraceHeader(span);
          const tmpResult3 = tmp(12564);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12571).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(12571);
        }
        const tmpResult5 = tmp(12595);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(12586);
        const result = tmp(12572).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12571).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(12559).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
