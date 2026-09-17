// === Module 13019: ? ===

// Module 13019
import errorCallback from "errorCallback" /* 12944 */;
import _mod12948 from "module_12948" /* 12948 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12953 */;
import _mod12960 from "module_12960" /* 12960 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12961 */;
import _mod12966 from "module_12966" /* 12966 */;
import _mod12967 from "module_12967" /* 12967 */;
import _mod12975 from "module_12975" /* 12975 */;
import _mod12984 from "module_12984" /* 12984 */;
import "module_12947";
import __SENTRY_DEBUG__ from "module_12976" /* 12976 */;
import dateTimestampInSeconds from "module_12962" /* 12962 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12975.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12966.getMainCarrier();
      const tmpResult = _mod12966;
      const asyncContextStrategy = _mod12967.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12975.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12960.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12960;
        }
        const tmpResult13 = _mod12984;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12975;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12960.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12948.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12967;
    }
  }
  return {};
};