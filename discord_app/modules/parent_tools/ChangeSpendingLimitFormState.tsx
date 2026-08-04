// discord_app/modules/parent_tools/ChangeSpendingLimitFormState.tsx
import initialize from "initialize";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("noop").fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export const useChangeSpendingLimitFormState = function useChangeSpendingLimitFormState(teenId) {
  let noop;
  let tmp12;
  const _require = teenId;
  let ParentalControlledSpendingLimit = _require(controlledSetting[4]).ParentalControlledSpendingLimit;
  controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj = _require(controlledSetting[5]);
  const items = [freshTeenActivityWithMap];
  const stateFromStores = obj.useStateFromStores(items, () => tmp14.getSpendingLimit());
  const items1 = [freshTeenActivityWithMap];
  const stateFromStores1 = _require(controlledSetting[5]).useStateFromStores(items1, () => {
    const monthlyPurchases = tmp14.getMonthlyPurchases();
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
  const memo = React.useMemo(() => teenId(controlledSetting[7]).getCurrencySymbol(formatted), items2);
  const memo1 = React.useMemo(tmp(tmp2[7]).getNextRenewalDateLabel, []);
  let obj2 = _require(controlledSetting[5]);
  const tmp10 = num;
  [tmp12, noop] = num(React.useState(() => {
    let str = "";
    if (null != controlledSetting) {
      const _String = String;
      str = String(tmp.amount / 10 ** num);
    }
    return str;
  }), 2);
  const items3 = [num];
  let tmp14 = "" === tmp12;
  const callback = React.useCallback((arg0) => callback(teenId(controlledSetting[7]).sanitizeAmountInput(arg0, num)), items3);
  if (tmp14) {
    tmp14 = null != controlledSetting;
  }
  freshTeenActivityWithMap = tmp14;
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
  let closure_6 = tmp18;
  let rounded = null;
  if (tmp17) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp10Result = tmp10(React.useState(false), 2);
  let closure_8 = tmp10Result[1];
  const items4 = [tmp18, tmp14, rounded, teenId, formatted];
  obj = { amountInput: tmp12, handleAmountChange: callback, currency: formatted, currencySymbol: memo, exponent: num, isClearingCap: tmp14, isOverspending: null, canSave: null, isSubmitting: null, renewalDate: null, monthlySpend: null, save: null };
  let tmp23 = null != stateFromStores1;
  const callback1 = obj3.useCallback(formatted(function*() {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp3;
            if (outer1_6) {
              outer1_8(true);
              let c3 = 1;
              if (outer1_5) {
                const ParentalControlledSpendingLimit2 = outer1_0(13875).ParentalControlledSpendingLimit;
                dependencyMap = 2;
                c4 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = ParentalControlledSpendingLimit2.updateControlledSetting(outer1_0, null);
                return obj1;
              } else if (null != outer1_7) {
                const ParentalControlledSpendingLimit = outer1_0(13875).ParentalControlledSpendingLimit;
                const obj2 = { amount: null, currency: null };
                obj2[0] = tmp16;
                obj2[1] = outer1_2;
                dependencyMap = 3;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = ParentalControlledSpendingLimit.updateControlledSetting(outer1_0, obj2);
                return obj3;
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback(false);
          throw initialize;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            callback(false);
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          callback(false);
          c4 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c3 = 0;
        callback(false);
      } catch (tmp27) {
        initialize = tmp27;
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
  obj[6] = tmp23;
  obj[7] = tmp18;
  obj[8] = tmp10Result[0];
  obj[9] = memo1;
  obj[10] = stateFromStores1;
  obj[11] = callback1;
  return obj;
};