// _runtime/11032_purchaseUpdatedListener.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import _mod11022 from "metro/11022__.js";
import { NativeModules } from "11020_NativeModules.js";
import { 11022__ } from "metro/11022__.js";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = 11022__;
  const obj2 = new NativeEventEmitter(require("metro/11022__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = NativeModules;
  if (require("metro/11022__.js").isAndroid) {
    const androidModule = tmp(11022).getAndroidModule();
    const tmpResult = tmp(11022);
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
  const obj = _mod11022;
  return new NativeEventEmitter(_mod11022.getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11022.isIos) {
    let tmpResult = tmp(11020);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(11022);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11022.isIos) {
    let tmpResult = tmp(11020);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(11022);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};