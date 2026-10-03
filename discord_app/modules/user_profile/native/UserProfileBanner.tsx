// discord_app/modules/user_profile/native/UserProfileBanner.tsx
import BannerDefault from "../../profile_customization/native/Banner.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const BANNER_HEIGHT = fn(1085).BANNER_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles({
  bannerContainer: { position: "relative" },
  gifTag: { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      const cResult = displayProfile(pendingAccentColor[7]).c(31);
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
      userProfileBannerBackgroundColor();
      const GifAutoPlay = displayProfile(pendingAccentColor[8]).GifAutoPlay;
      const setting = GifAutoPlay.useSetting();
      const tmp7 = pendingThemeColors(num.useState(false), 2);
      backgroundColor = tmp7[0];
      closure_7 = tmp7[1];
      let tmp9 = setting;
      if (!setting) {
        tmp9 = backgroundColor;
      }
      let guildId;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      if (cResult[0] === displayProfile) {
        if (cResult[1] === pendingAvatarSrc) {
          if (cResult[2] === guildId) {
            if (cResult[3] === user) {
              let tmp11 = cResult[4];
            }
            userProfileBannerBackgroundColor = displayProfile(
              pendingAccentColor[9],
            ).useUserProfileBannerBackgroundColor(tmp11);
            if (cResult[5] === tmp9) {
              if (cResult[6] === displayProfile) {
                if (cResult[7] === pendingBanner) {
                  let source = cResult[8];
                  let tmp14 = cResult[9];
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
                      tmp = closure_7(!closure_6);
                      return;
                    }
                  }
                  cResult[10] = backgroundColor;
                  cResult[11] = M;
                } else {
                  class M {
                    constructor() {
                      tmp = closure_7(!closure_6);
                      return;
                    }
                  }
                }
                if (cResult[12] === bannerHeight) {
                  class M {
                    constructor() {
                      tmp = closure_7(!closure_6);
                      return;
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
                      tmp = closure_7(!closure_6);
                      return;
                    }
                  }
                }
                cResult[16] = undefined;
                if (displayProfile != null) {
                  class M {
                    constructor() {
                      tmp = closure_7(!closure_6);
                      return;
                    }
                  }
                }
                cResult[17] = undefined;
                cResult[18] = pendingAccentColor;
                if (pendingThemeColors != null) {
                  class M {
                    constructor() {
                      tmp = closure_7(!closure_6);
                      return;
                    }
                  }
                }
                const fn = function q() {
                  const obj = {
                    style,
                    bannerSource: source,
                    backgroundColor: null,
                    bannerSafeArea: null,
                    bannerHeight: null,
                  };
                  backgroundColor = undefined;
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
                  obj.backgroundColor = backgroundColor;
                  obj.bannerSafeArea = num;
                  obj.bannerHeight = bannerHeight;
                  let banner;
                  if (displayProfile != null) {
                    banner = displayProfile.banner;
                  }
                  return React5(BannerDefault, obj, banner);
                };
                cResult[19] = undefined;
                cResult[20] = style;
                cResult[21] = fn;
              }
            }
            if (undefined !== pendingBanner) {
              class M {
                constructor() {
                  tmp = closure_7(!closure_6);
                  return;
                }
              }
              if (displayProfile != null) {
                class M {
                  constructor() {
                    tmp = closure_7(!closure_6);
                    return;
                  }
                }
                const previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp9, 600);
              }
              let bannerURL = previewBanner;
            } else {
              class M {
                constructor() {
                  tmp = closure_7(!closure_6);
                  return;
                }
              }
              if (displayProfile != null) {
                class M {
                  constructor() {
                    tmp = closure_7(!closure_6);
                    return;
                  }
                }
                tmp16[0] = tmp9;
                bannerURL = displayProfile.getBannerURL(tmp16);
              }
            }
            source = null;
            if (null != bannerURL) {
              class M {
                constructor() {
                  tmp = closure_7(!closure_6);
                  return;
                }
              }
              source = obj4.makeSource(bannerURL);
            }
            const tmpResult = displayProfile(pendingAccentColor[9]);
            const isAnimatedImageURLResult = displayProfile(pendingAccentColor[10]).isAnimatedImageURL(bannerURL);
            cResult[5] = tmp9;
            cResult[6] = displayProfile;
            cResult[7] = pendingBanner;
            cResult[8] = source;
            cResult[9] = isAnimatedImageURLResult;
            tmp14 = isAnimatedImageURLResult;
            tmp13 = source;
            const tmpResult2 = displayProfile(pendingAccentColor[10]);
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
      let obj = displayProfile(pendingAccentColor[7]);
      tmp4 = undefined !== disableInteraction && disableInteraction;
    }
  : (displayProfile) => {
      displayProfile = displayProfile.displayProfile;
      ({ style: importDefault, bannerSafeArea } = displayProfile);
      if (bannerSafeArea === undefined) {
        bannerSafeArea = 0;
      }
      let bannerHeight = displayProfile.bannerHeight;
      if (bannerHeight === undefined) {
        bannerHeight = backgroundColor;
      }
      ({
        pendingBanner,
        pendingAccentColor: noop,
        pendingThemeColors: View,
        disableInteraction,
        pendingAvatarSrc,
      } = displayProfile);
      if (disableInteraction === undefined) {
        disableInteraction = false;
      }
      closure_8 = undefined;
      let source;
      const tmp = source();
      const GifAutoPlay = displayProfile(bannerSafeArea[8]).GifAutoPlay;
      const setting = GifAutoPlay.useSetting();
      const tmp5 = bannerHeight(noop.useState(false), 2);
      backgroundColor = tmp5[0];
      closure_7 = tmp5[1];
      let tmp7 = setting;
      if (!setting) {
        tmp7 = backgroundColor;
      }
      let obj = { user: displayProfile.user, guildId: null, pendingAvatarSrc: null, displayProfile: null };
      let guildId;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      obj.guildId = guildId;
      obj.pendingAvatarSrc = pendingAvatarSrc;
      obj.displayProfile = displayProfile;
      closure_8 = displayProfile(bannerSafeArea[9]).useUserProfileBannerBackgroundColor(obj);
      if (undefined !== pendingBanner) {
        let previewBanner;
        if (displayProfile != null) {
          previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp7, 600);
        }
        let bannerURL = previewBanner;
      } else if (displayProfile != null) {
        const obj2 = { canAnimate: tmp7, size: 600 };
        bannerURL = displayProfile.getBannerURL(obj2);
      }
      source = null;
      if (null != bannerURL) {
        source = tmp2(tmp3[10]).makeSource(bannerURL);
        const tmp2Result3 = tmp2(tmp3[10]);
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
      const tmp2Result = displayProfile(bannerSafeArea[9]);
      const obj3 = { style: tmp.bannerContainer, children: null };
      if (tmp2Result4.isAnimatedImageURL(bannerURL)) {
        if (!setting) {
          if (!disableInteraction) {
            const obj4 = {
              onPress() {
                closure_7(!first);
              },
              accessibilityRole: "button",
              accessibilityLabel: null,
              children: null,
            };
            const intl = tmp2(tmp3[13]).intl;
            obj4.accessibilityLabel = intl.string(tmp2(tmp3[13]).t["3fzj/l"]);
            const items = [renderBanner()];
            let tmp12Result = null;
            if (!tmp7) {
              const obj5 = { style: tmp.gifTag };
              tmp12Result = tmp12(require("GifTag"), obj5);
            }
            items[1] = tmp12Result;
            obj4.children = items;
            let renderBannerResult = closure_8(tmp2(tmp3[12]).PressableOpacity, obj4);
          }
          obj3.children = renderBannerResult;
          return tmp12(tmp13, obj3);
        }
      }
      renderBannerResult = renderBanner();
      tmp2Result4 = displayProfile(bannerSafeArea[10]);
    };
