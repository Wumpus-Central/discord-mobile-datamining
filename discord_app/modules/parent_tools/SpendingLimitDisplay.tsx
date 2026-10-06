// discord_app/modules/parent_tools/SpendingLimitDisplay.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import intl2 from "../../intl/index.native.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import _modDef2521 from "FamilyCenter.messages.js";
import PriceUtils from "../../utils/PriceUtils.tsx";
import utils_PriceUtils from "../../../discord_common/js/shared/utils/PriceUtils.tsx";
import SpendingLimitUtils from "SpendingLimitUtils.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import FamilyCenterStore from "FamilyCenterStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getSpendingLimitDisplayState(amount, arg1) {
  let formatToPlainString;
  let obj4;
  let prop;
  let tmp6Result;
  if (null == amount) {
    return { kind: "off" };
  } else if (0 === amount.amount) {
    return { kind: "blocked" };
  } else {
    const currency = amount.currency;
    const formatRate = PriceUtils.formatRate;
    PriceUtils;
    const obj6 = PriceUtils;
    const formatRateResult = formatRate(obj6.formatPrice(amount.amount, currency), SubscriptionIntervalTypes.MONTH, 1);
    if (arg1 >= amount.amount) {
      return { kind: "spent", monthlyText: formatRateResult };
    } else {
      let obj;
      let num = utils_PriceUtils.CurrencyExponents[amount.currency];
      if (num == null) {
        num = 2;
      }
      const diff = amount.amount - arg1;
      if (diff <= 10 * 10 ** num) {
        const obj3 = {
          kind: "close-to-limit",
          monthlyText: formatRateResult,
          remainingText: formatToPlainString(prop, obj4),
        };
        const intl = intl2.intl;
        formatToPlainString = intl.formatToPlainString;
        obj4 = { amount: tmp6Result.formatPrice(diff, currency) };
        prop = _modDef2521["+Q+bU1"];
        obj = obj3;
        tmp6Result = PriceUtils;
      } else {
        obj = { kind: "on", monthlyText: formatRateResult };
      }
      return obj;
    }
  }
}
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let settings;
      let tmp4;
      let tmp5;
      let obj = react;
      const cResult = obj.c(2);
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
            const _Number = Number;
            tmp2 = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
            const obj = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5, undefined, SpendingLimitUtils.spendingLimitEqual);
    }
  : () => {
      let settings;
      let obj = get_initialized;
      const items = [UserSettingsProtoStore];
      return obj.useStateFromStores(
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
            const _Number = Number;
            tmp2 = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
            const obj = { amount: Number(oneTimePurchaseLimit.amount), currency: oneTimePurchaseLimit.currency };
          }
          return tmp2;
        },
        undefined,
        SpendingLimitUtils.spendingLimitEqual,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (amount) => {
      let monthlyPurchases;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(5);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let num3;
      if (stateFromStores != null) {
        num3 = stateFromStores.total_amount;
      }
      if (num3 == null) {
        num3 = 0;
      }
      if (cResult[2] === amount) {
        let tmp8;
        if (cResult[3] === num3) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = getSpendingLimitDisplayState(amount, num3);
      cResult[2] = amount;
      cResult[3] = num3;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (amount) => {
      let monthlyPurchases;
      const items = [FamilyCenterStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => monthlyPurchases.getMonthlyPurchases());
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.total_amount;
      }
      if (num == null) {
        num = 0;
      }
      return getSpendingLimitDisplayState(amount, num);
    };
const result = size.fileFinishedImporting("modules/parent_tools/SpendingLimitDisplay.tsx");

export const useSpendingLimitFromUserSettings = tmp2;
export const CLOSE_TO_LIMIT_THRESHOLD_MAJOR_UNITS = 10;
export { getSpendingLimitDisplayState };
export const useSpendingLimitDisplayState = tmp3;
