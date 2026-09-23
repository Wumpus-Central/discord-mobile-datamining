// === Module 10268: ChannelCallNavigatorIcon ===

// Module 10268 (ChannelCallNavigatorIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5259 */;
import Pressables from "Pressables" /* 5425 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const resetFocusTimer = fn(9719).resetFocusTimer;
const Constants = fn(1074);
({ ThemeTypes: metroRequire, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4827);
let obj2 = { pressableContainer: { marginHorizontal: 4 }, pressable: { borderRadius: nativeDefault.radii.lg }, container: null, text: null, disabled: null, iconColor: null };
let size = { flexDirection: "row", height: 32, width: 32, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.container = size;
let obj3 = { borderRadius: nativeDefault.radii.lg };
obj2.text = { marginLeft: 4, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj2.disabled = { opacity: 0.5 };
let obj4 = { marginLeft: 4, fontSize: 14, fontFamily: Fonts.PRIMARY_SEMIBOLD, color: nativeDefault.colors.WHITE };
obj2.iconColor = { color: nativeDefault.colors.ICON_SUBTLE };
let closure_9 = createStyles.createStyles(obj2);
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
  const obj = { style: tmp2.pressableContainer, children: null };
  const obj2 = {
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
    children: null
  };
  const items = [tmp2.container, disableBackground.containerStyle, ];
  if (disabled) {
    disabled = tmp2.disabled;
  }
  const obj3 = { style: items, children: null };
  items[2] = disabled;
  let tmp3Result = null;
  if (tmp6Result.isThemeDark(theme)) {
    tmp3Result = null;
    if (!flag) {
      const obj4 = { blurTheme: "dark", style: absoluteFill.absoluteFill };
      tmp3Result = closure_7(VisualEffectViewDefault, obj4);
    }
  }
  const items1 = [tmp3Result, , ];
  if (null != IconComponent) {
    const obj5 = { color: tmp2.iconColor.color, size: "sm" };
    let tmp3Result3 = closure_7(IconComponent, obj5);
  } else {
    const obj6 = { source, color: tmp2.iconColor.color, size: native.Icon.Sizes.SMALL_20 };
    tmp3Result3 = closure_7(native.Icon, obj6);
  }
  items1[1] = tmp3Result3;
  let tmp3Result4 = null != membersCount;
  if (tmp3Result4) {
    tmp3Result4 = membersCount > 0;
  }
  if (tmp3Result4) {
    const obj7 = { style: tmp2.text, children: membersCount };
    tmp3Result4 = closure_7(native.LegacyText, obj7);
  }
  items1[2] = tmp3Result4;
  obj3.children = items1;
  const items2 = [closure_8(closure_3, obj3), children];
  obj2.children = items2;
  obj.children = closure_8(Pressables.PressableOpacity, obj2);
  return closure_7(closure_3, obj);
};