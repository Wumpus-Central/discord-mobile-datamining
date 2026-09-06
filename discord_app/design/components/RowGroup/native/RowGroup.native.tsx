// discord_app/design/components/RowGroup/native/RowGroup.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Stack_Stack from "../../Stack/native/Stack.native.tsx";
import TableRowGroup from "../../TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: { overflow: "hidden" }, content: null };
createStyles = {
  backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
createStyles.content = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  ({ title, trailing } = children);
  const tmp = closure_5();
  let obj = { style: tmp.container, children: null };
  let tmp2Result = null != title || null != trailing;
  if (tmp2Result) {
    let tmp7 = null != title;
    if (tmp7) {
      obj = { title };
      tmp7 = React3(TableRowGroup.TableRowGroupTitle, obj);
    }
    obj = { direction: "horizontal", spacing: 4, children: null };
    const items = [tmp7, trailing];
    obj.children = items;
    tmp2Result = React4(Stack_Stack.Stack, obj);
  }
  const items1 = [tmp2Result, React3(View, { style: tmp.content, children: children.children })];
  obj.children = items1;
  return React4(View, obj);
};
