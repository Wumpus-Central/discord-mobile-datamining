// discord_app/modules/keyboard/native/PortalKeyboardPlaceholder.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { useGradientBottom } from "../../client_themes/native/ClientThemesOverrides.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { useIsWindowLarge } from "../../screen/native/useIsWindowLarge.tsx";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";
import { KeyboardTypes } from "KeyboardTypes.tsx";
import { useCustomKeyboardHeight } from "useCustomKeyboardHeight.tsx";
import { useKeyboardType } from "useKeyboardType.tsx";
import { useSystemKeyboardHeight } from "useSystemKeyboardHeight.native.tsx";

let c3;
let c4;
const require = arg1;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = useSafeAreaInsets();
  const tmp = useIsWindowLarge();
  const tmp2 = useWindowDimensions();
  let obj = useGradientBottom /* useGradientBottom */;
  obj = { style: null };
  const items = [callback(keyboardType.keyboardType, useWindowDimensions().width - rect.left - rect.right, useCustomKeyboardHeight(), tmp).container, obj.useGradientBottom()];
  obj[0] = items;
  return <closure_3 style={null} />;
}
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2, arg3) => {
  let container = set /* set */;
  let absoluteFillObject = null;
  if (container.isIOS()) {
    absoluteFillObject = closure_4.absoluteFillObject;
  }
  container = {};
  const merged = Object.assign(absoluteFillObject);
  container.borderTopWidth = closure_4.hairlineWidth;
  container.borderTopColor = Themes.colors.BORDER_SUBTLE;
  let BORDER_SUBTLE;
  if (arg3) {
    BORDER_SUBTLE = tmp7(712).colors.BORDER_SUBTLE;
  }
  container.borderRightColor = BORDER_SUBTLE;
  let hairlineWidth;
  if (arg3) {
    hairlineWidth = tmp6.hairlineWidth;
  }
  container.borderRightWidth = hairlineWidth;
  let BORDER_SUBTLE1;
  if (arg3) {
    BORDER_SUBTLE1 = tmp7(712).colors.BORDER_SUBTLE;
  }
  container.borderLeftColor = BORDER_SUBTLE1;
  let hairlineWidth1;
  if (arg3) {
    hairlineWidth1 = tmp6.hairlineWidth;
  }
  container.borderLeftWidth = hairlineWidth1;
  const APP_LAUNCHER = tmp(1579).KeyboardTypes.APP_LAUNCHER;
  container.backgroundColor = Themes.colors.BACKGROUND_BASE_LOW;
  let tmpResult = tmp(500);
  if (tmpResult.isIOS()) {
    const tmp12 = arg1;
  }
  container.width = tmp12;
  tmpResult = tmp(500);
  if (tmpResult.isIOS()) {
    const tmp13 = arg2;
  }
  container.height = tmp13;
  return { container };
});
const jsxResult = jsx(function PortalKeyboardPlaceholder() {
  const tmp2 = useKeyboardType();
  let isAndroidResult = useSystemKeyboardHeight() > 0;
  if (isAndroidResult) {
    let obj = set /* set */;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp2 !== KeyboardTypes /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      obj = { keyboardType: null };
      obj[0] = tmp2;
      tmp6 = <PortalKeyboardPlaceholderInner keyboardType={null} />;
    }
  } else {
    tmp6 = null;
    const tmp5Result = set /* set */;
  }
  return tmp6;
}, {});
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;