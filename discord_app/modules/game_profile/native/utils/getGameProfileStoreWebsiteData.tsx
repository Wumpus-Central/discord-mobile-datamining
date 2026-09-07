// === Module 8698: getGameProfileStoreWebsiteData ===

// Module 8698 (getGameProfileStoreWebsiteData)
import util from "util" /* 1114 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8691 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8694 */;
import SteamNeutralIcon from "SteamNeutralIcon" /* 8699 */;
import EpicGamesNeutralIcon from "EpicGamesNeutralIcon" /* 8701 */;
import RobloxNeutralIcon from "RobloxNeutralIcon" /* 8703 */;
import BattlenetNeutralIcon from "BattlenetNeutralIcon" /* 8705 */;
import RiotGamesNeutralIcon from "RiotGamesNeutralIcon" /* 8707 */;
import MinecraftNeutralIcon from "MinecraftNeutralIcon" /* 8709 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8713 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    let obj = { icon: jsx(SteamNeutralIcon.SteamNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamStoreLink, title: null, url: null };
    const intl7 = util.intl;
    obj.title = intl7.string(util.t.FsANs4);
    obj.url = category.url;
    return obj;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    obj = { icon: jsx(EpicGamesNeutralIcon.EpicGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.EpicStoreLink, title: null, url: null };
    const intl6 = util.intl;
    obj.title = intl6.string(util.t.ZbBMHa);
    obj.url = category.url;
    return obj;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj1 = { icon: jsx(RobloxNeutralIcon.RobloxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink, title: null, url: null };
    const intl5 = util.intl;
    obj1.title = intl5.string(util.t["pJ+P+h"]);
    obj1.url = category.url;
    return obj1;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj2 = { icon: jsx(BattlenetNeutralIcon.BattlenetNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BattlenetStoreLink, title: null, url: null };
    const intl4 = util.intl;
    obj2.title = intl4.string(util.t["A7grp+"]);
    obj2.url = category.url;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj3 = { icon: jsx(RiotGamesNeutralIcon.RiotGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RiotStoreLink, title: null, url: null };
    const intl3 = util.intl;
    obj3.title = intl3.string(util.t.h6MapL);
    obj3.url = category.url;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj4 = { icon: jsx(MinecraftNeutralIcon.MinecraftNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.MinecraftStoreLink, title: null, url: null };
    const intl2 = util.intl;
    obj4.title = intl2.string(util.t["HZbmO+"]);
    obj4.url = category.url;
    return obj4;
  } else if ("XBOX_GAME_PASS" === category) {
    obj = { icon: jsx(XboxNeutralIcon.XboxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XboxGamePassStoreLink, title: null, url: null };
    const intl = util.intl;
    obj.title = intl.string(util.t["QpN/Iz"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};