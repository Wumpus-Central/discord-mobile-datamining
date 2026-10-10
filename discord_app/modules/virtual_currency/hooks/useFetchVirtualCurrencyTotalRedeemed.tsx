// === Module 9067: useFetchVirtualCurrencyTotalRedeemed ===

// Module 9067 (useFetchVirtualCurrencyTotalRedeemed)
import _mod19 from "module_19" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 9063 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9062 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyTotalRedeemed.tsx");

export const useFetchVirtualCurrencyTotalRedeemed = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchVirtualCurrencyTotalRedeemed(disableFetch) {
  _require = disableFetch;
  const cResult = require("c").c(16);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [error];
    const fn = function u() {
      return { totalRedeemed: error.totalRedeemed, isFetching: error.isFetchingTotalRedeemed, error: error.fetchTotalRedeemedError };
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
  totalRedeemed = stateFromStoresObject.totalRedeemed;
  const isFetching = stateFromStoresObject.isFetching;
  error = stateFromStoresObject.error;
  if (cResult[2] === error) {
    if (cResult[3] === isFetching) {
      disableFetch = undefined;
      if (disableFetch != null) {
        disableFetch = disableFetch.disableFetch;
      }
      if (cResult[4] === disableFetch) {
        if (cResult[5] === totalRedeemed) {
          let tmp10 = cResult[6];
        }
        let disableFetch1;
        if (disableFetch != null) {
          disableFetch1 = disableFetch.disableFetch;
        }
        if (cResult[7] === error) {
          if (cResult[8] === isFetching) {
            if (cResult[9] === disableFetch1) {
              if (cResult[10] === totalRedeemed) {
                let tmp14 = cResult[11];
              }
              isFetching(tmp10, tmp14);
              if (cResult[12] === error) {
                if (cResult[13] === isFetching) {
                  if (cResult[14] === totalRedeemed) {
                    let tmp17 = cResult[15];
                  }
                  return tmp17;
                }
              }
              const obj2 = { totalRedeemed, isFetching, error };
              cResult[12] = error;
              cResult[13] = isFetching;
              cResult[14] = totalRedeemed;
              cResult[15] = obj2;
              tmp17 = obj2;
            }
          }
        }
        const items1 = [totalRedeemed, isFetching, error, disableFetch1];
        cResult[7] = error;
        cResult[8] = isFetching;
        cResult[9] = disableFetch1;
        cResult[10] = totalRedeemed;
        cResult[11] = items1;
        tmp14 = items1;
      }
    }
  }
  cResult[2] = error;
  cResult[3] = isFetching;
  let disableFetch2;
  if (disableFetch != null) {
    disableFetch2 = disableFetch.disableFetch;
  }
  const fn2 = function s() {
    disableFetch = undefined;
    if (disableFetch != null) {
      disableFetch = disableFetch.disableFetch;
    }
    if (true !== disableFetch) {
      let tmp2 = isFetching;
      if (!isFetching) {
        tmp2 = null != totalRedeemed;
      }
      if (!tmp2) {
        tmp2 = null != error;
      }
      if (!tmp2) {
        const virtualCurrencyTotalRedeemed = VirtualCurrencyActionCreators.fetchVirtualCurrencyTotalRedeemed();
      }
    }
  };
  cResult[4] = disableFetch2;
  cResult[5] = totalRedeemed;
  cResult[6] = fn2;
  tmp10 = fn2;
}) : (function useFetchVirtualCurrencyTotalRedeemed(disableFetch) {
  _require = disableFetch;
  const items = [error];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ totalRedeemed: error.totalRedeemed, isFetching: error.isFetchingTotalRedeemed, error: error.fetchTotalRedeemedError }));
  totalRedeemed = stateFromStoresObject.totalRedeemed;
  const isFetching = stateFromStoresObject.isFetching;
  error = stateFromStoresObject.error;
  const items1 = [totalRedeemed, isFetching, error, ];
  disableFetch = undefined;
  if (disableFetch != null) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[3] = disableFetch;
  isFetching(() => {
    disableFetch = undefined;
    if (disableFetch != null) {
      disableFetch = disableFetch.disableFetch;
    }
    if (true !== disableFetch) {
      let tmp2 = isFetching;
      if (!isFetching) {
        tmp2 = null != totalRedeemed;
      }
      if (!tmp2) {
        tmp2 = null != error;
      }
      if (!tmp2) {
        const virtualCurrencyTotalRedeemed = VirtualCurrencyActionCreators.fetchVirtualCurrencyTotalRedeemed();
      }
    }
  }, items1);
  return { totalRedeemed, isFetching, error };
});