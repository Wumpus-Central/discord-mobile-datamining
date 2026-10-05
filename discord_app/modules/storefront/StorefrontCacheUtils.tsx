// === Module 7891: StorefrontCacheUtils ===

// Module 7891 (StorefrontCacheUtils)
import DurationsDefault from "Durations" /* 1102 */;
import size from "module_2" /* 2 */;

const result = 12 * DurationsDefault.Millis.HOUR;
const _window = result;
const result1 = 10 * DurationsDefault.Millis.MINUTE;
const result2 = size.fileFinishedImporting("modules/storefront/StorefrontCacheUtils.tsx");

export const TWELVE_HOURS_MS = result;
export const ERROR_STALE_THRESHOLD_MS = result1;
export const shouldRefetchEntry = function shouldRefetchEntry(hasPricingCoverage) {
  let fetchState;
  let fetchedAt;
  let needsPricing;
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
        if (!tmp4) {
          const _Date = Date;
          tmp4 = Date.now() - fetchedAt > _window;
        }
        tmp3 = tmp4;
      }
      tmp = tmp3;
    }
    return tmp;
  }
};