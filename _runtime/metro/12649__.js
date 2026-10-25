// _runtime/metro/12649__.js
import errorCallback from "../12574_errorCallback.js";
import _mod12578 from "12578__.js";
import spanTimeInputToSeconds from "../12583_spanTimeInputToSeconds.js";
import _mod12590 from "12590__.js";
import BAGGAGE_HEADER_NAME from "../12591_BAGGAGE_HEADER_NAME.js";
import _mod12596 from "12596__.js";
import _mod12597 from "12597__.js";
import _mod12605 from "12605__.js";
import _mod12614 from "12614__.js";
import "module_12577";
import __SENTRY_DEBUG__ from "12606__.js";
import dateTimestampInSeconds from "12592__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12605.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12596.getMainCarrier();
      const tmpResult = _mod12596;
      const asyncContextStrategy = _mod12597.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12605.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12590.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12590;
        }
        const tmpResult13 = _mod12614;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12605;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12590.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12578.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12597;
    }
  }
  return {};
};
