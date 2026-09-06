// === Module 14908: ChangeSpendingLimitFormState ===

// Module 14908 (ChangeSpendingLimitFormState)
import SpendingLimitUtils from "SpendingLimitUtils" /* 14827 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7537 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export const useChangeSpendingLimitFormState = function useChangeSpendingLimitFormState(teenId) {
  _require = teenId;
  let ParentalControlledSpendingLimit = require("ParentalControlledUserSettings").ParentalControlledSpendingLimit;
  controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj = require("initialize");
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.getSpendingLimit());
  const items1 = [closure_5];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const monthlyPurchases = closure_5.getMonthlyPurchases();
    let total_amount;
    if (monthlyPurchases != null) {
      total_amount = monthlyPurchases.total_amount;
    }
    if (total_amount == null) {
      total_amount = null;
    }
    return total_amount;
  });
  let str;
  if (controlledSetting != null) {
    str = controlledSetting.currency;
  }
  if (str == null) {
    let currency;
    if (stateFromStores != null) {
      currency = stateFromStores.currency;
    }
    str = currency;
  }
  if (str == null) {
    str = "usd";
  }
  const formatted = str.toLowerCase();
  let num = tmp(tmp2[6]).CurrencyExponents[formatted];
  if (num == null) {
    num = 2;
  }
  const items2 = [formatted];
  const memo = noop.useMemo(() => SpendingLimitUtils.getCurrencySymbol(formatted), items2);
  const memo1 = noop.useMemo(tmp(tmp2[7]).getNextRenewalDateLabel, []);
  let obj2 = require("initialize");
  const tmp10 = num;
  [tmp12, noop] = num(noop.useState(() => {
    let str = "";
    if (null != controlledSetting) {
      const _String = String;
      str = String(tmp.amount / 10 ** num);
    }
    return str;
  }), 2);
  const items3 = [num];
  let tmp14 = "" === tmp12;
  const callback = noop.useCallback((arg0) => noop(SpendingLimitUtils.sanitizeAmountInput(arg0, num)), items3);
  if (tmp14) {
    tmp14 = null != controlledSetting;
  }
  closure_5 = tmp14;
  const parsed = parseFloat(tmp12);
  const isNaNResult = Number.isNaN(parsed);
  let tmp17 = !isNaNResult;
  if (!isNaNResult) {
    tmp17 = parsed >= 0;
  }
  let tmp18 = tmp14;
  if (!tmp14) {
    tmp18 = tmp17;
  }
  closure_6 = tmp18;
  let rounded = null;
  if (tmp17) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp10Result = tmp10(noop.useState(false), 2);
  closure_8 = tmp10Result[1];
  const items4 = [tmp18, tmp14, rounded, teenId, formatted];
  obj = { amountInput: tmp12, handleAmountChange: callback, currency: formatted, currencySymbol: memo, exponent: num, isClearingCap: tmp14, isOverspending: null, canSave: null, isSubmitting: null, renewalDate: null, monthlySpend: null, save: null };
  let tmp23 = null != stateFromStores1;
  const callback1 = obj3.useCallback(formatted(function*(arg0, value) {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            if (closure_6) {
              closure_8(true);
              c3 = 1;
              if (closure_5) {
                const ParentalControlledSpendingLimit2 = tmp3(14825).ParentalControlledSpendingLimit;
                dependencyMap = 2;
                c4 = 1;
                const obj1 = { value: ParentalControlledSpendingLimit2.updateControlledSetting(tmp3, null), done: false };
                return obj1;
              } else if (null != rounded) {
                const ParentalControlledSpendingLimit = tmp3(14825).ParentalControlledSpendingLimit;
                const obj2 = { amount: tmp16, currency: formatted };
                dependencyMap = 3;
                c4 = 1;
                const obj3 = { value: ParentalControlledSpendingLimit.updateControlledSetting(tmp3, obj2), done: false };
                return obj3;
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_8(false);
          throw closure_2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        closure_128_8(false);
      } catch (tmp27) {
        closure_2 = tmp27;
        if (tmp4 === c3) {
          c4 = tmp2;
          throw tmp27;
        } else {
          dependencyMap = tmp;
        }
      }
    }
  }), items4);
  if (tmp23) {
    tmp23 = stateFromStores1 > 0;
  }
  if (tmp23) {
    tmp23 = null != rounded;
  }
  if (tmp23) {
    tmp23 = rounded <= stateFromStores1;
  }
  obj.isOverspending = tmp23;
  obj.canSave = tmp18;
  obj.isSubmitting = tmp10Result[0];
  obj.renewalDate = memo1;
  obj.monthlySpend = stateFromStores1;
  obj.save = callback1;
  return obj;
};