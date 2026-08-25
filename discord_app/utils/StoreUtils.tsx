// discord_app/utils/StoreUtils.tsx
import set from "PlatformUtils.tsx";
import getSystemLocale from "../intl/index.native.tsx";
import handleImageLoad from "../modules/image_upload/ImageLoaderUtils.tsx";
import closure_2 from "../../_runtime/00005_asyncGeneratorStep.js";
import closure_3 from "../stores/AuthenticationStore.tsx";
import closure_4 from "../stores/billing/BillingInfoStore.tsx";
import closure_5 from "../stores/billing/PaymentSourceStore.tsx";
import closure_6 from "../stores/billing/SubscriptionStore.tsx";
import ME from "../Constants.tsx";
import { isMobile } from "../../discord_common/js/shared/lib/PlatformUtils.tsx";
import importDefaultResult from "../../_runtime/04644_allSettled.js";

require = arg1;
function _httpGetWithCountryCodeQuery() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    const iter = (function*(arg0) {
      if (merged === 2) {
        merged = 3;
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
          merged = 2;
          if (0 === closure_7) {
            if (arg0 === 1) {
              merged = 3;
              throw arg1;
            } else if (arg0 === 2) {
              merged = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let premiumTypeSubscription = tmp5;
              let paymentSourceId = tmp2;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              c2 = undefined;
              let arr;
              let defaultBillingCountryCode;
              paymentSourceId = undefined;
              premiumTypeSubscription = undefined;
              closure_7 = undefined;
              closure_7 = 1;
              merged = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                merged = 3;
                throw arg1;
              } else if (arg0 === 2) {
                merged = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                c2 = arr.isAuthenticated();
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
                      closure_0 = undefined;
                      closure_0 = _null((arg0) => {
                        closure_0 = arg0;
                        c2 = 0;
                        c3 = 0;
                        return (/* F122168 */ function*() { ... })();
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
                    closure_7 = 2;
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
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            defaultBillingCountryCode = paymentSourceId.getDefaultBillingCountryCode();
            const defaultPaymentSource = paymentSourceId.defaultPaymentSource;
            let id;
            if (defaultPaymentSource != null) {
              id = defaultPaymentSource.id;
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
            closure_7 = {};
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
                error = new Error("string query not supported");
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
            merged = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = HTTP.get(obj3);
            return obj5;
          }
        } catch (tmp87) {
          throw tmp87;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: error, OperatingSystems: closure_8 } = ME);
importDefaultResult.shim();
let tmp4 = !isMobile;
if (!isMobile) {
  tmp4 = !require("isTablet").isTablet;
}
if (tmp4) {
  tmp4 = -1 !== require("num2").getChromeVersion();
  let obj2 = require("num2");
}
let closure_9 = tmp4;
const result = require("set").fileFinishedImporting("utils/StoreUtils.tsx");

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
    error = new Error("Unknown operating system value: " + arg0);
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