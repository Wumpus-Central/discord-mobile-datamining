// === Module 8734: CardSection ===

// Module 8734 (CardSection)
import nativeDefault from "native" /* 576 */;
import LegacyText_LegacyTextDefault from "LegacyText/LegacyText" /* 8735 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5605 */;

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { container: { paddingTop: 16, paddingHorizontal: 16 }, title: null, card: null };
obj2.title = TextStyles(fn(1074).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true, marginBottom: 6 });
obj2.card = { borderRadius: nativeDefault.radii.xs, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/CardSection/native/CardSection.tsx");

export default function CardSection(arg0) {
  ({ title, children, headerComponent } = arg0);
  ({ titleStyle, cardStyle, style, accessibilityRole, accessibilityLabel } = arg0);
  const tmp = closure_5();
  const obj = { style: null, accessibilityRole, accessibilityLabel, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  let tmp4 = null;
  if (null != title) {
    const obj2 = { style: null, accessibilityRole: "header", children: null };
    const items1 = [tmp.title, titleStyle];
    obj2.style = items1;
    obj2.children = title;
    tmp4 = React3(LegacyText_LegacyTextDefault, obj2);
  }
  const items2 = [tmp4, , ];
  let tmp8 = null;
  if (null != headerComponent) {
    tmp8 = headerComponent;
  }
  items2[1] = tmp8;
  let tmp9 = null;
  if (null != children) {
    const obj3 = { style: null, children: null };
    const items3 = [tmp.card, cardStyle];
    obj3.style = items3;
    obj3.children = children;
    tmp9 = React3(View, obj3);
  }
  items2[2] = tmp9;
  obj.children = items2;
  return React4(View, obj);
};