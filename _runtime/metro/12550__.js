// _runtime/metro/12550__.js
import errorCallback from "../12475_errorCallback.js";
import _mod12479 from "12479__.js";
import spanTimeInputToSeconds from "../12484_spanTimeInputToSeconds.js";
import _mod12491 from "12491__.js";
import BAGGAGE_HEADER_NAME from "../12492_BAGGAGE_HEADER_NAME.js";
import _mod12497 from "12497__.js";
import _mod12498 from "12498__.js";
import _mod12506 from "12506__.js";
import _mod12515 from "12515__.js";
import "module_12478";
import __SENTRY_DEBUG__ from "12507__.js";
import dateTimestampInSeconds from "12493__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12506.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12497.getMainCarrier();
      const tmpResult = _mod12497;
      const asyncContextStrategy = _mod12498.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12506.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12491.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12491;
        }
        const tmpResult13 = _mod12515;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12506;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12491.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12479.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12498;
    }
  }
  return {};
};
