// _runtime/metro/12998__.js
import errorCallback from "../12923_errorCallback.js";
import _mod12927 from "12927__.js";
import spanTimeInputToSeconds from "../12932_spanTimeInputToSeconds.js";
import _mod12939 from "12939__.js";
import BAGGAGE_HEADER_NAME from "../12940_BAGGAGE_HEADER_NAME.js";
import _mod12945 from "12945__.js";
import _mod12946 from "12946__.js";
import _mod12954 from "12954__.js";
import _mod12963 from "12963__.js";
import "module_12926";
import __SENTRY_DEBUG__ from "12955__.js";
import dateTimestampInSeconds from "12941__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12954.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12945.getMainCarrier();
      const tmpResult = _mod12945;
      const asyncContextStrategy = _mod12946.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12954.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12939.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12939;
        }
        const tmpResult13 = _mod12963;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12954;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12939.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12927.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12946;
    }
  }
  return {};
};
