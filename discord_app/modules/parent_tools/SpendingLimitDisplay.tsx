// discord_app/modules/parent_tools/SpendingLimitDisplay.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import _modDef2396 from "FamilyCenter.messages.js";
import PriceUtils from "../../utils/PriceUtils.tsx";
import SpendingLimitUtils from "SpendingLimitUtils.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import FamilyCenterStore from "FamilyCenterStore.tsx";

require = fn;
function getSpendingLimitDisplayState(amount, arg1) {
  if (null == amount) {
    return { kind: "off" };
  } else if (0 === amount.amount) {
    return { kind: "blocked" };
  } else {
    const currency = amount.currency;
    const obj6 = PriceUtils;
    const formatRateResult = obj6.formatRate(
      PriceUtils.formatPrice(amount.amount, currency),
      SubscriptionIntervalTypes.MONTH,
      1,
    );
    if (arg1 >= amount.amount) {
      let obj = { kind: "spent", monthlyText: formatRateResult };
      return obj;
    } else {
      let num = tmp5(7235).CurrencyExponents[amount.currency];
      if (num == null) {
        num = 2;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        obj = { kind: "close-to-limit", monthlyText: formatRateResult, remainingText: null };
        const intl = tmp5(1114).intl;
        const obj1 = { amount: tmp5(7234).formatPrice(diff, currency) };
        obj.remainingText = intl.formatToPlainString(_modDef2396["+Q+bU1"], obj1);
        const tmp5Result = tmp5(7234);
      } else {
        obj = { kind: "on", monthlyText: formatRateResult };
      }
      return obj;
    }
  }
}
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export const useSpendingLimitFromUserSettings = function useSpendingLimitFromUserSettings() {
  const items = [UserSettingsProtoStore];
  return initialize.useStateFromStores(
    items,
    () => {
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
    },
    undefined,
    SpendingLimitUtils.spendingLimitEqual,
  );
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
