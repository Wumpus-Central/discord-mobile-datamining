// === Module 14065: openGameOrganizationJoinModal ===

// Module 14065 (openGameOrganizationJoinModal)
import checkGameOrganizationJoinEligibilityDefault from "checkGameOrganizationJoinEligibility" /* 14066 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _openGameOrganizationJoinModal(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: checkGameOrganizationJoinEligibilityDefault(closure_0), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_129_1 = value;
        if ("noop" === closure_129_1) {
          c4 = 3;
        } else if ("eligible" !== closure_129_1) {
          closure_130_1(closure_130_2[3])(closure_129_0, closure_129_1);
        }
        const obj6 = { code: closure_129_0 };
        closure_130_1(closure_130_2[4]).pushLazy(closure_130_0(closure_130_2[6])(closure_130_2[5], closure_130_2.paths), obj6, closure_130_4);
        const obj = closure_130_1(closure_130_2[4]);
      }
    } catch (tmp25) {
      c4 = tmp;
      throw tmp25;
    }
  }
};
let closure_4 = fn(12369).GAME_ORGANIZATION_JOIN_MODAL_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};