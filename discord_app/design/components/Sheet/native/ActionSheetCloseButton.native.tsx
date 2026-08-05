import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { PressableBase } from "../../../void/Pressables/native/Pressables.tsx";
import { XSmallIcon } from "../../Icon/native/redesign/generated/XSmallIcon.tsx";
// discord_app/design/components/Sheet/native/ActionSheetCloseButton.native.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
let closure_4 = Object.freeze({ radius: 12 });
let closure_5 = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
const result = require("PressableBase").fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export const ActionSheetCloseButton = function ActionSheetCloseButton(arg0) {
  let onPress;
  let variant;
  ({ onPress, variant } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t.cpT0Cq);
  obj[2] = closure_5;
  obj[3] = closure_4;
  obj[4] = onPress;
  if ("overlay" === variant) {
    let ICON_STRONG = Themes.colors.WHITE;
  } else {
    ICON_STRONG = Themes.colors.ICON_STRONG;
  }
  obj[5] = jsx(XSmallIcon /* XSmallIcon */.XSmallIcon, { color: ICON_STRONG });
  return jsx(PressableBase /* PressableBase */.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null });
};