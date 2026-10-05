// === Module 6696: ActionSheetCloseButton ===

// Module 6696 (ActionSheetCloseButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Pressables from "Pressables" /* 5909 */;
import XSmallIcon2 from "XSmallIcon" /* 6017 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const androidRippleConfig = Object.freeze({ radius: 12 });
const hitSlop = Object.freeze({ top: 8, right: 8, bottom: 8, left: 8 });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((onPress) => {
  let ICON_STRONG;
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  onPress = onPress.onPress;
  const variant = onPress.variant;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.cpT0Cq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if ("overlay" === variant) {
    ICON_STRONG = nativeDefault.colors.WHITE;
  } else {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  if (cResult[1] !== ICON_STRONG) {
    const tmp10 = jsx(XSmallIcon2.XSmallIcon, { color: ICON_STRONG });
    cResult[1] = ICON_STRONG;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === onPress) {
    let tmp11;
    if (cResult[4] === tmp8) {
      tmp11 = cResult[5];
    }
    return tmp11;
  }
  const tmp12 = jsx(Pressables.PressableOpacity, { accessibilityRole: "button", accessibilityLabel: first, hitSlop, androidRippleConfig, onPress, children: tmp8 });
  cResult[3] = onPress;
  cResult[4] = tmp8;
  cResult[5] = tmp12;
  tmp11 = tmp12;
}) : ((arg0) => {
  let onPress;
  let variant;
  ({ onPress, variant } = arg0);
  const PressableOpacity = Pressables.PressableOpacity;
  const intl = intl2.intl;
  const XSmallIcon = XSmallIcon2.XSmallIcon;
  if ("overlay" === variant) {
    let ICON_STRONG = nativeDefault.colors.WHITE;
  } else {
    ICON_STRONG = nativeDefault.colors.ICON_STRONG;
  }
  return <PressableOpacity accessibilityRole="button" accessibilityLabel={intl.string(intl2.t.cpT0Cq)} hitSlop={hitSlop} androidRippleConfig={androidRippleConfig} onPress={onPress}>{null}</PressableOpacity>;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetCloseButton.native.tsx");

export const ActionSheetCloseButton = tmp3;