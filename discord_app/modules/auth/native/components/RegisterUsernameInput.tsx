// === Module 15302: UsernameStatusMessage ===

// Module 15302 (UsernameStatusMessage)
import ThemesDefault from "Themes" /* 712 */;
import NameValidationState from "NameValidationState" /* 14184 */;
import useFocusRefOnNavigationDefault from "useFocusRefOnNavigation" /* 15294 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import useRegistrationUIStore from "useRegistrationUIStore" /* 15276 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import { FadeIn, FadeOut, LinearTransition, Easing } from "module_4119" /* 4119 */;

require = arg1;
function UsernameStatusMessage(arg0) {
  ({ usernameStatus, isUsernameFocused } = arg0);
  const tmp = callback5();
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  if (type === NameValidationState.NameValidationState.ERROR) {
    let obj = { direction: "horizontal", spacing: 4, align: "flex-start", children: null };
    obj = { size: "xs", color: null };
    obj[1] = ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL;
    const items = [callback3(tmp3(8113).CircleErrorIcon, obj), ];
    obj1 = { variant: "text-xs/medium", color: "text-feedback-critical", style: null };
    obj1[2] = tmp.status;
    const merged = Object.assign(createCacheKey);
    const merged1 = Object.assign(createCacheKey);
    obj1.animated = true;
    obj1.children = usernameStatus.message;
    items[1] = callback3(tmp3(4739).Text, obj1);
    obj[3] = items;
    let tmp6 = callback4(tmp3(4738).Stack, obj);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (usernameStatus != null) {
        type1 = usernameStatus.type;
      }
      if (type1 === tmp3(14184).NameValidationState.AVAILABLE) {
        const obj2 = {};
        const merged2 = Object.assign(createCacheKey);
        const merged3 = Object.assign(createCacheKey);
        obj2.style = tmp.status;
        obj2.variant = "text-xs/medium";
        obj2.animated = true;
        const obj3 = { variant: "text-xs/medium", color: "text-feedback-positive", children: null };
        obj3[2] = usernameStatus.message;
        obj2.children = callback3(tmp3(4739).Text, obj3);
        tmp6 = callback3(tmp3(4739).Text, obj2);
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
      const intl = tmp3(1236).intl;
      obj.children = intl.string(tmp3(1236).t.y7LSyU);
      tmp6 = callback3(tmp3(4739).Text, obj);
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
const easingResult = LinearTransition.easing(Easing.inOut(require("module_4119").Easing.quad));
const result = require("set").fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = function RegisterUsernameInput(setUsername) {
  setUsername = setUsername.setUsername;
  ({ usernameStatus, autoFocus } = setUsername);
  importDefault = undefined;
  dependencyMap = undefined;
  let obj = React;
  ({ username, onSubmitEditing, submitBehavior } = setUsername);
  const ref = React.useRef(null);
  obj = { inputRef: ref, enabled: null };
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
      const username = tmp.username;
      closure_1_7(closure_1_4(tmp, closure_1_3));
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
  const tmp11 = closure_10;
  const tmp12 = closure_11;
  const tmp14 = setUsername;
  const tmp3 = useFocusRefOnNavigationDefault;
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
  if (type === tmp14(14184).NameValidationState.ERROR) {
    str2 = "error";
  }
  obj1 = { children: null };
  obj[16] = str2;
  obj[17] = submitBehavior;
  const items3 = [closure_9(setUsername(8110).TextInput, obj), closure_9(UsernameStatusMessage, { usernameStatus, isUsernameFocused: tmp5[0] })];
  obj1[0] = items3;
  return tmp11(tmp12, obj1);
};