// === Module 15246: SpendingLimitDisplay ===

// Module 15246 (SpendingLimitDisplay)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import _modDef2484 from "module_2484" /* 2484 */;
import PriceUtils from "PriceUtils" /* 7565 */;
import utils_PriceUtils from "utils/PriceUtils" /* 7566 */;
import SpendingLimitUtils from "SpendingLimitUtils" /* 15157 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7865 */;

require = fn;
function getSpendingLimitDisplayState(amount, arg1) {
  if (null == amount) {
    return { kind: "off" };
  } else if (0 === amount.amount) {
    return { kind: "blocked" };
  } else {
    const currency = amount.currency;
    const obj6 = PriceUtils;
    const formatRateResult = obj6.formatRate(PriceUtils.formatPrice(amount.amount, currency), SubscriptionIntervalTypes.MONTH, 1);
    if (arg1 >= amount.amount) {
      const obj2 = { kind: "spent", monthlyText: formatRateResult };
      return obj2;
    } else {
      let num = utils_PriceUtils.CurrencyExponents[amount.currency];
      if (num == null) {
        num = 2;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        const obj3 = { kind: "close-to-limit", monthlyText: formatRateResult, remainingText: null };
        const intl = util.intl;
        const obj4 = { amount: PriceUtils.formatPrice(diff, currency) };
        obj3.remainingText = intl.formatToPlainString(_modDef2484["+Q+bU1"], obj4);
        let obj = obj3;
        const tmp5Result = PriceUtils;
      } else {
        obj = { kind: "on", monthlyText: formatRateResult };
      }
      return obj;
    }
  }
}
const SubscriptionIntervalTypes = fn(1374).SubscriptionIntervalTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export const useSpendingLimitFromUserSettings = function useSpendingLimitFromUserSettings() {
  const items = [UserSettingsProtoStore];
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
      obj.amount = Number(oneTimePurchaseLimit.amount);
      obj.currency = oneTimePurchaseLimit.currency;
      tmp2 = obj;
    }
    return tmp2;
  }, undefined, SpendingLimitUtils.spendingLimitEqual);
};
export const CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS = 10;
export { getSpendingLimitDisplayState };
export const useSpendingLimitDisplayState = function useSpendingLimitDisplayState(cap) {
  const items = [FamilyCenterStore];
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