// _runtime/07570_getTraceData.js
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import dateTimestampInSeconds from "dateTimestampInSeconds";
import { getClient } from "07526_getClient.js";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = getClient.getClient();
  const obj2 = getClient;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(7517);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7518);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7526).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7504).getActiveSpan();
          const tmpResult2 = tmp(7504);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7504).spanToTraceHeader(span);
          const tmpResult3 = tmp(7504);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7511).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7511);
        }
        const tmpResult5 = tmp(7535);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7526);
        const result = tmp(7512).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7511).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7499).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};