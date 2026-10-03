// === Module 12636: ? ===

// Module 12636
import errorCallback from "errorCallback" /* 12561 */;
import _mod12565 from "module_12565" /* 12565 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12570 */;
import _mod12577 from "module_12577" /* 12577 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12578 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12584 from "module_12584" /* 12584 */;
import _mod12592 from "module_12592" /* 12592 */;
import _mod12601 from "module_12601" /* 12601 */;
import "module_12564";
import __SENTRY_DEBUG__ from "module_12593" /* 12593 */;
import dateTimestampInSeconds from "module_12579" /* 12579 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12592.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12583.getMainCarrier();
      const tmpResult = _mod12583;
      const asyncContextStrategy = _mod12584.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12592.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12577.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12577;
        }
        const tmpResult13 = _mod12601;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12592;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12577.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12565.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12584;
    }
  }
  return {};
};