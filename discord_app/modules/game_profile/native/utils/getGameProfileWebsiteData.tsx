// === Module 9166: getGameProfileWebsiteData ===

// Module 9166 (getGameProfileWebsiteData)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import XNeutralIcon from "XNeutralIcon" /* 8354 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 8356 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 8358 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8956 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8959 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9167 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 9169 */;
import BlueskyNeutralIcon from "BlueskyNeutralIcon" /* 9171 */;
import RedditNeutralIcon from "RedditNeutralIcon" /* 9173 */;
import TwitchNeutralIcon from "TwitchNeutralIcon" /* 9175 */;
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
    const intl8 = util.intl;
    obj2.title = intl8.string(util.t.fOUKvg);
    obj2.url = category.url;
    return obj2;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = { icon: null, action: null, title: null, url: null };
    const obj5 = { size: "md", color };
    obj4.icon = jsx(XNeutralIcon.XNeutralIcon, { size: "md", color });
    obj4.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink;
    const intl7 = util.intl;
    obj4.title = intl7.string(util.t.INic4y);
    obj4.url = category.url;
    return obj4;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = { icon: null, action: null, title: null, url: null };
    const obj7 = { size: "md", color };
    obj6.icon = jsx(YoutubeNeutralIcon.YoutubeNeutralIcon, { size: "md", color });
    obj6.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink;
    const intl6 = util.intl;
    obj6.title = intl6.string(util.t.lNmxbE);
    obj6.url = category.url;
    return obj6;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = { icon: null, action: null, title: null, url: null };
    const obj9 = { size: "md", color };
    obj8.icon = jsx(FacebookNeutralIcon.FacebookNeutralIcon, { size: "md", color });
    obj8.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink;
    const intl5 = util.intl;
    obj8.title = intl5.string(util.t.FjyREK);
    obj8.url = category.url;
    return obj8;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = { icon: null, action: null, title: null, url: null };
    const obj11 = { size: "md", color };
    obj10.icon = jsx(InstagramNeutralIcon.InstagramNeutralIcon, { size: "md", color });
    obj10.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink;
    const intl4 = util.intl;
    obj10.title = intl4.string(util.t["cgR+IK"]);
    obj10.url = category.url;
    return obj10;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color };
    obj12.icon = jsx(BlueskyNeutralIcon.BlueskyNeutralIcon, { size: "md", color });
    obj12.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink;
    const intl3 = util.intl;
    obj12.title = intl3.string(util.t["D/PHq5"]);
    obj12.url = category.url;
    return obj12;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = { icon: null, action: null, title: null, url: null };
    const obj15 = { size: "md", color };
    obj14.icon = jsx(RedditNeutralIcon.RedditNeutralIcon, { size: "md", color });
    obj14.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink;
    const intl2 = util.intl;
    obj14.title = intl2.string(util.t["Hgb+fc"]);
    obj14.url = category.url;
    return obj14;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj = { icon: null, action: null, title: null, url: null };
    const obj16 = { size: "md", color };
    obj.icon = jsx(TwitchNeutralIcon.TwitchNeutralIcon, { size: "md", color });
    obj.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink;
    const intl = util.intl;
    obj.title = intl.string(util.t["7xtz4G"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};