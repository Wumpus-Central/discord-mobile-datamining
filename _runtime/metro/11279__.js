// === Module 11279: ? ===

// Module 11279
import errorCallback from "errorCallback" /* 11204 */;
import _mod11208 from "module_11208" /* 11208 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 11213 */;
import _mod11220 from "module_11220" /* 11220 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 11221 */;
import _mod11226 from "module_11226" /* 11226 */;
import _mod11227 from "module_11227" /* 11227 */;
import _mod11235 from "module_11235" /* 11235 */;
import _mod11244 from "module_11244" /* 11244 */;
import "module_11207";
import __SENTRY_DEBUG__ from "module_11236" /* 11236 */;
import dateTimestampInSeconds from "module_11222" /* 11222 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod11235.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod11226.getMainCarrier();
      const tmpResult = _mod11226;
      const asyncContextStrategy = _mod11227.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod11235.getCurrentScope();
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
          spanToTraceHeaderResult = _mod11220.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod11220;
        }
        const tmpResult13 = _mod11244;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod11235;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod11220.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod11208.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod11227;
    }
  }
  return {};
};