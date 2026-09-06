// === Module 11061: purchaseUpdatedListener ===

// Module 11061 (purchaseUpdatedListener)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import _mod11051 from "module_11051" /* 11051 */;

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = _require(11051);
  const obj2 = new NativeEventEmitter(_require(11051).getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = _require(11049);
  if (_require(11051).isAndroid) {
    const androidModule = tmp(11051).getAndroidModule();
    const tmpResult = tmp(11051);
    androidModule.startListening().catch((arg0) => {
      if (closure_1) {
        tmp(arg0);
      } else {
        throw arg0;
      }
    });
    const startListeningResult = androidModule.startListening();
  }
  return obj2.addListener("purchase-updated", fn);
};
export const purchaseErrorListener = (arg0) => {
  const obj = _mod11051;
  return new NativeEventEmitter(_mod11051.getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11051.isIos) {
    let tmpResult = tmp(11049);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(11051);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod11051.isIos) {
    let tmpResult = tmp(11049);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(11051);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};