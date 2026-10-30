// _runtime/14428_purchaseUpdatedListener.js
import _mod17 from "metro/00017__.js";
import _mod14416 from "metro/14416__.js";
import _mod14418 from "metro/14418__.js";
import productSk2Map from "14429_productSk2Map.js";

const require = globalThis.__r;

const NativeEventEmitter = _mod17.NativeEventEmitter;

export (arg0, arg1) => {
  let fn = arg0;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("metro/14418__.js");
  const obj2 = new NativeEventEmitter(require("metro/14418__.js").getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      closure_0(productSk2Map.transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = require("metro/14416__.js");
  if (require("metro/14418__.js").isAndroid) {
    const androidModule = tmp(14418).getAndroidModule();
    const tmpResult = tmp(14418);
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
export (arg0) => new NativeEventEmitter(_mod14418.getNativeModule()).addListener("purchase-error", arg0)
export (arg0) => {
  let addListenerResult = null;
  if (_mod14418.isIos) {
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14418.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
      const tmpResult2 = _mod14418;
    }
    tmpResult = _mod14416;
  }
  return addListenerResult;
}
export (arg0) => {
  let addListenerResult = null;
  if (_mod14418.isIos) {
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      const obj3 = new NativeEventEmitter(_mod14418.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
      const tmpResult2 = _mod14418;
    }
    tmpResult = _mod14416;
  }
  return addListenerResult;
}