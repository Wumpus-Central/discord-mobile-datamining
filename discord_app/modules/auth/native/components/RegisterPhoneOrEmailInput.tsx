// discord_app/modules/auth/native/components/RegisterPhoneOrEmailInput.tsx
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import PhoneOrEmailUtils from "../../../phone/PhoneOrEmailUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PhoneStore from "../../../phone/PhoneStore.tsx";

require = fn;
const RegistrationUIStore = fn(16281);
({ setRegistrationErrors: hasOwnProperty, useRegistrationUIStore: metroRequire } = RegistrationUIStore);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPhoneOrEmailInput.tsx");

export const RegisterPhoneOrEmailInput = ReactCompilerGating.isReactCompilerEnabled()
  ? function RegisterPhoneOrEmailInput(loginPhone) {
      const cResult = loginPhone(setLoginPhone[5]).c(37);
      loginPhone = loginPhone.loginPhone;
      const loginEmail = loginPhone.loginEmail;
      setLoginPhone = loginPhone.setLoginPhone;
      const setLoginEmail = loginPhone.setLoginEmail;
      const inputMode = loginPhone.inputMode;
      ({ onSubmit, inputError, submitBehavior, autoFocus } = loginPhone);
      let obj = loginPhone(setLoginPhone[5]);
      const tmp = loginPhone;
      const navigation = loginPhone(setLoginPhone[6]).useNavigation();
      const ref = setLoginEmail.useRef(null);
      if (autoFocus == null) {
        autoFocus = false;
      }
      if (cResult[0] !== autoFocus) {
        const obj3 = { inputRef: ref, enabled: autoFocus };
        cResult[0] = autoFocus;
        cResult[1] = obj3;
        let tmp6 = obj3;
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
        let tmp9 = E;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const obj2 = loginPhone(setLoginPhone[6]);
      const stateFromStores = tmp(setLoginPhone[8]).useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return loginPhone.errors;
          }
        }
        cResult[4] = H;
        class E {
          constructor() {
            return inputMode.getCountryCode();
          }
        }
      } else {
        class H {
          constructor(arg0) {
            return loginPhone.errors;
          }
        }
      }
      const tmp13 = ref(tmp12);
      closure_7 = tmp13;
      if (cResult[5] !== tmp13) {
        class H {
          constructor(arg0) {
            return loginPhone.errors;
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
        class H {
          constructor(arg0) {
            return loginPhone.errors;
          }
        }
      }
      if (cResult[7] === tmp14) {
        class H {
          constructor(arg0) {
            return loginPhone.errors;
          }
        }
      }
      class L {
        constructor(arg0, arg1) {
          if (inputMode === closure_0(closure_2[9]).PhoneOrEmailSelectorForceMode.PHONE) {
            tmp5 = arg1;
            tmp6 = closure_8;
            str2 = "phone";
            tmp7 = closure_8("phone");
            tmp8 = setLoginPhone;
            tmp9 = setLoginPhone(loginPhone, arg1);
          } else {
            tmp = closure_8;
            str = "email";
            tmp2 = closure_8("email");
            tmp3 = setLoginEmail;
            tmp4 = setLoginEmail(loginPhone);
          }
          return;
        }
      }
      cResult[7] = tmp14;
      cResult[8] = inputMode;
      cResult[9] = setLoginEmail;
      cResult[10] = setLoginPhone;
      cResult[11] = L;
    }
  : function RegisterPhoneOrEmailInput(loginPhone) {
      loginPhone = loginPhone.loginPhone;
      const loginEmail = loginPhone.loginEmail;
      const setLoginPhone = loginPhone.setLoginPhone;
      const setLoginEmail = loginPhone.setLoginEmail;
      const inputMode = loginPhone.inputMode;
      ({ inputError, autoFocus } = loginPhone);
      closure_7 = undefined;
      let callback;
      ({ onSubmit, submitBehavior } = loginPhone);
      const navigation = loginPhone(setLoginPhone[6]).useNavigation();
      let ref = setLoginEmail.useRef(null);
      const obj3 = { inputRef: ref, enabled: null };
      let obj = loginPhone(setLoginPhone[6]);
      const tmp5 = loginEmail;
      if (autoFocus == null) {
        autoFocus = false;
      }
      obj3.enabled = autoFocus;
      loginEmail(setLoginPhone[7])(obj3);
      const tmp6 = loginEmail(setLoginPhone[7]);
      const items = [inputMode];
      const stateFromStores = loginPhone(setLoginPhone[8]).useStateFromStores(items, () => inputMode.getCountryCode());
      const tmp9 = ref((errors) => errors.errors);
      closure_7 = tmp9;
      const items1 = [tmp9];
      callback = obj2.useCallback((arg0) => {
        if (null != closure_7[arg0]) {
          const obj = {};
          const merged = Object.assign(closure_7);
          delete tmp2[tmp];
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
      if (inputMode === loginPhone(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
        const intl2 = tmp(tmp2[11]).intl;
        let stringResult = intl2.string(tmp(tmp2[11]).t["eJnn0+"]);
      } else {
        const intl = tmp(tmp2[11]).intl;
        stringResult = intl.string(tmp(tmp2[11]).t.dI4d4S);
      }
      if (inputMode === loginPhone(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
        const intl4 = tmp(tmp2[11]).intl;
        let stringResult1 = intl4.string(tmp(tmp2[11]).t.wpJ1dT);
      } else {
        const intl3 = tmp(tmp2[11]).intl;
        stringResult1 = intl3.string(tmp(tmp2[11]).t.a17rBk);
      }
      const obj4 = {
        ref,
        alpha2: stateFromStores.alpha2,
        countryCode: stateFromStores.code,
        onChange: callback1,
        onSubmitEditing: onSubmit,
        placeholder: stringResult,
        returnKeyType: "next",
        autoCapitalize: "none",
        accessibilityHint: stringResult1,
        label: stringResult,
        errorMessage: inputError,
        onPressCountrySelector: callback2,
        forceMode: inputMode,
        submitBehavior,
        autoComplete: null,
        keyboardType: null,
        clearable: true,
        status: null,
      };
      const tmp16 = closure_7;
      const tmpResult = loginPhone(setLoginPhone[8]);
      let str = "email";
      if (inputMode === loginPhone(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
        str = "tel";
      }
      obj4.autoComplete = str;
      let str2 = "email-address";
      if (inputMode === loginPhone(setLoginPhone[9]).PhoneOrEmailSelectorForceMode.PHONE) {
        str2 = "number-pad";
      }
      obj4.keyboardType = str2;
      let str3;
      if (null != inputError) {
        str3 = "error";
      }
      obj4.status = str3;
      return tmp16(tmp5(setLoginPhone[12]), obj4);
    };
