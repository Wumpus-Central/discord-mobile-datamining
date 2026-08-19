// discord_app/design/components/ButtonGroup/native/ButtonGroup.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import Stack from "../../Stack/native/Stack.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_3 = createCacheKey.createStyles({ container: { paddingVertical: 16 } });
const result = require("obj132").fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = function ButtonGroup(size) {
  let str = size.size;
  if (str === undefined) {
    str = "md";
  }
  ({ children, style } = size);
  const merged = Object.assign(size, Object.create(null));
  let num = 8;
  if ("sm" === str) {
    num = 12;
  }
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.spacing = num;
  const items = [callback().container, style];
  obj.style = items;
  obj.children = children;
  return jsx(Stack.Stack, {});
};