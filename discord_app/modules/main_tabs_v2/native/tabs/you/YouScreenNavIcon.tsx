// === Module 17042: YouScreenNavIcon ===

// Module 17042 (YouScreenNavIcon)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4636 */;
import ClipViewDefault from "ClipView" /* 8970 */;
import native from "native" /* 9060 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const md = fn(16565).ICON_SIZE.md;
const result = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
const point = { shape: fn(8970).CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
const createStyles = fn(4640);
const obj = { container: { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, marginHorizontal: nativeDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result }, label: null, dot: null };
let obj2 = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, marginHorizontal: nativeDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
obj.label = { marginTop: nativeDefault.space.PX_4 };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
obj.dot = size;
let closure_8 = createStyles.createStyles(obj);
let obj4 = { marginTop: nativeDefault.space.PX_4 };
size = fn(2);
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default noop.memo(noop.forwardRef((arg0, ref) => {
  ({ accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  const tmp = closure_8();
  const tmp3 = React4(IconComponent, { size: "md", color: TEXT_DEFAULT });
  let tmp4 = tmp3;
  if (showRedDot) {
    const obj2 = { children: null };
    const obj3 = { cutouts: items, children: tmp3 };
    items = [React4(ClipViewDefault, obj3), ];
    const obj4 = { style: tmp.dot };
    items[1] = React4(View, obj4);
    obj2.children = items;
    tmp4 = hasOwnProperty(View, obj2);
  }
  let tmp10;
  if (showRedDot) {
    const obj5 = { text: null };
    const intl = util.intl;
    obj5.text = intl.string(util.t.y2b7CA);
    tmp10 = obj5;
  }
  const obj6 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: nativeDefault.space.PX_8, children: null };
  const items1 = [tmp4, ];
  const obj7 = { style: tmp.label, variant: "text-xs/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: null };
  if (label == null) {
    label = accessibilityLabel;
  }
  obj7.children = label;
  items1[1] = React4(Text_Text.Text, obj7);
  obj6.children = items1;
  return hasOwnProperty(native.PressableScale, obj6);
}));