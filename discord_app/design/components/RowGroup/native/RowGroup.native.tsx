// === Module 13794: RowGroup ===

// Module 13794 (RowGroup)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Stack_Stack from "Stack/Stack" /* 5593 */;
import TableRowGroup from "TableRowGroup" /* 6074 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: { overflow: "hidden" }, content: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let items1;
  let title;
  let trailing;
  const obj = react2;
  const cResult = obj.c(10);
  ({ children, title, trailing } = arg0);
  const tmp4 = closure_5();
  if (cResult[0] === title) {
    let tmp5;
    if (cResult[1] === trailing) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp10;
      if (cResult[4] === tmp4.content) {
        tmp10 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp5) {
          let tmp14;
          if (cResult[8] === tmp10) {
            tmp14 = cResult[9];
          }
          return tmp14;
        }
      }
      const obj2 = { style: tmp4.container, children: items };
      items = [tmp5, tmp10];
      const tmp17 = React3(View, obj2);
      cResult[6] = tmp4.container;
      cResult[7] = tmp5;
      cResult[8] = tmp10;
      cResult[9] = tmp17;
      tmp14 = tmp17;
    }
    const obj3 = { style: tmp4.content, children };
    const tmp13 = _false(View, obj3);
    cResult[3] = children;
    cResult[4] = tmp4.content;
    cResult[5] = tmp13;
    tmp10 = tmp13;
  }
  let tmp7Result = null != title || null != trailing;
  if (tmp7Result) {
    let tmp8 = null != title;
    const Stack = Stack_Stack.Stack;
    if (tmp8) {
      const obj4 = { title };
      tmp8 = _false(TableRowGroup.TableRowGroupTitle, obj4);
    }
    const obj5 = { direction: "horizontal", spacing: 4, children: items1 };
    items1 = [tmp8, trailing];
    tmp7Result = React3(Stack, obj5);
  }
  cResult[0] = title;
  cResult[1] = trailing;
  cResult[2] = tmp7Result;
  tmp5 = tmp7Result;
}) : ((children) => {
  let items;
  let items1;
  let title;
  let trailing;
  ({ title, trailing } = children);
  children = children.children;
  const tmp = closure_5();
  let tmp2Result = null != title || null != trailing;
  const obj = { style: tmp.container, children: items1 };
  if (tmp2Result) {
    let tmp7 = null != title;
    const Stack = Stack_Stack.Stack;
    if (tmp7) {
      const obj2 = { title };
      tmp7 = _false(TableRowGroup.TableRowGroupTitle, obj2);
    }
    const obj3 = { direction: "horizontal", spacing: 4, children: items };
    items = [tmp7, trailing];
    tmp2Result = React3(Stack, obj3);
  }
  items1 = [tmp2Result, ];
  const obj4 = { style: tmp.content, children };
  items1[1] = _false(View, obj4);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = tmp4;