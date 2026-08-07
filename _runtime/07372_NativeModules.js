// _runtime/07372_NativeModules.js
import importDefaultResult from "asyncGeneratorStep";
import get_ActivityIndicator from "get ActivityIndicator";

let NativeModules;
let RNIapModule;
let c3;
let obj1;
let closure_0 = arg1;
({ Linking: obj1, NativeModules } = get_ActivityIndicator);
({ RNIapModule: c3, RNIapModule } = NativeModules);
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c5 = 0;
  let c6 = 0;
  const iter = (function*(arg0) {
    let closure_4 = tmp2;
    sku = sku.sku;
    yield "PX_8";
    const obj2 = callback(outer1_1[3]);
    const result = obj2.checkNativeAndroidAvailable();
    let closure_2 = outer1_2;
    const openURL = outer1_2.openURL;
    yield outer1_3.getPackageName();
    const _HermesInternal = HermesInternal;
    return openURL("https://play.google.com/store/account/subscriptions?package=" + arg1 + "&sku=" + sku);
  })();
  iter.next();
  return iter;
});
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c2 = 0;
  let c3 = 0;
  const iter = (function*(arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = tmp2;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            c4 = undefined;
            ({ packageName: c0, productId: c1, productToken: c2, accessToken: c3, isSub: c4 } = c0);
            let closure_5;
            let closure_6;
            c2 = 1;
            c3 = 1;
            return { value: "PX_8", done: "Array" };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let str = "products";
            if (c4) {
              str = "subscriptions";
            }
            const _HermesInternal = HermesInternal;
            closure_5 = "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/" + tmp31 + "/purchases/" + str + "/" + c1 + "/tokens/" + c2 + "?access_token=" + c3;
            const _fetch = fetch;
            const obj2 = { method: "GET", headers: null };
            obj2[1] = { "Content-Type": "application/json" };
            c2 = 2;
            c3 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = fetch(closure_5, obj2);
            return obj3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          closure_6 = arg1;
          if (closure_6.ok) {
            c3 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = closure_6.json();
            return obj5;
          } else {
            const _Object = Object;
            const _Error = Error;
            const error = new Error(closure_6.statusText);
            obj = { statusCode: null };
            obj[0] = closure_6.status;
            throw Object.assign(error, obj);
          }
        }
      } catch (tmp21) {
        c3 = tmp;
        throw tmp21;
      }
    }
  })();
  iter.next();
  return iter;
});

export const AndroidModule = RNIapModule;
export const getInstallSourceAndroid = () => {
  const InstallSourceAndroid = callback(7364).InstallSourceAndroid;
  return closure_3 ? InstallSourceAndroid.GOOGLE_PLAY : InstallSourceAndroid.AMAZON;
};
export const deepLinkToSubscriptionsAndroid = function deepLinkToSubscriptionsAndroid(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const validateReceiptAndroid = function validateReceiptAndroid(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const acknowledgePurchaseAndroid = (arg0) => {
  let developerPayload;
  let token;
  ({ token, developerPayload } = arg0);
  const androidModule = callback(7365).getAndroidModule();
  return androidModule.acknowledgePurchase(token, developerPayload);
};
export const isFeatureSupported = (arg0) => {
  if (callback(7365).isAndroid) {
    if (closure_3) {
      let isFeatureSupportedResult = RNIapModule.isFeatureSupported(arg0);
    }
    return isFeatureSupportedResult;
  }
  isFeatureSupportedResult = Promise.reject("This is only available on Android clients");
};