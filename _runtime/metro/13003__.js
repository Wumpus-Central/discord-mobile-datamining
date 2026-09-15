// _runtime/metro/13003__.js
import errorCallback from "../12928_errorCallback.js";
import _mod12932 from "12932__.js";
import spanTimeInputToSeconds from "../12937_spanTimeInputToSeconds.js";
import _mod12944 from "12944__.js";
import BAGGAGE_HEADER_NAME from "../12945_BAGGAGE_HEADER_NAME.js";
import _mod12950 from "12950__.js";
import _mod12951 from "12951__.js";
import _mod12959 from "12959__.js";
import _mod12968 from "12968__.js";
import "module_12931";
import __SENTRY_DEBUG__ from "12960__.js";
import dateTimestampInSeconds from "12946__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12959.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12950.getMainCarrier();
      const tmpResult = _mod12950;
      const asyncContextStrategy = _mod12951.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12959.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12944.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12944;
        }
        const tmpResult13 = _mod12968;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12959;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12944.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12932.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12951;
    }
  }
  return {};
};
