// === Module 15220: LabeledDataBlock ===

// Module 15220 (LabeledDataBlock)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5524 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: null, title: null, data: null, titleSection: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, flexBasis: "auto", flexGrow: 1, padding: 16 };
createStyles.container = createStyles;
createStyles.title = { marginRight: 4 };
const merged = Object.assign(TextStyles(fn(1074).Fonts.PRIMARY_MEDIUM, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
createStyles.data = {};
createStyles.titleSection = { flexDirection: "row", alignItems: "center", marginBottom: 16 };
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/LabeledDataBlock.tsx");

export default function LabeledDataBlock(arg0) {
  ({ children, icon } = arg0);
  ({ title, style, onPressIcon } = arg0);
  const tmp = closure_5();
  let obj = { style: null, children: null };
  const items = [tmp.container, style];
  obj.style = items;
  obj = { style: tmp.titleSection, children: null };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "text-sm/medium", color: "interactive-text-default", children: title };
  const items1 = [React3(Text_Text.Text, obj), ];
  let tmp4Result = null != icon;
  if (tmp4Result) {
    const obj1 = { accessibilityRole: "button", onPress: onPressIcon, children: null };
    const obj2 = { size: native.Icon.Sizes.SMALL, source: icon };
    obj1.children = React3(native.Icon, obj2);
    tmp4Result = React3(Pressables.PressableOpacity, obj1);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  const items2 = [React4(View, obj), ];
  tmp4Result = children;
  if (typeof children === "string") {
    const obj3 = { style: tmp.data, children };
    tmp4Result = React3(native.LegacyText, obj3);
  }
  items2[1] = tmp4Result;
  obj.children = items2;
  return React4(View, obj);
};