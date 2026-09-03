// === Module 6259: set ===

// Module 6259 (set)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import set from "set" /* 2 */;

let closure_0 = {};
let set = new Set();
const Store = initializeDefault.Store;
class WalletBalanceStore extends Store {
}
const prototype = WalletBalanceStore.prototype;
prototype["getBalance"] = function getBalance(arg0) {
  let tmp = table[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getIsFetching"] = function getIsFetching(arg0) {
  return set.has(arg0);
};
WalletBalanceStore.displayName = "WalletBalanceStore";
const walletBalanceStore = new WalletBalanceStore(dispatcherDefault, {
  BILLING_WALLET_BALANCE_FETCH_START: function handleFetchStart(paymentSourceId) {
    set = new Set(set);
    set.add(paymentSourceId.paymentSourceId);
  },
  BILLING_WALLET_BALANCE_FETCH_SUCCESS: function handleFetchSuccess(currency) {
    set = new Set(set);
    set.delete(currency.paymentSourceId);
    const obj = {};
    const merged = Object.assign(obj);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.amount };
  },
  BILLING_WALLET_BALANCE_FETCH_FAIL: function handleFetchFail(paymentSourceId) {
    set = new Set(set);
    set.delete(paymentSourceId.paymentSourceId);
  },
  WALLET_BALANCE_UPDATE: function handleBalanceUpdate(currency) {
    const obj = {};
    const merged = Object.assign(obj);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.balance };
  },
  LOGOUT: function reset() {
    closure_0 = {};
    set = new Set();
  }
});
const result = set.fileFinishedImporting("modules/billing/stores/WalletBalanceStore.tsx");

export default walletBalanceStore;