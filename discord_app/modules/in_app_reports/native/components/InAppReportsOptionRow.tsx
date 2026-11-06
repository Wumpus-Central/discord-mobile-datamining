// === Module 8453: InAppReportsOptionRow ===

// Module 8453 (InAppReportsOptionRow)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5781 */;
import Pressables from "Pressables" /* 7068 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5170);
let obj2 = { button: { borderRadius: nativeDefault.radii.xs }, container: null, content: null };
let obj3 = { borderRadius: nativeDefault.radii.xs };
obj2.container = { minHeight: 60, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, paddingVertical: nativeDefault.space.PX_16, paddingStart: nativeDefault.space.PX_16, paddingEnd: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs };
obj2.content = { flex: 1 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsOptionRow.tsx");

export default function InAppReportsOptionRow(arg0) {
  ({ label, trailing, onPress, accessibilityRole, children } = arg0);
  const tmp = closure_5();
  const obj = { style: tmp.button, accessibilityRole, onPress, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.content, children: null };
  items = [React3(Text_Text.Text, { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: label }), children];
  obj3.children = items;
  const items1 = [React4(View, obj3), trailing];
  obj2.children = items1;
  obj.children = React4(View, obj2);
  return React3(Pressables.PressableHighlight, obj);
};