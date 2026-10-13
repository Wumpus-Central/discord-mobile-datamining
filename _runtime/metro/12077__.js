// _runtime/metro/12077__.js
import errorCallback from "../12002_errorCallback.js";
import _mod12006 from "12006__.js";
import spanTimeInputToSeconds from "../12011_spanTimeInputToSeconds.js";
import _mod12018 from "12018__.js";
import BAGGAGE_HEADER_NAME from "../12019_BAGGAGE_HEADER_NAME.js";
import _mod12024 from "12024__.js";
import _mod12025 from "12025__.js";
import _mod12033 from "12033__.js";
import _mod12042 from "12042__.js";
import "module_12005";
import __SENTRY_DEBUG__ from "12034__.js";
import dateTimestampInSeconds from "12020__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12033.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12024.getMainCarrier();
      const tmpResult = _mod12024;
      const asyncContextStrategy = _mod12025.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12033.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12018.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12018;
        }
        const tmpResult13 = _mod12042;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12033;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12018.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12006.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12025;
    }
  }
  return {};
};
