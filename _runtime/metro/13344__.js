// _runtime/metro/13344__.js
import errorCallback from "../13269_errorCallback.js";
import _mod13273 from "13273__.js";
import spanTimeInputToSeconds from "../13278_spanTimeInputToSeconds.js";
import _mod13285 from "13285__.js";
import BAGGAGE_HEADER_NAME from "../13286_BAGGAGE_HEADER_NAME.js";
import _mod13291 from "13291__.js";
import _mod13292 from "13292__.js";
import _mod13300 from "13300__.js";
import _mod13309 from "13309__.js";
import "module_13272";
import __SENTRY_DEBUG__ from "13301__.js";
import dateTimestampInSeconds from "13287__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13300.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13291.getMainCarrier();
      const tmpResult = _mod13291;
      const asyncContextStrategy = _mod13292.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13300.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13285.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13285;
        }
        const tmpResult13 = _mod13309;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13300;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13285.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13273.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13292;
    }
  }
  return {};
}
