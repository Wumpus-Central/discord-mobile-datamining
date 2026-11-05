// === Module 13352: ? ===

// Module 13352
import errorCallback from "errorCallback" /* 13277 */;
import _mod13281 from "module_13281" /* 13281 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13286 */;
import _mod13293 from "module_13293" /* 13293 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13294 */;
import _mod13299 from "module_13299" /* 13299 */;
import _mod13300 from "module_13300" /* 13300 */;
import _mod13308 from "module_13308" /* 13308 */;
import _mod13317 from "module_13317" /* 13317 */;
import "module_13280";
import __SENTRY_DEBUG__ from "module_13309" /* 13309 */;
import dateTimestampInSeconds from "module_13295" /* 13295 */;

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13308.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13299.getMainCarrier();
      const tmpResult = _mod13299;
      const asyncContextStrategy = _mod13300.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13308.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13293.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13293;
        }
        const tmpResult13 = _mod13317;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13308;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13293.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13281.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13300;
    }
  }
  return {};
}