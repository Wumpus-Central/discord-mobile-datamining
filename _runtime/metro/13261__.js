// === Module 13261: ? ===

// Module 13261
import errorCallback from "errorCallback" /* 13186 */;
import _mod13190 from "module_13190" /* 13190 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13195 */;
import _mod13202 from "module_13202" /* 13202 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13203 */;
import _mod13208 from "module_13208" /* 13208 */;
import _mod13209 from "module_13209" /* 13209 */;
import _mod13217 from "module_13217" /* 13217 */;
import _mod13226 from "module_13226" /* 13226 */;
import "module_13189";
import __SENTRY_DEBUG__ from "module_13218" /* 13218 */;
import dateTimestampInSeconds from "module_13204" /* 13204 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13217.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13208.getMainCarrier();
      const tmpResult = _mod13208;
      const asyncContextStrategy = _mod13209.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13217.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13202.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13202;
        }
        const tmpResult13 = _mod13226;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13217;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13202.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13190.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13209;
    }
  }
  return {};
}