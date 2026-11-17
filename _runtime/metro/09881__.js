// === Module 9881: ? ===

// Module 9881
import errorCallback from "errorCallback" /* 9806 */;
import _mod9810 from "module_9810" /* 9810 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9815 */;
import _mod9822 from "module_9822" /* 9822 */;
import _mod9823 from "module_9823" /* 9823 */;
import _mod9828 from "module_9828" /* 9828 */;
import _mod9829 from "module_9829" /* 9829 */;
import _mod9837 from "module_9837" /* 9837 */;
import _mod9846 from "module_9846" /* 9846 */;
import "module_9809";
import __SENTRY_DEBUG__ from "module_9838" /* 9838 */;
import dateTimestampInSeconds from "module_9824" /* 9824 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9837.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9828.getMainCarrier();
      const tmpResult = _mod9828;
      const asyncContextStrategy = _mod9829.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9837.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9822.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9822;
        }
        const tmpResult13 = _mod9846;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9837;
        const result = _mod9823.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9822.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9810.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9829;
    }
  }
  return {};
}