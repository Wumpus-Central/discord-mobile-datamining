// === Module 12868: ? ===

// Module 12868
import errorCallback from "errorCallback" /* 12793 */;
import _mod12797 from "module_12797" /* 12797 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12802 */;
import _mod12809 from "module_12809" /* 12809 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12810 */;
import _mod12815 from "module_12815" /* 12815 */;
import _mod12816 from "module_12816" /* 12816 */;
import _mod12824 from "module_12824" /* 12824 */;
import _mod12833 from "module_12833" /* 12833 */;
import "module_12796";
import __SENTRY_DEBUG__ from "module_12825" /* 12825 */;
import dateTimestampInSeconds from "module_12811" /* 12811 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12824.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12815;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12816;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12824.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12809.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12809;
        }
        const tmpResult5 = _mod12833;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12824;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12809.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12797.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};