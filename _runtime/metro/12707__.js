// === Module 12707: ? ===

// Module 12707
import errorCallback from "errorCallback" /* 12632 */;
import _mod12636 from "module_12636" /* 12636 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12641 */;
import _mod12648 from "module_12648" /* 12648 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12649 */;
import _mod12654 from "module_12654" /* 12654 */;
import _mod12655 from "module_12655" /* 12655 */;
import _mod12663 from "module_12663" /* 12663 */;
import _mod12672 from "module_12672" /* 12672 */;
import "module_12635";
import __SENTRY_DEBUG__ from "module_12664" /* 12664 */;
import dateTimestampInSeconds from "module_12650" /* 12650 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12663.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12654.getMainCarrier();
      const tmpResult = _mod12654;
      const asyncContextStrategy = _mod12655.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12663.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12648.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12648;
        }
        const tmpResult13 = _mod12672;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12663;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12648.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12636.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12655;
    }
  }
  return {};
};