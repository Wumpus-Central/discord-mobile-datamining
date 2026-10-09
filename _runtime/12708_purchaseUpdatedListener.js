// _runtime/12708_purchaseUpdatedListener.js
import _mod17 from "metro/00017__.js";
import _mod12696 from "metro/12696__.js";
import _mod12698 from "metro/12698__.js";
import productSk2Map from "12709_productSk2Map.js";

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("metro/12698__.js");
  const obj2 = new NativeEventEmitter(require("metro/12698__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("metro/12696__.js");
  if (require("metro/12698__.js").isAndroid) {
    const androidModule = tmp(12698).getAndroidModule();
    const tmpResult = tmp(12698);
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
export const purchaseErrorListener = (arg0) =>
  new NativeEventEmitter(_mod12698.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod12698.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod12698.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod12698;
    }
    tmpResult = _mod12696;
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod12698.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod12698.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod12698;
    }
    tmpResult = _mod12696;
  }
  return addListenerResult;
};
