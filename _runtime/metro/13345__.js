// === Module 13345: ? ===

// Module 13345
import errorCallback from "errorCallback" /* 13270 */;
import _mod13274 from "module_13274" /* 13274 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13279 */;
import _mod13286 from "module_13286" /* 13286 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13287 */;
import _mod13292 from "module_13292" /* 13292 */;
import _mod13293 from "module_13293" /* 13293 */;
import _mod13301 from "module_13301" /* 13301 */;
import _mod13310 from "module_13310" /* 13310 */;
import "module_13273";
import __SENTRY_DEBUG__ from "module_13302" /* 13302 */;
import dateTimestampInSeconds from "module_13288" /* 13288 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13301.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13292.getMainCarrier();
      const tmpResult = _mod13292;
      const asyncContextStrategy = _mod13293.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13301.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13286.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13286;
        }
        const tmpResult13 = _mod13310;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13301;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13286.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13274.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13293;
    }
  }
  return {};
}