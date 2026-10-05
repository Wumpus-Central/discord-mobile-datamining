// === Module 7918: UserProfileBanner ===

// Module 7918 (UserProfileBanner)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import BannerDefault from "Banner" /* 7926 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const BANNER_HEIGHT = Constants.BANNER_HEIGHT;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ bannerContainer: { position: "relative" }, gifTag: { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((style) => {
  let backgroundColor;
  let bannerHeight;
  let bannerSafeArea;
  let displayProfile;
  let pendingAccentColor;
  let pendingAvatarSrc;
  let pendingBanner;
  let tmp13;
  let user;
  let userProfileBannerBackgroundColor;
  let obj = displayProfile(pendingAccentColor[7]);
  const cResult = obj.c(31);
  ({ user, displayProfile } = style);
  style = style.style;
  ({ bannerSafeArea, bannerHeight, pendingBanner, pendingAvatarSrc, pendingAccentColor } = style);
  const pendingThemeColors = style.pendingThemeColors;
  const disableInteraction = style.disableInteraction;
  let num = 0;
  if (undefined !== bannerSafeArea) {
    num = bannerSafeArea;
  }
  if (undefined === bannerHeight) {
    bannerHeight = backgroundColor;
  }
  const tmp4 = undefined !== disableInteraction && disableInteraction;
  userProfileBannerBackgroundColor();
  const GifAutoPlay = displayProfile(pendingAccentColor[8]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp7 = pendingThemeColors(num.useState(false), 2);
  backgroundColor = tmp7[0];
  let closure_7 = tmp7[1];
  let guildId;
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  if (cResult[0] === displayProfile) {
    if (cResult[1] === pendingAvatarSrc) {
      if (cResult[2] === guildId) {
        let tmp11;
        let source;
        let bannerURL;
        if (cResult[3] === user) {
          tmp11 = cResult[4];
        }
        const tmpResult = displayProfile(pendingAccentColor[9]);
        userProfileBannerBackgroundColor = tmpResult.useUserProfileBannerBackgroundColor(tmp11);
        if (cResult[5] === (setting || backgroundColor)) {
          if (cResult[6] === displayProfile) {
            let tmp14;
            if (cResult[7] === pendingBanner) {
              source = cResult[8];
              tmp14 = cResult[9];
            }
            if (tmp14) {
              tmp14 = !setting;
            }
            if (tmp14) {
              tmp14 = !tmp4;
            }
            if (cResult[10] !== backgroundColor) {
              class M {
                constructor() {
                  closure_7(!first);
                }
              }
              cResult[10] = backgroundColor;
              cResult[11] = M;
            } else {
              class M {
                constructor() {
                  closure_7(!first);
                }
              }
            }
            if (cResult[12] === bannerHeight) {
              class M {
                constructor() {
                  closure_7(!first);
                }
              }
            }
            cResult[12] = bannerHeight;
            cResult[13] = num;
            cResult[14] = tmp13;
            cResult[15] = userProfileBannerBackgroundColor;
            if (displayProfile != null) {
              class M {
                constructor() {
                  closure_7(!first);
                }
              }
            }
            cResult[16] = undefined;
            if (displayProfile != null) {
              class M {
                constructor() {
                  closure_7(!first);
                }
              }
            }
            cResult[17] = undefined;
            cResult[18] = pendingAccentColor;
            if (pendingThemeColors != null) {
              class M {
                constructor() {
                  closure_7(!first);
                }
              }
            }
            const fn = function q() {
              const obj = { style, bannerSource: source, backgroundColor, bannerSafeArea: num, bannerHeight };
              backgroundColor = undefined;
              const tmp2 = BannerDefault;
              if (pendingThemeColors != null) {
                backgroundColor = pendingThemeColors[0];
              }
              if (backgroundColor == null) {
                backgroundColor = pendingAccentColor;
              }
              if (backgroundColor == null) {
                let primaryColor;
                if (displayProfile != null) {
                  primaryColor = displayProfile.primaryColor;
                }
                backgroundColor = primaryColor;
              }
              if (backgroundColor == null) {
                backgroundColor = userProfileBannerBackgroundColor;
              }
              let banner;
              if (displayProfile != null) {
                banner = displayProfile.banner;
              }
              return metroImportDefault(tmp2, obj, banner);
            };
            cResult[19] = undefined;
            cResult[20] = style;
            cResult[21] = fn;
          }
        }
        if (undefined !== pendingBanner) {
          let previewBanner;
          class M {
            constructor() {
              closure_7(!first);
            }
          }
          if (displayProfile != null) {
            class M {
              constructor() {
                closure_7(!first);
              }
            }
            previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp9, 600);
          }
          bannerURL = previewBanner;
        } else {
          class M {
            constructor() {
              closure_7(!first);
            }
          }
          if (displayProfile != null) {
            class M {
              constructor() {
                closure_7(!first);
              }
            }
            tmp16[0] = setting || backgroundColor;
            bannerURL = displayProfile.getBannerURL(tmp16);
          }
        }
        source = null;
        if (null != bannerURL) {
          class M {
            constructor() {
              closure_7(!first);
            }
          }
          source = obj4.makeSource(bannerURL);
        }
        const tmpResult2 = displayProfile(pendingAccentColor[10]);
        const isAnimatedImageURLResult = tmpResult2.isAnimatedImageURL(bannerURL);
        cResult[5] = setting || backgroundColor;
        cResult[6] = displayProfile;
        cResult[7] = pendingBanner;
        cResult[8] = source;
        cResult[9] = isAnimatedImageURLResult;
        tmp14 = isAnimatedImageURLResult;
        tmp13 = source;
      }
    }
  }
  const obj2 = { user, guildId, pendingAvatarSrc, displayProfile };
  cResult[0] = displayProfile;
  cResult[1] = pendingAvatarSrc;
  cResult[2] = guildId;
  cResult[3] = user;
  cResult[4] = obj2;
  tmp11 = obj2;
}) : ((displayProfile) => {
  let backgroundColor;
  let bannerSafeArea;
  let bannerURL;
  let disableInteraction;
  let guildId;
  let intl;
  let items;
  let pendingAvatarSrc;
  let pendingBanner;
  let style;
  displayProfile = displayProfile.displayProfile;
  ({ style: importDefault, bannerSafeArea } = displayProfile);
  const user = displayProfile.user;
  if (bannerSafeArea === undefined) {
    bannerSafeArea = 0;
  }
  let bannerHeight = displayProfile.bannerHeight;
  if (bannerHeight === undefined) {
    bannerHeight = backgroundColor;
  }
  ({ pendingBanner, pendingAccentColor: react, pendingThemeColors: View, disableInteraction, pendingAvatarSrc } = displayProfile);
  if (disableInteraction === undefined) {
    disableInteraction = false;
  }
  let closure_8;
  let source;
  const tmp = source();
  let tmp2 = displayProfile;
  const GifAutoPlay = displayProfile(bannerSafeArea[8]).GifAutoPlay;
  const setting = GifAutoPlay.useSetting();
  const tmp5 = bannerHeight(react.useState(false), 2);
  backgroundColor = tmp5[0];
  let closure_7 = tmp5[1];
  let obj = { user, guildId, pendingAvatarSrc, displayProfile };
  guildId = undefined;
  const useUserProfileBannerBackgroundColor = tmp2(bannerSafeArea[9]).useUserProfileBannerBackgroundColor;
  tmp2(bannerSafeArea[9]);
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  closure_8 = useUserProfileBannerBackgroundColor(obj);
  if (undefined !== pendingBanner) {
    let previewBanner;
    if (displayProfile != null) {
      previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp7, 600);
    }
    bannerURL = previewBanner;
  } else if (displayProfile != null) {
    const obj2 = { canAnimate: setting || backgroundColor, size: 600 };
    bannerURL = displayProfile.getBannerURL(obj2);
  }
  source = null;
  if (null != bannerURL) {
    const tmp2Result3 = tmp2(bannerSafeArea[10]);
    source = tmp2Result3.makeSource(bannerURL);
  }
  function renderBanner() {
    const obj = { style: importDefault, bannerSource: source, backgroundColor, bannerSafeArea, bannerHeight };
    backgroundColor = undefined;
    const tmp2 = BannerDefault;
    if (View != null) {
      backgroundColor = View[0];
    }
    if (backgroundColor == null) {
      backgroundColor = react;
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
    let banner;
    if (displayProfile != null) {
      banner = displayProfile.banner;
    }
    return metroImportDefault(tmp2, obj, banner);
  }
  const obj3 = { style: tmp.bannerContainer, children: null };
  const tmp2Result4 = tmp2(bannerSafeArea[10]);
  if (tmp2Result4.isAnimatedImageURL(bannerURL)) {
    if (!setting) {
      let renderBannerResult;
      if (!disableInteraction) {
        const obj4 = {
          onPress() {
                  closure_7(!first);
                },
          accessibilityRole: "button",
          accessibilityLabel: intl.string(tmp2(bannerSafeArea[13]).t["3fzj/l"]),
          children: items
        };
        const PressableOpacity = tmp2(tmp3[12]).PressableOpacity;
        intl = tmp2(tmp3[13]).intl;
        items = [renderBanner(), ];
        let tmp13Result = null;
        const tmp15 = closure_8;
        if (!(setting || backgroundColor)) {
          const obj5 = { style: tmp.gifTag };
          tmp13Result = tmp13(require("GifTag"), obj5);
        }
        items[1] = tmp13Result;
        renderBannerResult = tmp15(PressableOpacity, obj4);
      }
      obj3.children = renderBannerResult;
      return closure_7(tmp14, obj3);
    }
  }
  renderBannerResult = renderBanner();
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default tmp3;