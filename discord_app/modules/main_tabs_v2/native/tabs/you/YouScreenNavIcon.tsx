// === Module 16794: YouScreenNavIcon ===

// Module 16794 (YouScreenNavIcon)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import ClipViewDefault from "ClipView" /* 8813 */;
import native from "native" /* 8902 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const md = fn(16405).ICON_SIZE.md;
const result = (nativeDefault.space.PX_32 - md) / 2;
const TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
const point = { shape: fn(8813).CutoutShape.Circle, x: md - 8 - 4, y: -4, size: 16 };
let items = [point];
const createStyles = fn(4560);
let obj = { container: null, label: null, dot: null };
obj = { borderRadius: nativeDefault.modules.button.BORDER_RADIUS, marginHorizontal: nativeDefault.space.PX_4, flexDirection: "column", alignItems: "center", padding: result };
obj.container = obj;
obj.label = { marginTop: nativeDefault.space.PX_4 };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION, borderRadius: nativeDefault.radii.round, height: 8, width: 8, position: "absolute", right: 0, top: 0 };
obj.dot = size;
let closure_8 = createStyles.createStyles(obj);
let obj1 = { marginTop: nativeDefault.space.PX_4 };
size = fn(2);
const result1 = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx");

export default noop.memo(noop.forwardRef((arg0, ref) => {
  ({ accessibilityLabel, label, showRedDot } = arg0);
  ({ onPress, IconComponent } = arg0);
  if (showRedDot === undefined) {
    showRedDot = false;
  }
  const tmp = closure_8();
  let obj = { size: "md", color: TEXT_DEFAULT };
  const tmp3 = React4(IconComponent, obj);
  let tmp4 = tmp3;
  if (showRedDot) {
    obj = { children: null };
    obj = { cutouts: items, children: tmp3 };
    items = [tmp2(ClipViewDefault, obj), ];
    const obj1 = { style: tmp.dot };
    items[1] = tmp2(View, obj1);
    obj.children = items;
    tmp4 = hasOwnProperty(View, obj);
  }
  let tmp10;
  if (showRedDot) {
    const obj2 = { text: null };
    const intl = util.intl;
    obj2.text = intl.string(util.t.y2b7CA);
    tmp10 = obj2;
  }
  const obj3 = { ref, style: tmp.container, accessibilityRole: "button", accessibilityLabel, accessibilityValue: tmp10, onPress, hitSlop: nativeDefault.space.PX_8, children: null };
  const items1 = [tmp4, ];
  const obj4 = { style: tmp.label, variant: "text-xs/semibold", color: "text-default", maxFontSizeMultiplier: 2, children: null };
  if (label == null) {
    label = accessibilityLabel;
  }
  obj4.children = label;
  items1[1] = React4(Text_Text.Text, obj4);
  obj3.children = items1;
  return hasOwnProperty(native.PressableScale, obj3);
}));