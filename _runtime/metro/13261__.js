// _runtime/metro/13261__.js
import errorCallback from "../13186_errorCallback.js";
import _mod13190 from "13190__.js";
import spanTimeInputToSeconds from "../13195_spanTimeInputToSeconds.js";
import _mod13202 from "13202__.js";
import BAGGAGE_HEADER_NAME from "../13203_BAGGAGE_HEADER_NAME.js";
import _mod13208 from "13208__.js";
import _mod13209 from "13209__.js";
import _mod13217 from "13217__.js";
import _mod13226 from "13226__.js";
import "module_13189";
import __SENTRY_DEBUG__ from "13218__.js";
import dateTimestampInSeconds from "13204__.js";

errorCallback;

export function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13217.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod13208.getMainCarrier();
      const tmpResult = _mod13208;
      const asyncContextStrategy = _mod13209.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod13217.getCurrentScope();
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
          spanToTraceHeaderResult = _mod13202.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod13202;
        }
        const tmpResult13 = _mod13226;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod13217;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod13202.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod13190.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod13209;
    }
  }
  return {};
}
