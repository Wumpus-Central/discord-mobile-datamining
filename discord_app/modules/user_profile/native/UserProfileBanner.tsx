// discord_app/modules/user_profile/native/UserProfileBanner.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { BANNER_HEIGHT } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ bannerContainer: { position: "relative" }, gifTag: { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" } });
const result = require("obj132").fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default function UserProfileBanner(displayProfile) {
  displayProfile = displayProfile.displayProfile;
  ({ style: importDefault, bannerSafeArea } = displayProfile);
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = first;
  }
  ({ pendingBanner, pendingAccentColor: closure_4, pendingThemeColors: View, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  closure_8 = undefined;
  let source;
  const tmp = source();
  const GifAutoPlay = displayProfile(bannerSafeArea[6]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = bannerHeight(React.useState(false), 2);
  first = tmp5[0];
  closure_7 = tmp5[1];
  let tmp7 = setting;
  if (!setting) {
    tmp7 = first;
  }
  let tmp2Result = tmp2(tmp3[7]);
  let obj = { user: displayProfile.user, guildId: null, pendingAvatarSrc: null, displayProfile: null };
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  obj[1] = guildId;
  obj[2] = pendingAvatarSrc;
  obj[3] = displayProfile;
  closure_8 = tmp2Result.useUserProfileBannerBackgroundColor(obj);
  if (undefined !== pendingBanner) {
    let previewBanner;
    if (displayProfile != null) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp7, 600);
    }
    let bannerURL = previewBanner;
  } else if (displayProfile != null) {
    obj = { canAnimate: null, size: 600 };
    obj[0] = tmp7;
    bannerURL = displayProfile.getBannerURL(obj);
  }
  source = null;
  if (null != bannerURL) {
    tmp2Result = tmp2(tmp3[8]);
    source = tmp2Result.makeSource(bannerURL);
  }
  function renderBanner() {
    const obj = { style: closure_1, bannerSource: source, backgroundColor: null, bannerSafeArea: null, bannerHeight: null };
    first = undefined;
    if (table != null) {
      first = table[0];
    }
    if (first == null) {
      first = closure_4;
    }
    if (first == null) {
      let primaryColor;
      if (displayProfile != null) {
        primaryColor = displayProfile.primaryColor;
      }
      first = primaryColor;
    }
    if (first == null) {
      first = closure_8;
    }
    obj[2] = first;
    obj[3] = bannerSafeArea;
    obj[4] = bannerHeight;
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    return callback(importDefault(bannerSafeArea[9]), obj, banner);
  }
  obj1 = { style: tmp.bannerContainer, children: null };
  if (tmp2Result1.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      if (!disableInteraction) {
        const obj2 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
        obj2[0] = function onPress() {
          callback(!first);
        };
        const intl = tmp2(tmp3[11]).intl;
        obj2[2] = intl.string(tmp2(tmp3[11]).t["3fzj/l"]);
        const items = [renderBanner(), ];
        let tmp12Result = null;
        if (!tmp7) {
          const obj3 = { style: null };
          obj3[0] = tmp.gifTag;
          tmp12Result = tmp12(importDefault(tmp3[12]), obj3);
        }
        items[1] = tmp12Result;
        obj2[3] = items;
        let renderBannerResult = closure_8(tmp2(tmp3[10]).PressableOpacity, obj2);
      }
      obj1[1] = renderBannerResult;
      return tmp12(tmp13, obj1);
    }
  }
  renderBannerResult = renderBanner();
  tmp2Result1 = displayProfile(bannerSafeArea[8]);
};