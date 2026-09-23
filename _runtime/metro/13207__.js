// === Module 13207: ? ===

// Module 13207
import errorCallback from "errorCallback" /* 13132 */;
import _mod13136 from "module_13136" /* 13136 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13141 */;
import _mod13148 from "module_13148" /* 13148 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13149 */;
import _mod13154 from "module_13154" /* 13154 */;
import _mod13155 from "module_13155" /* 13155 */;
import _mod13163 from "module_13163" /* 13163 */;
import _mod13172 from "module_13172" /* 13172 */;
import "module_13135";
import __SENTRY_DEBUG__ from "module_13164" /* 13164 */;
import dateTimestampInSeconds from "module_13150" /* 13150 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13163.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13154.getMainCarrier();
      const tmpResult = _mod13154;
      const asyncContextStrategy = _mod13155.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13163.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13148.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13148;
        }
        const tmpResult13 = _mod13172;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13163;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13148.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13136.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13155;
    }
  }
  return {};
};