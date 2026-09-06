// _runtime/11054_RNIapIos.js
import PurchaseError from "11055_PurchaseError.js";
import get_ActivityIndicator from "metro/00017__.js";

({ NativeModules, Platform } = get_ActivityIndicator);
const RNIapIos = NativeModules.RNIapIos;
({ RNIapIosSk2: c3, RNIapModule } = NativeModules);
const RNIapAmazonModule = NativeModules.RNIapAmazonModule;
let c6 = false;
let global = RNIapModule;
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
  if (typeof checkNativeAndroidAvailable === "function") {
    let tmp = RNIapModule;
    if (!RNIapModule) {
      if (!RNIapAmazonModule) {
        const _Error = Error;
        const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
        throw error;
      }
    }
    let tmp10 = global;
    if (!global) {
      if (!tmp) {
        tmp = RNIapAmazonModule;
      }
      tmp10 = tmp;
    }
    return tmp10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
let closure_10 = RNIapIos;
function isStorekit2Available() {
  return c6;
}

export const isIos = false;
export const isAndroid = true;
export const isAmazon = RNIapAmazonModule;
export const isPlay = RNIapModule;
export (arg0) => {
  global = arg0;
}
export { checkNativeAndroidAvailable };
export { getAndroidModule };
export const getAndroidModuleType = () => {
  if (typeof getAndroidModule === "function") {
    if (typeof checkNativeAndroidAvailable === "function") {
      if (!RNIapModule) {
        if (!RNIapAmazonModule) {
          const _Error = Error;
          const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
          throw error;
        }
      }
      let tmp11 = global;
      if (!global) {
        let tmp12 = RNIapModule;
        if (!RNIapModule) {
          tmp12 = RNIapAmazonModule;
        }
        tmp11 = tmp12;
      }
      if (RNIapModule === tmp11) {
        return "android";
      } else if (RNIapAmazonModule === tmp11) {
        return "amazon";
      } else {
        return null;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getNativeModule = () => {
  if (typeof getAndroidModule === "function") {
    if (typeof checkNativeAndroidAvailable === "function") {
      let tmp2 = RNIapModule;
      if (!RNIapModule) {
        if (!RNIapAmazonModule) {
          const _Error = Error;
          const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
          throw error;
        }
      }
      let tmp11 = global;
      if (!global) {
        if (!tmp2) {
          tmp2 = RNIapAmazonModule;
        }
        tmp11 = tmp2;
      }
      return tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { isStorekit2Available };
export () => c6
export (arg0) => {
  closure_10 = arg0;
}
export const storekit2Mode = () => {
  closure_10 = React3;
  if (typeof isStorekit2Available === "function") {
    let flag = !c6;
    if (c6) {
      RNIapIos.disable();
      flag = true;
    }
    return flag;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const storekit1Mode = () => {
  closure_10 = RNIapIos;
  if (typeof isStorekit2Available === "function") {
    let flag = c6;
    if (flag) {
      React3.disable();
      flag = true;
    }
    return flag;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const storekitHybridMode = () => {
  if (typeof isStorekit2Available === "function") {
    if (c6) {
      closure_10 = React3;
      const _console2 = console;
      console.info("Using Storekit 2");
    } else {
      closure_10 = RNIapIos;
      const _console = console;
      console.info("Using Storekit 1");
    }
    return true;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getIosModule = () => {
  if (!RNIapIos) {
    if (typeof isStorekit2Available === "function") {
      if (!c6) {
        const _Error = Error;
        const error = new Error(PurchaseError.ErrorCode.E_IAP_NOT_AVAILABLE);
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  let tmp11 = closure_10;
  if (!closure_10) {
    let tmp12 = React3;
    if (!React3) {
      tmp12 = RNIapIos;
    }
    tmp11 = tmp12;
  }
  return tmp11;
};