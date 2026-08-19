// === Module 15129: finishMFACheck ===

// Module 15129 (finishMFACheck)
import closure_2 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
function finishMFACheck() {
  const self = this;
  const apply = _finishMFACheck.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _finishMFACheck() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let num7 = tmp3;
              c2 = tmp5;
              let callback;
              let table;
              c2 = undefined;
              num7 = undefined;
              ({ ticket: c0, mfaType: c1, data: c2 } = callback);
              num7 = table;
              if (table === undefined) {
                num7 = 2;
              }
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              c5 = 1;
              const HTTP = callback(table[1]).HTTP;
              const obj2 = { url: "/mfa/finish", body: null, retries: null, rejectWithError: false };
              const obj3 = { ticket: null, mfa_type: null, data: null };
              obj3[0] = callback;
              obj3[1] = table;
              obj3[2] = c2;
              obj2[1] = obj3;
              obj2[2] = num7;
              c6 = 3;
              c7 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (2 === tmp8) {
            c5 = 0;
            body = closure_4.body;
            let message;
            if (body != null) {
              message = body.message;
            }
            if (message) {
              const _Error = Error;
              error = new Error(closure_4.body.message);
              throw error;
            } else {
              throw closure_4;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
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
    })();
    iter.next();
    return iter;
  });
  closure_4 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _trySubmit() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, token) {
      closure_2 = tmp4;
      closure_0 = token;
      yield v0(closure_0);
      token = token.token;
      const promise = new Promise((arg0, arg1) => {
        const callback = arg0;
        closure_1 = arg1;
        callback({ "X-Discord-MFA-Authorization": closure_1 }, (body) => {
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
              callback();
              let flag = false;
            }
            return flag;
          }
          error = new Error(body.body.message);
          callback2(error);
          flag = true;
        });
      });
      return promise;
    })();
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
const result = require("set").fileFinishedImporting("../discord_common/js/shared/MFA.tsx");

export const BACKUP_CODE_MIN_LENGTH = 8;
export const BACKUP_CODE_MAX_LENGTH = 11;
export const TOTP_CODE_LENGTH = 6;
export const SMS_CODE_LENGTH = 6;
export { finishMFACheck };
export const trySubmit = function trySubmit(arg0, closure_0) {
  const self = this;
  const apply = _trySubmit.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};