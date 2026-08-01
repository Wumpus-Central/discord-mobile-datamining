// === Module 6442: getTraceData ===

// Module 6442 (getTraceData)
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";
import dateTimestampInSeconds from "dateTimestampInSeconds";


export const getTraceData = function getTraceData() {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = require(6398) /* getClient */.getClient();
  const obj2 = require(6398) /* getClient */;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(6389);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(6390);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(6398).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(6376).getActiveSpan();
          const tmpResult2 = tmp(6376);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(6376).spanToTraceHeader(span);
          const tmpResult3 = tmp(6376);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(6383).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(6383);
        }
        const tmpResult5 = tmp(6407);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(6398);
        const result = tmp(6384).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(6383).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(6371).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};