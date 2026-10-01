// === Module 12596: ? ===

// Module 12596
import errorCallback from "errorCallback" /* 12521 */;
import _mod12525 from "module_12525" /* 12525 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12530 */;
import _mod12537 from "module_12537" /* 12537 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12538 */;
import _mod12543 from "module_12543" /* 12543 */;
import _mod12544 from "module_12544" /* 12544 */;
import _mod12552 from "module_12552" /* 12552 */;
import _mod12561 from "module_12561" /* 12561 */;
import "module_12524";
import __SENTRY_DEBUG__ from "module_12553" /* 12553 */;
import dateTimestampInSeconds from "module_12539" /* 12539 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12552.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12543.getMainCarrier();
      const tmpResult = _mod12543;
      const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12552.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12537.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12537;
        }
        const tmpResult13 = _mod12561;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12552;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12537.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12525.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12544;
    }
  }
  return {};
};