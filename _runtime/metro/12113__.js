// === Module 12113: ? ===

// Module 12113
import errorCallback from "errorCallback" /* 12038 */;
import _mod12042 from "module_12042" /* 12042 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12047 */;
import _mod12054 from "module_12054" /* 12054 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12055 */;
import _mod12060 from "module_12060" /* 12060 */;
import _mod12061 from "module_12061" /* 12061 */;
import _mod12069 from "module_12069" /* 12069 */;
import _mod12078 from "module_12078" /* 12078 */;
import "module_12041";
import __SENTRY_DEBUG__ from "module_12070" /* 12070 */;
import dateTimestampInSeconds from "module_12056" /* 12056 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12069.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12060.getMainCarrier();
      const tmpResult = _mod12060;
      const asyncContextStrategy = _mod12061.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12069.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12054.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12054;
        }
        const tmpResult13 = _mod12078;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12069;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12054.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12042.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12061;
    }
  }
  return {};
};