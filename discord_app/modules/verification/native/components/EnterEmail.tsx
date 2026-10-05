// discord_app/modules/verification/native/components/EnterEmail.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import ChangeEmailStore from "../../ChangeEmailStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let arr, c1, c2, isChangeEmail, navigation;

let c10;
let closure_12;
let closure_14;
let closure_15;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ useChangeEmailError: c10, useChangeEmailStore: unpackModuleId, ChangeEmailFields: closure_12 } = ChangeEmailStore);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = {
  background: obj2,
  container: { paddingVertical: 12, paddingHorizontal: 16 },
  title: { textAlign: "center" },
  prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" },
  input: { marginTop: 24, marginBottom: 16 },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_16 = createStyles.createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isChangeEmail) => {
      let closure_5;
      let currentUser;
      let emailToken;
      let stateFromStores;
      let tmp13;
      let tmp6;
      let tmp7;
      const tmp2 = stateFromStores;
      let obj = isChangeEmail(stateFromStores[11]);
      const cResult = obj.c(43);
      const tmp = isChangeEmail;
      isChangeEmail = isChangeEmail.isChangeEmail;
      const changeEmailReason = isChangeEmail.changeEmailReason;
      let tmp4 = closure_16();
      let obj2 = isChangeEmail(stateFromStores[12]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function _() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = tmp(tmp2[13]);
      stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      const first = _slicedToArray(emailToken.useState(""), 2)[0];
      _slicedToArray(emailToken.useState(""), 2);
      [r10048, tmp13] = closure_10(constants.EMAIL);
      _slicedToArray(closure_10(constants.EMAIL), 2);
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
      V = tmp14;
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
          push = closure_2.push;
          obj = { onSubmit: null, onSuccess: null, hideUnverifiedBanner: true };
          VERIFY_PASSWORD = isChangeEmail(closure_3[14]).VerificationModalScenes.VERIFY_PASSWORD;
          closure_0 = closure_4(function* (arg0) {
            let obj2;
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                let tmp4;
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
                    tmp4 = null;
                    if (null != closure_1_3) {
                      closure_1_5(null);
                      const user = { email, password: tmp17, emailToken };
                      c2 = 1;
                      c1 = 1;
                      const obj5 = { value: obj2.saveEmail(user, c2, closure_1_7), done: false };
                      obj2 = navigation(stateFromStores[15]);
                      return obj5;
                    }
                  }
                } else if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else {
                  tmp4 = value;
                  if (arg0 === 2) {
                    c1 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                }
                c1 = 3;
                const obj6 = { value: tmp4, done: true };
                return obj6;
              } catch (tmp13) {
                c1 = 3;
                throw tmp13;
              }
            }
          });
          obj.onSubmit = function () {
            return closure_0(...arguments);
          };
          obj.onSuccess = function onSuccess() {
            if (closure_0) {
              const obj3 = { change_email_reason_enum };
              const obj2 = changeEmailReason(stateFromStores[16]);
              obj2.track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj3);
              const obj4 = navigation(stateFromStores[15]);
              const result = obj4.finishChangeEmailFlow(closure_1_2, first);
            } else {
              const obj = navigation(stateFromStores[15]);
              const result1 = obj.finishVerifyEmailFlow(closure_1_2, closure_1_7);
            }
          };
          arr = push(VERIFY_PASSWORD, obj);
          return;
        }
      }
      cResult[4] = changeEmailReason;
      cResult[5] = first;
      cResult[6] = emailToken;
      cResult[7] = tmp14;
      cResult[8] = isChangeEmail;
      cResult[9] = navigation;
      cResult[10] = tmp13;
      cResult[11] = stateFromStores;
      cResult[12] = D;
    }
  : (isChangeEmail) => {
      let closure_5;
      let currentUser;
      let first1;
      let formatToPlainStringResult;
      let intl5;
      let intl6;
      let intl7;
      let items3;
      let obj4;
      let stringResult;
      let tmp11;
      let tmp18;
      let tmp8;
      let value;
      isChangeEmail = isChangeEmail.isChangeEmail;
      const changeEmailReason = isChangeEmail.changeEmailReason;
      let stateFromStores;
      value = undefined;
      let emailToken;
      const tmp = closure_16();
      const tmp2 = isChangeEmail;
      let obj = isChangeEmail(stateFromStores[12]);
      navigation = obj.useNavigation();
      let obj2 = isChangeEmail(stateFromStores[13]);
      const items = [UserStore];
      stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
      [value, tmp8] = emailToken.useState("");
      [first1, tmp11] = closure_10(constants.EMAIL);
      _slicedToArray = tmp11;
      emailToken = closure_11().emailToken;
      const items1 = [navigation];
      const callback = emailToken.useCallback((arg0) => {
        let closure_0 = arg0;
        const routes = navigation.getState().routes;
        return routes.findIndex((name) => name.name === closure_0);
      }, items1);
      const items2 = [
        navigation,
        stateFromStores,
        tmp11,
        value,
        emailToken,
        callback,
        isChangeEmail,
        changeEmailReason,
      ];
      const callback1 = emailToken.useCallback(() => {
        let change_email_reason_enum;
        const push = navigation.push;
        let obj = {
          onSubmit: function () {
            return closure_0(...arguments);
          },
          onSuccess() {
            if (closure_0) {
              const obj3 = { change_email_reason_enum };
              const obj2 = changeEmailReason(stateFromStores[16]);
              obj2.track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj3);
              const obj4 = navigation(stateFromStores[15]);
              const result = obj4.finishChangeEmailFlow(closure_1_2, closure_1_4);
            } else {
              const obj = navigation(stateFromStores[15]);
              const result1 = obj.finishVerifyEmailFlow(closure_1_2, callback);
            }
          },
          hideUnverifiedBanner: true,
        };
        const VERIFY_PASSWORD = isChangeEmail(stateFromStores[14]).VerificationModalScenes.VERIFY_PASSWORD;
        let closure_0 = first(function* (arg0) {
          let obj2;
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              let tmp4;
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
                  tmp4 = null;
                  if (null != closure_1_3) {
                    closure_1_5(null);
                    const user = { email, password: tmp17, emailToken };
                    c2 = 1;
                    c1 = 1;
                    const obj5 = { value: obj2.saveEmail(user, c2, callback), done: false };
                    obj2 = navigation(stateFromStores[15]);
                    return obj5;
                  }
                }
              } else if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else {
                tmp4 = value;
                if (arg0 === 2) {
                  c1 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
              }
              c1 = 3;
              const obj6 = { value: tmp4, done: true };
              return obj6;
            } catch (tmp13) {
              c1 = 3;
              throw tmp13;
            }
          }
        });
        push(VERIFY_PASSWORD, obj);
      }, items2);
      let tmp15Result = null;
      if (null != stateFromStores) {
        let obj3 = {
          style: tmp.background,
          keyboardShouldPersistTaps: "handled",
          alwaysBounceVertical: false,
          children: closure_15(tmp18, obj4),
        };
        obj4 = { style: tmp.container, children: items3 };
        let obj5 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: stringResult,
        };
        const Text = tmp2(tmp3[18]).Text;
        tmp18 = callback;
        if (null != stateFromStores.email) {
          const intl2 = tmp2(tmp3[17]).intl;
          stringResult = intl2.string(tmp2(tmp3[17]).t.Vm8akB);
        } else {
          const intl = tmp2(tmp3[17]).intl;
          stringResult = intl.string(tmp2(tmp3[17]).t["CDTD/K"]);
        }
        items3 = [closure_14(Text, obj5), , ,];
        let obj6 = {
          style: tmp.prompt,
          variant: "text-sm/medium",
          color: "text-default",
          children: formatToPlainStringResult,
        };
        const Text2 = tmp2(tmp3[18]).Text;
        if (null != stateFromStores.email) {
          const intl4 = tmp2(tmp3[17]).intl;
          const obj7 = { email: stateFromStores.email };
          formatToPlainStringResult = intl4.formatToPlainString(tmp2(tmp3[17]).t.Z7CaI7, obj7);
        } else {
          const intl3 = tmp2(tmp3[17]).intl;
          formatToPlainStringResult = intl3.string(tmp2(tmp3[17]).t.YXXMxK);
        }
        items3[1] = closure_14(Text2, obj6);
        const obj8 = {
          style: tmp.input,
          label: intl5.string(tmp2(stateFromStores[17]).t["w/qqKK"]),
          textContentType: "emailAddress",
          keyboardType: "email-address",
          value,
          onChangeText: tmp8,
          onSubmitEditing: callback1,
          placeholder: intl6.string(tmp2(stateFromStores[17]).t.dI4d4S),
          returnKeyType: "done",
          autoCapitalize: "none",
          error: first1,
          autoFocus: true,
        };
        const tmp22 = changeEmailReason(stateFromStores[19]);
        intl5 = tmp2(tmp3[17]).intl;
        intl6 = tmp2(tmp3[17]).intl;
        items3[2] = closure_14(tmp22, obj8);
        const obj9 = {
          text: intl7.string(tmp2(stateFromStores[17]).t.Vm8akB),
          onPress: callback1,
          disabled: "" === value || value === stateFromStores.email,
        };
        const Button = tmp2(tmp3[20]).Button;
        intl7 = tmp2(tmp3[17]).intl;
        items3[3] = closure_14(Button, obj9);
        tmp15Result = closure_14(closure_8, obj3);
      }
      return tmp15Result;
    };
let result = size.fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default tmp5;
