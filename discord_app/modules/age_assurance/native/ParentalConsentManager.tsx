// discord_app/modules/age_assurance/native/ParentalConsentManager.tsx
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

let require = arg1;
let c6 = 26;
let c7 = 2;
let c8 = false;
initializeDefault;
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
            c8 = true;
            let result = null != closure_1_4.getCurrentUser();
            if (result) {
              result = (function isPlatformSupported() {
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
                      tmp8 = parsed >= 23;
                    }
                    return tmp8;
                  }
                }
                obj = v3(table[3]);
              })();
            }
            if (result) {
              obj1 = v0(closure_1_2[7]);
              result = obj1.shouldCollectAppStoreSignal();
            }
            if (result) {
              c1 = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = v0.performAgeCheck(!tmp15);
              return obj1;
            }
            tmp15 = c8;
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
prototype["performAgeCheck"] = function performAgeCheck(arg0) {
  closure_0 = arg0;
  const self = this;
  return callback(function*() {
    closure_1 = tmp3;
    c3 = 1;
    yield closure_1_1.collectAgeSignal();
    if (1 === tmp7) {
      c3 = 0;
      let obj2 = { tags: null };
      obj2[0] = { source: "parental_consent_manager", step: "perform_age_check" };
      closure_1_1(closure_1_2[11]).captureException(closure_2, obj2);
      let constants = 3;
      const obj11 = closure_1_1(closure_1_2[11]);
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        constants = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c3 = 0;
        constants = 3;
        const obj3 = { value: null, done: true };
        obj3[0] = arg1;
        return obj3;
      } else {
        closure_0 = arg1;
        let obj7 = closure_1_0(closure_1_2[8]);
        c4 = 3;
        constants = 1;
        let obj4 = { value: null, done: false };
        obj4[0] = obj7.getAgeSignalIntegrityToken(closure_0);
        return obj4;
      }
    } else if (3 === tmp7) {
      if (arg0 === 1) {
        constants = 3;
        throw arg1;
      } else if (arg0 === 2) {
        c3 = 0;
        constants = 3;
        const obj5 = { value: null, done: true };
        obj5[0] = arg1;
        return obj5;
      } else {
        closure_1 = arg1;
        obj4 = closure_1_0(closure_1_2[9]);
        c4 = 4;
        constants = 1;
        const obj6 = { value: null, done: false };
        obj6[0] = obj4.submitAgeSignal(closure_0, closure_1, closure_0);
        return obj6;
      }
    } else if (arg0 === 1) {
      constants = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const obj = closure_1_1(closure_1_2[10]);
      obj7 = { platform: null };
      obj2 = closure_1_0(closure_1_2[5]);
      obj7[0] = obj2.getNativePlatform();
      obj.track(constants.PARENTAL_CONSENT_CHECKED, obj7);
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  })();
};
prototype["collectAgeSignal"] = function collectAgeSignal() {
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
            const callback2 = tmp3;
            let callback = tmp7;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(closure_1_2[12]).default.getAgeSignals({ firstAgeGate: 13, secondAgeGate: 18 });
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = dependencyMap;
          let obj2 = callback2(1208);
          obj2 = { tags: null };
          obj2[0] = { source: "parental_consent_manager", step: "collect_age_signal" };
          obj2.captureException(callback, obj2);
          let obj4 = callback(500);
          let str = "android";
          if (obj4.isIOS()) {
            str = "ios";
          }
          const obj3 = { platform: null };
          obj3[0] = str;
          c5 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = obj3;
          return obj4;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp20) {
        dependencyMap = tmp20;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp20;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
const parentalConsentManager = new ParentalConsentManager();
let result = require("set").fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default parentalConsentManager;