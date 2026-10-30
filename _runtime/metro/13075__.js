// === Module 13075: ? ===

// Module 13075
import errorCallback from "errorCallback" /* 13000 */;
import _mod13004 from "module_13004" /* 13004 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13009 */;
import _mod13016 from "module_13016" /* 13016 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13017 */;
import _mod13022 from "module_13022" /* 13022 */;
import _mod13023 from "module_13023" /* 13023 */;
import _mod13031 from "module_13031" /* 13031 */;
import _mod13040 from "module_13040" /* 13040 */;
import "module_13003";
import __SENTRY_DEBUG__ from "module_13032" /* 13032 */;
import dateTimestampInSeconds from "module_13018" /* 13018 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13031.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13022.getMainCarrier();
      const tmpResult = _mod13022;
      const asyncContextStrategy = _mod13023.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13031.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13016.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13016;
        }
        const tmpResult13 = _mod13040;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13031;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13016.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13004.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13023;
    }
  }
  return {};
}