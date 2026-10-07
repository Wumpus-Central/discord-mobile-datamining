// === Module 744: sampleSpan ===

// Module 744 (sampleSpan)
import _mod699 from "module_699" /* 699 */;
import consoleSandbox from "consoleSandbox" /* 700 */;
import _mod712 from "module_712" /* 712 */;
import _mod731 from "module_731" /* 731 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const sampleSpan = function sampleSpan(tracesSampler, parentSampled, sampleRand) {
  if (obj.hasSpansEnabled(tracesSampler)) {
    if (typeof tracesSampler.tracesSampler === "function") {
      const obj2 = {};
      const merged = Object.assign(parentSampled);
      obj2.inheritOrSampleWith = function inheritOrSampleWith(arg0) {
        if (typeof parentSampled.parentSampleRate === "number") {
          let parentSampleRate = parentSampled.parentSampleRate;
        } else {
          parentSampleRate = arg0;
          if (typeof parentSampled.parentSampled === "boolean") {
            const _Number = Number;
            parentSampleRate = Number(parentSampled.parentSampled);
          }
        }
        return parentSampleRate;
      };
      let tracesSampleRate = tracesSampler.tracesSampler(obj2);
      let flag2 = true;
    } else if (undefined !== parentSampled.parentSampled) {
      tracesSampleRate = parentSampled.parentSampled;
    } else if (undefined !== tracesSampler.tracesSampleRate) {
      tracesSampleRate = tracesSampler.tracesSampleRate;
      flag2 = true;
    }
    const parseSampleRateResult = _mod712.parseSampleRate(tracesSampleRate);
    if (undefined === parseSampleRateResult) {
      if (_mod699.DEBUG_BUILD) {
        const debug3 = consoleSandbox.debug;
        const _JSON = JSON;
        const json = JSON.stringify(tracesSampleRate);
        const _JSON2 = JSON;
        const _HermesInternal2 = HermesInternal;
        debug3.warn("[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof tracesSampleRate) + ".");
      }
      const items = [false];
      return items;
    } else if (parseSampleRateResult) {
      if (sampleRand >= parseSampleRateResult) {
        if (_mod699.DEBUG_BUILD) {
          const debug2 = consoleSandbox.debug;
          let _Number = Number;
          const _HermesInternal = HermesInternal;
          debug2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(tracesSampleRate) + ")");
        }
      }
      const items1 = [sampleRand < parseSampleRateResult, parseSampleRateResult, flag2];
      return items1;
    } else {
      if (_mod699.DEBUG_BUILD) {
        const debug = consoleSandbox.debug;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if (typeof tracesSampler.tracesSampler === "function") {
          str = "tracesSampler returned 0 or false";
        }
        debug.log(`[Tracing] Discarding transaction because ${str}`);
      }
      const items2 = [false, parseSampleRateResult, flag2];
      return items2;
    }
    const tmpResult = _mod712;
  } else {
    const items3 = [false];
    return items3;
  }
  obj = _mod731;
};