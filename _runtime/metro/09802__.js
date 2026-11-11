// === Module 9802: ? ===

// Module 9802
import errorCallback from "errorCallback" /* 9727 */;
import _mod9731 from "module_9731" /* 9731 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9736 */;
import _mod9743 from "module_9743" /* 9743 */;
import _mod9744 from "module_9744" /* 9744 */;
import _mod9749 from "module_9749" /* 9749 */;
import _mod9750 from "module_9750" /* 9750 */;
import _mod9758 from "module_9758" /* 9758 */;
import _mod9767 from "module_9767" /* 9767 */;
import "module_9730";
import __SENTRY_DEBUG__ from "module_9759" /* 9759 */;
import dateTimestampInSeconds from "module_9745" /* 9745 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9758.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9749.getMainCarrier();
      const tmpResult = _mod9749;
      const asyncContextStrategy = _mod9750.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9758.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9743.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9743;
        }
        const tmpResult13 = _mod9767;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9758;
        const result = _mod9744.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9743.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9731.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9750;
    }
  }
  return {};
}