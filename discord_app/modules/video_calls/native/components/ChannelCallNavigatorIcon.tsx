// discord_app/modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const resetFocusTimer = fn(9467).resetFocusTimer;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
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
  fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.WHITE,
};
createStyles.disabled = { opacity: 0.5 };
let obj1 = {
  marginLeft: 4,
  fontSize: 14,
  fontFamily: fn(1074).Fonts.PRIMARY_SEMIBOLD,
  color: nativeDefault.colors.WHITE,
};
createStyles.iconColor = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default function ChannelCallNavigatorIcon(disableBackground) {
  ({ onPress: require, membersCount, disabled, theme } = disableBackground);
  ({ source, accessibilityLabel, children } = disableBackground);
  if (theme === undefined) {
    theme = "dark";
  }
  let flag = disableBackground.disableBackground;
  if (flag === undefined) {
    flag = true;
  }
  const IconComponent = disableBackground.IconComponent;
  const tmp = closure_8();
  let obj = { style: tmp.pressableContainer, children: null };
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp.pressable,
    onPress() {
      if (null != resetFocusTimer) {
        tmp();
      }
      require();
    },
    children: null,
  };
  const items = [tmp.container, disableBackground.containerStyle];
  if (disabled) {
    disabled = tmp.disabled;
  }
  obj = { style: items, children: null };
  items[2] = disabled;
  let tmp2Result = null;
  if (tmp5Result.isThemeDark(theme)) {
    tmp2Result = null;
    if (!flag) {
      const obj1 = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      tmp2Result = tmp2(VisualEffectViewDefault, obj1);
    }
  }
  const items1 = [tmp2Result, ,];
  if (null != IconComponent) {
    const obj2 = { color: tmp.iconColor.color, size: "sm" };
    tmp2Result = tmp2(IconComponent, obj2);
  } else {
    const obj3 = { source, color: tmp.iconColor.color, size: tmp5(1178).Icon.Sizes.SMALL_20 };
    tmp2Result = tmp2(tmp5(1178).Icon, obj3);
  }
  items1[1] = tmp2Result;
  let tmp2Result1 = null != membersCount;
  if (tmp2Result1) {
    tmp2Result1 = membersCount > 0;
  }
  if (tmp2Result1) {
    const obj4 = { style: tmp.text, children: membersCount };
    tmp2Result1 = tmp2(tmp5(1178).LegacyText, obj4);
  }
  items1[2] = tmp2Result1;
  obj.children = items1;
  const items2 = [closure_7(closure_3, obj), children];
  obj.children = items2;
  obj.children = closure_7(Pressables.PressableOpacity, obj);
  return closure_6(closure_3, obj);
}
