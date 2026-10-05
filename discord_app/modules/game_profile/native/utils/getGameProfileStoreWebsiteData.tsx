// discord_app/modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl8 from "../../../../intl/index.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import ThirdPartyGameApplicationWebsiteCategory from "../../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import SteamNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/SteamNeutralIcon.tsx";
import EpicGamesNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/EpicGamesNeutralIcon.tsx";
import RobloxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/RobloxNeutralIcon.tsx";
import BattlenetNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/BattlenetNeutralIcon.tsx";
import RiotGamesNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/RiotGamesNeutralIcon.tsx";
import MinecraftNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx";
import XboxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/XboxNeutralIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
    const obj2 = {
      icon: jsx(SteamNeutralIcon.SteamNeutralIcon, { size: "md" }),
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.SteamStoreLink,
      title: intl7.string(intl8.t.FsANs4),
      url: category.url,
    };
    intl7 = intl8.intl;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    const obj3 = {
      icon: jsx(EpicGamesNeutralIcon.EpicGamesNeutralIcon, { size: "md" }),
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.EpicStoreLink,
      title: intl6.string(intl8.t.ZbBMHa),
      url: category.url,
    };
    intl6 = intl8.intl;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    const obj4 = {
      icon: jsx(RobloxNeutralIcon.RobloxNeutralIcon, { size: "md" }),
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink,
      title: intl5.string(intl8.t["pJ+P+h"]),
      url: category.url,
    };
    intl5 = intl8.intl;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj5 = {
      icon: jsx(BattlenetNeutralIcon.BattlenetNeutralIcon, { size: "md" }),
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BattlenetStoreLink,
      title: intl4.string(intl8.t["A7grp+"]),
      url: category.url,
    };
    intl4 = intl8.intl;
    return obj5;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj6 = {
      icon: jsx(RiotGamesNeutralIcon.RiotGamesNeutralIcon, { size: "md" }),
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RiotStoreLink,
      title: intl3.string(intl8.t.h6MapL),
      url: category.url,
    };
    intl3 = intl8.intl;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj7 = {
      icon: jsx(MinecraftNeutralIcon.MinecraftNeutralIcon, { size: "md" }),
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.MinecraftStoreLink,
      title: intl2.string(intl8.t["HZbmO+"]),
      url: category.url,
    };
    intl2 = intl8.intl;
    return obj7;
  } else if ("XBOX_GAME_PASS" === category) {
    const obj = {
      icon: jsx(XboxNeutralIcon.XboxNeutralIcon, { size: "md" }),
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XboxGamePassStoreLink,
      title: intl.string(intl8.t["QpN/Iz"]),
      url: category.url,
    };
    intl = intl8.intl;
    return obj;
  } else {
    return null;
  }
}
