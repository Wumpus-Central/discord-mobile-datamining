// === Module 6887: ButtonGroup ===

// Module 6887 (ButtonGroup)
import Stack_Stack from "Stack/Stack" /* 6147 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_3 = createStyles.createStyles({ container: { paddingVertical: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export function ButtonGroup(size) {
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
  items = [closure_3().container, style];
  obj.style = items;
  obj.children = children;
  return jsx(Stack_Stack.Stack, {});
}