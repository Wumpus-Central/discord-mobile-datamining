// === Module 7809: getTraceData ===

// Module 7809 (getTraceData)
import errorCallback from "errorCallback" /* 7734 */;
import consoleSandbox from "consoleSandbox" /* 7738 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 7743 */;
import regExp from "regExp" /* 7750 */;
import baggageHeaderToDynamicSamplingContext from "baggageHeaderToDynamicSamplingContext" /* 7751 */;
import getMainCarrier from "getMainCarrier" /* 7756 */;
import getAsyncContextStrategy from "getAsyncContextStrategy" /* 7757 */;
import getClient from "getClient" /* 7765 */;
import getDynamicSamplingContextFromSpan from "getDynamicSamplingContextFromSpan" /* 7774 */;
import "__SENTRY_DEBUG__";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7766 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 7752 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = getClient.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = getMainCarrier;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = getAsyncContextStrategy;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = getClient.getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = spanTimeInputToSeconds.getActiveSpan();
          const tmpResult2 = spanTimeInputToSeconds;
        }
        if (span) {
          let spanToTraceHeaderResult = spanTimeInputToSeconds.spanToTraceHeader(span);
          const tmpResult3 = spanTimeInputToSeconds;
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = regExp.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = regExp;
        }
        const tmpResult5 = getDynamicSamplingContextFromSpan;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = getClient;
        const result = baggageHeaderToDynamicSamplingContext.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = regExp.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = consoleSandbox.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};