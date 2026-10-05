// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, importDefault, obj1, onHeightChange, tmp, tmp2, tmp3, tmp4, variant;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
  let obj2;
  let obj3;
  let obj7;
  let tmp5;
  let PX_24 = arg0;
  const obj = {
    wrap: obj2,
    container: obj3,
    buttonsContainer: {
      gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP,
      alignItems: "stretch",
      flexDirection: "row",
      marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL,
    },
    button: {
      flexBasis: 64,
      minHeight: 48,
      flexGrow: 1,
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      padding: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING,
      borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS,
      gap: 4,
    },
    gradient: obj7,
  };
  obj2 = { alignItems: "center", top: undefined };
  const merged = Object.assign(variant.absoluteFillObject);
  obj3 = {
    paddingVertical: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL,
    marginBottom: PX_24,
    borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS,
    backgroundColor: tmp5,
    paddingHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL,
    borderWidth: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH,
    borderColor: nativeDefault.colors.BORDER_MUTED,
  };
  const obj4 = PlatformUtils;
  if (obj4.isIOS()) {
    PX_24 = nativeDefault.space.PX_24;
  }
  tmp5 = arg2;
  if (arg2 == null) {
    tmp5 = arg1;
  }
  const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  ({
    gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP,
    alignItems: "stretch",
    flexDirection: "row",
    marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL,
  });
  obj7 = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  ({
    flexBasis: 64,
    minHeight: 48,
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING,
    borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS,
    gap: 4,
  });
  const merged2 = Object.assign(variant.absoluteFillObject);
  return obj;
});
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onHeightChange) => {
        let button;
        let items;
        let tmp13;
        let tmp14;
        let tmp15;
        let tmp17;
        let tmp5;
        let token;
        let obj = onHeightChange(token[7]);
        const cResult = obj.c(38);
        onHeightChange = onHeightChange.onHeightChange;
        let obj2 = onHeightChange(token[8]);
        const gradientValue = obj2.useGradientValue(onHeightChange(token[8]).GradientPercentage.END);
        if (cResult[0] !== gradientValue) {
          let hexResult = null;
          if (null != gradientValue) {
            const obj3 = require("../../../../../_runtime/metro/00683__.js")(gradientValue);
            const alphaResult = obj3.alpha(0.95);
            hexResult = alphaResult.hex();
          }
          cResult[0] = gradientValue;
          cResult[1] = hexResult;
          tmp5 = hexResult;
        } else {
          tmp5 = cResult[1];
        }
        const bottom = require("useSafeAreaInsets")().bottom;
        const tmpResult = onHeightChange(token[11]);
        const tmp9 = closure_8(
          bottom,
          tmpResult.useToken(require("native").colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER),
          tmp5,
        );
        importDefault = tmp9;
        const tmpResult4 = onHeightChange(token[11]);
        token = tmpResult4.useToken(require("native").modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
        const tmpResult5 = onHeightChange(token[11]);
        const token1 = tmpResult5.useToken(require("native").modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
        const tmpResult6 = onHeightChange(token[11]);
        const token2 = tmpResult6.useToken(require("native").modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0 };
          const point1 = { x: 0, y: 1 };
          cResult[2] = point;
          cResult[3] = point1;
          tmp14 = point1;
          tmp13 = point;
        } else {
          tmp13 = cResult[2];
          tmp14 = cResult[3];
        }
        if (cResult[4] !== tmp9.gradient.color) {
          const obj11 = require("../../../../../_runtime/metro/00683__.js")(tmp9.gradient.color);
          const alphaResult1 = obj11.alpha(0);
          const hexResult1 = alphaResult1.hex();
          cResult[4] = tmp9.gradient.color;
          cResult[5] = hexResult1;
          tmp15 = hexResult1;
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] !== tmp9.gradient.color) {
          const obj13 = require("../../../../../_runtime/metro/00683__.js")(tmp9.gradient.color);
          const alphaResult2 = obj13.alpha(1);
          const hexResult2 = alphaResult2.hex();
          cResult[6] = tmp9.gradient.color;
          cResult[7] = hexResult2;
          tmp17 = hexResult2;
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] === tmp15) {
          let tmp19;
          if (cResult[9] === tmp17) {
            tmp19 = cResult[10];
          }
          if (cResult[11] !== onHeightChange) {
            class N {
              constructor(arg0) {
                tmp = onHeightChange(onHeightChange.nativeEvent.layout.height);
                return;
              }
            }
            cResult[11] = onHeightChange;
            cResult[12] = N;
          } else {
            class N {
              constructor(arg0) {
                tmp = onHeightChange(onHeightChange.nativeEvent.layout.height);
                return;
              }
            }
          }
          if (cResult[13] === tmp19) {
            class N {
              constructor(arg0) {
                tmp = onHeightChange(onHeightChange.nativeEvent.layout.height);
                return;
              }
            }
            if (cResult[16] === token2) {
              class N {
                constructor(arg0) {
                  tmp = onHeightChange(onHeightChange.nativeEvent.layout.height);
                  return;
                }
              }
            }
            if (cResult[22] === token2) {
              class N {
                constructor(arg0) {
                  tmp = onHeightChange(onHeightChange.nativeEvent.layout.height);
                  return;
                }
              }
            }
            class L {
              constructor(arg0, arg1) {
                tmp = jsxs;
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = {
                  accessibilityRole: "button",
                  accessibilityLabel: onHeightChange.text,
                  accessibilityState: { disabled: onHeightChange.disabled },
                  disabled: onHeightChange.disabled,
                  style: closure_1.button,
                  onPress: onHeightChange.onPress,
                  children: null,
                };
                tmp4 = jsx;
                str = "text-muted";
                str2 = "text-muted";
                PressableOpacity = closure_0(closure_2[13]).PressableOpacity;
                IconComponent = onHeightChange.IconComponent;
                if (!onHeightChange.disabled) {
                  str2 = closure_2;
                }
                items = [,];
                items[0] = tmp4(IconComponent, { size: "md", color: str2 });
                obj1 = { lineClamp: 1, variant: closure_4, color: null, children: null };
                Text = tmp2(tmp3[14]).Text;
                if (!onHeightChange.disabled) {
                  str = closure_3;
                }
                obj1.color = str;
                obj1.children = onHeightChange.text;
                items[1] = tmp4(Text, obj1);
                obj.children = items;
                return tmp(PressableOpacity, obj, arg1);
              }
            }
            cResult[22] = token2;
            cResult[23] = token;
            cResult[24] = tmp9.button;
            cResult[25] = token1;
            cResult[26] = L;
          }
          const obj4 = { style: tmp9.gradient, pointerEvents: "none" };
          const tmp8Result = require("LinearGradient");
          const merged = Object.assign(tmp19);
          let str = "none";
          cResult[13] = tmp19;
          cResult[14] = tmp9.gradient;
          cResult[15] = closure_6(tmp8Result, obj4);
          const tmp26 = closure_6(tmp8Result, obj4);
        }
        const obj5 = { start: tmp13, end: tmp14, colors: items };
        items = [tmp15, tmp17];
        cResult[8] = tmp15;
        cResult[9] = tmp17;
        cResult[10] = obj5;
        tmp19 = obj5;
      }
    : (onHeightChange) => {
        let closure_1;
        let closure_2;
        let closure_3;
        let items2;
        let obj6;
        onHeightChange = onHeightChange.onHeightChange;
        const overflowButtons = onHeightChange.overflowButtons;
        importDefault = undefined;
        dependencyMap = undefined;
        react = undefined;
        variant = undefined;
        let obj = onHeightChange(4696);
        const gradientValue = obj.useGradientValue(onHeightChange(4696).GradientPercentage.END);
        let hexResult = null;
        if (null != gradientValue) {
          let obj2 = _modDef683(gradientValue);
          let alphaResult = obj2.alpha(0.95);
          hexResult = alphaResult.hex();
        }
        const bottom = useSafeAreaInsetsDefault().bottom;
        const tmpResult = onHeightChange(4580);
        const tmp6 = closure_8(
          bottom,
          tmpResult.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER),
          hexResult,
        );
        importDefault = tmp6;
        const tmpResult4 = onHeightChange(4580);
        dependencyMap = tmpResult4.useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE);
        const tmpResult5 = onHeightChange(4580);
        react = tmpResult5.useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
        const tmpResult6 = onHeightChange(4580);
        variant = tmpResult6.useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
        let items = [tmp6.gradient.color];
        const memo = react.useMemo(() => {
          let items;
          const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
          items = [,];
          const obj2 = _modDef683(closure_1.gradient.color);
          const alphaResult = obj2.alpha(0);
          items[0] = alphaResult.hex();
          const obj4 = _modDef683(closure_1.gradient.color);
          const alphaResult1 = obj4.alpha(1);
          items[1] = alphaResult1.hex();
          return obj;
        }, items);
        const items1 = [onHeightChange];
        let obj4 = { style: tmp6.gradient, pointerEvents: "none" };
        const obj3 = {
          style: tmp6.wrap,
          pointerEvents: "box-none",
          onLayout: react.useCallback((nativeEvent) => {
            onHeightChange(nativeEvent.nativeEvent.layout.height);
          }, items1),
          children: items2,
        };
        const tmp8 = LinearGradientDefault;
        const merged = Object.assign(memo);
        items2 = [closure_6(tmp8, obj4)];
        const obj5 = { style: tmp6.container, children: closure_6(closure_5, obj6) };
        obj6 = {
          style: tmp6.buttonsContainer,
          children: overflowButtons.map((accessibilityLabel, index) => {
            let items;
            let str = "text-muted";
            let str2 = "text-muted";
            const obj = {
              accessibilityRole: "button",
              accessibilityLabel: accessibilityLabel.text,
              accessibilityState: { disabled: accessibilityLabel.disabled },
              disabled: accessibilityLabel.disabled,
              style: closure_1.button,
              onPress: accessibilityLabel.onPress,
              children: items,
            };
            const PressableOpacity = Pressables.PressableOpacity;
            const IconComponent = accessibilityLabel.IconComponent;
            if (!accessibilityLabel.disabled) {
              str2 = closure_2;
            }
            items = [metroRequire(IconComponent, { size: "md", color: str2 })];
            const obj2 = { lineClamp: 1, variant, color: str, children: accessibilityLabel.text };
            const Text = Text_Text.Text;
            if (!accessibilityLabel.disabled) {
              str = closure_3;
            }
            items[1] = metroRequire(Text, obj2);
            return metroImportDefault(PressableOpacity, obj, index);
          }),
        };
        items2[1] = closure_6(closure_5, obj5);
        return closure_7(closure_5, obj3);
      },
);
const result = size.fileFinishedImporting(
  "modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx",
);

export default memoResult;
