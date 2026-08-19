// === Module 12700: ButtonBadge ===

// Module 12700 (ButtonBadge)
import obj132 from "obj132" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import Text from "Text" /* 4734 */;
import getFontScale from "getFontScale" /* 4751 */;
import PressableBase from "PressableBase" /* 5433 */;
import DEFAULT_BADGE_SIZE from "DEFAULT_BADGE_SIZE" /* 8498 */;
import DEFAULT_BADGE_SIZEDefault from "DEFAULT_BADGE_SIZE" /* 8498 */;
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
class ButtonBadge {
  constructor(arg0) {
    str = global.badgePosition;
    if (str === undefined) {
      str = "left";
    }
    tmp = closure_6(false);
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
let closure_6 = createCacheKey.createStyles((arg0) => {
  let obj = { actionIconButtonPressable: { minWidth: 32, minHeight: 32, borderRadius: 20, marginEnd: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 12 }, withoutMargin: { marginEnd: 0 }, filled: null, outlined: null, roundButton: null, actionIcon: null, actionText: null, unreadBadgeLeft: null, unreadBadgeRight: null, unreadBadgeMask: null, countStyle: null };
  let prop;
  if (!arg0) {
    prop = ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj[2] = { backgroundColor: prop };
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
  obj[3] = obj;
  obj[4] = { maxWidth: 32, maxHeight: 32 };
  const colors = ThemesDefault.colors;
  obj[5] = { tintColor: arg0 ? colors.ICON_SUBTLE : colors.INTERACTIVE_TEXT_DEFAULT };
  let num = 0;
  if (obj3.isAndroid()) {
    num = -2;
  }
  obj[6] = { marginLeft: 4, marginTop: num };
  obj[7] = { position: "absolute", left: -2, top: -1 };
  obj[8] = { position: "absolute", right: -2, top: -1 };
  obj = { color: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  obj[9] = obj;
  obj3 = obj132;
  obj[10] = { position: "relative", marginLeft: ThemesDefault.space.PX_8 };
  return obj;
});
let closure_7 = importAllResult.memo((color) => {
  ({ IconComponent, source } = color);
  let ICON_SUBTLE = color.color;
  const isRefreshEnabled = color.isRefreshEnabled;
  const tmp = callback2(isRefreshEnabled);
  dependencyMap = tmp;
  const items = [tmp, ICON_SUBTLE, source];
  if (null != IconComponent) {
    if (isRefreshEnabled) {
      ICON_SUBTLE = ICON_SUBTLE(712).colors.ICON_SUBTLE;
    }
    let obj = { size: "sm", color: null };
    obj[1] = ICON_SUBTLE;
    let tmp2Result = callback(IconComponent, obj);
  } else {
    tmp2Result = tmp2();
  }
  return tmp2Result;
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/IconActionButton.tsx");

export default function IconActionButton(variant) {
  let str = variant.variant;
  ({ source, IconComponent } = variant);
  if (str === undefined) {
    str = "filled";
  }
  ({ buttonText, badge, badgePosition, color, accessibilityLabel, style } = variant);
  if (badgePosition === undefined) {
    badgePosition = "left";
  }
  let num = variant.count;
  if (num === undefined) {
    num = 0;
  }
  ({ noMargin, hitSlop, disabled, onPress, onLongPress } = variant);
  const tmp2 = useIsMobileVisualRefreshExperimentEnabledDefault("IconActionButton");
  const tmp3 = callback2(tmp2);
  getFontScale;
  let tmp11Result = null != buttonText;
  if (tmp11Result) {
    tmp11Result = tmp6 <= 1.2;
  }
  let obj = { hitSlop, onPress, onLongPress, disabled, accessibilityRole: "button", accessibilityLabel, style: null, children: null };
  const items = [tmp3.actionIconButtonPressable, "outlined" === str ? tmp3.outlined : tmp3.filled, , , ];
  let roundButton;
  if (!tmp11Result) {
    roundButton = tmp3.roundButton;
  }
  items[2] = roundButton;
  let withoutMargin;
  if (noMargin) {
    withoutMargin = tmp3.withoutMargin;
  }
  items[3] = withoutMargin;
  items[4] = style;
  obj[6] = items;
  const items1 = [callback(closure_7, { IconComponent, color, source, isRefreshEnabled: tmp2 }), , , ];
  if (tmp11Result) {
    obj = { variant: "text-sm/bold", style: null, children: null };
    obj[1] = tmp3.actionText;
    obj[2] = buttonText;
    tmp11Result = callback(Text.Text, obj);
  }
  items1[1] = tmp11Result;
  tmp11Result = null;
  if (num > 0) {
    obj = { style: null, value: null };
    obj[0] = tmp3.countStyle;
    obj[1] = num;
    tmp11Result = callback(Button.Badge, obj);
  }
  items1[2] = tmp11Result;
  if (badge) {
    obj1 = { badgePosition: null };
    obj1[0] = badgePosition;
    badge = callback(ButtonBadge, obj1);
  }
  items1[3] = badge;
  obj[7] = items1;
  return callback2(PressableBase.PressableOpacity, obj);
};
export const ICON_ACTION_BUTTON_SIZE = 32;
export { ButtonBadge };