// === Module 12651: ? ===

// Module 12651
import errorCallback from "errorCallback" /* 12576 */;
import _mod12580 from "module_12580" /* 12580 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12585 */;
import _mod12592 from "module_12592" /* 12592 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12593 */;
import _mod12598 from "module_12598" /* 12598 */;
import _mod12599 from "module_12599" /* 12599 */;
import _mod12607 from "module_12607" /* 12607 */;
import _mod12616 from "module_12616" /* 12616 */;
import "module_12579";
import __SENTRY_DEBUG__ from "module_12608" /* 12608 */;
import dateTimestampInSeconds from "module_12594" /* 12594 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12607.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12598.getMainCarrier();
      const tmpResult = _mod12598;
      const asyncContextStrategy = _mod12599.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12607.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12592.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12592;
        }
        const tmpResult13 = _mod12616;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12607;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12592.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12580.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12599;
    }
  }
  return {};
};