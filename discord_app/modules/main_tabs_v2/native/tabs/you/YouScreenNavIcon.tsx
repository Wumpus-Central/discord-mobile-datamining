// === Module 14664: YouScreenNavIcon ===

// Module 14664 (YouScreenNavIcon)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import mergeProps from "mergeProps" /* 5184 */;
import Text_Text from "Text/Text" /* 5619 */;
import native from "native" /* 8983 */;
import ClipViewDefault from "ClipView" /* 9487 */;
import YouScreenNavIconMeasurer from "YouScreenNavIconMeasurer" /* 14666 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const md = fn(14665).ICON_SIZE.md;
const padding = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
const point = { shape: fn(9487).CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
const createStyles = fn(5009);
let closure_9 = createStyles.createStyles((width) => {
  const obj = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, width, minWidth: nativeDefault.space.PX_48, maxWidth: nativeDefault.space.PX_80, flexShrink: null, flexDirection: "column", alignItems: "center", padding: null };
  let num = 1;
  if (null == width) {
    num = 0;
  }
  const obj2 = { container: obj, label: { marginTop: nativeDefault.space.PX_4, textAlign: "center" }, dot: null };
  obj.flexShrink = num;
  obj.padding = padding;
  const size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
  obj2.dot = size;
  return obj2;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default noop.memo(function YouScreenNavIcon(arg0) {
  ({ icon, accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  ({ dotStyle, ref, testID } = arg0);
  const youScreenNavIconMeasurement = YouScreenNavIconMeasurer.useYouScreenNavIconMeasurement();
  const tmp4 = closure_9(youScreenNavIconMeasurement.width);
  if (icon == null) {
    const obj2 = { size: "md", color: TEXT_DEFAULT };
    icon = React4(IconComponent, obj2);
  }
  let tmp7 = icon;
  if (showRedDot) {
    const obj3 = { children: null };
    const obj4 = { cutouts: items, children: icon };
    items = [React4(ClipViewDefault, obj4), ];
    const obj5 = { style: null };
    const items1 = [tmp4.dot, dotStyle];
    obj5.style = items1;
    items[1] = React4(View, obj5);
    obj3.children = items;
    tmp7 = hasOwnProperty(View, obj3);
  }
  let tmp13;
  if (showRedDot) {
    const obj6 = { text: null };
    const intl = util.intl;
    obj6.text = intl.string(util.t.y2b7CA);
    tmp13 = obj6;
  }
  const obj7 = { ref: null, style: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityValue: null, onPress: null, hitSlop: null, testID: null, children: null };
  obj7.ref = mergeProps.mergeRefs(ref, youScreenNavIconMeasurement.containerRef);
  obj7.style = tmp4.container;
  obj7.accessibilityLabel = accessibilityLabel;
  obj7.accessibilityValue = tmp13;
  obj7.onPress = onPress;
  obj7.hitSlop = nativeDefault.space.PX_8;
  obj7.testID = testID;
  const items2 = [tmp7, ];
  const obj8 = { style: tmp4.label, variant: "text-xs/semibold", color: "text-default", maxFontSizeMultiplier: 2, lineClamp: 1, children: null };
  if (label == null) {
    label = accessibilityLabel;
  }
  obj8.children = label;
  items2[1] = React4(Text_Text.Text, obj8);
  obj7.children = items2;
  return hasOwnProperty(native.PressableScale, obj7);
});