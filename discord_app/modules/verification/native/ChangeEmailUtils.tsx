// discord_app/modules/verification/native/ChangeEmailUtils.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import UserSettingsAccountActionCreatorsAll from "../../../actions/UserSettingsAccountActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import ChangeEmailStore from "../ChangeEmailStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3;

let closure_4;
let hasOwnProperty;
let obj = function _saveEmail() {
  obj = _asyncToGenerator(async (arg0, arg1, value) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj7;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let length;
          let closure_6;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_0 = closure_1;
              closure_1 = value;
              value = undefined;
              closure_4 = undefined;
              length = undefined;
              closure_6 = undefined;
              c5 = 1;
              c6 = 1;
              const obj4 = { value: obj7.saveAccountChanges(closure_0, { close: false }), done: false };
              obj7 = UserSettingsAccountActionCreatorsAll;
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            if (!value.ok) {
              const body = value.body;
              let username;
              if (body != null) {
                username = body.username;
              }
              if (null != username) {
                obj = closure_132_0(closure_132_2[3]);
                const result = obj.showInvalidUsernameToast();
              }
              const body2 = value.body;
              let email;
              if (body2 != null) {
                email = body2.email;
              }
              if (null != email) {
                closure_132_4(closure_132_5.EMAIL, value.body.email[0]);
                length = closure_0.getState().routes.length;
                closure_4 = closure_1(closure_132_0(closure_132_2[4]).VerificationModalScenes.ENTER_EMAIL);
                if (-1 !== closure_4) {
                  closure_0.pop(length - closure_4 - 1);
                } else {
                  const replaced = closure_0.replace(
                    closure_132_0(closure_132_2[4]).VerificationModalScenes.ENTER_EMAIL,
                  );
                }
                c6 = 3;
                return { value: null, done: true };
              } else {
                const body3 = value.body;
                let email_token;
                if (body3 != null) {
                  email_token = body3.email_token;
                }
                if (null != email_token) {
                  closure_132_4(closure_132_5.EMAIL_TOKEN, value.body.email_token[0]);
                  length = closure_0.getState().routes.length;
                  closure_6 = closure_1(
                    closure_132_0(closure_132_2[4]).VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE,
                  );
                  if (-1 !== closure_6) {
                    closure_0.pop(length - closure_6 - 1);
                  } else {
                    const replaced1 = closure_0.replace(
                      closure_132_0(closure_132_2[4]).VerificationModalScenes.CONFIRM_EMAIL_CHANGE_CODE,
                    );
                  }
                }
              }
            }
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp51) {
          c6 = 3;
          throw tmp51;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ setChangeEmailError: closure_4, ChangeEmailFields: hasOwnProperty } = ChangeEmailStore);
let result = size.fileFinishedImporting("modules/verification/native/ChangeEmailUtils.tsx");

export const saveEmail = function saveEmail() {
  return obj(...arguments);
};
export const finishChangeEmailFlow = function finishChangeEmailFlow(str, email) {
  obj = { email };
  const replaced = str.replace(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_COMPLETE, obj);
};
export const finishVerifyEmailFlow = function finishVerifyEmailFlow(getState, fn) {
  const length = getState.getState().routes.length;
  const tmp3 = fn(ConstantsIOS.VerificationModalScenes.RESEND_EMAIL);
  if (-1 !== tmp3) {
    getState.pop(length - tmp3);
  } else {
    const replaced = getState.replace(ConstantsIOS.VerificationModalScenes.RESEND_EMAIL);
  }
};
