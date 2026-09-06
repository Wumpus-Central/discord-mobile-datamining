// discord_app/modules/verification/native/components/PhoneVerificationModal.tsx
import UserSettingsConfirmPasswordDefault from "../../../user_settings/account/native/UserSettingsConfirmPassword.tsx";
import AddPhoneDefault from "AddPhone.tsx";
import PhoneActionCreatorsDefault from "../../../phone/PhoneActionCreators.tsx";
import VerifyPhoneDefault from "VerifyPhone.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const VerificationModalScenes = fn(1074).VerificationModalScenes;
let closure_5 = fn(7043).PHONE_VERIFICATION_MODAL_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/PhoneVerificationModal.tsx");

export default function PhoneVerificationModal(onClose) {
  let obj = { screens: null, initialRouteName: null, headerBackTitle: null };
  _require = onClose;
  obj = {};
  obj = { headerTitle: require("NavigatorHeader").getHeaderNoTitle(), headerLeft: null, render: null };
  const obj4 = require("NavigatorHeader");
  obj.headerLeft = require("NavigatorHeader").getHeaderCloseButton(onClose.onClose);
  obj.render = function render(reason, arg1) {
    onClose = reason;
    closure_1 = arg1;
    const obj = {};
    const merged = Object.assign(reason);
    reason = undefined;
    if (reason != null) {
      reason = reason.reason;
    }
    if (reason == null) {
      reason = onClose.reason;
    }
    obj.reason = reason;
    obj.onComplete = function onComplete(phone) {
      return closure_1.push(VerificationModalScenes.VERIFY_PHONE, {
        phone,
        onVerified(arg0) {
          reason = arg0;
          closure_1.push(constants.VERIFY_PASSWORD, {
            hideUnverifiedBanner: true,
            onSubmit(password) {
              reason = undefined;
              if (reason != null) {
                reason = reason.reason;
              }
              if (reason == null) {
                reason = reason.reason;
              }
              return PhoneActionCreatorsDefault.addPhone(reason, password, reason);
            },
            onSuccess() {
              closure_1_1(closure_1_2[8]).popWithKey(closure_1_5);
            },
          });
        },
      });
    };
    let fn = null;
    if (onClose.allowDeletePhone) {
      fn = () => {
        closure_1.push(VerificationModalScenes.VERIFY_PASSWORD, {
          hideUnverifiedBanner: true,
          onSubmit(password) {
            reason = undefined;
            if (closure_1_0 != null) {
              reason = closure_1_0.reason;
            }
            if (reason == null) {
              reason = closure_0.reason;
            }
            return PhoneActionCreatorsDefault.removePhone(password, reason);
          },
          onSuccess() {
            let arr = closure_1_1(closure_1_2[8]);
            arr = arr.pop();
          },
        });
      };
    }
    obj.onDeletePhone = fn;
    return jsx(AddPhoneDefault, {});
  };
  obj[VerificationModalScenes.ADD_PHONE] = obj;
  let obj1 = { headerTitle: null, impressionName: null, render: null };
  const obj5 = require("NavigatorHeader");
  obj1.headerTitle = require("NavigatorHeader").getHeaderNoTitle();
  obj1.impressionName = require("discord_common/AnalyticsUtils").ImpressionNames.USER_VERIFY_PHONE;
  obj1.render = function render(arg0, arg1) {
    closure_0 = arg1;
    let obj = {};
    const merged = Object.assign(arg0);
    obj.disableKeyboardAvoidingView = true;
    obj.onVerified = function onVerified(arg0) {
      closure_0 = arg0;
      let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
      closure_1 = asyncGeneratorStep(async (arg0) => {
        const reason = arg0;
        c2 = 0;
        c1 = 0;
        c4 = 0;
        return (async (arg0, value) => {
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp5 === 3) {
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
              c1 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  c4 = 1;
                  let obj3 = v3(7045);
                  c2 = 2;
                  c1 = 1;
                  const obj1 = { value: obj3.addPhone(reason, reason, reason.reason), done: false };
                  return obj1;
                }
              } else if (1 === tmp6) {
                c4 = 0;
                c1 = 3;
                const obj2 = { value, done: true };
                return obj2;
              } else if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c1 = 3;
                obj3 = { value, done: true };
                return obj3;
              } else {
                c4 = 0;
                c1 = 3;
                obj = { value, done: true };
                return obj;
              }
            } catch (tmp13) {
              value = tmp13;
              if (tmp3 === c4) {
                c1 = tmp2;
                throw tmp13;
              } else {
                c2 = tmp;
              }
            }
          }
        })();
      });
      obj.onSubmit = function () {
        const self = this;
        const apply = closure_1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.onSuccess = function onSuccess() {
        closure_1(4763).popWithKey(closure_1_5);
      };
      closure_0.push(VerificationModalScenes.VERIFY_PASSWORD, obj);
    };
    return jsx(VerifyPhoneDefault, {});
  };
  obj[VerificationModalScenes.VERIFY_PHONE] = obj1;
  let obj2 = { headerTitle: null, render: null };
  const obj7 = require("NavigatorHeader");
  obj2.headerTitle = require("NavigatorHeader").getHeaderNoTitle();
  obj2.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(UserSettingsConfirmPasswordDefault, {});
  };
  obj[VerificationModalScenes.VERIFY_PASSWORD] = obj2;
  obj.screens = obj;
  obj.initialRouteName = VerificationModalScenes.ADD_PHONE;
  const intl = require("util").intl;
  obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  return jsx(require("Navigator").Navigator, {
    headerTitle: require("NavigatorHeader").getHeaderNoTitle(),
    headerLeft: null,
    render: null,
  });
}
