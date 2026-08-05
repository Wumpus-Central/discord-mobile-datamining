// discord_app/modules/settings/native/search/components/SettingsSearchEmptyState.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { paddingTop: 24, justifyContent: "center", alignItems: "center" }, textContainer: { marginTop: 24 } });
const memoResult = importAllResult.memo(function SettingsSearchEmptyState() {
  const tmp = callback3();
  const effect = importAllResult.useEffect(() => {
    const AccessibilityAnnouncer = callback(3998).AccessibilityAnnouncer;
    const intl = callback(1236).intl;
    AccessibilityAnnouncer.announce(intl.string(callback(1236).t.zihbmv), "polite");
  }, []);
  let obj = { style: tmp.container, children: null };
  const items = [callback(require("../../../../../design/components/Illustration/native/redesign/generated/NoResultsAlt.tsx") /* getNoResultsAltSource */.NoResultsAlt, { resizeMode: "contain" }), ];
  obj = { style: tmp.textContainer, align: "center", justify: "center", children: null };
  obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  let intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.zihbmv);
  const items1 = [callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl2 = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj1[2] = intl2.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.XclvsB);
  items1[1] = callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  obj[3] = items1;
  items[1] = callback2(require("../../../../../design/components/Stack/native/Stack.native.tsx") /* Stack */.Stack, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/settings/native/search/components/SettingsSearchEmptyState.tsx");

export default memoResult;