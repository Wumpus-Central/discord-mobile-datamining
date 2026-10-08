// discord_app/design/components/RowGroup/native/RowGroup.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Stack_Stack from "../../Stack/native/Stack.native.tsx";
import TableRowGroup from "../../TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { overflow: "hidden" },
  content: {
    backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
    borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
    padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  },
};
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.TABLEROW_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS,
  padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RowGroup/native/RowGroup.native.tsx");

export const RowGroup = ReactCompilerGating.isReactCompilerEnabled()
  ? function RowGroup(arg0) {
      const cResult = c.c(10);
      ({ children, title, trailing } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] === title) {
        if (cResult[1] === trailing) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp4.content) {
            let tmp10 = cResult[5];
          }
          if (cResult[6] === tmp4.container) {
            if (cResult[7] === tmp5) {
              if (cResult[8] === tmp10) {
                let tmp14 = cResult[9];
              }
              return tmp14;
            }
          }
          const obj2 = { style: tmp4.container, children: null };
          const items = [tmp5, tmp10];
          obj2.children = items;
          const tmp17 = React4(View, obj2);
          cResult[6] = tmp4.container;
          cResult[7] = tmp5;
          cResult[8] = tmp10;
          cResult[9] = tmp17;
          tmp14 = tmp17;
        }
        const obj3 = { style: tmp4.content, children };
        const tmp13 = React3(View, obj3);
        cResult[3] = children;
        cResult[4] = tmp4.content;
        cResult[5] = tmp13;
        tmp10 = tmp13;
      }
      let tmp7Result = null != title || null != trailing;
      if (tmp7Result) {
        let tmp8 = null != title;
        if (tmp8) {
          const obj4 = { title };
          tmp8 = React3(TableRowGroup.TableRowGroupTitle, obj4);
        }
        const obj5 = { direction: "horizontal", spacing: 4, children: null };
        const items1 = [tmp8, trailing];
        obj5.children = items1;
        tmp7Result = React4(Stack_Stack.Stack, obj5);
      }
      cResult[0] = title;
      cResult[1] = trailing;
      cResult[2] = tmp7Result;
      tmp5 = tmp7Result;
    }
  : function RowGroup(children) {
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
