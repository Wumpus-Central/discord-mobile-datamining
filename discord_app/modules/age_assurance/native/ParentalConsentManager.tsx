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
  const self = this;
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
            let closure_0 = tmp7;
            closure_0 = undefined;
            _default = undefined;
            let closure_2;
            let should_block;
            should_block = 1;
            if (obj22.isNativeAppStoreAgeSignalsEnabled("ParentalConsentManager")) {
              let tmp58Result = tmp58(tmp59[9]);
              if (tmp58Result.shouldCollectAppStoreSignal()) {
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
              tmp58Result = tmp58(tmp59[11]);
              ({ setAgeRangeThresholds, getIsConsideredOlderThan } = tmp58Result);
              let obj12 = outer1_0(outer1_2[5]);
              if (obj12.isIOS()) {
                const result = setAgeRangeThresholds([18]);
              }
              c4 = 6;
              constants = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = getIsConsideredOlderThan(18);
              return obj2;
            }
            obj22 = outer1_0(outer1_2[8]);
          }
        } else {
          if (1 === tmp7) {
            should_block = 0;
            c4 = closure_2;
            let obj10 = outer1_1(outer1_2[14]);
            let obj3 = { tags: null };
            obj3[0] = { source: "parental_consent_manager", step: "perform_age_check" };
            obj10.captureException(c4, obj3);
            constants = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              should_block = arg1.body.should_block;
              const obj4 = { eligible: null, should_block: null, platform: null };
              obj4[0] = outer1_0;
              obj4[1] = should_block;
              const obj19 = outer1_1(outer1_2[13]);
              obj4[2] = outer1_0(outer1_2[5]).getNativePlatform();
              obj19.track(constants.PARENTAL_CONSENT_CHECKED, obj4);
              should_block = 0;
              const obj21 = outer1_0(outer1_2[5]);
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
              closure_2 = arg1;
              c4 = 4;
              constants = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = _default.getIsConsideredOlderThan(18, closure_2);
              return obj6;
            }
          } else if (4 === tmp7) {
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
              closure_0 = arg1;
              c4 = 5;
              constants = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = closure_0.forwardAgeSignal(closure_2);
              return obj8;
            }
          } else {
            if (5 === tmp7) {
              if (arg0 === 1) {
                constants = 3;
                throw arg1;
              } else if (arg0 === 2) {
                should_block = 0;
                constants = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              } else {
                const HTTP = outer1_0(outer1_2[12]).HTTP;
                obj10 = { url: "/users/@me/parental-consent-status", body: null, rejectWithError: true };
                const obj11 = { platform: null, parental_consent: null };
                obj3 = outer1_0(outer1_2[5]);
                obj11[0] = obj3.getNativePlatform();
                obj11[1] = closure_0;
                obj10[1] = obj11;
                HTTP.post(obj10);
                c4 = 2;
                constants = 1;
              }
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_0 = arg1;
            }
            should_block = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          should_block = 0;
          constants = 3;
          obj12 = { value: null, done: true };
          obj12[0] = arg1;
          return obj12;
        }
      } catch (tmp38) {
        closure_2 = tmp38;
        if (tmp4 === should_block) {
          constants = tmp2;
          throw tmp38;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["forwardAgeSignal"] = function forwardAgeSignal(closure_2) {
  let closure_0 = closure_2;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp7;
            closure_0 = undefined;
            let c3 = 1;
            c4 = 2;
            c5 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = outer1_0(outer1_2[15]).getAgeSignalIntegrityToken(outer1_0);
            return obj1;
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_1 = closure_2;
            let obj4 = outer1_1(outer1_2[14]);
            const obj2 = { tags: null };
            obj2[0] = { source: "parental_consent_manager", step: "submit_age_signal" };
            obj4.captureException(closure_1, obj2);
            c5 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              closure_0 = arg1;
              obj1 = outer1_0(outer1_2[16]);
              c4 = 3;
              c5 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj1.submitAgeSignal(closure_0, closure_0);
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp25) {
        closure_2 = tmp25;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp25;
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