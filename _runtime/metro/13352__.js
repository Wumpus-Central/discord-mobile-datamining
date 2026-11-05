// _runtime/metro/13352__.js
import errorCallback from "../13277_errorCallback.js";
import _mod13281 from "13281__.js";
import spanTimeInputToSeconds from "../13286_spanTimeInputToSeconds.js";
import _mod13293 from "13293__.js";
import BAGGAGE_HEADER_NAME from "../13294_BAGGAGE_HEADER_NAME.js";
import _mod13299 from "13299__.js";
import _mod13300 from "13300__.js";
import _mod13308 from "13308__.js";
import _mod13317 from "13317__.js";
import "module_13280";
import __SENTRY_DEBUG__ from "13309__.js";
import dateTimestampInSeconds from "13295__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13308.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13299.getMainCarrier();
      const tmpResult = _mod13299;
      const asyncContextStrategy = _mod13300.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13308.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13293.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13293;
        }
        const tmpResult13 = _mod13317;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13308;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13293.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13281.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13300;
    }
  }
  return {};
}
