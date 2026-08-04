// discord_app/design/components/ButtonGroup/native/ButtonGroup.native.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ container: { paddingVertical: 16 } });
const result = require("createCacheKey").fileFinishedImporting("design/components/ButtonGroup/native/ButtonGroup.native.tsx");

export const ButtonGroup = function ButtonGroup(size) {
  let children;
  let style;
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
  return jsx(require(4602) /* Stack */.Stack, {});
};