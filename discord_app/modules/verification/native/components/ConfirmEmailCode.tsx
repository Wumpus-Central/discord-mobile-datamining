// === Module 8574: ConfirmEmailCode ===

// Module 8574 (ConfirmEmailCode)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "mergeGuildAvatar" /* 1922 */;
import ChangeEmailFields from "ChangeEmailFields" /* 8563 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ useChangeEmailError: c9, ChangeEmailFields: c10 } = ChangeEmailFields);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { background: null, title: null, prompt: null, input: null, contentContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
createCacheKey[3] = { marginTop: ThemesDefault.space.PX_24 };
let obj1 = { marginTop: ThemesDefault.space.PX_24 };
createCacheKey[4] = { gap: ThemesDefault.space.PX_24 };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj2 = { gap: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/verification/native/components/ConfirmEmailCode.tsx");

export default function ConfirmEmailCode(onFormSubmit) {
  onFormSubmit = onFormSubmit.onFormSubmit;
  const onSuccess = onFormSubmit.onSuccess;
  const onResend = onFormSubmit.onResend;
  let first;
  let callback;
  let React;
  ({ headerText, confirmButtonText } = onFormSubmit);
  const tmp = callback5();
  let obj = onFormSubmit(onResend[9]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp5 = callback(React.useState(""), 2);
  first = tmp5[0];
  const tmp7 = callback(callback2(constants.EMAIL_TOKEN), 2);
  callback = tmp8;
  [tmp10, c5] = callback(React.useState(false), 2);
  const items1 = [first, tmp7[1], onFormSubmit, onSuccess];
  callback = React.useCallback(first(function*() {
    if (v02 === 2) {
      v02 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v02 = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v02 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let anyErrorMessage = tmp4;
            let user = tmp8;
            user = undefined;
            anyErrorMessage = undefined;
            c3 = 2;
            v0(null);
            v02(true);
            v0 = 3;
            v02 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(c3);
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          v02(false);
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            const tmp26 = new closure_1_1(closure_1_2[10])(closure_2);
            anyErrorMessage = tmp26;
            v0(anyErrorMessage.getAnyErrorMessage());
            c3 = 0;
            v02(false);
            v02 = 3;
          } else if (arg0 === 1) {
            v02 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            user = arg1;
            let token;
            if (user != null) {
              token = user.token;
            }
            anyErrorMessage(token);
            c3 = 1;
            const tmp11 = anyErrorMessage;
          }
          c3 = 0;
          v02(false);
          v02 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
      } catch (tmp45) {
        closure_2 = tmp45;
        if (tmp5 === c3) {
          v02 = tmp3;
          throw tmp45;
        } else if (tmp2 === tmp47) {
          v0 = tmp2;
        } else {
          v0 = tmp;
        }
      }
    }
  }), items1);
  let tmp13 = null;
  if (null != stateFromStores) {
    obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    ({ background: obj2[0], contentContainer: obj2[3] } = tmp);
    obj = { children: null };
    obj1 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj1[0] = tmp.title;
    obj1[4] = headerText;
    const items2 = [callback3(tmp2(tmp3[11]).Text, obj1), , , ];
    let obj2 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj2[0] = tmp.prompt;
    let intl = tmp2(tmp3[12]).intl;
    obj2[3] = intl.string(tmp2(tmp3[12]).t.SZJowy);
    items2[1] = callback3(tmp2(tmp3[11]).Text, obj2);
    let obj3 = { style: null, label: null, textContentType: "emailAddress", keyboardType: "email-address", value: null, onChangeText: null, onSubmitEditing: null, returnKeyType: "done", autoCapitalize: "none", error: null, autoFocus: true };
    obj3[0] = tmp.input;
    const intl2 = tmp2(tmp3[12]).intl;
    obj3[1] = intl2.string(tmp2(tmp3[12]).t["8mZX6M"]);
    obj3[4] = first;
    obj3[5] = tmp5[1];
    obj3[6] = callback;
    obj3[9] = tmp7[0];
    items2[2] = callback3(onSuccess(tmp3[13]), obj3);
    let obj4 = { text: null, variant: "text-sm/medium", onPress: null };
    const intl3 = tmp2(tmp3[12]).intl;
    obj4[0] = intl3.string(tmp2(tmp3[12]).t.K0NPQ6);
    obj4[2] = first(function*() {
      closure_1 = tmp3;
      c3 = 1;
      yield closure_1_2();
      if (1 === tmp7) {
        c3 = 0;
        closure_1 = closure_2;
        let obj3 = new closure_1_1(closure_1_2[10])(closure_1);
        const anyErrorMessage = obj3.getAnyErrorMessage();
        if (null != anyErrorMessage) {
          const obj4 = closure_1_1(closure_1_2[15]);
          const obj2 = { key: "CONFIRM_EMAIL_ERROR", content: null };
          obj2[1] = closure_1_0;
          obj4.open(obj2);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = closure_1_1(closure_1_2[15]);
        obj3 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
        const intl = closure_1_0(closure_1_2[12]).intl;
        obj3[1] = intl.string(closure_1_0(closure_1_2[12]).t["84yeoz"]);
        obj.open(obj3);
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    });
    items2[3] = callback3(tmp2(tmp3[14]).LinkButton, obj4);
    obj[0] = items2;
    const items3 = [callback4(closure_6, obj), ];
    const obj5 = { text: null, onPress: null, loading: null, disabled: null };
    obj5[0] = confirmButtonText;
    obj5[1] = callback;
    obj5[2] = tmp10;
    obj5[3] = "" === first;
    items3[1] = callback3(tmp2(tmp3[16]).Button, obj5);
    obj[4] = items3;
    tmp13 = callback4(closure_7, obj);
    const tmp19 = onSuccess(tmp3[13]);
  }
  return tmp13;
};