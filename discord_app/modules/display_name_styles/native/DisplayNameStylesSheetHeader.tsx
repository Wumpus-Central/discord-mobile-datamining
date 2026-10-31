// === Module 17320: DisplayNameStylesSheetHeader ===

// Module 17320 (DisplayNameStylesSheetHeader)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_6, paddingBottom: nativeDefault.space.PX_12 }, row: null, title: null, titleText: null, leading: null, trailing: null };
let obj3 = { paddingTop: nativeDefault.space.PX_6, paddingBottom: nativeDefault.space.PX_12 };
obj2.row = { minHeight: nativeDefault.space.PX_32, justifyContent: "center" };
const obj4 = { minHeight: nativeDefault.space.PX_32, justifyContent: "center" };
obj2.title = { paddingHorizontal: nativeDefault.space.PX_80, alignItems: "center" };
obj2.titleText = { textAlign: "center" };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_80, alignItems: "center" };
obj2.leading = { position: "absolute", left: nativeDefault.space.PX_16 };
let obj6 = { position: "absolute", left: nativeDefault.space.PX_16 };
obj2.trailing = { position: "absolute", right: nativeDefault.space.PX_16, minWidth: nativeDefault.space.PX_64 };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesSheetHeader.tsx");

export default function DisplayNameStylesSheetHeader(children) {
  ({ leading, trailing } = children);
  const tmp = closure_5();
  const obj = { style: tmp.header, children: null };
  const obj2 = { style: tmp.row, children: null };
  const obj3 = { style: tmp.title, children: React3(Text_Text.Heading, { variant: "redesign/heading-18/bold", color: "text-default", style: tmp.titleText, children: children.title }) };
  const items = [React3(View, obj3), , ];
  let tmp2Result = null != leading;
  if (tmp2Result) {
    const obj5 = { style: tmp.leading, children: leading };
    tmp2Result = React3(View, obj5);
  }
  items[1] = tmp2Result;
  let tmp2Result2 = null != trailing;
  if (tmp2Result2) {
    const obj6 = { style: tmp.trailing, children: trailing };
    tmp2Result2 = React3(View, obj6);
  }
  items[2] = tmp2Result2;
  obj2.children = items;
  obj.children = React4(View, obj2);
  return React3(View, obj);
};