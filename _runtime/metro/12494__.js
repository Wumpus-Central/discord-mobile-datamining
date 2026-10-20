// _runtime/metro/12494__.js
import errorCallback from "../12419_errorCallback.js";
import _mod12423 from "12423__.js";
import spanTimeInputToSeconds from "../12428_spanTimeInputToSeconds.js";
import _mod12435 from "12435__.js";
import BAGGAGE_HEADER_NAME from "../12436_BAGGAGE_HEADER_NAME.js";
import _mod12441 from "12441__.js";
import _mod12442 from "12442__.js";
import _mod12450 from "12450__.js";
import _mod12459 from "12459__.js";
import "module_12422";
import __SENTRY_DEBUG__ from "12451__.js";
import dateTimestampInSeconds from "12437__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12450.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12441.getMainCarrier();
      const tmpResult = _mod12441;
      const asyncContextStrategy = _mod12442.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12450.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12435.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12435;
        }
        const tmpResult13 = _mod12459;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12450;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12435.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12423.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12442;
    }
  }
  return {};
};
