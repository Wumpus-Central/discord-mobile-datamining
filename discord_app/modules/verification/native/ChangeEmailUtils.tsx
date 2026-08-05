// discord_app/modules/verification/native/ChangeEmailUtils.tsx
import set from "set";
import ChangeEmailFields from "ChangeEmailFields";
import { keys } from "../../../ConstantsIOS.tsx";

let c4;
let c5;
const require = arg1;
function _saveEmail() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          if (0 === length) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let callback2 = tmp5;
              length = tmp2;
              const store = callback;
              callback = closure_2;
              closure_2 = undefined;
              length = undefined;
              callback2 = undefined;
              length = undefined;
              c6 = undefined;
              length = 1;
              c6 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(closure_2[2]).saveAccountChanges(store, { close: false });
              return obj1;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_2 = arg1;
            if (!closure_2.ok) {
              const body = closure_2.body;
              let username;
              if (body != null) {
                username = body.username;
              }
              if (null != username) {
                obj = store(closure_2[3]);
                const result = obj.showInvalidUsernameToast();
              }
              const body2 = closure_2.body;
              let email;
              if (body2 != null) {
                email = body2.email;
              }
              if (null != email) {
                callback2(length.EMAIL, closure_2.body.email[0]);
                length = store.getState().routes.length;
                callback2 = callback(store(closure_2[4]).VerificationModalScenes.ENTER_EMAIL);
                if (-1 !== callback2) {
                  store.pop(length - callback2 - 1);
                } else {
                  const replaced = store.replace(store(closure_2[4]).VerificationModalScenes.ENTER_EMAIL);
                }
                c6 = 3;
              } else {
                const body3 = closure_2.body;
                let email_token;
                if (body3 != null) {
                  email_token = body3.email_token;
                }
                if (null != email_token) {
                  callback2(length.EMAIL_TOKEN, closure_2.body.email_token[0]);
                  length = store.getState().routes.length;
                  c6 = callback(store(closure_2[4]).VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE);
                  if (-1 === c6) {
                    const replaced1 = store.replace(store(closure_2[4]).VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE);
                  }
                }
                store.pop(length - c6 - 1);
              }
            }
            c6 = 3;
          }
        } catch (tmp53) {
          c6 = tmp;
          throw tmp53;
        }
      }
    })();
  });
  const _saveEmail = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ setChangeEmailError: c4, ChangeEmailFields: c5 } = ChangeEmailFields);
let result = require("saveProfileAndAccountRequest").fileFinishedImporting("modules/verification/native/ChangeEmailUtils.tsx");

export const saveEmail = function saveEmail(arg0, c2, outer1_7) {
  const self = this;
  const apply = _saveEmail.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishChangeEmailFlow = function finishChangeEmailFlow(closure_2, closure_4) {
  const replaced = closure_2.replace(keys /* keys */.VerificationModalScenes.CHANGE_EMAIL_COMPLETE, { email: closure_4 });
};
export const finishVerifyEmailFlow = function finishVerifyEmailFlow(closure_2, closure_7) {
  const tmp3 = closure_7(keys /* keys */.VerificationModalScenes.RESEND_EMAIL);
  if (-1 !== tmp3) {
    closure_2.pop(closure_2.getState().routes.length - tmp3);
  } else {
    const replaced = closure_2.replace(keys /* keys */.VerificationModalScenes.RESEND_EMAIL);
  }
};