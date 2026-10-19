// === Module 12477: ? ===

// Module 12477
import errorCallback from "errorCallback" /* 12402 */;
import _mod12406 from "module_12406" /* 12406 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12411 */;
import _mod12418 from "module_12418" /* 12418 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12419 */;
import _mod12424 from "module_12424" /* 12424 */;
import _mod12425 from "module_12425" /* 12425 */;
import _mod12433 from "module_12433" /* 12433 */;
import _mod12442 from "module_12442" /* 12442 */;
import "module_12405";
import __SENTRY_DEBUG__ from "module_12434" /* 12434 */;
import dateTimestampInSeconds from "module_12420" /* 12420 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12433.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12424.getMainCarrier();
      const tmpResult = _mod12424;
      const asyncContextStrategy = _mod12425.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12433.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12418.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12418;
        }
        const tmpResult13 = _mod12442;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12433;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12418.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12406.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12425;
    }
  }
  return {};
};