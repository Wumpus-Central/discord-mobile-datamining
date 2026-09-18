// discord_app/modules/parent_tools/FamilyCenterModalRequestRouting.tsx
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

function getConnectionPrereqTarget(teen_identity) {
  if ("ready" in teen_identity) {
    const obj2 = { section: frozen.REQUEST, params: null };
    const obj3 = { teenIdentity: teen_identity.teen_identity };
    obj2.params = obj3;
    let tmp = obj2;
  } else if ("invalid_link_code" in teen_identity) {
    const obj4 = { section: frozen.INVALID_CODE };
    tmp = obj4;
  } else if ("verified_teen_blocked" in teen_identity) {
    const obj5 = { section: frozen.MUST_BE_ADULT };
    tmp = obj5;
  } else if ("requires_adult_verification" in teen_identity) {
    obj = { section: frozen.CONFIRM_AGE, params: null };
    const obj6 = { teenIdentity: teen_identity.teen_identity };
    obj.params = obj6;
    tmp = obj;
  } else {
    tmp = obj;
  }
  return tmp;
}
let closure_6 = async function _resolveConnectionPrereqTarget(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          c4 = 1;
          asyncGeneratorStep = getConnectionPrereqTarget;
          c5 = 2;
          c6 = 1;
          const obj5 = {
            value: FamilyCenterActionCreatorsDefault.getConnectionPrerequisites(closure_0, closure_1),
            done: false,
          };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value: closure_131_4, done: true };
        return obj6;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: asyncGeneratorStep(value), done: true };
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
};
const frozen = Object.freeze({
  PREREQ_LOADING: "PREREQ_LOADING",
  CONFIRM_AGE: "CONFIRM_AGE",
  VERIFYING: "VERIFYING",
  REQUEST: "REQUEST",
  SENT: "SENT",
  ERROR: "ERROR",
  INVALID_CODE: "INVALID_CODE",
  MUST_BE_ADULT: "MUST_BE_ADULT",
  TEEN_SCAN: "TEEN_SCAN",
});
let obj = { section: frozen.ERROR, params: { failureCode: fn(7734).FamilyCenterFailureCode.GENERIC_ERROR } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterModalRequestRouting.tsx");

export const FamilyCenterModalRequestSections = frozen;
export { getConnectionPrereqTarget };
export const resolveConnectionPrereqTarget = function resolveConnectionPrereqTarget() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
