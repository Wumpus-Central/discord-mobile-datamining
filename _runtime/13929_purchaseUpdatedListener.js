// === Module 13929: purchaseUpdatedListener ===

// Module 13929 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod13917 from "module_13917" /* 13917 */;
import _mod13919 from "module_13919" /* 13919 */;
import productSk2Map from "productSk2Map" /* 13930 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_13919");
  const obj2 = new NativeEventEmitter(require("module_13919").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_13917");
  if (require("module_13919").isAndroid) {
    const androidModule = tmp(13919).getAndroidModule();
    const tmpResult = tmp(13919);
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
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod13919.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod13919.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod13919.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod13919;
    }
    tmpResult = _mod13917;
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod13919.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod13919.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod13919;
    }
    tmpResult = _mod13917;
  }
  return addListenerResult;
};