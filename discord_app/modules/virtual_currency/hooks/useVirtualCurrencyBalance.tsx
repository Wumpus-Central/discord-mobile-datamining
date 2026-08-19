// === Module 11988: useVirtualCurrencyBalance ===

// Module 11988 (useVirtualCurrencyBalance)
import initialize from "initialize" /* 589 */;
import redeemError from "redeemError" /* 9254 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx");

export const useVirtualCurrencyBalance = function useVirtualCurrencyBalance() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => balance.balance);
};
export const useHasEnoughVirtualCurrency = function useHasEnoughVirtualCurrency(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(589).useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let num = closure_1_2.balance;
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