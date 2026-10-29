// _runtime/metro/12924__.js
import errorCallback from "../12849_errorCallback.js";
import _mod12853 from "12853__.js";
import spanTimeInputToSeconds from "../12858_spanTimeInputToSeconds.js";
import _mod12865 from "12865__.js";
import BAGGAGE_HEADER_NAME from "../12866_BAGGAGE_HEADER_NAME.js";
import _mod12871 from "12871__.js";
import _mod12872 from "12872__.js";
import _mod12880 from "12880__.js";
import _mod12889 from "12889__.js";
import "module_12852";
import __SENTRY_DEBUG__ from "12881__.js";
import dateTimestampInSeconds from "12867__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12880.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12871.getMainCarrier();
      const tmpResult = _mod12871;
      const asyncContextStrategy = _mod12872.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12880.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12865.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12865;
        }
        const tmpResult13 = _mod12889;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12880;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12865.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12853.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12872;
    }
  }
  return {};
}
