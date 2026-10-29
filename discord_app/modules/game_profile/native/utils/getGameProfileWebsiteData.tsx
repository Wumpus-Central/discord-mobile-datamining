// discord_app/modules/game_profile/native/utils/getGameProfileWebsiteData.tsx
import util from "../../../../intl/index.native.tsx";
import AppleNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/AppleNeutralIcon.tsx";
import XNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/XNeutralIcon.tsx";
import FacebookNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/FacebookNeutralIcon.tsx";
import InstagramNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/InstagramNeutralIcon.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import ThirdPartyGameApplicationWebsiteCategory from "../../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import RobloxNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/RobloxNeutralIcon.tsx";
import GooglePlayNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/GooglePlayNeutralIcon.tsx";
import GlobeEarthIcon from "../../../../design/components/Icon/native/redesign/generated/GlobeEarthIcon.tsx";
import YoutubeNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/YoutubeNeutralIcon.tsx";
import BlueskyNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/BlueskyNeutralIcon.tsx";
import RedditNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/RedditNeutralIcon.tsx";
import TwitchNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/TwitchNeutralIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    const obj2 = { icon: null, action: null, title: null, url: null };
    const obj3 = { size: "md", color };
    obj2.icon = jsx(GlobeEarthIcon.GlobeEarthIcon, { size: "md", color });
    obj2.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.WebsiteLink;
    const intl11 = util.intl;
    obj2.title = intl11.string(util.t.fOUKvg);
    obj2.url = category.url;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = { icon: null, action: null, title: null, url: null };
    const obj5 = { size: "md", color };
    obj4.icon = jsx(XNeutralIcon.XNeutralIcon, { size: "md", color });
    obj4.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink;
    const intl10 = util.intl;
    obj4.title = intl10.string(util.t.INic4y);
    obj4.url = category.url;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = { icon: null, action: null, title: null, url: null };
    const obj7 = { size: "md", color };
    obj6.icon = jsx(YoutubeNeutralIcon.YoutubeNeutralIcon, { size: "md", color });
    obj6.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink;
    const intl9 = util.intl;
    obj6.title = intl9.string(util.t.lNmxbE);
    obj6.url = category.url;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = { icon: null, action: null, title: null, url: null };
    const obj9 = { size: "md", color };
    obj8.icon = jsx(FacebookNeutralIcon.FacebookNeutralIcon, { size: "md", color });
    obj8.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink;
    const intl8 = util.intl;
    obj8.title = intl8.string(util.t.FjyREK);
    obj8.url = category.url;
    return obj8;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = { icon: null, action: null, title: null, url: null };
    const obj11 = { size: "md", color };
    obj10.icon = jsx(InstagramNeutralIcon.InstagramNeutralIcon, { size: "md", color });
    obj10.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink;
    const intl7 = util.intl;
    obj10.title = intl7.string(util.t["cgR+IK"]);
    obj10.url = category.url;
    return obj10;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color };
    obj12.icon = jsx(BlueskyNeutralIcon.BlueskyNeutralIcon, { size: "md", color });
    obj12.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink;
    const intl6 = util.intl;
    obj12.title = intl6.string(util.t["D/PHq5"]);
    obj12.url = category.url;
    return obj12;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = { icon: null, action: null, title: null, url: null };
    const obj15 = { size: "md", color };
    obj14.icon = jsx(RedditNeutralIcon.RedditNeutralIcon, { size: "md", color });
    obj14.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink;
    const intl5 = util.intl;
    obj14.title = intl5.string(util.t["Hgb+fc"]);
    obj14.url = category.url;
    return obj14;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj16 = { icon: null, action: null, title: null, url: null };
    const obj17 = { size: "md", color };
    obj16.icon = jsx(TwitchNeutralIcon.TwitchNeutralIcon, { size: "md", color });
    obj16.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink;
    const intl4 = util.intl;
    obj16.title = intl4.string(util.t["7xtz4G"]);
    obj16.url = category.url;
    return obj16;
  } else {
    if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE !== category) {
      if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD !== category) {
        if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID === category) {
          const obj18 = { icon: null, action: null, title: null, url: null };
          const obj19 = { size: "md", color };
          obj18.icon = jsx(GooglePlayNeutralIcon.GooglePlayNeutralIcon, { size: "md", color });
          obj18.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.GooglePlayStoreLink;
          const intl2 = util.intl;
          obj18.title = intl2.string(util.t.V6rllO);
          obj18.url = category.url;
          return obj18;
        } else if (
          ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category
        ) {
          const obj = { icon: null, action: null, title: null, url: null };
          const obj20 = { size: "md", color };
          obj.icon = jsx(RobloxNeutralIcon.RobloxNeutralIcon, { size: "md", color });
          obj.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.RobloxStoreLink;
          const intl = util.intl;
          obj.title = intl.string(util.t["pJ+P+h"]);
          obj.url = category.url;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj21 = { icon: null, action: null, title: null, url: null };
    const obj22 = { size: "md", color };
    obj21.icon = jsx(AppleNeutralIcon.AppleNeutralIcon, { size: "md", color });
    obj21.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.AppStoreLink;
    const intl3 = util.intl;
    obj21.title = intl3.string(util.t.LVy7Ug);
    obj21.url = category.url;
    return obj21;
  }
}
