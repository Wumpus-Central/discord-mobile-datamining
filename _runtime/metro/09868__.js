// _runtime/metro/09868__.js
import errorCallback from "../09793_errorCallback.js";
import _mod9797 from "09797__.js";
import spanTimeInputToSeconds from "../09802_spanTimeInputToSeconds.js";
import _mod9809 from "09809__.js";
import _mod9810 from "09810__.js";
import _mod9815 from "09815__.js";
import _mod9816 from "09816__.js";
import _mod9824 from "09824__.js";
import _mod9833 from "09833__.js";
import "module_9796";
import __SENTRY_DEBUG__ from "09825__.js";
import dateTimestampInSeconds from "09811__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9824.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9815.getMainCarrier();
      const tmpResult = _mod9815;
      const asyncContextStrategy = _mod9816.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9824.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9809.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9809;
        }
        const tmpResult13 = _mod9833;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9824;
        const result = _mod9810.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9809.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9797.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9816;
    }
  }
  return {};
}
