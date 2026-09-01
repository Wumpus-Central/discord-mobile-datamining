// discord_app/modules/main_tabs_v2/native/shared_components/IconActionButton.tsx
import set from "../../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getFontScale from "../../../screen/native/useFontScale.tsx";
import PressableBase from "../../../../design/void/Pressables/native/Pressables.tsx";
import DEFAULT_BADGE_SIZE from "Badge.tsx";
import DEFAULT_BADGE_SIZEDefault from "Badge.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
class ButtonBadge {
  constructor(arg0) {
    str = global.badgePosition;
    if (str === undefined) {
      str = "left";
    }
    tmp = closure_6();
    tmp2 = jsx;
    obj = { size: null, maskSize: 2, style: null, maskColor: null };
    tmp3 = require("DEFAULT_BADGE_SIZE");
    obj[0] = require("DEFAULT_BADGE_SIZE").CHANNEL_BADGE_SIZE;
    obj[2] = "left" === str ? tmp.unreadBadgeLeft : tmp.unreadBadgeRight;
    obj[3] = tmp.unreadBadgeMask.color;
    return tmp2(tmp3, obj);
  }
}
let c3 = importAllResult;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles(() => {
  let obj = {
    actionIconButtonPressable: {
      minWidth: 32,
      minHeight: 32,
      borderRadius: 20,
      marginEnd: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      paddingRight: 12,
      paddingLeft: 12,
    },
    withoutMargin: { marginEnd: 0 },
    filled: {},
    outlined: null,
    roundButton: null,
    actionIcon: null,
    actionText: null,
    unreadBadgeLeft: null,
    unreadBadgeRight: null,
    unreadBadgeMask: null,
    countStyle: null,
  };
  obj = {
    backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW,
    borderWidth: 1,
    borderColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT,
  };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
  obj[3] = obj;
  obj[4] = { maxWidth: 32, maxHeight: 32 };
  obj = { tintColor: ThemesDefault.colors.ICON_SUBTLE };
  obj[5] = obj;
  let num = 0;
  if (obj4.isAndroid()) {
    num = -2;
  }
  obj[6] = { marginLeft: 4, marginTop: num };
  obj[7] = { position: "absolute", left: -2, top: -1 };
  obj[8] = { position: "absolute", right: -2, top: -1 };
  obj4 = set;
  obj[9] = { color: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj1 = { color: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[10] = { position: "relative", marginLeft: ThemesDefault.space.PX_8 };
  return obj;
});
let closure_7 = importAllResult.memo((color) => {
  ({ IconComponent, source } = color);
  color = color.color;
  dependencyMap = undefined;
  const tmp = callback2();
  dependencyMap = tmp;
  const items = [tmp, color, source];
  if (null != IconComponent) {
    let obj = { size: "sm", color: null };
    obj[1] = color(712).colors.ICON_SUBTLE;
    let tmp2Result = callback(IconComponent, obj);
  } else {
    tmp2Result = tmp2();
  }
  return tmp2Result;
});
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/IconActionButton.tsx",
);

export default function IconActionButton(variant) {
  let str = variant.variant;
  ({ source, IconComponent } = variant);
  if (str === undefined) {
    str = "filled";
  }
  ({ buttonText, badge, badgePosition, color, buttonTextColor, accessibilityLabel, style } = variant);
  if (badgePosition === undefined) {
    badgePosition = "left";
  }
  let num = variant.count;
  if (num === undefined) {
    num = 0;
  }
  ({ noMargin, hitSlop, disabled, onPress, onLongPress } = variant);
  const tmp = callback2();
  getFontScale;
  let tmp10Result = null != buttonText;
  if (tmp10Result) {
    tmp10Result = tmp5 <= 1.2;
  }
  let obj = {
    hitSlop,
    onPress,
    onLongPress,
    disabled,
    accessibilityRole: "button",
    accessibilityLabel,
    style: null,
    children: null,
  };
  const items = [tmp.actionIconButtonPressable, "outlined" === str ? tmp.outlined : tmp.filled, , ,];
  let roundButton;
  if (!tmp10Result) {
    roundButton = tmp.roundButton;
  }
  items[2] = roundButton;
  let withoutMargin;
  if (noMargin) {
    withoutMargin = tmp.withoutMargin;
  }
  items[3] = withoutMargin;
  items[4] = style;
  obj[6] = items;
  const items1 = [callback(closure_7, { IconComponent, color, source }), , ,];
  if (tmp10Result) {
    obj = { variant: "text-sm/bold", color: null, style: null, children: null };
    obj[1] = buttonTextColor;
    obj[2] = tmp.actionText;
    obj[3] = buttonText;
    tmp10Result = tmp10(tmp2(4474).Text, obj);
  }
  items1[1] = tmp10Result;
  tmp10Result = null;
  if (num > 0) {
    obj = { style: null, value: null };
    obj[0] = tmp.countStyle;
    obj[1] = num;
    tmp10Result = tmp10(tmp2(1297).Badge, obj);
  }
  items1[2] = tmp10Result;
  if (badge) {
    obj1 = { badgePosition: null };
    obj1[0] = badgePosition;
    badge = tmp10(ButtonBadge, obj1);
  }
  items1[3] = badge;
  obj[7] = items1;
  return closure_5(PressableBase.PressableOpacity, obj);
}
export const ICON_ACTION_BUTTON_SIZE = 32;
export { ButtonBadge };
