// discord_app/modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import GameProfileEmbedAction from "../../GameProfileAnalyticUtils.tsx";
import ThirdPartyGameApplicationWebsiteCategory from "../../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import SteamNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/SteamNeutralIcon.tsx";
import EpicGamesNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/EpicGamesNeutralIcon.tsx";
import RobloxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/RobloxNeutralIcon.tsx";
import BattlenetNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/BattlenetNeutralIcon.tsx";
import RiotGamesNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/RiotGamesNeutralIcon.tsx";
import MinecraftNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx";
import XboxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    let obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(SteamNeutralIcon.SteamNeutralIcon, { size: "md" });
    obj[1] = GameProfileEmbedAction.GameProfileTrackActionActions.SteamStoreLink;
    const intl7 = getSystemLocale.intl;
    obj[2] = intl7.string(getSystemLocale.t.FsANs4);
    obj[3] = category.url;
    return obj;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(EpicGamesNeutralIcon.EpicGamesNeutralIcon, { size: "md" });
    obj[1] = GameProfileEmbedAction.GameProfileTrackActionActions.EpicStoreLink;
    const intl6 = getSystemLocale.intl;
    obj[2] = intl6.string(getSystemLocale.t.ZbBMHa);
    obj[3] = category.url;
    return obj;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    obj1 = { icon: null, action: null, title: null, url: null };
    obj1[0] = jsx(RobloxNeutralIcon.RobloxNeutralIcon, { size: "md" });
    obj1[1] = GameProfileEmbedAction.GameProfileTrackActionActions.RobloxStoreLink;
    const intl5 = getSystemLocale.intl;
    obj1[2] = intl5.string(getSystemLocale.t["pJ+P+h"]);
    obj1[3] = category.url;
    return obj1;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj2 = { icon: null, action: null, title: null, url: null };
    obj2[0] = jsx(BattlenetNeutralIcon.BattlenetNeutralIcon, { size: "md" });
    obj2[1] = GameProfileEmbedAction.GameProfileTrackActionActions.BattlenetStoreLink;
    const intl4 = getSystemLocale.intl;
    obj2[2] = intl4.string(getSystemLocale.t["A7grp+"]);
    obj2[3] = category.url;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj3 = { icon: null, action: null, title: null, url: null };
    obj3[0] = jsx(RiotGamesNeutralIcon.RiotGamesNeutralIcon, { size: "md" });
    obj3[1] = GameProfileEmbedAction.GameProfileTrackActionActions.RiotStoreLink;
    const intl3 = getSystemLocale.intl;
    obj3[2] = intl3.string(getSystemLocale.t.h6MapL);
    obj3[3] = category.url;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj4 = { icon: null, action: null, title: null, url: null };
    obj4[0] = jsx(MinecraftNeutralIcon.MinecraftNeutralIcon, { size: "md" });
    obj4[1] = GameProfileEmbedAction.GameProfileTrackActionActions.MinecraftStoreLink;
    const intl2 = getSystemLocale.intl;
    obj4[2] = intl2.string(getSystemLocale.t["HZbmO+"]);
    obj4[3] = category.url;
    return obj4;
  } else if ("XBOX_GAME_PASS" === category) {
    obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(XboxNeutralIcon.XboxNeutralIcon, { size: "md" });
    obj[1] = GameProfileEmbedAction.GameProfileTrackActionActions.XboxGamePassStoreLink;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t["QpN/Iz"]);
    obj[3] = category.url;
    return obj;
  } else {
    return null;
  }
};