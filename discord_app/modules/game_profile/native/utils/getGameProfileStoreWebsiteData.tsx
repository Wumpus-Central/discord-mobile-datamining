// === Module 8693: getGameProfileStoreWebsiteData ===

// Module 8693 (getGameProfileStoreWebsiteData)
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8689 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    let obj = { icon: jsx(tmp(8694).SteamNeutralIcon, { size: "md" }), action: tmp(8686).GameProfileTrackActionActions.SteamStoreLink, title: null, url: null };
    const intl7 = tmp(1114).intl;
    obj.title = intl7.string(tmp(1114).t.FsANs4);
    obj.url = category.url;
    return obj;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    obj = { icon: jsx(tmp(8696).EpicGamesNeutralIcon, { size: "md" }), action: tmp(8686).GameProfileTrackActionActions.EpicStoreLink, title: null, url: null };
    const intl6 = tmp(1114).intl;
    obj.title = intl6.string(tmp(1114).t.ZbBMHa);
    obj.url = category.url;
    return obj;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj1 = { icon: jsx(tmp(8698).RobloxNeutralIcon, { size: "md" }), action: tmp(8686).GameProfileTrackActionActions.RobloxStoreLink, title: null, url: null };
    const intl5 = tmp(1114).intl;
    obj1.title = intl5.string(tmp(1114).t["pJ+P+h"]);
    obj1.url = category.url;
    return obj1;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj2 = { icon: jsx(tmp(8700).BattlenetNeutralIcon, { size: "md" }), action: tmp(8686).GameProfileTrackActionActions.BattlenetStoreLink, title: null, url: null };
    const intl4 = tmp(1114).intl;
    obj2.title = intl4.string(tmp(1114).t["A7grp+"]);
    obj2.url = category.url;
    return obj2;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj3 = { icon: jsx(tmp(8702).RiotGamesNeutralIcon, { size: "md" }), action: tmp(8686).GameProfileTrackActionActions.RiotStoreLink, title: null, url: null };
    const intl3 = tmp(1114).intl;
    obj3.title = intl3.string(tmp(1114).t.h6MapL);
    obj3.url = category.url;
    return obj3;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj4 = { icon: jsx(tmp(8704).MinecraftNeutralIcon, { size: "md" }), action: tmp(8686).GameProfileTrackActionActions.MinecraftStoreLink, title: null, url: null };
    const intl2 = tmp(1114).intl;
    obj4.title = intl2.string(tmp(1114).t["HZbmO+"]);
    obj4.url = category.url;
    return obj4;
  } else if ("XBOX_GAME_PASS" === category) {
    obj = { icon: jsx(tmp(8708).XboxNeutralIcon, { size: "md" }), action: tmp(8686).GameProfileTrackActionActions.XboxGamePassStoreLink, title: null, url: null };
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t["QpN/Iz"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};