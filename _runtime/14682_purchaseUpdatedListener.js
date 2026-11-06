// === Module 14682: purchaseUpdatedListener ===

// Module 14682 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod14670 from "module_14670" /* 14670 */;
import _mod14672 from "module_14672" /* 14672 */;
import productSk2Map from "productSk2Map" /* 14683 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_14672");
  const obj2 = new NativeEventEmitter(require("module_14672").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_14670");
  if (require("module_14672").isAndroid) {
    const androidModule = tmp(14672).getAndroidModule();
    const tmpResult = tmp(14672);
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
export (arg0) => new NativeEventEmitter(_mod14672.getNativeModule()).addListener("purchase-error", arg0)
export (arg0) => {
  let addListenerResult = null;
  if (_mod14672.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14672.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod14672;
    }
    tmpResult = _mod14670;
  }
  return addListenerResult;
}
export (arg0) => {
  let addListenerResult = null;
  if (_mod14672.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14672.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod14672;
    }
    tmpResult = _mod14670;
  }
  return addListenerResult;
}