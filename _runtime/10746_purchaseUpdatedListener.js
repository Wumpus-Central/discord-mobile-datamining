// === Module 10746: purchaseUpdatedListener ===

// Module 10746 (purchaseUpdatedListener)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import _mod10736 from "module_10736" /* 10736 */;

const NativeEventEmitter = get_ActivityIndicator.NativeEventEmitter;

export const purchaseUpdatedListener = (arg0, arg1) => {
  let fn = arg0;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = _require(10736);
  const obj2 = new NativeEventEmitter(_require(10736).getNativeModule());
  if (obj3.isIosStorekit2()) {
    fn = (arg0) => {
      callback(callback(table[3]).transactionSk2ToPurchaseMap(arg0));
    };
  }
  obj3 = _require(10734);
  if (_require(10736).isAndroid) {
    const androidModule = tmp(10736).getAndroidModule();
    const tmpResult = tmp(10736);
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
  const obj = _mod10736;
  return new NativeEventEmitter(_mod10736.getNativeModule()).addListener("purchase-error", arg0);
};
export const promotedProductListener = (arg0) => {
  let addListenerResult = null;
  if (_mod10736.isIos) {
    let tmpResult = tmp(10734);
    addListenerResult = null;
    if (!tmpResult.isIosStorekit2()) {
      tmpResult = tmp(10736);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-promoted-product", arg0);
    }
  }
  return addListenerResult;
};
export const transactionListener = (arg0) => {
  let addListenerResult = null;
  if (_mod10736.isIos) {
    let tmpResult = tmp(10734);
    addListenerResult = null;
    if (tmpResult.isIosStorekit2()) {
      tmpResult = tmp(10736);
      const obj3 = new NativeEventEmitter(tmpResult.getIosModule());
      addListenerResult = obj3.addListener("iap-transaction-updated", arg0);
    }
  }
  return addListenerResult;
};