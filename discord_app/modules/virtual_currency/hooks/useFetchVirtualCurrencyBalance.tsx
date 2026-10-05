// === Module 8509: useFetchVirtualCurrencyBalance ===

// Module 8509 (useFetchVirtualCurrencyBalance)
import react from "react" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 8511 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 8510 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, disableFetch;

const useEffect = react.useEffect;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((disableFetch) => {
  let balance;
  let error;
  let isFetching;
  let tmp4;
  let tmp5;
  _require = disableFetch;
  let obj = require("react");
  const cResult = obj.c(14);
  const tmp = _require;
  const tmp2 = balance;
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
  const tmpResult = tmp(tmp2[4]);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  balance = stateFromStoresObject.balance;
  ({ isFetching, error } = stateFromStoresObject);
  if (cResult[2] === balance) {
    if (cResult[3] === error) {
      let tmp11;
      disableFetch = undefined;
      const tmp8 = cResult[4];
      if (disableFetch != null) {
        disableFetch = disableFetch.disableFetch;
      }
      if (tmp8 === disableFetch) {
        tmp11 = cResult[5];
      }
      let disableFetch1;
      if (disableFetch != null) {
        disableFetch1 = disableFetch.disableFetch;
      }
      if (cResult[6] === balance) {
        if (cResult[7] === error) {
          let tmp15;
          if (cResult[8] === disableFetch1) {
            tmp15 = cResult[9];
          }
          error(tmp11, tmp15);
          if (cResult[10] === balance) {
            if (cResult[11] === error) {
              let tmp18;
              if (cResult[12] === isFetching) {
                tmp18 = cResult[13];
              }
              return tmp18;
            }
          }
          const obj2 = { balance, isFetching, error };
          cResult[10] = balance;
          cResult[11] = error;
          cResult[12] = isFetching;
          cResult[13] = obj2;
          tmp18 = obj2;
        }
      }
      const items1 = [balance, error, disableFetch1];
      cResult[6] = balance;
      cResult[7] = error;
      cResult[8] = disableFetch1;
      cResult[9] = items1;
      tmp15 = items1;
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
      const obj = VirtualCurrencyActionCreators;
      const virtualCurrencyBalance = obj.fetchVirtualCurrencyBalance();
    }
  };
  cResult[4] = disableFetch2;
  cResult[5] = fn2;
  tmp11 = fn2;
}) : ((disableFetch) => {
  let balance;
  _require = disableFetch;
  let obj = require("get initialized");
  const items = [VirtualCurrencyStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ balance: VirtualCurrencyStore.balance, isFetching: VirtualCurrencyStore.isFetchingBalance, error: VirtualCurrencyStore.fetchBalanceError }));
  balance = stateFromStoresObject.balance;
  const error = stateFromStoresObject.error;
  const items1 = [balance, error, ];
  disableFetch = undefined;
  const isFetching = stateFromStoresObject.isFetching;
  const tmp2 = error;
  if (disableFetch != null) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[2] = disableFetch;
  tmp2(() => {
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
      const obj = VirtualCurrencyActionCreators;
      const virtualCurrencyBalance = obj.fetchVirtualCurrencyBalance();
    }
  }, items1);
  return { balance, isFetching, error };
});
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyBalance.tsx");

export const useFetchVirtualCurrencyBalance = tmp2;