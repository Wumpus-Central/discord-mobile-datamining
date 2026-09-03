// discord_app/modules/parent_tools/ChangeSpendingLimitFormState.tsx
import closure_2 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../_runtime/00019_noop.js";
import closure_5 from "FamilyCenterStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export const useChangeSpendingLimitFormState = function useChangeSpendingLimitFormState(teenId) {
  const _require = teenId;
  let ParentalControlledSpendingLimit = _require(controlledSetting[4]).ParentalControlledSpendingLimit;
  controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj = _require(controlledSetting[5]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => store.getSpendingLimit());
  const items1 = [closure_5];
  const stateFromStores1 = _require(controlledSetting[5]).useStateFromStores(items1, () => {
    const monthlyPurchases = store.getMonthlyPurchases();
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
  [tmp12, closure_4] = num(
    React.useState(() => {
      let str = "";
      if (null != controlledSetting) {
        const _String = String;
        str = String(tmp.amount / 10 ** num);
      }
      return str;
    }),
    2,
  );
  const items3 = [num];
  let tmp14 = "" === tmp12;
  const callback = React.useCallback(
    (arg0) => callback(teenId(controlledSetting[7]).sanitizeAmountInput(arg0, num)),
    items3,
  );
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
  const tmp10Result = tmp10(React.useState(false), 2);
  closure_8 = tmp10Result[1];
  const items4 = [tmp18, tmp14, rounded, teenId, formatted];
  obj = {
    amountInput: tmp12,
    handleAmountChange: callback,
    currency: formatted,
    currencySymbol: memo,
    exponent: num,
    isClearingCap: tmp14,
    isOverspending: null,
    canSave: null,
    isSubmitting: null,
    renewalDate: null,
    monthlySpend: null,
    save: null,
  };
  let tmp23 = null != stateFromStores1;
  const callback1 = obj3.useCallback(
    formatted(function* () {
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
              closure_0 = tmp3;
              if (closure_1_6) {
                closure_1_8(true);
                c3 = 1;
                if (closure_1_5) {
                  const ParentalControlledSpendingLimit2 = closure_1_0(14669).ParentalControlledSpendingLimit;
                  dependencyMap = 2;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = ParentalControlledSpendingLimit2.updateControlledSetting(closure_1_0, null);
                  return obj1;
                } else if (null != closure_1_7) {
                  const ParentalControlledSpendingLimit = closure_1_0(14669).ParentalControlledSpendingLimit;
                  const obj2 = { amount: null, currency: null };
                  obj2[0] = tmp16;
                  obj2[1] = closure_1_2;
                  dependencyMap = 3;
                  c4 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = ParentalControlledSpendingLimit.updateControlledSetting(closure_1_0, obj2);
                  return obj3;
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp7) {
            c3 = 0;
            callback(false);
            throw closure_2;
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
          closure_2 = tmp27;
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp27;
          } else {
            dependencyMap = tmp;
          }
        }
      }
    }),
    items4,
  );
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
