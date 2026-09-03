// === Module 14753: getSpendingLimitDisplayState ===

// Module 14753 (getSpendingLimitDisplayState)
import initialize from "initialize" /* 586 */;
import messagesProxyDefault from "messagesProxy" /* 2368 */;
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice" /* 6090 */;
import spendingLimitEqual from "spendingLimitEqual" /* 14671 */;
import closure_3 from "handleConnectionClosedOrResumed" /* 1339 */;
import closure_4 from "freshTeenActivityWithMap" /* 7292 */;
import { SubscriptionIntervalTypes } from "GuildFeatures" /* 1923 */;

require = arg1;
function getSpendingLimitDisplayState(amount) {
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
      let num = tmp5(6091).CurrencyExponents[amount.currency];
      if (num == null) {
        num = 2;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        obj = { kind: "close-to-limit", monthlyText: null, remainingText: null };
        obj[1] = formatRateResult;
        const intl = tmp5(1233).intl;
        obj1 = { amount: null };
        obj1[0] = tmp5(6090).formatPrice(diff, currency);
        obj[2] = intl.formatToPlainString(messagesProxyDefault["+Q+bU1"], obj1);
        const tmp5Result = tmp5(6090);
      } else {
        obj = { kind: "on", monthlyText: null };
        obj[1] = formatRateResult;
      }
      return obj;
    }
    const obj7 = formatSingleCurrencyPrice;
  }
}
const result = require("set").fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

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