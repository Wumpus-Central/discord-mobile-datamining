// === Module 5604: LayoutAnimation ===

// Module 5604 (LayoutAnimation)
import set from "set" /* 2 */;
import set2 from "set" /* 1234 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import obj from "module_150" /* 150 */;

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