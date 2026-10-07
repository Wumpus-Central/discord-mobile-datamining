// === Module 5599: ButtonGroup ===

// Module 5599 (ButtonGroup)
import c from "c" /* 576 */;
import Stack_Stack from "Stack/Stack" /* 5600 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["size", "children", "style"];
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let closure_5 = createStyles.createStyles({ container: { paddingVertical: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  if (cResult[0] !== arg0) {
    ({ size, children, style } = arg0);
    const tmp10 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = children;
    cResult[2] = tmp10;
    cResult[3] = style;
    cResult[4] = size;
    let tmp7 = size;
    let tmp6 = style;
    let tmp5 = tmp10;
    let tmp4 = children;
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
    if (cResult[6] === tmp11.container) {
      let tmp12 = cResult[7];
    }
    if (cResult[8] === tmp4) {
      if (cResult[9] === tmp5) {
        if (cResult[10] === num6) {
          if (cResult[11] === tmp12) {
            let tmp13 = cResult[12];
          }
          return tmp13;
        }
      }
    }
    const obj2 = {};
    const merged = Object.assign(tmp5);
    obj2.spacing = num6;
    obj2.style = tmp12;
    obj2.children = tmp4;
    const tmp18 = jsx(Stack_Stack.Stack, {});
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
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  ({ children, style } = size);
  const merged = Object.assign(size, Object.assign({ size: 0, children: 0, style: 0 }));
  let num = 8;
  if ("sm" === str) {
    num = 12;
  }
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.spacing = num;
  const items = [closure_5().container, style];
  obj.style = items;
  obj.children = children;
  return jsx(Stack_Stack.Stack, {});
});