import importDefaultResult from "module_16380";
import { Platform } from "get ActivityIndicator";
import { NitroModules } from "module_3987";

let closure_0 = arg1;
function _getAppleDeclaredAgeRangeStatus() {
  const self = this;
  const tmp = importDefaultResult(function*() {
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
            const ageRangeThresholdManager = v0(table[3]).ageRangeThresholdManager;
            const thresholds = ageRangeThresholdManager.getThresholds();
            table = 1;
            v0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_3.requestDeclaredAgeRange(thresholds[0], thresholds[1], thresholds[2]);
            return obj1;
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
      } catch (tmp9) {
        v0 = tmp;
        throw tmp9;
      }
    }
  });
  const _getAppleDeclaredAgeRangeStatus = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getAndroidPlayAgeRangeStatus() {
  const self = this;
  const apply = _getAndroidPlayAgeRangeStatus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getAndroidPlayAgeRangeStatus() {
  const self = this;
  const tmp = importDefaultResult(function*() {
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
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 1;
            c0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_3.getPlayAgeRangeDeclaration();
            return obj1;
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
      } catch (tmp6) {
        c0 = tmp;
        throw tmp6;
      }
    }
  });
  const _getAndroidPlayAgeRangeStatus = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = NitroModules.createHybridObject("PlayAgeRangeDeclaration");
closure_0 = importDefaultResult((arg0) => {
  let closure_0 = arg0;
  let c3 = 0;
  let c4 = 0;
  return (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_2 = tmp5;
            let closure_1 = tmp2;
            closure_1 = undefined;
            c3 = 1;
            c4 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_5();
            return obj1;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_1 = arg1;
          obj = callback(outer1_1[4]);
          c4 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = obj.getIsConsideredOlderThanAndroid(closure_1, callback);
          return obj3;
        }
      } catch (tmp14) {
        c4 = tmp;
        throw tmp14;
      }
    }
  })();
});

export const getAppleDeclaredAgeRangeStatus = function getAppleDeclaredAgeRangeStatus() {
  const self = this;
  const apply = _getAppleDeclaredAgeRangeStatus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { getAndroidPlayAgeRangeStatus };
export const setAgeRangeThresholds = (arg0) => {
  const ageRangeThresholdManager = callback(16378).ageRangeThresholdManager;
  const result = ageRangeThresholdManager.setAgeRangeThresholds(arg0);
};
export const getIsConsideredOlderThan = function getIsConsideredOlderThan(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const PlayAgeRangeDeclarationUserStatus = require("module_16380").PlayAgeRangeDeclarationUserStatus;
export const PlayAgeRangeDeclarationUserStatusString = require("module_16380").PlayAgeRangeDeclarationUserStatusString;