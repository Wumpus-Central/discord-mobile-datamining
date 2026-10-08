// === Module 9027: useFetchVirtualCurrencyBalance ===

// Module 9027 (useFetchVirtualCurrencyBalance)
import _mod19 from "module_19" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 9029 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9028 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchVirtualCurrencyBalance(disableFetch) {
  _require = disableFetch;
  const cResult = require("c").c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VirtualCurrencyStore];
    const fn = function s() {
      return { balance: VirtualCurrencyStore.balance, isFetching: VirtualCurrencyStore.isFetchingBalance, error: VirtualCurrencyStore.fetchBalanceError };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(tmp4, tmp5);
  balance = stateFromStoresObject.balance;
  ({ isFetching, error } = stateFromStoresObject);
  if (cResult[2] === balance) {
    if (cResult[3] === error) {
      disableFetch = undefined;
      if (disableFetch != null) {
        disableFetch = disableFetch.disableFetch;
      }
      if (cResult[4] === disableFetch) {
        let tmp10 = cResult[5];
      }
      let disableFetch1;
      if (disableFetch != null) {
        disableFetch1 = disableFetch.disableFetch;
      }
      if (cResult[6] === balance) {
        if (cResult[7] === error) {
          if (cResult[8] === disableFetch1) {
            let tmp14 = cResult[9];
          }
          error(tmp10, tmp14);
          if (cResult[10] === balance) {
            if (cResult[11] === error) {
              if (cResult[12] === isFetching) {
                let tmp17 = cResult[13];
              }
              return tmp17;
            }
          }
          const obj2 = { balance, isFetching, error };
          cResult[10] = balance;
          cResult[11] = error;
          cResult[12] = isFetching;
          cResult[13] = obj2;
          tmp17 = obj2;
        }
      }
      const items1 = [balance, error, disableFetch1];
      cResult[6] = balance;
      cResult[7] = error;
      cResult[8] = disableFetch1;
      cResult[9] = items1;
      tmp14 = items1;
    }
  }
  cResult[2] = balance;
  cResult[3] = error;
  let disableFetch2;
  if (disableFetch != null) {
    disableFetch2 = disableFetch.disableFetch;
  }
  const fn2 = function h() {
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
  };
  cResult[4] = disableFetch2;
  cResult[5] = fn2;
  tmp10 = fn2;
  const tmpResult = require("initialize");
}) : (function useFetchVirtualCurrencyBalance(disableFetch) {
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
});