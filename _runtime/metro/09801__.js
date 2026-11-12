// _runtime/metro/09801__.js
import errorCallback from "../09726_errorCallback.js";
import _mod9730 from "09730__.js";
import spanTimeInputToSeconds from "../09735_spanTimeInputToSeconds.js";
import _mod9742 from "09742__.js";
import _mod9743 from "09743__.js";
import _mod9748 from "09748__.js";
import _mod9749 from "09749__.js";
import _mod9757 from "09757__.js";
import _mod9766 from "09766__.js";
import "module_9729";
import __SENTRY_DEBUG__ from "09758__.js";
import dateTimestampInSeconds from "09744__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod9757.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod9748.getMainCarrier();
      const tmpResult = _mod9748;
      const asyncContextStrategy = _mod9749.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod9757.getCurrentScope();
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
          spanToTraceHeaderResult = _mod9742.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod9742;
        }
        const tmpResult13 = _mod9766;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod9757;
        const result = _mod9743.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod9742.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod9730.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod9749;
    }
  }
  return {};
}
