// === Module 17460: AppStoreAgeSignalReport ===

// Module 17460 (AppStoreAgeSignalReport)
import TimeUtils from "TimeUtils" /* 4589 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 8450 */;
import AppStoreAgeSignalAttestation from "AppStoreAgeSignalAttestation" /* 8568 */;
import AppStoreAgeAssurance from "AppStoreAgeAssurance" /* 8571 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function collectAgeSignal() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _collectAgeSignal(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          c3 = 1;
          const obj1 = { firstAgeGate: AppStoreAgeSignalSupport.MIN_AGE_GATE, secondAgeGate: AppStoreAgeSignalSupport.ADULT_AGE_GATE };
          c4 = 2;
          c5 = 1;
          let obj2 = { value: AppStoreAgeAssurance.default.getAgeSignals(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        obj2 = closure_129_1(closure_129_2[6]);
        const obj3 = { tags: { source: "parental_consent_manager", step: "collect_age_signal" } };
        obj2.captureException(closure_128_0, obj3);
        let obj4 = closure_129_0(closure_129_2[7]);
        let str = "android";
        if (obj4.isIOS()) {
          str = "ios";
        }
        obj4 = { platform: str };
        c5 = 3;
        const obj5 = { value: obj4, done: true };
        return obj5;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp18) {
      closure_2 = tmp18;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp18;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_11 = async function _performAgeCheck(arg0, value) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const result = AppStoreAgeSignalAttestation.warmAgeSignalAttestation();
  const items = [collectAgeSignal(), ];
  items[1] = AppStoreAgeSignalAttestation.getAgeSignalChallenge();
  await Promise.all(items);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_6 = closure_3;
    let obj2 = { tags: { source: "parental_consent_manager", step: "perform_age_check" } };
    closure_130_1(closure_130_2[6]).captureException(closure_129_6, obj2);
    c6 = 3;
    closure_130_1(closure_130_2[6]);
  } else if (2 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_1 = value;
      closure_129_2 = closure_130_3(closure_129_1, 2);
      closure_129_3 = closure_129_2[0];
      closure_129_4 = closure_129_2[1];
      let obj7 = closure_130_0(closure_130_2[8]);
      c5 = 3;
      c6 = 1;
      let obj4 = { value: obj7.getAgeSignalIntegrityToken(closure_129_4, closure_129_3), done: false };
      return obj4;
    }
  } else if (3 === tmp7) {
    if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_5 = value;
      obj4 = closure_130_0(closure_130_2[9]);
      c5 = 4;
      c6 = 1;
      return { value: obj4.submitAgeSignal(closure_129_3, closure_129_5, closure_129_0), done: false };
    }
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    obj7 = { platform: null };
    obj2 = closure_130_0(closure_130_2[7]);
    obj7.platform = obj2.getNativePlatform();
    closure_130_1(closure_130_2[10]).track(closure_130_6.PARENTAL_CONSENT_CHECKED, obj7);
    c4 = 0;
    closure_130_1(closure_130_2[10]);
  }
  return value;
};
let closure_12 = async function _settleAppStoreAgeSignalReport(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else if (null != React6) {
          const items = [tmp13, ];
          let obj1 = TimeUtils;
          items[1] = obj1.sleep(15000);
          c1 = 1;
          c0 = 1;
          obj1 = { value: Promise.race(items), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
let c7 = false;
let closure_8 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalReport.tsx");

export const beginAppStoreAgeSignalReport = function beginAppStoreAgeSignalReport() {
  c7 = true;
  closure_8 = null;
  let result = null != UserStore.getCurrentUser();
  if (result) {
    result = AppStoreAgeSignalSupport.isAppStoreAgeSignalSupported();
  }
  if (result) {
    result = RegionalFeatureConfigUtils.shouldCollectAppStoreSignal();
  }
  if (result) {
    closure_8 = (function performAgeCheck() {
      const self = this;
      const apply = closure_1_11.apply;
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
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};