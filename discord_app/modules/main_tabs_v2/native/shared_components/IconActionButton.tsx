// === Module 13253: IconActionButton ===

// Module 13253 (IconActionButton)
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import useFontScale from "useFontScale" /* 4982 */;
import Pressables from "Pressables" /* 5123 */;
import Badge from "Badge" /* 7869 */;
import noop from "module_19" /* 19 */;

require = fn;
class ButtonBadge {
  constructor(arg0) {
    str = global.badgePosition;
    if (str === undefined) {
      str = "left";
    }
    tmp = closure_6();
    tmp2 = jsx;
    obj = { size: null, maskSize: 2, style: null, maskColor: null };
    tmp3 = closure_1(closure_2[9]);
    obj.size = closure_0(closure_2[9]).CHANNEL_BADGE_SIZE;
    obj.style = "left" === str ? tmp.unreadBadgeLeft : tmp.unreadBadgeRight;
    obj.maskColor = tmp.unreadBadgeMask.color;
    return tmp2(tmp3, obj);
  }
}
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
const timestampProducer = createStyles.createStyles(() => {
  let obj = { actionIconButtonPressable: { minWidth: 32, minHeight: 32, borderRadius: 20, marginEnd: 12, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 12 }, withoutMargin: { marginEnd: 0 }, filled: {}, outlined: null, roundButton: null, actionIcon: null, actionText: null, unreadBadgeLeft: null, unreadBadgeRight: null, unreadBadgeMask: null, countStyle: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  obj.outlined = obj;
  obj.roundButton = { maxWidth: 32, maxHeight: 32 };
  obj = { tintColor: nativeDefault.colors.ICON_SUBTLE };
  obj.actionIcon = obj;
  let num = 0;
  if (obj4.isAndroid()) {
    num = -2;
  }
  obj.actionText = { marginLeft: 4, marginTop: num };
  obj.unreadBadgeLeft = { position: "absolute", left: -2, top: -1 };
  obj.unreadBadgeRight = { position: "absolute", right: -2, top: -1 };
  obj4 = PlatformUtils;
  obj.unreadBadgeMask = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj1 = { color: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.countStyle = { position: "relative", marginLeft: nativeDefault.space.PX_8 };
  return obj;
});
let closure_7 = noop.memo((color) => {
  ({ IconComponent, source } = color);
  color = color.color;
  const tmp = closure_6();
  dependencyMap = tmp;
  const items = [tmp, color, source];
  if (null != IconComponent) {
    let obj = { size: "sm", color: color(576).colors.ICON_SUBTLE };
    let tmp2Result = closure_4(IconComponent, obj);
  } else {
    tmp2Result = tmp2();
  }
  return tmp2Result;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/IconActionButton.tsx");

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
  const tmp = closure_6();
  useFontScale;
  let tmp10Result = null != buttonText;
  if (tmp10Result) {
    tmp10Result = tmp5 <= 1.2;
  }
  let obj = { hitSlop, onPress, onLongPress, disabled, accessibilityRole: "button", accessibilityLabel, style: null, children: null };
  const items = [tmp.actionIconButtonPressable, "outlined" === str ? tmp.outlined : tmp.filled, , , ];
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
  obj.style = items;
  const items1 = [React4(closure_7, { IconComponent, color, source }), , , ];
  if (tmp10Result) {
    obj = { variant: "text-sm/bold", color: buttonTextColor, style: tmp.actionText, children: buttonText };
    tmp10Result = React4(Text_Text.Text, obj);
  }
  items1[1] = tmp10Result;
  tmp10Result = null;
  if (num > 0) {
    obj = { style: tmp.countStyle, value: num };
    tmp10Result = React4(native.Badge, obj);
  }
  items1[2] = tmp10Result;
  if (badge) {
    const obj1 = { badgePosition };
    badge = React4(ButtonBadge, obj1);
  }
  items1[3] = badge;
  obj.children = items1;
  return hasOwnProperty(Pressables.PressableOpacity, obj);
};
export const ICON_ACTION_BUTTON_SIZE = 32;
export { ButtonBadge };