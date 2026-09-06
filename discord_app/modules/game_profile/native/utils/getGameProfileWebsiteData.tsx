// === Module 8885: getGameProfileWebsiteData ===

// Module 8885 (getGameProfileWebsiteData)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8689 */;

const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    let obj = { icon: null, action: null, title: null, url: null };
    obj = { size: "md", color: null };
    obj[1] = arg1;
    obj[0] = jsx(tmp(8886).GlobeEarthIcon, { size: "md", color: null });
    obj[1] = tmp(8686).GameProfileTrackActionActions.WebsiteLink;
    const intl8 = tmp(1114).intl;
    obj[2] = intl8.string(tmp(1114).t.fOUKvg);
    obj[3] = category.url;
    return obj;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    obj1 = { icon: null, action: null, title: null, url: null };
    const obj2 = { size: "md", color: null };
    obj2[1] = arg1;
    obj1[0] = jsx(tmp(8099).XNeutralIcon, { size: "md", color: null });
    obj1[1] = tmp(8686).GameProfileTrackActionActions.XLink;
    const intl7 = tmp(1114).intl;
    obj1[2] = intl7.string(tmp(1114).t.INic4y);
    obj1[3] = category.url;
    return obj1;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj3 = { icon: null, action: null, title: null, url: null };
    const obj4 = { size: "md", color: null };
    obj4[1] = arg1;
    obj3[0] = jsx(tmp(8888).YoutubeNeutralIcon, { size: "md", color: null });
    obj3[1] = tmp(8686).GameProfileTrackActionActions.YouTubeLink;
    const intl6 = tmp(1114).intl;
    obj3[2] = intl6.string(tmp(1114).t.lNmxbE);
    obj3[3] = category.url;
    return obj3;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj5 = { icon: null, action: null, title: null, url: null };
    const obj6 = { size: "md", color: null };
    obj6[1] = arg1;
    obj5[0] = jsx(tmp(8101).FacebookNeutralIcon, { size: "md", color: null });
    obj5[1] = tmp(8686).GameProfileTrackActionActions.FacebookLink;
    const intl5 = tmp(1114).intl;
    obj5[2] = intl5.string(tmp(1114).t.FjyREK);
    obj5[3] = category.url;
    return obj5;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj7 = { icon: null, action: null, title: null, url: null };
    const obj8 = { size: "md", color: null };
    obj8[1] = arg1;
    obj7[0] = jsx(tmp(8103).InstagramNeutralIcon, { size: "md", color: null });
    obj7[1] = tmp(8686).GameProfileTrackActionActions.InstagramLink;
    const intl4 = tmp(1114).intl;
    obj7[2] = intl4.string(tmp(1114).t["cgR+IK"]);
    obj7[3] = category.url;
    return obj7;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj9 = { icon: null, action: null, title: null, url: null };
    const obj10 = { size: "md", color: null };
    obj10[1] = arg1;
    obj9[0] = jsx(tmp(8890).BlueskyNeutralIcon, { size: "md", color: null });
    obj9[1] = tmp(8686).GameProfileTrackActionActions.BlueskyLink;
    const intl3 = tmp(1114).intl;
    obj9[2] = intl3.string(tmp(1114).t["D/PHq5"]);
    obj9[3] = category.url;
    return obj9;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj11 = { icon: null, action: null, title: null, url: null };
    const obj12 = { size: "md", color: null };
    obj12[1] = arg1;
    obj11[0] = jsx(tmp(8892).RedditNeutralIcon, { size: "md", color: null });
    obj11[1] = tmp(8686).GameProfileTrackActionActions.RedditLink;
    const intl2 = tmp(1114).intl;
    obj11[2] = intl2.string(tmp(1114).t["Hgb+fc"]);
    obj11[3] = category.url;
    return obj11;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    obj = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color: null };
    obj13[1] = arg1;
    obj[0] = jsx(tmp(8894).TwitchNeutralIcon, { size: "md", color: null });
    obj[1] = tmp(8686).GameProfileTrackActionActions.TwitchLink;
    const intl = tmp(1114).intl;
    obj[2] = intl.string(tmp(1114).t["7xtz4G"]);
    obj[3] = category.url;
    return obj;
  } else {
    return null;
  }
};