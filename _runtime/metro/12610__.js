// === Module 12610: ? ===

// Module 12610
import errorCallback from "errorCallback" /* 12535 */;
import _mod12539 from "module_12539" /* 12539 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12544 */;
import _mod12551 from "module_12551" /* 12551 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12552 */;
import _mod12557 from "module_12557" /* 12557 */;
import _mod12558 from "module_12558" /* 12558 */;
import _mod12566 from "module_12566" /* 12566 */;
import _mod12575 from "module_12575" /* 12575 */;
import "module_12538";
import __SENTRY_DEBUG__ from "module_12567" /* 12567 */;
import dateTimestampInSeconds from "module_12553" /* 12553 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12566.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12557.getMainCarrier();
      const tmpResult = _mod12557;
      const asyncContextStrategy = _mod12558.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12566.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12551.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12551;
        }
        const tmpResult13 = _mod12575;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12566;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12551.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12539.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12558;
    }
  }
  return {};
};