// discord_app/modules/age_assurance/native/PlayAgeSignals.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

function _getAgeSignals() {
  const self = this;
  const tmp = callback(function*() {
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
        return { value: "T", done: null };
      }
    } else {
      try {
        v0 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            if (null == v0(table[1])) {
              const _Error = Error;
              const error = new Error("NativePlayAgeSignalsModule is not available on this platform");
              throw error;
            } else {
              table = 1;
              v0 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = tmp5(tmp6[1]).getAgeSignals();
              return obj1;
            }
            tmp5 = v0;
            tmp6 = table;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp13) {
        v0 = tmp;
        throw tmp13;
      }
    }
  });
  const _getAgeSignals = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = { VERIFIED: 0, SUPERVISED: 1, SUPERVISED_APPROVAL_PENDING: 2, SUPERVISED_APPROVAL_DENIED: 3, UNKNOWN: 4, DECLARED: 5 };
const result = require("set").fileFinishedImporting("modules/age_assurance/native/PlayAgeSignals.tsx");

export const AgeSignalsVerificationStatus = obj;
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
export const isConsideredOlderThan = function isConsideredOlderThan(outer1_0, outer1_02) {
  if (null == outer1_0.userStatus) {
    return true;
  } else {
    const userStatus = outer1_0.userStatus;
    if (obj.VERIFIED === userStatus) {
      return true;
    } else {
      if (tmp.SUPERVISED !== userStatus) {
        if (tmp.SUPERVISED_APPROVAL_PENDING !== userStatus) {
          if (tmp.SUPERVISED_APPROVAL_DENIED !== userStatus) {
            return false;
          }
        }
      }
      let tmp2 = null != outer1_0.ageLower;
      if (tmp2) {
        tmp2 = outer1_0.ageLower >= outer1_02;
      }
      return tmp2;
    }
  }
};