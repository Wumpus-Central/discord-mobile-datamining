// discord_common/js/shared/MFA.tsx
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c6, c7;

function finishMFACheck() {
  return obj(...arguments);
}
let obj = function _finishMFACheck() {
  obj = _asyncToGenerator(async function (ticket) {
    let c0;
    let c1;
    let c2;
    let closure_4;
    let obj5;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (ticket === 1) {
        throw value;
      } else if (ticket === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let mfa_type;
        let data;
        let num7;
        c7 = 2;
        if (0 === c6) {
          if (ticket === 1) {
            c7 = 3;
            throw value;
          } else if (ticket === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            ticket = undefined;
            mfa_type = undefined;
            data = undefined;
            ({ ticket: c0, mfaType: c1, data: c2 } = closure_0);
            num7 = closure_1;
            if (closure_1 === undefined) {
              num7 = 2;
            }
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c6) {
          if (ticket === 1) {
            c7 = 3;
            throw value;
          } else if (ticket === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c5 = 1;
            const HTTP = closure_131_0(closure_131_1[1]).HTTP;
            const request = { url: "/mfa/finish", body: obj5, retries: num7, rejectWithError: false };
            obj5 = { ticket, mfa_type, data };
            c6 = 3;
            c7 = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (2 === c6) {
          c5 = 0;
          const body = tmp14.body;
          let self;
          if (body != null) {
            self = body.message;
          }
          if (self) {
            const _Error = Error;
            self = this;
            const self2 = this;
            const error = new Error(tmp14.body.message);
            throw error;
          } else {
            self = tmp14;
            throw tmp14;
          }
        } else if (ticket === 1) {
          c7 = 3;
          throw value;
        } else if (ticket === 2) {
          c5 = 0;
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp14) {
        if (0 === c5) {
          c7 = 3;
          throw tmp14;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _trySubmit() {
  obj = _asyncToGenerator(async function (arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let closure_1 = arg1;
    let closure_0 = closure_1;
    await finishMFACheck(closure_0);
    const token = value.token;
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      obj = { "X-Discord-MFA-Authorization": closure_1_1 };
      closure_1_0(obj, (body) => {
        body = body.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (60008 !== code) {
          let flag;
          const body2 = body.body;
          let code1;
          if (body2 != null) {
            code1 = body2.code;
          }
          if (60003 !== code1) {
            closure_0();
            flag = false;
          }
          return flag;
        }
        const error = new Error(body.body.message);
        closure_1(error);
        flag = true;
      });
    });
    return promise;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("../discord_common/js/shared/MFA.tsx");

export const BACKUP_CODE_MIN_LENGTH = 8;
export const BACKUP_CODE_MAX_LENGTH = 11;
export const TOTP_CODE_LENGTH = 6;
export const SMS_CODE_LENGTH = 6;
export { finishMFACheck };
export const trySubmit = function trySubmit() {
  return obj(...arguments);
};
