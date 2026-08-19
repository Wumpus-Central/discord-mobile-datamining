// === Module 11415: PortalKeyboardPlaceholderInner ===

// Module 11415 (PortalKeyboardPlaceholderInner)
import noopAll from "noop" /* 19 */;
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1895 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4239 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5444 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7925 */;
import useGradientBottom from "useGradientBottom" /* 8501 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = useSafeAreaInsetsDefault();
  const tmp = useIsWindowLargeDefault();
  const tmp2 = useWindowDimensionsDefault();
  const obj = { style: null };
  const items = [callback(keyboardType.keyboardType, useWindowDimensionsDefault().width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp).container, obj.useGradientBottom()];
  obj[0] = items;
  return <closure_3 style={null} />;
}
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2, arg3) => {
  let container = obj132;
  let absoluteFillObject = null;
  if (container.isIOS()) {
    absoluteFillObject = closure_4.absoluteFillObject;
  }
  container = {};
  const merged = Object.assign(absoluteFillObject);
  container.borderTopWidth = closure_4.hairlineWidth;
  container.borderTopColor = ThemesDefault.colors.BORDER_SUBTLE;
  let BORDER_SUBTLE;
  if (arg3) {
    BORDER_SUBTLE = ThemesDefault.colors.BORDER_SUBTLE;
  }
  container.borderRightColor = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = closure_4.hairlineWidth;
  }
  container.borderRightWidth = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = ThemesDefault.colors.BORDER_SUBTLE;
  }
  container.borderLeftColor = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = closure_4.hairlineWidth;
  }
  container.borderLeftWidth = hairlineWidth1;
  const APP_LAUNCHER = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
  container.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOW;
  let tmpResult = obj132;
  if (tmpResult.isIOS()) {
    const tmp12 = arg1;
  }
  container.width = tmp12;
  tmpResult = obj132;
  if (tmpResult.isIOS()) {
    const tmp13 = arg2;
  }
  container.height = tmp13;
  return { container };
});
const jsxResult = jsx(function PortalKeyboardPlaceholder() {
  const tmp2 = useKeyboardTypeDefault();
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    let obj = obj132;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp2 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      obj = { keyboardType: null };
      obj[0] = tmp2;
      tmp6 = <PortalKeyboardPlaceholderInner keyboardType={null} />;
    }
  } else {
    obj132;
    tmp6 = null;
  }
  return tmp6;
}, {});
const result = require("obj132").fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;