// _runtime/metro/12652__.js
import errorCallback from "../12577_errorCallback.js";
import _mod12581 from "12581__.js";
import spanTimeInputToSeconds from "../12586_spanTimeInputToSeconds.js";
import _mod12593 from "12593__.js";
import BAGGAGE_HEADER_NAME from "../12594_BAGGAGE_HEADER_NAME.js";
import _mod12599 from "12599__.js";
import _mod12600 from "12600__.js";
import _mod12608 from "12608__.js";
import _mod12617 from "12617__.js";
import "module_12580";
import __SENTRY_DEBUG__ from "12609__.js";
import dateTimestampInSeconds from "12595__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12608.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12599.getMainCarrier();
      const tmpResult = _mod12599;
      const asyncContextStrategy = _mod12600.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12608.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12593.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12593;
        }
        const tmpResult13 = _mod12617;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12608;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12593.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12581.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12600;
    }
  }
  return {};
};
