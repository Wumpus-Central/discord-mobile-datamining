// === Module 16307: onPostConnectionOpen ===

// Module 16307 (onPostConnectionOpen)
import set from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { AnalyticEvents } from "ME";
import "initialize";

let require = arg1;
let c6 = 26;
let c7 = 2;
class ParentalConsentManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
            return applyArgumentsResult.onPostConnectionOpen();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = ParentalConsentManager.prototype;
prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const self = this;
  return callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (obj5.isParentalConsentCheckEnabled("ParentalConsentManager")) {
              let tmp7 = null != outer1_4.getCurrentUser();
              if (tmp7) {
                tmp7 = (function isPlatformSupported() {
                  if (obj.isMetaQuest()) {
                    return false;
                  } else {
                    let tmpResult = tmp(tmp2[4]);
                    if (tmpResult.getIsRunningOnSimulator()) {
                      return false;
                    } else {
                      tmpResult = tmp(tmp2[4]);
                      const parts = tmpResult.getSystemVersion().split(".");
                      const _parseInt = parseInt;
                      const parsed = parseInt(parts[0], 10);
                      let str3 = parts[1];
                      if (str3 == null) {
                        str3 = "0";
                      }
                      const parsed1 = parseInt(str3, 10);
                      const str = tmpResult.getSystemVersion();
                      if (tmpResult1.isIOS()) {
                        let tmp9 = parsed > closure_6;
                        if (!tmp9) {
                          let tmp10 = parsed === closure_6;
                          if (tmp10) {
                            tmp10 = parsed1 >= closure_7;
                          }
                          tmp9 = tmp10;
                        }
                        let tmp8 = tmp9;
                      } else {
                        tmp8 = parsed >= 35;
                      }
                      return tmp8;
                    }
                  }
                  obj = v3(table[3]);
                })();
              }
              if (tmp7) {
                c1 = 1;
                v0 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = v0.performAgeCheck();
                return obj1;
              }
            }
            obj5 = v0(outer1_2[7]);
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        v0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["performAgeCheck"] = function performAgeCheck() {
  return callback(function*() {
    let getIsConsideredOlderThan;
    let setAgeRangeThresholds;
    if (constants === 2) {
      constants = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        constants = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let _default = tmp3;
            let callback = tmp7;
            callback = undefined;
            _default = undefined;
            let dependencyMap;
            let should_block;
            should_block = 1;
            if (obj20.isNativeAppStoreAgeSignalsEnabled("ParentalConsentManager")) {
              let tmp55Result = tmp55(tmp56[9]);
              if (tmp55Result.shouldCollectAppStoreSignal()) {
                _default = outer1_0(outer1_2[10]).default;
                c4 = 3;
                constants = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = _default.getAgeSignals({ firstAgeGate: 18 });
                return obj1;
              } else {
                should_block = 0;
                constants = 3;
                return { value: "HermesInternal", done: null };
              }
            } else {
              tmp55Result = tmp55(tmp56[11]);
              ({ setAgeRangeThresholds, getIsConsideredOlderThan } = tmp55Result);
              let obj10 = outer1_0(outer1_2[5]);
              if (obj10.isIOS()) {
                const result = setAgeRangeThresholds([18]);
              }
              c4 = 5;
              constants = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = getIsConsideredOlderThan(18);
              return obj2;
            }
            obj20 = outer1_0(outer1_2[8]);
          }
        } else {
          if (1 === tmp7) {
            should_block = 0;
            c4 = dependencyMap;
            let obj8 = _default(1208);
            let obj3 = { tags: null };
            obj3[0] = { source: "parental_consent_manager", step: "perform_age_check" };
            obj8.captureException(c4, obj3);
            constants = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              should_block = arg1.body.should_block;
              const obj4 = { eligible: null, should_block: null, platform: null };
              obj4[0] = callback;
              obj4[1] = should_block;
              const obj17 = _default(698);
              obj4[2] = callback(500).getNativePlatform();
              obj17.track(constants.PARENTAL_CONSENT_CHECKED, obj4);
              should_block = 0;
              const obj19 = callback(500);
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              should_block = 0;
              constants = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              dependencyMap = arg1;
              c4 = 4;
              constants = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = _default.getIsConsideredOlderThan(18, dependencyMap);
              return obj6;
            }
          } else {
            if (4 === tmp7) {
              if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                should_block = 0;
                constants = 3;
                const obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                callback = arg1;
                const HTTP = callback(530).HTTP;
                obj8 = { url: "/users/@me/parental-consent-status", body: null, rejectWithError: true };
                const obj9 = { platform: null, parental_consent: null };
                obj3 = callback(500);
                obj9[0] = obj3.getNativePlatform();
                obj9[1] = callback;
                obj8[1] = obj9;
                HTTP.post(obj8);
                c4 = 2;
                constants = 1;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              callback = arg1;
            }
            should_block = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          should_block = 0;
          constants = 3;
          obj10 = { value: null, done: true };
          obj10[0] = arg1;
          return obj10;
        }
      } catch (tmp33) {
        dependencyMap = tmp33;
        if (tmp4 === should_block) {
          constants = tmp2;
          throw tmp33;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
const parentalConsentManager = new ParentalConsentManager();
let result = require("ME").fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default parentalConsentManager;