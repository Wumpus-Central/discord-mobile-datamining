// === Module 5443: LayoutAnimation ===

// Module 5443 (LayoutAnimation)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import "module_150";
import obj from "module_150" /* 150 */;

({ Keyboard: obj1, LayoutAnimation } = get_ActivityIndicator);
const result = obj132.fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = obj;
export const DeprecatedLayoutAnimation = function DeprecatedLayoutAnimation(duration) {
  let useReducedMotion = closure_4.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = obj1322.isAndroid();
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
    let obj = obj1322;
    if (!obj.isAndroid()) {
      obj = { duration: null };
      obj[0] = keyboardDuration;
      return closure_2.scheduleLayoutAnimation(obj);
    }
  }
  obj = { duration: keyboardDuration, update: obj1 };
  let useReducedMotion = closure_4.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = obj1322.isAndroid();
  }
  if (!useReducedMotion) {
    LayoutAnimation.configureNext(obj);
  }
  obj1 = { duration: keyboardDuration, type: LayoutAnimation.Types.keyboard };
};