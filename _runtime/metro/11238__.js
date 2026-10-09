// === Module 11238: ? ===

// Module 11238
import errorCallback from "errorCallback" /* 11163 */;
import _mod11167 from "module_11167" /* 11167 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 11172 */;
import _mod11179 from "module_11179" /* 11179 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11180 */;
import _mod11185 from "module_11185" /* 11185 */;
import _mod11186 from "module_11186" /* 11186 */;
import _mod11194 from "module_11194" /* 11194 */;
import _mod11203 from "module_11203" /* 11203 */;
import "module_11166";
import __SENTRY_DEBUG__ from "module_11195" /* 11195 */;
import dateTimestampInSeconds from "module_11181" /* 11181 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod11194.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod11185.getMainCarrier();
      const tmpResult = _mod11185;
      const asyncContextStrategy = _mod11186.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod11194.getCurrentScope();
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
          spanToTraceHeaderResult = _mod11179.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod11179;
        }
        const tmpResult13 = _mod11203;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod11194;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod11179.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod11167.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod11186;
    }
  }
  return {};
};