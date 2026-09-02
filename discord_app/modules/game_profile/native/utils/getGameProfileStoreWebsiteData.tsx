// === Module 8834: getGameProfileStoreWebsiteData ===

// Module 8834 (getGameProfileStoreWebsiteData)
import noopAll from "noop" /* 19 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8830 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    let obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(tmp(8835).SteamNeutralIcon, { size: "md" });
    obj[1] = tmp(8827).GameProfileTrackActionActions.SteamStoreLink;
    const intl7 = tmp(1233).intl;
    obj[2] = intl7.string(tmp(1233).t.FsANs4);
    obj[3] = category.url;
    return obj;
  } else if (tmp(8830).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(tmp(8837).EpicGamesNeutralIcon, { size: "md" });
    obj[1] = tmp(8827).GameProfileTrackActionActions.EpicStoreLink;
    const intl6 = tmp(1233).intl;
    obj[2] = intl6.string(tmp(1233).t.ZbBMHa);
    obj[3] = category.url;
    return obj;
  } else if (tmp(8830).ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    obj1 = { icon: null, action: null, title: null, url: null };
    obj1[0] = jsx(tmp(8839).RobloxNeutralIcon, { size: "md" });
    obj1[1] = tmp(8827).GameProfileTrackActionActions.RobloxStoreLink;
    const intl5 = tmp(1233).intl;
    obj1[2] = intl5.string(tmp(1233).t["pJ+P+h"]);
    obj1[3] = category.url;
    return obj1;
  } else if (tmp(8830).ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj2 = { icon: null, action: null, title: null, url: null };
    obj2[0] = jsx(tmp(8841).BattlenetNeutralIcon, { size: "md" });
    obj2[1] = tmp(8827).GameProfileTrackActionActions.BattlenetStoreLink;
    const intl4 = tmp(1233).intl;
    obj2[2] = intl4.string(tmp(1233).t["A7grp+"]);
    obj2[3] = category.url;
    return obj2;
  } else if (tmp(8830).ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj3 = { icon: null, action: null, title: null, url: null };
    obj3[0] = jsx(tmp(8843).RiotGamesNeutralIcon, { size: "md" });
    obj3[1] = tmp(8827).GameProfileTrackActionActions.RiotStoreLink;
    const intl3 = tmp(1233).intl;
    obj3[2] = intl3.string(tmp(1233).t.h6MapL);
    obj3[3] = category.url;
    return obj3;
  } else if (tmp(8830).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj4 = { icon: null, action: null, title: null, url: null };
    obj4[0] = jsx(tmp(8845).MinecraftNeutralIcon, { size: "md" });
    obj4[1] = tmp(8827).GameProfileTrackActionActions.MinecraftStoreLink;
    const intl2 = tmp(1233).intl;
    obj4[2] = intl2.string(tmp(1233).t["HZbmO+"]);
    obj4[3] = category.url;
    return obj4;
  } else if ("XBOX_GAME_PASS" === category) {
    obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(tmp(8849).XboxNeutralIcon, { size: "md" });
    obj[1] = tmp(8827).GameProfileTrackActionActions.XboxGamePassStoreLink;
    const intl = tmp(1233).intl;
    obj[2] = intl.string(tmp(1233).t["QpN/Iz"]);
    obj[3] = category.url;
    return obj;
  } else {
    return null;
  }
};