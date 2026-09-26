// _runtime/metro/12384__.js
import errorCallback from "../12309_errorCallback.js";
import _mod12313 from "12313__.js";
import spanTimeInputToSeconds from "../12318_spanTimeInputToSeconds.js";
import _mod12325 from "12325__.js";
import BAGGAGE_HEADER_NAME from "../12326_BAGGAGE_HEADER_NAME.js";
import _mod12331 from "12331__.js";
import _mod12332 from "12332__.js";
import _mod12340 from "12340__.js";
import _mod12349 from "12349__.js";
import "module_12312";
import __SENTRY_DEBUG__ from "12341__.js";
import dateTimestampInSeconds from "12327__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12340.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12331.getMainCarrier();
      const tmpResult = _mod12331;
      const asyncContextStrategy = _mod12332.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12340.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12325.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12325;
        }
        const tmpResult13 = _mod12349;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12340;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12325.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12313.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12332;
    }
  }
  return {};
};
