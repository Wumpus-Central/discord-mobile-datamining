// === Module 16298: GuildsBarGuildJoinRequestBadge ===

// Module 16298 (GuildsBarGuildJoinRequestBadge)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import MAX_RESULTS_PER_PAGE from "MAX_RESULTS_PER_PAGE" /* 4384 */;
import preloadDefault from "preload" /* 5587 */;
import registerAssetDefault from "registerAsset" /* 12289 */;
import registerAssetDefault2 from "registerAsset" /* 16299 */;
import registerAssetDefault3 from "registerAsset" /* 16300 */;
import registerAssetDefault4 from "registerAsset" /* 16301 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
createCacheKey = { badgeImageContainer: null, badgeImage: null };
createCacheKey = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08 };
let closure_5 = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08 };
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = callback();
  if (MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = registerAssetDefault2;
  } else if (tmp2(4384).GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = registerAssetDefault3;
  } else if (tmp2(4384).GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = registerAssetDefault4;
  } else {
    tmp4 = null;
    if (tmp2(4384).GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = registerAssetDefault;
    }
  }
  let tmp9 = null;
  if (null != tmp4) {
    let obj = { pointerEvents: "none", style: null, children: null };
    const items = [tmp.badgeImageContainer, joinRequestState.style];
    obj[1] = items;
    obj = { source: null, style: null };
    obj[0] = tmp4;
    obj[1] = tmp.badgeImage;
    obj[2] = jsx(preloadDefault, { source: null, style: null });
    tmp9 = <View source={null} style={null} />;
  }
  return tmp9;
};