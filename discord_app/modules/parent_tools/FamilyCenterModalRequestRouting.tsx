// discord_app/modules/parent_tools/FamilyCenterModalRequestRouting.tsx
import closure_2 from "../../../_runtime/00005_asyncGeneratorStep.js";

function getConnectionPrereqTarget(teen_identity) {
  if ("ready" in teen_identity) {
    obj = { section: null, params: null };
    obj[0] = frozen.REQUEST;
    obj = { teenIdentity: null };
    obj[0] = teen_identity.teen_identity;
    obj[1] = obj;
    let tmp = obj;
  } else if ("invalid_link_code" in teen_identity) {
    obj1 = { section: null };
    obj1[0] = frozen.INVALID_CODE;
    tmp = obj1;
  } else if ("verified_teen_blocked" in teen_identity) {
    const obj2 = { section: null };
    obj2[0] = frozen.MUST_BE_ADULT;
    tmp = obj2;
  } else if ("requires_adult_verification" in teen_identity) {
    obj = { section: null, params: null };
    obj[0] = frozen.CONFIRM_AGE;
    const obj3 = { teenIdentity: null };
    obj3[0] = teen_identity.teen_identity;
    obj[1] = obj3;
    tmp = obj;
  } else {
    tmp = obj;
  }
  return tmp;
}
function _resolveConnectionPrereqTarget() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              c4 = 1;
              const callback2 = c5;
              let obj3 = callback(table[2]);
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.getConnectionPrerequisites(callback, table);
              return obj1;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = c4;
            return obj2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = callback2(arg1);
            return obj;
          }
        } catch (tmp15) {
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp15;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const frozen = Object.freeze({ PREREQ_LOADING: "PREREQ_LOADING", CONFIRM_AGE: "CONFIRM_AGE", VERIFYING: "VERIFYING", REQUEST: "REQUEST", SENT: "SENT", ERROR: "ERROR", INVALID_CODE: "INVALID_CODE", MUST_BE_ADULT: "MUST_BE_ADULT", TEEN_SCAN: "TEEN_SCAN" });
obj = { section: frozen.ERROR, params: obj };
obj = { failureCode: require("items").FamilyCenterFailureCode.GENERIC_ERROR };
const result = require("set").fileFinishedImporting("modules/parent_tools/FamilyCenterModalRequestRouting.tsx");

export const FamilyCenterModalRequestSections = frozen;
export { getConnectionPrereqTarget };
export const resolveConnectionPrereqTarget = function resolveConnectionPrereqTarget(closure_1_0, closure_1_1) {
  const self = this;
  const apply = _resolveConnectionPrereqTarget.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};