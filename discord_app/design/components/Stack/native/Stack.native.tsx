// === Module 4973: Stack/Stack ===

// Module 4973 (Stack/Stack)
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_2 = createStyles.createStyles((gap, arg1, alignItems, justifyContent) => {
  const stack = { width: "100%", gap, alignItems, justifyContent, flexDirection: null };
  let str = "column";
  if ("horizontal" === arg1) {
    str = "row";
  }
  stack.flexDirection = str;
  return { stack };
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Stack/native/Stack.native.tsx");

export const Stack = function Stack(spacing) {
  spacing = spacing.spacing;
  let num = 8;
  if (undefined !== spacing) {
    num = spacing;
  }
  const direction = spacing.direction;
  let str = "vertical";
  if (undefined !== direction) {
    str = direction;
  }
  const align = spacing.align;
  let str2 = "stretch";
  if (undefined !== align) {
    str2 = align;
  }
  const justify = spacing.justify;
  let str3 = "flex-start";
  if (undefined !== justify) {
    str3 = justify;
  }
  ({ children, style, onLayout } = spacing);
  const obj = { style: null, onLayout: null, children: null };
  const items = [closure_2(num, str, str2, str3).stack, style];
  obj.style = items;
  obj.onLayout = onLayout;
  obj.children = children;
  return <View style={null} onLayout={null}>{null}</View>;
};