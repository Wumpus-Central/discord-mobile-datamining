// === Module 11540: FamilyCenterModalRequestRouting ===

// Module 11540 (FamilyCenterModalRequestRouting)
import FamilyCenterConstants from "FamilyCenterConstants" /* 7062 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7063 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c5, c6;

function getConnectionPrereqTarget(teen_identity) {
  let obj3;
  let obj6;
  let tmp;
  if ("ready" in teen_identity) {
    const obj2 = { section: frozen.REQUEST, params: obj3 };
    tmp = obj2;
    obj3 = { teenIdentity: teen_identity.teen_identity };
  } else if ("invalid_link_code" in teen_identity) {
    tmp = { section: frozen.INVALID_CODE };
    const obj4 = { section: frozen.INVALID_CODE };
  } else if ("verified_teen_blocked" in teen_identity) {
    tmp = { section: frozen.MUST_BE_ADULT };
    const obj5 = { section: frozen.MUST_BE_ADULT };
  } else if ("requires_adult_verification" in teen_identity) {
    obj = { section: frozen.CONFIRM_AGE, params: obj6 };
    tmp = obj;
    obj6 = { teenIdentity: teen_identity.teen_identity };
  } else {
    tmp = obj;
  }
  return tmp;
}
let obj = function _resolveConnectionPrereqTarget() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let obj4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let closure_2;
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
            let closure_3 = tmp;
            c4 = 1;
            closure_2 = getConnectionPrereqTarget;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj4.getConnectionPrerequisites(closure_0, closure_1), done: false };
            obj4 = FamilyCenterActionCreatorsDefault;
            return obj5;
          }
        } else if (1 === tmp4) {
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
          obj = { value: closure_2(value), done: true };
          return obj;
        }
      } catch (tmp12) {
        if (0 === c4) {
          c6 = 3;
          throw tmp12;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const FamilyCenterFailureCode = FamilyCenterConstants.FamilyCenterFailureCode;
const frozen = Object.freeze({ PREREQ_LOADING: "PREREQ_LOADING", CONFIRM_AGE: "CONFIRM_AGE", VERIFYING: "VERIFYING", REQUEST: "REQUEST", SENT: "SENT", ERROR: "ERROR", INVALID_CODE: "INVALID_CODE", MUST_BE_ADULT: "MUST_BE_ADULT" });
obj = { section: frozen.ERROR, params: { failureCode: FamilyCenterFailureCode.GENERIC_ERROR } };
const result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterModalRequestRouting.tsx");

export const FamilyCenterModalRequestSections = frozen;
export { getConnectionPrereqTarget };
export const resolveConnectionPrereqTarget = function resolveConnectionPrereqTarget() {
  return obj(...arguments);
};