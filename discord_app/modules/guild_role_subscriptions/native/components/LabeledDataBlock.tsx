// === Module 14739: LabeledDataBlock ===

// Module 14739 (LabeledDataBlock)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4825 */;
import Pressables from "Pressables" /* 5428 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5831 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 }, title: { marginRight: 4 }, data: null, titleSection: null };
const merged = Object.assign(TextStyles(fn(1074).Fonts.PRIMARY_MEDIUM, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj2.data = {};
obj2.titleSection = { flexDirection: "row", alignItems: "center", marginBottom: 16 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = closure_5();
  const obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  const obj2 = { style: tmp.titleSection, children: null };
  const items1 = [React3(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title }), ];
  let tmp4Result = null != icon;
  if (tmp4Result) {
    const obj4 = { accessibilityRole: "button", onPress: onPressIcon, children: null };
    const obj5 = { size: native.Icon.Sizes.SMALL, source: icon };
    obj4.children = React3(native.Icon, obj5);
    tmp4Result = React3(Pressables.PressableOpacity, obj4);
  }
  items1[1] = tmp4Result;
  obj2.children = items1;
  const items2 = [React4(View, obj2), ];
  let tmp4Result2 = children;
  if (typeof children === "string") {
    const obj6 = { style: tmp.data, children };
    tmp4Result2 = React3(native.LegacyText, obj6);
  }
  items2[1] = tmp4Result2;
  obj.children = items2;
  return React4(View, obj);
};