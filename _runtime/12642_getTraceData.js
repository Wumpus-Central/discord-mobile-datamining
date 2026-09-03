// _runtime/12642_getTraceData.js
import errorCallback from "12567_errorCallback.js";
import getClient from "12598_getClient.js";
import __SENTRY_DEBUG__ from "metro/12570___SENTRY_DEBUG__.js";
import dateTimestampInSeconds from "12585_dateTimestampInSeconds.js";

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
      let tmpResult = tmp(12589);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(12590);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12598).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12576).getActiveSpan();
          const tmpResult2 = tmp(12576);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12576).spanToTraceHeader(span);
          const tmpResult3 = tmp(12576);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12583).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(12583);
        }
        const tmpResult5 = tmp(12607);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(12598);
        const result = tmp(12584).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12583).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(12571).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
