// === Module 17140: LabeledDataBlock ===

// Module 17140 (LabeledDataBlock)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import Pressables from "Pressables" /* 6974 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 }, title: { marginRight: 4 }, titleSection: { flexDirection: "row", alignItems: "center", marginBottom: 16 } };
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
    const obj6 = { variant: "heading-xl/medium", color: "mobile-text-heading-primary", children };
    tmp4Result2 = React3(Text_Text.Text, obj6);
  }
  items2[1] = tmp4Result2;
  obj.children = items2;
  return React4(View, obj);
};