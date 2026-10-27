// === Module 12660: ? ===

// Module 12660
import errorCallback from "errorCallback" /* 12585 */;
import _mod12589 from "module_12589" /* 12589 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12594 */;
import _mod12601 from "module_12601" /* 12601 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12602 */;
import _mod12607 from "module_12607" /* 12607 */;
import _mod12608 from "module_12608" /* 12608 */;
import _mod12616 from "module_12616" /* 12616 */;
import _mod12625 from "module_12625" /* 12625 */;
import "module_12588";
import __SENTRY_DEBUG__ from "module_12617" /* 12617 */;
import dateTimestampInSeconds from "module_12603" /* 12603 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12616.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12607.getMainCarrier();
      const tmpResult = _mod12607;
      const asyncContextStrategy = _mod12608.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12616.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12601.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12601;
        }
        const tmpResult13 = _mod12625;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12616;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12601.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12589.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12608;
    }
  }
  return {};
};