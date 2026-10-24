// _runtime/metro/12644__.js
import errorCallback from "../12569_errorCallback.js";
import _mod12573 from "12573__.js";
import spanTimeInputToSeconds from "../12578_spanTimeInputToSeconds.js";
import _mod12585 from "12585__.js";
import BAGGAGE_HEADER_NAME from "../12586_BAGGAGE_HEADER_NAME.js";
import _mod12591 from "12591__.js";
import _mod12592 from "12592__.js";
import _mod12600 from "12600__.js";
import _mod12609 from "12609__.js";
import "module_12572";
import __SENTRY_DEBUG__ from "12601__.js";
import dateTimestampInSeconds from "12587__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12600.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12591.getMainCarrier();
      const tmpResult = _mod12591;
      const asyncContextStrategy = _mod12592.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12600.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12585.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12585;
        }
        const tmpResult13 = _mod12609;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12600;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12585.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12573.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12592;
    }
  }
  return {};
};
