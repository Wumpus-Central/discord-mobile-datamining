// discord_app/utils/StoreUtils.tsx
import util from "../intl/index.native.tsx";
import PlatformUtils from "PlatformUtils.tsx";
import ImageLoaderUtils from "../modules/image_upload/ImageLoaderUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import BillingInfoStore from "../stores/billing/BillingInfoStore.tsx";
import PaymentSourceStore from "../stores/billing/PaymentSourceStore.tsx";
import SubscriptionStore from "../stores/billing/SubscriptionStore.tsx";
import allSettled_mod from "../../_runtime/05323_allSettled.js";

require = fn;
function fetchCountryCodeQueryDependencies() {
  const items = [];
  if (!PaymentSourceStore.hasFetchedPaymentSources) {
    let paymentSourcesFetchRequest = BillingInfoStore.paymentSourcesFetchRequest;
    if (paymentSourcesFetchRequest == null) {
      paymentSourcesFetchRequest = require("actions/BillingActionCreators").fetchPaymentSources();
      let obj = require("actions/BillingActionCreators");
    }
    items.push(paymentSourcesFetchRequest);
  }
  if (!BillingInfoStore.ipCountryCodeLoaded) {
    items.push(require("actions/BillingActionCreators").fetchIpCountryCode());
    const obj2 = require("actions/BillingActionCreators");
  }
  _require = asyncGeneratorStep(async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 0;
            closure_129_0 = closure_0;
            if (SubscriptionStore.hasFetchedSubscriptions()) {
              closure_0();
            } else if (BillingInfoStore.isSubscriptionFetching) {
              function wait() {
                if (closure_2_4.isSubscriptionFetching) {
                  const _setTimeout = setTimeout;
                  const timerId = setTimeout(closure_1_1, 50);
                } else {
                  closure_1_0();
                }
              }
              closure_129_1 = wait;
              wait();
            } else {
              c2 = 1;
              c3 = 1;
              const obj5 = { value: closure_0(c1[10]).fetchSubscriptions(), done: false };
              return obj5;
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_0();
        }
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp13) {
        c3 = tmp;
        throw tmp13;
      }
    }
  });
  items.push(
    new Promise(function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }),
  );
  return Promise.allSettled(items);
}
let closure_11 = async function _httpGetWithCountryCodeQuery(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp5;
          closure_4 = tmp2;
          closure_132_1 = undefined;
          closure_132_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_132_1 = flag;
          let defaultBillingCountryCode;
          let paymentSourceId;
          let premiumTypeSubscription;
          closure_132_5 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "Set", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let isAuthenticatedResult = closure_132_1;
            if (closure_132_1) {
              isAuthenticatedResult = closure_133_3.isAuthenticated();
            }
            if (isAuthenticatedResult) {
              const items = [closure_133_10()];
              const promise = new Promise((arg0) => setTimeout(arg0, 10000));
              items[1] = promise;
              c6 = 2;
              c7 = 1;
              const obj5 = { value: Promise.race(items), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        }
        defaultBillingCountryCode = closure_133_5.getDefaultBillingCountryCode();
        const defaultPaymentSource = closure_133_5.defaultPaymentSource;
        let id;
        if (defaultPaymentSource != null) {
          id = defaultPaymentSource.id;
        }
        c2 = id;
        if (id == null) {
          c2 = null;
        }
        paymentSourceId = c2;
        premiumTypeSubscription = closure_133_6.getPremiumTypeSubscription();
        let tmp19 = null != premiumTypeSubscription;
        if (tmp19) {
          tmp19 = null != premiumTypeSubscription.paymentSourceId;
        }
        if (tmp19) {
          paymentSourceId = premiumTypeSubscription.paymentSourceId;
        }
        if (null === defaultBillingCountryCode) {
          const ipCountryCode = closure_133_4.ipCountryCode;
          c3 = ipCountryCode;
          if (ipCountryCode == null) {
            c3 = null;
          }
          defaultBillingCountryCode = c3;
        }
        closure_132_5 = {};
        if (null != defaultBillingCountryCode) {
          closure_132_5.country_code = defaultBillingCountryCode;
        }
        if (null != paymentSourceId) {
          closure_132_5.payment_source_id = paymentSourceId;
        }
        if (null != defaultBillingCountryCode) {
          if (typeof closure_132_0 === "string") {
            const obj6 = { url: closure_132_0, oldFormErrors: true, rejectWithError: false };
            closure_132_0 = obj6;
          }
          if (typeof closure_132_0.query === "string") {
            const _Error = Error;
            const error = new Error("string query not supported");
            throw error;
          } else {
            const obj7 = {};
            const merged = Object.assign(closure_132_5);
            const merged1 = Object.assign(closure_132_0.query);
            closure_132_0.query = obj7;
          }
        }
        const HTTP = closure_133_0(closure_133_1[11]).HTTP;
        c7 = 3;
        const obj8 = { value: HTTP.get(closure_132_0), done: true };
        return obj8;
      }
    } catch (tmp65) {
      c7 = tmp;
      throw tmp65;
    }
  }
};
const Constants = fn(1085);
({ Endpoints: closure_7, OperatingSystems: closure_8 } = Constants);
let allSettled = allSettled_mod;
allSettled = allSettled.shim();
const isMobile = fn(5321).isMobile;
let tmp4 = !isMobile;
if (!isMobile) {
  tmp4 = !fn(5321).isTablet;
}
if (tmp4) {
  tmp4 = -1 !== fn(5402).getChromeVersion();
  let obj2 = fn(5402);
}
let closure_9 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("utils/StoreUtils.tsx");

export const SUPPORTS_WEBP = tmp4;
export const getAssetURL = function getAssetURL(application_id, mimeType, size, mp4) {
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
    let combined = "" + "https:" + "//" + CDN_HOST + "/app-assets/" + application_id + "/store/" + id + "." + str;
  } else {
    const _window = window;
    const _HermesInternal = HermesInternal;
    combined = "" + "https:" + window.GLOBAL_ENV.API_ENDPOINT + React5.STORE_ASSET(application_id, id, str);
  }
  let sum = combined;
  if (null != size) {
    const obj = ImageLoaderUtils;
    const _HermesInternal3 = HermesInternal;
    sum = combined + "?size=" + obj.getBestMediaProxySize(size * ImageLoaderUtils.getDevicePixelRatio());
  }
  return sum;
};
export { fetchCountryCodeQueryDependencies };
export const httpGetWithCountryCodeQuery = function httpGetWithCountryCodeQuery() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const nativePlatformTypeToSKUOperatingSystem = function nativePlatformTypeToSKUOperatingSystem(platform) {
  if (PlatformUtils.PlatformTypes.WINDOWS === platform) {
    return constants.WINDOWS;
  } else if (PlatformUtils.PlatformTypes.OSX === platform) {
    return constants.MACOS;
  } else if (PlatformUtils.PlatformTypes.LINUX === platform) {
    return constants.LINUX;
  } else {
    return null;
  }
};
export const skuOperatingSystemToText = function skuOperatingSystemToText(arg0) {
  if (constants.WINDOWS === arg0) {
    const intl3 = util.intl;
    return intl3.string(util.t["0/xHFO"]);
  } else if (constants.MACOS === arg0) {
    const intl2 = util.intl;
    return intl2.string(util.t.E4u4n5);
  } else if (constants.LINUX === arg0) {
    const intl = util.intl;
    return intl.string(util.t.tcawo3);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown operating system value: " + arg0);
    throw error;
  }
};
export const getPrimarySKUForApplication = function getPrimarySKUForApplication(arg0, getApplication, get) {
  const application = getApplication.getApplication(arg0);
  value = null;
  if (null != application) {
    value = null;
    if (null != application.primarySkuId) {
      value = get.get(application.primarySkuId);
    }
  }
  return value;
};
