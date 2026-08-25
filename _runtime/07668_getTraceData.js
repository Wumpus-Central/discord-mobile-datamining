// _runtime/07668_getTraceData.js
import errorCallback from "07593_errorCallback.js";
import getClient from "07624_getClient.js";
import __SENTRY_DEBUG__ from "metro/07596___SENTRY_DEBUG__.js";
import dateTimestampInSeconds from "07611_dateTimestampInSeconds.js";

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
      let tmpResult = tmp(7615);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7616);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7624).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7602).getActiveSpan();
          const tmpResult2 = tmp(7602);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7602).spanToTraceHeader(span);
          const tmpResult3 = tmp(7602);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7609).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7609);
        }
        const tmpResult5 = tmp(7633);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7624);
        const result = tmp(7610).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7609).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7597).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};