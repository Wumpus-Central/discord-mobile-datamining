// === Module 16001: ForYouEmptyState ===

// Module 16001 (ForYouEmptyState)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4444 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 6224 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ image: { marginBottom: 16 }, container: { paddingHorizontal: 48, alignItems: "center", justifyContent: "center" }, headerText: { fontSize: 18, marginTop: 16, marginBottom: 8 }, text: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouEmptyState.tsx");

export const ForYouEmptyState = function ForYouEmptyState(height) {
  const tmp = callback3();
  let obj = { style: items, children: null };
  items = [tmp.container, { height: height.height }];
  obj = { style: tmp.image, children: callback(AccountAgeTier10LargeBadge.MailboxSpotIllustration, { scale: 0.75 }) };
  const items1 = [callback(View, obj), , ];
  obj = { accessibilityRole: "header", color: "mobile-text-heading-primary", variant: "heading-md/bold", style: items2, children: null };
  items2 = [, ];
  ({ text: arr3[0], headerText: arr3[1] } = tmp);
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.MwjTvn);
  items1[1] = callback(Text.Text, obj);
  obj1 = { color: "text-default", variant: "text-md/medium", style: tmp.text, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[3] = intl2.string(getSystemLocale.t.AKBgPy);
  items1[2] = callback(Text.Text, obj1);
  obj[1] = items1;
  return callback2(View, obj);
};