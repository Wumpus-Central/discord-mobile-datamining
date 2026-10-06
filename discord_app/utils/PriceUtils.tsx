// discord_app/utils/PriceUtils.tsx
import Constants from "../../discord_common/js/shared/Constants.tsx";
import intl4 from "../intl/index.native.tsx";
import PlatformUtils from "PlatformUtils.tsx";
import PremiumConstants from "../modules/premium/PremiumConstants.tsx";
import utils_PriceUtils from "../../discord_common/js/shared/utils/PriceUtils.tsx";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";
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
  const hasItem = isWindowsResult && closure_5.includes(LocaleStore.systemLocale);
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
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
let closure_5 = Object.freeze(["en-CA", "en-AU", "en-NZ"]);
const result = size.fileFinishedImporting("utils/PriceUtils.tsx");

export { formatSingleCurrencyPrice };
export const formatDualPriceForBG = function formatDualPriceForBG(result, localeOverride) {
  const tmp = formatSingleCurrencyPrice(result, CurrencyCodes.EUR, localeOverride);
  return "" + tmp + " (" + formatSingleCurrencyPrice(1.95583 * result, CurrencyCodes.BGN, localeOverride) + ")";
};
export const formatPrice = function formatPrice(result, BGN, localeOverride) {
  return formatSingleCurrencyPrice(result, BGN, localeOverride);
};
export const formatRate = function formatRate(priceString, interval, intervalCount) {
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
};
export const formatPercent = function formatPercent(stateFromStores, arg1) {
  const NumberFormatResult = Intl.NumberFormat(stateFromStores, { style: "percent", minimumFractionDigits: 0 });
  return NumberFormatResult.format(arg1);
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
