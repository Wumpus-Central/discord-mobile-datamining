// _runtime/metro/13093__.js
import _mod13054 from "13054__.js";
import _mod13081 from "13081__.js";
import _mod13082 from "13082__.js";
import _mod13086 from "13086__.js";
import _mod13094 from "13094__.js";

require = arg1;
const dependencyMap = arg6;

export const sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  if (obj.hasTracingEnabled(tracesSampler)) {
    const isolationScope = _mod13081.getIsolationScope();
    const obj2 = {};
    const merged = Object.assign(normalizedRequest);
    obj2.normalizedRequest =
      normalizedRequest.normalizedRequest || isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
    if (typeof tracesSampler.tracesSampler === "function") {
      let num = tracesSampler.tracesSampler(obj2);
    } else if (undefined !== obj2.parentSampled) {
      num = obj2.parentSampled;
    } else {
      num = 1;
      if (undefined !== tracesSampler.tracesSampleRate) {
        num = tracesSampler.tracesSampleRate;
      }
    }
    const tmpResult = _mod13081;
    const parseSampleRateResult = _mod13094.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (_mod13082.DEBUG_BUILD) {
        const logger3 = _mod13054.logger;
        logger3.warn("[Tracing] Discarding transaction because of invalid sample rate.");
      }
      const items = [false];
      let items3 = items;
    } else if (parseSampleRateResult) {
      const _Math = Math;
      if (Math.random() < parseSampleRateResult) {
        const items1 = [true, parseSampleRateResult];
        let items2 = items1;
      } else {
        if (_mod13082.DEBUG_BUILD) {
          const logger2 = _mod13054.logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log(
            "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
              Number(num) +
              ")",
          );
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (_mod13082.DEBUG_BUILD) {
        const logger = _mod13054.logger;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if (typeof tracesSampler.tracesSampler === "function") {
          str = "tracesSampler returned 0 or false";
        }
        logger.log(`[Tracing] Discarding transaction because ${str}`);
      }
      items3 = [false, parseSampleRateResult];
    }
    return items3;
  } else {
    const items4 = [false];
    return items4;
  }
  obj = _mod13086;
};
