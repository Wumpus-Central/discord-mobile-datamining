// === Module 11133: purchaseUpdatedListener ===

// Module 11133 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod11121 from "module_11121" /* 11121 */;
import _mod11123 from "module_11123" /* 11123 */;
import productSk2Map from "productSk2Map" /* 11134 */;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_11123");
  const obj2 = new NativeEventEmitter(require("module_11123").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_11121");
  if (require("module_11123").isAndroid) {
    const androidModule = tmp(11123).getAndroidModule();
    const tmpResult = tmp(11123);
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
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod11123.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11123.isIos) {
    let tmpResult = _mod11121;
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = _mod11123;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11123.isIos) {
    let tmpResult = _mod11121;
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = _mod11123;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};