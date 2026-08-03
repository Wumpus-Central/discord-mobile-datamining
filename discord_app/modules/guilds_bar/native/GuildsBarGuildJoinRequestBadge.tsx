// === Module 15263: GuildsBarGuildJoinRequestBadge ===

// Module 15263 (GuildsBarGuildJoinRequestBadge)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { badgeImageContainer: null, badgeImage: null };
createCacheKey = { position: "absolute", bottom: -3, right: -3, height: 22, width: 22, borderColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, borderWidth: 3, borderRadius: 11, justifyContent: "center", alignItems: "center", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: 16, width: 16, opacity: require("result").DARK_1_LIGHT_08 };
const result = require("jsxProd").fileFinishedImporting("modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx");

export default function GuildsBarGuildJoinRequestBadge(joinRequestState) {
  joinRequestState = joinRequestState.joinRequestState;
  const tmp = createCacheKey();
  if (require(4075) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = importDefault(15264);
  } else if (tmp2(4075).GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = importDefault(15265);
  } else if (tmp2(4075).GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = importDefault(15266);
  } else {
    tmp4 = null;
    if (tmp2(4075).GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = importDefault(11566);
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
    obj[2] = jsx(importDefault(5207), { source: null, style: null });
    tmp9 = <View source={null} style={null} />;
  }
  return tmp9;
};