// === Module 17854: AppStoreAgeSignalReport ===

// Module 17854 (AppStoreAgeSignalReport)
import TimeUtils from "TimeUtils" /* 4785 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5635 */;
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport" /* 8710 */;
import AppStoreAgeSignalAttestation from "AppStoreAgeSignalAttestation" /* 8842 */;
import AppStoreAgeAssurance from "AppStoreAgeAssurance" /* 8845 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1372 */;

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
let closure_10 = async function _collectAgeSignal() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          c3 = 1;
          const obj6 = { firstAgeGate: AppStoreAgeSignalSupport.MIN_AGE_GATE, secondAgeGate: AppStoreAgeSignalSupport.ADULT_AGE_GATE };
          c4 = 2;
          c5 = 1;
          const obj7 = { value: AppStoreAgeAssurance.default.getAgeSignals(obj6), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_0 = closure_2;
        const obj8 = { tags: { source: "parental_consent_manager", step: "collect_age_signal" } };
        closure_129_1(closure_129_2[6]).captureException(closure_128_0, obj8);
        const obj3 = closure_129_1(closure_129_2[6]);
        let str = "android";
        if (obj5.isIOS()) {
          str = "ios";
        }
        const obj9 = { platform: str };
        c5 = 3;
        const obj10 = { value: obj9, done: true };
        return obj10;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
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
let closure_11 = async function _performAgeCheck(arg0) {
  closure_2 = tmp3;
  closure_129_0 = closure_0;
  const result = AppStoreAgeSignalAttestation.warmAgeSignalAttestation();
  const items = [collectAgeSignal(), ];
  items[1] = AppStoreAgeSignalAttestation.getAgeSignalChallenge();
  await Promise.all(items);
  if (1 === tmp7) {
    c4 = 0;
    closure_129_6 = closure_3;
    closure_130_1(closure_130_2[6]).captureException(closure_129_6, { tags: { source: "parental_consent_manager", step: "perform_age_check" } });
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
      c5 = 3;
      c6 = 1;
      return { value: closure_130_0(closure_130_2[8]).getAgeSignalIntegrityToken(closure_129_4, closure_129_3), done: false };
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
      c5 = 4;
      c6 = 1;
      return { value: closure_130_0(closure_130_2[9]).submitAgeSignal(closure_129_3, closure_129_5, closure_129_0), done: false };
    }
  } else if (arg0 === 1) {
    c6 = 3;
    throw value;
  } else if (arg0 !== 2) {
    const obj14 = { platform: null };
    obj14.platform = closure_130_0(closure_130_2[7]).getNativePlatform();
    closure_130_1(closure_130_2[10]).track(closure_130_6.PARENTAL_CONSENT_CHECKED, obj14);
    c4 = 0;
    closure_130_0(closure_130_2[7]);
    closure_130_1(closure_130_2[10]);
  }
  return value;
};
let closure_12 = async function _settleAppStoreAgeSignalReport() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != React6) {
          const items = [tmp13, TimeUtils.sleep(15000)];
          c1 = 1;
          c0 = 1;
          const obj5 = { value: Promise.race(items), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
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
    })(!tmp);
  }
  tmp = c7;
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