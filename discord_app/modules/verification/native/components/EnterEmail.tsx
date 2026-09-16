// discord_app/modules/verification/native/components/EnterEmail.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const ChangeEmailStore = fn(5709);
({ useChangeEmailError: c10, useChangeEmailStore: closure_11, ChangeEmailFields: closure_12 } = ChangeEmailStore);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  container: { paddingVertical: 12, paddingHorizontal: 16 },
  title: { textAlign: "center" },
  prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" },
  input: { marginTop: 24, marginBottom: 16 },
};
let closure_16 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default function EnterEmail(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  let stateFromStores;
  _slicedToArray = undefined;
  let emailToken;
  const tmp = closure_16();
  const navigation = isChangeEmail(stateFromStores[10]).useNavigation();
  let obj = isChangeEmail(stateFromStores[10]);
  const items = [UserStore];
  stateFromStores = isChangeEmail(stateFromStores[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
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
    closure_0 = first(function* (arg0) {
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
          return { value: "HermesInternal", done: null };
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
                const obj5 = { value: navigation(stateFromStores[13]).saveEmail(user, c2, callback), done: false };
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
    obj.onSubmit = function () {
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
        changeEmailReason(stateFromStores[14]).track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj3);
        const obj2 = changeEmailReason(stateFromStores[14]);
        const result = navigation(stateFromStores[13]).finishChangeEmailFlow(closure_1_2, closure_1_4);
        const obj4 = navigation(stateFromStores[13]);
      } else {
        const result1 = navigation(stateFromStores[13]).finishVerifyEmailFlow(closure_1_2, callback);
        const obj = navigation(stateFromStores[13]);
      }
    };
    navigation.push(isChangeEmail(stateFromStores[12]).VerificationModalScenes.VERIFY_PASSWORD, obj);
  }, items2);
  let tmp13Result = null;
  if (null != stateFromStores) {
    let obj3 = {
      style: tmp.background,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      children: null,
    };
    let obj4 = { style: tmp.container, children: null };
    let obj5 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: null,
    };
    if (null != stateFromStores.email) {
      const intl2 = tmp2(tmp3[16]).intl;
      let stringResult = intl2.string(tmp2(tmp3[16]).t.Vm8akB);
    } else {
      const intl = tmp2(tmp3[16]).intl;
      stringResult = intl.string(tmp2(tmp3[16]).t["CDTD/K"]);
    }
    obj5.children = stringResult;
    const items3 = [closure_14(tmp2(tmp3[15]).Text, obj5), , ,];
    let obj6 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: null };
    if (null != stateFromStores.email) {
      const intl4 = tmp2(tmp3[16]).intl;
      const obj7 = { email: stateFromStores.email };
      let formatToPlainStringResult = intl4.formatToPlainString(tmp2(tmp3[16]).t.Z7CaI7, obj7);
    } else {
      const intl3 = tmp2(tmp3[16]).intl;
      formatToPlainStringResult = intl3.string(tmp2(tmp3[16]).t.YXXMxK);
    }
    obj6.children = formatToPlainStringResult;
    items3[1] = closure_14(tmp2(tmp3[15]).Text, obj6);
    const obj8 = {
      style: tmp.input,
      label: null,
      textContentType: "emailAddress",
      keyboardType: "email-address",
      value: null,
      onChangeText: null,
      onSubmitEditing: null,
      placeholder: null,
      returnKeyType: "done",
      autoCapitalize: "none",
      error: null,
      autoFocus: true,
    };
    const intl5 = tmp2(tmp3[16]).intl;
    obj8.label = intl5.string(tmp2(tmp3[16]).t["w/qqKK"]);
    obj8.value = value;
    obj8.onChangeText = tmp6[1];
    obj8.onSubmitEditing = callback1;
    const intl6 = tmp2(tmp3[16]).intl;
    obj8.placeholder = intl6.string(tmp2(tmp3[16]).t.dI4d4S);
    obj8.error = tmp8[0];
    items3[2] = closure_14(changeEmailReason(tmp3[17]), obj8);
    const obj9 = { text: null, onPress: null, disabled: null };
    const intl7 = tmp2(tmp3[16]).intl;
    obj9.text = intl7.string(tmp2(tmp3[16]).t.Vm8akB);
    obj9.onPress = callback1;
    obj9.disabled = "" === value || value === stateFromStores.email;
    items3[3] = closure_14(tmp2(tmp3[18]).Button, obj9);
    obj4.children = items3;
    obj3.children = closure_15(callback, obj4);
    tmp13Result = closure_14(closure_8, obj3);
    const tmp20 = changeEmailReason(tmp3[17]);
  }
  return tmp13Result;
}
