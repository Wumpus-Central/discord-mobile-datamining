// === Module 12555: ? ===

// Module 12555
import errorCallback from "errorCallback" /* 12480 */;
import _mod12484 from "module_12484" /* 12484 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12489 */;
import _mod12496 from "module_12496" /* 12496 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12497 */;
import _mod12502 from "module_12502" /* 12502 */;
import _mod12503 from "module_12503" /* 12503 */;
import _mod12511 from "module_12511" /* 12511 */;
import _mod12520 from "module_12520" /* 12520 */;
import "module_12483";
import __SENTRY_DEBUG__ from "module_12512" /* 12512 */;
import dateTimestampInSeconds from "module_12498" /* 12498 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12511.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12502.getMainCarrier();
      const tmpResult = _mod12502;
      const asyncContextStrategy = _mod12503.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12511.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12496.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12496;
        }
        const tmpResult13 = _mod12520;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12511;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12496.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12484.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12503;
    }
  }
  return {};
};