// === Module 6939: PriceUtils ===

// Module 6939 (PriceUtils)
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import utils_PriceUtils from "utils/PriceUtils" /* 6940 */;
import LocaleStore from "LocaleStore" /* 2129 */;

require = fn;
function formatSingleCurrencyPrice(result, BGN, localeOverride) {
  let obj = localeOverride;
  if (localeOverride == null) {
    obj = {};
  }
  const obj2 = {};
  const merged = Object.assign(obj);
  localeOverride = undefined;
  if (localeOverride != null) {
    localeOverride = localeOverride.localeOverride;
  }
  if (localeOverride == null) {
    localeOverride = LocaleStore.locale;
  }
  let isWindowsResult = "en-US" === localeOverride;
  let hasItem = isWindowsResult;
  if (isWindowsResult) {
    hasItem = closure_5.includes(LocaleStore.systemLocale);
  }
  if (hasItem) {
    obj2.currencyDisplay = "code";
  }
  if (isWindowsResult) {
    isWindowsResult = PlatformUtils.isWindows();
  }
  if (isWindowsResult) {
    isWindowsResult = "en-GB" === LocaleStore.systemLocale;
  }
  if (isWindowsResult) {
    obj2.currencyDisplay = "code";
  }
  if (tmp11) {
    obj2.minimumFractionDigits = 0;
  }
  return utils_PriceUtils.formatPrice(result, BGN, localeOverride, obj2);
}
const SubscriptionIntervalTypes = fn(1392).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1096).CurrencyCodes;
let closure_5 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const size = fn(2);
const result = size.fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export const formatDualPriceForBG = function formatDualPriceForBG(result, localeOverride) {
  return "" + formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride) + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
};
export const formatPrice = function formatPrice(result, BGN, localeOverride) {
  return formatSingleCurrencyPrice(result, BGN, localeOverride);
};
export const formatRate = function formatRate(priceString, interval, intervalCount) {
  if (interval === SubscriptionIntervalTypes.YEAR) {
    const intl3 = util.intl;
    const obj2 = { price: priceString };
    return intl3.formatToPlainString(util.t["rS8FA+"], obj2);
  } else {
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (1 === intervalCount) {
        const intl2 = util.intl;
        const obj3 = { price: priceString };
        return intl2.formatToPlainString(util.t.AbOLNu, obj3);
      }
    }
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (intervalCount > 1) {
        const intl = util.intl;
        const obj = { price: priceString, intervalCount };
        return intl.formatToPlainString(util.t["Qc+9ww"], obj);
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported interval type: " + interval + ", and interval count: " + intervalCount);
    throw error;
  }
};
export const formatPercent = function formatPercent(stateFromStores, arg1) {
  return Intl.NumberFormat(stateFromStores, { style: "percent", minimumFractionDigits: 0 }).format(arg1);
};
export const maybeShortenPrice = function maybeShortenPrice(str) {
  let replaced = str;
  if (str.length > 5) {
    replaced = str.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency, localeOverride) {
  const arr = formatSingleCurrencyPrice(amount, currency, localeOverride);
  let replaced = arr;
  if (arr.length > 5) {
    replaced = arr.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};