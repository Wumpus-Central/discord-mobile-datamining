// === Module 5328: ButtonGroup ===

// Module 5328 (ButtonGroup)
import noopAll from "noop" /* 19 */;
import Stack from "Stack" /* 4878 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ container: { paddingVertical: 16 } });
const result = require("set").fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

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