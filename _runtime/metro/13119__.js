// _runtime/metro/13119__.js
import errorCallback from "../13044_errorCallback.js";
import _mod13048 from "13048__.js";
import spanTimeInputToSeconds from "../13053_spanTimeInputToSeconds.js";
import _mod13060 from "13060__.js";
import BAGGAGE_HEADER_NAME from "../13061_BAGGAGE_HEADER_NAME.js";
import _mod13066 from "13066__.js";
import _mod13067 from "13067__.js";
import _mod13075 from "13075__.js";
import _mod13084 from "13084__.js";
import "module_13047";
import __SENTRY_DEBUG__ from "13076__.js";
import dateTimestampInSeconds from "13062__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13075.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13066.getMainCarrier();
      const tmpResult = _mod13066;
      const asyncContextStrategy = _mod13067.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13075.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13060.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13060;
        }
        const tmpResult13 = _mod13084;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13075;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13060.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13048.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13067;
    }
  }
  return {};
};
