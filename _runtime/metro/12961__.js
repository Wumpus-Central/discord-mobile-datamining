// === Module 12961: ? ===

// Module 12961
import errorCallback from "errorCallback" /* 12886 */;
import _mod12890 from "module_12890" /* 12890 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12895 */;
import _mod12902 from "module_12902" /* 12902 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12903 */;
import _mod12908 from "module_12908" /* 12908 */;
import _mod12909 from "module_12909" /* 12909 */;
import _mod12917 from "module_12917" /* 12917 */;
import _mod12926 from "module_12926" /* 12926 */;
import "module_12889";
import __SENTRY_DEBUG__ from "module_12918" /* 12918 */;
import dateTimestampInSeconds from "module_12904" /* 12904 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12917.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12908;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12909;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12917.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12902.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12902;
        }
        const tmpResult5 = _mod12926;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12917;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12902.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12890.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};