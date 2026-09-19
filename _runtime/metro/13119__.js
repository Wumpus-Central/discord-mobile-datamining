// === Module 13119: ? ===

// Module 13119
import errorCallback from "errorCallback" /* 13044 */;
import _mod13048 from "module_13048" /* 13048 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13053 */;
import _mod13060 from "module_13060" /* 13060 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13061 */;
import _mod13066 from "module_13066" /* 13066 */;
import _mod13067 from "module_13067" /* 13067 */;
import _mod13075 from "module_13075" /* 13075 */;
import _mod13084 from "module_13084" /* 13084 */;
import "module_13047";
import __SENTRY_DEBUG__ from "module_13076" /* 13076 */;
import dateTimestampInSeconds from "module_13062" /* 13062 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13075.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13066.getMainCarrier();
      const tmpResult = _mod13066;
      const asyncContextStrategy = _mod13067.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13075.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13060.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13060;
        }
        const tmpResult13 = _mod13084;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13075;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13060.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13048.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13067;
    }
  }
  return {};
};