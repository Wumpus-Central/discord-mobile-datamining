// discord_app/modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import isBlurDisabledDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { resetFocusTimer } from "../ChannelCallStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, StyleSheet: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const createCacheKey = { borderRadius: ThemesDefault.radii.lg };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { flexDirection: "row", height: 32, width: 32, borderRadius: ThemesDefault.radii.lg, alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[3] = { marginLeft: 4, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.WHITE };
createCacheKey[4] = { opacity: 0.5 };
let obj2 = { marginLeft: 4, fontSize: 14, fontFamily: require("ME").Fonts.PRIMARY_SEMIBOLD, color: ThemesDefault.colors.WHITE };
createCacheKey[5] = { color: ThemesDefault.colors.ICON_SUBTLE };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/ChannelCallNavigatorIcon.tsx");

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
  let obj = {
    accessibilityRole: "button",
    accessibilityLabel,
    disabled,
    style: tmp.pressable,
    onPress() {
      if (null != resetFocusTimer) {
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
      tmp2Result = callback(isBlurDisabledDefault, obj1);
    }
  }
  const items1 = [tmp2Result, , ];
  if (null != IconComponent) {
    const obj2 = { color: null, size: "sm" };
    obj2[0] = tmp.iconColor.color;
    tmp2Result = callback(IconComponent, obj2);
  } else {
    const obj3 = { source: null, color: null, size: null };
    obj3[0] = source;
    obj3[1] = tmp.iconColor.color;
    obj3[2] = Button.Icon.Sizes.SMALL_20;
    tmp2Result = callback(Button.Icon, obj3);
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
    tmp2Result1 = callback(Button.LegacyText, obj4);
  }
  items1[2] = tmp2Result1;
  obj[1] = items1;
  const items2 = [callback2(closure_3, obj), children];
  obj[5] = items2;
  obj[1] = callback2(PressableBase.PressableOpacity, obj);
  return callback(closure_3, obj);
};