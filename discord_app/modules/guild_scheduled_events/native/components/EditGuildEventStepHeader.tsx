// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ header: { alignItems: "center", paddingBottom: 24 }, headerTitle: { marginTop: 8, marginBottom: 8 }, headerSubtitle: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx");

export default function EditGuildEventStepHeader(children) {
  const subtitle = children.subtitle;
  const tmp = callback2();
  let obj = { style: tmp.header, children: null };
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: children.title };
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  let tmp4Result = null;
  if (null != subtitle) {
    tmp4Result = null;
    if ("" !== subtitle) {
      obj = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
      obj[0] = tmp.headerSubtitle;
      obj[3] = subtitle;
      tmp4Result = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
    }
  }
  items[1] = tmp4Result;
  obj[1] = items;
  return closure_4(View, obj);
};