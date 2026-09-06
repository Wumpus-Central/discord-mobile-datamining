// discord_app/modules/verification/native/ChangeEmailUtils.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import UserSettingsAccountActionCreatorsAll from "../../../actions/UserSettingsAccountActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_6 = async function _saveEmail(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_1;
          closure_131_1 = closure_2;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          c5 = 1;
          c6 = 1;
          const obj1 = {
            value: UserSettingsAccountActionCreatorsAll.saveAccountChanges(closure_0, { close: false }),
            done: false,
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_131_2 = value;
        if (!closure_131_2.ok) {
          const body = closure_131_2.body;
          let username;
          if (body != null) {
            username = body.username;
          }
          if (null != username) {
            obj = closure_132_0(closure_132_2[3]);
            const result = obj.showInvalidUsernameToast();
          }
          const body2 = closure_131_2.body;
          let email;
          if (body2 != null) {
            email = body2.email;
          }
          if (null != email) {
            closure_132_4(closure_132_5.EMAIL, closure_131_2.body.email[0]);
            closure_131_3 = closure_131_0.getState().routes.length;
            closure_131_4 = closure_131_1(closure_132_0(closure_132_2[4]).VerificationModalScenes.ENTER_EMAIL);
            if (-1 !== closure_131_4) {
              closure_131_0.pop(closure_131_3 - closure_131_4 - 1);
            } else {
              const replaced = closure_131_0.replace(
                closure_132_0(closure_132_2[4]).VerificationModalScenes.ENTER_EMAIL,
              );
            }
            c6 = 3;
          } else {
            const body3 = closure_131_2.body;
            let email_token;
            if (body3 != null) {
              email_token = body3.email_token;
            }
            if (null != email_token) {
              closure_132_4(closure_132_5.EMAIL_TOKEN, closure_131_2.body.email_token[0]);
              closure_131_5 = closure_131_0.getState().routes.length;
              closure_131_6 = closure_131_1(
                closure_132_0(closure_132_2[4]).VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE,
              );
              if (-1 === closure_131_6) {
                const replaced1 = closure_131_0.replace(
                  closure_132_0(closure_132_2[4]).VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE,
                );
              }
            }
            closure_131_0.pop(closure_131_5 - closure_131_6 - 1);
          }
        }
        c6 = 3;
      }
    } catch (tmp53) {
      c6 = tmp;
      throw tmp53;
    }
  }
};
const ChangeEmailStore = fn(5623);
({ setChangeEmailError: closure_4, ChangeEmailFields: hasOwnProperty } = ChangeEmailStore);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/ChangeEmailUtils.tsx");

export const saveEmail = function saveEmail() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const finishChangeEmailFlow = function finishChangeEmailFlow(str, email) {
  const replaced = str.replace(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_COMPLETE, { email });
};
export const finishVerifyEmailFlow = function finishVerifyEmailFlow(getState, fn) {
  const tmp3 = fn(ConstantsIOS.VerificationModalScenes.RESEND_EMAIL);
  if (-1 !== tmp3) {
    getState.pop(getState.getState().routes.length - tmp3);
  } else {
    const replaced = getState.replace(ConstantsIOS.VerificationModalScenes.RESEND_EMAIL);
  }
};
