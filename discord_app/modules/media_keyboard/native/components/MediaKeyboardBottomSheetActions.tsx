// discord_app/modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05391_LinearGradient.js";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles((arg0, arg1, arg2) => {
  let PX_24 = arg0;
  const obj = { wrap: null, container: null, buttonsContainer: null, button: null, gradient: null };
  const obj2 = {};
  const merged = Object.assign(variant.absoluteFillObject);
  obj2.alignItems = "center";
  obj2.top = undefined;
  obj.wrap = obj2;
  const obj3 = {
    paddingVertical: nativeDefault.space.PX_8,
    marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL,
    marginBottom: null,
    borderRadius: null,
    backgroundColor: null,
    paddingHorizontal: null,
    borderWidth: null,
  };
  if (obj4.isIOS()) {
    PX_24 = nativeDefault.space.PX_24;
  }
  let tmp5 = arg2;
  obj3.marginBottom = PX_24;
  obj3.borderRadius = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_RADIUS;
  if (arg2 == null) {
    tmp5 = arg1;
  }
  obj3.backgroundColor = tmp5;
  obj3.paddingHorizontal = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL;
  obj3.borderWidth = nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BORDER_WIDTH;
  const merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj3.borderColor = nativeDefault.colors.BORDER_MUTED;
  obj.container = obj3;
  obj4 = PlatformUtils;
  obj.buttonsContainer = {
    gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP,
    alignItems: "stretch",
    flexDirection: "row",
    marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL,
  };
  const obj5 = {
    gap: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_GAP,
    alignItems: "stretch",
    flexDirection: "row",
    marginHorizontal: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL,
  };
  obj.button = {
    flexBasis: 64,
    minHeight: 48,
    flexGrow: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    padding: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_PADDING,
    borderRadius: nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS,
    gap: 4,
  };
  const obj7 = {};
  const merged2 = Object.assign(variant.absoluteFillObject);
  obj7.color = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj.gradient = obj7;
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/media_keyboard/native/components/MediaKeyboardBottomSheetActions.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MediaKeyboardBottomSheetActions(onHeightChange) {
        const cResult = onHeightChange(token[7]).c(38);
        onHeightChange = onHeightChange.onHeightChange;
        let obj = onHeightChange(token[7]);
        const gradientValue = onHeightChange(token[8]).useGradientValue(
          onHeightChange(token[8]).GradientPercentage.END,
        );
        if (cResult[0] !== gradientValue) {
          let hexResult = null;
          if (null != gradientValue) {
            const obj3 = require("../../../../../_runtime/metro/00683__.js")(gradientValue);
            hexResult = require("../../../../../_runtime/metro/00683__.js")(gradientValue).alpha(0.95).hex();
            const alphaResult = require("../../../../../_runtime/metro/00683__.js")(gradientValue).alpha(0.95);
          }
          cResult[0] = gradientValue;
          cResult[1] = hexResult;
          let tmp5 = hexResult;
        } else {
          tmp5 = cResult[1];
        }
        let obj2 = onHeightChange(token[8]);
        const tmp9 = closure_8(
          require("useSafeAreaInsets")().bottom,
          onHeightChange(token[11]).useToken(require("native").colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER),
          tmp5,
        );
        importDefault = tmp9;
        const tmpResult = onHeightChange(token[11]);
        token = onHeightChange(token[11]).useToken(
          require("native").modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE,
        );
        const tmpResult4 = onHeightChange(token[11]);
        const token1 = onHeightChange(token[11]).useToken(
          require("native").modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE,
        );
        const tmpResult5 = onHeightChange(token[11]);
        const token2 = onHeightChange(token[11]).useToken(
          require("native").modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT,
        );
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0 };
          const point1 = { x: 0, y: 1 };
          cResult[2] = point;
          cResult[3] = point1;
          let tmp14 = point1;
          let tmp13 = point;
        } else {
          tmp13 = cResult[2];
          tmp14 = cResult[3];
        }
        if (cResult[4] !== tmp9.gradient.color) {
          const obj11 = tmp8(tmp2[9])(tmp9.gradient.color);
          const hexResult1 = tmp8(tmp2[9])(tmp9.gradient.color).alpha(0).hex();
          cResult[4] = tmp9.gradient.color;
          cResult[5] = hexResult1;
          let tmp15 = hexResult1;
          const alphaResult1 = tmp8(tmp2[9])(tmp9.gradient.color).alpha(0);
        } else {
          tmp15 = cResult[5];
        }
        if (cResult[6] !== tmp9.gradient.color) {
          const obj13 = tmp8(tmp2[9])(tmp9.gradient.color);
          const hexResult2 = tmp8(tmp2[9])(tmp9.gradient.color).alpha(1).hex();
          cResult[6] = tmp9.gradient.color;
          cResult[7] = hexResult2;
          let tmp17 = hexResult2;
          const alphaResult2 = tmp8(tmp2[9])(tmp9.gradient.color).alpha(1);
        } else {
          tmp17 = cResult[7];
        }
        if (cResult[8] === tmp15) {
          if (cResult[9] === tmp17) {
            let tmp19 = cResult[10];
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
                if (!onHeightChange.disabled) {
                  str2 = closure_2;
                }
                items = [,];
                items[0] = tmp4(onHeightChange.IconComponent, { size: "md", color: str2 });
                obj1 = { lineClamp: 1, variant: closure_4, color: null, children: null };
                if (!onHeightChange.disabled) {
                  str = closure_3;
                }
                obj1.color = str;
                obj1.children = onHeightChange.text;
                items[1] = tmp4(tmp2(tmp3[14]).Text, obj1);
                obj.children = items;
                return tmp(closure_0(closure_2[13]).PressableOpacity, obj, arg1);
              }
            }
            cResult[22] = token2;
            cResult[23] = token;
            cResult[24] = tmp9.button;
            cResult[25] = token1;
            cResult[26] = L;
          }
          const obj4 = { style: tmp9.gradient };
          const merged = Object.assign(tmp19);
          obj4.pointerEvents = "none";
          const tmp26 = closure_6(tmp8(tmp2[12]), obj4);
          cResult[13] = tmp19;
          cResult[14] = tmp9.gradient;
          cResult[15] = tmp26;
          const tmp8Result = tmp8(tmp2[12]);
        }
        const obj5 = { start: tmp13, end: tmp14, colors: null };
        let items = [tmp15, tmp17];
        obj5.colors = items;
        cResult[8] = tmp15;
        cResult[9] = tmp17;
        cResult[10] = obj5;
        tmp19 = obj5;
        const tmpResult6 = onHeightChange(token[11]);
      }
    : function MediaKeyboardBottomSheetActions(onHeightChange) {
        onHeightChange = onHeightChange.onHeightChange;
        const overflowButtons = onHeightChange.overflowButtons;
        importDefault = undefined;
        dependencyMap = undefined;
        noop = undefined;
        variant = undefined;
        const gradientValue = onHeightChange(4936).useGradientValue(onHeightChange(4936).GradientPercentage.END);
        let hexResult = null;
        if (null != gradientValue) {
          let obj2 = _modDef683(gradientValue);
          hexResult = _modDef683(gradientValue).alpha(0.95).hex();
          let alphaResult = _modDef683(gradientValue).alpha(0.95);
        }
        let obj = onHeightChange(4936);
        const tmp6 = closure_8(
          useSafeAreaInsetsDefault().bottom,
          onHeightChange(4818).useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER),
          hexResult,
        );
        importDefault = tmp6;
        const tmpResult = onHeightChange(4818);
        dependencyMap = onHeightChange(4818).useToken(
          nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE,
        );
        const tmpResult4 = onHeightChange(4818);
        noop = onHeightChange(4818).useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE);
        const tmpResult5 = onHeightChange(4818);
        variant = onHeightChange(4818).useToken(nativeDefault.modules.mobile.MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT);
        let items = [tmp6.gradient.color];
        const memo = noop.useMemo(() => {
          const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
          const obj2 = _modDef683(closure_1.gradient.color);
          const items = [_modDef683(closure_1.gradient.color).alpha(0).hex()];
          const alphaResult = _modDef683(closure_1.gradient.color).alpha(0);
          const obj4 = _modDef683(closure_1.gradient.color);
          items[1] = _modDef683(closure_1.gradient.color).alpha(1).hex();
          obj.colors = items;
          return obj;
        }, items);
        const items1 = [onHeightChange];
        const obj3 = {
          style: tmp6.wrap,
          pointerEvents: "box-none",
          onLayout: noop.useCallback((nativeEvent) => {
            onHeightChange(nativeEvent.nativeEvent.layout.height);
          }, items1),
          children: null,
        };
        let obj4 = { style: tmp6.gradient };
        const tmpResult6 = onHeightChange(4818);
        const merged = Object.assign(memo);
        obj4.pointerEvents = "none";
        const items2 = [closure_6(LinearGradientDefault, obj4)];
        const obj5 = { style: tmp6.container, children: null };
        obj5.children = closure_6(closure_5, {
          style: tmp6.buttonsContainer,
          children: overflowButtons.map((accessibilityLabel, index) => {
            const obj = {
              accessibilityRole: "button",
              accessibilityLabel: accessibilityLabel.text,
              accessibilityState: { disabled: accessibilityLabel.disabled },
              disabled: accessibilityLabel.disabled,
              style: closure_1.button,
              onPress: accessibilityLabel.onPress,
              children: null,
            };
            let str = "text-muted";
            let str2 = "text-muted";
            if (!accessibilityLabel.disabled) {
              str2 = closure_2;
            }
            const items = [timestampProducer(accessibilityLabel.IconComponent, { size: "md", color: str2 })];
            const obj2 = { lineClamp: 1, variant, color: null, children: null };
            if (!accessibilityLabel.disabled) {
              str = closure_3;
            }
            obj2.color = str;
            obj2.children = accessibilityLabel.text;
            items[1] = timestampProducer(Text_Text.Text, obj2);
            obj.children = items;
            return React5(Pressables.PressableOpacity, obj, index);
          }),
        });
        items2[1] = closure_6(closure_5, obj5);
        obj3.children = items2;
        return closure_7(closure_5, obj3);
      },
);
