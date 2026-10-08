// === Module 11064: ? ===

// Module 11064
import errorCallback from "errorCallback" /* 10989 */;
import _mod10993 from "module_10993" /* 10993 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 10998 */;
import _mod11005 from "module_11005" /* 11005 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11006 */;
import _mod11011 from "module_11011" /* 11011 */;
import _mod11012 from "module_11012" /* 11012 */;
import _mod11020 from "module_11020" /* 11020 */;
import _mod11029 from "module_11029" /* 11029 */;
import "module_10992";
import __SENTRY_DEBUG__ from "module_11021" /* 11021 */;
import dateTimestampInSeconds from "module_11007" /* 11007 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod11020.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod11011.getMainCarrier();
      const tmpResult = _mod11011;
      const asyncContextStrategy = _mod11012.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod11020.getCurrentScope();
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
          spanToTraceHeaderResult = _mod11005.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod11005;
        }
        const tmpResult13 = _mod11029;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod11020;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod11005.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod10993.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod11012;
    }
  }
  return {};
};