// _runtime/metro/12366__.js
import errorCallback from "../12291_errorCallback.js";
import _mod12295 from "12295__.js";
import spanTimeInputToSeconds from "../12300_spanTimeInputToSeconds.js";
import _mod12307 from "12307__.js";
import BAGGAGE_HEADER_NAME from "../12308_BAGGAGE_HEADER_NAME.js";
import _mod12313 from "12313__.js";
import _mod12314 from "12314__.js";
import _mod12322 from "12322__.js";
import _mod12331 from "12331__.js";
import "module_12294";
import __SENTRY_DEBUG__ from "12323__.js";
import dateTimestampInSeconds from "12309__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12322.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12313.getMainCarrier();
      const tmpResult = _mod12313;
      const asyncContextStrategy = _mod12314.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12322.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12307.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12307;
        }
        const tmpResult13 = _mod12331;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12322;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12307.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12295.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12314;
    }
  }
  return {};
};
