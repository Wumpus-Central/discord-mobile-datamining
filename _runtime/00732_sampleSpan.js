// _runtime/00732_sampleSpan.js
import __SENTRY_DEBUG__ from "metro/00687___SENTRY_DEBUG__.js";
import consoleSandbox from "00688_consoleSandbox.js";
import _mod700 from "metro/00700__.js";
import _mod719 from "metro/00719__.js";

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export function sampleSpan(options, parentSampled, sampleRand) {
  if (obj.hasSpansEnabled(options)) {
    if (typeof options.tracesSampler === "function") {
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
      let tracesSampleRate = options.tracesSampler(obj2);
      let flag2 = true;
    } else if (undefined !== parentSampled.parentSampled) {
      tracesSampleRate = parentSampled.parentSampled;
    } else if (undefined !== options.tracesSampleRate) {
      tracesSampleRate = options.tracesSampleRate;
      flag2 = true;
    }
    const parseSampleRateResult = _mod700.parseSampleRate(tracesSampleRate);
    if (undefined === parseSampleRateResult) {
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
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
      items = [false];
      return items;
    } else if (parseSampleRateResult) {
      if (sampleRand >= parseSampleRateResult) {
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
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
      const items1 = [sampleRand < parseSampleRateResult, parseSampleRateResult, flag2];
      return items1;
    } else {
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const debug = consoleSandbox.debug;
        let str = "a negative sampling decision was inherited or tracesSampleRate is set to 0";
        if (typeof options.tracesSampler === "function") {
          str = "tracesSampler returned 0 or false";
        }
        debug.log(`[Tracing] Discarding transaction because ${str}`);
      }
      const items2 = [false, parseSampleRateResult, flag2];
      return items2;
    }
    const tmpResult = _mod700;
  } else {
    const items3 = [false];
    return items3;
  }
  obj = _mod719;
}
