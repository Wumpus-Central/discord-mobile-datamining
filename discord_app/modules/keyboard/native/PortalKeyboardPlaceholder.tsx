// === Module 12252: PortalKeyboardPlaceholder ===

// Module 12252 (PortalKeyboardPlaceholder)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import KeyboardTypes from "KeyboardTypes" /* 1609 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1877 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4427 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5579 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6945 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7872 */;
import noop from "module_19" /* 19 */;

require = fn;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = useSafeAreaInsetsDefault();
  const tmp = useIsWindowLargeDefault();
  const tmp2 = useWindowDimensionsDefault();
  const obj = { style: null };
  const items = [closure_6(keyboardType.keyboardType, useWindowDimensionsDefault().width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp).container, obj.useGradientBottom()];
  obj.style = items;
  return <React3 style={null} />;
}
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((arg0, arg1, arg2, arg3) => {
  let container = PlatformUtils;
  let absoluteFillObject = null;
  if (container.isIOS()) {
    absoluteFillObject = React4.absoluteFillObject;
  }
  container = {};
  const merged = Object.assign(absoluteFillObject);
  container.borderTopWidth = React4.hairlineWidth;
  container.borderTopColor = nativeDefault.colors.BORDER_SUBTLE;
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
  container.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsx(function PortalKeyboardPlaceholder() {
  const tmp2 = useKeyboardTypeDefault();
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    let obj = PlatformUtils;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp2 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      obj = { keyboardType: tmp2 };
      tmp6 = <PortalKeyboardPlaceholderInner keyboardType={tmp2} />;
    }
  } else {
    tmp6 = null;
    const tmp5Result = PlatformUtils;
  }
  return tmp6;
}, {});