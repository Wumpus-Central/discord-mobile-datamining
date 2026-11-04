// _runtime/metro/13345__.js
import errorCallback from "../13270_errorCallback.js";
import _mod13274 from "13274__.js";
import spanTimeInputToSeconds from "../13279_spanTimeInputToSeconds.js";
import _mod13286 from "13286__.js";
import BAGGAGE_HEADER_NAME from "../13287_BAGGAGE_HEADER_NAME.js";
import _mod13292 from "13292__.js";
import _mod13293 from "13293__.js";
import _mod13301 from "13301__.js";
import _mod13310 from "13310__.js";
import "module_13273";
import __SENTRY_DEBUG__ from "13302__.js";
import dateTimestampInSeconds from "13288__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13301.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13292.getMainCarrier();
      const tmpResult = _mod13292;
      const asyncContextStrategy = _mod13293.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13301.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13286.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13286;
        }
        const tmpResult13 = _mod13310;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13301;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13286.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13274.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13293;
    }
  }
  return {};
}
