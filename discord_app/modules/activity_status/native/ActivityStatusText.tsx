import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_3 = createCacheKey.createStyles({ text: { flexShrink: 1 } });
const result = require("createCacheKey").fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default function ActivityStatusText(variant) {
  let children;
  let style;
  let str = variant.variant;
  ({ children, style } = variant);
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const merged = Object.assign(variant, Object.create(null));
  const obj = { variant: str, color: "text-muted", style: items, lineClamp: 1 };
  items = [callback().text, style];
  const merged1 = Object.assign(merged);
  obj.children = children;
  return jsx(require(4281) /* Text */.Text, { variant: str, color: "text-muted", style: items, lineClamp: 1 });
};