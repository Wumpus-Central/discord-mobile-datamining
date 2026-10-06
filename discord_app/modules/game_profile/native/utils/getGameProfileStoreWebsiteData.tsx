// === Module 8370: getGameProfileStoreWebsiteData ===

// Module 8370 (getGameProfileStoreWebsiteData)
import Fragment from "Fragment" /* 21 */;
import intl8 from "intl" /* 1126 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8366 */;
import SteamNeutralIcon from "SteamNeutralIcon" /* 8371 */;
import EpicGamesNeutralIcon from "EpicGamesNeutralIcon" /* 8373 */;
import RobloxNeutralIcon from "RobloxNeutralIcon" /* 8375 */;
import BattlenetNeutralIcon from "BattlenetNeutralIcon" /* 8377 */;
import RiotGamesNeutralIcon from "RiotGamesNeutralIcon" /* 8379 */;
import MinecraftNeutralIcon from "MinecraftNeutralIcon" /* 8381 */;
import XboxNeutralIcon from "XboxNeutralIcon" /* 8385 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    const obj2 = { icon: jsx(SteamNeutralIcon.SteamNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamStoreLink, title: intl7.string(intl8.t.FsANs4), url: category.url };
    intl7 = intl8.intl;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj3 = { icon: jsx(EpicGamesNeutralIcon.EpicGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.EpicStoreLink, title: intl6.string(intl8.t.ZbBMHa), url: category.url };
    intl6 = intl8.intl;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj4 = { icon: jsx(RobloxNeutralIcon.RobloxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink, title: intl5.string(intl8.t["pJ+P+h"]), url: category.url };
    intl5 = intl8.intl;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = { icon: jsx(BattlenetNeutralIcon.BattlenetNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BattlenetStoreLink, title: intl4.string(intl8.t["A7grp+"]), url: category.url };
    intl4 = intl8.intl;
    return obj5;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj6 = { icon: jsx(RiotGamesNeutralIcon.RiotGamesNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RiotStoreLink, title: intl3.string(intl8.t.h6MapL), url: category.url };
    intl3 = intl8.intl;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj7 = { icon: jsx(MinecraftNeutralIcon.MinecraftNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.MinecraftStoreLink, title: intl2.string(intl8.t["HZbmO+"]), url: category.url };
    intl2 = intl8.intl;
    return obj7;
  } else if ("XBOX_GAME_PASS" === category) {
    const obj = { icon: jsx(XboxNeutralIcon.XboxNeutralIcon, { size: "md" }), action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XboxGamePassStoreLink, title: intl.string(intl8.t["QpN/Iz"]), url: category.url };
    intl = intl8.intl;
    return obj;
  } else {
    return null;
  }
};