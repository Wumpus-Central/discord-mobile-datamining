// discord_app/modules/parent_tools/ChangeSpendingLimitFormState.tsx
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators.tsx";
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
  hasLoadedSettingsForTeen = require("useSelectedTeenUser").useHasLoadedSettingsForTeen(teenId);
  let ParentalControlledSpendingLimit = require("ParentalControlledUserSettings").ParentalControlledSpendingLimit;
  const controlledSetting = ParentalControlledSpendingLimit.useControlledSetting(teenId);
  let obj = require("useSelectedTeenUser");
  items = [closure_6];
  const stateFromStores = require("initialize").useStateFromStores(items, () => closure_6.getSpendingLimit());
  let obj2 = require("initialize");
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
  const formatted = str.toLowerCase();
  let num = tmp(tmp2[7]).CurrencyExponents[formatted];
  if (num == null) {
    num = 2;
  }
  const items2 = [formatted];
  const memo = noop.useMemo(() => SpendingLimitUtils.getCurrencySymbol(formatted), items2);
  const memo1 = noop.useMemo(tmp(tmp2[8]).getNextRenewalDateLabel, []);
  noop = noop.useRef(false);
  closure_6 = noop.useEffectEvent(() => {
    closure_5.current = true;
    closeChangeSpendingLimitModal();
  });
  const items3 = [teenId, hasLoadedSettingsForTeen];
  const effect = noop.useEffect(() => {
    if (!hasLoadedSettingsForTeen) {
      const result = FamilyCenterActionCreatorsDefault.onTeenSettingsLoadFailure(closure_0, closure_6);
      const teenSettingsAndConsents = FamilyCenterActionCreatorsDefault.fetchTeenSettingsAndConsents(closure_0);
      return result;
    }
  }, items3);
  const effect1 = noop.useEffect(
    () => () => {
      if (ref.current) {
        const result = closure_1(hasLoadedSettingsForTeen[9]).showTeenSettingsLoadErrorToast();
        const obj = closure_1(hasLoadedSettingsForTeen[9]);
      }
    },
    [],
  );
  let obj3 = require("initialize");
  const tmp13 = num;
  [tmp15, closure_7] = num(noop.useState(null), 2);
  if (tmp15 == null) {
    let str2 = "";
    if (null != controlledSetting) {
      const _String = String;
      str2 = String(controlledSetting.amount / 10 ** num);
    }
  }
  const items4 = [num];
  let tmp19 = "" === tmp15;
  const callback = obj4.useCallback((arg0) => closure_1_7(SpendingLimitUtils.sanitizeAmountInput(arg0, num)), items4);
  if (tmp19) {
    tmp19 = null != controlledSetting;
  }
  closure_8 = tmp19;
  const parsed = parseFloat(tmp15);
  const isNaNResult = Number.isNaN(parsed);
  let tmp22 = !isNaNResult;
  if (!isNaNResult) {
    tmp22 = parsed >= 0;
  }
  let tmp23 = hasLoadedSettingsForTeen;
  if (hasLoadedSettingsForTeen) {
    let tmp24 = tmp19;
    if (!tmp19) {
      tmp24 = tmp22;
    }
    tmp23 = tmp24;
  }
  closure_9 = tmp23;
  let rounded = null;
  if (tmp22) {
    const _Math = Math;
    rounded = Math.round(parsed * 10 ** num);
  }
  const tmp13Result = tmp13(noop.useState(false), 2);
  closure_11 = tmp13Result[1];
  const items5 = [tmp23, tmp19, rounded, teenId, formatted];
  let obj5 = {
    isLoaded: hasLoadedSettingsForTeen,
    amountInput: tmp15,
    handleAmountChange: callback,
    currency: formatted,
    currencySymbol: memo,
    exponent: num,
    isClearingCap: tmp19,
    isOverspending: null,
    canSave: null,
    isSubmitting: null,
    renewalDate: null,
    monthlySpend: null,
    save: null,
  };
  let tmp29 = null != stateFromStores1;
  const callback1 = obj4.useCallback(
    formatted(function* () {
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
              if (closure_9) {
                closure_11(true);
                c3 = 1;
                if (closure_8) {
                  const ParentalControlledSpendingLimit2 = tmp3(tmp27[5]).ParentalControlledSpendingLimit;
                  c1 = 2;
                  c4 = 1;
                  const obj4 = {
                    value: ParentalControlledSpendingLimit2.updateControlledSetting(tmp3, null),
                    done: false,
                  };
                  return obj4;
                } else if (null != rounded) {
                  const ParentalControlledSpendingLimit = tmp3(tmp27[5]).ParentalControlledSpendingLimit;
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
            closure_128_11(false);
            throw tmp27;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_11(false);
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_11(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c3 = 0;
          closure_128_11(false);
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
    items5,
  );
  if (tmp29) {
    tmp29 = stateFromStores1 > 0;
  }
  if (tmp29) {
    tmp29 = null != rounded;
  }
  if (tmp29) {
    tmp29 = rounded <= stateFromStores1;
  }
  obj5.isOverspending = tmp29;
  obj5.canSave = tmp23;
  obj5.isSubmitting = tmp13Result[0];
  obj5.renewalDate = memo1;
  obj5.monthlySpend = stateFromStores1;
  obj5.save = callback1;
  return obj5;
}
