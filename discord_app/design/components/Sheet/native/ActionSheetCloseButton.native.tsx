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
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj[2] = closure_5;
  obj[3] = closure_4;
  obj[4] = onPress;
  if ("overlay" === variant) {
    let ICON_STRONG = importDefault(712).colors.WHITE;
  } else {
    ICON_STRONG = importDefault(712).colors.ICON_STRONG;
  }
  obj[5] = jsx(require(5179) /* XSmallIcon */.XSmallIcon, { color: ICON_STRONG });
  return jsx(require(4721) /* PressableBase */.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null });
};