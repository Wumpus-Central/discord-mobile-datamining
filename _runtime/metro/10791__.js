// _runtime/metro/10791__.js
import _createClass from "10792__createClass.js";
import react_native from "../00017_react-native.js";

let NativeModules;
let Platform;
let RNIapModule;
let c3;
({ NativeModules, Platform } = react_native);
let RNIapIos = NativeModules.RNIapIos;
({ RNIapIosSk2: c3, RNIapModule } = NativeModules);
const RNIapAmazonModule = NativeModules.RNIapAmazonModule;
let c6 = false;
function checkNativeAndroidAvailable() {
  if (!RNIapModule) {
    if (!RNIapAmazonModule) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(_createClass.ErrorCode.E_IAP_NOT_AVAILABLE);
      throw error;
    }
  }
}
function getAndroidModule() {
  if (typeof checkNativeAndroidAvailable === "function") {
    let tmp = RNIapModule;
    if (!tmp) {
      if (!RNIapAmazonModule) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error(_createClass.ErrorCode.E_IAP_NOT_AVAILABLE);
        throw error;
      }
    }
    let tmp8 = RNIapModule;
    if (!tmp8) {
      if (!tmp) {
        tmp = RNIapAmazonModule;
      }
      tmp8 = tmp;
    }
    return tmp8;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function isStorekit2Available() {
  return c6;
}

export const isIos = false;
export const isAndroid = true;
export const isAmazon = RNIapAmazonModule;
export const isPlay = RNIapModule;
export const setAndroidNativeModule = (arg0) => {
  RNIapModule = arg0;
};
export { checkNativeAndroidAvailable };
export { getAndroidModule };
export const getAndroidModuleType = function () {
  if (typeof getAndroidModule === "function") {
    if (typeof checkNativeAndroidAvailable === "function") {
      if (!RNIapModule) {
        if (!RNIapAmazonModule) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(_createClass.ErrorCode.E_IAP_NOT_AVAILABLE);
          throw error;
        }
      }
      let tmp9 = RNIapModule;
      if (!tmp9) {
        tmp9 = RNIapModule || RNIapAmazonModule;
      }
      if (RNIapModule === tmp9) {
        return "android";
      } else if (RNIapAmazonModule === tmp9) {
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
export const getNativeModule = function () {
  if (typeof getAndroidModule === "function") {
    if (typeof checkNativeAndroidAvailable === "function") {
      let tmp2 = RNIapModule;
      if (!tmp2) {
        if (!RNIapAmazonModule) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(_createClass.ErrorCode.E_IAP_NOT_AVAILABLE);
          throw error;
        }
      }
      let tmp9 = RNIapModule;
      if (!tmp9) {
        if (!tmp2) {
          tmp2 = RNIapAmazonModule;
        }
        tmp9 = tmp2;
      }
      return tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export { isStorekit2Available };
export const isIosStorekit2 = () => c6;
export const setIosNativeModule = (arg0) => {
  RNIapIos = arg0;
};
export const storekit2Mode = () => {
  RNIapIos = _false;
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
  if (typeof isStorekit2Available === "function") {
    let flag = c6;
    if (flag) {
      _false.disable();
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
      RNIapIos = _false;
      const _console2 = console;
      console.info("Using Storekit 2");
    } else {
      const _console = console;
      console.info("Using Storekit 1");
    }
    return true;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
export const getIosModule = function () {
  if (!RNIapIos) {
    if (typeof isStorekit2Available === "function") {
      if (!c6) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error(_createClass.ErrorCode.E_IAP_NOT_AVAILABLE);
        throw error;
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  let tmp9 = RNIapIos;
  if (!tmp9) {
    tmp9 = _false || RNIapIos;
  }
  return tmp9;
};
