// _runtime/metro/12585__.js
import errorCallback from "../12510_errorCallback.js";
import _mod12514 from "12514__.js";
import spanTimeInputToSeconds from "../12519_spanTimeInputToSeconds.js";
import _mod12526 from "12526__.js";
import BAGGAGE_HEADER_NAME from "../12527_BAGGAGE_HEADER_NAME.js";
import _mod12532 from "12532__.js";
import _mod12533 from "12533__.js";
import _mod12541 from "12541__.js";
import _mod12550 from "12550__.js";
import "module_12513";
import __SENTRY_DEBUG__ from "12542__.js";
import dateTimestampInSeconds from "12528__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12541.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12532.getMainCarrier();
      const tmpResult = _mod12532;
      const asyncContextStrategy = _mod12533.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12541.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12526.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12526;
        }
        const tmpResult13 = _mod12550;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12541;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12526.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12514.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12533;
    }
  }
  return {};
};
