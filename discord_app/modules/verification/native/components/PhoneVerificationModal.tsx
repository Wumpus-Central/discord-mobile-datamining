// === Module 6539: PhoneVerificationModal ===

// Module 6539 (PhoneVerificationModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConfirmPasswordDefault from "UserSettingsConfirmPassword" /* 6489 */;
import PhoneConstants from "PhoneConstants" /* 6540 */;
import AddPhoneDefault from "AddPhone" /* 6541 */;
import PhoneActionCreatorsDefault from "PhoneActionCreators" /* 6542 */;
import VerifyPhoneDefault from "VerifyPhone" /* 6575 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, navigation, onClose, value;

function render(reason, arg1) {
  onClose = reason;
  let closure_1 = arg1;
  let tmp2 = AddPhoneDefault;
  const merged = Object.assign(reason);
  reason = undefined;
  if (reason != null) {
    reason = reason.reason;
  }
  if (reason == null) {
    reason = onClose.reason;
  }
  let fn = null;
  if (onClose.allowDeletePhone) {
    fn = () => {
      const obj = {
        hideUnverifiedBanner: true,
        onSubmit(password) {
          reason = undefined;
          const removePhone = PhoneActionCreatorsDefault.removePhone;
          PhoneActionCreatorsDefault;
          if (closure_1_0 != null) {
            reason = closure_1_0.reason;
          }
          if (reason == null) {
            reason = closure_0.reason;
          }
          return removePhone(password, reason);
        },
        onSuccess() {
          const arr = closure_1_1(closure_1_2[8]);
          arr.pop();
        }
      };
      let arr = closure_1.push(VerificationModalScenes.VERIFY_PASSWORD, obj);
    };
  }
  return <tmp2 reason={reason} onComplete={function onComplete(phone) {
    let obj = {
      phone,
      onVerified(arg0) {
        reason = arg0;
        let obj = {
          hideUnverifiedBanner: true,
          onSubmit(password) {
            reason = undefined;
            const addPhone = PhoneActionCreatorsDefault.addPhone;
            PhoneActionCreatorsDefault;
            const tmp2 = reason;
            if (reason != null) {
              reason = reason.reason;
            }
            if (reason == null) {
              reason = reason.reason;
            }
            return addPhone(tmp2, password, reason);
          },
          onSuccess() {
            const obj = closure_1_1(closure_1_2[8]);
            obj.popWithKey(closure_1_5);
          }
        };
        closure_1.push(constants.VERIFY_PASSWORD, obj);
      }
    };
    return closure_1.push(VerificationModalScenes.VERIFY_PHONE, obj);
  }} onDeletePhone={fn} />;
}
const render2 = function render(arg0, arg1) {
  navigation = arg1;
  VerifyPhoneDefault;
  const merged = Object.assign(arg0);
  return <tmp disableKeyboardAvoidingView onVerified={function onVerified(arg0) {
    navigation = arg0;
    let obj = {
      hideUnverifiedBanner: true,
      onSubmit: function() {
        return closure_1(...arguments);
      },
      onSuccess() {
        const obj = closure_1_1(closure_1_2[8]);
        obj.popWithKey(closure_1_5);
      }
    };
    const push = navigation.push;
    const VERIFY_PASSWORD = VerificationModalScenes.VERIFY_PASSWORD;
    let closure_1 = _asyncToGenerator(async (arg0) => {
      let v3;
      const reason = arg0;
      let c2 = 0;
      let c1 = 0;
      let c4 = 0;
      return (async (arg0) => {
        let obj4;
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
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
                return { value, done: true };
              } else {
                c4 = 1;
                c2 = 2;
                c1 = 1;
                const obj5 = { value: obj4.addPhone(reason, reason, reason.reason), done: false };
                obj4 = v3(closure_2_2[7]);
                return obj5;
              }
            } else if (1 === tmp3) {
              c4 = 0;
              c1 = 3;
              return { value, done: true };
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c1 = 3;
              return { value, done: true };
            } else {
              c4 = 0;
              c1 = 3;
              return { value, done: true };
            }
          } catch (tmp10) {
            value = tmp10;
            if (0 === c4) {
              c1 = 3;
              throw tmp10;
            } else {
              c2 = 1;
            }
          }
        }
      })();
    });
    push(VERIFY_PASSWORD, obj);
  }} />;
};
const render3 = function render(arg0) {
  UserSettingsConfirmPasswordDefault;
  const merged = Object.assign(arg0);
  return <tmp />;
};
const VerificationModalScenes = Constants.VerificationModalScenes;
let closure_5 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let tmp4;
  let tmp6;
  let tmp8;
  let tmpResult;
  let tmpResult4;
  let tmpResult5;
  let tmpResult6;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] !== onClose) {
    _require = onClose;
    const obj2 = {};
    const ADD_PHONE = VerificationModalScenes.ADD_PHONE;
    const obj3 = { headerTitle: tmpResult.getHeaderNoTitle(), headerLeft: tmpResult4.getHeaderCloseButton(onClose.onClose), render };
    tmpResult = require("NavigatorHeader");
    obj2[ADD_PHONE] = obj3;
    tmpResult4 = require("NavigatorHeader");
    const VERIFY_PHONE = VerificationModalScenes.VERIFY_PHONE;
    const obj4 = { headerTitle: tmpResult5.getHeaderNoTitle(), impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_VERIFY_PHONE, render: render2 };
    obj2[VERIFY_PHONE] = obj4;
    tmpResult5 = require("NavigatorHeader");
    const VERIFY_PASSWORD = VerificationModalScenes.VERIFY_PASSWORD;
    const obj5 = { headerTitle: tmpResult6.getHeaderNoTitle(), render: render3 };
    obj2[VERIFY_PASSWORD] = obj5;
    cResult[0] = onClose;
    cResult[1] = obj2;
    tmp4 = obj2;
    tmpResult6 = require("NavigatorHeader");
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t["13/7kX"]);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const tmp11 = jsx(require("Navigator").Navigator, { screens: tmp4, initialRouteName: VerificationModalScenes.ADD_PHONE, headerBackTitle: tmp6 });
    cResult[3] = tmp4;
    cResult[4] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((onClose) => {
  let obj4;
  let obj5;
  let obj7;
  let obj9;
  _require = onClose;
  const obj2 = {};
  const obj3 = { headerTitle: obj4.getHeaderNoTitle(), headerLeft: obj5.getHeaderCloseButton(onClose.onClose), render };
  const Navigator = require("Navigator").Navigator;
  const ADD_PHONE = VerificationModalScenes.ADD_PHONE;
  obj4 = require("NavigatorHeader");
  obj5 = require("NavigatorHeader");
  obj2[ADD_PHONE] = obj3;
  const obj6 = { headerTitle: obj7.getHeaderNoTitle(), impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.USER_VERIFY_PHONE, render: render2 };
  const VERIFY_PHONE = VerificationModalScenes.VERIFY_PHONE;
  obj7 = require("NavigatorHeader");
  obj2[VERIFY_PHONE] = obj6;
  let VERIFY_PASSWORD = VerificationModalScenes.VERIFY_PASSWORD;
  const obj8 = { headerTitle: obj9.getHeaderNoTitle(), render: render3 };
  obj2[VERIFY_PASSWORD] = obj8;
  obj9 = require("NavigatorHeader");
  const intl = require("intl").intl;
  return <Navigator screens={obj2} initialRouteName={VerificationModalScenes.ADD_PHONE} headerBackTitle={intl.string(require("intl").t["13/7kX"])} />;
});
const result = size.fileFinishedImporting("modules/verification/native/components/PhoneVerificationModal.tsx");

export default tmp3;