// discord_app/modules/auth/native/components/utils/useIdentityRegistrationStep.tsx
import util from "../../../../../intl/index.native.tsx";
import PhoneOrEmailUtils from "../../../../phone/PhoneOrEmailUtils.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const RegistrationUIStore = fn(15946);
({
  setRegistrationErrors: metroRequire,
  updateRegistrationOptions: closure_7,
  useRegistrationUIStore: closure_8,
} = RegistrationUIStore);
const RegistrationConstants = fn(15947);
({
  authStateToRegisterTransitionStep: closure_9,
  RegisterTransitionSteps: c10,
  RegistrationTransitionActionTypes: closure_11,
} = RegistrationConstants);
const AbortCodes = fn(1074).AbortCodes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIdentityRegistrationStep.tsx");

export const useIdentityRegistrationStep = function useIdentityRegistrationStep(REGISTER_IDENTITY, inputMode) {
  _require = REGISTER_IDENTITY;
  importDefault = inputMode;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const context = noop.useContext(require("Auth").TrackRegistrationContext);
  const tmp4 = loginEmail(noop.useState(""), 2);
  loginEmail = tmp4[0];
  noop = noop.useRef("");
  const tmp6 = loginEmail(noop.useState(""), 2);
  const first1 = tmp6[0];
  closure_7 = tmp6[1];
  const callback = noop.useCallback((arg0, current) => {
    closure_7(arg0);
    closure_5.current = current;
  }, []);
  const tmp9 = closure_8((errors) => errors.errors);
  closure_8 = tmp9;
  let items = [tmp9];
  const memo = noop.useMemo(() => {
    const intl = util.intl;
    return intl.string(util.t.F8UYVY);
  }, items);
  _require = context((sourceState) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_130_0 = sourceState;
              closure_130_1 = undefined;
              closure_130_2 = undefined;
              let authenticationErrorsFromAPIError;
              closure_130_4 = undefined;
              const sum = ref.current + c6;
              closure_130_1 = sum;
              let obj1 = { email: "Array", phone: sum };
              v3(obj1);
              closure_130_2 = closure_9(sourceState);
              ref = 1;
              const obj2 = { phone: sum };
              c6 = 2;
              c7 = 1;
              let obj3 = { value: sourceState(navigation[9]).registerPhone(obj2), done: false };
              return obj3;
            }
          } else if (1 === tmp8) {
            ref = 0;
            closure_130_5 = closure_4;
            if (closure_130_5 instanceof sourceState(navigation[10]).CaptchaCancelError) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              obj1 = sourceState(navigation[11]);
              authenticationErrorsFromAPIError = obj1.getAuthenticationErrorsFromAPIError(closure_130_5);
              first1(authenticationErrorsFromAPIError);
              const _Object = Object;
              const keys = Object.keys(authenticationErrorsFromAPIError);
              closure_130_4 = keys.filter((item) => {
                const items = ["phone"];
                return items.includes(item);
              });
              if (closure_130_4.length <= 0) {
                let tmp30 = null != authenticationErrorsFromAPIError.error_code;
                if (tmp30) {
                  tmp30 = null != authenticationErrorsFromAPIError.message;
                }
                if (tmp30) {
                  let obj4 = { step: closure_130_2, actionType: constants2.RESPONSE_ERROR, details: null };
                  obj3 = sourceState(navigation[12]);
                  let items = [obj3.getCommonErrorDetails(authenticationErrorsFromAPIError.error_code)];
                  obj4.details = items;
                  tmp3(obj4);
                }
                c7 = 3;
              }
              let obj5 = { step: closure_130_2, actionType: constants2.RESPONSE_ERROR, details: null };
              let phone = 0;
              const items1 = [];
              phone = HermesBuiltin.arraySpread(closure_130_4, 0);
              obj5 = sourceState(navigation[12]);
              items1[phone] = obj5.getCommonErrorDetails(authenticationErrorsFromAPIError.error_code);
              phone = phone + 1;
              obj5.details = items1;
              tmp3(obj5);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj6 = { step: closure_130_2, toStep: constants.PHONE_VERIFICATION, actionType: constants2.SUCCESS };
            tmp3(obj6);
            ref = 0;
            const obj7 = {
              title: null,
              description: null,
              phone: null,
              sourceState: null,
              onPhoneTokenReceived: null,
              onBail: null,
            };
            const intl = sourceState(navigation[8]).intl;
            obj7.title = intl.string(sourceState(navigation[8]).t.h7hdQh);
            const intl2 = sourceState(navigation[8]).intl;
            const obj8 = { phone: closure_130_1 };
            obj7.description = intl2.formatToPlainString(sourceState(navigation[8]).t.e5WzVa, obj8);
            obj7.phone = closure_130_1;
            obj7.sourceState = sourceState;
            obj7.onPhoneTokenReceived = function onPhoneTokenReceived(phoneToken) {
              let obj = { email: "r", phone, phoneToken };
              closure_7(obj);
              obj = {
                step: constants.PHONE_VERIFICATION,
                toStep: closure_0(navigation[14]).getNextRegistrationTransitionStep(closure_0),
                actionType: constants2.SUCCESS,
              };
              closure_3(obj);
              const obj3 = closure_0(navigation[14]);
              const nextAuthState = closure_0(navigation[14]).getNextAuthState(closure_0);
              const obj4 = closure_0(navigation[14]);
              closure_2.dispatch(closure_0(navigation[15]).StackActions.replace(nextAuthState));
            };
            obj7.onBail = function onBail() {
              c7("");
              closure_2.pop();
              sourceState();
            };
            tmp5.push(sourceState(navigation[13]).AuthStates.VERIFY_PHONE, obj7);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp55) {
          closure_4 = tmp55;
          if (tmp4 === ref) {
            c7 = tmp2;
            throw tmp55;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  let items1 = [REGISTER_IDENTITY, first1, context, navigation];
  const callback1 = noop.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  if (inputMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    let tmp13 = require("getError")("phone", tmp9);
  } else {
    tmp13 = require("getError")("email", tmp9);
  }
  closure_9 = tmp13;
  const items2 = [inputMode, first1, loginEmail, tmp13];
  const items3 = [loginEmail];
  const memo1 = obj2.useMemo(() => {
    const tmp = closure_1 === PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE ? first1 : first;
    let tmp2 = null == tmp;
    if (!tmp2) {
      tmp2 = "" === tmp;
    }
    if (!tmp2) {
      tmp2 = null != closure_9;
    }
    return tmp2;
  }, items2);
  obj = {
    loginEmail,
    setLoginEmail: tmp4[1],
    loginPhone: first1,
    updateLoginPhone: callback,
    identityErrorMessage: memo,
    registerAndVerifyPhone: callback1,
    preventSubmitIdentity: memo1,
    identityError: tmp13,
    validateEmail: obj2.useCallback(() => {
      let stringResult = null;
      if (!obj.isEmail(first)) {
        const intl = util.intl;
        stringResult = intl.string(util.t.nr0MVZ);
      }
      return stringResult;
    }, items3),
  };
  return obj;
};
