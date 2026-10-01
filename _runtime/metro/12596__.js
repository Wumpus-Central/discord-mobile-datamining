// _runtime/metro/12596__.js
import errorCallback from "../12521_errorCallback.js";
import _mod12525 from "12525__.js";
import spanTimeInputToSeconds from "../12530_spanTimeInputToSeconds.js";
import _mod12537 from "12537__.js";
import BAGGAGE_HEADER_NAME from "../12538_BAGGAGE_HEADER_NAME.js";
import _mod12543 from "12543__.js";
import _mod12544 from "12544__.js";
import _mod12552 from "12552__.js";
import _mod12561 from "12561__.js";
import "module_12524";
import __SENTRY_DEBUG__ from "12553__.js";
import dateTimestampInSeconds from "12539__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12552.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12543.getMainCarrier();
      const tmpResult = _mod12543;
      const asyncContextStrategy = _mod12544.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12552.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12537.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12537;
        }
        const tmpResult13 = _mod12561;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12552;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12537.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12525.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12544;
    }
  }
  return {};
};
