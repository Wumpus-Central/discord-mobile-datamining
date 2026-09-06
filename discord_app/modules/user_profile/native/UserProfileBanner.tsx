// === Module 8246: UserProfileBanner ===

// Module 8246 (UserProfileBanner)
import BannerDefault from "Banner" /* 8254 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const BANNER_HEIGHT = fn(1074).BANNER_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ bannerContainer: { position: "relative" }, gifTag: { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default function UserProfileBanner(displayProfile) {
  displayProfile = displayProfile.displayProfile;
  ({ style: importDefault, bannerSafeArea } = displayProfile);
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = backgroundColor;
  }
  ({ pendingBanner, pendingAccentColor: noop, pendingThemeColors: View, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  closure_8 = undefined;
  let source;
  const tmp = source();
  const GifAutoPlay = displayProfile(bannerSafeArea[6]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = bannerHeight(noop.useState(false), 2);
  backgroundColor = tmp5[0];
  closure_7 = tmp5[1];
  let tmp7 = setting;
  if (!setting) {
    tmp7 = backgroundColor;
  }
  let tmp2Result = tmp2(tmp3[7]);
  let obj = { user: displayProfile.user, guildId: null, pendingAvatarSrc: null, displayProfile: null };
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  obj.guildId = guildId;
  obj.pendingAvatarSrc = pendingAvatarSrc;
  obj.displayProfile = displayProfile;
  closure_8 = tmp2Result.useUserProfileBannerBackgroundColor(obj);
  if (undefined !== pendingBanner) {
    let previewBanner;
    if (displayProfile != null) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp7, 600);
    }
    let bannerURL = previewBanner;
  } else if (displayProfile != null) {
    obj = { canAnimate: tmp7, size: 600 };
    bannerURL = displayProfile.getBannerURL(obj);
  }
  source = null;
  if (null != bannerURL) {
    tmp2Result = tmp2(tmp3[8]);
    source = tmp2Result.makeSource(bannerURL);
  }
  function renderBanner() {
    const obj = { style, bannerSource: source, backgroundColor: null, bannerSafeArea: null, bannerHeight: null };
    backgroundColor = undefined;
    if (View != null) {
      backgroundColor = View[0];
    }
    if (backgroundColor == null) {
      backgroundColor = noop;
    }
    if (backgroundColor == null) {
      let primaryColor;
      if (displayProfile != null) {
        primaryColor = displayProfile.primaryColor;
      }
      backgroundColor = primaryColor;
    }
    if (backgroundColor == null) {
      backgroundColor = closure_8;
    }
    obj.backgroundColor = backgroundColor;
    obj.bannerSafeArea = bannerSafeArea;
    obj.bannerHeight = bannerHeight;
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    return React5(BannerDefault, obj, banner);
  }
  const obj1 = { style: tmp.bannerContainer, children: null };
  if (tmp2Result1.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      if (!disableInteraction) {
        const obj2 = {
          onPress() {
                  closure_7(!first);
                },
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null
        };
        const intl = tmp2(tmp3[11]).intl;
        obj2.accessibilityLabel = intl.string(tmp2(tmp3[11]).t["3fzj/l"]);
        const items = [renderBanner(), ];
        let tmp12Result = null;
        if (!tmp7) {
          const obj3 = { style: tmp.gifTag };
          tmp12Result = tmp12(require("GifTag"), obj3);
        }
        items[1] = tmp12Result;
        obj2.children = items;
        let renderBannerResult = closure_8(tmp2(tmp3[10]).PressableOpacity, obj2);
      }
      obj1.children = renderBannerResult;
      return tmp12(tmp13, obj1);
    }
  }
  renderBannerResult = renderBanner();
};