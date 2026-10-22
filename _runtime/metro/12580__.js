// === Module 12580: ? ===

// Module 12580
import errorCallback from "errorCallback" /* 12505 */;
import _mod12509 from "module_12509" /* 12509 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 12514 */;
import _mod12521 from "module_12521" /* 12521 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 12522 */;
import _mod12527 from "module_12527" /* 12527 */;
import _mod12528 from "module_12528" /* 12528 */;
import _mod12536 from "module_12536" /* 12536 */;
import _mod12545 from "module_12545" /* 12545 */;
import "module_12508";
import __SENTRY_DEBUG__ from "module_12537" /* 12537 */;
import dateTimestampInSeconds from "module_12523" /* 12523 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12536.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12527.getMainCarrier();
      const tmpResult = _mod12527;
      const asyncContextStrategy = _mod12528.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12536.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12521.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12521;
        }
        const tmpResult13 = _mod12545;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12536;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12521.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12509.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12528;
    }
  }
  return {};
};