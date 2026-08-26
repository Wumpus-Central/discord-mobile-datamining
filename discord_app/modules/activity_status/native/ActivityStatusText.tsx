// === Module 9863: ActivityStatusText ===

// Module 9863 (ActivityStatusText)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4440 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
let closure_3 = createCacheKey.createStyles({ text: { flexShrink: 1 } });
const result = require("set").fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

export default function ActivityStatusText(variant) {
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
  return jsx(Text.Text, { variant: str, color: "text-muted", style: items, lineClamp: 1 });
};