// === Module 14701: ? ===

// Module 14701
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import Stack from "Stack" /* 4973 */;
import getNoResultsAltSource from "getNoResultsAltSource" /* 9760 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { paddingTop: 24, justifyContent: "center", alignItems: "center" }, textContainer: { marginTop: 24 } });
const memoResult = importAllResult.memo(function SettingsSearchEmptyState() {
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = callback(4272).AccessibilityAnnouncer;
    const intl = callback(1114).intl;
    AccessibilityAnnouncer.announce(intl.string(callback(1114).t.zihbmv), "polite");
  }, []);
  let obj = { style: tmp.container, children: null };
  const items = [callback(getNoResultsAltSource.NoResultsAlt, { resizeMode: "contain" }), ];
  obj = { style: tmp.textContainer, align: "center", justify: "center", children: null };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.zihbmv);
  const items1 = [callback(Text.Text, obj), ];
  obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[2] = intl2.string(getSystemLocale.t.XclvsB);
  items1[1] = callback(Text.Text, obj1);
  obj[3] = items1;
  items[1] = callback2(Stack.Stack, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("set").fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default memoResult;