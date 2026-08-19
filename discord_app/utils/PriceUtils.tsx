// discord_app/utils/PriceUtils.tsx
import obj132 from "PlatformUtils.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import getPremiumPlanItem from "PremiumUtils.tsx";
import CurrencyCodes2 from "../../discord_common/js/shared/utils/PriceUtils.tsx";
import updateProduct from "../stores/native/IAPStore.android.tsx";
import isGenericIapConnected from "../modules/billing/native/GenericIAPStore.tsx";
import _getSystemLocale from "../modules/user_settings/LocaleStore.tsx";
import handlePaymentSourceCreateEnd from "../stores/billing/BillingInfoStore.tsx";
import { SubscriptionIntervalTypes } from "../modules/premium/PremiumConstants.tsx";
import { CurrencyCodes } from "../../discord_common/js/shared/Constants.tsx";

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
    isWindowsResult = obj132.isWindows();
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
function formatPrice(result, str, localeOverride) {
  const timestamp = Date.now();
  let flag = false;
  if (timestamp < date.getTime()) {
    const platformName = obj132.getPlatformName();
    if ("android" === platformName) {
      let ipCountryCode = updateProduct.default.getUserCountry();
      const _default2 = updateProduct.default;
    } else if ("ios" === platformName) {
      const storeFront = isGenericIapConnected.default.getStoreFront();
      let country;
      if (storeFront != null) {
        country = storeFront.country;
      }
      ipCountryCode = country;
      const _default = isGenericIapConnected.default;
    } else {
      ipCountryCode = ipCountryCode.ipCountryCode;
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
    let combined = "" + tmp13Result + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
  } else {
    combined = formatSingleCurrencyPrice(result, str, localeOverride);
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
    if (interval === SubscriptionIntervalTypes.MONTH) {
      if (1 === intervalCount) {
        const intl2 = getSystemLocale.intl;
        obj = { price: null };
        obj[0] = priceString;
        return intl2.formatToPlainString(getSystemLocale.t.AbOLNu, obj);
      }
    }
    if (interval === SubscriptionIntervalTypes.MONTH) {
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
const result = require("obj132").fileFinishedImporting("utils/PriceUtils.tsx");

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
export const shortenAndFormatPrice = function shortenAndFormatPrice(amount, currency) {
  const arr = formatPrice(amount, currency, arg2);
  let replaced = arr;
  if (arr.length > 5) {
    replaced = arr.replace(/\.00(?=[\s)]|$)/g, "");
  }
  return replaced;
};