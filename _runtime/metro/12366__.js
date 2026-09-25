// === Module 12366: ? ===

// Module 12366
import errorCallback from "errorCallback" /* 12291 */;
import _mod12295 from "module_12295" /* 12295 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12300 */;
import _mod12307 from "module_12307" /* 12307 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12308 */;
import _mod12313 from "module_12313" /* 12313 */;
import _mod12314 from "module_12314" /* 12314 */;
import _mod12322 from "module_12322" /* 12322 */;
import _mod12331 from "module_12331" /* 12331 */;
import "module_12294";
import __SENTRY_DEBUG__ from "module_12323" /* 12323 */;
import dateTimestampInSeconds from "module_12309" /* 12309 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12322.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12313.getMainCarrier();
      const tmpResult = _mod12313;
      const asyncContextStrategy = _mod12314.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12322.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12307.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12307;
        }
        const tmpResult13 = _mod12331;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12322;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12307.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12295.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12314;
    }
  }
  return {};
};