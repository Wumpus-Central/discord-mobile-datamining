// discord_app/modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { AccountAgeTier10LargeBadge } from "../../../../design/assets/native.tsx";
import { Button } from "../../../../design/components/Button/native/Button.native.tsx";
import { Background } from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import { Stack } from "../../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { URLCallout } from "../../../safety_common/native/URLCallout.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, title: null, warningMessage: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default function BlockedDomainActionSheet(url) {
  const tmp = createCacheKey();
  let obj = { startExpanded: true, children: null };
  obj = { spacing: 16, justify: "center", align: "center", style: tmp.container, children: null };
  obj = { spacing: 8, justify: "center", align: "center", children: null };
  const items = [callback(AccountAgeTier10LargeBadge.TrafficConeSpotIllustration, {}), , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj1[4] = intl.string(getSystemLocale.t["2B3wj8"]);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { style: tmp.warningMessage, variant: "text-md/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[2] = intl2.format(getSystemLocale.t.jnHyYU, {});
  items[2] = callback(Text.Text, obj2);
  obj[3] = items;
  const items1 = [callback2(Stack.Stack, obj), callback(URLCallout.URLCallout, { url: url.url }), ];
  const obj3 = { grow: true, text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj3[1] = intl3.string(getSystemLocale.t["/g10LC"]);
  obj3[2] = function onPress() {
    return callback(table[11]).hideActionSheet();
  };
  items1[2] = callback(Button.Button, obj3);
  obj[4] = items1;
  obj[1] = callback2(Stack.Stack, obj);
  return callback(Background.BottomSheet, obj);
};