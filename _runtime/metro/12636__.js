// _runtime/metro/12636__.js
import _mod12565 from "12565__.js";
import _mod12570 from "12570__.js";
import _mod12577 from "12577__.js";
import BAGGAGE_HEADER_NAME from "../12578_BAGGAGE_HEADER_NAME.js";
import _mod12583 from "12583__.js";
import _mod12584 from "12584__.js";
import _mod12592 from "12592__.js";
import _mod12601 from "12601__.js";
import _mod12613 from "12613__.js";
import registerSpanErrorInstrumentation from "12561__.js";
import "module_12564";
import DEBUG_BUILD from "12593__.js";
import _browserPerformanceTimeOriginMode from "../12579__browserPerformanceTimeOriginMode.js";

export const getTraceData = function getTraceData(arg0) {
  let sampled;
  let spanId;
  let traceId;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const obj2 = _mod12592;
  const client = obj2.getClient();
  const obj3 = _mod12613;
  if (obj3.isEnabled()) {
    if (client) {
      const tmpResult = _mod12583;
      const mainCarrier = tmpResult.getMainCarrier();
      const tmpResult8 = _mod12584;
      const asyncContextStrategy = tmpResult8.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        let spanToTraceHeaderResult;
        let dynamicSamplingContextFromSpan;
        let obj5;
        const tmpResult9 = _mod12592;
        const currentScope = tmpResult9.getCurrentScope();
        let span = obj.span;
        if (!span) {
          const tmpResult10 = _mod12570;
          span = tmpResult10.getActiveSpan();
        }
        if (span) {
          const tmpResult11 = _mod12570;
          spanToTraceHeaderResult = tmpResult11.spanToTraceHeader(span);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          const tmpResult12 = _mod12577;
          spanToTraceHeaderResult = tmpResult12.generateSentryTraceHeader(traceId, spanId, sampled);
        }
        const tmpResult13 = _mod12601;
        if (span) {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult14 = BAGGAGE_HEADER_NAME;
        const result = tmpResult14.dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = _mod12577.TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj5 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
        } else {
          const logger = _mod12565.logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
    }
  }
  return {};
};
