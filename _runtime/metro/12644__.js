// === Module 12644: ? ===

// Module 12644
import errorCallback from "errorCallback" /* 12569 */;
import _mod12573 from "module_12573" /* 12573 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12578 */;
import _mod12585 from "module_12585" /* 12585 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12586 */;
import _mod12591 from "module_12591" /* 12591 */;
import _mod12592 from "module_12592" /* 12592 */;
import _mod12600 from "module_12600" /* 12600 */;
import _mod12609 from "module_12609" /* 12609 */;
import "module_12572";
import __SENTRY_DEBUG__ from "module_12601" /* 12601 */;
import dateTimestampInSeconds from "module_12587" /* 12587 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12600.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12591.getMainCarrier();
      const tmpResult = _mod12591;
      const asyncContextStrategy = _mod12592.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12600.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12585.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12585;
        }
        const tmpResult13 = _mod12609;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12600;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12585.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12573.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12592;
    }
  }
  return {};
};