// === Module 9778: purchaseUpdatedListener ===

// Module 9778 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod9766 from "module_9766" /* 9766 */;
import _mod9768 from "module_9768" /* 9768 */;
import productSk2Map from "productSk2Map" /* 9779 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_9768");
  const obj2 = new NativeEventEmitter(require("module_9768").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_9766");
  if (require("module_9768").isAndroid) {
    const androidModule = tmp(9768).getAndroidModule();
    const tmpResult = tmp(9768);
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
export (arg0) => new NativeEventEmitter(_mod9768.getNativeModule()).addListener("purchase-error", arg0)
export (arg0) => {
  let addListenerResult = null;
  if (_mod9768.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod9768.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod9768;
    }
    tmpResult = _mod9766;
  }
  return addListenerResult;
}
export (arg0) => {
  let addListenerResult = null;
  if (_mod9768.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod9768.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod9768;
    }
    tmpResult = _mod9766;
  }
  return addListenerResult;
}