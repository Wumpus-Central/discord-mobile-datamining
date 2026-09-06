// discord_app/modules/age_assurance/native/AppStoreAgeSignalReport.tsx
import isFeatureAgeGated from "../../regional_feature_config/RegionalFeatureConfigUtils.tsx";
import MIN_AGE_GATE from "AppStoreAgeSignalSupport.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../stores/UserStore.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

require = arg1;
function collectAgeSignal() {
  const self = this;
  const apply = _collectAgeSignal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _collectAgeSignal() {
  const self = this;
  const tmp = callback(function* () {
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
            obj1 = { firstAgeGate: null, secondAgeGate: null };
            obj1[0] = closure_1_0(closure_1_2[5]).MIN_AGE_GATE;
            obj1[1] = closure_1_0(closure_1_2[5]).ADULT_AGE_GATE;
            c4 = 2;
            c5 = 1;
            let obj2 = { value: null, done: false };
            obj2[0] = closure_1_0(closure_1_2[4]).default.getAgeSignals(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          callback = dependencyMap;
          obj2 = callback2(1232);
          const obj3 = { tags: null };
          obj3[0] = { source: "parental_consent_manager", step: "collect_age_signal" };
          obj2.captureException(callback, obj3);
          let obj4 = callback(1115);
          let str = "android";
          if (obj4.isIOS()) {
            str = "ios";
          }
          obj4 = { platform: null };
          obj4[0] = str;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = obj4;
          return obj5;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          c3 = 0;
          c5 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp18) {
        dependencyMap = tmp18;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp18;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _performAgeCheck() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function* (arg0) {
      dependencyMap = tmp3;
      c4 = 1;
      const result = callback(closure_1_2[8]).warmAgeSignalAttestation();
      const items = [closure_1_9()];
      const obj16 = callback(closure_1_2[8]);
      items[1] = callback(closure_1_2[8]).getAgeSignalChallenge();
      yield Promise.all(items);
      if (1 === tmp7) {
        c4 = 0;
        let constants = callback3;
        let obj2 = { tags: null };
        obj2[0] = { source: "parental_consent_manager", step: "perform_age_check" };
        callback2(1232).captureException(constants, obj2);
        constants = 3;
        const obj11 = callback2(1232);
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          constants = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          constants = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          callback2 = arg1;
          dependencyMap = callback3(callback2, 2);
          callback3 = 32;
          c4 = 5;
          let obj7 = callback(8568);
          c5 = 3;
          constants = 1;
          let obj4 = { value: null, done: false };
          obj4[0] = obj7.getAgeSignalIntegrityToken(c4, callback3);
          return obj4;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          constants = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 0;
          constants = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          c5 = arg1;
          obj4 = callback(8570);
          c5 = 4;
          constants = 1;
          const obj6 = { value: null, done: false };
          obj6[0] = obj4.submitAgeSignal(callback3, c5, callback);
          return obj6;
        }
      } else if (arg0 === 1) {
        constants = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = callback2(1242);
        obj7 = { platform: null };
        obj2 = callback(1115);
        obj7[0] = obj2.getNativePlatform();
        obj.track(constants.PARENTAL_CONSENT_CHECKED, obj7);
        c4 = 0;
      }
      c4 = 0;
      return arg1;
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _settleAppStoreAgeSignalReport() {
  const self = this;
  const tmp = callback(function* () {
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
          } else if (null != closure_1_8) {
            const items = [tmp14];
            obj1 = v0(closure_1_2[12]);
            items[1] = obj1.sleep(15000);
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = Promise.race(items);
            return obj1;
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
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c7 = false;
let c8 = null;
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReport.tsx");

export const beginAppStoreAgeSignalReport = function beginAppStoreAgeSignalReport() {
  c7 = true;
  closure_8 = null;
  let result = null != currentUser.getCurrentUser();
  if (result) {
    result = MIN_AGE_GATE.isAppStoreAgeSignalSupported();
    const obj = MIN_AGE_GATE;
  }
  if (result) {
    result = isFeatureAgeGated.shouldCollectAppStoreSignal();
    const obj2 = isFeatureAgeGated;
  }
  if (result) {
    closure_8 = (function performAgeCheck(arg0) {
      const self = this;
      const apply = closure_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(!c7);
  }
};
export const settleAppStoreAgeSignalReport = function settleAppStoreAgeSignalReport() {
  const self = this;
  const apply = _settleAppStoreAgeSignalReport.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
