// _runtime/metro/11058__.js
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";

get_ActivityIndicator = fn(17);
({ Linking: c2, NativeModules } = get_ActivityIndicator);
({ RNIapModule: c3, RNIapModule } = NativeModules);
let closure_0 = asyncGeneratorStep(async (arg0, value) => {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const packageName = tmp5;
          closure_4 = tmp2;
          let sku;
          sku = closure_0.sku;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let obj2 = closure_0(openURL[3]);
          const result = obj2.checkNativeAndroidAvailable();
          openURL = openURL.openURL;
          c5 = 2;
          c6 = 1;
          obj2 = { value: packageName.getPackageName(), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const _HermesInternal = HermesInternal;
        c6 = 3;
        obj = {
          value: openURL("https://play.google.com/store/account/subscriptions?package=" + value + "&sku=" + sku),
          done: true,
        };
        return obj;
      }
    } catch (tmp18) {
      c6 = tmp;
      throw tmp18;
    }
  }
});
let closure_129_0 = asyncGeneratorStep(async (arg0, value) => {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({
            packageName: closure_129_0,
            productId: closure_129_1,
            productToken: closure_129_2,
            accessToken: closure_129_3,
            isSub: closure_129_4,
          } = closure_0);
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          c2 = 1;
          c3 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let str = "products";
          if (closure_129_4) {
            str = "subscriptions";
          }
          const _HermesInternal = HermesInternal;
          closure_129_5 =
            "https://androidpublisher.googleapis.com/androidpublisher/v3/applications/" +
            tmp30 +
            "/purchases/" +
            str +
            "/" +
            closure_129_1 +
            "/tokens/" +
            closure_129_2 +
            "?access_token=" +
            closure_129_3;
          const _fetch = fetch;
          const obj2 = { method: "GET", headers: { "Content-Type": "application/json" } };
          c2 = 2;
          c3 = 1;
          const obj3 = { value: fetch(closure_129_5, obj2), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_6 = value;
        if (closure_129_6.ok) {
          c3 = 3;
          const obj5 = { value: closure_129_6.json(), done: true };
          return obj5;
        } else {
          const _Object = Object;
          const _Error = Error;
          const error = new Error(closure_129_6.statusText);
          obj = { statusCode: closure_129_6.status };
          throw Object.assign(error, obj);
        }
      }
    } catch (tmp21) {
      c3 = tmp;
      throw tmp21;
    }
  }
});

export const AndroidModule = RNIapModule;
export const getInstallSourceAndroid = () => {
  const InstallSourceAndroid = closure_0(11050).InstallSourceAndroid;
  return React3 ? InstallSourceAndroid.GOOGLE_PLAY : InstallSourceAndroid.AMAZON;
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
  const androidModule = closure_0(11051).getAndroidModule();
  return androidModule.acknowledgePurchase(token, developerPayload);
};
export const isFeatureSupported = (arg0) => {
  if (closure_0(11051).isAndroid) {
    if (React3) {
      let isFeatureSupportedResult = RNIapModule.isFeatureSupported(arg0);
    }
    return isFeatureSupportedResult;
  }
  isFeatureSupportedResult = Promise.reject("This is only available on Android clients");
};
