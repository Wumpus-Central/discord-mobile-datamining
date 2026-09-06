// _runtime/00733_sampleSpan.js
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";
import _mod701 from "metro/00701__.js";
import _mod720 from "metro/00720__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const sampleSpan = function sampleSpan(tracesSampler, parentSampled, arg2) {
  let obj = _mod720;
  if (obj.hasSpansEnabled(tracesSampler)) {
    if (typeof tracesSampler.tracesSampler === "function") {
      obj = {};
      const merged = Object.assign(parentSampled);
      obj.inheritOrSampleWith = function inheritOrSampleWith(arg0) {
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
      let tracesSampleRate = tracesSampler.tracesSampler(obj);
      let flag2 = true;
    } else if (undefined !== parentSampled.parentSampled) {
      tracesSampleRate = parentSampled.parentSampled;
    } else if (undefined !== tracesSampler.tracesSampleRate) {
      tracesSampleRate = tracesSampler.tracesSampleRate;
      flag2 = true;
    }
    const parseSampleRateResult = _mod701.parseSampleRate(tracesSampleRate);
    if (undefined === parseSampleRateResult) {
      if (_mod688.DEBUG_BUILD) {
        const debug3 = consoleSandbox.debug;
        const _JSON = JSON;
        const json = JSON.stringify(tracesSampleRate);
        const _JSON2 = JSON;
        const _HermesInternal2 = HermesInternal;
        debug3.warn(
          "[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got " +
            json +
            " of type " +
            JSON.stringify(typeof tracesSampleRate) +
            ".",
        );
      }
      const items = [false];
      return items;
    } else if (parseSampleRateResult) {
      if (arg2 >= parseSampleRateResult) {
        if (_mod688.DEBUG_BUILD) {
          const debug2 = consoleSandbox.debug;
          let _Number = Number;
          const _HermesInternal = HermesInternal;
          debug2.log(
            "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
              Number(tracesSampleRate) +
              ")",
          );
        }
      }
      const items1 = [arg2 < parseSampleRateResult, parseSampleRateResult, flag2];
      return items1;
    } else {
      if (_mod688.DEBUG_BUILD) {
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
    const tmpResult = _mod701;
  } else {
    const items3 = [false];
    return items3;
  }
};
