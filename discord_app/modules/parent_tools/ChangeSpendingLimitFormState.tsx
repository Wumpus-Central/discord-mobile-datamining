// discord_app/modules/parent_tools/ChangeSpendingLimitFormState.tsx
import SpendingLimitUtils from "SpendingLimitUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "FamilyCenterStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/ChangeSpendingLimitFormState.tsx");

export function useChangeSpendingLimitFormState(teenId, closeChangeSpendingLimitModal) {
  _require = teenId;
  importDefault = closeChangeSpendingLimitModal;
  let ParentalControlledSpendingLimit = require("ParentalControlledUserSettings").ParentalControlledSpendingLimit;
  const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  items = [closure_6];
  const stateFromStores = require("initialize").useStateFromStores(items, () => closure_6.getSpendingLimit());
  let obj = require("initialize");
  const items1 = [closure_6];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    const monthlyPurchases = closure_6.getMonthlyPurchases();
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
  formatted = str.toLowerCase();
  let num = tmp(tmp2[6]).CurrencyExponents[formatted];
  if (num == null) {
    num = 2;
  }
  const items2 = [formatted];
  const memo = noop.useMemo(() => SpendingLimitUtils.getCurrencySymbol(formatted), items2);
  const memo1 = noop.useMemo(tmp(tmp2[7]).getNextRenewalDateLabel, []);
  _slicedToArray = noop.useRef(false);
  const tmp10 = require("useLoadTeenSettings")(teenId, () => {
    closure_4.current = true;
    closeChangeSpendingLimitModal();
  });
  const effect = noop.useEffect(
    () => () => {
      if (ref.current) {
        const result = closure_1(formatted[9]).showTeenSettingsLoadErrorToast();
        const obj = closure_1(formatted[9]);
      }
    },
    [],
  );
  let obj2 = require("initialize");
  const tmp12 = _slicedToArray;
  [tmp14, noop] = noop.useState(null);
  if (tmp14 == null) {
    let str2 = "";
    if (null != controlledSetting) {
      const _String = String;
      str2 = String(controlledSetting.amount / 10 ** num);
    }
  }
  const items3 = [num];
  let tmp18 = "" === tmp14;
  const callback = noop.useCallback((arg0) => noop(SpendingLimitUtils.sanitizeAmountInput(arg0, num)), items3);
  if (tmp18) {
    tmp18 = null != controlledSetting;
  }
  closure_6 = tmp18;
  const parsed = parseFloat(tmp14);
  const isNaNResult = Number.isNaN(parsed);
  let tmp21 = !isNaNResult;
  if (!isNaNResult) {
    tmp21 = parsed >= 0;
  }
  let tmp22 = tmp10;
  if (tmp10) {
    let tmp23 = tmp18;
    if (!tmp18) {
      tmp23 = tmp21;
    }
    tmp22 = tmp23;
  }
  closure_7 = tmp22;
  let rounded = null;
  if (tmp21) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp12Result = tmp12(noop.useState(false), 2);
  closure_9 = tmp12Result[1];
  const items4 = [tmp22, tmp18, rounded, teenId, formatted];
  let obj4 = {
    isLoaded: tmp10,
    amountInput: tmp14,
    handleAmountChange: callback,
    currency: formatted,
    currencySymbol: memo,
    exponent: num,
    isClearingCap: tmp18,
    isOverspending: null,
    canSave: null,
    isSubmitting: null,
    renewalDate: null,
    monthlySpend: null,
    save: null,
  };
  let tmp28 = null != stateFromStores1;
  const callback1 = noop.useCallback(
    num(function* () {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              if (closure_7) {
                closure_9(true);
                c3 = 1;
                if (closure_6) {
                  const ParentalControlledSpendingLimit2 = tmp3(tmp27[4]).ParentalControlledSpendingLimit;
                  c1 = 2;
                  c4 = 1;
                  const obj4 = {
                    value: ParentalControlledSpendingLimit2.updateControlledSetting(tmp3, null),
                    done: false,
                  };
                  return obj4;
                } else if (null != rounded) {
                  const ParentalControlledSpendingLimit = tmp3(tmp27[4]).ParentalControlledSpendingLimit;
                  const obj5 = { amount: tmp16, currency: formatted };
                  c1 = 3;
                  c4 = 1;
                  const obj6 = {
                    value: ParentalControlledSpendingLimit.updateControlledSetting(tmp3, obj5),
                    done: false,
                  };
                  return obj6;
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_9(false);
            throw tmp27;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_9(false);
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_9(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c3 = 0;
          closure_128_9(false);
        } catch (tmp27) {
          if (tmp4 === c3) {
            c4 = tmp2;
            throw tmp27;
          } else {
            c1 = tmp;
          }
        }
      }
    }),
    items4,
  );
  if (tmp28) {
    tmp28 = stateFromStores1 > 0;
  }
  if (tmp28) {
    tmp28 = null != rounded;
  }
  if (tmp28) {
    tmp28 = rounded <= stateFromStores1;
  }
  obj4.isOverspending = tmp28;
  obj4.canSave = tmp22;
  obj4.isSubmitting = tmp12Result[0];
  obj4.renewalDate = memo1;
  obj4.monthlySpend = stateFromStores1;
  obj4.save = callback1;
  return obj4;
}
