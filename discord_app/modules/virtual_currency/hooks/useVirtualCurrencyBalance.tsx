// === Module 13289: useVirtualCurrencyBalance ===

// Module 13289 (useVirtualCurrencyBalance)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import VirtualCurrencyStore from "VirtualCurrencyStore" /* 9028 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useVirtualCurrencyBalance() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VirtualCurrencyStore];
    const fn = function t() {
      return balance.balance;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useVirtualCurrencyBalance() {
  const items = [VirtualCurrencyStore];
  return initialize.useStateFromStores(items, () => balance.balance);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useVirtualCurrencyBalance.tsx");

export const useVirtualCurrencyBalance = tmp2;
export const useHasEnoughVirtualCurrency = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasEnoughVirtualCurrency(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VirtualCurrencyStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let tmp2 = null != closure_0;
      if (tmp2) {
        let num = VirtualCurrencyStore.balance;
        if (num == null) {
          num = 0;
        }
        tmp2 = num >= tmp;
      }
      return tmp2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useHasEnoughVirtualCurrency(arg0) {
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
});
export const getVirtualCurrencyBalance = function getVirtualCurrencyBalance() {
  return VirtualCurrencyStore.getCurrentBalance();
};