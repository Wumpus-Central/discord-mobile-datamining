// discord_app/modules/ads/native/AdUserActionCreators.android.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeAdsModule.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import AdUserStore from "AdUserStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let adUser, duration_ms, duration_ms2, googleAdvertisingId, message;

let closure_4;
let hasOwnProperty;
let obj = function _fetchAdUser() {
  obj = _asyncToGenerator(async (_location) => {
    let closure_2;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let googleAdvertisingId1;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let closure_1;
          let tmp;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = undefined;
              tmp = undefined;
              duration_ms = undefined;
              duration_ms2 = undefined;
              if (null != adUser.adUser) {
                if (null != adUser.adUser.advertisingId) {
                  adUser = tmp80.adUser;
                  const obj3 = {
                    has_advertising_id: true,
                    android_advertising_id: adUser.advertisingId,
                    location: tmp79,
                    success: true,
                    last_fetched_timestamp: adUser.lastFetchedAt,
                  };
                  const obj6 = AnalyticsUtilsDefault;
                  obj6.track(constants.AD_IDENTIFIER_FETCHED, obj3);
                }
              }
              const _performance2 = performance;
              closure_1 = performance.now();
              c4 = 1;
              const obj8 = DispatcherDefault;
              obj8.dispatch({ type: "FETCH_AD_USER_START" });
              const obj9 = react_nativeDefault;
              googleAdvertisingId = obj9.getGoogleAdvertisingId();
              c5 = 2;
              c6 = 1;
              return { value: googleAdvertisingId, done: false };
            }
          } else if (1 === tmp4) {
            c4 = 0;
            message = duration_ms;
            const _performance = performance;
            duration_ms2 = performance.now() - closure_1;
            googleAdvertisingId = {
              platform: closure_130_5.ANDROID,
              success: false,
              duration_ms: duration_ms2,
              error_message: message,
            };
            const _Error = Error;
            const track = closure_130_0(closure_130_1[3]).track;
            const AD_USER_FETCH_DURATION = closure_130_4.AD_USER_FETCH_DURATION;
            closure_130_0(closure_130_1[3]);
            if (message instanceof Error) {
              message = message.message;
            } else {
              const _String = String;
              message = String(message);
            }
            track(AD_USER_FETCH_DURATION, googleAdvertisingId);
            const obj7 = { has_advertising_id: false, location: _location, success: false };
            const obj4 = closure_130_0(closure_130_1[3]);
            obj4.track(closure_130_4.AD_IDENTIFIER_FETCHED, obj7);
            googleAdvertisingId = closure_130_0(closure_130_1[4]).dispatch;
            closure_130_0(closure_130_1[4]);
            googleAdvertisingId({ type: "FETCH_AD_USER_FAILURE" });
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            tmp = value;
            const _performance3 = performance;
            duration_ms = performance.now() - closure_1;
            const obj11 = {
              platform: closure_130_5.ANDROID,
              success: true,
              duration_ms,
              has_advertising_id: null != tmp.googleAdvertisingId,
              is_limit_ad_tracking_enabled: tmp.isLimitAdTrackingEnabled,
            };
            const obj13 = closure_130_0(closure_130_1[3]);
            obj13.track(closure_130_4.AD_USER_FETCH_DURATION, obj11);
            googleAdvertisingId = {
              has_advertising_id: null != tmp.googleAdvertisingId,
              android_advertising_id: googleAdvertisingId1,
              location: _location,
              success: true,
            };
            googleAdvertisingId1 = null;
            const track2 = closure_130_0(closure_130_1[3]).track;
            const AD_IDENTIFIER_FETCHED = closure_130_4.AD_IDENTIFIER_FETCHED;
            closure_130_0(closure_130_1[3]);
            if (null != tmp.googleAdvertisingId) {
              googleAdvertisingId1 = tmp.googleAdvertisingId;
            }
            track2(AD_IDENTIFIER_FETCHED, googleAdvertisingId);
            googleAdvertisingId = closure_130_0(closure_130_1[4]).dispatch;
            const obj12 = {
              type: "FETCH_AD_USER_SUCCESS",
              advertisingId: tmp.googleAdvertisingId,
              isLimitAdTrackingEnabled: tmp.isLimitAdTrackingEnabled,
            };
            closure_130_0(closure_130_1[4]);
            googleAdvertisingId(obj12);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp54) {
          duration_ms = tmp54;
          if (0 === c4) {
            c6 = 3;
            throw tmp54;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: closure_4, Platforms: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/ads/native/AdUserActionCreators.android.tsx");

export const fetchAdUser = function fetchAdUser() {
  return obj(...arguments);
};
