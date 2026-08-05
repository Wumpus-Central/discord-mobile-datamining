// discord_app/modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let obj = { badgeImageContainer: null, badgeImage: null };
obj = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, backgroundColor: require("Themes").colors.STATUS_WARNING_BACKGROUND, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
obj[0] = obj;
createCacheKey = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08, tintColor: require("Themes").colors.BLACK };
obj[1] = createCacheKey;
let closure_4 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function GuildsBarGeoRestrictedBadge(style) {
  const tmp = callback();
  let obj = { style: items, pointerEvents: "none", children: null };
  items = [tmp.badgeImageContainer, style.style];
  obj = { source: null, style: null };
  obj[0] = importDefault(11547);
  obj[1] = tmp.badgeImage;
  obj[2] = jsx(importDefault(5236), { source: null, style: null });
  return <View source={null} style={null} />;
});
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGeoRestrictedBadge.tsx");

export default memoResult;