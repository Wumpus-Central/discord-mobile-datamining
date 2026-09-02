// _runtime/11028_purchaseUpdatedListener.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import _mod11018 from "metro/11018__.js";
import { NativeModules } from "11016_NativeModules.js";
import { 11018__ } from "metro/11018__.js";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = 11018__;
  const obj2 = new NativeEventEmitter(require("metro/11018__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = NativeModules;
  if (require("metro/11018__.js").isAndroid) {
    const androidModule = tmp(11018).getAndroidModule();
    const tmpResult = tmp(11018);
    androidModule.startListening().catch((arg0) => {
      if (closure_1) {
        tmp(arg0);
      } else {
        throw arg0;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = (arg0) => {
  const obj = _mod11018;
  return new NativeEventEmitter(_mod11018.getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11018.isIos) {
    let tmpResult = tmp(11016);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(11018);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11018.isIos) {
    let tmpResult = tmp(11016);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(11018);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};