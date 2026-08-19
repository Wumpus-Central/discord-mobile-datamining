// _runtime/07809_getTraceData.js
import errorCallback from "07734_errorCallback.js";
import consoleSandbox from "07738_consoleSandbox.js";
import spanTimeInputToSeconds from "07743_spanTimeInputToSeconds.js";
import regExp from "07750_regExp.js";
import baggageHeaderToDynamicSamplingContext from "07751_baggageHeaderToDynamicSamplingContext.js";
import getMainCarrier from "07756_getMainCarrier.js";
import getAsyncContextStrategy from "07757_getAsyncContextStrategy.js";
import getClient from "07765_getClient.js";
import getDynamicSamplingContextFromSpan from "07774_getDynamicSamplingContextFromSpan.js";
import "__SENTRY_DEBUG__";
import __SENTRY_DEBUG__ from "metro/07766___SENTRY_DEBUG__.js";
import dateTimestampInSeconds from "07752_dateTimestampInSeconds.js";

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