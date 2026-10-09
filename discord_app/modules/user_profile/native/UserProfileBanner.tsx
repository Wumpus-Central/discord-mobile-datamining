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
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles({
  bannerContainer: { position: "relative" },
  gifTag: { position: "absolute", left: 12, top: 12, right: "auto", bottom: "auto" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileBanner.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileBanner(style) {
      let obj = pendingAccentColor;
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
      const tmp4 = userProfileBannerBackgroundColor();
      const GifAutoPlay = tmp(obj[8]).GifAutoPlay;
      const setting = GifAutoPlay.useSetting();
      const tmp6 = pendingThemeColors(num.useState(false), 2);
      backgroundColor = tmp6[0];
      closure_7 = tmp6[1];
      let tmp8 = setting;
      if (!setting) {
        tmp8 = backgroundColor;
      }
      let guildId;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      if (cResult[0] === displayProfile) {
        if (cResult[1] === pendingAvatarSrc) {
          if (cResult[2] === guildId) {
            if (cResult[3] === user) {
              let tmp10 = cResult[4];
            }
            userProfileBannerBackgroundColor = tmp(obj[9]).useUserProfileBannerBackgroundColor(tmp10);
            if (cResult[5] === tmp8) {
              if (cResult[6] === displayProfile) {
                if (cResult[7] === pendingBanner) {
                  let source = cResult[8];
                  let tmp13 = cResult[9];
                }
                if (tmp13) {
                  tmp13 = !setting;
                }
                if (tmp13) {
                  tmp13 = !tmp3;
                }
                if (cResult[10] !== backgroundColor) {
                  function handleToggleAnimation() {
                    closure_7(!first);
                  }
                  cResult[10] = backgroundColor;
                  cResult[11] = handleToggleAnimation;
                  let tmp18 = handleToggleAnimation;
                } else {
                  tmp18 = cResult[11];
                }
                if (cResult[12] === bannerHeight) {
                  if (cResult[13] === num) {
                    if (cResult[14] === tmp12) {
                      if (cResult[15] === userProfileBannerBackgroundColor) {
                        let banner;
                        if (displayProfile != null) {
                          banner = displayProfile.banner;
                        }
                        if (cResult[16] === banner) {
                          let primaryColor;
                          if (displayProfile != null) {
                            primaryColor = displayProfile.primaryColor;
                          }
                          if (cResult[17] === primaryColor) {
                            if (cResult[18] === pendingAccentColor) {
                              let first1;
                              if (pendingThemeColors != null) {
                                first1 = pendingThemeColors[0];
                              }
                              if (cResult[19] === first1) {
                                if (cResult[20] === style) {
                                  let gifTag = cResult[21];
                                }
                                if (cResult[22] === tmp8) {
                                  if (cResult[23] === tmp13) {
                                    if (cResult[24] === tmp18) {
                                      if (cResult[25] === gifTag) {
                                        if (cResult[26] === tmp4.gifTag) {
                                          if (cResult[28] === tmp4.bannerContainer) {
                                            if (cResult[29] === tmp25) {
                                              let tmp33 = cResult[30];
                                            }
                                            return tmp33;
                                          }
                                          const obj3 = { style: tmp4.bannerContainer, children: cResult[27] };
                                          const tmp36 = closure_7(bannerHeight, obj3);
                                          cResult[28] = tmp4.bannerContainer;
                                          cResult[29] = cResult[27];
                                          cResult[30] = tmp36;
                                          tmp33 = tmp36;
                                        }
                                      }
                                    }
                                  }
                                }
                                if (tmp13) {
                                  const obj4 = {
                                    onPress: tmp18,
                                    accessibilityRole: "button",
                                    accessibilityLabel: null,
                                    children: null,
                                  };
                                  const intl = tmp(obj[13]).intl;
                                  obj4.accessibilityLabel = intl.string(tmp(obj[13]).t["3fzj/l"]);
                                  const items = [gifTag()];
                                  let tmp28 = null;
                                  if (!tmp8) {
                                    obj = { style: tmp4.gifTag };
                                    tmp28 = closure_7(style(obj[14]), obj);
                                    const tmp31 = style(obj[14]);
                                  }
                                  items[1] = tmp28;
                                  obj4.children = items;
                                  let gifTagResult = source(tmp(obj[12]).PressableOpacity, obj4);
                                } else {
                                  gifTagResult = gifTag();
                                }
                                cResult[22] = tmp8;
                                cResult[23] = tmp13;
                                cResult[24] = tmp18;
                                cResult[25] = gifTag;
                                gifTag = tmp4.gifTag;
                                cResult[26] = gifTag;
                                cResult[27] = gifTagResult;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                cResult[12] = bannerHeight;
                cResult[13] = num;
                cResult[14] = tmp12;
                cResult[15] = userProfileBannerBackgroundColor;
                let banner1;
                if (displayProfile != null) {
                  banner1 = displayProfile.banner;
                }
                cResult[16] = banner1;
                let primaryColor1;
                if (displayProfile != null) {
                  primaryColor1 = displayProfile.primaryColor;
                }
                cResult[17] = primaryColor1;
                cResult[18] = pendingAccentColor;
                let first2;
                if (pendingThemeColors != null) {
                  first2 = pendingThemeColors[0];
                }
                function renderBanner() {
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
                }
                cResult[19] = first2;
                cResult[20] = style;
                cResult[21] = renderBanner;
                gifTag = renderBanner;
              }
            }
            if (undefined !== pendingBanner) {
              let previewBanner;
              if (displayProfile != null) {
                previewBanner = displayProfile.getPreviewBanner(pendingBanner, tmp8, 600);
              }
              let bannerURL = previewBanner;
            } else if (displayProfile != null) {
              const obj5 = { canAnimate: tmp8, size: 600 };
              bannerURL = displayProfile.getBannerURL(obj5);
            }
            source = null;
            if (null != bannerURL) {
              source = tmp(obj[10]).makeSource(bannerURL);
              const tmpResult3 = tmp(obj[10]);
            }
            const tmpResult = tmp(obj[9]);
            const isAnimatedImageURLResult = tmp(obj[10]).isAnimatedImageURL(bannerURL);
            cResult[5] = tmp8;
            cResult[6] = displayProfile;
            cResult[7] = pendingBanner;
            cResult[8] = source;
            cResult[9] = isAnimatedImageURLResult;
            tmp13 = isAnimatedImageURLResult;
            const tmpResult4 = tmp(obj[10]);
          }
        }
      }
      const obj6 = { user, guildId, pendingAvatarSrc, displayProfile };
      cResult[0] = displayProfile;
      cResult[1] = pendingAvatarSrc;
      cResult[2] = guildId;
      cResult[3] = user;
      cResult[4] = obj6;
      tmp10 = obj6;
    }
  : function UserProfileBanner(displayProfile) {
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
              onPress: function handleToggleAnimation() {
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
