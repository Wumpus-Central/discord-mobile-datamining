// discord_app/modules/verification/native/components/ConfirmEmailCode.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const ChangeEmailStore = fn(5623);
({ useChangeEmailError: closure_9, ChangeEmailFields: c10 } = ChangeEmailStore);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { background: null, title: null, prompt: null, input: null, contentContainer: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.background = createStyles;
createStyles.title = { textAlign: "center" };
createStyles.prompt = { marginTop: 8, lineHeight: 18, textAlign: "center" };
createStyles.input = { marginTop: nativeDefault.space.PX_24 };
let obj1 = { marginTop: nativeDefault.space.PX_24 };
createStyles.contentContainer = { gap: nativeDefault.space.PX_24 };
let closure_13 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailCode.tsx");

export default function ConfirmEmailCode(onFormSubmit) {
  onFormSubmit = onFormSubmit.onFormSubmit;
  const onSuccess = onFormSubmit.onSuccess;
  const onResend = onFormSubmit.onResend;
  _slicedToArray = undefined;
  noop = undefined;
  ({ headerText, confirmButtonText } = onFormSubmit);
  const tmp = closure_13();
  let obj = onFormSubmit(onResend[9]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp5 = _slicedToArray(noop.useState(""), 2);
  value = tmp5[0];
  const tmp7 = _slicedToArray(closure_9(constants.EMAIL_TOKEN), 2);
  _slicedToArray = tmp8;
  [tmp10, c5] = _slicedToArray(noop.useState(false), 2);
  const items1 = [value, tmp7[1], onFormSubmit, onSuccess];
  const callback = noop.useCallback(
    value(function* () {
      if (v32 === 2) {
        v32 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          v32 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 === 2) {
              v32 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp8;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              c3 = 2;
              v3(null);
              v32(true);
              c4 = 3;
              v32 = 1;
              const obj1 = { value: onFormSubmit(first), done: false };
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_5(false);
            throw tmp45;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              closure_128_2 = tmp45;
              const tmp26 = new tmp4(tmp45[10])(closure_128_2);
              closure_128_1 = tmp26;
              closure_129_4(closure_128_1.getAnyErrorMessage());
              c3 = 0;
              closure_129_5(false);
              v32 = 3;
            } else if (arg0 === 1) {
              v32 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              let token;
              if (closure_128_0 != null) {
                token = closure_128_0.token;
              }
              closure_129_1(token);
              c3 = 1;
            }
            c3 = 0;
            closure_129_5(false);
            v32 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp45) {
          if (tmp5 === c3) {
            v32 = tmp3;
            throw tmp45;
          } else if (tmp2 === tmp47) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items1,
  );
  let tmp13 = null;
  if (null != stateFromStores) {
    obj = {
      style: null,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      contentContainerStyle: null,
      children: null,
    };
    ({ background: obj2.style, contentContainer: obj2.contentContainerStyle } = tmp);
    obj = { children: null };
    let obj1 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: headerText,
    };
    const items2 = [closure_11(tmp2(tmp3[11]).Text, obj1), , ,];
    const obj2 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default", children: null };
    let intl = tmp2(tmp3[12]).intl;
    obj2.children = intl.string(tmp2(tmp3[12]).t.SZJowy);
    items2[1] = closure_11(tmp2(tmp3[11]).Text, obj2);
    let obj3 = {
      style: tmp.input,
      label: null,
      textContentType: "emailAddress",
      keyboardType: "email-address",
      value: null,
      onChangeText: null,
      onSubmitEditing: null,
      returnKeyType: "done",
      autoCapitalize: "none",
      error: null,
      autoFocus: true,
    };
    const intl2 = tmp2(tmp3[12]).intl;
    obj3.label = intl2.string(tmp2(tmp3[12]).t["8mZX6M"]);
    obj3.value = value;
    obj3.onChangeText = tmp5[1];
    obj3.onSubmitEditing = callback;
    obj3.error = tmp7[0];
    items2[2] = closure_11(onSuccess(tmp3[13]), obj3);
    const obj4 = { text: null, variant: "text-sm/medium", onPress: null };
    const intl3 = tmp2(tmp3[12]).intl;
    obj4.text = intl3.string(tmp2(tmp3[12]).t.K0NPQ6);
    obj4.onPress = value(function* () {
      yield onResend();
      if (1 === tmp7) {
        c3 = 0;
        closure_128_1 = tmp33;
        let obj3 = new tmp3(tmp33[10])(closure_128_1);
        const anyErrorMessage = obj3.getAnyErrorMessage();
        if (null != anyErrorMessage) {
          tmp3(tmp33[15]).open({ key: "CONFIRM_EMAIL_ERROR", content: anyErrorMessage });
          tmp3(tmp33[15]);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        obj3 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
        const intl = onFormSubmit(tmp33[12]).intl;
        obj3.content = intl.string(onFormSubmit(tmp33[12]).t["84yeoz"]);
        tmp3(tmp33[15]).open(obj3);
        c3 = 0;
        tmp3(tmp33[15]);
      }
      return value;
    });
    items2[3] = closure_11(tmp2(tmp3[14]).LinkButton, obj4);
    obj.children = items2;
    const items3 = [closure_12(closure_6, obj)];
    const obj5 = { text: confirmButtonText, onPress: callback, loading: tmp10, disabled: "" === value };
    items3[1] = closure_11(tmp2(tmp3[16]).Button, obj5);
    obj.children = items3;
    tmp13 = closure_12(closure_7, obj);
    const tmp19 = onSuccess(tmp3[13]);
  }
  return tmp13;
}
