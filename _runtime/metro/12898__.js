// === Module 12898: ? ===

// Module 12898
import errorCallback from "errorCallback" /* 12823 */;
import _mod12827 from "module_12827" /* 12827 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12832 */;
import _mod12839 from "module_12839" /* 12839 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12840 */;
import _mod12845 from "module_12845" /* 12845 */;
import _mod12846 from "module_12846" /* 12846 */;
import _mod12854 from "module_12854" /* 12854 */;
import _mod12863 from "module_12863" /* 12863 */;
import "module_12826";
import __SENTRY_DEBUG__ from "module_12855" /* 12855 */;
import dateTimestampInSeconds from "module_12841" /* 12841 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12854.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12845;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12846;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12854.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12839.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12839;
        }
        const tmpResult5 = _mod12863;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12854;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12839.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12827.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};