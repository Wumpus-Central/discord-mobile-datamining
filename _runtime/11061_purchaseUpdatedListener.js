// === Module 11061: purchaseUpdatedListener ===

// Module 11061 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod11049 from "module_11049" /* 11049 */;
import _mod11051 from "module_11051" /* 11051 */;
import productSk2Map from "productSk2Map" /* 11062 */;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_11051");
  const obj2 = new NativeEventEmitter(require("module_11051").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_11049");
  if (require("module_11051").isAndroid) {
    const androidModule = tmp(11051).getAndroidModule();
    const tmpResult = tmp(11051);
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
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod11051.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11051.isIos) {
    let tmpResult = _mod11049;
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = _mod11051;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11051.isIos) {
    let tmpResult = _mod11049;
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = _mod11051;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};