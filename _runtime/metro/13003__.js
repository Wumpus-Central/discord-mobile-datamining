// === Module 13003: ? ===

// Module 13003
import errorCallback from "errorCallback" /* 12928 */;
import _mod12932 from "module_12932" /* 12932 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12937 */;
import _mod12944 from "module_12944" /* 12944 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12945 */;
import _mod12950 from "module_12950" /* 12950 */;
import _mod12951 from "module_12951" /* 12951 */;
import _mod12959 from "module_12959" /* 12959 */;
import _mod12968 from "module_12968" /* 12968 */;
import "module_12931";
import __SENTRY_DEBUG__ from "module_12960" /* 12960 */;
import dateTimestampInSeconds from "module_12946" /* 12946 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12959.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12950.getMainCarrier();
      const tmpResult = _mod12950;
      const asyncContextStrategy = _mod12951.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12959.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12944.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12944;
        }
        const tmpResult13 = _mod12968;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12959;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12944.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12932.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12951;
    }
  }
  return {};
};