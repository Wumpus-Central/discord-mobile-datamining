// discord_app/modules/keyboard/native/PortalKeyboardPlaceholder.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import KeyboardTypes from "KeyboardTypes.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import useSystemKeyboardHeightDefault from "useSystemKeyboardHeight.native.tsx";
import useKeyboardTypeDefault from "useKeyboardType.tsx";
import useIsWindowLargeDefault from "../../screen/native/useIsWindowLarge.tsx";
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight.tsx";
import ClientThemesOverrides from "../../client_themes/native/ClientThemesOverrides.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
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
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function PortalKeyboardPlaceholderInner(keyboardType) {
      const cResult = c.c(3);
      const rect = useSafeAreaInsetsDefault();
      const tmp2 = useIsWindowLargeDefault();
      const tmp4 = closure_6(
        keyboardType.keyboardType,
        useWindowDimensionsDefault().width - rect.left - rect.right,
        useCustomKeyboardHeightDefault(),
        tmp2,
      );
      const tmp3 = useWindowDimensionsDefault();
      const gradientBottom = ClientThemesOverrides.useGradientBottom();
      if (cResult[0] === tmp4.container) {
        if (cResult[1] === gradientBottom) {
          let tmp6 = cResult[2];
        }
        return tmp6;
      }
      const obj3 = { style: null };
      const items = [tmp4.container, gradientBottom];
      obj3.style = items;
      const tmp7 = <React3 style={null} />;
      cResult[0] = tmp4.container;
      cResult[1] = gradientBottom;
      cResult[2] = tmp7;
      tmp6 = tmp7;
    }
  : function PortalKeyboardPlaceholderInner(keyboardType) {
      const rect = useSafeAreaInsetsDefault();
      const tmp = useIsWindowLargeDefault();
      const tmp2 = useWindowDimensionsDefault();
      const tmp3 = closure_6(
        keyboardType.keyboardType,
        useWindowDimensionsDefault().width - rect.left - rect.right,
        useCustomKeyboardHeightDefault(),
        tmp,
      );
      const obj2 = { style: null };
      const items = [tmp3.container, ClientThemesOverrides.useGradientBottom()];
      obj2.style = items;
      return <React3 style={null} />;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardPlaceholder.tsx");

export const PORTAL_KEYBOARD_PLACEHOLDER_INSTANCE = jsx(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function PortalKeyboardPlaceholder() {
        const cResult = c.c(2);
        const tmp4 = useKeyboardTypeDefault();
        let num = 0;
        let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
        if (isAndroidResult) {
          isAndroidResult = PlatformUtils.isAndroid();
          const tmpResult = PlatformUtils;
        }
        if (tmp4 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
          let tmp6 = null;
          if (!isAndroidResult) {
            if (cResult[0] !== tmp4) {
              const obj2 = { keyboardType: tmp4 };
              const tmp10 = <closure_7 keyboardType={tmp4} />;
              cResult[num] = tmp4;
              num = 1;
              cResult[1] = tmp10;
            }
          }
        } else {
          PlatformUtils;
          tmp6 = null;
        }
        return tmp6;
      }
    : function PortalKeyboardPlaceholder() {
        const tmp2 = useKeyboardTypeDefault();
        let isAndroidResult = useSystemKeyboardHeightDefault() > 0;
        if (isAndroidResult) {
          isAndroidResult = PlatformUtils.isAndroid();
        }
        if (tmp2 !== KeyboardTypes.KeyboardTypes.SYSTEM) {
          let tmp6 = null;
          if (!isAndroidResult) {
            const obj2 = { keyboardType: tmp2 };
            tmp6 = <closure_7 keyboardType={tmp2} />;
          }
        } else {
          PlatformUtils;
          tmp6 = null;
        }
        return tmp6;
      },
  {},
);
