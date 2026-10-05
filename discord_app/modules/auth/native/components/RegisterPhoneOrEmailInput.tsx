// === Module 15884: RegisterPhoneOrEmailInput ===

// Module 15884 (RegisterPhoneOrEmailInput)
import Fragment from "Fragment" /* 21 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6451 */;
import react from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 6430 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15867 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let loginPhone, navigation;

let hasOwnProperty;
let metroRequire;
({ setRegistrationErrors: hasOwnProperty, useRegistrationUIStore: metroRequire } = RegistrationUIStore);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((loginPhone) => {
  let autoFocus;
  let closure_8;
  let inputError;
  let onSubmit;
  let setLoginPhone;
  let submitBehavior;
  let tmp15;
  let tmp6;
  let tmp8;
  let tmp9;
  const tmp = loginPhone;
  let obj = loginPhone(setLoginPhone[5]);
  const cResult = obj.c(37);
  loginPhone = loginPhone.loginPhone;
  const loginEmail = loginPhone.loginEmail;
  setLoginPhone = loginPhone.setLoginPhone;
  const setLoginEmail = loginPhone.setLoginEmail;
  const inputMode = loginPhone.inputMode;
  ({ onSubmit, inputError, submitBehavior, autoFocus } = loginPhone);
  const obj2 = loginPhone(setLoginPhone[6]);
  navigation = obj2.useNavigation();
  const ref = setLoginEmail.useRef(null);
  if (autoFocus == null) {
    autoFocus = false;
  }
  if (cResult[0] !== autoFocus) {
    const obj3 = { inputRef: ref, enabled: autoFocus };
    cResult[0] = autoFocus;
    cResult[1] = obj3;
    tmp6 = obj3;
  } else {
    tmp6 = cResult[1];
  }
  loginEmail(setLoginPhone[7])(tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [inputMode];
    class E {
      constructor() {
        return inputMode.getCountryCode();
      }
    }
    cResult[2] = items;
    cResult[3] = E;
    tmp9 = E;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(setLoginPhone[8]);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor(errors) {
        return errors.errors;
      }
    }
    cResult[4] = T;
    class E {
      constructor() {
        return inputMode.getCountryCode();
      }
    }
  } else {
    class T {
      constructor(errors) {
        return errors.errors;
      }
    }
  }
  const tmp13 = ref(tmp12);
  let closure_7 = tmp13;
  if (cResult[5] !== tmp13) {
    class T {
      constructor(errors) {
        return errors.errors;
      }
    }
    cResult[5] = tmp13;
    class E {
      constructor() {
        return inputMode.getCountryCode();
      }
    }
    cResult[6] = tmp15;
  } else {
    class T {
      constructor(errors) {
        return errors.errors;
      }
    }
  }
  tmp15 = tmp14;
  if (cResult[7] === tmp14) {
    class T {
      constructor(errors) {
        return errors.errors;
      }
    }
  }
  const fn = function k(arg0, arg1) {
    if (inputMode === PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE) {
      tmp15("phone");
      setLoginPhone(arg0, arg1);
    } else {
      tmp15("email");
      setLoginEmail(arg0);
    }
  };
  cResult[7] = tmp14;
  cResult[8] = inputMode;
  cResult[9] = setLoginEmail;
  cResult[10] = setLoginPhone;
  cResult[11] = fn;
}) : ((loginPhone) => {
  let autoFocus;
  let inputError;
  let onSubmit;
  let str;
  let str2;
  let str3;
  let stringResult;
  let stringResult1;
  let submitBehavior;
  loginPhone = loginPhone.loginPhone;
  const loginEmail = loginPhone.loginEmail;
  const setLoginPhone = loginPhone.setLoginPhone;
  const setLoginEmail = loginPhone.setLoginEmail;
  const inputMode = loginPhone.inputMode;
  ({ inputError, autoFocus } = loginPhone);
  let closure_7;
  let callback;
  const tmp = loginPhone;
  ({ onSubmit, submitBehavior } = loginPhone);
  let obj = loginPhone(setLoginPhone[6]);
  navigation = obj.useNavigation();
  let ref = setLoginEmail.useRef(null);
  const obj3 = { inputRef: ref, enabled: autoFocus };
  const tmp5 = loginEmail;
  const tmp6 = loginEmail(setLoginPhone[7]);
  if (autoFocus == null) {
    autoFocus = false;
  }
  tmp6(obj3);
  const items = [inputMode];
  const tmpResult = tmp(setLoginPhone[8]);
  const stateFromStores = tmpResult.useStateFromStores(items, () => inputMode.getCountryCode());
  const code = stateFromStores.code;
  const tmp9 = ref((errors) => errors.errors);
  closure_7 = tmp9;
  const items1 = [tmp9];
  callback = obj2.useCallback((arg0) => {
    if (null != closure_7[arg0]) {
      const obj = {};
      const merged = Object.assign(closure_7);
      delete obj[tmp];
      hasOwnProperty(obj);
    }
  }, items1);
  const items2 = [inputMode, callback, setLoginPhone, setLoginEmail];
  const items3 = [navigation];
  const callback1 = obj2.useCallback((arg0, arg1) => {
    if (inputMode === PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE) {
      callback("phone");
      setLoginPhone(arg0, arg1);
    } else {
      callback("email");
      setLoginEmail(arg0);
    }
  }, items2);
  const callback2 = obj2.useCallback(() => {
    navigation.push(ConstantsIOS.AuthStates.COUNTRY_SELECT);
  }, items3);
  ref = obj2.useRef(inputMode);
  const items4 = [inputMode, loginEmail, loginPhone];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (ref.current !== inputMode) {
      ref.current = inputMode;
      if (inputMode === PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.setText(loginPhone);
        }
      } else {
        const current = ref.current;
        if (current != null) {
          current.setText(loginEmail);
        }
      }
    }
  }, items4);
  if (inputMode === tmp(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl2 = tmp(tmp2[11]).intl;
    stringResult = intl2.string(tmp(tmp2[11]).t["eJnn0+"]);
  } else {
    const intl = tmp(tmp2[11]).intl;
    stringResult = intl.string(tmp(tmp2[11]).t.dI4d4S);
  }
  if (inputMode === tmp(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl4 = tmp(tmp2[11]).intl;
    stringResult1 = intl4.string(tmp(tmp2[11]).t.wpJ1dT);
  } else {
    const intl3 = tmp(tmp2[11]).intl;
    stringResult1 = intl3.string(tmp(tmp2[11]).t.a17rBk);
  }
  const obj4 = { ref, alpha2: stateFromStores.alpha2, countryCode: code, onChange: callback1, onSubmitEditing: onSubmit, placeholder: stringResult, returnKeyType: "next", autoCapitalize: "none", accessibilityHint: stringResult1, label: stringResult, errorMessage: inputError, onPressCountrySelector: callback2, forceMode: inputMode, submitBehavior, autoComplete: str, keyboardType: str2, clearable: true, status: str3 };
  str = "email";
  const tmp16 = closure_7;
  const tmp5Result = tmp5(setLoginPhone[12]);
  if (inputMode === tmp(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "tel";
  }
  str2 = "email-address";
  if (inputMode === tmp(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "number-pad";
  }
  str3 = undefined;
  if (null != inputError) {
    str3 = "error";
  }
  return tmp16(tmp5Result, obj4);
});
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPhoneOrEmailInput.tsx");

export const RegisterPhoneOrEmailInput = tmp3;