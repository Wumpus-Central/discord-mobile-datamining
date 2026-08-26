// discord_app/modules/age_assurance/native/PlayAgeSignals.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function _getAgeSignals() {
  const self = this;
  const tmp = callback(function*() {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (null == v0(closure_1_2[1])) {
              const _Error = Error;
              error = new Error("NativePlayAgeSignalsModule is not available on this platform");
              throw error;
            } else {
              (function applyFakeAgeSignalsScenarioFromExperiment() {
                if (null != v1(table[1])) {
                  const fakePlayAgeSignalsConfig = v3(tmp2[2]).getFakePlayAgeSignalsConfig("PlayAgeSignals.getAgeSignals");
                  ({ enabled, scenario } = fakePlayAgeSignalsConfig);
                  const obj = v3(tmp2[2]);
                  let str2 = "";
                  if (enabled) {
                    str2 = scenario;
                  }
                  const result = v1(tmp2[1]).setFakeAgeSignalsScenario(str2);
                  const tmpResult = v1(tmp2[1]);
                }
              })();
              v0 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = tmp5(tmp6[1]).getAgeSignals();
              return obj1;
            }
            tmp5 = v0;
            tmp6 = closure_1_2;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp14) {
        c0 = tmp;
        throw tmp14;
      }
    }
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/age_assurance/native/PlayAgeSignals.tsx");

export const AgeSignalsVerificationStatus = { VERIFIED: 0, SUPERVISED: 1, SUPERVISED_APPROVAL_PENDING: 2, SUPERVISED_APPROVAL_DENIED: 3, UNKNOWN: 4, DECLARED: 5 };
export const getAgeSignals = function getAgeSignals() {
  const self = this;
  const apply = _getAgeSignals.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};