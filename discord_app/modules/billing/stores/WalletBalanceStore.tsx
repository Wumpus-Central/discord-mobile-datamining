// === Module 6899: WalletBalanceStore ===

// Module 6899 (WalletBalanceStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

const React = {};
let set = new Set();
const Store = get_initializedDefault.Store;
class WalletBalanceStore extends Store {
  getBalance(arg0) {
    let tmp = closure_0[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }
  getIsFetching(arg0) {
    return set.has(arg0);
  }
}
const prototype = WalletBalanceStore.prototype;
WalletBalanceStore.displayName = "WalletBalanceStore";
let obj = {
  BILLING_WALLET_BALANCE_FETCH_START: function handleFetchStart(paymentSourceId) {
    set = new Set(set);
    set.add(paymentSourceId.paymentSourceId);
  },
  BILLING_WALLET_BALANCE_FETCH_SUCCESS: function handleFetchSuccess(currency) {
    set = new Set(set);
    set.delete(currency.paymentSourceId);
    const obj = {};
    const merged = Object.assign(closure_0);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.amount };
    closure_0 = obj;
  },
  BILLING_WALLET_BALANCE_FETCH_FAIL: function handleFetchFail(paymentSourceId) {
    set = new Set(set);
    set.delete(paymentSourceId.paymentSourceId);
  },
  WALLET_BALANCE_UPDATE: function handleBalanceUpdate(currency) {
    const obj = {};
    const merged = Object.assign(closure_0);
    obj[currency.paymentSourceId] = { currency: currency.currency, amount: currency.balance };
    closure_0 = obj;
  },
  LOGOUT: function reset() {
    closure_0 = {};
    set = new Set();
  }
};
const walletBalanceStore = new WalletBalanceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/billing/stores/WalletBalanceStore.tsx");

export default walletBalanceStore;