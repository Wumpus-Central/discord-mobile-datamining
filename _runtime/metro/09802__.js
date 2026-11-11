// _runtime/metro/09802__.js
import errorCallback from "../09727_errorCallback.js";
import _mod9731 from "09731__.js";
import spanTimeInputToSeconds from "../09736_spanTimeInputToSeconds.js";
import _mod9743 from "09743__.js";
import _mod9744 from "09744__.js";
import _mod9749 from "09749__.js";
import _mod9750 from "09750__.js";
import _mod9758 from "09758__.js";
import _mod9767 from "09767__.js";
import "module_9730";
import __SENTRY_DEBUG__ from "09759__.js";
import dateTimestampInSeconds from "09745__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9758.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9749.getMainCarrier();
      const tmpResult = _mod9749;
      const asyncContextStrategy = _mod9750.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9758.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9743.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9743;
        }
        const tmpResult13 = _mod9767;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9758;
        const result = _mod9744.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9743.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9731.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9750;
    }
  }
  return {};
}
