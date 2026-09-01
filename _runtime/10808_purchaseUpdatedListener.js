// _runtime/10808_purchaseUpdatedListener.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import _mod10798 from "metro/10798__.js";
import { NativeModules } from "10796_NativeModules.js";
import { 10798__ } from "metro/10798__.js";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = 10798__;
  const obj2 = new NativeEventEmitter(require("metro/10798__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = NativeModules;
  if (require("metro/10798__.js").isAndroid) {
    const androidModule = tmp(10798).getAndroidModule();
    const tmpResult = tmp(10798);
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
  const obj = _mod10798;
  return new NativeEventEmitter(_mod10798.getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod10798.isIos) {
    let tmpResult = tmp(10796);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(10798);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod10798.isIos) {
    let tmpResult = tmp(10796);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(10798);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};