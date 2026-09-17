// _runtime/metro/13019__.js
import errorCallback from "../12944_errorCallback.js";
import _mod12948 from "12948__.js";
import spanTimeInputToSeconds from "../12953_spanTimeInputToSeconds.js";
import _mod12960 from "12960__.js";
import BAGGAGE_HEADER_NAME from "../12961_BAGGAGE_HEADER_NAME.js";
import _mod12966 from "12966__.js";
import _mod12967 from "12967__.js";
import _mod12975 from "12975__.js";
import _mod12984 from "12984__.js";
import "module_12947";
import __SENTRY_DEBUG__ from "12976__.js";
import dateTimestampInSeconds from "12962__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12975.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12966.getMainCarrier();
      const tmpResult = _mod12966;
      const asyncContextStrategy = _mod12967.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12975.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12960.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12960;
        }
        const tmpResult13 = _mod12984;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12975;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12960.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12948.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12967;
    }
  }
  return {};
};
