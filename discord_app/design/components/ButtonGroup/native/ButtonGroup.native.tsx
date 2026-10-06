// === Module 5599: ButtonGroup ===

// Module 5599 (ButtonGroup)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["size", "children", "style"];
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { paddingVertical: 16 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let style;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(13);
  if (cResult[0] !== arg0) {
    ({ size, children, style } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp10;
    cResult[3] = style;
    cResult[4] = size;
    tmp7 = size;
    tmp6 = style;
    tmp5 = tmp10;
    tmp4 = children;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
  }
  let str = "md";
  if (undefined !== tmp7) {
    str = tmp7;
  }
  const tmp11 = closure_5();
  let num6 = 8;
  if ("sm" === str) {
    num6 = 12;
  }
  if (cResult[5] === tmp6) {
    let tmp12;
    if (cResult[6] === tmp11.container) {
      tmp12 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp5) {
        if (cResult[10] === num6) {
          let tmp13;
          if (cResult[11] === tmp12) {
            tmp13 = cResult[12];
          }
          return tmp13;
        }
      }
    }
    const Stack = Stack_Stack.Stack;
    const merged = Object.assign(tmp5);
    const tmp18 = <Stack spacing={num6} style={tmp12}>{tmp4}</Stack>;
    cResult[8] = tmp4;
    cResult[9] = tmp5;
    cResult[10] = num6;
    cResult[11] = tmp12;
    cResult[12] = tmp18;
    tmp13 = tmp18;
  }
  const items = [tmp11.container, tmp6];
  cResult[5] = tmp6;
  cResult[6] = tmp11.container;
  cResult[7] = items;
  tmp12 = items;
}) : ((size) => {
  let children;
  let style;
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  ({ children, style } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, children: 0, style: 0 }));
  let num = 8;
  const tmp2 = closure_5();
  if ("sm" === str) {
    num = 12;
  }
  const Stack = Stack_Stack.Stack;
  const merged1 = Object.assign(merged);
  const items = [tmp2.container, style];
  return <Stack spacing={num} style={items}>{children}</Stack>;
});
const result = size.fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = tmp3;