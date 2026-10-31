// === Module 9558: useFetchVirtualCurrencyTotalRedeemed ===

// Module 9558 (useFetchVirtualCurrencyTotalRedeemed)
import _mod19 from "module_19" /* 19 */;
import VirtualCurrencyActionCreators from "VirtualCurrencyActionCreators" /* 9556 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9555 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const useEffect = _mod19.useEffect;
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useFetchVirtualCurrencyTotalRedeemed.tsx");

export function useFetchVirtualCurrencyTotalRedeemed(disableFetch) {
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
}