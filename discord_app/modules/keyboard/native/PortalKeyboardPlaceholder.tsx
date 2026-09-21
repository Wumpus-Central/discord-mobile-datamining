// === Module 12505: PortalKeyboardPlaceholder ===

// Module 12505 (PortalKeyboardPlaceholder)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1478 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1878 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4624 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5796 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7188 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 8116 */;
import noop from "module_19" /* 19 */;

require = fn;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = useSafeAreaInsetsDefault();
  const tmp = useIsWindowLargeDefault();
  const tmp2 = useWindowDimensionsDefault();
  const tmp3 = closure_6(keyboardType.keyboardType, useWindowDimensionsDefault().width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp);
  const obj2 = { style: null };
  const items = [tmp3.container, ClientThemesOverrides.useGradientBottom()];
  obj2.style = items;
  return <React3 style={null} />;
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_6 = createStyles.createStyles((arg0, arg1, arg2, arg3) => {
  let absoluteFillObject = null;
  if (obj.isIOS()) {
    absoluteFillObject = React4.absoluteFillObject;
  }
  const obj2 = {};
  const merged = Object.assign(absoluteFillObject);
  obj2.borderTopWidth = React4.hairlineWidth;
  obj2.borderTopColor = nativeDefault.colors.BORDER_SUBTLE;
  let BORDER_SUBTLE;
  if (arg3) {
    BORDER_SUBTLE = nativeDefault.colors.BORDER_SUBTLE;
  }
  obj2.borderRightColor = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = React4.hairlineWidth;
  }
  obj2.borderRightWidth = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = nativeDefault.colors.BORDER_SUBTLE;
  }
  obj2.borderLeftColor = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = React4.hairlineWidth;
  }
  obj2.borderLeftWidth = hairlineWidth1;
  const APP_LAUNCHER = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
  obj2.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj = PlatformUtils;
  if (tmpResult.isIOS()) {
    const tmp12 = arg1;
  }
  obj2.width = tmp12;
  tmpResult = PlatformUtils;
  if (tmpResult2.isIOS()) {
    const tmp13 = arg2;
  }
  obj2.height = tmp13;
  return { container: obj2 };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsx(function PortalKeyboardPlaceholder() {
  const tmp2 = useKeyboardTypeDefault();
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    isAndroidResult = PlatformUtils.isAndroid();
  }
  if (tmp2 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      const obj2 = { keyboardType: tmp2 };
      tmp6 = <PortalKeyboardPlaceholderInner keyboardType={tmp2} />;
    }
  } else {
    PlatformUtils;
    tmp6 = null;
  }
  return tmp6;
}, {});