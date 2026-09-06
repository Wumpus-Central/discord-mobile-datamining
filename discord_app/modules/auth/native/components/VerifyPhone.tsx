// === Module 15974: components/VerifyPhone ===

// Module 15974 (components/VerifyPhone)
import RegistrationBailoutButtonDefault from "RegistrationBailoutButton" /* 15975 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_6 = fn(15946).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(15947);
({ authStateToRegisterTransitionStep: closure_7, RegisterTransitionSteps: closure_8, RegistrationTransitionActionTypes: closure_9 } = RegistrationConstants);
const Links = fn(1074).Links;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  phone = phone.phone;
  _require = phone;
  const onPhoneTokenReceived = phone.onPhoneTokenReceived;
  ({ onClose: dependencyMap, onBail } = phone);
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  ({ title, description, sourceState } = phone);
  const tmp = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp[1];
  [tmp3, c5] = _slicedToArray(noop.useState(null), 2);
  let tmp2 = _slicedToArray(noop.useState(null), 2);
  [tmp5, c6] = _slicedToArray(noop.useState(false), 2);
  closure_7 = noop.useRef(false);
  const context = noop.useContext(require("Auth").TrackRegistrationContext);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  onPhoneTokenReceived(15962)(closure_7(sourceState));
  const items = [context];
  const effect = noop.useEffect(() => {
    if (_undefined()) {
      const obj = { step: constants.PHONE_VERIFICATION, actionType: constants2.VIEWED };
      context(obj);
    }
  }, items);
  onPhoneTokenReceived(4992)(() => () => {
    let tmpResult;
    if (dependencyMap != null) {
      tmpResult = tmp(ref.current);
    }
    return tmpResult;
  });
  onBail(function*(arg0) {
    closure_2 = tmp3;
    v0(true);
    v0 = 1;
    if (v3()) {
      context({ step: context.PHONE_VERIFICATION, actionType: callback.SUBMITTED });
    }
    let obj4 = onPhoneTokenReceived(7045);
    yield obj4.verifyPhone(closure_0, closure_0, false);
    if (1 === tmp7) {
      v0 = 0;
      closure_129_1 = closure_3;
      v0(false);
      if (v3()) {
        context({ step: context.PHONE_VERIFICATION, actionType: callback.RESPONSE_ERROR, details: ["code"] });
      }
      const body = closure_129_1.body;
      let message;
      if (body != null) {
        message = body.message;
      }
      if (!message) {
        const intl = closure_0(1114).intl;
        obj4 = { statusPageURL: constants.STATUS };
        message = intl.format(closure_0(1114).t.aTVNes, obj4);
      }
      _undefined(message);
      v3 = 3;
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const token = value.token;
      closure_1_7.current = true;
      onPhoneTokenReceived(token);
      v0 = 0;
    }
    v0 = 0;
    return value;
  });
  const items1 = [phone, onPhoneTokenReceived, context];
  const onCodeEntered = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  _require = onBail(function*(arg0) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp4;
            _undefined(true);
            c2 = 1;
            c3 = 1;
            const obj1 = { value: onCodeEntered(closure_0), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          _undefined(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  });
  const items2 = [onCodeEntered];
  const callback1 = noop.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  onPhoneTokenReceived(7079)(callback1);
  const items3 = [onBail];
  const memo = noop.useMemo(() => {
    let tmp2 = null;
    if (null != onBail) {
      const obj = { onBail: tmp };
      tmp2 = jsx(RegistrationBailoutButtonDefault, { onBail: tmp });
    }
    return tmp2;
  }, items3);
  let obj = { title, description, error: tmp3, onCodeEntered, codeType: null, footer: null, disabled: null, loading: null, disableKeyboardAvoidingView: true };
  const tmp7 = onPhoneTokenReceived(15962);
  obj.codeType = require("CodeField").CodeType.NUMERIC;
  obj.footer = memo;
  obj.disabled = tmp5;
  obj.loading = tmp[0];
  return jsx(onPhoneTokenReceived(7080), { title, description, error: tmp3, onCodeEntered, codeType: null, footer: null, disabled: null, loading: null, disableKeyboardAvoidingView: true });
};