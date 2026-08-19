// === Module 8626: PhoneVerificationModal ===

// Module 8626 (PhoneVerificationModal)
import noopAll from "noop" /* 19 */;
import AddPhoneDefault from "AddPhone" /* 8628 */;
import VerifyPhoneDefault from "VerifyPhone" /* 8655 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { VerificationModalScenes } from "ME" /* 676 */;
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY" /* 8627 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/verification/native/components/PhoneVerificationModal.tsx");

export default function PhoneVerificationModal(onClose) {
  const _require = onClose;
  let obj = { headerTitle: _require(6314).getHeaderNoTitle(), headerLeft: null, render: null };
  const obj4 = _require(6314);
  obj[1] = _require(6314).getHeaderCloseButton(onClose.onClose);
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
      return arr.push(VerificationModalScenes.VERIFY_PHONE, {
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
    return jsx(AddPhoneDefault, {});
  };
  obj[VerificationModalScenes.ADD_PHONE] = obj;
  obj1 = { headerTitle: null, impressionName: null, render: null };
  const obj5 = _require(6314);
  obj1[0] = _require(6314).getHeaderNoTitle();
  obj1[1] = _require(503).ImpressionNames.USER_VERIFY_PHONE;
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
              return { value: "HermesInternal", done: "HermesInternal" };
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
      arr = arr.push(VerificationModalScenes.VERIFY_PASSWORD, obj);
    };
    return jsx(VerifyPhoneDefault, {});
  };
  obj[VerificationModalScenes.VERIFY_PHONE] = obj1;
  let obj2 = { headerTitle: null, render: null };
  const obj7 = _require(6314);
  obj2[0] = _require(6314).getHeaderNoTitle();
  obj2[1] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback2(callback(table[11]), {});
  };
  obj[VerificationModalScenes.VERIFY_PASSWORD] = obj2;
  obj[0] = obj;
  obj[1] = VerificationModalScenes.ADD_PHONE;
  const intl = _require(1236).intl;
  obj[2] = intl.string(_require(1236).t["13/7kX"]);
  return jsx(_require(6312).Navigator, { headerTitle: _require(6314).getHeaderNoTitle(), headerLeft: null, render: null });
};