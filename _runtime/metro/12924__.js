// === Module 12924: ? ===

// Module 12924
import errorCallback from "errorCallback" /* 12849 */;
import _mod12853 from "module_12853" /* 12853 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12858 */;
import _mod12865 from "module_12865" /* 12865 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12866 */;
import _mod12871 from "module_12871" /* 12871 */;
import _mod12872 from "module_12872" /* 12872 */;
import _mod12880 from "module_12880" /* 12880 */;
import _mod12889 from "module_12889" /* 12889 */;
import "module_12852";
import __SENTRY_DEBUG__ from "module_12881" /* 12881 */;
import dateTimestampInSeconds from "module_12867" /* 12867 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12880.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12871.getMainCarrier();
      const tmpResult = _mod12871;
      const asyncContextStrategy = _mod12872.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12880.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12865.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12865;
        }
        const tmpResult13 = _mod12889;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12880;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12865.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12853.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12872;
    }
  }
  return {};
}