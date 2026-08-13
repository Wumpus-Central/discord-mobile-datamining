// _runtime/07480_purchaseUpdatedListener.js
import { NativeEventEmitter } from "get ActivityIndicator";
import { NativeModules } from "07468_NativeModules.js";
import { 07470__ } from "metro/07470__.js";


export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  const dependencyMap = arg1;
  const obj = _07470__;
  const obj2 = new NativeEventEmitter(_07470__.getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = _NativeModules;
  if (_07470__.isAndroid) {
    const androidModule = tmp(7470).getAndroidModule();
    const tmpResult = tmp(7470);
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
  const obj = 07470__;
  return new NativeEventEmitter(07470__.getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (07470__.isIos) {
    let tmpResult = tmp(7468);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(7470);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (07470__.isIos) {
    let tmpResult = tmp(7468);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(7470);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};