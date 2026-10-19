// _runtime/metro/12457__.js
import errorCallback from "../12382_errorCallback.js";
import _mod12386 from "12386__.js";
import spanTimeInputToSeconds from "../12391_spanTimeInputToSeconds.js";
import _mod12398 from "12398__.js";
import BAGGAGE_HEADER_NAME from "../12399_BAGGAGE_HEADER_NAME.js";
import _mod12404 from "12404__.js";
import _mod12405 from "12405__.js";
import _mod12413 from "12413__.js";
import _mod12422 from "12422__.js";
import "module_12385";
import __SENTRY_DEBUG__ from "12414__.js";
import dateTimestampInSeconds from "12400__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12413.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12404.getMainCarrier();
      const tmpResult = _mod12404;
      const asyncContextStrategy = _mod12405.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12413.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12398.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12398;
        }
        const tmpResult13 = _mod12422;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12413;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12398.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12386.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12405;
    }
  }
  return {};
};
