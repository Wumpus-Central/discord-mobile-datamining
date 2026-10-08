// === Module 6660: EnterEmail ===

// Module 6660 (EnterEmail)
import nativeDefault from "native" /* 587 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const ChangeEmailStore = fn(6202);
({ useChangeEmailError: c10, useChangeEmailStore: closure_11, ChangeEmailFields: closure_12 } = ChangeEmailStore);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: { paddingVertical: 12, paddingHorizontal: 16 }, title: { textAlign: "center" }, prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" }, input: { marginTop: 24, marginBottom: 16 } };
let closure_16 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EnterEmail(isChangeEmail) {
  const cResult = isChangeEmail(stateFromStores[11]).c(43);
  isChangeEmail = isChangeEmail.isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  closure_16();
  let obj = isChangeEmail(stateFromStores[11]);
  const tmp = isChangeEmail;
  const tmp2 = stateFromStores;
  const navigation = isChangeEmail(stateFromStores[12]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function b() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj2 = isChangeEmail(stateFromStores[12]);
  stateFromStores = tmp(tmp2[13]).useStateFromStores(tmp6, tmp7);
  const tmpResult = tmp(tmp2[13]);
  const first = _slicedToArray(emailToken.useState(""), 2)[0];
  const tmp10 = _slicedToArray(emailToken.useState(""), 2);
  [r10048, tmp13] = closure_10(constants.EMAIL);
  _slicedToArray = tmp13;
  emailToken = closure_11().emailToken;
  if (cResult[2] !== navigation) {
    class V {
      constructor(arg0) {
        closure_0 = isChangeEmail;
        routes = closure_2.getState().routes;
        return routes.findIndex((name) => name.name === closure_0);
      }
    }
    cResult[2] = navigation;
    cResult[3] = V;
  } else {
    class V {
      constructor(arg0) {
        closure_0 = isChangeEmail;
        routes = closure_2.getState().routes;
        return routes.findIndex((name) => name.name === closure_0);
      }
    }
  }
  closure_7 = V;
  if (cResult[4] === changeEmailReason) {
    class V {
      constructor(arg0) {
        closure_0 = isChangeEmail;
        routes = closure_2.getState().routes;
        return routes.findIndex((name) => name.name === closure_0);
      }
    }
  }
  class D {
    constructor() {
      obj = { onSubmit: null, onSuccess: null, hideUnverifiedBanner: true };
      closure_0 = closure_4(function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let tmp5 = null;
                if (null != closure_1_3) {
                  closure_1_5(null);
                  const user = { email, password: tmp19, emailToken };
                  c2 = 1;
                  c1 = 1;
                  const obj5 = { value: navigation(stateFromStores[15]).saveEmail(user, c2, closure_1_7), done: false };
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else {
              tmp5 = value;
              if (arg0 === 2) {
                c1 = 3;
                const obj = { value, done: true };
                return obj;
              }
            }
            c1 = 3;
            const obj6 = { value: tmp5, done: true };
            return obj6;
          } catch (tmp14) {
            c1 = tmp;
            throw tmp14;
          }
        }
      });
      obj.onSubmit = function onSubmit() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj.onSuccess = function onSuccess() {
        if (closure_0) {
          const obj3 = { change_email_reason_enum };
          changeEmailReason(stateFromStores[16]).track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj3);
          const obj2 = changeEmailReason(stateFromStores[16]);
          const result = navigation(stateFromStores[15]).finishChangeEmailFlow(closure_1_2, first);
          const obj4 = navigation(stateFromStores[15]);
        } else {
          const result1 = navigation(stateFromStores[15]).finishVerifyEmailFlow(closure_1_2, closure_1_7);
          const obj = navigation(stateFromStores[15]);
        }
      };
      arr = closure_2.push(isChangeEmail(closure_3[14]).VerificationModalScenes.VERIFY_PASSWORD, obj);
      return;
    }
  }
  cResult[4] = changeEmailReason;
  cResult[5] = first;
  cResult[6] = emailToken;
  cResult[7] = V;
  cResult[8] = isChangeEmail;
  cResult[9] = navigation;
  cResult[10] = tmp13;
  cResult[11] = stateFromStores;
  cResult[12] = D;
  const tmp12 = _slicedToArray(closure_10(constants.EMAIL), 2);
}) : (function EnterEmail(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  let stateFromStores;
  _slicedToArray = undefined;
  let emailToken;
  const tmp = closure_16();
  const navigation = isChangeEmail(stateFromStores[12]).useNavigation();
  let obj = isChangeEmail(stateFromStores[12]);
  const items = [UserStore];
  stateFromStores = isChangeEmail(stateFromStores[13]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp6 = _slicedToArray(emailToken.useState(""), 2);
  value = tmp6[0];
  const tmp8 = _slicedToArray(closure_10(constants.EMAIL), 2);
  _slicedToArray = tmp9;
  emailToken = closure_11().emailToken;
  const items1 = [navigation];
  const callback = emailToken.useCallback((arg0) => {
    closure_0 = arg0;
    const routes = navigation.getState().routes;
    return routes.findIndex((name) => name.name === closure_0);
  }, items1);
  const items2 = [navigation, stateFromStores, tmp8[1], value, emailToken, callback, isChangeEmail, changeEmailReason];
  const callback1 = emailToken.useCallback(() => {
    let obj = { onSubmit: null, onSuccess: null, hideUnverifiedBanner: true };
    closure_0 = first(function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let tmp5 = null;
              if (null != closure_1_3) {
                closure_1_5(null);
                const user = { email, password: tmp19, emailToken };
                c2 = 1;
                c1 = 1;
                const obj5 = { value: navigation(stateFromStores[15]).saveEmail(user, c2, callback), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else {
            tmp5 = value;
            if (arg0 === 2) {
              c1 = 3;
              const obj = { value, done: true };
              return obj;
            }
          }
          c1 = 3;
          const obj6 = { value: tmp5, done: true };
          return obj6;
        } catch (tmp14) {
          c1 = tmp;
          throw tmp14;
        }
      }
    });
    obj.onSubmit = function onSubmit() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.onSuccess = function onSuccess() {
      if (closure_0) {
        const obj3 = { change_email_reason_enum };
        changeEmailReason(stateFromStores[16]).track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj3);
        const obj2 = changeEmailReason(stateFromStores[16]);
        const result = navigation(stateFromStores[15]).finishChangeEmailFlow(closure_1_2, closure_1_4);
        const obj4 = navigation(stateFromStores[15]);
      } else {
        const result1 = navigation(stateFromStores[15]).finishVerifyEmailFlow(closure_1_2, callback);
        const obj = navigation(stateFromStores[15]);
      }
    };
    navigation.push(isChangeEmail(stateFromStores[14]).VerificationModalScenes.VERIFY_PASSWORD, obj);
  }, items2);
  let tmp13Result = null;
  if (null != stateFromStores) {
    let obj3 = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    let obj4 = { style: tmp.container, children: null };
    let obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    if (null != stateFromStores.email) {
      const intl2 = tmp2(tmp3[17]).intl;
      let stringResult = intl2.string(tmp2(tmp3[17]).t.Vm8akB);
    } else {
      const intl = tmp2(tmp3[17]).intl;
      stringResult = intl.string(tmp2(tmp3[17]).t["CDTD/K"]);
    }
    obj5.children = stringResult;
    const items3 = [closure_14(tmp2(tmp3[18]).Text, obj5), , , ];
    let obj6 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: null };
    if (null != stateFromStores.email) {
      const intl4 = tmp2(tmp3[17]).intl;
      const obj7 = { email: stateFromStores.email };
      let formatToPlainStringResult = intl4.formatToPlainString(tmp2(tmp3[17]).t.Z7CaI7, obj7);
    } else {
      const intl3 = tmp2(tmp3[17]).intl;
      formatToPlainStringResult = intl3.string(tmp2(tmp3[17]).t.YXXMxK);
    }
    obj6.children = formatToPlainStringResult;
    items3[1] = closure_14(tmp2(tmp3[18]).Text, obj6);
    const obj8 = { style: tmp.input, label: null, textContentType: "emailAddress", keyboardType: "email-address", value: null, onChangeText: null, onSubmitEditing: null, placeholder: null, returnKeyType: "done", autoCapitalize: "none", error: null, autoFocus: true };
    const intl5 = tmp2(tmp3[17]).intl;
    obj8.label = intl5.string(tmp2(tmp3[17]).t["w/qqKK"]);
    obj8.value = value;
    obj8.onChangeText = tmp6[1];
    obj8.onSubmitEditing = callback1;
    const intl6 = tmp2(tmp3[17]).intl;
    obj8.placeholder = intl6.string(tmp2(tmp3[17]).t.dI4d4S);
    obj8.error = tmp8[0];
    items3[2] = closure_14(changeEmailReason(tmp3[19]), obj8);
    const obj9 = { text: null, onPress: null, disabled: null };
    const intl7 = tmp2(tmp3[17]).intl;
    obj9.text = intl7.string(tmp2(tmp3[17]).t.Vm8akB);
    obj9.onPress = callback1;
    obj9.disabled = "" === value || value === stateFromStores.email;
    items3[3] = closure_14(tmp2(tmp3[20]).Button, obj9);
    obj4.children = items3;
    obj3.children = closure_15(callback, obj4);
    tmp13Result = closure_14(closure_8, obj3);
    const tmp20 = changeEmailReason(tmp3[19]);
  }
  return tmp13Result;
});