// === Module 12707: ? ===

// Module 12707
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4734 */;
import registerAssetDefault from "registerAsset" /* 11952 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { flex: 1, flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
obj[0] = obj;
let closure_6 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function HomeChannelHeader() {
  { style: callback3().container, children: null };
  let obj = { source: registerAssetDefault, size: Button.Icon.Sizes.MEDIUM, disableColor: true };
  const items = [callback(Button.Icon, obj), ];
  obj = { variant: "heading-lg/extrabold", color: "interactive-text-active", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.Ym2Ri6);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/channel/header/HomeChannelHeader.tsx");

export default memoResult;