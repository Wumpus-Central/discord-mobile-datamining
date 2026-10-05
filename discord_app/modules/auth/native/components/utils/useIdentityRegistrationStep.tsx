// === Module 15877: useIdentityRegistrationStep ===

// Module 15877 (useIdentityRegistrationStep)
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6451 */;
import ValidationUtilsDefault from "ValidationUtils" /* 8052 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15867 */;
import RegistrationConstants from "RegistrationConstants" /* 15868 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_5, closure_8, importDefault, navigation, phone, ref, step;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ setRegistrationErrors: metroRequire, updateRegistrationOptions: metroImportDefault, useRegistrationUIStore: metroImportAll } = RegistrationUIStore);
({ authStateToRegisterTransitionStep: c9, RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: unpackModuleId } = RegistrationConstants);
const AbortCodes = Constants.AbortCodes;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_4;
  let closure_6;
  let context;
  let first;
  let obj3;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(21);
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  const tmp2 = context;
  context = first.useContext(require("Auth").TrackRegistrationContext);
  [_asyncToGenerator] = first.useState("");
  _slicedToArray = first.useRef("");
  [first, closure_6] = first.useState("");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0, current) {
        closure_6(arg0);
        closure_4.current = current;
      }
    }
    cResult[0] = R;
  } else {
    class R {
      constructor(arg0, current) {
        closure_6(arg0);
        closure_4.current = current;
      }
    }
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor(errors) {
        return errors.errors;
      }
    }
    cResult[1] = F;
  } else {
    class F {
      constructor(errors) {
        return errors.errors;
      }
    }
  }
  const tmp11 = closure_8(F);
  if (tmp11.error_code === AbortCodes.PHONE_CARRIER_TYPE_NOT_MOBILE) {
    class F {
      constructor(errors) {
        return errors.errors;
      }
    }
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(errors) {
          return errors.errors;
        }
      }
      let stringResult = obj3.string(tmp(tmp2[10]).t.F8UYVY);
      cResult[2] = stringResult;
    } else {
      class F {
        constructor(errors) {
          return errors.errors;
        }
      }
    }
  } else {
    class F {
      constructor(errors) {
        return errors.errors;
      }
    }
  }
  if (cResult[3] === arg0) {
    class F {
      constructor(errors) {
        return errors.errors;
      }
    }
  }
  _require = _asyncToGenerator(async (sourceState) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0) => {
      let intl;
      let intl2;
      let items;
      let items1;
      let obj13;
      let obj14;
      if (c7 === 2) {
        c7 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp51;
        try {
          let found;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = undefined;
              tmp51 = undefined;
              found = undefined;
              const sum = tmp51.current + c5;
              phone = sum;
              const obj7 = { email: "Array", phone: sum };
              closure_2_7(obj7);
              step = closure_2_9(sourceState);
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj8 = { phone: sum };
              const obj9 = { value: obj14.registerPhone(obj8), done: false };
              obj14 = sourceState(context[11]);
              return obj9;
            }
          } else if (1 === tmp5) {
            c5 = 0;
            closure_3 = tmp51;
            found = closure_3;
            if (closure_3 instanceof sourceState(context[12]).CaptchaCancelError) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              let obj3 = sourceState(context[13]);
              tmp51 = obj3.getAuthenticationErrorsFromAPIError(closure_3);
              closure_2_6(tmp51);
              const _Object = Object;
              const keys = Object.keys(tmp51);
              found = keys.filter((item) => {
                const items = ["phone"];
                return items.includes(item);
              });
              if (found.length > 0) {
                if (null != tmp51.error_code) {
                  found = { step, actionType: constants2.RESPONSE_ERROR, details: items };
                  items = [];
                  phone = HermesBuiltin.arraySpread(items, found, 0);
                  const obj5 = sourceState(context[14]);
                  items[phone] = obj5.getCommonErrorDetails(tmp51.error_code);
                  phone = phone + 1;
                  found(found);
                }
                c7 = 3;
                return { value: undefined, done: true };
              }
              const tmp26 = null != tmp51.error_code && null != tmp51.message;
              if (tmp26) {
                found = { step, actionType: constants2.RESPONSE_ERROR, details: items1 };
                let obj4 = sourceState(context[14]);
                items1 = [obj4.getCommonErrorDetails(tmp51.error_code)];
                found(found);
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const obj11 = { step, toStep: constants.PHONE_VERIFICATION, actionType: constants2.SUCCESS };
            found(obj11);
            c5 = 0;
            const push = phone.push;
            const obj12 = {
              title: intl.string(sourceState(context[10]).t.h7hdQh),
              description: intl2.formatToPlainString(sourceState(context[10]).t.e5WzVa, obj13),
              phone,
              sourceState,
              onPhoneTokenReceived(phoneToken) {
                      let obj3;
                      const obj = { email: "r", phone, phoneToken };
                      closure_3_7(obj);
                      const obj2 = { step: constants.PHONE_VERIFICATION, toStep: obj3.getNextRegistrationTransitionStep(closure_0), actionType: constants2.SUCCESS };
                      obj3 = closure_0(context[16]);
                      found(obj2);
                      const obj4 = closure_0(context[16]);
                      const nextAuthState = obj4.getNextAuthState(closure_0);
                      const dispatch = phone.dispatch;
                      const str = closure_0(context[17]).StackActions;
                      dispatch(str.replace(nextAuthState));
                    },
              onBail() {
                      c6("");
                      phone.pop();
                      sourceState();
                    }
            };
            const VERIFY_PHONE = sourceState(context[15]).AuthStates.VERIFY_PHONE;
            intl = sourceState(context[10]).intl;
            intl2 = sourceState(context[10]).intl;
            obj13 = { phone };
            push(VERIFY_PHONE, obj12);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp51) {
          if (0 === c5) {
            c7 = 3;
            throw tmp51;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[3] = arg0;
  cResult[4] = first;
  cResult[5] = navigation;
  cResult[6] = context;
  cResult[7] = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let loginEmail;
  let tmp14;
  _require = arg0;
  importDefault = arg1;
  let tmp = navigation;
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = react;
  const context = react.useContext(require("Auth").TrackRegistrationContext);
  const tmp4 = loginEmail(react.useState(""), 2);
  loginEmail = tmp4[0];
  const tmp6 = tmp4[1];
  react = react.useRef("");
  const tmp7 = loginEmail(react.useState(""), 2);
  const first1 = tmp7[0];
  let closure_7 = tmp7[1];
  const callback = react.useCallback((arg0, current) => {
    closure_7(arg0);
    closure_5.current = current;
  }, []);
  const tmp10 = closure_8((errors) => errors.errors);
  closure_8 = tmp10;
  let items = [tmp10];
  const memo = react.useMemo(() => {
    const intl = intl3.intl;
    return intl.string(intl3.t.F8UYVY);
  }, items);
  const useCallback = react.useCallback;
  _require = context((sourceState) => {
    let closure_3;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      let intl;
      let intl2;
      let items;
      let items1;
      let obj13;
      let obj14;
      if (c7 === 2) {
        c7 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let found;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              tmp = undefined;
              found = undefined;
              const sum = ref.current + c6;
              phone = sum;
              const obj7 = { email: "Array", phone: sum };
              closure_2_7(obj7);
              step = closure_2_9(sourceState);
              ref = 1;
              c6 = 2;
              c7 = 1;
              const obj8 = { phone: sum };
              const obj9 = { value: obj14.registerPhone(obj8), done: false };
              obj14 = sourceState(navigation[11]);
              return obj9;
            }
          } else if (1 === tmp5) {
            ref = 0;
            closure_5 = closure_4;
            found = closure_5;
            if (closure_5 instanceof sourceState(navigation[12]).CaptchaCancelError) {
              c7 = 3;
              return { value: "IconComponent", done: null };
            } else {
              let obj3 = sourceState(navigation[13]);
              tmp = obj3.getAuthenticationErrorsFromAPIError(closure_5);
              first1(tmp);
              const _Object = Object;
              const keys = Object.keys(tmp);
              found = keys.filter((item) => {
                const items = ["phone"];
                return items.includes(item);
              });
              if (found.length > 0) {
                if (null != tmp.error_code) {
                  found = { step, actionType: constants2.RESPONSE_ERROR, details: items };
                  items = [];
                  phone = HermesBuiltin.arraySpread(items, found, 0);
                  const obj5 = sourceState(navigation[14]);
                  items[phone] = obj5.getCommonErrorDetails(tmp.error_code);
                  phone = phone + 1;
                  tmp(found);
                }
                c7 = 3;
                return { value: undefined, done: true };
              }
              const tmp26 = null != tmp.error_code && null != tmp.message;
              if (tmp26) {
                found = { step, actionType: constants2.RESPONSE_ERROR, details: items1 };
                let obj4 = sourceState(navigation[14]);
                items1 = [obj4.getCommonErrorDetails(tmp.error_code)];
                tmp(found);
              }
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
            const obj11 = { step, toStep: constants.PHONE_VERIFICATION, actionType: constants2.SUCCESS };
            tmp(obj11);
            ref = 0;
            const push = found.push;
            const obj12 = {
              title: intl.string(sourceState(navigation[10]).t.h7hdQh),
              description: intl2.formatToPlainString(sourceState(navigation[10]).t.e5WzVa, obj13),
              phone,
              sourceState,
              onPhoneTokenReceived(phoneToken) {
                      let obj3;
                      const obj = { email: "r", phone, phoneToken };
                      closure_3_7(obj);
                      const obj2 = { step: constants.PHONE_VERIFICATION, toStep: obj3.getNextRegistrationTransitionStep(closure_0), actionType: constants2.SUCCESS };
                      obj3 = closure_0(navigation[16]);
                      closure_3(obj2);
                      const obj4 = closure_0(navigation[16]);
                      const nextAuthState = obj4.getNextAuthState(closure_0);
                      const dispatch = found.dispatch;
                      const str = closure_0(navigation[17]).StackActions;
                      dispatch(str.replace(nextAuthState));
                    },
              onBail() {
                      c7("");
                      found.pop();
                      sourceState();
                    }
            };
            const VERIFY_PHONE = sourceState(navigation[15]).AuthStates.VERIFY_PHONE;
            intl = sourceState(navigation[10]).intl;
            intl2 = sourceState(navigation[10]).intl;
            obj13 = { phone };
            push(VERIFY_PHONE, obj12);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp51) {
          closure_4 = tmp51;
          if (0 === ref) {
            c7 = 3;
            throw tmp51;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  let items1 = [arg0, first1, context, navigation];
  const callback1 = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  if (arg1 === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    tmp14 = require("getError")("phone", tmp10);
  } else {
    let str = "email";
    tmp14 = require("getError")("email", tmp10);
  }
  let closure_9 = tmp14;
  const items2 = [arg1, first1, loginEmail, tmp14];
  const items3 = [loginEmail];
  const memo1 = obj2.useMemo(() => {
    const tmp = closure_1 === PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE ? first1 : first;
    return null == tmp || "" === tmp || null != closure_9;
  }, items2);
  let obj3 = {
    loginEmail,
    setLoginEmail: tmp6,
    loginPhone: first1,
    updateLoginPhone: callback,
    identityErrorMessage: memo,
    registerAndVerifyPhone: callback1,
    preventSubmitIdentity: memo1,
    identityError: tmp14,
    validateEmail: obj2.useCallback(() => {
      let stringResult = null;
      const obj = ValidationUtilsDefault;
      if (!obj.isEmail(first)) {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.nr0MVZ);
      }
      return stringResult;
    }, items3)
  };
  return obj3;
});
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIdentityRegistrationStep.tsx");

export const useIdentityRegistrationStep = tmp4;