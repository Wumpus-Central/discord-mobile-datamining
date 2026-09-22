// discord_app/modules/auth/native/components/utils/useIdentityRegistrationStep.tsx
import util from "../../../../../intl/index.native.tsx";
import PhoneOrEmailUtils from "../../../../phone/PhoneOrEmailUtils.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const RegistrationUIStore = fn(16288);
({
  setRegistrationErrors: metroRequire,
  updateRegistrationOptions: closure_7,
  useRegistrationUIStore: closure_8,
} = RegistrationUIStore);
const RegistrationConstants = fn(16289);
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
  navigation = require("useNavigation").useNavigation();
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
          let obj3 = { value, done: true };
          return obj3;
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_130_0 = sourceState;
              closure_130_1 = undefined;
              closure_130_2 = undefined;
              let authenticationErrorsFromAPIError;
              closure_130_4 = undefined;
              const sum = ref.current + c6;
              closure_130_1 = sum;
              const obj7 = { email: "Array", phone: sum };
              v3(obj7);
              closure_130_2 = closure_9(sourceState);
              ref = 1;
              const obj8 = { phone: sum };
              c6 = 2;
              c7 = 1;
              const obj9 = { value: sourceState(navigation[9]).registerPhone(obj8), done: false };
              return obj9;
            }
          } else if (1 === tmp8) {
            ref = 0;
            closure_130_5 = closure_4;
            if (closure_130_5 instanceof sourceState(navigation[10]).CaptchaCancelError) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              authenticationErrorsFromAPIError = sourceState(navigation[11]).getAuthenticationErrorsFromAPIError(
                closure_130_5,
              );
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
                  const obj10 = { step: closure_130_2, actionType: constants2.RESPONSE_ERROR, details: null };
                  let items = [
                    sourceState(navigation[12]).getCommonErrorDetails(authenticationErrorsFromAPIError.error_code),
                  ];
                  obj10.details = items;
                  tmp3(obj10);
                  let obj4 = sourceState(navigation[12]);
                }
                c7 = 3;
              }
              const obj11 = { step: closure_130_2, actionType: constants2.RESPONSE_ERROR, details: null };
              let phone = 0;
              const items1 = [];
              phone = HermesBuiltin.arraySpread(closure_130_4, 0);
              let obj2 = sourceState(navigation[11]);
              items1[phone] = sourceState(navigation[12]).getCommonErrorDetails(
                authenticationErrorsFromAPIError.error_code,
              );
              phone = phone + 1;
              obj11.details = items1;
              tmp3(obj11);
              const obj6 = sourceState(navigation[12]);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            ref = 0;
            c7 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const obj12 = { step: closure_130_2, toStep: constants.PHONE_VERIFICATION, actionType: constants2.SUCCESS };
            tmp3(obj12);
            ref = 0;
            const obj13 = {
              title: null,
              description: null,
              phone: null,
              sourceState: null,
              onPhoneTokenReceived: null,
              onBail: null,
            };
            const intl = sourceState(navigation[8]).intl;
            obj13.title = intl.string(sourceState(navigation[8]).t.h7hdQh);
            const intl2 = sourceState(navigation[8]).intl;
            const obj15 = { phone: closure_130_1 };
            obj13.description = intl2.formatToPlainString(sourceState(navigation[8]).t.e5WzVa, obj15);
            obj13.phone = closure_130_1;
            obj13.sourceState = sourceState;
            obj13.onPhoneTokenReceived = function onPhoneTokenReceived(phoneToken) {
              const obj = { email: "r", phone, phoneToken };
              closure_7(obj);
              const obj2 = {
                step: constants.PHONE_VERIFICATION,
                toStep: closure_0(navigation[14]).getNextRegistrationTransitionStep(closure_0),
                actionType: constants2.SUCCESS,
              };
              closure_3(obj2);
              const obj3 = closure_0(navigation[14]);
              const nextAuthState = closure_0(navigation[14]).getNextAuthState(closure_0);
              const obj4 = closure_0(navigation[14]);
              closure_2.dispatch(closure_0(navigation[15]).StackActions.replace(nextAuthState));
            };
            obj13.onBail = function onBail() {
              c7("");
              closure_2.pop();
              sourceState();
            };
            tmp5.push(sourceState(navigation[13]).AuthStates.VERIFY_PHONE, obj13);
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
  let obj = require("useNavigation");
  return {
    loginEmail,
    setLoginEmail: tmp4[1],
    loginPhone: first1,
    updateLoginPhone: callback,
    identityErrorMessage: memo,
    registerAndVerifyPhone: callback1,
    preventSubmitIdentity: memo1,
    identityError: tmp13,
    validateEmail: noop.useCallback(() => {
      let stringResult = null;
      if (!obj.isEmail(first)) {
        const intl = util.intl;
        stringResult = intl.string(util.t.nr0MVZ);
      }
      return stringResult;
    }, items3),
  };
};
