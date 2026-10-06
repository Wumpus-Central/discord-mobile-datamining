// === Module 12651: ? ===

// Module 12651
import _mod12580 from "module_12580" /* 12580 */;
import _mod12585 from "module_12585" /* 12585 */;
import _mod12592 from "module_12592" /* 12592 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12593 */;
import _mod12598 from "module_12598" /* 12598 */;
import _mod12599 from "module_12599" /* 12599 */;
import _mod12607 from "module_12607" /* 12607 */;
import _mod12616 from "module_12616" /* 12616 */;
import _mod12628 from "module_12628" /* 12628 */;
import registerSpanErrorInstrumentation from "module_12576" /* 12576 */;
import "module_12579";
import DEBUG_BUILD from "module_12608" /* 12608 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12594 */;


export const getTraceData = function getTraceData(arg0) {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12607;
  const client = obj2.getClient();
  const obj3 = _mod12628;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12598;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12599;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12607;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12585;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12585;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12592;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12616;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12592.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12580.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};