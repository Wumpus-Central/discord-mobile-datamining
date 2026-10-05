// === Module 8256: PlayAgeSignals ===

// Module 8256 (PlayAgeSignals)
import react_nativeDefault from "react-native" /* 8257 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c0, c1;

let obj = function _getAgeSignals() {
  obj = _asyncToGenerator(async function() {
    let tmp4Result;
    function applyFakeAgeSignalsScenarioFromExperiment() {
      let enabled;
      let scenario;
      if (null != closure_1_1(closure_1_2[1])) {
        obj = closure_1_0(closure_1_2[2]);
        const fakePlayAgeSignalsConfig = obj.getFakePlayAgeSignalsConfig("PlayAgeSignals.getAgeSignals");
        ({ enabled, scenario } = fakePlayAgeSignalsConfig);
        let str2 = "";
        const setFakeAgeSignalsScenario = closure_1_1(closure_1_2[1]).setFakeAgeSignalsScenario;
        closure_1_1(closure_1_2[1]);
        if (enabled) {
          str2 = scenario;
        }
        const result = setFakeAgeSignalsScenario(str2);
      }
    }
    if (c0 === 2) {
      c0 = 3;
      let str2 = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else if (null == react_nativeDefault) {
            const _Error = Error;
            const self = this;
            const str = "NativePlayAgeSignalsModule is not available on this platform";
            const self2 = this;
            const error = new Error("NativePlayAgeSignalsModule is not available on this platform");
            throw error;
          } else {
            applyFakeAgeSignalsScenarioFromExperiment();
            c1 = 1;
            c0 = 1;
            const obj4 = { value: tmp4Result.getAgeSignals(), done: false };
            tmp4Result = react_nativeDefault;
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp11) {
        c0 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/age_assurance/native/PlayAgeSignals.tsx");

export const AgeSignalsStatus = { UNSPECIFIED: 0, SHARED: 1, NOT_SHARED: 2, VERIFICATION_REQUIRED: 3 };
export const AgeRangeSource = { UNSPECIFIED: 0, TIER_A: 1, TIER_B: 2, TIER_C: 3, TIER_D: 4 };
export const SignificantChangeStatus = { UNSPECIFIED: 0, APPROVED: 1, PENDING: 2, DECLINED: 3 };
export const getAgeSignals = function getAgeSignals() {
  return obj(...arguments);
};