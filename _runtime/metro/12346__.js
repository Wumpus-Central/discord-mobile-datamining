// _runtime/metro/12346__.js
import errorCallback from "../12271_errorCallback.js";
import _mod12275 from "12275__.js";
import spanTimeInputToSeconds from "../12280_spanTimeInputToSeconds.js";
import _mod12287 from "12287__.js";
import BAGGAGE_HEADER_NAME from "../12288_BAGGAGE_HEADER_NAME.js";
import _mod12293 from "12293__.js";
import _mod12294 from "12294__.js";
import _mod12302 from "12302__.js";
import _mod12311 from "12311__.js";
import "module_12274";
import __SENTRY_DEBUG__ from "12303__.js";
import dateTimestampInSeconds from "12289__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12302.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12293.getMainCarrier();
      const tmpResult = _mod12293;
      const asyncContextStrategy = _mod12294.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12302.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12287.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12287;
        }
        const tmpResult13 = _mod12311;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12302;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12287.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12275.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12294;
    }
  }
  return {};
};
