// _runtime/metro/12906__.js
import _mod12867 from "12867__.js";
import _mod12894 from "12894__.js";
import _mod12895 from "12895__.js";
import _mod12899 from "12899__.js";
import _mod12907 from "12907__.js";

require = arg1;
const dependencyMap = arg6;

export const sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  let obj = _mod12899;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let tmpResult = _mod12894;
    const isolationScope = tmpResult.getIsolationScope();
    obj = {};
    const merged = Object.assign(normalizedRequest);
    obj.normalizedRequest =
      normalizedRequest.normalizedRequest || isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
    if (typeof tracesSampler.tracesSampler === "function") {
      let num = tracesSampler.tracesSampler(obj);
    } else if (undefined !== obj.parentSampled) {
      num = obj.parentSampled;
    } else {
      num = 1;
      if (undefined !== tracesSampler.tracesSampleRate) {
        num = tracesSampler.tracesSampleRate;
      }
    }
    tmpResult = _mod12907;
    const parseSampleRateResult = tmpResult.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (_mod12895.DEBUG_BUILD) {
        const logger3 = _mod12867.logger;
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
        if (_mod12895.DEBUG_BUILD) {
          const logger2 = _mod12867.logger;
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
      if (_mod12895.DEBUG_BUILD) {
        const logger = _mod12867.logger;
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
};
