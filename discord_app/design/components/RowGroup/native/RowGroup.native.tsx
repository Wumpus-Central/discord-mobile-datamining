// === Module 14254: RowGroup ===

// Module 14254 (RowGroup)
import nativeDefault from "native" /* 576 */;
import Stack_Stack from "Stack/Stack" /* 5185 */;
import TableRowGroup from "TableRowGroup" /* 5906 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { container: { overflow: "hidden" }, content: { backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = function RowGroup(children) {
  ({ title, trailing } = children);
  const tmp = closure_5();
  const obj = { style: tmp.container, children: null };
  let tmp2Result = null != title || null != trailing;
  if (tmp2Result) {
    let tmp7 = null != title;
    if (tmp7) {
      const obj2 = { title };
      tmp7 = React3(TableRowGroup.TableRowGroupTitle, obj2);
    }
    const obj3 = { direction: "horizontal", spacing: 4, children: null };
    const items = [tmp7, trailing];
    obj3.children = items;
    tmp2Result = React4(Stack_Stack.Stack, obj3);
  }
  const items1 = [tmp2Result, React3(View, { style: tmp.content, children: children.children })];
  obj.children = items1;
  return React4(View, obj);
};