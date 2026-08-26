// discord_app/modules/verification/native/components/PhoneVerificationModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import { VerificationModalScenes } from "../../../../Constants.tsx";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "../../../phone/PhoneConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import { HeaderBackImage } from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/verification/native/components/PhoneVerificationModal.tsx");

export default function PhoneVerificationModal(onClose) {
  let obj = { screens: null, initialRouteName: null, headerBackTitle: null };
  const _require = onClose;
  obj = {};
  obj = { headerTitle: require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderNoTitle(), headerLeft: null, render: null };
  const obj4 = HeaderBackImage;
  obj[1] = require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderCloseButton(onClose.onClose);
  obj[2] = function render(reason) {
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
      return arr.push(closure_2_4.VERIFY_PHONE, {
        phone,
        onVerified(arg0) {
          closure_0 = arg0;
        }
      });
    };
    let fn = null;
    if (onClose.allowDeletePhone) {
      fn = () => {

      };
    }
    obj.onDeletePhone = fn;
    return closure_1_6(closure_1_1(closure_1_2[6]), obj);
  };
  obj[VerificationModalScenes.ADD_PHONE] = obj;
  obj1 = { headerTitle: null, impressionName: null, render: null };
  const obj5 = HeaderBackImage;
  obj1[0] = require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderNoTitle();
  obj1[1] = require("../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx").ImpressionNames.USER_VERIFY_PHONE;
  obj1[2] = function render(arg0, arg1) {
    closure_0 = arg1;
    let obj = {};
    const merged = Object.assign(arg0);
    obj.disableKeyboardAvoidingView = true;
    obj.onVerified = function onVerified(arg0) {
      let arr = arg0;
      let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
      closure_1 = closure_2_3((arg0) => {
        closure_0 = arg0;
        c2 = 0;
        c1 = 0;
        c4 = 0;
        return (function*(arg0) {
          if (c1 === 2) {
            c1 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp5 === 3) {
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
              c1 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c1 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c1 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  c4 = 1;
                  let obj3 = v0(closure_2_2[7]);
                  c2 = 2;
                  c1 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj3.addPhone(reason, reason, reason.reason);
                  return obj1;
                }
              } else if (1 === tmp6) {
                c4 = 0;
                c1 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = closure_3;
                return obj2;
              } else if (arg0 === 1) {
                c1 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 0;
                c1 = 3;
                obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                c4 = 0;
                c1 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            } catch (tmp13) {
              closure_3 = tmp13;
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
      obj[1] = function() {
        const self = this;
        const apply = closure_1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj[2] = function onSuccess() {
        callback(table[8]).popWithKey(closure_5);
      };
      arr = arr.push(closure_2_4.VERIFY_PASSWORD, obj);
    };
    return closure_1_6(closure_1_1(closure_1_2[10]), obj);
  };
  obj[VerificationModalScenes.VERIFY_PHONE] = obj1;
  let obj2 = { headerTitle: null, render: null };
  const obj7 = HeaderBackImage;
  obj2[0] = require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderNoTitle();
  obj2[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(table[11]), {});
  };
  obj[VerificationModalScenes.VERIFY_PASSWORD] = obj2;
  obj[0] = obj;
  obj[1] = VerificationModalScenes.ADD_PHONE;
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl.string(require("../../../../intl/index.native.tsx").t["13/7kX"]);
  return jsx(require("../../../../design/components/Navigator/native/Navigator.native.tsx").Navigator, { headerTitle: require("../../../../design/components/Navigator/native/NavigatorHeader.native.tsx").getHeaderNoTitle(), headerLeft: null, render: null });
};