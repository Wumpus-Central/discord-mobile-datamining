// === Module 9522: getGameProfileWebsiteData ===

// Module 9522 (getGameProfileWebsiteData)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1125 */;
import AppleNeutralIcon from "AppleNeutralIcon" /* 7976 */;
import XNeutralIcon from "XNeutralIcon" /* 8512 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 8514 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 8516 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 9278 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9305 */;
import GooglePlayNeutralIcon from "GooglePlayNeutralIcon" /* 9351 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9523 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 9525 */;
import BlueskyNeutralIcon from "BlueskyNeutralIcon" /* 9527 */;
import RedditNeutralIcon from "RedditNeutralIcon" /* 9529 */;
import TwitchNeutralIcon from "TwitchNeutralIcon" /* 9531 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    const obj2 = { icon: null, action: null, title: null, url: null };
    const obj3 = { size: "md", color };
    obj2.icon = jsx(GlobeEarthIcon.GlobeEarthIcon, { size: "md", color });
    obj2.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.WebsiteLink;
    const intl10 = util.intl;
    obj2.title = intl10.string(util.t.fOUKvg);
    obj2.url = category.url;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = { icon: null, action: null, title: null, url: null };
    const obj5 = { size: "md", color };
    obj4.icon = jsx(XNeutralIcon.XNeutralIcon, { size: "md", color });
    obj4.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink;
    const intl9 = util.intl;
    obj4.title = intl9.string(util.t.INic4y);
    obj4.url = category.url;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = { icon: null, action: null, title: null, url: null };
    const obj7 = { size: "md", color };
    obj6.icon = jsx(YoutubeNeutralIcon.YoutubeNeutralIcon, { size: "md", color });
    obj6.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink;
    const intl8 = util.intl;
    obj6.title = intl8.string(util.t.lNmxbE);
    obj6.url = category.url;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = { icon: null, action: null, title: null, url: null };
    const obj9 = { size: "md", color };
    obj8.icon = jsx(FacebookNeutralIcon.FacebookNeutralIcon, { size: "md", color });
    obj8.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink;
    const intl7 = util.intl;
    obj8.title = intl7.string(util.t.FjyREK);
    obj8.url = category.url;
    return obj8;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = { icon: null, action: null, title: null, url: null };
    const obj11 = { size: "md", color };
    obj10.icon = jsx(InstagramNeutralIcon.InstagramNeutralIcon, { size: "md", color });
    obj10.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink;
    const intl6 = util.intl;
    obj10.title = intl6.string(util.t["cgR+IK"]);
    obj10.url = category.url;
    return obj10;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color };
    obj12.icon = jsx(BlueskyNeutralIcon.BlueskyNeutralIcon, { size: "md", color });
    obj12.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink;
    const intl5 = util.intl;
    obj12.title = intl5.string(util.t["D/PHq5"]);
    obj12.url = category.url;
    return obj12;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = { icon: null, action: null, title: null, url: null };
    const obj15 = { size: "md", color };
    obj14.icon = jsx(RedditNeutralIcon.RedditNeutralIcon, { size: "md", color });
    obj14.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink;
    const intl4 = util.intl;
    obj14.title = intl4.string(util.t["Hgb+fc"]);
    obj14.url = category.url;
    return obj14;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj16 = { icon: null, action: null, title: null, url: null };
    const obj17 = { size: "md", color };
    obj16.icon = jsx(TwitchNeutralIcon.TwitchNeutralIcon, { size: "md", color });
    obj16.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink;
    const intl3 = util.intl;
    obj16.title = intl3.string(util.t["7xtz4G"]);
    obj16.url = category.url;
    return obj16;
  } else {
    if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPHONE !== category) {
      if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.IPAD !== category) {
        if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.ANDROID === category) {
          const obj = { icon: null, action: null, title: null, url: null };
          const obj18 = { size: "md", color };
          obj.icon = jsx(GooglePlayNeutralIcon.GooglePlayNeutralIcon, { size: "md", color });
          obj.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.GooglePlayStoreLink;
          const intl = util.intl;
          obj.title = intl.string(util.t.V6rllO);
          obj.url = category.url;
          return obj;
        } else {
          return null;
        }
      }
    }
    const obj19 = { icon: null, action: null, title: null, url: null };
    const obj20 = { size: "md", color };
    obj19.icon = jsx(AppleNeutralIcon.AppleNeutralIcon, { size: "md", color });
    obj19.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.AppStoreLink;
    const intl2 = util.intl;
    obj19.title = intl2.string(util.t.LVy7Ug);
    obj19.url = category.url;
    return obj19;
  }
};