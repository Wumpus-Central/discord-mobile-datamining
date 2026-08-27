// === Module 9647: EditGuildEventStepHeader ===

// Module 9647 (EditGuildEventStepHeader)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4441 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 8, marginBottom: 8 }, headerSubtitle: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default function EditGuildEventStepHeader(children) {
  const subtitle = children.subtitle;
  const tmp = callback2();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: children.title };
  const items = [callback(Text.Text, obj), ];
  let tmp4Result = null;
  if (null != subtitle) {
    tmp4Result = null;
    if ("" !== subtitle) {
      obj = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj[0] = tmp.headerSubtitle;
      obj[3] = subtitle;
      tmp4Result = callback(Text.Text, obj);
    }
  }
  items[1] = tmp4Result;
  obj[1] = items;
  return closure_4(View, obj);
};