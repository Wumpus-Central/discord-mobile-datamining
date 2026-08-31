// _runtime/10767_NativeModules.js
import importDefaultResult from "00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

let closure_0 = arg1;
({ Linking: obj1, NativeModules } = get_ActivityIndicator);
({ RNIapModule: c3, RNIapModule } = NativeModules);
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c5 = 0;
  c6 = 0;
  const iter = (function*(arg0) {
    if (c6 === 2) {
      c6 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = tmp5;
            closure_4 = tmp2;
            let sku;
            sku = sku.sku;
            c5 = 1;
            c6 = 1;
            return { value: "Object", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let obj2 = callback(closure_1_1[3]);
            const result = obj2.checkNativeAndroidAvailable();
            closure_2 = closure_1_2;
            const openURL = closure_1_2.openURL;
            c5 = 2;
            c6 = 1;
            obj2 = { value: null, done: false };
            obj2[0] = closure_1_3.getPackageName();
            return obj2;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          const _HermesInternal = HermesInternal;
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = openURL("https://play.google.com/store/account/subscriptions?package=" + arg1 + "&sku=" + sku);
          return obj;
        }
      } catch (tmp18) {
        c6 = tmp;
        throw tmp18;
      }
    }
  })();
  iter.next();
  return iter;
});
closure_0 = importDefaultResult((arg0) => {
  closure_0 = arg0;
  c2 = 0;
  c3 = 0;
  const iter = (function*(arg0) {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_5 = undefined;
            closure_6 = undefined;
            c2 = 1;
            c3 = 1;
            return { value: "Object", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj1 = { value: null, done: true };
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
            error = new Error(closure_6.statusText);
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
  const InstallSourceAndroid = callback(10759).InstallSourceAndroid;
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
  ({ token, developerPayload } = arg0);
  const androidModule = callback(10760).getAndroidModule();
  return androidModule.acknowledgePurchase(token, developerPayload);
};
export const isFeatureSupported = (arg0) => {
  if (callback(10760).isAndroid) {
    if (closure_3) {
      let isFeatureSupportedResult = RNIapModule.isFeatureSupported(arg0);
    }
    return isFeatureSupportedResult;
  }
  isFeatureSupportedResult = Promise.reject("This is only available on Android clients");
};