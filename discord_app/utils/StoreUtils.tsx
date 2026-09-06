// discord_app/utils/StoreUtils.tsx
import util from "../intl/index.native.tsx";
import PlatformUtils from "PlatformUtils.tsx";
import ImageLoaderUtils from "../modules/image_upload/ImageLoaderUtils.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../stores/AuthenticationStore.tsx";
import BillingInfoStore from "../stores/billing/BillingInfoStore.tsx";
import PaymentSourceStore from "../stores/billing/PaymentSourceStore.tsx";
import SubscriptionStore from "../stores/billing/SubscriptionStore.tsx";
import allSettled from "../../_runtime/04803_allSettled.js";

require = fn;
let closure_10 = async function _httpGetWithCountryCodeQuery(arg0) {
  if (c8 === 2) {
    c8 = 3;
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp5;
          closure_5 = tmp2;
          closure_133_1 = undefined;
          closure_133_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_133_1 = flag;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          let defaultBillingCountryCode;
          let paymentSourceId;
          let premiumTypeSubscription;
          closure_133_7 = undefined;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            closure_133_2 = closure_134_3.isAuthenticated();
            if (closure_133_1) {
              if (closure_133_2) {
                closure_133_3 = [];
                if (!closure_134_5.hasFetchedPaymentSources) {
                  const paymentSourcesFetchRequest = closure_134_4.paymentSourcesFetchRequest;
                  closure_3 = paymentSourcesFetchRequest;
                  if (paymentSourcesFetchRequest == null) {
                    let obj2 = closure_134_0(closure_134_1[10]);
                    closure_3 = obj2.fetchPaymentSources();
                  }
                  closure_133_3.push(closure_3);
                }
                if (!closure_134_4.ipCountryCodeLoaded) {
                  let obj3 = closure_134_0(closure_134_1[10]);
                  closure_133_3.push(obj3.fetchIpCountryCode());
                }
                closure_133_3.push(
                  (function waitForSubscriptionsToBeFetched() {
                    closure_0 = closure_2(function* (arg0) {
                      if (c3 === 2) {
                        c3 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
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
                              c1 = 0;
                              closure_129_0 = closure_0;
                              if (closure_1_6.hasFetchedSubscriptions()) {
                                closure_0();
                              } else if (closure_1_4.isSubscriptionFetching) {
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
                                let obj1 = closure_0(c1[10]);
                                c2 = 1;
                                c3 = 1;
                                obj1 = { value: null, done: false };
                                obj1.value = obj1.fetchSubscriptions();
                                return obj1;
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
                          obj = { value, done: true };
                          return obj;
                        } catch (tmp13) {
                          c3 = tmp;
                          throw tmp13;
                        }
                      }
                    });
                    return new Promise(function () {
                      const self = this;
                      const apply = closure_0.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    });
                  })(),
                );
                const items = [Promise.allSettled(closure_133_3)];
                const promise = new Promise((arg0) => setTimeout(arg0, 10000));
                items[1] = promise;
                c7 = 2;
                c8 = 1;
                obj2 = { value: Promise.race(items), done: false };
                return obj2;
              }
            }
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        }
        defaultBillingCountryCode = closure_134_5.getDefaultBillingCountryCode();
        const defaultPaymentSource = closure_134_5.defaultPaymentSource;
        let id;
        if (defaultPaymentSource != null) {
          id = defaultPaymentSource.id;
        }
        c2 = id;
        if (id == null) {
          c2 = null;
        }
        paymentSourceId = c2;
        premiumTypeSubscription = closure_134_6.getPremiumTypeSubscription();
        let tmp19 = null != premiumTypeSubscription;
        if (tmp19) {
          tmp19 = null != premiumTypeSubscription.paymentSourceId;
        }
        if (tmp19) {
          paymentSourceId = premiumTypeSubscription.paymentSourceId;
        }
        if (null === defaultBillingCountryCode) {
          const ipCountryCode = closure_134_4.ipCountryCode;
          c4 = ipCountryCode;
          if (ipCountryCode == null) {
            c4 = null;
          }
          defaultBillingCountryCode = c4;
        }
        closure_133_7 = {};
        if (null != defaultBillingCountryCode) {
          closure_133_7.country_code = defaultBillingCountryCode;
        }
        if (null != paymentSourceId) {
          closure_133_7.payment_source_id = paymentSourceId;
        }
        if (null != defaultBillingCountryCode) {
          if (typeof closure_133_0 === "string") {
            obj3 = { url: closure_133_0, oldFormErrors: true, rejectWithError: false };
            closure_133_0 = obj3;
          }
          if (typeof closure_133_0.query === "string") {
            const _Error = Error;
            const error = new Error("string query not supported");
            throw error;
          } else {
            const obj4 = {};
            const merged = Object.assign(closure_133_7);
            const merged1 = Object.assign(closure_133_0.query);
            closure_133_0.query = obj4;
          }
        }
        const HTTP = closure_134_0(closure_134_1[11]).HTTP;
        c8 = 3;
        const obj5 = { value: HTTP.get(closure_133_0), done: true };
        return obj5;
      }
    } catch (tmp87) {
      c8 = tmp;
      throw tmp87;
    }
  }
};
const Constants = fn(1074);
({ Endpoints: closure_7, OperatingSystems: closure_8 } = Constants);
allSettled = allSettled.shim();
const isMobile = fn(4801).isMobile;
let tmp4 = !isMobile;
if (!isMobile) {
  tmp4 = !fn(4801).isTablet;
}
if (tmp4) {
  tmp4 = -1 !== fn(4882).getChromeVersion();
  let obj2 = fn(4882);
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
export const httpGetWithCountryCodeQuery = function httpGetWithCountryCodeQuery() {
  const self = this;
  const apply = closure_10.apply;
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
