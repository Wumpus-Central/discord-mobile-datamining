// === Module 12369: ? ===

// Module 12369
import errorCallback from "errorCallback" /* 12294 */;
import _mod12298 from "module_12298" /* 12298 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12303 */;
import _mod12310 from "module_12310" /* 12310 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12311 */;
import _mod12316 from "module_12316" /* 12316 */;
import _mod12317 from "module_12317" /* 12317 */;
import _mod12325 from "module_12325" /* 12325 */;
import _mod12334 from "module_12334" /* 12334 */;
import "module_12297";
import __SENTRY_DEBUG__ from "module_12326" /* 12326 */;
import dateTimestampInSeconds from "module_12312" /* 12312 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12325.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12316.getMainCarrier();
      const tmpResult = _mod12316;
      const asyncContextStrategy = _mod12317.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12325.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12310.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12310;
        }
        const tmpResult13 = _mod12334;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12325;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12310.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12298.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12317;
    }
  }
  return {};
};