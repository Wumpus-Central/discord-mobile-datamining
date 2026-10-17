// === Module 12440: ? ===

// Module 12440
import errorCallback from "errorCallback" /* 12365 */;
import _mod12369 from "module_12369" /* 12369 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12374 */;
import _mod12381 from "module_12381" /* 12381 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12382 */;
import _mod12387 from "module_12387" /* 12387 */;
import _mod12388 from "module_12388" /* 12388 */;
import _mod12396 from "module_12396" /* 12396 */;
import _mod12405 from "module_12405" /* 12405 */;
import "module_12368";
import __SENTRY_DEBUG__ from "module_12397" /* 12397 */;
import dateTimestampInSeconds from "module_12383" /* 12383 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12396.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12387.getMainCarrier();
      const tmpResult = _mod12387;
      const asyncContextStrategy = _mod12388.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12396.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12381.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12381;
        }
        const tmpResult13 = _mod12405;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12396;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12381.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12369.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12388;
    }
  }
  return {};
};