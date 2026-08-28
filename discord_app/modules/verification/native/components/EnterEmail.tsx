// === Module 7701: EnterEmail ===

// Module 7701 (EnterEmail)
import ThemesDefault from "Themes" /* 712 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "mergeGuildAvatar" /* 1923 */;
import ChangeEmailFields from "ChangeEmailFields" /* 7636 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
({ View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ useChangeEmailError: c10, useChangeEmailStore: unpackModuleId, ChangeEmailFields: closure_12 } = ChangeEmailFields);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { background: null, container: null, title: null, prompt: null, input: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingVertical: 12, paddingHorizontal: 16 };
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
createCacheKey[4] = { marginTop: 24, marginBottom: 16 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/verification/native/components/EnterEmail.tsx");

export default function EnterEmail(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const changeEmailReason = isChangeEmail.changeEmailReason;
  let navigation;
  let stateFromStores;
  let first;
  let callback;
  let emailToken;
  callback = undefined;
  const tmp = callback4();
  let obj = isChangeEmail(stateFromStores[10]);
  navigation = obj.useNavigation();
  obj1 = isChangeEmail(stateFromStores[11]);
  const items = [closure_9];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp6 = callback(emailToken.useState(""), 2);
  first = tmp6[0];
  const tmp8 = callback(callback2(constants.EMAIL), 2);
  callback = tmp9;
  emailToken = callback3().emailToken;
  const items1 = [navigation];
  callback = emailToken.useCallback((arg0) => {
    closure_0 = arg0;
    const routes = navigation.getState().routes;
    return routes.findIndex((name) => name.name === closure_0);
  }, items1);
  const items2 = [navigation, stateFromStores, tmp8[1], first, emailToken, callback, isChangeEmail, changeEmailReason];
  const callback1 = emailToken.useCallback(() => {
    let obj = { onSubmit: null, onSuccess: null, hideUnverifiedBanner: true };
    closure_0 = first((arg0) => {
      closure_0 = arg0;
      c2 = 0;
      c1 = 0;
      return (function*(arg0) {
        if (c1 === 2) {
          c1 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp3 === 3) {
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
            c1 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                c1 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c1 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let tmp5 = null;
                if (null != closure_1_3) {
                  closure_1_5(null);
                  obj1 = closure_2_2(closure_2_3[13]);
                  obj1 = { email: null, password: null, emailToken: null };
                  obj1[0] = closure_1_4;
                  obj1[1] = tmp20;
                  obj1[2] = closure_1_6;
                  c2 = 1;
                  c1 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = obj1.saveEmail(obj1, c2, closure_1_7);
                  return obj2;
                }
              }
            } else if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else {
              tmp5 = arg1;
              if (arg0 === 2) {
                c1 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            }
            c1 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = tmp5;
            return obj3;
          } catch (tmp14) {
            c1 = tmp;
            throw tmp14;
          }
        }
      })();
    });
    obj[0] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[1] = function onSuccess() {
      if (closure_0) {
        let obj = { change_email_reason_enum: null };
        obj[0] = closure_1;
        closure_1_1(closure_1_3[14]).track(closure_1_13.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, obj);
        const obj2 = closure_1_1(closure_1_3[14]);
        const result = closure_1_2(closure_1_3[13]).finishChangeEmailFlow(closure_2, closure_4);
        const obj4 = closure_1_2(closure_1_3[13]);
      } else {
        obj = closure_1_2(closure_1_3[13]);
        const result1 = obj.finishVerifyEmailFlow(closure_2, closure_7);
      }
    };
    navigation.push(isChangeEmail(stateFromStores[12]).VerificationModalScenes.VERIFY_PASSWORD, obj);
  }, items2);
  let tmp13Result = null;
  if (null != stateFromStores) {
    obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
    obj[0] = tmp.background;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.title;
    if (null != stateFromStores.email) {
      const intl2 = tmp2(tmp3[16]).intl;
      let stringResult = intl2.string(tmp2(tmp3[16]).t.Vm8akB);
    } else {
      const intl = tmp2(tmp3[16]).intl;
      stringResult = intl.string(tmp2(tmp3[16]).t["CDTD/K"]);
    }
    obj1[4] = stringResult;
    const items3 = [closure_14(tmp2(tmp3[15]).Text, obj1), , , ];
    let obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj2[0] = tmp.prompt;
    if (null != stateFromStores.email) {
      const intl4 = tmp2(tmp3[16]).intl;
      let obj3 = { email: null };
      obj3[0] = stateFromStores.email;
      let formatToPlainStringResult = intl4.formatToPlainString(tmp2(tmp3[16]).t.Z7CaI7, obj3);
    } else {
      const intl3 = tmp2(tmp3[16]).intl;
      formatToPlainStringResult = intl3.string(tmp2(tmp3[16]).t.YXXMxK);
    }
    obj2[3] = formatToPlainStringResult;
    items3[1] = closure_14(tmp2(tmp3[15]).Text, obj2);
    let obj4 = { style: null, label: null, textContentType: "emailAddress", keyboardType: "email-address", value: null, onChangeText: null, onSubmitEditing: null, placeholder: null, returnKeyType: "done", autoCapitalize: "none", error: null, autoFocus: true };
    obj4[0] = tmp.input;
    const intl5 = tmp2(tmp3[16]).intl;
    obj4[1] = intl5.string(tmp2(tmp3[16]).t["w/qqKK"]);
    obj4[4] = first;
    obj4[5] = tmp6[1];
    obj4[6] = callback1;
    const intl6 = tmp2(tmp3[16]).intl;
    obj4[7] = intl6.string(tmp2(tmp3[16]).t.dI4d4S);
    obj4[10] = tmp8[0];
    items3[2] = closure_14(changeEmailReason(tmp3[17]), obj4);
    const obj5 = { text: null, onPress: null, disabled: null };
    const intl7 = tmp2(tmp3[16]).intl;
    obj5[0] = intl7.string(tmp2(tmp3[16]).t.Vm8akB);
    obj5[1] = callback1;
    obj5[2] = "" === first || first === stateFromStores.email;
    items3[3] = closure_14(tmp2(tmp3[18]).Button, obj5);
    obj[1] = items3;
    obj[3] = closure_15(callback, obj);
    tmp13Result = tmp13(closure_8, obj);
    const tmp14 = closure_8;
    const tmp15 = closure_15;
    const tmp16 = callback;
    const tmp20 = changeEmailReason(tmp3[17]);
  }
  return tmp13Result;
};