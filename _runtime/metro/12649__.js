// === Module 12649: ? ===

// Module 12649
import errorCallback from "errorCallback" /* 12574 */;
import _mod12578 from "module_12578" /* 12578 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12583 */;
import _mod12590 from "module_12590" /* 12590 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12591 */;
import _mod12596 from "module_12596" /* 12596 */;
import _mod12597 from "module_12597" /* 12597 */;
import _mod12605 from "module_12605" /* 12605 */;
import _mod12614 from "module_12614" /* 12614 */;
import "module_12577";
import __SENTRY_DEBUG__ from "module_12606" /* 12606 */;
import dateTimestampInSeconds from "module_12592" /* 12592 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12605.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12596.getMainCarrier();
      const tmpResult = _mod12596;
      const asyncContextStrategy = _mod12597.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12605.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12590.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12590;
        }
        const tmpResult13 = _mod12614;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12605;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12590.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12578.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12597;
    }
  }
  return {};
};