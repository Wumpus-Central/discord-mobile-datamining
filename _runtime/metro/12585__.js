// === Module 12585: ? ===

// Module 12585
import errorCallback from "errorCallback" /* 12510 */;
import _mod12514 from "module_12514" /* 12514 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12519 */;
import _mod12526 from "module_12526" /* 12526 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12527 */;
import _mod12532 from "module_12532" /* 12532 */;
import _mod12533 from "module_12533" /* 12533 */;
import _mod12541 from "module_12541" /* 12541 */;
import _mod12550 from "module_12550" /* 12550 */;
import "module_12513";
import __SENTRY_DEBUG__ from "module_12542" /* 12542 */;
import dateTimestampInSeconds from "module_12528" /* 12528 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12541.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12532.getMainCarrier();
      const tmpResult = _mod12532;
      const asyncContextStrategy = _mod12533.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12541.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12526.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12526;
        }
        const tmpResult13 = _mod12550;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12541;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12526.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12514.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12533;
    }
  }
  return {};
};