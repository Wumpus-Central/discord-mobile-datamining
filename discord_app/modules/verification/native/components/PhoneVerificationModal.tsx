// discord_app/modules/verification/native/components/PhoneVerificationModal.tsx
import HeaderBackImage from "HeaderBackImage";
import "noop";
import { VerificationModalScenes } from "ME";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/verification/native/components/PhoneVerificationModal.tsx");

export default function PhoneVerificationModal(onClose) {
  let obj = { screens: null, initialRouteName: null, headerBackTitle: null };
  const _require = onClose;
  obj = {};
  obj = { headerTitle: null, headerLeft: null, render: null };
  obj[0] = _require(5238).getHeaderNoTitle();
  const obj4 = _require(5238);
  obj[1] = _require(5238).getHeaderCloseButton(onClose.onClose);
  obj[2] = function render(reason) {
    const onClose = reason;
    let closure_1 = arg1;
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
      return arr.push(outer2_4.VERIFY_PHONE, {
        phone,
        onVerified(arg0) {
          let closure_0 = arg0;
        }
      });
    };
    let fn = null;
    if (onClose.allowDeletePhone) {
      fn = () => {

      };
    }
    obj.onDeletePhone = fn;
    return outer1_6(outer1_1(outer1_2[6]), obj);
  };
  obj[VerificationModalScenes.ADD_PHONE] = obj;
  let obj1 = { headerTitle: null, impressionName: null, render: null };
  const obj5 = _require(5238);
  obj1[0] = _require(5238).getHeaderNoTitle();
  obj1[1] = _require(503).ImpressionNames.USER_VERIFY_PHONE;
  obj1[2] = function render(arg0, arg1) {
    let closure_0 = arg1;
    let obj = {};
    const merged = Object.assign(arg0);
    obj.disableKeyboardAvoidingView = true;
    obj.onVerified = function onVerified(arg0) {
      let arr = arg0;
      let obj = { hideUnverifiedBanner: true, onSubmit: null, onSuccess: null };
      let closure_1 = outer2_3((arg0) => {
        let closure_0 = arg0;
        let c2 = 0;
        let c1 = 0;
        let c4 = 0;
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
                  let c4 = 1;
                  let obj3 = v0(outer2_2[7]);
                  c2 = 2;
                  c1 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = obj3.addPhone(reason, reason, reason.reason);
                  return obj1;
                }
              } else if (1 === tmp6) {
                c4 = 0;
                c1 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = HeaderBackImage;
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
              HeaderBackImage = tmp13;
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
      arr = arr.push(outer2_4.VERIFY_PASSWORD, obj);
    };
    return outer1_6(outer1_1(outer1_2[10]), obj);
  };
  obj[VerificationModalScenes.VERIFY_PHONE] = obj1;
  let obj2 = { headerTitle: null, render: null };
  const obj7 = _require(5238);
  obj2[0] = _require(5238).getHeaderNoTitle();
  obj2[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(table[11]), {});
  };
  obj[VerificationModalScenes.VERIFY_PASSWORD] = obj2;
  obj[0] = obj;
  obj[1] = VerificationModalScenes.ADD_PHONE;
  const intl = _require(1236).intl;
  obj[2] = intl.string(_require(1236).t["13/7kX"]);
  return jsx(_require(5665).Navigator, { headerTitle: null, headerLeft: null, render: null });
};