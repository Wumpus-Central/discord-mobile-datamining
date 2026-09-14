// === Module 12998: ? ===

// Module 12998
import errorCallback from "errorCallback" /* 12923 */;
import _mod12927 from "module_12927" /* 12927 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12932 */;
import _mod12939 from "module_12939" /* 12939 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12940 */;
import _mod12945 from "module_12945" /* 12945 */;
import _mod12946 from "module_12946" /* 12946 */;
import _mod12954 from "module_12954" /* 12954 */;
import _mod12963 from "module_12963" /* 12963 */;
import "module_12926";
import __SENTRY_DEBUG__ from "module_12955" /* 12955 */;
import dateTimestampInSeconds from "module_12941" /* 12941 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12954.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12945.getMainCarrier();
      const tmpResult = _mod12945;
      const asyncContextStrategy = _mod12946.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12954.getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = spanTimeInputToSeconds.getActiveSpan();
          const tmpResult10 = spanTimeInputToSeconds;
        }
        if (span) {
          let spanToTraceHeaderResult = spanTimeInputToSeconds.spanToTraceHeader(span);
          const tmpResult11 = spanTimeInputToSeconds;
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = _mod12939.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12939;
        }
        const tmpResult13 = _mod12963;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12954;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12939.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12927.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12946;
    }
  }
  return {};
};