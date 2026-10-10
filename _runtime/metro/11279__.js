// _runtime/metro/11279__.js
import errorCallback from "../11204_errorCallback.js";
import _mod11208 from "11208__.js";
import spanTimeInputToSeconds from "../11213_spanTimeInputToSeconds.js";
import _mod11220 from "11220__.js";
import BAGGAGE_HEADER_NAME from "../11221_BAGGAGE_HEADER_NAME.js";
import _mod11226 from "11226__.js";
import _mod11227 from "11227__.js";
import _mod11235 from "11235__.js";
import _mod11244 from "11244__.js";
import "module_11207";
import __SENTRY_DEBUG__ from "11236__.js";
import dateTimestampInSeconds from "11222__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod11235.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod11226.getMainCarrier();
      const tmpResult = _mod11226;
      const asyncContextStrategy = _mod11227.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod11235.getCurrentScope();
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
          spanToTraceHeaderResult = _mod11220.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod11220;
        }
        const tmpResult13 = _mod11244;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod11235;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod11220.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod11208.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod11227;
    }
  }
  return {};
};
