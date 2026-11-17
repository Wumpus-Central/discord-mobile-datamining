// _runtime/metro/09881__.js
import errorCallback from "../09806_errorCallback.js";
import _mod9810 from "09810__.js";
import spanTimeInputToSeconds from "../09815_spanTimeInputToSeconds.js";
import _mod9822 from "09822__.js";
import _mod9823 from "09823__.js";
import _mod9828 from "09828__.js";
import _mod9829 from "09829__.js";
import _mod9837 from "09837__.js";
import _mod9846 from "09846__.js";
import "module_9809";
import __SENTRY_DEBUG__ from "09838__.js";
import dateTimestampInSeconds from "09824__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9837.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9828.getMainCarrier();
      const tmpResult = _mod9828;
      const asyncContextStrategy = _mod9829.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9837.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9822.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9822;
        }
        const tmpResult13 = _mod9846;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9837;
        const result = _mod9823.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9822.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9810.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9829;
    }
  }
  return {};
}
