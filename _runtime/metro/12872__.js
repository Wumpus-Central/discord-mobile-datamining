// === Module 12872: ? ===

// Module 12872
import errorCallback from "errorCallback" /* 12797 */;
import _mod12801 from "module_12801" /* 12801 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12806 */;
import _mod12813 from "module_12813" /* 12813 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12814 */;
import _mod12819 from "module_12819" /* 12819 */;
import _mod12820 from "module_12820" /* 12820 */;
import _mod12828 from "module_12828" /* 12828 */;
import _mod12837 from "module_12837" /* 12837 */;
import "module_12800";
import __SENTRY_DEBUG__ from "module_12829" /* 12829 */;
import dateTimestampInSeconds from "module_12815" /* 12815 */;

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