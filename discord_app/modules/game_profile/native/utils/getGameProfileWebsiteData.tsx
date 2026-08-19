// === Module 12023: getGameProfileWebsiteData ===

// Module 12023 (getGameProfileWebsiteData)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import XNeutralIcon from "XNeutralIcon" /* 8309 */;
import FacebookNeutralIcon from "FacebookNeutralIcon" /* 8311 */;
import InstagramNeutralIcon from "InstagramNeutralIcon" /* 8313 */;
import GameProfileEmbedAction from "GameProfileEmbedAction" /* 9101 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 9104 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9826 */;
import YoutubeNeutralIcon from "YoutubeNeutralIcon" /* 11529 */;
import BlueskyNeutralIcon from "BlueskyNeutralIcon" /* 12024 */;
import RedditNeutralIcon from "RedditNeutralIcon" /* 12026 */;
import TwitchNeutralIcon from "TwitchNeutralIcon" /* 12028 */;

const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    let obj = { size: "md", color: null };
    obj[1] = arg1;
    obj[0] = jsx(GlobeEarthIcon.GlobeEarthIcon, { size: "md", color: null });
    obj[1] = GameProfileEmbedAction.GameProfileTrackActionActions.WebsiteLink;
    const intl8 = getSystemLocale.intl;
    obj[2] = intl8.string(getSystemLocale.t.fOUKvg);
    obj[3] = category.url;
    return obj;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    obj1 = { icon: null, action: null, title: null, url: null };
    const obj2 = { size: "md", color: null };
    obj2[1] = arg1;
    obj1[0] = jsx(XNeutralIcon.XNeutralIcon, { size: "md", color: null });
    obj1[1] = GameProfileEmbedAction.GameProfileTrackActionActions.XLink;
    const intl7 = getSystemLocale.intl;
    obj1[2] = intl7.string(getSystemLocale.t.INic4y);
    obj1[3] = category.url;
    return obj1;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj3 = { icon: null, action: null, title: null, url: null };
    const obj4 = { size: "md", color: null };
    obj4[1] = arg1;
    obj3[0] = jsx(YoutubeNeutralIcon.YoutubeNeutralIcon, { size: "md", color: null });
    obj3[1] = GameProfileEmbedAction.GameProfileTrackActionActions.YouTubeLink;
    const intl6 = getSystemLocale.intl;
    obj3[2] = intl6.string(getSystemLocale.t.lNmxbE);
    obj3[3] = category.url;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj5 = { icon: null, action: null, title: null, url: null };
    const obj6 = { size: "md", color: null };
    obj6[1] = arg1;
    obj5[0] = jsx(FacebookNeutralIcon.FacebookNeutralIcon, { size: "md", color: null });
    obj5[1] = GameProfileEmbedAction.GameProfileTrackActionActions.FacebookLink;
    const intl5 = getSystemLocale.intl;
    obj5[2] = intl5.string(getSystemLocale.t.FjyREK);
    obj5[3] = category.url;
    return obj5;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj7 = { icon: null, action: null, title: null, url: null };
    const obj8 = { size: "md", color: null };
    obj8[1] = arg1;
    obj7[0] = jsx(InstagramNeutralIcon.InstagramNeutralIcon, { size: "md", color: null });
    obj7[1] = GameProfileEmbedAction.GameProfileTrackActionActions.InstagramLink;
    const intl4 = getSystemLocale.intl;
    obj7[2] = intl4.string(getSystemLocale.t["cgR+IK"]);
    obj7[3] = category.url;
    return obj7;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj9 = { icon: null, action: null, title: null, url: null };
    const obj10 = { size: "md", color: null };
    obj10[1] = arg1;
    obj9[0] = jsx(BlueskyNeutralIcon.BlueskyNeutralIcon, { size: "md", color: null });
    obj9[1] = GameProfileEmbedAction.GameProfileTrackActionActions.BlueskyLink;
    const intl3 = getSystemLocale.intl;
    obj9[2] = intl3.string(getSystemLocale.t["D/PHq5"]);
    obj9[3] = category.url;
    return obj9;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj11 = { icon: null, action: null, title: null, url: null };
    const obj12 = { size: "md", color: null };
    obj12[1] = arg1;
    obj11[0] = jsx(RedditNeutralIcon.RedditNeutralIcon, { size: "md", color: null });
    obj11[1] = GameProfileEmbedAction.GameProfileTrackActionActions.RedditLink;
    const intl2 = getSystemLocale.intl;
    obj11[2] = intl2.string(getSystemLocale.t["Hgb+fc"]);
    obj11[3] = category.url;
    return obj11;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    obj = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color: null };
    obj13[1] = arg1;
    obj[0] = jsx(TwitchNeutralIcon.TwitchNeutralIcon, { size: "md", color: null });
    obj[1] = GameProfileEmbedAction.GameProfileTrackActionActions.TwitchLink;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t["7xtz4G"]);
    obj[3] = category.url;
    return obj;
  } else {
    return null;
  }
};