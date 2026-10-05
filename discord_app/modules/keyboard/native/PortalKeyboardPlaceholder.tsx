// === Module 11882: PortalKeyboardPlaceholder ===

// Module 11882 (PortalKeyboardPlaceholder)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight" /* 1884 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 4747 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6433 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 6474 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7507 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let keyboardType;

let c3;
let closure_4;
({ View: c3, StyleSheet: closure_4 } = react_native);
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0, arg1, arg2, arg3) => {
  let BORDER_SUBTLE;
  let BORDER_SUBTLE1;
  let hairlineWidth;
  let hairlineWidth1;
  let tmp12;
  let tmp13;
  let absoluteFillObject = null;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    absoluteFillObject = React3.absoluteFillObject;
  }
  const obj2 = { borderTopWidth: React3.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderRightColor: BORDER_SUBTLE, borderRightWidth: hairlineWidth, borderLeftColor: BORDER_SUBTLE1, borderLeftWidth: hairlineWidth1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, width: tmp12, height: tmp13 };
  const merged = Object.assign(absoluteFillObject);
  BORDER_SUBTLE = undefined;
  if (arg3) {
    BORDER_SUBTLE = nativeDefault.colors.BORDER_SUBTLE;
  }
  hairlineWidth = undefined;
  if (arg3) {
    hairlineWidth = React3.hairlineWidth;
  }
  BORDER_SUBTLE1 = undefined;
  if (arg3) {
    BORDER_SUBTLE1 = nativeDefault.colors.BORDER_SUBTLE;
  }
  hairlineWidth1 = undefined;
  if (arg3) {
    hairlineWidth1 = React3.hairlineWidth;
  }
  const APP_LAUNCHER = KeyboardTypes.KeyboardTypes.APP_LAUNCHER;
  const tmpResult = PlatformUtils;
  if (tmpResult.isIOS()) {
    tmp12 = arg1;
  }
  const tmpResult2 = PlatformUtils;
  if (tmpResult2.isIOS()) {
    tmp13 = arg2;
  }
  return { container: obj2 };
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((keyboardType) => {
  const obj = react2;
  const cResult = obj.c(3);
  keyboardType = keyboardType.keyboardType;
  const rect = useSafeAreaInsetsDefault();
  const tmp2 = useIsWindowLargeDefault();
  const tmp3 = useWindowDimensionsDefault();
  const tmp4 = closure_6(keyboardType, tmp3.width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp2);
  const obj2 = ClientThemesOverrides;
  const gradientBottom = obj2.useGradientBottom();
  if (cResult[0] === tmp4.container) {
    let tmp6;
    if (cResult[1] === gradientBottom) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const items = [tmp4.container, gradientBottom];
  const tmp7 = <_false style={items} />;
  cResult[0] = tmp4.container;
  cResult[1] = gradientBottom;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((keyboardType) => {
  keyboardType = keyboardType.keyboardType;
  const rect = useSafeAreaInsetsDefault();
  const tmp = useIsWindowLargeDefault();
  const tmp2 = useWindowDimensionsDefault();
  const items = [closure_6(keyboardType, tmp2.width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp).container, ];
  const tmp3 = closure_6(keyboardType, tmp2.width - rect.left - rect.right, useCustomKeyboardHeightDefault(), tmp);
  const obj = ClientThemesOverrides;
  items[1] = obj.useGradientBottom();
  return <_false style={items} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
const jsxResult = jsx(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = useKeyboardTypeDefault();
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    const tmpResult = PlatformUtils;
    isAndroidResult = tmpResult.isAndroid();
  }
  if (tmp4 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    tmp6 = null;
    if (!isAndroidResult) {
      let tmp7;
      if (cResult[0] !== tmp4) {
        const tmp10 = <closure_7 keyboardType={tmp4} />;
        cResult[0] = tmp4;
        cResult[1] = tmp10;
        tmp7 = tmp10;
      } else {
        tmp7 = cResult[1];
      }
      tmp6 = tmp7;
    }
  } else {
    PlatformUtils;
    tmp6 = null;
  }
  return tmp6;
}) : (() => {
  let tmp6;
  const tmp2 = useKeyboardTypeDefault();
  let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
  if (isAndroidResult) {
    const obj = PlatformUtils;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp2 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
    tmp6 = null;
    if (!isAndroidResult) {
      tmp6 = <closure_7 keyboardType={tmp2} />;
    }
  } else {
    PlatformUtils;
    tmp6 = null;
  }
  return tmp6;
}), {});
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;