// === Module 12938: ? ===

// Module 12938
import errorCallback from "errorCallback" /* 12863 */;
import _mod12867 from "module_12867" /* 12867 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12872 */;
import _mod12879 from "module_12879" /* 12879 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12880 */;
import _mod12885 from "module_12885" /* 12885 */;
import _mod12886 from "module_12886" /* 12886 */;
import _mod12894 from "module_12894" /* 12894 */;
import _mod12903 from "module_12903" /* 12903 */;
import "module_12866";
import __SENTRY_DEBUG__ from "module_12895" /* 12895 */;
import dateTimestampInSeconds from "module_12881" /* 12881 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12894.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12885;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12886;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12894.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12879.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12879;
        }
        const tmpResult5 = _mod12903;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12894;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12879.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12867.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};