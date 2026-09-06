// discord_app/modules/animations/native/DeprecatedLayoutAnimation.tsx
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import get_ActivityIndicator from "../../../../_runtime/metro/00017__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ Keyboard: c2, LayoutAnimation } = get_ActivityIndicator);
LayoutAnimation.create(150, "easeInEaseOut", "opacity");
let obj = LayoutAnimation.create(150, "easeInEaseOut", "scaleXY");
const result = size.fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = obj;
export const DeprecatedLayoutAnimation = function DeprecatedLayoutAnimation(duration) {
  let useReducedMotion = AccessibilityStore.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = PlatformUtils.isAndroid();
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
    let obj = PlatformUtils;
    if (!obj.isAndroid()) {
      obj = { duration: keyboardDuration };
      return React2.scheduleLayoutAnimation(obj);
    }
  }
  obj = { duration: keyboardDuration, update: { duration: keyboardDuration, type: LayoutAnimation.Types.keyboard } };
  let useReducedMotion = AccessibilityStore.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = PlatformUtils.isAndroid();
  }
  if (!useReducedMotion) {
    LayoutAnimation.configureNext(obj);
  }
};
