// discord_app/modules/safety_flows/SafetyFlowsActionCreators.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function _getCurrentTask() {
  const self = this;
  const tmp = callback(function*() {
    closure_0 = tmp4;
    obj1 = { url: null, trackedActionData: null, rejectWithError: true };
    obj1[0] = closure_1_4.SAFETY_FLOWS_TASK;
    const obj2 = { event: null };
    obj2[0] = closure_1_0(503).NetworkActionNames.USER_VERIFY;
    obj1[1] = obj2;
    closure_0 = yield v0(4713).get(obj1);
    let body = null;
    if (204 !== closure_0.status) {
      body = closure_0.body;
    }
    return body;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _completeTask() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0, body) {
      obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: true };
      obj1[0] = closure_1_4.SAFETY_FLOWS_TASK;
      obj1[1] = callback;
      const obj2 = { event: null };
      obj2[0] = callback(503).NetworkActionNames.USER_VERIFY;
      obj1[2] = obj2;
      yield v0(4713).post(obj1);
      return body.body;
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
function _resendVerificationCode() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
              const table = tmp3;
              const callback2 = tmp7;
              let constants = 1;
              let obj5 = closure_1_1(closure_1_2[2]);
              obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: true };
              obj1[0] = constants.SAFETY_FLOWS_RESEND_VERIFICATION_CODE;
              const obj2 = { flow_id: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              const obj3 = { event: null };
              obj3[0] = callback(closure_1_2[3]).NetworkActionNames.USER_VERIFY;
              obj1[2] = obj3;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj5.post(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            constants = 0;
            callback = closure_3;
            const tmp17 = new callback2(table[4])(callback);
            throw tmp17;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            c6 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            constants = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp19) {
          closure_3 = tmp19;
          if (tmp4 === constants) {
            c6 = tmp2;
            throw tmp19;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/safety_flows/SafetyFlowsActionCreators.tsx");

export const getCurrentTask = function getCurrentTask() {
  const self = this;
  const apply = _getCurrentTask.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const completeTask = function completeTask(arg0) {
  const self = this;
  const apply = _completeTask.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resendVerificationCode = function resendVerificationCode(closure_1_0) {
  const self = this;
  const apply = _resendVerificationCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};