// _runtime/metro/13349__.js
import errorCallback from "../13274_errorCallback.js";
import _mod13278 from "13278__.js";
import spanTimeInputToSeconds from "../13283_spanTimeInputToSeconds.js";
import _mod13290 from "13290__.js";
import BAGGAGE_HEADER_NAME from "../13291_BAGGAGE_HEADER_NAME.js";
import _mod13296 from "13296__.js";
import _mod13297 from "13297__.js";
import _mod13305 from "13305__.js";
import _mod13314 from "13314__.js";
import "module_13277";
import __SENTRY_DEBUG__ from "13306__.js";
import dateTimestampInSeconds from "13292__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13305.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13296.getMainCarrier();
      const tmpResult = _mod13296;
      const asyncContextStrategy = _mod13297.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13305.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13290.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13290;
        }
        const tmpResult13 = _mod13314;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13305;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13290.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13278.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13297;
    }
  }
  return {};
}
