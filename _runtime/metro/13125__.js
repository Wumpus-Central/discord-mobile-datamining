// === Module 13125: ? ===

// Module 13125
import errorCallback from "errorCallback" /* 13050 */;
import _mod13054 from "module_13054" /* 13054 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13059 */;
import _mod13066 from "module_13066" /* 13066 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13067 */;
import _mod13072 from "module_13072" /* 13072 */;
import _mod13073 from "module_13073" /* 13073 */;
import _mod13081 from "module_13081" /* 13081 */;
import _mod13090 from "module_13090" /* 13090 */;
import "module_13053";
import __SENTRY_DEBUG__ from "module_13082" /* 13082 */;
import dateTimestampInSeconds from "module_13068" /* 13068 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13081.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13072.getMainCarrier();
      const tmpResult = _mod13072;
      const asyncContextStrategy = _mod13073.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13081.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13066.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13066;
        }
        const tmpResult13 = _mod13090;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13081;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13066.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13054.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13073;
    }
  }
  return {};
};