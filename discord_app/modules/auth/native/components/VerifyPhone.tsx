// discord_app/modules/auth/native/components/VerifyPhone.tsx
import RegistrationBailoutButtonDefault from "RegistrationBailoutButton.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
let closure_6 = fn(16348).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(16349);
({
  authStateToRegisterTransitionStep: closure_7,
  RegisterTransitionSteps: closure_8,
  RegistrationTransitionActionTypes: closure_9,
} = RegistrationConstants);
const Links = fn(1085).Links;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/VerifyPhone.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VerifyPhone(onPhoneTokenReceived) {
      const cResult = require("c").c(23);
      ({ title, description, phone } = onPhoneTokenReceived);
      _require = phone;
      onPhoneTokenReceived = onPhoneTokenReceived.onPhoneTokenReceived;
      onClose = onPhoneTokenReceived.onClose;
      ({ onBail, sourceState } = onPhoneTokenReceived);
      let obj = require("c");
      [r10023, asyncGeneratorStep] = noop.useState(false);
      const tmp3 = _slicedToArray(noop.useState(false), 2);
      [r10029, _slicedToArray] = noop.useState(null);
      const tmp4 = _slicedToArray(noop.useState(null), 2);
      [r10034, noop] = noop.useState(false);
      closure_6 = noop.useRef(false);
      const context = noop.useContext(require("Auth").TrackRegistrationContext);
      if (cResult[0] !== sourceState) {
        const tmp9 = context(sourceState);
        cResult[0] = sourceState;
        cResult[1] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[1];
      }
      onPhoneTokenReceived(onClose[10])(tmp7);
      if (cResult[2] !== context) {
        const fn = function y() {
          if (closure_6()) {
            const obj = { step: constants.PHONE_VERIFICATION, actionType: constants2.VIEWED };
            context(obj);
          }
        };
        const items = [context];
        cResult[2] = context;
        cResult[3] = fn;
        cResult[4] = items;
        let tmp13 = items;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[3];
        tmp13 = cResult[4];
      }
      const effect = noop.useEffect(tmp12, tmp13);
      if (cResult[5] !== onClose) {
        class R {
          constructor() {
            return () => {
              let tmpResult;
              if (onClose != null) {
                tmpResult = tmp(ref.current);
              }
              return tmpResult;
            };
          }
        }
        cResult[5] = onClose;
        cResult[6] = R;
      } else {
        class R {
          constructor() {
            return () => {
              let tmpResult;
              if (onClose != null) {
                tmpResult = tmp(ref.current);
              }
              return tmpResult;
            };
          }
        }
      }
      onPhoneTokenReceived(onClose[11])(R);
      if (cResult[7] === onPhoneTokenReceived) {
        class R {
          constructor() {
            return () => {
              let tmpResult;
              if (onClose != null) {
                tmpResult = tmp(ref.current);
              }
              return tmpResult;
            };
          }
        }
      }
      _require = asyncGeneratorStep(async (arg0) => {
        closure_2 = tmp3;
        tmp44(true);
        c4 = 1;
        if (v3()) {
          context({ step: constants.PHONE_VERIFICATION, actionType: constants2.SUBMITTED });
        }
        await onPhoneTokenReceived(onClose[12]).verifyPhone(closure_0, closure_0, false);
        if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = tmp44;
          tmp44(false);
          if (v3()) {
            context({ step: constants.PHONE_VERIFICATION, actionType: constants2.RESPONSE_ERROR, details: ["code"] });
          }
          const body = closure_129_1.body;
          let message;
          if (body != null) {
            message = body.message;
          }
          if (!message) {
            const intl = closure_0(onClose[13]).intl;
            message = intl.format(closure_0(onClose[13]).t.aTVNes, { statusPageURL: constants3.STATUS });
          }
          c4(message);
          c6 = 3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const token = value.token;
          c6.current = true;
          onPhoneTokenReceived(token);
          c4 = 0;
        }
        c4 = 0;
        return value;
      });
      function t5() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[7] = onPhoneTokenReceived;
      cResult[8] = phone;
      cResult[9] = context;
      cResult[10] = t5;
      const tmp5 = _slicedToArray(noop.useState(false), 2);
    }
  : function VerifyPhone(phone) {
      phone = phone.phone;
      _require = phone;
      const onPhoneTokenReceived = phone.onPhoneTokenReceived;
      ({ onClose: dependencyMap, onBail } = phone);
      _slicedToArray = undefined;
      noop = undefined;
      c6 = undefined;
      ({ title, description, sourceState } = phone);
      [obj.loading, _slicedToArray] = noop.useState(false);
      [tmp3, c5] = _slicedToArray(noop.useState(null), 2);
      let tmp2 = _slicedToArray(noop.useState(null), 2);
      [tmp5, c6] = _slicedToArray(noop.useState(false), 2);
      closure_7 = noop.useRef(false);
      const context = noop.useContext(require("Auth").TrackRegistrationContext);
      const tmp4 = _slicedToArray(noop.useState(false), 2);
      onPhoneTokenReceived(16365)(closure_7(sourceState));
      const items = [context];
      const effect = noop.useEffect(() => {
        if (_undefined()) {
          const obj = { step: constants.PHONE_VERIFICATION, actionType: constants2.VIEWED };
          context(obj);
        }
      }, items);
      onPhoneTokenReceived(5396)(() => () => {
        let tmpResult;
        if (dependencyMap != null) {
          tmpResult = tmp(ref.current);
        }
        return tmpResult;
      });
      onBail(function* (arg0) {
        closure_2 = tmp3;
        v0(true);
        v0 = 1;
        if (v3()) {
          context({ step: context.PHONE_VERIFICATION, actionType: callback.SUBMITTED });
        }
        yield onPhoneTokenReceived(6733).verifyPhone(closure_0, closure_0, false);
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
            const intl = closure_0(1126).intl;
            message = intl.format(closure_0(1126).t.aTVNes, { statusPageURL: constants.STATUS });
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
      const onCodeEntered = noop.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items1);
      _require = onBail(function* (arg0) {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "+51" };
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp4;
                _undefined(true);
                c2 = 1;
                c3 = 1;
                const obj4 = { value: onCodeEntered(closure_0), done: false };
                return obj4;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              _undefined(false);
              c3 = 3;
              return { value: "IconComponent", done: "+51" };
            }
          } catch (tmp12) {
            c3 = tmp;
            throw tmp12;
          }
        }
      });
      const items2 = [onCodeEntered];
      const callback1 = noop.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items2);
      onPhoneTokenReceived(6767)(callback1);
      const items3 = [onBail];
      const memo = noop.useMemo(() => {
        let tmp2 = null;
        if (null != onBail) {
          const obj = { onBail: tmp };
          tmp2 = jsx(RegistrationBailoutButtonDefault, { onBail: tmp });
        }
        return tmp2;
      }, items3);
      let obj = {
        title,
        description,
        error: tmp3,
        onCodeEntered,
        codeType: null,
        footer: null,
        disabled: null,
        loading: null,
        disableKeyboardAvoidingView: true,
      };
      const tmp7 = onPhoneTokenReceived(16365);
      obj.codeType = require("CodeField").CodeType.NUMERIC;
      obj.footer = memo;
      obj.disabled = tmp5;
      return jsx(onPhoneTokenReceived(6768), {
        title,
        description,
        error: tmp3,
        onCodeEntered,
        codeType: null,
        footer: null,
        disabled: null,
        loading: null,
        disableKeyboardAvoidingView: true,
      });
    };
