// === Module 11836: NsfwGateChat ===

// Module 11836 (NsfwGateChat)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import registerAssetDefault from "registerAsset" /* 11837 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, Image: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: StyleSheet.hairlineWidth, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
createCacheKey[2] = { marginTop: 16, textAlign: "center" };
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default function NsfwGateChat() {
  const tmp = callback3();
  let obj = { style: tmp.border };
  const items = [callback(closure_3, obj), ];
  obj = { style: tmp.container, children: null };
  const items1 = [callback(closure_4, { source: registerAssetDefault }), ];
  const obj2 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.W4Qyxr);
  items1[1] = callback(Text.Text, obj2);
  obj[1] = items1;
  items[1] = callback2(closure_3, obj);
  obj[0] = items;
  return callback2(closure_7, obj);
};