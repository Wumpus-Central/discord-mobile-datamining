// _runtime/metro/12707__.js
import errorCallback from "../12632_errorCallback.js";
import _mod12636 from "12636__.js";
import spanTimeInputToSeconds from "../12641_spanTimeInputToSeconds.js";
import _mod12648 from "12648__.js";
import BAGGAGE_HEADER_NAME from "../12649_BAGGAGE_HEADER_NAME.js";
import _mod12654 from "12654__.js";
import _mod12655 from "12655__.js";
import _mod12663 from "12663__.js";
import _mod12672 from "12672__.js";
import "module_12635";
import __SENTRY_DEBUG__ from "12664__.js";
import dateTimestampInSeconds from "12650__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12663.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12654.getMainCarrier();
      const tmpResult = _mod12654;
      const asyncContextStrategy = _mod12655.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12663.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12648.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12648;
        }
        const tmpResult13 = _mod12672;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12663;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12648.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12636.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12655;
    }
  }
  return {};
};
