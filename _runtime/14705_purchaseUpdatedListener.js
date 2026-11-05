// === Module 14705: purchaseUpdatedListener ===

// Module 14705 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod14693 from "module_14693" /* 14693 */;
import _mod14695 from "module_14695" /* 14695 */;
import productSk2Map from "productSk2Map" /* 14706 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_14695");
  const obj2 = new NativeEventEmitter(require("module_14695").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_14693");
  if (require("module_14695").isAndroid) {
    const androidModule = tmp(14695).getAndroidModule();
    const tmpResult = tmp(14695);
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
export (arg0) => new NativeEventEmitter(_mod14695.getNativeModule()).addListener("purchase-error", arg0)
export (arg0) => {
  let addListenerResult = null;
  if (_mod14695.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14695.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod14695;
    }
    tmpResult = _mod14693;
  }
  return addListenerResult;
}
export (arg0) => {
  let addListenerResult = null;
  if (_mod14695.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14695.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod14695;
    }
    tmpResult = _mod14693;
  }
  return addListenerResult;
}