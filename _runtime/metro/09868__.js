// === Module 9868: ? ===

// Module 9868
import errorCallback from "errorCallback" /* 9793 */;
import _mod9797 from "module_9797" /* 9797 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9802 */;
import _mod9809 from "module_9809" /* 9809 */;
import _mod9810 from "module_9810" /* 9810 */;
import _mod9815 from "module_9815" /* 9815 */;
import _mod9816 from "module_9816" /* 9816 */;
import _mod9824 from "module_9824" /* 9824 */;
import _mod9833 from "module_9833" /* 9833 */;
import "module_9796";
import __SENTRY_DEBUG__ from "module_9825" /* 9825 */;
import dateTimestampInSeconds from "module_9811" /* 9811 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9824.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9815.getMainCarrier();
      const tmpResult = _mod9815;
      const asyncContextStrategy = _mod9816.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9824.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9809.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9809;
        }
        const tmpResult13 = _mod9833;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9824;
        const result = _mod9810.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9809.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9797.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9816;
    }
  }
  return {};
}