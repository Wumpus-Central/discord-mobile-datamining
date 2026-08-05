// discord_app/modules/keyboard/native/PortalKeyboardPlaceholder.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
function PortalKeyboardPlaceholderInner(keyboardType) {
  const rect = require("../../safe_area/useSafeAreaInsets.native.tsx")();
  const tmp = require("../../screen/native/useIsWindowLarge.tsx")();
  const tmp2 = require("../../screen/useWindowDimensions.native.tsx")();
  let obj = require("../../client_themes/native/ClientThemesOverrides.tsx") /* useGradientBottom */;
  obj = { style: null };
  const items = [callback(keyboardType.keyboardType, require("../../screen/useWindowDimensions.native.tsx")().width - rect.left - rect.right, require("useCustomKeyboardHeight.tsx")(), tmp).container, obj.useGradientBottom()];
  obj[0] = items;
  return <closure_3 style={null} />;
}
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2, arg3) => {
  let container = require("../../../utils/PlatformUtils.tsx") /* set */;
  let absoluteFillObject = null;
  if (container.isIOS()) {
    absoluteFillObject = closure_4.absoluteFillObject;
  }
  container = {};
  const merged = Object.assign(absoluteFillObject);
  container.borderTopWidth = closure_4.hairlineWidth;
  container.borderTopColor = require("../../../../discord_common/js/packages/tokens/native.tsx").colors.BORDER_SUBTLE;
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
  container.backgroundColor = require("../../../../discord_common/js/packages/tokens/native.tsx").colors.BACKGROUND_BASE_LOW;
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
  const tmp2 = require("useKeyboardType.tsx")();
  let isAndroidResult = require("useSystemKeyboardHeight.native.tsx")() > 0;
  if (isAndroidResult) {
    let obj = require("../../../utils/PlatformUtils.tsx") /* set */;
    isAndroidResult = obj.isAndroid();
  }
  if (tmp2 !== require("KeyboardTypes.tsx") /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    let tmp6 = null;
    if (!isAndroidResult) {
      obj = { keyboardType: null };
      obj[0] = tmp2;
      tmp6 = <PortalKeyboardPlaceholderInner keyboardType={null} />;
    }
  } else {
    tmp6 = null;
    const tmp5Result = require("../../../utils/PlatformUtils.tsx") /* set */;
  }
  return tmp6;
}, {});
const result = require("jsxProd").fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsxResult;