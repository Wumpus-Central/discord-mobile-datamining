// _runtime/metro/12868__.js
import errorCallback from "../12793_errorCallback.js";
import _mod12797 from "12797__.js";
import spanTimeInputToSeconds from "../12802_spanTimeInputToSeconds.js";
import _mod12809 from "12809__.js";
import BAGGAGE_HEADER_NAME from "../12810_BAGGAGE_HEADER_NAME.js";
import _mod12815 from "12815__.js";
import _mod12816 from "12816__.js";
import _mod12824 from "12824__.js";
import _mod12833 from "12833__.js";
import "module_12796";
import __SENTRY_DEBUG__ from "12825__.js";
import dateTimestampInSeconds from "12811__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12824.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12815;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12816;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12824.getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = spanTimeInputToSeconds.getActiveSpan();
          const tmpResult2 = spanTimeInputToSeconds;
        }
        if (span) {
          let spanToTraceHeaderResult = spanTimeInputToSeconds.spanToTraceHeader(span);
          const tmpResult3 = spanTimeInputToSeconds;
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = _mod12809.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12809;
        }
        const tmpResult5 = _mod12833;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12824;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12809.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12797.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
