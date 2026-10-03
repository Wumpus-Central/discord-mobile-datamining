// === Module 14713: SpendingLimitDisplay ===

// Module 14713 (SpendingLimitDisplay)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import _modDef2493 from "module_2493" /* 2493 */;
import PriceUtils from "PriceUtils" /* 6736 */;
import utils_PriceUtils from "utils/PriceUtils" /* 6737 */;
import SpendingLimitUtils from "SpendingLimitUtils" /* 14624 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;

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
        obj3.remainingText = intl.formatToPlainString(_modDef2493["+Q+bU1"], obj4);
        let obj = obj3;
        const tmp5Result = PriceUtils;
      } else {
        obj = { kind: "on", monthlyText: formatRateResult };
      }
      return obj;
    }
  }
}
const SubscriptionIntervalTypes = fn(1379).SubscriptionIntervalTypes;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    const fn = function o() {
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
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5, undefined, SpendingLimitUtils.spendingLimitEqual);
}) : (() => {
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export const useSpendingLimitFromUserSettings = tmp2;
export const CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS = 10;
export { getSpendingLimitDisplayState };
export const useSpendingLimitDisplayState = ReactCompilerGating.isReactCompilerEnabled() ? ((amount) => {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function u() {
      return monthlyPurchases.getMonthlyPurchases();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  let num3;
  if (stateFromStores != null) {
    num3 = stateFromStores.total_amount;
  }
  if (num3 == null) {
    num3 = 0;
  }
  if (cResult[2] === amount) {
    if (cResult[3] === num3) {
      let tmp8 = cResult[4];
    }
    return tmp8;
  }
  const tmp9 = getSpendingLimitDisplayState(amount, num3);
  cResult[2] = amount;
  cResult[3] = num3;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const tmpResult = initialize;
}) : ((amount) => {
  const items = [FamilyCenterStore];
  const stateFromStores = initialize.useStateFromStores(items, () => monthlyPurchases.getMonthlyPurchases());
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.total_amount;
  }
  if (num == null) {
    num = 0;
  }
  return getSpendingLimitDisplayState(amount, num);
});