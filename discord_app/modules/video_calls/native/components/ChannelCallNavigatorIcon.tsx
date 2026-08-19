// === Module 12522: ChannelCallNavigatorIcon ===

// Module 12522 (ChannelCallNavigatorIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import isBlurDisabledDefault from "isBlurDisabled" /* 4725 */;
import PressableBase from "PressableBase" /* 5433 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { resetFocusTimer } from "VoiceChatDrawerState" /* 8669 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { pressableContainer: { marginHorizontal: 4 }, pressable: null, container: null, text: null, disabled: null, iconColor: null };
createCacheKey = { borderRadius: ThemesDefault.radii.lg };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", height: 32, width: 32, borderRadius: ThemesDefault.radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj1 = { flexDirection: "row", height: 32, width: 32, borderRadius: ThemesDefault.radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[3] = { marginLeft: 4, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.WHITE };
createCacheKey[4] = { opacity: 0.5 };
let obj2 = { marginLeft: 4, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.WHITE };
createCacheKey[5] = { color: ThemesDefault.colors.ICON_SUBTLE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj3 = { color: ThemesDefault.colors.ICON_SUBTLE };
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

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
  const tmp = callback();
  let obj = { style: tmp.pressableContainer, children: null };
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp.pressable,
    onPress() {
      if (null != closure_1_5) {
        tmp();
      }
      callback();
    },
    children: null
  };
  const items = [tmp.container, disableBackground.containerStyle, ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  obj = { style: items, children: null };
  items[2] = disabled;
  let tmp2Result = null;
  if (tmp5Result.isThemeDark(theme)) {
    tmp2Result = null;
    if (!flag) {
      obj1 = { blurTheme: "dark", style: null };
      obj1[1] = absoluteFill.absoluteFill;
      tmp2Result = tmp2(isBlurDisabledDefault, obj1);
    }
  }
  const items1 = [tmp2Result, , ];
  if (null != IconComponent) {
    const obj2 = { color: null, size: "sm" };
    obj2[0] = tmp.iconColor.color;
    tmp2Result = tmp2(IconComponent, obj2);
  } else {
    const obj3 = { source: null, color: null, size: null };
    obj3[0] = source;
    obj3[1] = tmp.iconColor.color;
    obj3[2] = tmp5(1297).Icon.Sizes.SMALL_20;
    tmp2Result = tmp2(tmp5(1297).Icon, obj3);
  }
  items1[1] = tmp2Result;
  let tmp2Result1 = null != membersCount;
  if (tmp2Result1) {
    tmp2Result1 = membersCount > 0;
  }
  if (tmp2Result1) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.text;
    obj4[1] = membersCount;
    tmp2Result1 = tmp2(tmp5(1297).LegacyText, obj4);
  }
  items1[2] = tmp2Result1;
  obj[1] = items1;
  const items2 = [closure_7(closure_3, obj), children];
  obj[5] = items2;
  obj[1] = closure_7(PressableBase.PressableOpacity, obj);
  return closure_6(closure_3, obj);
};