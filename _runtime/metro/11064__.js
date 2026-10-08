// _runtime/metro/11064__.js
import errorCallback from "../10989_errorCallback.js";
import _mod10993 from "10993__.js";
import spanTimeInputToSeconds from "../10998_spanTimeInputToSeconds.js";
import _mod11005 from "11005__.js";
import BAGGAGE_HEADER_NAME from "../11006_BAGGAGE_HEADER_NAME.js";
import _mod11011 from "11011__.js";
import _mod11012 from "11012__.js";
import _mod11020 from "11020__.js";
import _mod11029 from "11029__.js";
import "module_10992";
import __SENTRY_DEBUG__ from "11021__.js";
import dateTimestampInSeconds from "11007__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod11020.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod11011.getMainCarrier();
      const tmpResult = _mod11011;
      const asyncContextStrategy = _mod11012.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod11020.getCurrentScope();
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
          spanToTraceHeaderResult = _mod11005.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod11005;
        }
        const tmpResult13 = _mod11029;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod11020;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod11005.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod10993.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod11012;
    }
  }
  return {};
};
