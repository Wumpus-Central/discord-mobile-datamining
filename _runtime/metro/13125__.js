// _runtime/metro/13125__.js
import errorCallback from "../13050_errorCallback.js";
import _mod13054 from "13054__.js";
import spanTimeInputToSeconds from "../13059_spanTimeInputToSeconds.js";
import _mod13066 from "13066__.js";
import BAGGAGE_HEADER_NAME from "../13067_BAGGAGE_HEADER_NAME.js";
import _mod13072 from "13072__.js";
import _mod13073 from "13073__.js";
import _mod13081 from "13081__.js";
import _mod13090 from "13090__.js";
import "module_13053";
import __SENTRY_DEBUG__ from "13082__.js";
import dateTimestampInSeconds from "13068__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13081.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13072.getMainCarrier();
      const tmpResult = _mod13072;
      const asyncContextStrategy = _mod13073.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13081.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13066.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13066;
        }
        const tmpResult13 = _mod13090;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13081;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13066.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13054.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13073;
    }
  }
  return {};
};
