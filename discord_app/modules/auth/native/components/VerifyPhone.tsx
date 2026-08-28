// discord_app/modules/auth/native/components/VerifyPhone.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { doesRegistrationHaveIdentityType as closure_6 } from "../RegistrationUIStore.tsx";
import RegistrationTransitionActionTypes from "../../RegistrationConstants.tsx";
import { Links } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ authStateToRegisterTransitionStep: error, RegisterTransitionSteps: closure_8, RegistrationTransitionActionTypes: c9 } = RegistrationTransitionActionTypes);
const result = require("set").fileFinishedImporting("modules/auth/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  phone = phone.phone;
  let _require = phone;
  const onPhoneTokenReceived = phone.onPhoneTokenReceived;
  ({ onClose: dependencyMap, onBail } = phone);
  let callback;
  let React;
  c6 = undefined;
  let callback2;
  let context;
  callback = undefined;
  ({ title, description, sourceState } = phone);
  const tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  [tmp3, c5] = callback(React.useState(null), 2);
  let tmp2 = callback(React.useState(null), 2);
  [tmp5, c6] = callback(React.useState(false), 2);
  callback2 = React.useRef(false);
  context = React.useContext(require("Auth.tsx").TrackRegistrationContext);
  const tmp4 = callback(React.useState(false), 2);
  onPhoneTokenReceived(15484)(callback2(sourceState));
  const items = [context];
  const effect = React.useEffect(() => {
    if (_undefined()) {
      const obj = { step: null, actionType: null };
      obj[0] = context.PHONE_VERIFICATION;
      obj[1] = callback.VIEWED;
      context(obj);
    }
  }, items);
  onPhoneTokenReceived(4910)(() => () => {
    let tmpResult;
    if (closure_2 != null) {
      tmpResult = tmp(ref.current);
    }
    return tmpResult;
  });
  _require = undefined;
  _require = onBail((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, token) {
      closure_2 = tmp3;
      v0(true);
      v0 = 1;
      if (v02()) {
        obj1 = { step: null, actionType: null };
        obj1[0] = context.PHONE_VERIFICATION;
        obj1[1] = callback.SUBMITTED;
        closure_1_8(obj1);
      }
      let obj4 = onPhoneTokenReceived(closure_2_2[10]);
      yield obj4.verifyPhone(callback, token, false);
      if (1 === tmp7) {
        v0 = 0;
        closure_1 = closure_3;
        v0(false);
        if (v02()) {
          const obj3 = { step: null, actionType: null, details: null };
          obj3[0] = context.PHONE_VERIFICATION;
          obj3[1] = callback.RESPONSE_ERROR;
          obj3[2] = ["code"];
          closure_1_8(obj3);
        }
        const body = closure_1_1.body;
        let message;
        if (body != null) {
          message = body.message;
        }
        if (!message) {
          const intl = callback(closure_2_2[11]).intl;
          obj4 = { statusPageURL: null };
          obj4[0] = closure_2_10.STATUS;
          message = intl.format(callback(closure_2_2[11]).t.aTVNes, obj4);
        }
        c5(message);
        v02 = 3;
        const tmp28 = c5;
      } else if (arg0 === 1) {
        v02 = 3;
        throw token;
      } else if (arg0 !== 2) {
        token = token.token;
        closure_1_7.current = true;
        closure_1_1(token);
        v0 = 0;
      }
      v0 = 0;
      return token;
    })();
  });
  const items1 = [phone, onPhoneTokenReceived, context];
  callback = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  _require = undefined;
  _require = onBail((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              closure_1_6(true);
              c2 = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_9(closure_0);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1_6(false);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const items2 = [callback];
  const callback1 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  onPhoneTokenReceived(7749)(callback1);
  const items3 = [onBail];
  const memo = React.useMemo(() => {
    let tmp2 = null;
    if (null != onBail) {
      const obj = { onBail: null };
      obj[0] = tmp;
      tmp2 = closure_1_11(onPhoneTokenReceived(closure_1_2[13]), obj);
    }
    return tmp2;
  }, items3);
  let obj = { title, description, error: tmp3, onCodeEntered: callback, codeType: null, footer: null, disabled: null, loading: null, disableKeyboardAvoidingView: true };
  const tmp7 = onPhoneTokenReceived(15484);
  obj[4] = require("../../../phone/native/CodeField.tsx").CodeType.NUMERIC;
  obj[5] = memo;
  obj[6] = tmp5;
  obj[7] = tmp[0];
  return jsx(onPhoneTokenReceived(7750), { title, description, error: tmp3, onCodeEntered: callback, codeType: null, footer: null, disabled: null, loading: null, disableKeyboardAvoidingView: true });
};