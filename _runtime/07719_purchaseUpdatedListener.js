// _runtime/07719_purchaseUpdatedListener.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import NativeModules from "07707_NativeModules.js";
import _mod7709 from "metro/07709__.js";
import { NativeModules } from "07707_NativeModules.js";
import { 07709__ } from "metro/07709__.js";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0) => {
  let fn = arg0;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = 07709__;
  const obj2 = new NativeEventEmitter(require("metro/07709__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = NativeModules;
  if (require("metro/07709__.js").isAndroid) {
    const androidModule = tmp(7709).getAndroidModule();
    const tmpResult = tmp(7709);
    androidModule.startListening().catch((error) => {
      if (closure_1) {
        tmp(error);
      } else {
        throw error;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod7709.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod7709.isIos) {
    let tmpResult = NativeModules;
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = _mod7709;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod7709.isIos) {
    let tmpResult = NativeModules;
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = _mod7709;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};