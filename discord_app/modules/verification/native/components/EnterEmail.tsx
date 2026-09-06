// === Module 6982: EnterEmail ===

// Module 6982 (EnterEmail)
import nativeDefault from "native" /* 576 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const ChangeEmailStore = fn(5623);
({ useChangeEmailError: c10, useChangeEmailStore: closure_11, ChangeEmailFields: closure_12 } = ChangeEmailStore);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { background: null, container: null, title: null, prompt: null, input: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.background = createStyles;
createStyles.container = { paddingVertical: 12, paddingHorizontal: 16 };
createStyles.title = { textAlign: "center" };
createStyles.prompt = { marginTop: 8, lineHeight: 18, textAlign: "center" };
createStyles.input = { marginTop: 24, marginBottom: 16 };
let closure_16 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default function EnterEmail(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  let stateFromStores;
  _slicedToArray = undefined;
  let emailToken;
  const tmp = closure_16();
  let obj = isChangeEmail(stateFromStores[10]);
  const navigation = obj.useNavigation();
  let obj1 = isChangeEmail(stateFromStores[11]);
  const items = [UserStore];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              let tmp5 = null;
              if (null != closure_1_3) {
                closure_1_5(null);
                let obj1 = navigation(stateFromStores[13]);
                const user = { email, password: tmp19, emailToken };
                c2 = 1;
                c1 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.saveEmail(user, c2, callback);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else {
            tmp5 = value;
            if (arg0 === 2) {
              c1 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
          c1 = 3;
          const obj2 = { value: tmp5, done: true };
          return obj2;
        } catch (tmp14) {
          c1 = tmp;
          throw tmp14;
        }
      }
    });
    obj.onSubmit = function() {
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
        let obj = { change_email_reason_enum };
        changeEmailReason(stateFromStores[14]).track(constants.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj);
        const obj2 = changeEmailReason(stateFromStores[14]);
        const result = navigation(stateFromStores[13]).finishChangeEmailFlow(closure_1_2, closure_1_4);
        const obj4 = navigation(stateFromStores[13]);
      } else {
        obj = navigation(stateFromStores[13]);
        const result1 = obj.finishVerifyEmailFlow(closure_1_2, callback);
      }
    };
    navigation.push(isChangeEmail(stateFromStores[12]).VerificationModalScenes.VERIFY_PASSWORD, obj);
  }, items2);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    obj = { style: tmp.container, children: null };
    obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    if (null != stateFromStores.email) {
      const intl2 = tmp2(tmp3[16]).intl;
      let stringResult = intl2.string(tmp2(tmp3[16]).t.Vm8akB);
    } else {
      const intl = tmp2(tmp3[16]).intl;
      stringResult = intl.string(tmp2(tmp3[16]).t["CDTD/K"]);
    }
    obj1.children = stringResult;
    const items3 = [closure_14(tmp2(tmp3[15]).Text, obj1), , , ];
    let obj2 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: null };
    if (null != stateFromStores.email) {
      const intl4 = tmp2(tmp3[16]).intl;
      const obj3 = { email: stateFromStores.email };
      let formatToPlainStringResult = intl4.formatToPlainString(tmp2(tmp3[16]).t.Z7CaI7, obj3);
    } else {
      const intl3 = tmp2(tmp3[16]).intl;
      formatToPlainStringResult = intl3.string(tmp2(tmp3[16]).t.YXXMxK);
    }
    obj2.children = formatToPlainStringResult;
    items3[1] = closure_14(tmp2(tmp3[15]).Text, obj2);
    let obj4 = { style: tmp.input, label: null, textContentType: "emailAddress", keyboardType: "email-address", value: null, onChangeText: null, onSubmitEditing: null, placeholder: null, returnKeyType: "done", autoCapitalize: "none", error: null, autoFocus: true };
    const intl5 = tmp2(tmp3[16]).intl;
    obj4.label = intl5.string(tmp2(tmp3[16]).t["w/qqKK"]);
    obj4.value = value;
    obj4.onChangeText = tmp6[1];
    obj4.onSubmitEditing = callback1;
    const intl6 = tmp2(tmp3[16]).intl;
    obj4.placeholder = intl6.string(tmp2(tmp3[16]).t.dI4d4S);
    obj4.error = tmp8[0];
    items3[2] = closure_14(changeEmailReason(tmp3[17]), obj4);
    const obj5 = { text: null, onPress: null, disabled: null };
    const intl7 = tmp2(tmp3[16]).intl;
    obj5.text = intl7.string(tmp2(tmp3[16]).t.Vm8akB);
    obj5.onPress = callback1;
    obj5.disabled = "" === value || value === stateFromStores.email;
    items3[3] = closure_14(tmp2(tmp3[18]).Button, obj5);
    obj.children = items3;
    obj.children = closure_15(callback, obj);
    tmp13Result = closure_14(closure_8, obj);
    const tmp20 = changeEmailReason(tmp3[17]);
  }
  return tmp13Result;
};