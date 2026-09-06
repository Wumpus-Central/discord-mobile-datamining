// discord_app/modules/billing/stores/WalletBalanceStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

let closure_0 = {};
let set = new Set();
const Store = initializeDefault.Store;
class WalletBalanceStore extends Store {}
const prototype = WalletBalanceStore.prototype;
prototype["getBalance"] = function getBalance(arg0) {
  let tmp = closure_0[arg0];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getIsFetching"] = function getIsFetching(arg0) {
  return set.has(arg0);
};
WalletBalanceStore.displayName = "WalletBalanceStore";
const walletBalanceStore = new WalletBalanceStore(DispatcherDefault, {
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/stores/WalletBalanceStore.tsx");

export default walletBalanceStore;
