// === Module 12494: ? ===

// Module 12494
import errorCallback from "errorCallback" /* 12419 */;
import _mod12423 from "module_12423" /* 12423 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12428 */;
import _mod12435 from "module_12435" /* 12435 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12436 */;
import _mod12441 from "module_12441" /* 12441 */;
import _mod12442 from "module_12442" /* 12442 */;
import _mod12450 from "module_12450" /* 12450 */;
import _mod12459 from "module_12459" /* 12459 */;
import "module_12422";
import __SENTRY_DEBUG__ from "module_12451" /* 12451 */;
import dateTimestampInSeconds from "module_12437" /* 12437 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12450.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12441.getMainCarrier();
      const tmpResult = _mod12441;
      const asyncContextStrategy = _mod12442.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12450.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12435.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12435;
        }
        const tmpResult13 = _mod12459;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12450;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12435.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12423.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12442;
    }
  }
  return {};
};