// === Module 7522: _fetchAdUser ===

// Module 7522 (_fetchAdUser)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import closure_3 from "adUser" /* 7520 */;
import ME from "ME" /* 676 */;

function _fetchAdUser() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              dependencyMap = tmp5;
              dependencyMap = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              let constants;
              if (null != closure_1_3.adUser) {
                if (null != tmp82.adUser.advertisingId) {
                  let obj8 = callback(closure_1_1[3]);
                  obj1 = { has_advertising_id: true, android_advertising_id: null, location: null, success: true, last_fetched_timestamp: null };
                  obj1[1] = tmp82.adUser.advertisingId;
                  obj1[2] = tmp81;
                  obj1[4] = tmp82.lastFetchedAt;
                  obj8.track(constants.AD_IDENTIFIER_FETCHED, obj1);
                  c6 = 3;
                }
              }
              const _performance2 = performance;
              dependencyMap = performance.now();
              constants = 1;
              callback(closure_1_1[4]).dispatch({ type: "FETCH_AD_USER_START" });
              const obj11 = callback(closure_1_1[4]);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback(closure_1_1[5]).getGoogleAdvertisingId();
              return obj2;
            }
          } else if (1 === tmp8) {
            constants = 0;
            c5 = closure_3;
            const _performance = performance;
            constants = performance.now() - dependencyMap;
            let obj3 = callback(698);
            obj3 = { platform: null, success: false, duration_ms: null, error_message: null };
            obj3[0] = c5.ANDROID;
            obj3[2] = constants;
            const _Error = Error;
            if (c5 instanceof Error) {
              let message = c5.message;
            } else {
              const _String = String;
              message = String(c5);
            }
            obj3[3] = message;
            obj3.track(constants.AD_USER_FETCH_DURATION, obj3);
            let obj5 = callback(698);
            const obj4 = { has_advertising_id: false, location: null, success: false };
            obj4[1] = callback;
            obj5.track(constants.AD_IDENTIFIER_FETCHED, obj4);
            let obj7 = callback(709);
            obj7.dispatch({ type: "FETCH_AD_USER_FAILURE" });
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_2 = arg1;
            const _performance3 = performance;
            closure_3 = performance.now() - dependencyMap;
            obj5 = { platform: null, success: true, duration_ms: null, has_advertising_id: null, is_limit_ad_tracking_enabled: null };
            obj5[0] = c5.ANDROID;
            obj5[2] = closure_3;
            obj5[3] = null != closure_2.googleAdvertisingId;
            obj5[4] = closure_2.isLimitAdTrackingEnabled;
            callback(698).track(constants.AD_USER_FETCH_DURATION, obj5);
            const obj16 = callback(698);
            const obj6 = { has_advertising_id: null, android_advertising_id: null, location: null, success: true };
            obj6[0] = null != closure_2.googleAdvertisingId;
            let googleAdvertisingId = null;
            if (null != closure_2.googleAdvertisingId) {
              googleAdvertisingId = closure_2.googleAdvertisingId;
            }
            obj6[1] = googleAdvertisingId;
            obj6[2] = callback;
            callback(698).track(constants.AD_IDENTIFIER_FETCHED, obj6);
            obj = callback(709);
            obj7 = { type: "FETCH_AD_USER_SUCCESS", advertisingId: null, isLimitAdTrackingEnabled: null };
            obj7[1] = closure_2.googleAdvertisingId;
            obj7[2] = closure_2.isLimitAdTrackingEnabled;
            obj.dispatch(obj7);
            constants = 0;
            const obj18 = callback(698);
          }
          constants = 0;
          c6 = 3;
          obj8 = { value: null, done: true };
          obj8[0] = arg1;
          return obj8;
        } catch (tmp55) {
          closure_3 = tmp55;
          if (tmp4 === constants) {
            c6 = tmp2;
            throw tmp55;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c4, Platforms: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/ads/native/AdUserActionCreators.android.tsx");

export const fetchAdUser = function fetchAdUser(handleStoreChange) {
  const self = this;
  const apply = _fetchAdUser.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};