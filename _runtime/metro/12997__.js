// _runtime/metro/12997__.js
import errorCallback from "../12922_errorCallback.js";
import _mod12926 from "12926__.js";
import spanTimeInputToSeconds from "../12931_spanTimeInputToSeconds.js";
import _mod12938 from "12938__.js";
import BAGGAGE_HEADER_NAME from "../12939_BAGGAGE_HEADER_NAME.js";
import _mod12944 from "12944__.js";
import _mod12945 from "12945__.js";
import _mod12953 from "12953__.js";
import _mod12962 from "12962__.js";
import "module_12925";
import __SENTRY_DEBUG__ from "12954__.js";
import dateTimestampInSeconds from "12940__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12953.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = _mod12944;
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = _mod12945;
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12953.getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = spanTimeInputToSeconds.getActiveSpan();
          const tmpResult2 = spanTimeInputToSeconds;
        }
        if (span) {
          let spanToTraceHeaderResult = spanTimeInputToSeconds.spanToTraceHeader(span);
          const tmpResult3 = spanTimeInputToSeconds;
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = _mod12938.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = _mod12938;
        }
        const tmpResult5 = _mod12962;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = _mod12953;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12938.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12926.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
