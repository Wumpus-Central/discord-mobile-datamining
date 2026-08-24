// _runtime/07847_getTraceData.js
import errorCallback from "07772_errorCallback.js";
import getClient from "07803_getClient.js";
import __SENTRY_DEBUG__ from "metro/07775___SENTRY_DEBUG__.js";
import dateTimestampInSeconds from "07790_dateTimestampInSeconds.js";

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
      let tmpResult = tmp(7794);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7795);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7803).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7781).getActiveSpan();
          const tmpResult2 = tmp(7781);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7781).spanToTraceHeader(span);
          const tmpResult3 = tmp(7781);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7788).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7788);
        }
        const tmpResult5 = tmp(7812);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7803);
        const result = tmp(7789).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7788).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7776).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};