// === Module 9801: ? ===

// Module 9801
import errorCallback from "errorCallback" /* 9726 */;
import _mod9730 from "module_9730" /* 9730 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 9735 */;
import _mod9742 from "module_9742" /* 9742 */;
import _mod9743 from "module_9743" /* 9743 */;
import _mod9748 from "module_9748" /* 9748 */;
import _mod9749 from "module_9749" /* 9749 */;
import _mod9757 from "module_9757" /* 9757 */;
import _mod9766 from "module_9766" /* 9766 */;
import "module_9729";
import __SENTRY_DEBUG__ from "module_9758" /* 9758 */;
import dateTimestampInSeconds from "module_9744" /* 9744 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9757.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9748.getMainCarrier();
      const tmpResult = _mod9748;
      const asyncContextStrategy = _mod9749.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9757.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9742.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9742;
        }
        const tmpResult13 = _mod9766;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9757;
        const result = _mod9743.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9742.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9730.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9749;
    }
  }
  return {};
}