// === Module 8549: useFetchVirtualCurrencyTotalRedeemed ===

// Module 8549 (useFetchVirtualCurrencyTotalRedeemed)
import react from "react" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 8544 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 8543 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, disableFetch;

const useEffect = react.useEffect;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((disableFetch) => {
  let error;
  let tmp4;
  let tmp5;
  let totalRedeemed;
  _require = disableFetch;
  let tmp2 = totalRedeemed;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [error];
    const fn = function n() {
      return { totalRedeemed: error.totalRedeemed, isFetching: error.isFetchingTotalRedeemed, error: error.fetchTotalRedeemedError };
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
  totalRedeemed = stateFromStoresObject.totalRedeemed;
  const isFetching = stateFromStoresObject.isFetching;
  error = stateFromStoresObject.error;
  if (cResult[2] === error) {
    if (cResult[3] === isFetching) {
      disableFetch = undefined;
      const tmp8 = cResult[4];
      if (disableFetch != null) {
        disableFetch = disableFetch.disableFetch;
      }
      if (tmp8 === disableFetch) {
        let tmp11;
        if (cResult[5] === totalRedeemed) {
          tmp11 = cResult[6];
        }
        let disableFetch1;
        if (disableFetch != null) {
          disableFetch1 = disableFetch.disableFetch;
        }
        if (cResult[7] === error) {
          if (cResult[8] === isFetching) {
            if (cResult[9] === disableFetch1) {
              let tmp15;
              if (cResult[10] === totalRedeemed) {
                tmp15 = cResult[11];
              }
              isFetching(tmp11, tmp15);
              if (cResult[12] === error) {
                if (cResult[13] === isFetching) {
                  let tmp18;
                  if (cResult[14] === totalRedeemed) {
                    tmp18 = cResult[15];
                  }
                  return tmp18;
                }
              }
              const obj2 = { totalRedeemed, isFetching, error };
              cResult[12] = error;
              cResult[13] = isFetching;
              cResult[14] = totalRedeemed;
              cResult[15] = obj2;
              tmp18 = obj2;
            }
          }
        }
        const items1 = [totalRedeemed, isFetching, error, disableFetch1];
        cResult[7] = error;
        cResult[8] = isFetching;
        cResult[9] = disableFetch1;
        cResult[10] = totalRedeemed;
        cResult[11] = items1;
        tmp15 = items1;
      }
    }
  }
  cResult[2] = error;
  cResult[3] = isFetching;
  let disableFetch2;
  if (disableFetch != null) {
    disableFetch2 = disableFetch.disableFetch;
  }
  const fn2 = function u() {
    disableFetch = undefined;
    if (disableFetch != null) {
      disableFetch = disableFetch.disableFetch;
    }
    if (true !== disableFetch) {
      const tmp2 = isFetching || null != totalRedeemed || null != error;
      if (!tmp2) {
        const obj = VirtualCurrencyActionCreators;
        const virtualCurrencyTotalRedeemed = obj.fetchVirtualCurrencyTotalRedeemed();
      }
    }
  };
  cResult[4] = disableFetch2;
  cResult[5] = totalRedeemed;
  cResult[6] = fn2;
  tmp11 = fn2;
}) : ((disableFetch) => {
  let error;
  let totalRedeemed;
  _require = disableFetch;
  let obj = require("get initialized");
  const items = [error];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ totalRedeemed: error.totalRedeemed, isFetching: error.isFetchingTotalRedeemed, error: error.fetchTotalRedeemedError }));
  totalRedeemed = stateFromStoresObject.totalRedeemed;
  const isFetching = stateFromStoresObject.isFetching;
  error = stateFromStoresObject.error;
  const items1 = [totalRedeemed, isFetching, error, ];
  disableFetch = undefined;
  let tmp2 = isFetching;
  if (disableFetch != null) {
    disableFetch = disableFetch.disableFetch;
  }
  items1[3] = disableFetch;
  tmp2(() => {
    disableFetch = undefined;
    if (disableFetch != null) {
      disableFetch = disableFetch.disableFetch;
    }
    if (true !== disableFetch) {
      const tmp2 = isFetching || null != totalRedeemed || null != error;
      if (!tmp2) {
        const obj = VirtualCurrencyActionCreators;
        const virtualCurrencyTotalRedeemed = obj.fetchVirtualCurrencyTotalRedeemed();
      }
    }
  }, items1);
  return { totalRedeemed, isFetching, error };
});
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyTotalRedeemed.tsx");

export const useFetchVirtualCurrencyTotalRedeemed = tmp2;