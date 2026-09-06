// === Module 12252: PortalKeyboardPlaceholderInner ===

// Module 12252 (PortalKeyboardPlaceholderInner)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import set from "set" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1877 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4427 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5579 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6945 */;
import useGradientBottom from "useGradientBottom" /* 7872 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = useSafeAreaInsetsDefault();
  const tmp = useIsWindowLargeDefault();
  const tmp2 = useWindowDimensionsDefault();
  let obj = useGradientBottom;
  obj = { style: null };
  const items = [callback(keyboardType.keyboardType, useWindowDimensionsDefault().width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp).container, obj.useGradientBottom()];
  obj[0] = items;
  return <closure_3 style={null} />;
}
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2, arg3) => {
  let container = set;
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
    BORDER_SUBTLE = tmp7(576).colors.BORDER_SUBTLE;
  }
  container.borderRightColor = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = tmp6.hairlineWidth;
  }
  container.borderRightWidth = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = tmp7(576).colors.BORDER_SUBTLE;
  }
  container.borderLeftColor = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = tmp6.hairlineWidth;
  }
  container.borderLeftWidth = hairlineWidth1;
  const APP_LAUNCHER = tmp(1609).KeyboardTypes.APP_LAUNCHER;
  container.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOW;
  let tmpResult = tmp(1115);
  if (tmpResult.isIOS()) {
    const tmp12 = arg1;
  }
  container.width = tmp12;
  tmpResult = tmp(1115);
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
    let obj = set;
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
    tmp6 = null;
    const tmp5Result = set;
  }
  return tmp6;
}, {});
const result = require("set").fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;