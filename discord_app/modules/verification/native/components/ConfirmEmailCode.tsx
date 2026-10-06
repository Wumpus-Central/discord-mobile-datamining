// === Module 6103: ConfirmEmailCode ===

// Module 6103 (ConfirmEmailCode)
import nativeDefault from "native" /* 587 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import ChangeEmailStore from "ChangeEmailStore" /* 6016 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import size from "module_2" /* 2 */;

let c4;

let c10;
let c9;
let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ useChangeEmailError: c9, ChangeEmailFields: c10 } = ChangeEmailStore);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, title: { textAlign: "center" }, prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" }, input: obj3, contentContainer: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
obj4 = { gap: nativeDefault.space.PX_24 };
let closure_13 = createStyles(obj);
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailCode.tsx");

export default function ConfirmEmailCode(onFormSubmit) {
  let c5;
  let closure_4;
  let confirmButtonText;
  let currentUser;
  let first1;
  let headerText;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let tmp10;
  let tmp12;
  let tmp7;
  let value;
  onFormSubmit = onFormSubmit.onFormSubmit;
  const onSuccess = onFormSubmit.onSuccess;
  let onResend = onFormSubmit.onResend;
  value = undefined;
  react = undefined;
  ({ headerText, confirmButtonText } = onFormSubmit);
  const tmp = closure_13();
  const tmp3 = onResend;
  let obj = onFormSubmit(onResend[9]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  [value, tmp7] = react.useState("");
  [first1, tmp10] = closure_9(constants.EMAIL_TOKEN);
  _slicedToArray = tmp10;
  [tmp12, c5] = _slicedToArray(react.useState(false), 2);
  const items1 = [value, tmp10, onFormSubmit, onSuccess];
  const tmp11 = _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(value(function*() {
    let closure_2;
    let v3;
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let user;
        let anyErrorMessage;
        v3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            user = undefined;
            anyErrorMessage = undefined;
            c3 = 2;
            v2(null);
            v3(true);
            c4 = 3;
            v3 = 1;
            const obj4 = { value: onFormSubmit(first), done: false };
            return obj4;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_5(false);
          throw onResend;
        } else {
          if (2 === c4) {
            c3 = 1;
            const self = this;
            const self2 = this;
            const tmp20 = new anyErrorMessage(onResend[10])(onResend);
            anyErrorMessage = tmp20;
            closure_129_4(anyErrorMessage.getAnyErrorMessage());
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_5(false);
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            user = value;
            let token;
            if (user != null) {
              token = user.token;
            }
            closure_129_1(token);
            c3 = 1;
          }
          c3 = 0;
          closure_129_5(false);
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp39) {
        onResend = tmp39;
        if (0 === c3) {
          v3 = 3;
          throw tmp39;
        } else if (1 === tmp41) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items1);
  let tmp15 = null;
  const tmp13 = value;
  if (null != stateFromStores) {
    let obj3 = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: null, children: items3 };
    ({ background: obj2.style, contentContainer: obj2.contentContainerStyle } = tmp);
    let obj4 = { children: items2 };
    let obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: headerText };
    items2 = [closure_11(onFormSubmit(tmp3[11]).Text, obj5), , , ];
    let obj6 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: intl.string(onFormSubmit(tmp3[12]).t.SZJowy) };
    const Text = tmp2(tmp3[11]).Text;
    intl = tmp2(tmp3[12]).intl;
    items2[1] = closure_11(Text, obj6);
    let tmp20 = onSuccess;
    let obj7 = { style: tmp.input, label: intl2.string(onFormSubmit(tmp3[12]).t["8mZX6M"]), textContentType: "emailAddress", keyboardType: "email-address", value, onChangeText: tmp7, onSubmitEditing: callback, returnKeyType: "done", autoCapitalize: "none", error: first1, autoFocus: true };
    const tmp21 = onSuccess(tmp3[13]);
    intl2 = tmp2(tmp3[12]).intl;
    items2[2] = closure_11(tmp21, obj7);
    let obj8 = {
      text: intl3.string(onFormSubmit(tmp3[12]).t.K0NPQ6),
      variant: "text-sm/medium",
      onPress: tmp13(function*() {
          let closure_1;
          let closure_2;
          let intl;
          if (c5 === 2) {
            c5 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              let content;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  content = undefined;
                  c3 = 1;
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: onResend(), done: false };
                  return obj6;
                }
              } else {
                if (1 === c4) {
                  c3 = 0;
                  const self = this;
                  const self2 = this;
                  const obj3 = new onResend(onResend[10])(onResend);
                  content = obj3.getAnyErrorMessage();
                  if (null != content) {
                    const obj7 = { key: "CONFIRM_EMAIL_ERROR", content };
                    const obj4 = onResend(onResend[15]);
                    obj4.open(obj7);
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c5 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                } else {
                  const obj = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: intl.string(content(onResend[12]).t["84yeoz"]) };
                  const open = tmp(onResend[15]).open;
                  const tmp8 = tmp(onResend[15]);
                  intl = content(onResend[12]).intl;
                  open(obj);
                  c3 = 0;
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp29) {
              onResend = tmp29;
              if (0 === c3) {
                c5 = 3;
                throw tmp29;
              } else {
                c4 = 1;
              }
            }
          }
        })
    };
    const LinkButton = tmp2(tmp3[14]).LinkButton;
    intl3 = tmp2(tmp3[12]).intl;
    items2[3] = closure_11(LinkButton, obj8);
    items3 = [closure_12(closure_6, obj4), ];
    const obj15 = { text: confirmButtonText, onPress: callback, loading: tmp12, disabled: "" === value };
    items3[1] = closure_11(onFormSubmit(tmp3[16]).Button, obj15);
    tmp15 = closure_12(closure_7, obj3);
  }
  return tmp15;
};