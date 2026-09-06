// === Module 16347: ? ===

// Module 16347
import ThemesDefault from "Themes" /* 576 */;
import preloadDefault from "preload" /* 5587 */;
import registerAssetDefault from "registerAsset" /* 12264 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;

let obj = { badgeImageContainer: null, badgeImage: null };
obj = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, backgroundColor: ThemesDefault.colors.STATUS_WARNING_BACKGROUND, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj[0] = obj;
createCacheKey = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08, tintColor: ThemesDefault.colors.BLACK };
obj[1] = createCacheKey;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function GuildsBarGeoRestrictedBadge(style) {
  const tmp = callback();
  let obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.badgeImageContainer, style.style];
  obj = { source: registerAssetDefault, style: tmp.badgeImage };
  obj[2] = jsx(preloadDefault, { source: registerAssetDefault, style: tmp.badgeImage });
  return <View source={registerAssetDefault} style={tmp.badgeImage} />;
});
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default memoResult;