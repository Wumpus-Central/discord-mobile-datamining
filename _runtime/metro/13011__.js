// === Module 13011: ? ===

// Module 13011
import errorCallback from "errorCallback" /* 12936 */;
import _mod12940 from "module_12940" /* 12940 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12945 */;
import _mod12952 from "module_12952" /* 12952 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12953 */;
import _mod12958 from "module_12958" /* 12958 */;
import _mod12959 from "module_12959" /* 12959 */;
import _mod12967 from "module_12967" /* 12967 */;
import _mod12976 from "module_12976" /* 12976 */;
import "module_12939";
import __SENTRY_DEBUG__ from "module_12968" /* 12968 */;
import dateTimestampInSeconds from "module_12954" /* 12954 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12967.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12958.getMainCarrier();
      const tmpResult = _mod12958;
      const asyncContextStrategy = _mod12959.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12967.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12952.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12952;
        }
        const tmpResult13 = _mod12976;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12967;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12952.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12940.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12959;
    }
  }
  return {};
};