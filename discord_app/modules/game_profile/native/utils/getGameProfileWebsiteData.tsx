// discord_app/modules/game_profile/native/utils/getGameProfileWebsiteData.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl9 from "../../../../intl/index.native.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import ThirdPartyGameApplicationWebsiteCategory from "../../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    const obj2 = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.WebsiteLink,
      title: intl8.string(intl9.t.fOUKvg),
      url: category.url,
    };
    intl8 = intl9.intl;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink,
      title: intl7.string(intl9.t.INic4y),
      url: category.url,
    };
    intl7 = intl9.intl;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink,
      title: intl6.string(intl9.t.lNmxbE),
      url: category.url,
    };
    intl6 = intl9.intl;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink,
      title: intl5.string(intl9.t.FjyREK),
      url: category.url,
    };
    intl5 = intl9.intl;
    return obj8;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink,
      title: intl4.string(intl9.t["cgR+IK"]),
      url: category.url,
    };
    intl4 = intl9.intl;
    return obj10;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink,
      title: intl3.string(intl9.t["D/PHq5"]),
      url: category.url,
    };
    intl3 = intl9.intl;
    return obj12;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink,
      title: intl2.string(intl9.t["Hgb+fc"]),
      url: category.url,
    };
    intl2 = intl9.intl;
    return obj14;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj = {
      icon: null,
      action: GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink,
      title: intl.string(intl9.t["7xtz4G"]),
      url: category.url,
    };
    intl = intl9.intl;
    return obj;
  } else {
    return null;
  }
}
