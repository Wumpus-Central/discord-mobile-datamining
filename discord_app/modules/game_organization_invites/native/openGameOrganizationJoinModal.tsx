// === Module 13435: openGameOrganizationJoinModal ===

// Module 13435 (openGameOrganizationJoinModal)
import checkGameOrganizationJoinEligibilityDefault from "checkGameOrganizationJoinEligibility" /* 13436 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_4 = async function _openGameOrganizationJoinModal(arg0) {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
          closure_130_1(closure_130_2[2])(closure_129_0, closure_129_1);
        }
        const obj6 = { code: closure_129_0 };
        closure_130_1(closure_130_2[3]).pushLazy(closure_130_0(closure_130_2[5])(closure_130_2[4], closure_130_2.paths), obj6);
        const obj = closure_130_1(closure_130_2[3]);
      }
    } catch (tmp24) {
      c4 = tmp;
      throw tmp24;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};