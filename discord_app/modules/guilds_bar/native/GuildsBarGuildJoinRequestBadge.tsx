// discord_app/modules/guilds_bar/native/GuildsBarGuildJoinRequestBadge.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import MAX_RESULTS_PER_PAGE from "../../guild_member_verification/MemberVerificationTypes.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import registerAssetDefault from "../../../../_runtime/11823_registerAsset.js";
import registerAssetDefault2 from "../../../../_runtime/15855_registerAsset.js";
import registerAssetDefault3 from "../../../../_runtime/15856_registerAsset.js";
import registerAssetDefault4 from "../../../../_runtime/15857_registerAsset.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
  } else if (tmp2(4272).GuildJoinRequestApplicationStatuses.SUBMITTED === joinRequestState) {
    tmp4 = registerAssetDefault3;
  } else if (tmp2(4272).GuildJoinRequestApplicationStatuses.STARTED === joinRequestState) {
    tmp4 = registerAssetDefault4;
  } else {
    tmp4 = null;
    if (tmp2(4272).GuildJoinRequestApplicationStatuses.APPROVED === joinRequestState) {
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