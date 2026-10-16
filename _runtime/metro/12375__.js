// === Module 12375: ? ===

// Module 12375
import errorCallback from "errorCallback" /* 12300 */;
import _mod12304 from "module_12304" /* 12304 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12309 */;
import _mod12316 from "module_12316" /* 12316 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12317 */;
import _mod12322 from "module_12322" /* 12322 */;
import _mod12323 from "module_12323" /* 12323 */;
import _mod12331 from "module_12331" /* 12331 */;
import _mod12340 from "module_12340" /* 12340 */;
import "module_12303";
import __SENTRY_DEBUG__ from "module_12332" /* 12332 */;
import dateTimestampInSeconds from "module_12318" /* 12318 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12331.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12322.getMainCarrier();
      const tmpResult = _mod12322;
      const asyncContextStrategy = _mod12323.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12331.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12316.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12316;
        }
        const tmpResult13 = _mod12340;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12331;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12316.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12304.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12323;
    }
  }
  return {};
};