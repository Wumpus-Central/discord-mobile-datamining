// === Module 12591: ? ===

// Module 12591
import errorCallback from "errorCallback" /* 12516 */;
import _mod12520 from "module_12520" /* 12520 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12525 */;
import _mod12532 from "module_12532" /* 12532 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12533 */;
import _mod12538 from "module_12538" /* 12538 */;
import _mod12539 from "module_12539" /* 12539 */;
import _mod12547 from "module_12547" /* 12547 */;
import _mod12556 from "module_12556" /* 12556 */;
import "module_12519";
import __SENTRY_DEBUG__ from "module_12548" /* 12548 */;
import dateTimestampInSeconds from "module_12534" /* 12534 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12547.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12538.getMainCarrier();
      const tmpResult = _mod12538;
      const asyncContextStrategy = _mod12539.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12547.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12532.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12532;
        }
        const tmpResult13 = _mod12556;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12547;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12532.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12520.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12539;
    }
  }
  return {};
};