// discord_app/modules/activity_status/native/ActivityStatusText.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Text from "../../../design/components/Text/native/Text.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_3 = createCacheKey.createStyles({ text: { flexShrink: 1 } });
const result = require("obj132").fileFinishedImporting("modules/activity_status/native/ActivityStatusText.tsx");

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