// === Module 15293: RegisterPhoneOrEmailInput ===

// Module 15293 (RegisterPhoneOrEmailInput)
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleSetLocationMetadata" /* 8620 */;
import useRegistrationUIStore from "useRegistrationUIStore" /* 15276 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ setRegistrationErrors: c5, useRegistrationUIStore: closure_6 } = useRegistrationUIStore);
const result = require("set").fileFinishedImporting("modules/auth/native/components/RegisterPhoneOrEmailInput.tsx");

export const RegisterPhoneOrEmailInput = function RegisterPhoneOrEmailInput(loginPhone) {
  loginPhone = loginPhone.loginPhone;
  const loginEmail = loginPhone.loginEmail;
  const setLoginPhone = loginPhone.setLoginPhone;
  const setLoginEmail = loginPhone.setLoginEmail;
  const inputMode = loginPhone.inputMode;
  ({ inputError, autoFocus } = loginPhone);
  let navigation;
  let ref;
  closure_7 = undefined;
  let callback;
  closure_9 = undefined;
  ({ onSubmit, submitBehavior } = loginPhone);
  let obj = loginPhone(setLoginPhone[4]);
  navigation = obj.useNavigation();
  ref = setLoginEmail.useRef(null);
  obj = { inputRef: ref, enabled: null };
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj[1] = autoFocus;
  loginEmail(setLoginPhone[5])(obj);
  const tmp5 = loginEmail;
  const tmp6 = loginEmail(setLoginPhone[5]);
  const items = [inputMode];
  const stateFromStores = loginPhone(setLoginPhone[6]).useStateFromStores(items, () => inputMode.getCountryCode());
  const tmp9 = ref((errors) => errors.errors);
  closure_7 = tmp9;
  const items1 = [tmp9];
  callback = obj2.useCallback((arg0) => {
    if (null != table[arg0]) {
      const obj = {};
      const merged = Object.assign(tmp3);
      delete tmp2[tmp];
      navigation(obj);
    }
  }, items1);
  const items2 = [inputMode, callback, setLoginPhone, setLoginEmail];
  const items3 = [navigation];
  const callback1 = obj2.useCallback((arg0, arg1) => {
    if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
      callback("phone");
      setLoginPhone(arg0, arg1);
    } else {
      callback("email");
      setLoginEmail(arg0);
    }
  }, items2);
  const callback2 = obj2.useCallback(() => {
    navigation.push(loginPhone(setLoginPhone[8]).AuthStates.COUNTRY_SELECT);
  }, items3);
  closure_9 = obj2.useRef(inputMode);
  const items4 = [inputMode, loginEmail, loginPhone];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (ref.current !== inputMode) {
      ref.current = tmp;
      if (tmp === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
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
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl2 = tmp(tmp2[9]).intl;
    let stringResult = intl2.string(tmp(tmp2[9]).t["eJnn0+"]);
  } else {
    const intl = tmp(tmp2[9]).intl;
    stringResult = intl.string(tmp(tmp2[9]).t.dI4d4S);
  }
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl4 = tmp(tmp2[9]).intl;
    let stringResult1 = intl4.string(tmp(tmp2[9]).t.wpJ1dT);
  } else {
    const intl3 = tmp(tmp2[9]).intl;
    stringResult1 = intl3.string(tmp(tmp2[9]).t.a17rBk);
  }
  obj = { ref, alpha2: stateFromStores.alpha2, countryCode: stateFromStores.code, onChange: callback1, onSubmitEditing: onSubmit, placeholder: stringResult, returnKeyType: "next", autoCapitalize: "none", accessibilityHint: stringResult1, label: stringResult, errorMessage: inputError, onPressCountrySelector: callback2, forceMode: inputMode, submitBehavior, autoComplete: null, keyboardType: null, isClearable: true, status: null };
  const tmp16 = closure_7;
  const tmpResult = loginPhone(setLoginPhone[6]);
  let str = "email";
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "tel";
  }
  obj[14] = str;
  let str2 = "email-address";
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "number-pad";
  }
  obj[15] = str2;
  let str3;
  if (null != inputError) {
    str3 = "error";
  }
  obj[17] = str3;
  return tmp16(tmp5(setLoginPhone[10]), obj);
};