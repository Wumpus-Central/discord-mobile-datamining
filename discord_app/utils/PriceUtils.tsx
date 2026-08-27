// === Module 6033: formatSingleCurrencyPrice ===

// Module 6033 (formatSingleCurrencyPrice)
import set from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getPremiumPlanItem from "getPremiumPlanItem" /* 4107 */;
import CurrencyCodes2 from "CurrencyCodes" /* 6034 */;
import closure_2 from "_getSystemLocale" /* 1996 */;
import closure_3 from "handlePaymentSourceCreateEnd" /* 4109 */;
import { SubscriptionIntervalTypes } from "GuildFeatures" /* 1924 */;
import { CurrencyCodes } from "sum" /* 505 */;

require = arg1;
function formatSingleCurrencyPrice(result, BGN, localeOverride) {
  let obj = localeOverride;
  if (localeOverride == null) {
    obj = {};
  }
  obj = {};
  const merged = Object.assign(obj);
  localeOverride = undefined;
  if (localeOverride != null) {
    localeOverride = localeOverride.localeOverride;
  }
  if (localeOverride == null) {
    localeOverride = closure_2.locale;
  }
  let isWindowsResult = "en-US" === localeOverride;
  let hasItem = isWindowsResult;
  if (isWindowsResult) {
    hasItem = closure_6.includes(closure_2.systemLocale);
  }
  if (hasItem) {
    obj.currencyDisplay = "code";
  }
  if (isWindowsResult) {
    isWindowsResult = set.isWindows();
    const obj3 = set;
  }
  if (isWindowsResult) {
    isWindowsResult = "en-GB" === closure_2.systemLocale;
  }
  if (isWindowsResult) {
    obj.currencyDisplay = "code";
  }
  if (tmp11) {
    obj.minimumFractionDigits = 0;
  }
  return CurrencyCodes2.formatPrice(result, BGN, localeOverride, obj);
}
function formatPrice(amount, currency, localeOverride, localeOverride) {
  const timestamp = Date.now();
  let flag = false;
  if (timestamp < date.getTime()) {
    const platformName = set.getPlatformName();
    if ("android" === platformName) {
      let ipCountryCode = tmp2(6036).default.getUserCountry();
      const _default2 = tmp2(6036).default;
    } else if ("ios" === platformName) {
      const storeFront = tmp2(6038).default.getStoreFront();
      let country;
      if (storeFront != null) {
        country = storeFront.country;
      }
      ipCountryCode = country;
      const _default = tmp2(6038).default;
    } else {
      ipCountryCode = ipCountryCode.ipCountryCode;
    }
    let tmp9 = "BG" === ipCountryCode;
    if (tmp9) {
      let formatted;
      if (currency != null) {
        formatted = currency.toLowerCase();
      }
      tmp9 = formatted === CurrencyCodes.EUR;
    }
    flag = tmp9;
    const obj2 = set;
  }
  if (flag) {
    const tmp13Result = tmp13(amount, CurrencyCodes.EUR, localeOverride);
    const _HermesInternal = HermesInternal;
    let combined = "" + tmp13Result + " (" + tmp13(1.95583 * amount, CurrencyCodes.BGN, localeOverride) + ")";
  } else {
    combined = tmp13(amount, currency, localeOverride);
  }
  return combined;
}
function formatRate(priceString, interval, intervalCount) {
  if (interval === SubscriptionIntervalTypes.YEAR) {
    const intl3 = getSystemLocale.intl;
    let obj = { price: null };
    obj[0] = priceString;
    return intl3.formatToPlainString(getSystemLocale.t["rS8FA+"], obj);
  } else {
    if (interval === tmp.MONTH) {
      if (1 === intervalCount) {
        const intl2 = getSystemLocale.intl;
        obj = { price: null };
        obj[0] = priceString;
        return intl2.formatToPlainString(getSystemLocale.t.AbOLNu, obj);
      }
    }
    if (interval === tmp.MONTH) {
      if (intervalCount > 1) {
        const intl = getSystemLocale.intl;
        obj = { price: null, intervalCount: null };
        obj[0] = priceString;
        obj[1] = intervalCount;
        return intl.formatToPlainString(getSystemLocale.t["Qc+9ww"], obj);
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Unsupported interval type: " + interval + ", and interval count: " + intervalCount);
    throw error;
  }
}
let closure_6 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const result = require("set").fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export const formatDualPriceForBG = function formatDualPriceForBG(result, localeOverride) {
  return "" + formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride) + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
};
export { formatPrice };
export { formatRate };
export const formatPercent = function formatPercent(arg0, arg1) {
  return Intl.NumberFormat(arg0, { style: "percent", minimumFractionDigits: 0 }).format(arg1);
};
export const formatSubscriptionPlanRate = function formatSubscriptionPlanRate(interval_count) {
  const price = getPremiumPlanItem.getPrice(interval_count.id);
  return formatRate(formatPrice(price.amount, price.currency), interval_count.interval, "interval_count" in interval_count ? interval_count.interval_count : interval_count.intervalCount);
};
export const maybeShortenPrice = function maybeShortenPrice(str) {
  let replaced = str;
  if (str.length > 5) {
    replaced = str.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency, localeOverride) {
  const arr = formatPrice(amount, currency, localeOverride);
  let replaced = arr;
  if (arr.length > 5) {
    replaced = arr.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};