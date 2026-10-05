// === Module 14716: ChangeSpendingLimitFormState ===

// Module 14716 (ChangeSpendingLimitFormState)
import SpendingLimitUtils from "SpendingLimitUtils" /* 14628 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, closure_2, closure_5;

const result = size.fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export const useChangeSpendingLimitFormState = function useChangeSpendingLimitFormState(teenId) {
  let callback1;
  let controlledSetting;
  let tmp12;
  let tmp24;
  _require = teenId;
  const tmp = _require;
  let ParentalControlledSpendingLimit = require("ParentalControlledUserSettings").ParentalControlledSpendingLimit;
  controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj = require("get initialized");
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.getSpendingLimit());
  let obj2 = require("get initialized");
  const items1 = [closure_5];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
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
  const memo = react.useMemo(() => {
    const obj = SpendingLimitUtils;
    return obj.getCurrencySymbol(formatted);
  }, items2);
  const memo1 = react.useMemo(tmp(tmp2[7]).getNextRenewalDateLabel, []);
  const tmp11 = num(react.useState(() => {
    let str = "";
    if (null != controlledSetting) {
      const _String = String;
      str = String(tmp.amount / 10 ** num);
    }
    return str;
  }), 2);
  [tmp12, react] = tmp11;
  const items3 = [num];
  let tmp14 = "" === tmp12;
  const callback = react.useCallback((arg0) => {
    const obj = SpendingLimitUtils;
    return react(obj.sanitizeAmountInput(arg0, num));
  }, items3);
  const tmp10 = num;
  if (tmp14) {
    tmp14 = null != controlledSetting;
  }
  closure_5 = tmp14;
  const parsed = parseFloat(tmp12);
  let tmp17 = !Number.isNaN(parsed);
  Number.isNaN(parsed);
  if (tmp17) {
    tmp17 = parsed >= 0;
  }
  let closure_6 = tmp18;
  let rounded = null;
  if (tmp17) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp10Result = tmp10(react.useState(false), 2);
  let closure_8 = tmp10Result[1];
  const first = tmp10Result[0];
  const items4 = [tmp18, tmp14, rounded, teenId, formatted];
  let obj4 = { amountInput: tmp12, handleAmountChange: callback, currency: formatted, currencySymbol: memo, exponent: num, isClearingCap: tmp14, isOverspending: tmp24, canSave: tmp18, isSubmitting: first, renewalDate: memo1, monthlySpend: stateFromStores1, save: callback1 };
  tmp24 = null != stateFromStores1;
  callback1 = react.useCallback(formatted(function*() {
    let c1;
    let closure_0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === controlledSetting) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            if (closure_6) {
              closure_8(true);
              c3 = 1;
              if (closure_5) {
                const ParentalControlledSpendingLimit2 = tmp(controlledSetting[4]).ParentalControlledSpendingLimit;
                controlledSetting = 2;
                c4 = 1;
                const obj4 = { value: ParentalControlledSpendingLimit2.updateControlledSetting(tmp, null), done: false };
                return obj4;
              } else if (null != rounded) {
                const ParentalControlledSpendingLimit = tmp(controlledSetting[4]).ParentalControlledSpendingLimit;
                const obj5 = { amount: tmp13, currency: formatted };
                controlledSetting = 3;
                c4 = 1;
                const obj6 = { value: ParentalControlledSpendingLimit.updateControlledSetting(tmp, obj5), done: false };
                return obj6;
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === controlledSetting) {
          c3 = 0;
          closure_128_8(false);
          throw closure_2;
        } else if (2 === controlledSetting) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_8(false);
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c3 = 0;
        closure_128_8(false);
      } catch (tmp24) {
        closure_2 = tmp24;
        if (0 === c3) {
          c4 = 3;
          throw tmp24;
        } else {
          controlledSetting = 1;
        }
      }
    }
  }), items4);
  if (tmp24) {
    tmp24 = stateFromStores1 > 0;
  }
  if (tmp24) {
    tmp24 = null != rounded;
  }
  if (tmp24) {
    tmp24 = rounded <= stateFromStores1;
  }
  return obj4;
};