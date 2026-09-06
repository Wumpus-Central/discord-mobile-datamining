// discord_app/modules/game_profile/native/utils/getGameProfileWebsiteData.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import XNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/XNeutralIcon.tsx";
import FacebookNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/FacebookNeutralIcon.tsx";
import InstagramNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/InstagramNeutralIcon.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import ThirdPartyGameApplicationWebsiteCategory from "../../../../../discord_common/js/shared/shared-constants/ThirdPartyGameApplicationWebsiteCategory.tsx";
import GlobeEarthIcon from "../../../../design/components/Icon/native/redesign/generated/GlobeEarthIcon.tsx";
import YoutubeNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/YoutubeNeutralIcon.tsx";
import BlueskyNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/BlueskyNeutralIcon.tsx";
import RedditNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/RedditNeutralIcon.tsx";
import TwitchNeutralIcon from "../../../../design/components/Icon/native/redesign/generated/TwitchNeutralIcon.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    let obj = { icon: null, action: null, title: null, url: null };
    obj = { size: "md", color };
    obj.icon = jsx(GlobeEarthIcon.GlobeEarthIcon, { size: "md", color });
    obj.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.WebsiteLink;
    const intl8 = util.intl;
    obj.title = intl8.string(util.t.fOUKvg);
    obj.url = category.url;
    return obj;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj1 = { icon: null, action: null, title: null, url: null };
    const obj2 = { size: "md", color };
    obj1.icon = jsx(XNeutralIcon.XNeutralIcon, { size: "md", color });
    obj1.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.XLink;
    const intl7 = util.intl;
    obj1.title = intl7.string(util.t.INic4y);
    obj1.url = category.url;
    return obj1;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj3 = { icon: null, action: null, title: null, url: null };
    const obj4 = { size: "md", color };
    obj3.icon = jsx(YoutubeNeutralIcon.YoutubeNeutralIcon, { size: "md", color });
    obj3.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.YouTubeLink;
    const intl6 = util.intl;
    obj3.title = intl6.string(util.t.lNmxbE);
    obj3.url = category.url;
    return obj3;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj5 = { icon: null, action: null, title: null, url: null };
    const obj6 = { size: "md", color };
    obj5.icon = jsx(FacebookNeutralIcon.FacebookNeutralIcon, { size: "md", color });
    obj5.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.FacebookLink;
    const intl5 = util.intl;
    obj5.title = intl5.string(util.t.FjyREK);
    obj5.url = category.url;
    return obj5;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj7 = { icon: null, action: null, title: null, url: null };
    const obj8 = { size: "md", color };
    obj7.icon = jsx(InstagramNeutralIcon.InstagramNeutralIcon, { size: "md", color });
    obj7.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.InstagramLink;
    const intl4 = util.intl;
    obj7.title = intl4.string(util.t["cgR+IK"]);
    obj7.url = category.url;
    return obj7;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj9 = { icon: null, action: null, title: null, url: null };
    const obj10 = { size: "md", color };
    obj9.icon = jsx(BlueskyNeutralIcon.BlueskyNeutralIcon, { size: "md", color });
    obj9.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.BlueskyLink;
    const intl3 = util.intl;
    obj9.title = intl3.string(util.t["D/PHq5"]);
    obj9.url = category.url;
    return obj9;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj11 = { icon: null, action: null, title: null, url: null };
    const obj12 = { size: "md", color };
    obj11.icon = jsx(RedditNeutralIcon.RedditNeutralIcon, { size: "md", color });
    obj11.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.RedditLink;
    const intl2 = util.intl;
    obj11.title = intl2.string(util.t["Hgb+fc"]);
    obj11.url = category.url;
    return obj11;
  } else if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    obj = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color };
    obj.icon = jsx(TwitchNeutralIcon.TwitchNeutralIcon, { size: "md", color });
    obj.action = GameProfileAnalyticUtils.GameProfileTrackActionActions.TwitchLink;
    const intl = util.intl;
    obj.title = intl.string(util.t["7xtz4G"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
}
