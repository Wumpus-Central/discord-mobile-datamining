// discord_app/modules/animations/native/DeprecatedLayoutAnimation.tsx
import set from "../../../../_runtime/00002_set.js";
import set2 from "../../../utils/PlatformUtils.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../a11y/AccessibilityStore.tsx";
import obj from "../../../../_runtime/00150__isNativeReflectConstruct.js";

({ Keyboard: obj1, LayoutAnimation } = get_ActivityIndicator);
const result = set.fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = obj;
export const DeprecatedLayoutAnimation = function DeprecatedLayoutAnimation(duration) {
  let useReducedMotion = closure_4.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = set2.isAndroid();
    const obj = set2;
  }
  if (!useReducedMotion) {
    if (null != duration) {
      LayoutAnimation.configureNext(duration);
    } else {
      LayoutAnimation.easeInEaseOut();
    }
  }
};
export const DeprecatedLayoutAnimationKeyboard = function DeprecatedLayoutAnimationKeyboard(keyboardDuration) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    let obj = set2;
    if (!obj.isAndroid()) {
      obj = { duration: null };
      obj[0] = keyboardDuration;
      return closure_2.scheduleLayoutAnimation(obj);
    }
  }
  obj = { duration: keyboardDuration, update: obj1 };
  let useReducedMotion = closure_4.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = set2.isAndroid();
    const obj6 = set2;
  }
  if (!useReducedMotion) {
    LayoutAnimation.configureNext(obj);
  }
};
