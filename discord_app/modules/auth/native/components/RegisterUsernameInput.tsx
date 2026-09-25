// discord_app/modules/auth/native/components/RegisterUsernameInput.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import CircleErrorIcon from "../../../../design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx";
import UniqueUsernamesTypes from "../../../unique_usernames/UniqueUsernamesTypes.tsx";
import useFocusRefOnNavigationDefault from "../../../../design/components/Navigator/native/useFocusRefOnNavigation.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function UsernameStatusMessage(arg0) {
  ({ usernameStatus, isUsernameFocused } = arg0);
  const tmp = closure_12();
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
    obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", children: null };
    obj3 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
    const items = [React7(CircleErrorIcon.CircleErrorIcon, obj3)];
    const obj4 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp.status };
    const merged = Object.assign(obj2);
    const merged1 = Object.assign(obj3);
    obj4.animated = true;
    obj4.children = usernameStatus.message;
    items[1] = React7(Text_Text.Text, obj4);
    obj2.children = items;
    let tmp6 = closure_1_10(Stack_Stack.Stack, obj2);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (usernameStatus != null) {
        type1 = usernameStatus.type;
      }
      if (type1 === UniqueUsernamesTypes.NameValidationState.AVAILABLE) {
        const obj5 = {};
        const merged2 = Object.assign(obj2);
        const merged3 = Object.assign(obj3);
        obj5.style = tmp.status;
        obj5.variant = "text-xs/medium";
        obj5.animated = true;
        const obj6 = { variant: "text-xs/medium", color: "text-feedback-positive", children: usernameStatus.message };
        obj5.children = React7(Text_Text.Text, obj6);
        tmp6 = React7(Text_Text.Text, obj5);
      }
    }
    tmp6 = null;
    if (isUsernameFocused) {
      const obj = {};
      const merged4 = Object.assign(obj2);
      const merged5 = Object.assign(obj3);
      obj.style = tmp.inputHint;
      obj.variant = "text-xs/medium";
      obj.color = "text-muted";
      obj.animated = true;
      const intl = util.intl;
      obj.children = intl.string(util.t.y7LSyU);
      tmp6 = React7(Text_Text.Text, obj);
    }
  }
  return tmp6;
}
let closure_3 = ["username"];
const RegistrationUIStore = fn(15543);
({ setRegistrationErrors: closure_7, useRegistrationUIStore: closure_8 } = RegistrationUIStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4829);
let closure_12 = createStyles.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
let obj2 = { entering: null, exiting: null };
const FadeIn = fn(4563).FadeIn;
obj2.entering = FadeIn.duration(300);
const FadeOut = fn(4563).FadeOut;
obj2.exiting = FadeOut.duration(300);
let obj3 = { layout: null };
const LinearTransition = fn(4563).LinearTransition;
const Easing = fn(4563).Easing;
obj3.layout = LinearTransition.easing(Easing.inOut(fn(4563).Easing.quad)).duration(300);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = function RegisterUsernameInput(setUsername) {
  setUsername = setUsername.setUsername;
  ({ usernameStatus, autoFocus } = setUsername);
  importDefault = undefined;
  dependencyMap = undefined;
  ({ username, onSubmitEditing, submitBehavior } = setUsername);
  const ref = noop.useRef(null);
  obj2 = { inputRef: ref, enabled: null };
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj2.enabled = autoFocus;
  useFocusRefOnNavigationDefault(obj2);
  const tmp5 = _slicedToArray(noop.useState(true), 2);
  importDefault = tmp6;
  const tmp7 = closure_8((errors) => errors.errors);
  dependencyMap = tmp7;
  const items = [tmp7, setUsername];
  const items1 = [tmp5[1]];
  const callback = noop.useCallback((str) => {
    if (null != user.username) {
      const username = user.username;
      React5(_objectWithoutProperties(user, closure_3));
    }
    setUsername(str.toLowerCase());
  }, items);
  const items2 = [tmp5[1]];
  const callback1 = noop.useCallback(() => {
    closure_1(true);
  }, items1);
  const callback2 = noop.useCallback(() => {
    closure_1(false);
  }, items2);
  obj3 = {
    ref,
    label: null,
    accessibilityHint: null,
    onChange: null,
    autoCorrect: false,
    secureTextEntry: null,
    keyboardType: null,
    value: null,
    onSubmitEditing: null,
    returnKeyType: "next",
    autoComplete: "username",
    textContentType: "username",
    autoCapitalize: "none",
    onFocus: null,
    onBlur: null,
    clearable: true,
    status: null,
    submitBehavior: null,
  };
  const intl = setUsername(1115).intl;
  obj3.label = intl.string(setUsername(1115).t.IEpCBQ);
  const intl2 = setUsername(1115).intl;
  obj3.accessibilityHint = intl2.string(setUsername(1115).t["47dcUZ"]);
  obj3.onChange = callback;
  const tmp14 = setUsername;
  obj3.secureTextEntry = setUsername(1364).isAndroid();
  const obj4 = setUsername(1364);
  let str = "default";
  if (obj5.isAndroid()) {
    str = "visible-password";
  }
  obj3.keyboardType = str;
  obj3.value = username;
  obj3.onSubmitEditing = onSubmitEditing;
  obj3.onFocus = callback1;
  obj3.onBlur = callback2;
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  let str2;
  if (type === tmp14(14240).NameValidationState.ERROR) {
    str2 = "error";
  }
  const obj6 = { children: null };
  obj3.status = str2;
  obj3.submitBehavior = submitBehavior;
  const items3 = [
    closure_9(setUsername(6019).TextInput, obj3),
    closure_9(UsernameStatusMessage, { usernameStatus, isUsernameFocused: tmp5[0] }),
  ];
  obj6.children = items3;
  return closure_10(closure_11, obj6);
};
