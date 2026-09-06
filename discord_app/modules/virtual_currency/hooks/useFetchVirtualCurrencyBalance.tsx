// discord_app/modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import VirtualCurrencyActionCreators from "../VirtualCurrencyActionCreators.tsx";
import VirtualCurrencyStore from "../stores/VirtualCurrencyStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = function useFetchVirtualCurrencyBalance(disableFetch) {
  _require = disableFetch;
  const items = [VirtualCurrencyStore];
  const isFetching = require("initialize").useStateFromStoresObject(items, () => ({
    balance: VirtualCurrencyStore.balance,
    isFetching: VirtualCurrencyStore.isFetchingBalance,
    error: VirtualCurrencyStore.fetchBalanceError,
  }));
  balance = isFetching.balance;
  const error = isFetching.error;
  const items1 = [balance, error];
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
