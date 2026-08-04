// discord_app/modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx
import redeemError from "redeemError";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx");

export const useVirtualCurrencyBalance = function useVirtualCurrencyBalance() {
  const items = [redeemError];
  return require(589) /* initialize */.useStateFromStores(items, () => balance.balance);
};
export const useHasEnoughVirtualCurrency = function useHasEnoughVirtualCurrency(arg0) {
  const _require = arg0;
  const items = [redeemError];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let num = outer1_2.balance;
      if (num == null) {
        num = 0;
      }
      tmp2 = num >= tmp;
    }
    return tmp2;
  });
};
export const getVirtualCurrencyBalance = function getVirtualCurrencyBalance() {
  return currentBalance.getCurrentBalance();
};