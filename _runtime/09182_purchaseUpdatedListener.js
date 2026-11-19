// === Module 9182: purchaseUpdatedListener ===

// Module 9182 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod9170 from "module_9170" /* 9170 */;
import _mod9172 from "module_9172" /* 9172 */;
import productSk2Map from "productSk2Map" /* 9183 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_9172");
  const obj2 = new NativeEventEmitter(require("module_9172").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_9170");
  if (require("module_9172").isAndroid) {
    const androidModule = tmp(9172).getAndroidModule();
    const tmpResult = tmp(9172);
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
}
export (arg0) => new NativeEventEmitter(_mod9172.getNativeModule()).addListener("purchase-error", arg0)
export (arg0) => {
  let addListenerResult = null;
  if (_mod9172.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod9172.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod9172;
    }
    tmpResult = _mod9170;
  }
  return addListenerResult;
}
export (arg0) => {
  let addListenerResult = null;
  if (_mod9172.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod9172.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod9172;
    }
    tmpResult = _mod9170;
  }
  return addListenerResult;
}