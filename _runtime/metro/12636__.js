// _runtime/metro/12636__.js
import errorCallback from "../12561_errorCallback.js";
import _mod12565 from "12565__.js";
import spanTimeInputToSeconds from "../12570_spanTimeInputToSeconds.js";
import _mod12577 from "12577__.js";
import BAGGAGE_HEADER_NAME from "../12578_BAGGAGE_HEADER_NAME.js";
import _mod12583 from "12583__.js";
import _mod12584 from "12584__.js";
import _mod12592 from "12592__.js";
import _mod12601 from "12601__.js";
import "module_12564";
import __SENTRY_DEBUG__ from "12593__.js";
import dateTimestampInSeconds from "12579__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12592.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12583.getMainCarrier();
      const tmpResult = _mod12583;
      const asyncContextStrategy = _mod12584.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12592.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12577.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12577;
        }
        const tmpResult13 = _mod12601;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12592;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12577.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12565.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12584;
    }
  }
  return {};
};
