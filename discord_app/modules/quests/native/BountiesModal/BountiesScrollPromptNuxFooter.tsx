// discord_app/modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles(() => ({ root: { alignItems: "center", gap: 2 }, titleText: { textAlign: "center" }, swipeText: { textAlign: "center", textTransform: "uppercase" } }));
const result = require("createCacheKey").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx");

export default function BountiesScrollPromptFooter() {
  const tmp = callback3();
  let obj = { style: tmp.root, children: null };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.titleText, children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.H57f41);
  const items = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  obj = { variant: "text-xxs/semibold", color: "text-muted", style: tmp.swipeText, children: null };
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.tG0zsk);
  items[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};