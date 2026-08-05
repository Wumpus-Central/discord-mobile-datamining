// discord_app/modules/animations/native/DeprecatedLayoutAnimation.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import obj from "module_150";
import obj from "module_150";
import { set } from "../../../utils/PlatformUtils.tsx";

let LayoutAnimation;
let obj1;
({ Keyboard: obj1, LayoutAnimation } = get_ActivityIndicator);
const result = require("set").fileFinishedImporting("modules/animations/native/DeprecatedLayoutAnimation.tsx");

export const CONFIG_GUILD_FOLDER_OPACITY = obj;
export const CONFIG_GUILD_FOLDER_SCALEXY = obj;
export const DeprecatedLayoutAnimation = function DeprecatedLayoutAnimation(duration) {
  let useReducedMotion = maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = set /* set */.isAndroid();
    const obj = set /* set */;
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
    let obj = set /* set */;
    if (!obj.isAndroid()) {
      obj = { duration: null };
      obj[0] = keyboardDuration;
      return closure_2.scheduleLayoutAnimation(obj);
    }
  }
  obj = { duration: keyboardDuration, update: obj1 };
  let useReducedMotion = maybeApplyNoTextColorForLightCustomTheme.useReducedMotion;
  if (!useReducedMotion) {
    useReducedMotion = set /* set */.isAndroid();
    const obj6 = set /* set */;
  }
  if (!useReducedMotion) {
    LayoutAnimation.configureNext(obj);
  }
};