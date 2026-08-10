// discord_app/modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/11661_registerAsset.js";
import { registerAsset } from "../../../../_runtime/15422_registerAsset.js";
import { registerAsset } from "../../../../_runtime/15423_registerAsset.js";
import { registerAsset } from "../../../../_runtime/15424_registerAsset.js";
import { preload } from "../../../components_native/common/FastImage.tsx";
import { MAX_RESULTS_PER_PAGE } from "../../guild_member_verification/MemberVerificationTypes.tsx";

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
  if (MAX_RESULTS_PER_PAGE.GuildJoinRequestApplicationStatuses.REJECTED === joinRequestState) {
    let tmp4 = registerAsset;
  } else if (tmp2(4127).GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = registerAsset;
  } else if (tmp2(4127).GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = registerAsset;
  } else {
    tmp4 = null;
    if (tmp2(4127).GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
      tmp4 = registerAsset;
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
    obj[2] = jsx(preload, { source: null, style: null });
    tmp9 = <View source={null} style={null} />;
  }
  return tmp9;
};