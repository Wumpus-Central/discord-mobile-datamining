// === Module 12384: ? ===

// Module 12384
import errorCallback from "errorCallback" /* 12309 */;
import _mod12313 from "module_12313" /* 12313 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12318 */;
import _mod12325 from "module_12325" /* 12325 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12326 */;
import _mod12331 from "module_12331" /* 12331 */;
import _mod12332 from "module_12332" /* 12332 */;
import _mod12340 from "module_12340" /* 12340 */;
import _mod12349 from "module_12349" /* 12349 */;
import "module_12312";
import __SENTRY_DEBUG__ from "module_12341" /* 12341 */;
import dateTimestampInSeconds from "module_12327" /* 12327 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12340.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12331.getMainCarrier();
      const tmpResult = _mod12331;
      const asyncContextStrategy = _mod12332.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12340.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12325.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12325;
        }
        const tmpResult13 = _mod12349;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12340;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12325.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12313.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12332;
    }
  }
  return {};
};