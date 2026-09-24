// === Module 13216: ? ===

// Module 13216
import errorCallback from "errorCallback" /* 13141 */;
import _mod13145 from "module_13145" /* 13145 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13150 */;
import _mod13157 from "module_13157" /* 13157 */;
import BAGGAGE_HEADER_NAME from "BAGGAGE_HEADER_NAME" /* 13158 */;
import _mod13163 from "module_13163" /* 13163 */;
import _mod13164 from "module_13164" /* 13164 */;
import _mod13172 from "module_13172" /* 13172 */;
import _mod13181 from "module_13181" /* 13181 */;
import "module_13144";
import __SENTRY_DEBUG__ from "module_13173" /* 13173 */;
import dateTimestampInSeconds from "module_13159" /* 13159 */;

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13172.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13163.getMainCarrier();
      const tmpResult = _mod13163;
      const asyncContextStrategy = _mod13164.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13172.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13157.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13157;
        }
        const tmpResult13 = _mod13181;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13172;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13157.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13145.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13164;
    }
  }
  return {};
};