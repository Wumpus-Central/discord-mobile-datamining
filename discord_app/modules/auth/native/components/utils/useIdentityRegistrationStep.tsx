// discord_app/modules/auth/native/components/utils/useIdentityRegistrationStep.tsx
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import set from "set";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AbortCodes } from "ME";

let c10;
let c9;
let closure_6;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ setRegistrationErrors: closure_6, updateRegistrationOptions: error, useRegistrationUIStore: metroImportAll } = useRegistrationUIStore);
({ authStateToRegisterTransitionStep: c9, RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: unpackModuleId } = RegistrationTransitionActionTypes);
const result = require("noop").fileFinishedImporting("modules/auth/native/components/utils/useIdentityRegistrationStep.tsx");

export const useIdentityRegistrationStep = function useIdentityRegistrationStep(REGISTER_IDENTITY, inputMode) {
  let _require = REGISTER_IDENTITY;
  const importDefault = inputMode;
  let obj = _require(navigation[6]);
  navigation = obj.useNavigation();
  let context = React.useContext(_require(navigation[7]).TrackRegistrationContext);
  const tmp4 = first(React.useState(""), 2);
  first = tmp4[0];
  React = React.useRef("");
  const tmp6 = first(React.useState(""), 2);
  const first1 = tmp6[0];
  let closure_7 = tmp6[1];
  let callback = React.useCallback((arg0, current) => {
    callback2(arg0);
    set.current = current;
  }, []);
  const tmp9 = callback((errors) => errors.errors);
  callback = tmp9;
  let items = [tmp9];
  _require = undefined;
  const memo = React.useMemo(() => {
    const intl = callback(navigation[8]).intl;
    return intl.string(callback(navigation[8]).t.F8UYVY);
  }, items);
  _require = context((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let error_code = tmp3;
              let closure_2 = tmp5;
              let closure_1;
              closure_2 = undefined;
              error_code = undefined;
              let c4;
              const sum = ref.current + c6;
              closure_1 = sum;
              let obj1 = { email: "Array", phone: 0 };
              obj1[1] = sum;
              v0(obj1);
              closure_2 = callback2(callback);
              ref = 1;
              const obj2 = { phone: null };
              obj2[0] = sum;
              c6 = 2;
              c7 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = callback(navigation[9]).registerPhone(obj2);
              return obj3;
            }
          } else if (1 === tmp8) {
            ref = 0;
            ref = c4;
            if (ref instanceof callback(navigation[10]).CaptchaCancelError) {
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              obj1 = callback(navigation[11]);
              const context = obj1.getAuthenticationErrorsFromAPIError(set);
              first1(context);
              const _Object = Object;
              const keys = Object.keys(context);
              const first = keys.filter((arg0) => {
                const items = ["phone"];
                return items.includes(arg0);
              });
              if (first.length <= 0) {
                let tmp30 = null != context.error_code;
                if (tmp30) {
                  tmp30 = null != context.message;
                }
                if (tmp30) {
                  let obj4 = { step: null, actionType: null, details: null };
                  obj4[0] = closure_2;
                  obj4[1] = outer2_11.RESPONSE_ERROR;
                  obj3 = callback(navigation[12]);
                  let items = [obj3.getCommonErrorDetails(error_code.error_code)];
                  obj4[2] = items;
                  outer1_3(obj4);
                }
                c7 = 3;
              }
              let obj5 = { step: null, actionType: null, details: null };
              obj5[0] = navigation;
              obj5[1] = outer2_11.RESPONSE_ERROR;
              closure_1 = 0;
              const items1 = [];
              closure_1 = HermesBuiltin.arraySpread(first, 0);
              obj5 = callback(navigation[12]);
              items1[closure_1] = obj5.getCommonErrorDetails(context.error_code);
              closure_1 = closure_1 + 1;
              obj5[2] = items1;
              outer1_3(obj5);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            ref = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj6 = { step: null, toStep: null, actionType: null };
            obj6[0] = closure_2;
            obj6[1] = outer2_10.PHONE_VERIFICATION;
            obj6[2] = outer2_11.SUCCESS;
            outer1_3(obj6);
            ref = 0;
            const obj7 = { title: null, description: null, phone: null, sourceState: null, onPhoneTokenReceived: null, onBail: null };
            const intl = callback(navigation[8]).intl;
            obj7[0] = intl.string(callback(navigation[8]).t.h7hdQh);
            const intl2 = callback(navigation[8]).intl;
            const obj8 = { phone: null };
            obj8[0] = closure_1;
            obj7[1] = intl2.formatToPlainString(callback(navigation[8]).t.e5WzVa, obj8);
            obj7[2] = closure_1;
            obj7[3] = callback;
            obj7[4] = function onPhoneTokenReceived(arg0) {
              let obj = { email: "r", phone: "PX_16", phoneToken: "TRANSPARENT" };
              obj[1] = closure_1;
              obj[2] = arg0;
              v3(obj);
              obj = { step: outer2_10.PHONE_VERIFICATION, toStep: null, actionType: null };
              obj[1] = callback(outer2_2[14]).getNextRegistrationTransitionStep(callback);
              obj[2] = outer2_11.SUCCESS;
              _undefined(obj);
              const obj3 = callback(outer2_2[14]);
              const nextAuthState = callback(outer2_2[14]).getNextAuthState(callback);
              const obj4 = callback(outer2_2[14]);
              arr.dispatch(callback(outer2_2[15]).StackActions.replace(nextAuthState));
            };
            obj7[5] = function onBail(arg0) {
              v3("");
              callback();
            };
            outer1_2.push(callback(navigation[13]).AuthStates.VERIFY_PHONE, obj7);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp55) {
          c4 = tmp55;
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
  const callback1 = React.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  if (inputMode === _require(navigation[16]).PhoneOrEmailSelectorForceMode.PHONE) {
    let tmp13 = importDefault(tmp[17])("phone", tmp9);
  } else {
    tmp13 = importDefault(tmp[17])("email", tmp9);
  }
  let closure_9 = tmp13;
  const items2 = [inputMode, first1, first, tmp13];
  const items3 = [first];
  const memo1 = obj2.useMemo(() => {
    const tmp = closure_1 === callback(navigation[16]).PhoneOrEmailSelectorForceMode.PHONE ? first1 : first;
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
    loginEmail: first,
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
        const intl = callback(tmp[8]).intl;
        stringResult = intl.string(callback(tmp[8]).t.nr0MVZ);
      }
      return stringResult;
    }, items3)
  };
  return obj;
};