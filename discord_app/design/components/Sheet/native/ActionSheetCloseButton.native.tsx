// === Module 6880: ActionSheetCloseButton ===

// Module 6880 (ActionSheetCloseButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Pressables from "Pressables" /* 6189 */;
import XSmallIcon from "XSmallIcon" /* 6210 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const androidRippleConfig = Object.freeze({ radius: 12 });
const hitSlop = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export const ActionSheetCloseButton = ReactCompilerGating.isReactCompilerEnabled() ? (function ActionSheetCloseButton(onPress) {
  const cResult = c.c(6);
  onPress = onPress.onPress;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.cpT0Cq);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if ("overlay" === onPress.variant) {
    let ICON_STRONG = nativeDefault.colors.WHITE;
  } else {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  if (cResult[1] !== ICON_STRONG) {
    const obj2 = { color: ICON_STRONG };
    const tmp10 = jsx(XSmallIcon.XSmallIcon, { color: ICON_STRONG });
    cResult[1] = ICON_STRONG;
    cResult[2] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === onPress) {
    if (cResult[4] === tmp8) {
      let tmp11 = cResult[5];
    }
    return tmp11;
  }
  const tmp12 = jsx(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: first, hitSlop, androidRippleConfig, onPress, children: tmp8 });
  cResult[3] = onPress;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
  const obj3 = { accessibilityRole: "button", accessibilityLabel: first, hitSlop, androidRippleConfig, onPress, children: tmp8 };
}) : (function ActionSheetCloseButton(arg0) {
  ({ onPress, variant } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.hitSlop = hitSlop;
  obj.androidRippleConfig = androidRippleConfig;
  obj.onPress = onPress;
  if ("overlay" === variant) {
    let ICON_STRONG = nativeDefault.colors.WHITE;
  } else {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  obj.children = jsx(XSmallIcon.XSmallIcon, { color: ICON_STRONG });
  return jsx(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: null, hitSlop: null, androidRippleConfig: null, onPress: null, children: null });
});