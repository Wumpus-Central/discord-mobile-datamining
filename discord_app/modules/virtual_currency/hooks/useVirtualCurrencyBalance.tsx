// === Module 13155: useVirtualCurrencyBalance ===

// Module 13155 (useVirtualCurrencyBalance)
import initialize from "initialize" /* 504 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 8852 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx");

export const useVirtualCurrencyBalance = function useVirtualCurrencyBalance() {
  const items = [VirtualCurrencyStore];
  return initialize.useStateFromStores(items, () => balance.balance);
};
export const useHasEnoughVirtualCurrency = function useHasEnoughVirtualCurrency(arg0) {
  _require = arg0;
  const items = [VirtualCurrencyStore];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      let num = VirtualCurrencyStore.balance;
      if (num == null) {
        num = 0;
      }
      tmp2 = num >= tmp;
    }
    return tmp2;
  });
};
export const getVirtualCurrencyBalance = function getVirtualCurrencyBalance() {
  return VirtualCurrencyStore.getCurrentBalance();
};