// === Module 13344: ? ===

// Module 13344
import errorCallback from "errorCallback" /* 13269 */;
import _mod13273 from "module_13273" /* 13273 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13278 */;
import _mod13285 from "module_13285" /* 13285 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13286 */;
import _mod13291 from "module_13291" /* 13291 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13309 from "module_13309" /* 13309 */;
import "module_13272";
import __SENTRY_DEBUG__ from "module_13301" /* 13301 */;
import dateTimestampInSeconds from "module_13287" /* 13287 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13300.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13291.getMainCarrier();
      const tmpResult = _mod13291;
      const asyncContextStrategy = _mod13292.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13300.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13285.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13285;
        }
        const tmpResult13 = _mod13309;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13300;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13285.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13273.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13292;
    }
  }
  return {};
}