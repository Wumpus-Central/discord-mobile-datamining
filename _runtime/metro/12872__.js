// _runtime/metro/12872__.js
import errorCallback from "../12797_errorCallback.js";
import _mod12801 from "12801__.js";
import spanTimeInputToSeconds from "../12806_spanTimeInputToSeconds.js";
import _mod12813 from "12813__.js";
import BAGGAGE_HEADER_NAME from "../12814_BAGGAGE_HEADER_NAME.js";
import _mod12819 from "12819__.js";
import _mod12820 from "12820__.js";
import _mod12828 from "12828__.js";
import _mod12837 from "12837__.js";
import "module_12800";
import __SENTRY_DEBUG__ from "12829__.js";
import dateTimestampInSeconds from "12815__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12828.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12819;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12820;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12828.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12813.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12813;
        }
        const tmpResult5 = _mod12837;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12828;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12813.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12801.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
