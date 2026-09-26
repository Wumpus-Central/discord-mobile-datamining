// === Module 7665: StorefrontCacheUtils ===

// Module 7665 (StorefrontCacheUtils)
import DurationsDefault from "Durations" /* 1091 */;

const result = 12 * DurationsDefault.Millis.HOUR;
const result1 = 10 * DurationsDefault.Millis.MINUTE;
const size = fn(2);
const result2 = size.fileFinishedImporting("modules/storefront/StorefrontCacheUtils.tsx");

export const TWELVE_HOURS_MS = result;
export const ERROR_STALE_THRESHOLD_MS = result1;
export const shouldRefetchEntry = function shouldRefetchEntry(hasPricingCoverage) {
  ({ fetchState, fetchedAt, needsPricing } = hasPricingCoverage);
  if (needsPricing === undefined) {
    needsPricing = false;
  }
  let flag = hasPricingCoverage.hasPricingCoverage;
  if (flag === undefined) {
    flag = false;
  }
  if ("error" === fetchState) {
    let tmp8 = null == fetchedAt;
    if (!tmp8) {
      const _Date2 = Date;
      tmp8 = Date.now() - fetchedAt > result1;
    }
    return tmp8;
  } else {
    if (needsPricing) {
      needsPricing = !flag;
    }
    let tmp = needsPricing;
    if ("loading" !== fetchState) {
      let tmp3 = null == fetchedAt;
      if (!tmp3) {
        let tmp4 = needsPricing;
        if (!needsPricing) {
          const _Date = Date;
          tmp4 = Date.now() - fetchedAt > result;
        }
        tmp3 = tmp4;
      }
      tmp = tmp3;
    }
    return tmp;
  }
};