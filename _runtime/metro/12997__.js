// === Module 12997: ? ===

// Module 12997
import errorCallback from "errorCallback" /* 12922 */;
import _mod12926 from "module_12926" /* 12926 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12931 */;
import _mod12938 from "module_12938" /* 12938 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12939 */;
import _mod12944 from "module_12944" /* 12944 */;
import _mod12945 from "module_12945" /* 12945 */;
import _mod12953 from "module_12953" /* 12953 */;
import _mod12962 from "module_12962" /* 12962 */;
import "module_12925";
import __SENTRY_DEBUG__ from "module_12954" /* 12954 */;
import dateTimestampInSeconds from "module_12940" /* 12940 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12953.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12944;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12945;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12953.getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = spanTimeInputToSeconds.getActiveSpan();
          const tmpResult2 = spanTimeInputToSeconds;
        }
        if (span) {
          let spanToTraceHeaderResult = spanTimeInputToSeconds.spanToTraceHeader(span);
          const tmpResult3 = spanTimeInputToSeconds;
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = _mod12938.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12938;
        }
        const tmpResult5 = _mod12962;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12953;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12938.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12926.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};