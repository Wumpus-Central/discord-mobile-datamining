// _runtime/metro/12555__.js
import errorCallback from "../12480_errorCallback.js";
import _mod12484 from "12484__.js";
import spanTimeInputToSeconds from "../12489_spanTimeInputToSeconds.js";
import _mod12496 from "12496__.js";
import BAGGAGE_HEADER_NAME from "../12497_BAGGAGE_HEADER_NAME.js";
import _mod12502 from "12502__.js";
import _mod12503 from "12503__.js";
import _mod12511 from "12511__.js";
import _mod12520 from "12520__.js";
import "module_12483";
import __SENTRY_DEBUG__ from "12512__.js";
import dateTimestampInSeconds from "12498__.js";

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
