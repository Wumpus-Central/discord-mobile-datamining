// === Module 8906: useFetchVirtualCurrencyBalance ===

// Module 8906 (useFetchVirtualCurrencyBalance)
import { useEffect } from "noop";
import redeemError from "redeemError";

const result = require("initialize").fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = function useFetchVirtualCurrencyBalance(disableFetch) {
  const _require = disableFetch;
  const items = [redeemError];
  const isFetching = _require(balance[2]).useStateFromStoresObject(items, () => ({ balance: redeemError.balance, isFetching: redeemError.isFetchingBalance, error: redeemError.fetchBalanceError }));
  balance = isFetching.balance;
  const error = isFetching.error;
  const items1 = [balance, error, ];
  disableFetch = undefined;
  if (disableFetch != null) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[2] = disableFetch;
  error(() => {
    let disableFetch;
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
      disableFetch = outer1_3.isFetchingBalance;
    }
    if (!disableFetch) {
      const virtualCurrencyBalance = disableFetch(balance[3]).fetchVirtualCurrencyBalance();
      const obj = disableFetch(balance[3]);
    }
  }, items1);
  return { balance, isFetching: isFetching.isFetching, error };
};