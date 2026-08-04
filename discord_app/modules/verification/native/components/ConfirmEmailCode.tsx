// discord_app/modules/verification/native/components/ConfirmEmailCode.tsx
import closure_3 from "ChangeEmailFields";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import ChangeEmailFields from "ChangeEmailFields";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ useChangeEmailError: c9, ChangeEmailFields: c10 } = ChangeEmailFields);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { background: null, title: null, prompt: null, input: null, contentContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingVertical: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { marginTop: 8, lineHeight: 18, textAlign: "center" };
createCacheKey[3] = { marginTop: require("Themes").space.PX_24 };
let obj1 = { marginTop: require("Themes").space.PX_24 };
createCacheKey[4] = { gap: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { gap: require("Themes").space.PX_24 };
const result = require("noop").fileFinishedImporting("modules/verification/native/components/ConfirmEmailCode.tsx");

export default function ConfirmEmailCode(onFormSubmit) {
  let c5;
  let confirmButtonText;
  let headerText;
  let tmp10;
  onFormSubmit = onFormSubmit.onFormSubmit;
  const onSuccess = onFormSubmit.onSuccess;
  const onResend = onFormSubmit.onResend;
  let first;
  let callback;
  let React;
  ({ headerText, confirmButtonText } = onFormSubmit);
  const tmp = createCacheKey();
  let obj = onFormSubmit(onResend[9]);
  const items = [mergeGuildAvatar];
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
        return { value: "HermesInternal", done: null };
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
            let c3 = 2;
            v0(null);
            v02(true);
            v0 = 3;
            v02 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(c3);
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          v02(false);
          throw closure_2;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            const tmp26 = new outer1_1(outer1_2[10])(closure_2);
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
    let obj1 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
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
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp3;
              let anyErrorMessage = tmp7;
              anyErrorMessage = undefined;
              let c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_2();
              return obj1;
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_1 = closure_2;
              let obj3 = new outer1_1(outer1_2[10])(closure_1);
              anyErrorMessage = obj3.getAnyErrorMessage();
              if (null != anyErrorMessage) {
                let obj4 = outer1_1(outer1_2[15]);
                const obj2 = { key: "CONFIRM_EMAIL_ERROR", content: null };
                obj2[1] = outer1_0;
                obj4.open(obj2);
              }
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              obj = outer1_1(outer1_2[15]);
              obj3 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
              const intl = outer1_0(outer1_2[12]).intl;
              obj3[1] = intl.string(outer1_0(outer1_2[12]).t["84yeoz"]);
              obj.open(obj3);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          }
        } catch (tmp33) {
          closure_2 = tmp33;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            c4 = tmp;
          }
        }
      }
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