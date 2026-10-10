// === Module 12755: purchaseUpdatedListener ===

// Module 12755 (purchaseUpdatedListener)
import _mod17 from "module_17" /* 17 */;
import _mod12743 from "module_12743" /* 12743 */;
import _mod12745 from "module_12745" /* 12745 */;
import productSk2Map from "productSk2Map" /* 12756 */;

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("module_12745");
  const obj2 = new NativeEventEmitter(require("module_12745").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("module_12743");
  if (require("module_12745").isAndroid) {
    const androidModule = tmp(12745).getAndroidModule();
    const tmpResult = tmp(12745);
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
export const purchaseErrorListener = (arg0) => new NativeEventEmitter(_mod12745.getNativeModule()).addListener("purchase-error", arg0);
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod12745.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod12745.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod12745;
    }
    tmpResult = _mod12743;
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod12745.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod12745.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod12745;
    }
    tmpResult = _mod12743;
  }
  return addListenerResult;
};