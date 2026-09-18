// === Module 8924: getGameProfileStoreWebsiteData ===

// Module 8924 (getGameProfileStoreWebsiteData)
import util from "util" /* 1115 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8917 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8920 */;
import SteamNeutralIcon from "SteamNeutralIcon" /* 8925 */;
import EpicGamesNeutralIcon from "EpicGamesNeutralIcon" /* 8927 */;
import RobloxNeutralIcon from "RobloxNeutralIcon" /* 8929 */;
import BattlenetNeutralIcon from "BattlenetNeutralIcon" /* 8931 */;
import RiotGamesNeutralIcon from "RiotGamesNeutralIcon" /* 8933 */;
import MinecraftNeutralIcon from "MinecraftNeutralIcon" /* 8935 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8939 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    const obj2 = { icon: jsx(SteamNeutralIcon.SteamNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamStoreLink, title: null, url: null };
    const intl7 = util.intl;
    obj2.title = intl7.string(util.t.FsANs4);
    obj2.url = category.url;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj3 = { icon: jsx(EpicGamesNeutralIcon.EpicGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.EpicStoreLink, title: null, url: null };
    const intl6 = util.intl;
    obj3.title = intl6.string(util.t.ZbBMHa);
    obj3.url = category.url;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj4 = { icon: jsx(RobloxNeutralIcon.RobloxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink, title: null, url: null };
    const intl5 = util.intl;
    obj4.title = intl5.string(util.t["pJ+P+h"]);
    obj4.url = category.url;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = { icon: jsx(BattlenetNeutralIcon.BattlenetNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BattlenetStoreLink, title: null, url: null };
    const intl4 = util.intl;
    obj5.title = intl4.string(util.t["A7grp+"]);
    obj5.url = category.url;
    return obj5;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj6 = { icon: jsx(RiotGamesNeutralIcon.RiotGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RiotStoreLink, title: null, url: null };
    const intl3 = util.intl;
    obj6.title = intl3.string(util.t.h6MapL);
    obj6.url = category.url;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj7 = { icon: jsx(MinecraftNeutralIcon.MinecraftNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.MinecraftStoreLink, title: null, url: null };
    const intl2 = util.intl;
    obj7.title = intl2.string(util.t["HZbmO+"]);
    obj7.url = category.url;
    return obj7;
  } else if ("XBOX_GAME_PASS" === category) {
    const obj = { icon: jsx(XboxNeutralIcon.XboxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XboxGamePassStoreLink, title: null, url: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["QpN/Iz"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};