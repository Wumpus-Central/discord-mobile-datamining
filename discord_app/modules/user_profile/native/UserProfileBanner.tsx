// === Module 8436: UserProfileBanner ===

// Module 8436 (UserProfileBanner)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { BANNER_HEIGHT } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "n";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { bannerContainer: { position: "relative" }, gifTag: null, gifTagText: null };
createCacheKey = { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto", backgroundColor: null };
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.WHITE);
createCacheKey[5] = require("n")(require("Themes").unsafe_rawColors.WHITE).alpha(0.9).css();
createCacheKey[1] = createCacheKey;
const alphaResult = require("n")(require("Themes").unsafe_rawColors.WHITE).alpha(0.9);
createCacheKey[2] = { color: require("Themes").unsafe_rawColors.PRIMARY_800, fontSize: 14 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").unsafe_rawColors.PRIMARY_800, fontSize: 14 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default function UserProfileBanner(displayProfile) {
  let View;
  let bannerSafeArea;
  let noop;
  let disableInteraction;
  let importDefault;
  let pendingAvatarSrc;
  let pendingBanner;
  displayProfile = displayProfile.displayProfile;
  ({ style: importDefault, bannerSafeArea } = displayProfile);
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = first;
  }
  ({ pendingBanner, pendingAccentColor: noop, pendingThemeColors: View, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  first = undefined;
  let closure_7;
  let closure_8;
  let source;
  const tmp = source();
  const GifAutoPlay = displayProfile(bannerSafeArea[8]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = bannerHeight(React.useState(false), 2);
  first = tmp5[0];
  closure_7 = tmp5[1];
  let tmp7 = setting;
  if (!setting) {
    tmp7 = first;
  }
  let tmp2Result = tmp2(tmp3[9]);
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
    tmp2Result = tmp2(tmp3[10]);
    source = tmp2Result.makeSource(bannerURL);
  }
  function renderBanner() {
    const obj = { style: closure_1, bannerSource: source, backgroundColor: null, bannerSafeArea: null, bannerHeight: null };
    let first;
    if (table != null) {
      first = table[0];
    }
    if (first == null) {
      first = noop;
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
    return closure_7(outer1_1(bannerSafeArea[11]), obj, banner);
  }
  const obj1 = { style: tmp.bannerContainer, children: null };
  if (tmp2Result1.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      if (!disableInteraction) {
        const obj2 = { onPress: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
        obj2[0] = function onPress() {
          callback(!first);
        };
        const intl = tmp2(tmp3[13]).intl;
        obj2[2] = intl.string(tmp2(tmp3[13]).t["3fzj/l"]);
        const items = [renderBanner(), ];
        let tmp12Result = !tmp7;
        if (!tmp7) {
          const obj3 = { label: null, style: null, textStyle: null };
          const intl2 = tmp2(tmp3[13]).intl;
          obj3[0] = intl2.string(tmp2(tmp3[13]).t.I5gL2H);
          ({ gifTag: obj8[1], gifTagText: obj8[2] } = tmp);
          tmp12Result = tmp12(tmp2(tmp3[14]).Caption, obj3);
        }
        items[1] = tmp12Result;
        obj2[3] = items;
        let renderBannerResult = closure_8(tmp2(tmp3[12]).PressableOpacity, obj2);
        const tmp14 = closure_8;
      }
      obj1[1] = renderBannerResult;
      return tmp12(tmp13, obj1);
    }
  }
  renderBannerResult = renderBanner();
};