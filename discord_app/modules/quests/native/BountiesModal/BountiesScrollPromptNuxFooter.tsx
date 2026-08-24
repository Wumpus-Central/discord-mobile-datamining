// === Module 14400: BountiesScrollPromptFooter ===

// Module 14400 (BountiesScrollPromptFooter)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles(() => ({ root: { alignItems: "center", gap: 2 }, titleText: { textAlign: "center" }, swipeText: { textAlign: "center", textTransform: "uppercase" } }));
const result = set.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx");

export default function BountiesScrollPromptFooter() {
  const tmp = callback3();
  let obj = { style: tmp.root, children: null };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.titleText, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.H57f41);
  const items = [callback(Text.Text, obj), ];
  obj = { variant: "text-xxs/semibold", color: "text-muted", style: tmp.swipeText, children: null };
  const intl2 = getSystemLocale.intl;
  obj[3] = intl2.string(getSystemLocale.t.tG0zsk);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};