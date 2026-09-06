// === Module 7732: AdUserActionCreators ===

// Module 7732 (AdUserActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import NativeAdsModuleDefault from "NativeAdsModule" /* 7733 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AdUserStore from "AdUserStore" /* 7730 */;

let closure_6 = async function _fetchAdUser(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          closure_2 = tmp3;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          if (null != adUser.adUser) {
            if (null != adUser.adUser.advertisingId) {
              let obj8 = AnalyticsUtilsDefault;
              const obj1 = { has_advertising_id: true, android_advertising_id: adUser.adUser.advertisingId, location: tmp80, success: true, last_fetched_timestamp: adUser.lastFetchedAt };
              obj8.track(constants.AD_IDENTIFIER_FETCHED, obj1);
              c6 = 3;
            }
          }
          const _performance2 = performance;
          closure_129_1 = performance.now();
          c4 = 1;
          DispatcherDefault.dispatch({ type: "FETCH_AD_USER_START" });
          c5 = 2;
          c6 = 1;
          const obj2 = { value: NativeAdsModuleDefault.getGoogleAdvertisingId(), done: false };
          return obj2;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_5 = closure_3;
        const _performance = performance;
        closure_129_4 = performance.now() - closure_129_1;
        let obj3 = closure_130_0(closure_130_1[3]);
        obj3 = { platform: closure_130_5.ANDROID, success: false, duration_ms: closure_129_4, error_message: null };
        const _Error = Error;
        if (closure_129_5 instanceof Error) {
          let message = closure_129_5.message;
        } else {
          const _String = String;
          message = String(closure_129_5);
        }
        obj3.error_message = message;
        obj3.track(closure_130_4.AD_USER_FETCH_DURATION, obj3);
        let obj5 = closure_130_0(closure_130_1[3]);
        const obj4 = { has_advertising_id: false, location: closure_129_0, success: false };
        obj5.track(closure_130_4.AD_IDENTIFIER_FETCHED, obj4);
        let obj7 = closure_130_0(closure_130_1[4]);
        obj7.dispatch({ type: "FETCH_AD_USER_FAILURE" });
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_129_2 = value;
        const _performance3 = performance;
        closure_129_3 = performance.now() - closure_129_1;
        obj5 = { platform: closure_130_5.ANDROID, success: true, duration_ms: closure_129_3, has_advertising_id: null != closure_129_2.googleAdvertisingId, is_limit_ad_tracking_enabled: closure_129_2.isLimitAdTrackingEnabled };
        closure_130_0(closure_130_1[3]).track(closure_130_4.AD_USER_FETCH_DURATION, obj5);
        const obj16 = closure_130_0(closure_130_1[3]);
        const obj6 = { has_advertising_id: null != closure_129_2.googleAdvertisingId, android_advertising_id: null, location: null, success: true };
        let googleAdvertisingId = null;
        if (null != closure_129_2.googleAdvertisingId) {
          googleAdvertisingId = closure_129_2.googleAdvertisingId;
        }
        obj6.android_advertising_id = googleAdvertisingId;
        obj6.location = closure_129_0;
        closure_130_0(closure_130_1[3]).track(closure_130_4.AD_IDENTIFIER_FETCHED, obj6);
        obj = closure_130_0(closure_130_1[4]);
        obj7 = { type: "FETCH_AD_USER_SUCCESS", advertisingId: closure_129_2.googleAdvertisingId, isLimitAdTrackingEnabled: closure_129_2.isLimitAdTrackingEnabled };
        obj.dispatch(obj7);
        c4 = 0;
        const obj18 = closure_130_0(closure_130_1[3]);
      }
      c4 = 0;
      c6 = 3;
      obj8 = { value, done: true };
      return obj8;
    } catch (tmp55) {
      closure_3 = tmp55;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp55;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: closure_4, Platforms: hasOwnProperty } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/ads/native/AdUserActionCreators.android.tsx");

export const fetchAdUser = function fetchAdUser() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};