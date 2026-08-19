// === Module 7777: sampleSpan ===

// Module 7777 (sampleSpan)
import consoleSandbox from "consoleSandbox" /* 7738 */;
import getClient from "getClient" /* 7765 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 7766 */;
import hasTracingEnabled from "hasTracingEnabled" /* 7770 */;
import parseSampleRate from "parseSampleRate" /* 7778 */;

require = arg1;
const dependencyMap = arg6;
arg5.sampleSpan = function sampleSpan(tracesSampler, normalizedRequest) {
  let obj = hasTracingEnabled;
  if (obj.hasTracingEnabled(tracesSampler)) {
    let tmpResult = getClient;
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
    tmpResult = parseSampleRate;
    const parseSampleRateResult = tmpResult.parseSampleRate(num);
    if (undefined === parseSampleRateResult) {
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const logger3 = consoleSandbox.logger;
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
        if (__SENTRY_DEBUG__.DEBUG_BUILD) {
          const logger2 = consoleSandbox.logger;
          const _Number = Number;
          const _HermesInternal = HermesInternal;
          logger2.log("[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " + Number(num) + ")");
        }
        items2 = [false, parseSampleRateResult];
      }
    } else {
      if (__SENTRY_DEBUG__.DEBUG_BUILD) {
        const logger = consoleSandbox.logger;
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