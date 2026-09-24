// _runtime/metro/13216__.js
import errorCallback from "../13141_errorCallback.js";
import _mod13145 from "13145__.js";
import spanTimeInputToSeconds from "../13150_spanTimeInputToSeconds.js";
import _mod13157 from "13157__.js";
import BAGGAGE_HEADER_NAME from "../13158_BAGGAGE_HEADER_NAME.js";
import _mod13163 from "13163__.js";
import _mod13164 from "13164__.js";
import _mod13172 from "13172__.js";
import _mod13181 from "13181__.js";
import "module_13144";
import __SENTRY_DEBUG__ from "13173__.js";
import dateTimestampInSeconds from "13159__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13172.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13163.getMainCarrier();
      const tmpResult = _mod13163;
      const asyncContextStrategy = _mod13164.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13172.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13157.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13157;
        }
        const tmpResult13 = _mod13181;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13172;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13157.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13145.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13164;
    }
  }
  return {};
};
