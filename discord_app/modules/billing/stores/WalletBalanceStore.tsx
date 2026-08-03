import { Store } from "initialize";
import set from "set";

let closure_0 = {};
let set = new Set();
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
const walletBalanceStore = new WalletBalanceStore(require("dispatcher"), {
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
    let closure_0 = {};
    const set = new Set();
  }
});
const result = set.fileFinishedImporting("modules/billing/stores/WalletBalanceStore.tsx");

export default walletBalanceStore;