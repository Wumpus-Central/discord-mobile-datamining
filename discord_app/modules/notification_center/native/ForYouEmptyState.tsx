// discord_app/modules/notification_center/native/ForYouEmptyState.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ image: { marginBottom: 16 }, container: { paddingHorizontal: 48, alignItems: "center", justifyContent: "center" }, headerText: { fontSize: 18, marginTop: 16, marginBottom: 8 }, text: { textAlign: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export const ForYouEmptyState = function ForYouEmptyState(height) {
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.container, { height: height.height }];
  obj = { style: tmp.image, children: callback(require("../../../design/assets/native.tsx") /* AccountAgeTier10LargeBadge */.MailboxSpotIllustration, { scale: 0.75 }) };
  const items1 = [callback(View, obj), , ];
  obj = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: null };
  items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[4] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.MwjTvn);
  items1[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  const obj1 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[3] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.AKBgPy);
  items1[2] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  obj[1] = items1;
  return callback2(View, obj);
};