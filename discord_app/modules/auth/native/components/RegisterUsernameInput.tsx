// === Module 15238: UsernameStatusMessage ===

// Module 15238 (UsernameStatusMessage)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import CircleErrorIcon from "CircleErrorIcon" /* 8074 */;
import NameValidationState from "NameValidationState" /* 14116 */;
import useFocusRefOnNavigationDefault from "useFocusRefOnNavigation" /* 15230 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import useRegistrationUIStore from "useRegistrationUIStore" /* 15212 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import { FadeIn, FadeOut, LinearTransition, Easing } from "module_4115" /* 4115 */;

require = fn;
function UsernameStatusMessage(arg0) {
  ({ usernameStatus, isUsernameFocused } = arg0);
  const tmp = callback5();
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  if (type === NameValidationState.NameValidationState.ERROR) {
    let obj = { size: "xs", color: null };
    obj[1] = ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL;
    const items = [callback3(CircleErrorIcon.CircleErrorIcon, obj), ];
    obj1 = { variant: "text-xs/medium", color: "text-feedback-critical", style: null };
    obj1[2] = tmp.status;
    const merged = Object.assign(createCacheKey);
    const merged1 = Object.assign(createCacheKey);
    obj1.animated = true;
    obj1.children = usernameStatus.message;
    items[1] = callback3(Text.Text, obj1);
    obj[3] = items;
    let tmp6 = callback4(Stack.Stack, obj);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (usernameStatus != null) {
        type1 = usernameStatus.type;
      }
      if (type1 === NameValidationState.NameValidationState.AVAILABLE) {
        const obj2 = {};
        const merged2 = Object.assign(createCacheKey);
        const merged3 = Object.assign(createCacheKey);
        obj2.style = tmp.status;
        obj2.variant = "text-xs/medium";
        obj2.animated = true;
        const obj3 = { variant: "text-xs/medium", color: "text-feedback-positive", children: null };
        obj3[2] = usernameStatus.message;
        obj2.children = callback3(Text.Text, obj3);
        tmp6 = callback3(Text.Text, obj2);
      }
    }
    tmp6 = null;
    if (isUsernameFocused) {
      obj = {};
      const merged4 = Object.assign(createCacheKey);
      const merged5 = Object.assign(createCacheKey);
      obj.style = tmp.inputHint;
      obj.variant = "text-xs/medium";
      obj.color = "text-muted";
      obj.animated = true;
      const intl = getSystemLocale.intl;
      obj.children = intl.string(getSystemLocale.t.y7LSyU);
      tmp6 = callback3(Text.Text, obj);
    }
  }
  return tmp6;
}
let closure_3 = ["username"];
({ setRegistrationErrors: error, useRegistrationUIStore: closure_8 } = useRegistrationUIStore);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
createCacheKey = { entering: null, exiting: null };
createCacheKey[0] = require("module_300");
createCacheKey[1] = require("module_300");
createCacheKey = { layout: null };
createCacheKey[0] = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(require("module_4115").Easing.quad));
const result = require("obj132").fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = function RegisterUsernameInput(setUsername) {
  setUsername = setUsername.setUsername;
  ({ usernameStatus, autoFocus } = setUsername);
  importDefault = undefined;
  dependencyMap = undefined;
  ({ username, onSubmitEditing, submitBehavior } = setUsername);
  const ref = React.useRef(null);
  let obj = { inputRef: ref, enabled: null };
  if (autoFocus == null) {
    autoFocus = false;
  }
  obj[1] = autoFocus;
  useFocusRefOnNavigationDefault(obj);
  const tmp5 = callback(obj.useState(true), 2);
  importDefault = tmp6;
  const tmp7 = callback2((errors) => errors.errors);
  dependencyMap = tmp7;
  const items = [tmp7, setUsername];
  const items1 = [tmp5[1]];
  callback = obj.useCallback((str) => {
    if (null != user.username) {
      const username = user.username;
      closure_1_7(closure_1_4(user, closure_1_3));
    }
    setUsername(str.toLowerCase());
  }, items);
  const items2 = [tmp5[1]];
  const callback1 = obj.useCallback(() => {
    callback(true);
  }, items1);
  callback2 = obj.useCallback(() => {
    callback(false);
  }, items2);
  obj = { ref, label: null, accessibilityHint: null, onChange: null, autoCorrect: false, secureTextEntry: null, keyboardType: null, value: null, onSubmitEditing: null, returnKeyType: "next", autoComplete: "username", textContentType: "username", autoCapitalize: "none", onFocus: null, onBlur: null, isClearable: true, status: null, submitBehavior: null };
  const intl = setUsername(1236).intl;
  obj[1] = intl.string(setUsername(1236).t.IEpCBQ);
  const intl2 = setUsername(1236).intl;
  obj[2] = intl2.string(setUsername(1236).t["47dcUZ"]);
  obj[3] = callback;
  const tmp14 = setUsername;
  obj[5] = setUsername(500).isAndroid();
  const obj4 = setUsername(500);
  let str = "default";
  if (obj5.isAndroid()) {
    str = "visible-password";
  }
  obj[6] = str;
  obj[7] = username;
  obj[8] = onSubmitEditing;
  obj[13] = callback1;
  obj[14] = callback2;
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  let str2;
  if (type === tmp14(14116).NameValidationState.ERROR) {
    str2 = "error";
  }
  obj1 = { children: null };
  obj[16] = str2;
  obj[17] = submitBehavior;
  const items3 = [callback(setUsername(8071).TextInput, obj), callback(UsernameStatusMessage, { usernameStatus, isUsernameFocused: tmp5[0] })];
  obj1[0] = items3;
  return callback2(closure_11, obj1);
};