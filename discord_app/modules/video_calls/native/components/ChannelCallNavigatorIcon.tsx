// === Module 10736: ChannelCallNavigatorIcon ===

// Module 10736 (ChannelCallNavigatorIcon)
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { resetFocusTimer } from "VoiceChatDrawerState";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let closure_6;
let error;
const require = arg1;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { pressableContainer: { marginHorizontal: 4 }, pressable: null, container: null, text: null, disabled: null, iconColor: null };
createCacheKey = { borderRadius: require("Themes").radii.lg };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", height: 32, width: 32, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let obj1 = { flexDirection: "row", height: 32, width: 32, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[3] = { marginLeft: 4, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.WHITE };
createCacheKey[4] = { opacity: 0.5 };
let obj2 = { marginLeft: 4, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: require("Themes").colors.WHITE };
createCacheKey[5] = { color: require("Themes").colors.ICON_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { color: require("Themes").colors.ICON_SUBTLE };
const result = require("VoiceChatDrawerState").fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

export default function ChannelCallNavigatorIcon(disableBackground) {
  let accessibilityLabel;
  let children;
  let disabled;
  let membersCount;
  let require;
  let source;
  let theme;
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
  const tmp = createCacheKey();
  let obj = { style: tmp.pressableContainer, children: null };
  obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp.pressable,
    onPress() {
      if (null != outer1_5) {
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
      const obj1 = { blurTheme: "dark", style: null };
      obj1[1] = absoluteFill.absoluteFill;
      tmp2Result = tmp2(importDefault(4594), obj1);
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
  obj[1] = closure_7(require(4721) /* PressableBase */.PressableOpacity, obj);
  return closure_6(closure_3, obj);
};