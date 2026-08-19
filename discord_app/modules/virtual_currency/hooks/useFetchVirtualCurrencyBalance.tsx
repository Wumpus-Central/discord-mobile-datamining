// === Module 9253: useFetchVirtualCurrencyBalance ===

// Module 9253 (useFetchVirtualCurrencyBalance)
import obj132 from "obj132" /* 2 */;
import noop from "noop" /* 19 */;
import redeemError from "redeemError" /* 9254 */;

const useEffect = noop.useEffect;
const result = obj132.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = function useFetchVirtualCurrencyBalance(disableFetch) {
  const _require = disableFetch;
  const items = [closure_3];
  const isFetching = _require(balance[2]).useStateFromStoresObject(items, () => ({ balance: closure_3.balance, isFetching: closure_3.isFetchingBalance, error: closure_3.fetchBalanceError }));
  balance = isFetching.balance;
  error = isFetching.error;
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
      disableFetch = closure_1_3.isFetchingBalance;
    }
    if (!disableFetch) {
      const virtualCurrencyBalance = disableFetch(balance[3]).fetchVirtualCurrencyBalance();
      const obj = disableFetch(balance[3]);
    }
  }, items1);
  return { balance, isFetching: isFetching.isFetching, error };
};