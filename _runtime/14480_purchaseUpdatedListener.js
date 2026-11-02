// === Module 14480: purchaseUpdatedListener ===

// Module 14480 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod14468 from "module_14468" /* 14468 */;
import _mod14470 from "module_14470" /* 14470 */;
import productSk2Map from "productSk2Map" /* 14481 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_14470");
  const obj2 = new NativeEventEmitter(require("module_14470").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_14468");
  if (require("module_14470").isAndroid) {
    const androidModule = tmp(14470).getAndroidModule();
    const tmpResult = tmp(14470);
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
export (arg0) => new NativeEventEmitter(_mod14470.getNativeModule()).addListener("purchase-error", arg0)
export (arg0) => {
  let addListenerResult = null;
  if (_mod14470.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14470.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod14470;
    }
    tmpResult = _mod14468;
  }
  return addListenerResult;
}
export (arg0) => {
  let addListenerResult = null;
  if (_mod14470.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14470.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod14470;
    }
    tmpResult = _mod14468;
  }
  return addListenerResult;
}