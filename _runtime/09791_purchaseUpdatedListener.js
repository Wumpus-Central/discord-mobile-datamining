// _runtime/09791_purchaseUpdatedListener.js
import _mod17 from "metro/00017__.js";
import _mod9779 from "metro/09779__.js";
import _mod9781 from "metro/09781__.js";
import productSk2Map from "09792_productSk2Map.js";

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("metro/09781__.js");
  const obj2 = new NativeEventEmitter(require("metro/09781__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("metro/09779__.js");
  if (require("metro/09781__.js").isAndroid) {
    const androidModule = tmp(9781).getAndroidModule();
    const tmpResult = tmp(9781);
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
export (arg0) => new NativeEventEmitter(_mod9781.getNativeModule()).addListener("purchase-error", arg0)
export (arg0) => {
  let addListenerResult = null;
  if (_mod9781.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod9781.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod9781;
    }
    tmpResult = _mod9779;
  }
  return addListenerResult;
}
export (arg0) => {
  let addListenerResult = null;
  if (_mod9781.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod9781.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod9781;
    }
    tmpResult = _mod9779;
  }
  return addListenerResult;
}