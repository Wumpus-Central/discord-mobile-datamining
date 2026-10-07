// _runtime/metro/12651__.js
import errorCallback from "../12576_errorCallback.js";
import _mod12580 from "12580__.js";
import spanTimeInputToSeconds from "../12585_spanTimeInputToSeconds.js";
import _mod12592 from "12592__.js";
import BAGGAGE_HEADER_NAME from "../12593_BAGGAGE_HEADER_NAME.js";
import _mod12598 from "12598__.js";
import _mod12599 from "12599__.js";
import _mod12607 from "12607__.js";
import _mod12616 from "12616__.js";
import "module_12579";
import __SENTRY_DEBUG__ from "12608__.js";
import dateTimestampInSeconds from "12594__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12607.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12598.getMainCarrier();
      const tmpResult = _mod12598;
      const asyncContextStrategy = _mod12599.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12607.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12592.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12592;
        }
        const tmpResult13 = _mod12616;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12607;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12592.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12580.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12599;
    }
  }
  return {};
};
