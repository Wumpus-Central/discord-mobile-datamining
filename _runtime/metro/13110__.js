// === Module 13110: ? ===

// Module 13110
import errorCallback from "errorCallback" /* 13035 */;
import _mod13039 from "module_13039" /* 13039 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13044 */;
import _mod13051 from "module_13051" /* 13051 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13052 */;
import _mod13057 from "module_13057" /* 13057 */;
import _mod13058 from "module_13058" /* 13058 */;
import _mod13066 from "module_13066" /* 13066 */;
import _mod13075 from "module_13075" /* 13075 */;
import "module_13038";
import __SENTRY_DEBUG__ from "module_13067" /* 13067 */;
import dateTimestampInSeconds from "module_13053" /* 13053 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13066.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13057.getMainCarrier();
      const tmpResult = _mod13057;
      const asyncContextStrategy = _mod13058.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13066.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13051.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13051;
        }
        const tmpResult13 = _mod13075;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13066;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13051.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13039.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13058;
    }
  }
  return {};
};