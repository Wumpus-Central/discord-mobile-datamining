// discord_app/modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const resetFocusTimer = fn(9558).resetFocusTimer;
const Constants = fn(1074);
({ ThemeTypes: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4606);
let createStyles = {
  pressableContainer: { marginHorizontal: 4 },
  pressable: null,
  container: null,
  text: null,
  disabled: null,
  iconColor: null,
};
createStyles = { borderRadius: nativeDefault.radii.lg };
createStyles.pressable = createStyles;
let size = {
  flexDirection: "row",
  height: 32,
  width: 32,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles.container = size;
createStyles.text = {
  marginLeft: 4,
  fontSize: 14,
  fontFamily: Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.WHITE,
};
createStyles.disabled = { opacity: 0.5 };
let obj1 = { marginLeft: 4, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
createStyles.iconColor = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default function ChannelCallNavigatorIcon(disableBackground) {
  ({ onPress: require, membersCount, disabled, theme } = disableBackground);
  ({ source, accessibilityLabel, children } = disableBackground);
  if (theme === undefined) {
    theme = constants.ASH;
  }
  let flag = disableBackground.disableBackground;
  if (flag === undefined) {
    flag = true;
  }
  const IconComponent = disableBackground.IconComponent;
  const tmp2 = closure_9();
  let obj = { style: tmp2.pressableContainer, children: null };
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp2.pressable,
    onPress() {
      if (null != resetFocusTimer) {
        tmp();
      }
      require();
    },
    children: null,
  };
  const items = [tmp2.container, disableBackground.containerStyle];
  if (disabled) {
    disabled = tmp2.disabled;
  }
  obj = { style: items, children: null };
  items[2] = disabled;
  let tmp3Result = null;
  if (tmp6Result.isThemeDark(theme)) {
    tmp3Result = null;
    if (!flag) {
      const obj1 = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      tmp3Result = closure_7(VisualEffectViewDefault, obj1);
    }
  }
  const items1 = [tmp3Result, ,];
  if (null != IconComponent) {
    const obj2 = { color: tmp2.iconColor.color, size: "sm" };
    tmp3Result = closure_7(IconComponent, obj2);
  } else {
    const obj3 = { source, color: tmp2.iconColor.color, size: native.Icon.Sizes.SMALL_20 };
    tmp3Result = closure_7(native.Icon, obj3);
  }
  items1[1] = tmp3Result;
  let tmp3Result1 = null != membersCount;
  if (tmp3Result1) {
    tmp3Result1 = membersCount > 0;
  }
  if (tmp3Result1) {
    const obj4 = { style: tmp2.text, children: membersCount };
    tmp3Result1 = closure_7(native.LegacyText, obj4);
  }
  items1[2] = tmp3Result1;
  obj.children = items1;
  const items2 = [closure_8(closure_3, obj), children];
  obj.children = items2;
  obj.children = closure_8(Pressables.PressableOpacity, obj);
  return closure_7(closure_3, obj);
}
