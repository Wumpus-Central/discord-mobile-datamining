// === Module 16034: ForYouUnreadClearedState ===

// Module 16034 (ForYouUnreadClearedState)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4474 */;
import registerAssetDefault from "registerAsset" /* 10445 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: { marginBottom: 4, marginHorizontal: 24, alignItems: "center", flexDirection: "row" }, imageContainer: null, icon: null, headerText: null };
createCacheKey = { width: 48, height: 48, backgroundColor: ThemesDefault.unsafe_rawColors.GREEN_400, opacity: 0.16, borderRadius: ThemesDefault.radii.xl, marginRight: 16, justifyContent: "center", alignItems: "center" };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { margin: 12, position: "absolute", color: ThemesDefault.unsafe_rawColors.GREEN_400 };
createCacheKey[3] = { marginBottom: 2 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj1 = { margin: 12, position: "absolute", color: ThemesDefault.unsafe_rawColors.GREEN_400 };
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouUnreadClearedState.tsx");

export const ForYouUnreadClearedState = function ForYouUnreadClearedState() {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.imageContainer };
  const items = [callback(View, obj), , ];
  obj = { source: registerAssetDefault, style: tmp.icon, color: tmp.icon.color };
  items[1] = callback(Button.Icon, obj);
  obj1 = { children: null };
  const obj2 = { color: "mobile-text-heading-primary", variant: "text-md/semibold", style: tmp.headerText, children: null };
  const intl = getSystemLocale.intl;
  obj2[3] = intl.string(getSystemLocale.t.DonStq);
  const items1 = [callback(Text.Text, obj2), ];
  const obj3 = { color: "text-default", variant: "text-md/medium", children: null };
  const intl2 = getSystemLocale.intl;
  obj3[2] = intl2.string(getSystemLocale.t.jXFsai);
  items1[1] = callback(Text.Text, obj3);
  obj1[0] = items1;
  items[2] = callback2(View, obj1);
  obj[1] = items;
  return callback2(View, obj);
};