// _runtime/16458_getIsConsideredOlderThaniOS.js
import importDefaultResult from "asyncGeneratorStep";

let closure_0 = arg1;
closure_0 = importDefaultResult((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c2 = 0;
  return (function*(arg0, arg1) {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          isEligible = isEligible.isEligible;
          let BooleanResult = !isEligible;
          if (isEligible) {
            let lowerBound = tmp4.lowerBound;
            if (lowerBound) {
              lowerBound = tmp4.lowerBound >= tmp5;
            }
            BooleanResult = Boolean(lowerBound);
          }
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = BooleanResult;
          return obj;
        }
      } catch (tmp8) {
        c2 = tmp;
        throw tmp8;
      }
    }
  })();
});
closure_0 = importDefaultResult((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let c2 = 0;
  return (function*(arg0, arg1) {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else if (lib.isEligible) {
          const userStatus = tmp13.userStatus;
          if (lib(table[1]).PlayAgeRangeDeclarationUserStatus.VERIFIED === userStatus) {
            c2 = 3;
            return { value: true, done: true };
          } else {
            if (tmp4(tmp5[1]).PlayAgeRangeDeclarationUserStatus.SUPERVISED !== userStatus) {
              if (tmp4(tmp5[1]).PlayAgeRangeDeclarationUserStatus.SUPERVISED_APPROVAL_PENDING !== userStatus) {
                if (tmp4(tmp5[1]).PlayAgeRangeDeclarationUserStatus.SUPERVISED_APPROVAL_DENIED !== userStatus) {
                  const UNKNOWN = tmp4(tmp5[1]).PlayAgeRangeDeclarationUserStatus.UNKNOWN;
                  c2 = 3;
                  return { value: false, done: true };
                }
              }
            }
            let ageLower = tmp13.ageLower;
            if (ageLower) {
              ageLower = tmp13.ageLower >= tmp14;
            }
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = Boolean(ageLower);
            return obj;
          }
        } else {
          c2 = 3;
          return { value: true, done: true };
        }
      } catch (tmp7) {
        c2 = tmp;
        throw tmp7;
      }
    }
  })();
});

export const getIsConsideredOlderThaniOS = function getIsConsideredOlderThaniOS(arg0, arg1) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getIsConsideredOlderThanAndroid = function getIsConsideredOlderThanAndroid(closure_1, closure_0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};