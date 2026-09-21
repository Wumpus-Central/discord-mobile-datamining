// === Module 13121: ? ===

// Module 13121
import errorCallback from "errorCallback" /* 13046 */;
import _mod13050 from "module_13050" /* 13050 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13055 */;
import _mod13062 from "module_13062" /* 13062 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13063 */;
import _mod13068 from "module_13068" /* 13068 */;
import _mod13069 from "module_13069" /* 13069 */;
import _mod13077 from "module_13077" /* 13077 */;
import _mod13086 from "module_13086" /* 13086 */;
import "module_13049";
import __SENTRY_DEBUG__ from "module_13078" /* 13078 */;
import dateTimestampInSeconds from "module_13064" /* 13064 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13077.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13068.getMainCarrier();
      const tmpResult = _mod13068;
      const asyncContextStrategy = _mod13069.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13077.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13062.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13062;
        }
        const tmpResult13 = _mod13086;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13077;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13062.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13050.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13069;
    }
  }
  return {};
};