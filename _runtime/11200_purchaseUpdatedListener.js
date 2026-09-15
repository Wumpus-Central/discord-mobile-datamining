// _runtime/11200_purchaseUpdatedListener.js
import _mod17 from "metro/00017__.js";
import _mod11188 from "metro/11188__.js";
import _mod11190 from "metro/11190__.js";
import productSk2Map from "11201_productSk2Map.js";

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("metro/11190__.js");
  const obj2 = new NativeEventEmitter(require("metro/11190__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("metro/11188__.js");
  if (require("metro/11190__.js").isAndroid) {
    const androidModule = tmp(11190).getAndroidModule();
    const tmpResult = tmp(11190);
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
  new NativeEventEmitter(_mod11190.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11190.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod11190.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod11190;
    }
    tmpResult = _mod11188;
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11190.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod11190.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod11190;
    }
    tmpResult = _mod11188;
  }
  return addListenerResult;
};
