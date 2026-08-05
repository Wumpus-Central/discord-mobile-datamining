// _runtime/07446_getTraceData.js
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import dateTimestampInSeconds from "dateTimestampInSeconds";
import { getClient } from "07402_getClient.js";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = getClient /* getClient */.getClient();
  const obj2 = getClient /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(7393);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(7394);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(7402).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(7380).getActiveSpan();
          const tmpResult2 = tmp(7380);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(7380).spanToTraceHeader(span);
          const tmpResult3 = tmp(7380);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(7387).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(7387);
        }
        const tmpResult5 = tmp(7411);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(7402);
        const result = tmp(7388).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(7387).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(7375).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};