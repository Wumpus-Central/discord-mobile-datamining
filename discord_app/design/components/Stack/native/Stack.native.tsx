// discord_app/design/components/Stack/native/Stack.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

noopAll;
let closure_2 = createCacheKey.createStyles((gap, arg1, alignItems, justifyContent) => {
  const stack = { width: "100%", gap, alignItems, justifyContent, flexDirection: null };
  let str = "column";
  if ("horizontal" === arg1) {
    str = "row";
  }
  stack[4] = str;
  return { stack };
});
const result = require("set").fileFinishedImporting("design/components/Stack/native/Stack.native.tsx");

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
  const items = [callback(num, str, str2, str3).stack, style];
  obj[0] = items;
  obj[1] = onLayout;
  obj[2] = children;
  return <View style={null} onLayout={null}>{null}</View>;
};