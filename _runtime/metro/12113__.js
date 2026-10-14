// _runtime/metro/12113__.js
import errorCallback from "../12038_errorCallback.js";
import _mod12042 from "12042__.js";
import spanTimeInputToSeconds from "../12047_spanTimeInputToSeconds.js";
import _mod12054 from "12054__.js";
import BAGGAGE_HEADER_NAME from "../12055_BAGGAGE_HEADER_NAME.js";
import _mod12060 from "12060__.js";
import _mod12061 from "12061__.js";
import _mod12069 from "12069__.js";
import _mod12078 from "12078__.js";
import "module_12041";
import __SENTRY_DEBUG__ from "12070__.js";
import dateTimestampInSeconds from "12056__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12069.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12060.getMainCarrier();
      const tmpResult = _mod12060;
      const asyncContextStrategy = _mod12061.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12069.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12054.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12054;
        }
        const tmpResult13 = _mod12078;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12069;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12054.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12042.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12061;
    }
  }
  return {};
};
