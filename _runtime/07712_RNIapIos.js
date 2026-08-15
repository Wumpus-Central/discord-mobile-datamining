// _runtime/07712_RNIapIos.js
import get_ActivityIndicator from "get ActivityIndicator";
import { PurchaseError } from "07713_PurchaseError.js";

let NativeModules;
let Platform;
let RNIapModule;
let c3;
({ NativeModules, Platform } = get_ActivityIndicator);
const RNIapIos = NativeModules.RNIapIos;
({ RNIapIosSk2: c3, RNIapModule } = NativeModules);
const RNIapAmazonModule = NativeModules.RNIapAmazonModule;
let c6 = false;
function checkNativeAndroidAvailable() {
  if (!RNIapModule) {
    if (!RNIapAmazonModule) {
      const _Error = Error;
      const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
      throw error;
    }
  }
}
function getAndroidModule() {
  if (typeof checkNativeAndroidAvailable !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = RNIapModule;
  if (!RNIapModule) {
    if (!RNIapAmazonModule) {
      const _Error = Error;
      const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
      throw error;
    }
  }
  let tmp10 = RNIapModule;
  if (!RNIapModule) {
    if (!tmp) {
      tmp = RNIapAmazonModule;
    }
    tmp10 = tmp;
  }
  return tmp10;
}
function isStorekit2Available() {
  return c6;
}

export const isIos = false;
export const isAndroid = true;
export const isAmazon = RNIapAmazonModule;
export const isPlay = RNIapModule;
export (arg0) => {
  let closure_7 = arg0;
}
export { checkNativeAndroidAvailable };
export { getAndroidModule };
export const getAndroidModuleType = () => {
  if (typeof getAndroidModule !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof checkNativeAndroidAvailable !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (!RNIapModule) {
    if (!RNIapAmazonModule) {
      const _Error = Error;
      const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
      throw error;
    }
  }
  let tmp10 = RNIapModule;
  if (!RNIapModule) {
    let tmp11 = tmp;
    if (!tmp) {
      tmp11 = RNIapAmazonModule;
    }
    tmp10 = tmp11;
  }
  if (RNIapModule === tmp10) {
    return "android";
  } else if (RNIapAmazonModule === tmp10) {
    return "amazon";
  } else {
    return null;
  }
};
export const getNativeModule = () => {
  if (typeof getAndroidModule !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof checkNativeAndroidAvailable !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = RNIapModule;
  if (!RNIapModule) {
    if (!RNIapAmazonModule) {
      const _Error = Error;
      const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
      throw error;
    }
  }
  let tmp10 = RNIapModule;
  if (!RNIapModule) {
    if (!tmp) {
      tmp = RNIapAmazonModule;
    }
    tmp10 = tmp;
  }
  return tmp10;
};
export { isStorekit2Available };
export () => c6
export (arg0) => {
  let closure_10 = arg0;
}
export const storekit2Mode = () => {
  let closure_10 = closure_3;
  if (typeof isStorekit2Available !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let flag = !c6;
  if (c6) {
    RNIapIos.disable();
    flag = true;
  }
  return flag;
};
export const storekit1Mode = () => {
  let closure_10 = RNIapIos;
  if (typeof isStorekit2Available !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let flag = c6;
  if (flag) {
    closure_3.disable();
    flag = true;
  }
  return flag;
};
export const storekitHybridMode = () => {
  if (typeof isStorekit2Available !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (c6) {
    let closure_10 = closure_3;
    const _console2 = console;
    console.info("Using Storekit 2");
  } else {
    closure_10 = RNIapIos;
    const _console = console;
    console.info("Using Storekit 1");
  }
  return true;
};
export const getIosModule = () => {
  if (!RNIapIos) {
    if (typeof isStorekit2Available !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (!c6) {
      const _Error = Error;
      const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
      throw error;
    }
  }
  let tmp11 = RNIapIos;
  if (!RNIapIos) {
    let tmp12 = closure_3;
    if (!closure_3) {
      tmp12 = RNIapIos;
    }
    tmp11 = tmp12;
  }
  return tmp11;
};