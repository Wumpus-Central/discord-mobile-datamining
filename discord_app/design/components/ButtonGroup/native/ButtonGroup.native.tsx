// discord_app/design/components/ButtonGroup/native/ButtonGroup.native.tsx
import Stack_Stack from "../../Stack/native/Stack.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ container: { paddingVertical: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = function ButtonGroup(size) {
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
  const items = [closure_3().container, style];
  obj.style = items;
  obj.children = children;
  return jsx(Stack_Stack.Stack, {});
};
