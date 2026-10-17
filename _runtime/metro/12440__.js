// _runtime/metro/12440__.js
import errorCallback from "../12365_errorCallback.js";
import _mod12369 from "12369__.js";
import spanTimeInputToSeconds from "../12374_spanTimeInputToSeconds.js";
import _mod12381 from "12381__.js";
import BAGGAGE_HEADER_NAME from "../12382_BAGGAGE_HEADER_NAME.js";
import _mod12387 from "12387__.js";
import _mod12388 from "12388__.js";
import _mod12396 from "12396__.js";
import _mod12405 from "12405__.js";
import "module_12368";
import __SENTRY_DEBUG__ from "12397__.js";
import dateTimestampInSeconds from "12383__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12396.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12387.getMainCarrier();
      const tmpResult = _mod12387;
      const asyncContextStrategy = _mod12388.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12396.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12381.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12381;
        }
        const tmpResult13 = _mod12405;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12396;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12381.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12369.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12388;
    }
  }
  return {};
};
