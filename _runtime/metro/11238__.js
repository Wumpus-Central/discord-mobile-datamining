// _runtime/metro/11238__.js
import errorCallback from "../11163_errorCallback.js";
import _mod11167 from "11167__.js";
import spanTimeInputToSeconds from "../11172_spanTimeInputToSeconds.js";
import _mod11179 from "11179__.js";
import BAGGAGE_HEADER_NAME from "../11180_BAGGAGE_HEADER_NAME.js";
import _mod11185 from "11185__.js";
import _mod11186 from "11186__.js";
import _mod11194 from "11194__.js";
import _mod11203 from "11203__.js";
import "module_11166";
import __SENTRY_DEBUG__ from "11195__.js";
import dateTimestampInSeconds from "11181__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod11194.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod11185.getMainCarrier();
      const tmpResult = _mod11185;
      const asyncContextStrategy = _mod11186.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod11194.getCurrentScope();
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
          spanToTraceHeaderResult = _mod11179.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod11179;
        }
        const tmpResult13 = _mod11203;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod11194;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod11179.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod11167.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod11186;
    }
  }
  return {};
};
