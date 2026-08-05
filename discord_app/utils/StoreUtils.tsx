// discord_app/utils/StoreUtils.tsx
import closure_2 from "ME";
import fetchFingerprint from "fetchFingerprint";
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd";
import handlePaymentSourceUpdate from "handlePaymentSourceUpdate";
import reset from "reset";
import ME from "ME";
import { isMobile } from "isTablet";
import importDefaultResult from "allSettled";
import { getSystemLocale } from "../intl/index.native.tsx";
import { handleImageLoad } from "../modules/image_upload/ImageLoaderUtils.tsx";
import { set } from "PlatformUtils.tsx";

let error;
let metroImportAll;
const require = arg1;
function _httpGetWithCountryCodeQuery() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    const iter = (function*(arg0) {
      let paymentSourceId = tmp2;
      if (flag === undefined) {
        flag = true;
      }
      yield "ct";
      if (1 === tmp5) {
        if (arg0 === 1) {
          let merged = 3;
          throw arg1;
        } else if (arg0 === 2) {
          merged = 3;
          let obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          let c2 = arr.isAuthenticated();
          if (flag) {
            if (c2) {
              arr = [];
              if (!paymentSourceId.hasFetchedPaymentSources) {
                const paymentSourcesFetchRequest = defaultBillingCountryCode.paymentSourcesFetchRequest;
                arr = paymentSourcesFetchRequest;
                if (paymentSourcesFetchRequest == null) {
                  let obj2 = obj3(flag[10]);
                  arr = obj2.fetchPaymentSources();
                }
                arr = arr.push(arr);
              }
              if (!defaultBillingCountryCode.ipCountryCodeLoaded) {
                obj3 = obj3(flag[10]);
                arr = arr.push(obj3.fetchIpCountryCode());
              }
              arr.push((function waitForSubscriptionsToBeFetched() {
                let closure_0;
                closure_0 = _null((arg0) => {
                  let closure_0 = arg0;
                  let c2 = 0;
                  let c3 = 0;
                  return (/* F119519 */ function*() { ... })();
                });
                return new Promise(function() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                });
              })());
              const items = [Promise.allSettled(arr), ];
              const promise = new Promise((arg0) => setTimeout(arg0, 10000));
              items[1] = promise;
              let closure_7 = 2;
              merged = 1;
              obj2 = { value: null, done: false };
              obj2[0] = Promise.race(items);
              return obj2;
            }
          }
        }
      } else if (arg0 === 1) {
        merged = 3;
        throw arg1;
      } else if (arg0 === 2) {
        merged = 3;
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      }
      defaultBillingCountryCode = paymentSourceId.getDefaultBillingCountryCode();
      const defaultPaymentSource = paymentSourceId.defaultPaymentSource;
      if (defaultPaymentSource != null) {
        const id = defaultPaymentSource.id;
      }
      c2 = id;
      if (id == null) {
        c2 = null;
      }
      paymentSourceId = c2;
      premiumTypeSubscription = premiumTypeSubscription.getPremiumTypeSubscription();
      let tmp19 = null != premiumTypeSubscription;
      if (tmp19) {
        tmp19 = null != premiumTypeSubscription.paymentSourceId;
      }
      if (tmp19) {
        paymentSourceId = premiumTypeSubscription.paymentSourceId;
      }
      if (null === defaultBillingCountryCode) {
        const ipCountryCode = defaultBillingCountryCode.ipCountryCode;
        defaultBillingCountryCode = ipCountryCode;
        if (ipCountryCode == null) {
          defaultBillingCountryCode = null;
        }
      }
      if (null != defaultBillingCountryCode) {
        closure_7.country_code = defaultBillingCountryCode;
      }
      if (null != paymentSourceId) {
        closure_7.payment_source_id = paymentSourceId;
      }
      if (null != defaultBillingCountryCode) {
        if (typeof obj3 === "string") {
          obj3 = { url: null, oldFormErrors: true, rejectWithError: false };
          obj3[0] = obj3;
        }
        if (typeof obj3.query === "string") {
          const _Error = Error;
          const error = new Error("string query not supported");
          throw error;
        } else {
          const obj4 = {};
          merged = closure_7;
          merged = obj4;
          merged = Object.assign(closure_7);
          merged = obj3;
          merged = obj4;
          merged = Object.assign(obj3.query);
          obj3.query = obj4;
        }
      }
      const HTTP = obj3(flag[11]).HTTP;
      return HTTP.get(obj3);
    })();
    iter.next();
    return iter;
  });
  const _httpGetWithCountryCodeQuery = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: error, OperatingSystems: metroImportAll } = ME);
require("allSettled").shim();
let tmp4 = !isMobile;
if (!isMobile) {
  tmp4 = !require("isTablet").isTablet;
}
if (tmp4) {
  tmp4 = -1 !== require("num2").getChromeVersion();
  let obj2 = require("num2");
}
let c9 = tmp4;
const result = require("handlePaymentSourceCreateEnd").fileFinishedImporting("utils/StoreUtils.tsx");

export const SUPPORTS_WEBP = tmp4;
export const getAssetURL = function getAssetURL(closure_7, mimeType, arg2, mp4) {
  let str = mp4;
  if (null == mp4) {
    str = "mp4";
    if ("video/quicktime" !== (mimeType.mimeType || mimeType.mime_type)) {
      str = "mp4";
      if ("video/mp4" !== tmp) {
        str = "image/gif" === tmp ? "gif" : "webp";
      }
    }
  }
  if (!tmp2) {
    str = "png";
  }
  let id = mimeType;
  if (typeof mimeType !== "string") {
    id = mimeType.id;
  }
  if (null != CDN_HOST) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + "https:" + "//" + CDN_HOST + "/app-assets/" + closure_7 + "/store/" + id + "." + str;
  } else {
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + "https:" + window.GLOBAL_ENV.API_ENDPOINT + closure_7.STORE_ASSET(closure_7, id, str);
  }
  let sum = combined;
  if (null != arg2) {
    const obj = handleImageLoad;
    const _HermesInternal3 = HermesInternal;
    sum = combined + "?size=" + obj.getBestMediaProxySize(arg2 * handleImageLoad.getDevicePixelRatio());
    const obj2 = handleImageLoad;
  }
  return sum;
};
export const httpGetWithCountryCodeQuery = function httpGetWithCountryCodeQuery(result) {
  const self = this;
  const apply = _httpGetWithCountryCodeQuery.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const nativePlatformTypeToSKUOperatingSystem = function nativePlatformTypeToSKUOperatingSystem(platform) {
  if (set.PlatformTypes.WINDOWS === platform) {
    return constants.WINDOWS;
  } else if (tmp(500).PlatformTypes.OSX === platform) {
    return constants.MACOS;
  } else if (tmp(500).PlatformTypes.LINUX === platform) {
    return constants.LINUX;
  } else {
    return null;
  }
};
export const skuOperatingSystemToText = function skuOperatingSystemToText(arg0) {
  if (constants.WINDOWS === arg0) {
    const intl3 = getSystemLocale.intl;
    return intl3.string(getSystemLocale.t["0/xHFO"]);
  } else if (tmp.MACOS === arg0) {
    const intl2 = getSystemLocale.intl;
    return intl2.string(getSystemLocale.t.E4u4n5);
  } else if (tmp.LINUX === arg0) {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.tcawo3);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown operating system value: " + arg0);
    throw error;
  }
};
export const getPrimarySKUForApplication = function getPrimarySKUForApplication(arg0, getApplication, get) {
  const application = getApplication.getApplication(arg0);
  let value = null;
  if (null != application) {
    value = null;
    if (null != application.primarySkuId) {
      value = get.get(application.primarySkuId);
    }
  }
  return value;
};