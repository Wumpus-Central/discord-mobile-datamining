// === Module 13440: withGameOrganizationJoinFlowPending ===

// Module 13440 (withGameOrganizationJoinFlowPending)
import DispatcherDefault from "Dispatcher" /* 572 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

let closure_3 = async function _withGameOrganizationJoinFlowPending() {
  closure_1 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = code;
            const obj5 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code, pending: true };
            DispatcherDefault.dispatch(obj5);
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: closure_1(), done: false };
            return obj6;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          const obj8 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code: closure_130_0, pending: false };
          closure_131_0(closure_131_1[1]).dispatch(obj8);
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          const obj10 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code: closure_130_0, pending: false };
          closure_131_0(closure_131_1[1]).dispatch(obj10);
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          c5 = 0;
          const obj12 = { type: "GAME_ORGANIZATION_JOIN_FLOW_PENDING", code: closure_130_0, pending: false };
          closure_131_0(closure_131_1[1]).dispatch(obj12);
          c7 = 3;
          const obj13 = { value, done: true };
          return obj13;
        }
      } catch (tmp33) {
        closure_4 = tmp33;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp33;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/withGameOrganizationJoinFlowPending.tsx");

export default function withGameOrganizationJoinFlowPending() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};