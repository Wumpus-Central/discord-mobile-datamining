// discord_app/utils/PriceUtils.tsx
import util from "../intl/index.native.tsx";
import PlatformUtils from "PlatformUtils.tsx";
import PremiumUtils from "PremiumUtils.tsx";
import utils_PriceUtils from "../../discord_common/js/shared/utils/PriceUtils.tsx";
import IAPStore from "../stores/native/IAPStore.android.tsx";
import GenericIAPStore from "../modules/billing/native/GenericIAPStore.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
import BillingInfoStore from "../stores/billing/BillingInfoStore.tsx";

require = fn;
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
    localeOverride = LocaleStore.locale;
  }
  let isWindowsResult = "en-US" === localeOverride;
  let hasItem = isWindowsResult;
  if (isWindowsResult) {
    hasItem = closure_6.includes(LocaleStore.systemLocale);
  }
  if (hasItem) {
    obj.currencyDisplay = "code";
  }
  if (isWindowsResult) {
    isWindowsResult = PlatformUtils.isWindows();
  }
  if (isWindowsResult) {
    isWindowsResult = "en-GB" === LocaleStore.systemLocale;
  }
  if (isWindowsResult) {
    obj.currencyDisplay = "code";
  }
  if (tmp11) {
    obj.minimumFractionDigits = 0;
  }
  return utils_PriceUtils.formatPrice(result, BGN, localeOverride, obj);
}
function formatPrice(result, str, localeOverride) {
  const timestamp = Date.now();
  let flag = false;
  if (timestamp < date.getTime()) {
    const platformName = PlatformUtils.getPlatformName();
    if ("android" === platformName) {
      let ipCountryCode = IAPStore.default.getUserCountry();
      const _default2 = IAPStore.default;
    } else if ("ios" === platformName) {
      const storeFront = GenericIAPStore.default.getStoreFront();
      let country;
      if (storeFront != null) {
        country = storeFront.country;
      }
      ipCountryCode = country;
      const _default = GenericIAPStore.default;
    } else {
      ipCountryCode = BillingInfoStore.ipCountryCode;
    }
    let tmp9 = "BG" === ipCountryCode;
    if (tmp9) {
      let formatted;
      if (str != null) {
        formatted = str.toLowerCase();
      }
      tmp9 = formatted === CurrencyCodes.EUR;
    }
    flag = tmp9;
  }
  if (flag) {
    const tmp13Result = formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride);
    const _HermesInternal = HermesInternal;
    let combined =
      "" + tmp13Result + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
  } else {
    combined = formatSingleCurrencyPrice(result, str, localeOverride);
  }
  return combined;
}
function formatRate(priceString, interval, intervalCount) {
  if (interval === SubscriptionIntervalTypes.YEAR) {
    const intl3 = util.intl;
    let obj = { price: priceString };
    return intl3.formatToPlainString(util.t["rS8FA+"], obj);
  } else {
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (1 === intervalCount) {
        const intl2 = util.intl;
        obj = { price: priceString };
        return intl2.formatToPlainString(util.t.AbOLNu, obj);
      }
    }
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (intervalCount > 1) {
        const intl = util.intl;
        obj = { price: priceString, intervalCount };
        return intl.formatToPlainString(util.t["Qc+9ww"], obj);
      }
    }
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unsupported interval type: " + interval + ", and interval count: " + intervalCount);
    throw error;
  }
}
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1085).CurrencyCodes;
let closure_6 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const size = fn(2);
const result = size.fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export const formatDualPriceForBG = function formatDualPriceForBG(result, localeOverride) {
  return (
    "" +
    formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride) +
    " (" +
    formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) +
    ")"
  );
};
export { formatPrice };
export { formatRate };
export const formatPercent = function formatPercent(stateFromStores, arg1) {
  return Intl.NumberFormat(stateFromStores, { style: "percent", minimumFractionDigits: 0 }).format(arg1);
};
export const formatSubscriptionPlanRate = function formatSubscriptionPlanRate(interval_count) {
  const price = PremiumUtils.getPrice(interval_count.id);
  return formatRate(
    formatPrice(price.amount, price.currency),
    interval_count.interval,
    "interval_count" in interval_count ? interval_count.interval_count : interval_count.intervalCount,
  );
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
