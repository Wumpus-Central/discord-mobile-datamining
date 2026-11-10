// === Module 13363: ? ===

// Module 13363
import errorCallback from "errorCallback" /* 13288 */;
import _mod13292 from "module_13292" /* 13292 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13297 */;
import _mod13304 from "module_13304" /* 13304 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13305 */;
import _mod13310 from "module_13310" /* 13310 */;
import _mod13311 from "module_13311" /* 13311 */;
import _mod13319 from "module_13319" /* 13319 */;
import _mod13328 from "module_13328" /* 13328 */;
import "module_13291";
import __SENTRY_DEBUG__ from "module_13320" /* 13320 */;
import dateTimestampInSeconds from "module_13306" /* 13306 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13319.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13310.getMainCarrier();
      const tmpResult = _mod13310;
      const asyncContextStrategy = _mod13311.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13319.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13304.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13304;
        }
        const tmpResult13 = _mod13328;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13319;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13304.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13292.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13311;
    }
  }
  return {};
}