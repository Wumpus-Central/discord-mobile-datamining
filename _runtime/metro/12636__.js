// === Module 12636: ? ===

// Module 12636
import _mod12565 from "module_12565" /* 12565 */;
import _mod12570 from "module_12570" /* 12570 */;
import _mod12577 from "module_12577" /* 12577 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12578 */;
import _mod12583 from "module_12583" /* 12583 */;
import _mod12584 from "module_12584" /* 12584 */;
import _mod12592 from "module_12592" /* 12592 */;
import _mod12601 from "module_12601" /* 12601 */;
import _mod12613 from "module_12613" /* 12613 */;
import registerSpanErrorInstrumentation from "module_12561" /* 12561 */;
import "module_12564";
import DEBUG_BUILD from "module_12593" /* 12593 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12579 */;


export const getTraceData = function getTraceData(arg0) {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12592;
  const client = obj2.getClient();
  const obj3 = _mod12613;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12583;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12584;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12592;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12570;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12570;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12577;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12601;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12577.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12565.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};