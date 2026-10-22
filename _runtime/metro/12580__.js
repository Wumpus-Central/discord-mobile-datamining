// _runtime/metro/12580__.js
import errorCallback from "../12505_errorCallback.js";
import _mod12509 from "12509__.js";
import spanTimeInputToSeconds from "../12514_spanTimeInputToSeconds.js";
import _mod12521 from "12521__.js";
import BAGGAGE_HEADER_NAME from "../12522_BAGGAGE_HEADER_NAME.js";
import _mod12527 from "12527__.js";
import _mod12528 from "12528__.js";
import _mod12536 from "12536__.js";
import _mod12545 from "12545__.js";
import "module_12508";
import __SENTRY_DEBUG__ from "12537__.js";
import dateTimestampInSeconds from "12523__.js";

errorCallback;

export const getTraceData = function getTraceData(arg0) {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12536.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = _mod12527.getMainCarrier();
      const tmpResult = _mod12527;
      const asyncContextStrategy = _mod12528.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = _mod12536.getCurrentScope();
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
          spanToTraceHeaderResult = _mod12521.generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = _mod12521;
        }
        const tmpResult13 = _mod12545;
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = _mod12536;
        const result = BAGGAGE_HEADER_NAME.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12521.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = _mod12509.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = _mod12528;
    }
  }
  return {};
};
