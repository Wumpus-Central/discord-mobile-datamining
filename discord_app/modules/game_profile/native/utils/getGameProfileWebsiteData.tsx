// discord_app/modules/game_profile/native/utils/getGameProfileWebsiteData.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThirdPartyGameApplicationWebsiteCategory from "../../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    let obj = { icon: null, action: null, title: null, url: null };
    obj = { size: "md", color };
    obj.icon = jsx(tmp(8886).GlobeEarthIcon, { size: "md", color });
    obj.action = tmp(8686).GameProfileTrackActionActions.WebsiteLink;
    const intl8 = tmp(1114).intl;
    obj.title = intl8.string(tmp(1114).t.fOUKvg);
    obj.url = category.url;
    return obj;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj1 = { icon: null, action: null, title: null, url: null };
    const obj2 = { size: "md", color };
    obj1.icon = jsx(tmp(8099).XNeutralIcon, { size: "md", color });
    obj1.action = tmp(8686).GameProfileTrackActionActions.XLink;
    const intl7 = tmp(1114).intl;
    obj1.title = intl7.string(tmp(1114).t.INic4y);
    obj1.url = category.url;
    return obj1;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj3 = { icon: null, action: null, title: null, url: null };
    const obj4 = { size: "md", color };
    obj3.icon = jsx(tmp(8888).YoutubeNeutralIcon, { size: "md", color });
    obj3.action = tmp(8686).GameProfileTrackActionActions.YouTubeLink;
    const intl6 = tmp(1114).intl;
    obj3.title = intl6.string(tmp(1114).t.lNmxbE);
    obj3.url = category.url;
    return obj3;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj5 = { icon: null, action: null, title: null, url: null };
    const obj6 = { size: "md", color };
    obj5.icon = jsx(tmp(8101).FacebookNeutralIcon, { size: "md", color });
    obj5.action = tmp(8686).GameProfileTrackActionActions.FacebookLink;
    const intl5 = tmp(1114).intl;
    obj5.title = intl5.string(tmp(1114).t.FjyREK);
    obj5.url = category.url;
    return obj5;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj7 = { icon: null, action: null, title: null, url: null };
    const obj8 = { size: "md", color };
    obj7.icon = jsx(tmp(8103).InstagramNeutralIcon, { size: "md", color });
    obj7.action = tmp(8686).GameProfileTrackActionActions.InstagramLink;
    const intl4 = tmp(1114).intl;
    obj7.title = intl4.string(tmp(1114).t["cgR+IK"]);
    obj7.url = category.url;
    return obj7;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj9 = { icon: null, action: null, title: null, url: null };
    const obj10 = { size: "md", color };
    obj9.icon = jsx(tmp(8890).BlueskyNeutralIcon, { size: "md", color });
    obj9.action = tmp(8686).GameProfileTrackActionActions.BlueskyLink;
    const intl3 = tmp(1114).intl;
    obj9.title = intl3.string(tmp(1114).t["D/PHq5"]);
    obj9.url = category.url;
    return obj9;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj11 = { icon: null, action: null, title: null, url: null };
    const obj12 = { size: "md", color };
    obj11.icon = jsx(tmp(8892).RedditNeutralIcon, { size: "md", color });
    obj11.action = tmp(8686).GameProfileTrackActionActions.RedditLink;
    const intl2 = tmp(1114).intl;
    obj11.title = intl2.string(tmp(1114).t["Hgb+fc"]);
    obj11.url = category.url;
    return obj11;
  } else if (tmp(8689).ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    obj = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color };
    obj.icon = jsx(tmp(8894).TwitchNeutralIcon, { size: "md", color });
    obj.action = tmp(8686).GameProfileTrackActionActions.TwitchLink;
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t["7xtz4G"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
}
