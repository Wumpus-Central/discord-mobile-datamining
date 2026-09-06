// === Module 15972: RegisterUsernameInput ===

// Module 15972 (RegisterUsernameInput)
import nativeDefault from "native" /* 576 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes" /* 14706 */;
import useFocusRefOnNavigationDefault from "useFocusRefOnNavigation" /* 15964 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function UsernameStatusMessage(arg0) {
  ({ usernameStatus, isUsernameFocused } = arg0);
  const tmp = closure_12();
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
    let obj = { direction: "horizontal", spacing: 4, align: "flex-start", children: null };
    obj = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
    const items = [React7(tmp3(6610).CircleErrorIcon, obj), ];
    const obj1 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp.status };
    const merged = Object.assign(createStyles);
    const merged1 = Object.assign(createStyles);
    obj1.animated = true;
    obj1.children = usernameStatus.message;
    items[1] = React7(tmp3(4556).Text, obj1);
    obj.children = items;
    let tmp6 = closure_1_10(tmp3(4973).Stack, obj);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (usernameStatus != null) {
        type1 = usernameStatus.type;
      }
      if (type1 === tmp3(14706).NameValidationState.AVAILABLE) {
        const obj2 = {};
        const merged2 = Object.assign(createStyles);
        const merged3 = Object.assign(createStyles);
        obj2.style = tmp.status;
        obj2.variant = "text-xs/medium";
        obj2.animated = true;
        const obj3 = { variant: "text-xs/medium", color: "text-feedback-positive", children: usernameStatus.message };
        obj2.children = React7(tmp3(4556).Text, obj3);
        tmp6 = React7(tmp3(4556).Text, obj2);
      }
    }
    tmp6 = null;
    if (isUsernameFocused) {
      obj = {};
      const merged4 = Object.assign(createStyles);
      const merged5 = Object.assign(createStyles);
      obj.style = tmp.inputHint;
      obj.variant = "text-xs/medium";
      obj.color = "text-muted";
      obj.animated = true;
      const intl = tmp3(1114).intl;
      obj.children = intl.string(tmp3(1114).t.y7LSyU);
      tmp6 = React7(tmp3(4556).Text, obj);
    }
  }
  return tmp6;
}
let closure_3 = ["username"];
const RegistrationUIStore = fn(15946);
({ setRegistrationErrors: closure_7, useRegistrationUIStore: closure_8 } = RegistrationUIStore);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let createStyles = fn(4560);
let closure_12 = createStyles.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
createStyles = { entering: null, exiting: null };
const FadeIn = fn(4296).FadeIn;
createStyles.entering = FadeIn.duration(300);
const FadeOut = fn(4296).FadeOut;
createStyles.exiting = FadeOut.duration(300);
createStyles = { layout: null };
const LinearTransition = fn(4296).LinearTransition;
const Easing = fn(4296).Easing;
createStyles.layout = LinearTransition.easing(Easing.inOut(fn(4296).Easing.quad)).duration(300);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = function RegisterUsernameInput(setUsername) {
  setUsername = setUsername.setUsername;
  ({ usernameStatus, autoFocus } = setUsername);
  importDefault = undefined;
  dependencyMap = undefined;
  ({ username, onSubmitEditing, submitBehavior } = setUsername);
  const ref = noop.useRef(null);
  let obj = { inputRef: ref, enabled: null };
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj.enabled = autoFocus;
  useFocusRefOnNavigationDefault(obj);
  const tmp5 = _slicedToArray(obj.useState(true), 2);
  importDefault = tmp6;
  const tmp7 = closure_8((errors) => errors.errors);
  dependencyMap = tmp7;
  const items = [tmp7, setUsername];
  const items1 = [tmp5[1]];
  const callback = obj.useCallback((str) => {
    if (null != user.username) {
      const username = tmp.username;
      React5(_objectWithoutProperties(tmp, closure_3));
    }
    setUsername(str.toLowerCase());
  }, items);
  const items2 = [tmp5[1]];
  const callback1 = obj.useCallback(() => {
    closure_1(true);
  }, items1);
  const callback2 = obj.useCallback(() => {
    closure_1(false);
  }, items2);
  obj = { ref, label: null, accessibilityHint: null, onChange: null, autoCorrect: false, secureTextEntry: null, keyboardType: null, value: null, onSubmitEditing: null, returnKeyType: "next", autoComplete: "username", textContentType: "username", autoCapitalize: "none", onFocus: null, onBlur: null, isClearable: true, status: null, submitBehavior: null };
  const intl = setUsername(1114).intl;
  obj.label = intl.string(setUsername(1114).t.IEpCBQ);
  const intl2 = setUsername(1114).intl;
  obj.accessibilityHint = intl2.string(setUsername(1114).t["47dcUZ"]);
  obj.onChange = callback;
  const tmp11 = closure_10;
  const tmp12 = closure_11;
  const tmp14 = setUsername;
  obj.secureTextEntry = setUsername(1115).isAndroid();
  const obj4 = setUsername(1115);
  let str = "default";
  if (obj5.isAndroid()) {
    str = "visible-password";
  }
  obj.keyboardType = str;
  obj.value = username;
  obj.onSubmitEditing = onSubmitEditing;
  obj.onFocus = callback1;
  obj.onBlur = callback2;
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  let str2;
  if (type === tmp14(14706).NameValidationState.ERROR) {
    str2 = "error";
  }
  const obj1 = { children: null };
  obj.status = str2;
  obj.submitBehavior = submitBehavior;
  const items3 = [closure_9(setUsername(6606).TextInput, obj), closure_9(UsernameStatusMessage, { usernameStatus, isUsernameFocused: tmp5[0] })];
  obj1.children = items3;
  return tmp11(tmp12, obj1);
};