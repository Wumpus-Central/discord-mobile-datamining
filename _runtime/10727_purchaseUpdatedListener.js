// === Module 10727: purchaseUpdatedListener ===

// Module 10727 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod10715 from "module_10715" /* 10715 */;
import _mod10717 from "module_10717" /* 10717 */;
import productSk2Map from "productSk2Map" /* 10728 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_10717");
  const obj2 = new NativeEventEmitter(require("module_10717").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_10715");
  if (require("module_10717").isAndroid) {
    const androidModule = tmp(10717).getAndroidModule();
    const tmpResult = tmp(10717);
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
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod10717.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod10717.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod10717.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod10717;
    }
    tmpResult = _mod10715;
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod10717.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod10717.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod10717;
    }
    tmpResult = _mod10715;
  }
  return addListenerResult;
};