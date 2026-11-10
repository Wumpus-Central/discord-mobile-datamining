// _runtime/metro/13363__.js
import errorCallback from "../13288_errorCallback.js";
import _mod13292 from "13292__.js";
import spanTimeInputToSeconds from "../13297_spanTimeInputToSeconds.js";
import _mod13304 from "13304__.js";
import BAGGAGE_HEADER_NAME from "../13305_BAGGAGE_HEADER_NAME.js";
import _mod13310 from "13310__.js";
import _mod13311 from "13311__.js";
import _mod13319 from "13319__.js";
import _mod13328 from "13328__.js";
import "module_13291";
import __SENTRY_DEBUG__ from "13320__.js";
import dateTimestampInSeconds from "13306__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13319.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13310.getMainCarrier();
      const tmpResult = _mod13310;
      const asyncContextStrategy = _mod13311.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13319.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13304.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13304;
        }
        const tmpResult13 = _mod13328;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13319;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13304.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13292.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13311;
    }
  }
  return {};
}
