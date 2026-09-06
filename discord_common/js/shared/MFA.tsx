// discord_common/js/shared/MFA.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
function finishMFACheck() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _finishMFACheck(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          ({ ticket: closure_130_0, mfaType: closure_130_1, data: closure_130_2 } = closure_0);
          let num7 = closure_1;
          if (closure_1 === undefined) {
            num7 = 2;
          }
          closure_130_3 = num7;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_1[1]).HTTP;
          const request = { url: "/mfa/finish", body: null, retries: null, rejectWithError: false };
          const obj2 = { ticket: closure_130_0, mfa_type: closure_130_1, data: closure_130_2 };
          request.body = obj2;
          request.retries = closure_130_3;
          c6 = 3;
          c7 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else if (2 === tmp8) {
        c5 = 0;
        closure_130_4 = closure_4;
        const body = closure_130_4.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        if (message) {
          const _Error = Error;
          const error = new Error(closure_130_4.body.message);
          throw error;
        } else {
          throw closure_130_4;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c5 = 0;
        c7 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp22) {
      closure_4 = tmp22;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp22;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_5 = async function _trySubmit() {
  closure_2 = tmp4;
  closure_130_0 = closure_1;
  await finishMFACheck(closure_0);
  const token = value.token;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_1_0({ "X-Discord-MFA-Authorization": closure_1_1 }, (body) => {
      body = body.body;
      let code;
      if (body != null) {
        code = body.code;
      }
      if (60008 !== code) {
        const body2 = body.body;
        let code1;
        if (body2 != null) {
          code1 = body2.code;
        }
        if (60003 !== code1) {
          closure_0();
          let flag = false;
        }
        return flag;
      }
      const error = new Error(body.body.message);
      closure_1(error);
      flag = true;
    });
  });
};
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/MFA.tsx");

export const BACKUP_CODE_MIN_LENGTH = 8;
export const BACKUP_CODE_MAX_LENGTH = 11;
export const TOTP_CODE_LENGTH = 6;
export const SMS_CODE_LENGTH = 6;
export { finishMFACheck };
export const trySubmit = function trySubmit() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
