// _runtime/07644_purchaseUpdatedListener.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import _mod7634 from "metro/07634__.js";
import { NativeModules } from "07632_NativeModules.js";
import { 07634__ } from "metro/07634__.js";

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = 07634__;
  const obj2 = new NativeEventEmitter(require("metro/07634__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = NativeModules;
  if (require("metro/07634__.js").isAndroid) {
    const androidModule = tmp(7634).getAndroidModule();
    const tmpResult = tmp(7634);
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
  const obj = _mod7634;
  return new NativeEventEmitter(_mod7634.getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod7634.isIos) {
    let tmpResult = tmp(7632);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(7634);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod7634.isIos) {
    let tmpResult = tmp(7632);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(7634);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};