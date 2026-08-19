// discord_app/modules/parent_tools/SpendingLimitDisplay.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import messagesProxyDefault from "FamilyCenter.messages.js";
import formatSingleCurrencyPrice from "../../utils/PriceUtils.tsx";
import CurrencyCodes from "../../../discord_common/js/shared/utils/PriceUtils.tsx";
import spendingLimitEqual from "SpendingLimitUtils.tsx";
import handleConnectionClosedOrResumed from "../user_settings/UserSettingsProtoStore.tsx";
import freshTeenActivityWithMap from "FamilyCenterStore.tsx";
import { SubscriptionIntervalTypes } from "../premium/PremiumConstants.tsx";

require = fn;
function getSpendingLimitDisplayState(amount, arg1) {
  if (null == amount) {
    return { kind: "off" };
  } else if (0 === amount.amount) {
    return { kind: "blocked" };
  } else {
    const currency = amount.currency;
    const obj6 = formatSingleCurrencyPrice;
    const formatRateResult = obj6.formatRate(formatSingleCurrencyPrice.formatPrice(amount.amount, currency), SubscriptionIntervalTypes.MONTH, 1);
    if (arg1 >= amount.amount) {
      let obj = { kind: "spent", monthlyText: null };
      obj[1] = formatRateResult;
      return obj;
    } else {
      let num = CurrencyCodes.CurrencyExponents[amount.currency];
      if (num == null) {
        num = 2;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        obj = { kind: "close-to-limit", monthlyText: null, remainingText: null };
        obj[1] = formatRateResult;
        const intl = getSystemLocale.intl;
        obj1 = { amount: null };
        obj1[0] = formatSingleCurrencyPrice.formatPrice(diff, currency);
        obj[2] = intl.formatToPlainString(messagesProxyDefault["+Q+bU1"], obj1);
        const tmp5Result = formatSingleCurrencyPrice;
      } else {
        obj = { kind: "on", monthlyText: null };
        obj[1] = formatRateResult;
      }
      return obj;
    }
  }
}
const result = require("obj132").fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export const useSpendingLimitFromUserSettings = function useSpendingLimitFromUserSettings() {
  const items = [closure_3];
  return initialize.useStateFromStores(items, () => {
    const safetySettings = settings.settings.safetySettings;
    let oneTimePurchaseLimit;
    if (safetySettings != null) {
      const spendingLimitSettings = safetySettings.spendingLimitSettings;
      if (spendingLimitSettings != null) {
        oneTimePurchaseLimit = spendingLimitSettings.oneTimePurchaseLimit;
      }
    }
    let tmp2 = null;
    if (null != oneTimePurchaseLimit) {
      const obj = { amount: null, currency: null };
      const _Number = Number;
      obj[0] = Number(oneTimePurchaseLimit.amount);
      obj[1] = oneTimePurchaseLimit.currency;
      tmp2 = obj;
    }
    return tmp2;
  }, undefined, spendingLimitEqual.spendingLimitEqual);
};
export const CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS = 10;
export { getSpendingLimitDisplayState };
export const useSpendingLimitDisplayState = function useSpendingLimitDisplayState(cap) {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => monthlyPurchases.getMonthlyPurchases());
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.total_amount;
  }
  if (num == null) {
    num = 0;
  }
  return getSpendingLimitDisplayState(cap, num);
};