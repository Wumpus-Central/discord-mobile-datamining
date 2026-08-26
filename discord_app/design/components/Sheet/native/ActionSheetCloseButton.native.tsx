// === Module 5937: ActionSheetCloseButton ===

// Module 5937 (ActionSheetCloseButton)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import PressableBase from "PressableBase" /* 5015 */;
import XSmallIcon from "XSmallIcon" /* 5498 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
let closure_4 = Object.freeze({ radius: 12 });
let closure_5 = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
const result = require("set").fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export const ActionSheetCloseButton = function ActionSheetCloseButton(arg0) {
  ({ onPress, variant } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[2] = closure_5;
  obj[3] = closure_4;
  obj[4] = onPress;
  if ("overlay" === variant) {
    let ICON_STRONG = ThemesDefault.colors.WHITE;
  } else {
    ICON_STRONG = ThemesDefault.colors.ICON_STRONG;
  }
  obj[5] = jsx(XSmallIcon.XSmallIcon, { color: ICON_STRONG });
  return jsx(PressableBase.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null });
};