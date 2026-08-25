// discord_app/modules/auth/native/components/RegisterUsernameInput.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NameValidationState from "../../../unique_usernames/UniqueUsernamesTypes.tsx";
import useFocusRefOnNavigationDefault from "../../../../design/components/Navigator/native/useFocusRefOnNavigation.tsx";
import closure_4 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_6 from "../../../../../_runtime/00019_noop.js";
import useRegistrationUIStore from "../RegistrationUIStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { FadeIn, FadeOut, LinearTransition, Easing } from "../../../reanimated/ReanimatedRexport.tsx";

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
    const items = [callback3(tmp3(7938).CircleErrorIcon, obj), ];
    obj1 = { variant: "text-xs/medium", color: "text-feedback-critical", style: null };
    obj1[2] = tmp.status;
    const merged = Object.assign(createCacheKey);
    const merged1 = Object.assign(createCacheKey);
    obj1.animated = true;
    obj1.children = usernameStatus.message;
    items[1] = callback3(tmp3(4376).Text, obj1);
    obj[3] = items;
    let tmp6 = callback4(tmp3(4813).Stack, obj);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (usernameStatus != null) {
        type1 = usernameStatus.type;
      }
      if (type1 === tmp3(14214).NameValidationState.AVAILABLE) {
        const obj2 = {};
        const merged2 = Object.assign(createCacheKey);
        const merged3 = Object.assign(createCacheKey);
        obj2.style = tmp.status;
        obj2.variant = "text-xs/medium";
        obj2.animated = true;
        const obj3 = { variant: "text-xs/medium", color: "text-feedback-positive", children: null };
        obj3[2] = usernameStatus.message;
        obj2.children = callback3(tmp3(4376).Text, obj3);
        tmp6 = callback3(tmp3(4376).Text, obj2);
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
      tmp6 = callback3(tmp3(4376).Text, obj);
    }
  }
  return tmp6;
}
let closure_3 = ["username"];
({ setRegistrationErrors: error, useRegistrationUIStore: closure_8 } = useRegistrationUIStore);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
createCacheKey = { entering: null, exiting: null };
createCacheKey[0] = require("../../../../../_runtime/00300_get_BatchedBridge.js");
createCacheKey[1] = require("../../../../../_runtime/00300_get_BatchedBridge.js");
createCacheKey = { layout: null };
createCacheKey[0] = require("../../../../../_runtime/00300_get_BatchedBridge.js");
const easingResult = LinearTransition.easing(Easing.inOut(require("../../../reanimated/ReanimatedRexport.tsx").Easing.quad));
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
  if (type === tmp14(14214).NameValidationState.ERROR) {
    str2 = "error";
  }
  obj1 = { children: null };
  obj[16] = str2;
  obj[17] = submitBehavior;
  const items3 = [closure_9(setUsername(7935).TextInput, obj), closure_9(UsernameStatusMessage, { usernameStatus, isUsernameFocused: tmp5[0] })];
  obj1[0] = items3;
  return tmp11(tmp12, obj1);
};