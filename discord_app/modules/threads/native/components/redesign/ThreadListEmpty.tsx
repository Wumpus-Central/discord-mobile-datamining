// === Module 15928: ? ===

// Module 15928
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import Button2 from "Button" /* 4745 */;
import registerAssetDefault from "registerAsset" /* 11399 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, padding: 12 };
obj[1] = obj;
obj[2] = { textAlign: "center", marginTop: 16, marginHorizontal: 16 };
obj[3] = { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 };
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((onCreateThreadPress) => {
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = callback2();
  const obj = { source: registerAssetDefault, size: Button.Icon.Sizes.MEDIUM };
  obj[1] = callback(Button.Icon, obj);
  const items = [callback(View, obj), , , ];
  obj1 = { style: tmp.title, accessibilityRole: "header", maxFontSizeMultiplier: 2, variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj1[5] = intl.string(getSystemLocale.t.HgTQ8p);
  items[1] = callback(Text.Text, obj1);
  const obj2 = { style: tmp.subtext, maxFontSizeMultiplier: 2, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = getSystemLocale.intl;
  obj2[4] = intl2.string(getSystemLocale.t.jmq9GC);
  items[2] = callback(Text.Text, obj2);
  let tmp4Result = null != onCreateThreadPress;
  if (tmp4Result) {
    const obj3 = { onPress: null, text: null };
    obj3[0] = onCreateThreadPress;
    const intl3 = getSystemLocale.intl;
    obj3[1] = intl3.string(getSystemLocale.t.rBIGBL);
    tmp4Result = callback(Button2.Button, obj3);
  }
  items[3] = tmp4Result;
  obj[1] = items;
  return callback(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default memoResult;