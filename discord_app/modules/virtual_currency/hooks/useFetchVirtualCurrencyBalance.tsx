// === Module 8851: useFetchVirtualCurrencyBalance ===

// Module 8851 (useFetchVirtualCurrencyBalance)
import _mod19 from "module_19" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 8853 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 8852 */;
import size from "module_2" /* 2 */;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = function useFetchVirtualCurrencyBalance(disableFetch) {
  _require = disableFetch;
  const items = [VirtualCurrencyStore];
  const isFetching = require("initialize").useStateFromStoresObject(items, () => ({ balance: VirtualCurrencyStore.balance, isFetching: VirtualCurrencyStore.isFetchingBalance, error: VirtualCurrencyStore.fetchBalanceError }));
  balance = isFetching.balance;
  const error = isFetching.error;
  const items1 = [balance, error, ];
  disableFetch = undefined;
  if (disableFetch != null) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[2] = disableFetch;
  error(() => {
    disableFetch = undefined;
    if (disableFetch != null) {
      disableFetch = disableFetch.disableFetch;
    }
    if (!disableFetch) {
      disableFetch = null !== balance;
    }
    if (!disableFetch) {
      disableFetch = null !== error;
    }
    if (!disableFetch) {
      disableFetch = VirtualCurrencyStore.isFetchingBalance;
    }
    if (!disableFetch) {
      const virtualCurrencyBalance = VirtualCurrencyActionCreators.fetchVirtualCurrencyBalance();
    }
  }, items1);
  return { balance, isFetching: isFetching.isFetching, error };
};