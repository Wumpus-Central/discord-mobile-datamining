// === Module 13155: useVirtualCurrencyBalance ===

// Module 13155 (useVirtualCurrencyBalance)
import initialize from "initialize" /* 504 */;
import closure_2 from "redeemError" /* 8852 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx");

export const useVirtualCurrencyBalance = function useVirtualCurrencyBalance() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => balance.balance);
};
export const useHasEnoughVirtualCurrency = function useHasEnoughVirtualCurrency(arg0) {
  const _require = arg0;
  const items = [closure_2];
  return _require(504).useStateFromStores(items, () => {
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