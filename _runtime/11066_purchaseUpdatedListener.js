// === Module 11066: purchaseUpdatedListener ===

// Module 11066 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod11054 from "module_11054" /* 11054 */;
import _mod11056 from "module_11056" /* 11056 */;
import productSk2Map from "productSk2Map" /* 11067 */;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_11056");
  const obj2 = new NativeEventEmitter(require("module_11056").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_11054");
  if (require("module_11056").isAndroid) {
    const androidModule = tmp(11056).getAndroidModule();
    const tmpResult = tmp(11056);
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
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod11056.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11056.isIos) {
    let tmpResult = _mod11054;
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = _mod11056;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11056.isIos) {
    let tmpResult = _mod11054;
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = _mod11056;
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};