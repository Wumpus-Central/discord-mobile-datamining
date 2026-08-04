// discord_app/modules/verification/ChangeEmailActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _confirmEmailChange() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0, body) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw body;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let obj5 = v0(5003);
              const obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj1[0] = outer1_4.USER_EMAIL_VERIFY_CODE;
              const obj2 = { code: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              const obj3 = { event: null };
              obj3[0] = callback(503).NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
              obj1[2] = obj3;
              dependencyMap = 1;
              v0 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj5.post(obj1);
              return obj4;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw body;
          } else if (arg0 === 2) {
            v0 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp5) {
          v0 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _confirmEmailChange = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("module_5003").fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export const sendConfirmationCode = function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = importDefault(5003);
  obj = { url: Endpoints.USER_EMAIL, trackedActionData: null, rejectWithError: false };
  obj = { event: require(503) /* encodeProperties */.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE, properties: { is_resend: flag } };
  obj[1] = obj;
  return obj.put(obj);
};
export const confirmEmailChange = function confirmEmailChange(closure_0) {
  const self = this;
  const apply = _confirmEmailChange.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};