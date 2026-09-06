// === Module 12836: ? ===

// Module 12836
import _mod12797 from "module_12797" /* 12797 */;
import _mod12824 from "module_12824" /* 12824 */;
import _mod12825 from "module_12825" /* 12825 */;
import _mod12829 from "module_12829" /* 12829 */;
import _mod12837 from "module_12837" /* 12837 */;

require = arg1;
const dependencyMap = arg6;

export const sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  let obj = _mod12829;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let tmpResult = _mod12824;
    const isolationScope = tmpResult.getIsolationScope();
    obj = {};
    const merged = Object.assign(normalizedRequest);
    obj.normalizedRequest = normalizedRequest.normalizedRequest || isolationScope.getScopeData().sdkProcessingMetadata.normalizedRequest;
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
    tmpResult = _mod12837;
    const parseSampleRateResult = tmpResult.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (_mod12825.DEBUG_BUILD) {
        const logger3 = _mod12797.logger;
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
        if (_mod12825.DEBUG_BUILD) {
          const logger2 = _mod12797.logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (_mod12825.DEBUG_BUILD) {
        const logger = _mod12797.logger;
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