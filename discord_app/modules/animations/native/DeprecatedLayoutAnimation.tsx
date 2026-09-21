// === Module 5798: DeprecatedLayoutAnimation ===

// Module 5798 (DeprecatedLayoutAnimation)
import PlatformUtils from "PlatformUtils" /* 1364 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;
import size from "module_2" /* 2 */;

({ Keyboard: c2, LayoutAnimation } = get_ActivityIndicator);
let obj = LayoutAnimation.create(150, "easeInEaseOut", "opacity");
const result = size.fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = LayoutAnimation.create(150, "easeInEaseOut", "scaleXY");
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
    if (!obj.isAndroid()) {
      const obj2 = { duration: keyboardDuration };
      return React2.scheduleLayoutAnimation(obj2);
    }
    obj = PlatformUtils;
  }
  const obj3 = { duration: keyboardDuration, update: { duration: keyboardDuration, type: LayoutAnimation.Types.keyboard } };
  let useReducedMotion = AccessibilityStore.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = PlatformUtils.isAndroid();
  }
  if (!useReducedMotion) {
    LayoutAnimation.configureNext(obj3);
  }
  const obj4 = { duration: keyboardDuration, type: LayoutAnimation.Types.keyboard };
};