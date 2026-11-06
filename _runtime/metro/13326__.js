// === Module 13326: ? ===

// Module 13326
import errorCallback from "errorCallback" /* 13251 */;
import _mod13255 from "module_13255" /* 13255 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13260 */;
import _mod13267 from "module_13267" /* 13267 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13268 */;
import _mod13273 from "module_13273" /* 13273 */;
import _mod13274 from "module_13274" /* 13274 */;
import _mod13282 from "module_13282" /* 13282 */;
import _mod13291 from "module_13291" /* 13291 */;
import "module_13254";
import __SENTRY_DEBUG__ from "module_13283" /* 13283 */;
import dateTimestampInSeconds from "module_13269" /* 13269 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13282.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13273.getMainCarrier();
      const tmpResult = _mod13273;
      const asyncContextStrategy = _mod13274.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13282.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13267.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13267;
        }
        const tmpResult13 = _mod13291;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13282;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13267.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13255.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13274;
    }
  }
  return {};
}