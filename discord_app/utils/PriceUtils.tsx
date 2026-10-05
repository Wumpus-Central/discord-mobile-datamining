// discord_app/utils/PriceUtils.tsx
import Constants from "../../discord_common/js/shared/Constants.tsx";
import intl4 from "../intl/index.native.tsx";
import PlatformUtils from "PlatformUtils.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import PremiumUtils from "PremiumUtils.tsx";
import utils_PriceUtils from "../../discord_common/js/shared/utils/PriceUtils.tsx";
import IAPStore from "../stores/native/IAPStore.android.tsx";
import GenericIAPStore from "../modules/billing/native/GenericIAPStore.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
import BillingInfoStore from "../stores/billing/BillingInfoStore.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  const hasItem = isWindowsResult && closure_6.includes(LocaleStore.systemLocale);
  if (hasItem) {
    obj2.currencyDisplay = "code";
  }
  if (isWindowsResult) {
    const obj3 = PlatformUtils;
    isWindowsResult = obj3.isWindows();
  }
  if (isWindowsResult) {
    isWindowsResult = "en-GB" === LocaleStore.systemLocale;
  }
  if (isWindowsResult) {
    obj2.currencyDisplay = "code";
  }
  const tmp11 = 0 === obj2.maximumFractionDigits && null == obj2.minimumFractionDigits;
  if (tmp11) {
    obj2.minimumFractionDigits = 0;
  }
  const obj4 = utils_PriceUtils;
  return obj4.formatPrice(result, BGN, localeOverride, obj2);
}
function formatPrice(result, BGN, localeOverride) {
  let combined;
  const timestamp = Date.now();
  let flag = false;
  const date = new Date("2026-08-05T22:00:00Z");
  if (timestamp < date.getTime()) {
    let ipCountryCode;
    const obj2 = PlatformUtils;
    const platformName = obj2.getPlatformName();
    if ("android" === platformName) {
      const _default2 = IAPStore.default;
      ipCountryCode = _default2.getUserCountry();
    } else if ("ios" === platformName) {
      const _default = GenericIAPStore.default;
      const storeFront = _default.getStoreFront();
      let country;
      if (storeFront != null) {
        country = storeFront.country;
      }
      ipCountryCode = country;
    } else {
      ipCountryCode = BillingInfoStore.ipCountryCode;
    }
    let tmp9 = "BG" === ipCountryCode;
    if (tmp9) {
      let formatted;
      if (BGN != null) {
        formatted = BGN.toLowerCase();
      }
      tmp9 = formatted === CurrencyCodes.EUR;
    }
    flag = tmp9;
  }
  if (flag) {
    const _HermesInternal = HermesInternal;
    const tmp13Result = formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride);
    combined =
      "" + tmp13Result + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
  } else {
    combined = formatSingleCurrencyPrice(result, BGN, localeOverride);
  }
  return combined;
}
function formatRate(priceString, interval, intervalCount) {
  if (interval === SubscriptionIntervalTypes.YEAR) {
    const intl3 = intl4.intl;
    const obj2 = { price: priceString };
    return intl3.formatToPlainString(intl4.t["rS8FA+"], obj2);
  } else {
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (1 === intervalCount) {
        const intl2 = intl4.intl;
        const obj3 = { price: priceString };
        return intl2.formatToPlainString(intl4.t.AbOLNu, obj3);
      }
    }
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (intervalCount > 1) {
        const intl = intl4.intl;
        const obj = { price: priceString, intervalCount };
        return intl.formatToPlainString(intl4.t["Qc+9ww"], obj);
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Unsupported interval type: " + interval + ", and interval count: " + intervalCount);
    throw error;
  }
}
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
let closure_6 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const result = size.fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export const formatDualPriceForBG = function formatDualPriceForBG(result, localeOverride) {
  const tmp = formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride);
  return "" + tmp + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
};
export { formatPrice };
export { formatRate };
export const formatPercent = function formatPercent(stateFromStores, arg1) {
  const NumberFormatResult = Intl.NumberFormat(stateFromStores, { style: "percent", minimumFractionDigits: 0 });
  return NumberFormatResult.format(arg1);
};
export const formatSubscriptionPlanRate = function formatSubscriptionPlanRate(interval_count) {
  const tmp = "interval_count" in interval_count ? interval_count.interval_count : interval_count.intervalCount;
  const obj = PremiumUtils;
  const price = obj.getPrice(interval_count.id);
  return formatRate(formatPrice(price.amount, price.currency), interval_count.interval, tmp);
};
export const maybeShortenPrice = function maybeShortenPrice(str) {
  let replaced = str;
  if (str.length > 5) {
    replaced = str.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency, arg2) {
  const arr = formatPrice(amount, currency, arg2);
  let replaced = arr;
  if (arr.length > 5) {
    replaced = arr.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};
