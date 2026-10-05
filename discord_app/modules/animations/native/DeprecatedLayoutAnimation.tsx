// discord_app/modules/animations/native/DeprecatedLayoutAnimation.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let LayoutAnimation;
let c2;
({ Keyboard: c2, LayoutAnimation } = react_native);
let obj = LayoutAnimation.create(150, "easeInEaseOut", "opacity");
let obj3 = LayoutAnimation.create(150, "easeInEaseOut", "scaleXY");
const result = size.fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = obj3;
export const DeprecatedLayoutAnimation = function DeprecatedLayoutAnimation(duration) {
  let useReducedMotion = AccessibilityStore.useReducedMotion;
  if (!useReducedMotion) {
    const obj = PlatformUtils;
    useReducedMotion = obj.isAndroid();
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
  let obj4;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const obj = PlatformUtils;
    if (!obj.isAndroid()) {
      const obj2 = { duration: keyboardDuration };
      return React2.scheduleLayoutAnimation(obj2);
    }
  }
  const obj3 = { duration: keyboardDuration, update: obj4 };
  let useReducedMotion = AccessibilityStore.useReducedMotion;
  obj4 = { duration: keyboardDuration, type: LayoutAnimation.Types.keyboard };
  if (!useReducedMotion) {
    const obj6 = PlatformUtils;
    useReducedMotion = obj6.isAndroid();
  }
  if (!useReducedMotion) {
    LayoutAnimation.configureNext(obj3);
  }
};
