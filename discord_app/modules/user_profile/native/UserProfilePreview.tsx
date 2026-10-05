// === Module 10825: UserProfilePreview ===

// Module 10825 (UserProfilePreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 7896 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7831 */;
import Constants from "Constants" /* 6707 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
let react = react_mod;
const View = react_native.View;
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: metroImportDefault, UserProfileThemeTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  let BACKGROUND_SURFACE_HIGH;
  let obj2;
  let tmp4;
  let num = arg2;
  if (arg2 == null) {
    num = 263;
  }
  const obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: obj2, profileInnerContent: { flexGrow: 1 }, aboutMeCard: { marginTop: tmp4(587).space.PX_12 }, profileEffect: { zIndex: 1 } };
  obj2 = { overflow: "hidden", minHeight: 350, borderWidth: 1, borderColor: BACKGROUND_SURFACE_HIGH, borderRadius: tmp4(587).radii.lg };
  const colors = nativeDefault.colors;
  if (arg1) {
    BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  ({ marginTop: tmp4(587).space.PX_12 });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let accessibilityLabel;
  let additionalBadges;
  let avatarBackground;
  let avatarDecorationOverride;
  let compact;
  let containerBackground;
  let displayName;
  let displayNameStylesOverride;
  let first;
  let gradientFallbackBackground;
  let guildId;
  let hideFrame;
  let maxWidth;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let profileEffectOverride;
  let profileEffectRestartKey;
  let profileFrameOverride;
  let secondaryColor;
  let style;
  let theme;
  let tmp60;
  let tmp8;
  let user;
  const obj = guildId(576);
  const cResult = obj.c(88);
  ({ user, displayName, guildId } = arg0);
  ({ avatarDecorationOverride, profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, style, compact, hideFrame, additionalBadges } = arg0);
  let tmp4 = undefined !== compact;
  ({ accessibilityLabel, maxWidth } = arg0);
  if (tmp4) {
    tmp4 = compact;
  }
  if (undefined === additionalBadges) {
    additionalBadges = [];
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserProfileSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function v() {
      return UserProfileSettingsStore.getPendingChanges(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
  ({ pendingAvatar, pendingBanner, pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp11 = set(7857)(user.id, guildId);
  if (cResult[3] === tmp11) {
    if (cResult[4] === pendingThemeColors) {
      let tmp12;
      if (cResult[5] === user) {
        tmp12 = cResult[6];
      }
      ({ theme, primaryColor, secondaryColor } = set(7899)(tmp12));
      set(7899)(tmp12);
      const tmp15 = null != primaryColor;
      const tmp17 = closure_12(tmp4, tmp15, maxWidth);
      set(7913)();
      const tmpResult5 = guildId(10826);
      const customStatusActivity = tmpResult5.useCustomStatusActivity();
      if (cResult[7] === primaryColor) {
        if (cResult[8] === secondaryColor) {
          let tmp21;
          if (cResult[9] === theme) {
            tmp21 = cResult[10];
          }
          const tmpResult6 = guildId(7910);
          const userProfileColors = tmpResult6.useUserProfileColors(tmp21);
          ({ avatarBackground, containerBackground, gradientFallbackBackground } = userProfileColors);
          if (undefined !== avatarDecorationOverride) {
            pendingAvatarDecoration = avatarDecorationOverride;
          }
          if (undefined !== profileEffectOverride) {
            pendingProfileEffect = profileEffectOverride;
          }
          if (undefined !== profileFrameOverride) {
            pendingProfileFrame = profileFrameOverride;
          }
          if (undefined !== displayNameStylesOverride) {
            pendingDisplayNameStyles = displayNameStylesOverride;
          }
          let profileEffect;
          if (tmp11 != null) {
            profileEffect = tmp11.profileEffect;
          }
          let profileEffect1;
          if (tmp11 != null) {
            const _guildMemberProfile = tmp11._guildMemberProfile;
            if (_guildMemberProfile != null) {
              profileEffect1 = _guildMemberProfile.profileEffect;
            }
          }
          if (cResult[11] === pendingProfileEffect) {
            if (cResult[12] === guildId) {
              if (cResult[13] === profileEffect) {
                let profileFrame;
                const tmp27 = cResult[16];
                if (tmp11 != null) {
                  const _guildMemberProfile2 = tmp11._guildMemberProfile;
                  if (_guildMemberProfile2 != null) {
                    profileFrame = _guildMemberProfile2.profileFrame;
                  }
                }
                if (tmp27 === profileFrame) {
                  let profileFrame1;
                  const tmp29 = cResult[17];
                  if (tmp11 != null) {
                    profileFrame1 = tmp11.profileFrame;
                  }
                  if (tmp29 === profileFrame1) {
                    if (cResult[18] === pendingProfileFrame) {
                      if (cResult[19] === guildId) {
                        let tmp31;
                        if (cResult[20] === (undefined !== hideFrame && hideFrame)) {
                          tmp31 = cResult[21];
                        }
                        let skuId;
                        const tmp10Result = set(7872);
                        if (tmp31 != null) {
                          skuId = tmp31.skuId;
                        }
                        const tmp10ResultResult = tmp10Result(skuId);
                        if (cResult[22] === pendingAvatar) {
                          const arr2 = set(7914)(tmp11, pendingLegacyUsernameDisabled);
                          if (cResult[25] !== arr2) {
                            const _Symbol = Symbol;
                            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                              class Se {
                                constructor(id) {
                                  return id.id;
                                }
                              }
                              cResult[27] = Se;
                            } else {
                              class Se {
                                constructor(id) {
                                  return id.id;
                                }
                              }
                            }
                            const _Set = Set;
                            const self = this;
                            const self2 = this;
                            set = new Set(arr2.map(Se));
                            cResult[25] = arr2;
                            cResult[26] = set;
                          } else {
                            class Se {
                              constructor(id) {
                                return id.id;
                              }
                            }
                          }
                          set = tmp45;
                          if (cResult[28] !== tmp45) {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                            cResult[28] = tmp45;
                            cResult[29] = Oe;
                          } else {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                          }
                          const items1 = [];
                          const arraySpreadResult = HermesBuiltin.arraySpread(items1, arr2, 0);
                          HermesBuiltin.arraySpread(items1, additionalBadges.filter(Oe), arraySpreadResult);
                          const _Symbol2 = Symbol;
                          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                            cResult[30] = tmp56;
                          } else {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                          }
                          [tmp60, dependencyMap] = react.useState(tmp56);
                          const _Symbol3 = Symbol;
                          _slicedToArray(react.useState(tmp56), 2);
                          if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                            cResult[31] = tmp62;
                          } else {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                          }
                          if (null != tmp10ResultResult) {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                            cResult[32] = tmp60.width;
                            cResult[33] = tmp10ResultResult;
                            cResult[34] = set(7896)(tmp10ResultResult, tmp60.width);
                            const tmp65 = set(7896)(tmp10ResultResult, tmp60.width);
                          }
                          if (cResult[39] === undefined) {
                            class Oe {
                              constructor(id) {
                                return !set.has(id.id);
                              }
                            }
                          }
                          const items2 = [tmp17.profileContainer, undefined, style];
                          cResult[39] = undefined;
                          cResult[40] = style;
                          cResult[41] = tmp17.profileContainer;
                          cResult[42] = items2;
                        }
                        const obj2 = { userId: user.id, image: pendingAvatar };
                        const tmpResult7 = guildId(7840);
                        const pendingAvatarSrc = tmpResult7.getPendingAvatarSrc(obj2);
                        cResult[22] = pendingAvatar;
                        cResult[23] = user.id;
                        cResult[24] = pendingAvatarSrc;
                      }
                    }
                  }
                }
                let profilePreviewValue;
                if (!(undefined !== hideFrame && hideFrame)) {
                  class Oe {
                    constructor(id) {
                      return !set.has(id.id);
                    }
                  }
                  const getProfilePreviewValue = tmp33.getProfilePreviewValue;
                  const obj3 = { pendingValue: pendingProfileFrame, userValue: undefined, guildValue: undefined, guildId };
                  if (tmp11 != null) {
                    class Oe {
                      constructor(id) {
                        return !set.has(id.id);
                      }
                    }
                  }
                  if (tmp11 != null) {
                    class Oe {
                      constructor(id) {
                        return !set.has(id.id);
                      }
                    }
                    if (tmp36 != null) {
                      class Oe {
                        constructor(id) {
                          return !set.has(id.id);
                        }
                      }
                    }
                  }
                  profilePreviewValue = getProfilePreviewValue(obj3);
                }
                if (tmp11 != null) {
                  class Oe {
                    constructor(id) {
                      return !set.has(id.id);
                    }
                  }
                  if (tmp38 != null) {
                    class Oe {
                      constructor(id) {
                        return !set.has(id.id);
                      }
                    }
                  }
                }
                cResult[16] = undefined;
                if (tmp11 != null) {
                  class Oe {
                    constructor(id) {
                      return !set.has(id.id);
                    }
                  }
                }
                cResult[17] = undefined;
                cResult[18] = pendingProfileFrame;
                cResult[19] = guildId;
                cResult[20] = undefined !== hideFrame && hideFrame;
                cResult[21] = profilePreviewValue;
                tmp31 = profilePreviewValue;
              }
            }
          }
          const obj4 = { pendingValue: pendingProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
          const tmpResult8 = guildId(7837);
          const profilePreviewValue1 = tmpResult8.getProfilePreviewValue(obj4);
          cResult[11] = pendingProfileEffect;
          cResult[12] = guildId;
          cResult[13] = profileEffect;
          cResult[14] = profileEffect1;
          cResult[15] = profilePreviewValue1;
        }
      }
      const obj5 = { theme, primaryColor, secondaryColor };
      cResult[7] = primaryColor;
      cResult[8] = secondaryColor;
      cResult[9] = theme;
      cResult[10] = obj5;
      tmp21 = obj5;
    }
  }
  const obj6 = { user, displayProfile: tmp11, pendingThemeColors };
  cResult[3] = tmp11;
  cResult[4] = pendingThemeColors;
  cResult[5] = user;
  cResult[6] = obj6;
  tmp12 = obj6;
}) : ((hideFrame) => {
  let accessibilityLabel;
  let additionalBadges;
  let avatarBackground;
  let avatarDecorationOverride;
  let closure_1;
  let closure_4;
  let compact;
  let containerBackground;
  let displayName;
  let displayNameStylesOverride;
  let gradientFallbackBackground;
  let guildId;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let maxWidth;
  let obj7;
  let obj8;
  let pendingAccentColor;
  let pendingAvatar;
  let pendingAvatarDecoration;
  let pendingBanner;
  let pendingDisplayNameStyles;
  let pendingGlobalName;
  let pendingLegacyUsernameDisabled;
  let pendingProfileEffect;
  let pendingProfileFrame;
  let pendingPronouns;
  let pendingThemeColors;
  let primaryColor;
  let profileEffect;
  let profileEffect1;
  let profileEffectOverride;
  let profileEffectRestartKey;
  let profileFrame;
  let profileFrame1;
  let profileFrameOverride;
  let secondaryColor;
  let style;
  let theme;
  let tmp38;
  let tmp39;
  let user;
  ({ user, displayName, guildId } = hideFrame);
  ({ avatarDecorationOverride, profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, compact } = hideFrame);
  ({ accessibilityLabel, style } = hideFrame);
  if (compact === undefined) {
    compact = false;
  }
  let flag = hideFrame.hideFrame;
  if (flag === undefined) {
    flag = false;
  }
  ({ additionalBadges, maxWidth } = hideFrame);
  if (additionalBadges === undefined) {
    additionalBadges = [];
  }
  importDefault = undefined;
  set = undefined;
  let first;
  react = undefined;
  let obj = guildId(set[10]);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => UserProfileSettingsStore.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp5 = require("useDisplayProfile")(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors }));
  require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors });
  const tmp8 = closure_12(compact, null != primaryColor, maxWidth);
  const tmp9 = require("UserProfileSharedStyles")();
  const obj2 = guildId(set[14]);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let tmp30Result5 = null != customStatusActivity && !compact;
  const tmpResult = guildId(set[15]);
  const userProfileColors = tmpResult.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBackground, gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (undefined !== avatarDecorationOverride) {
    pendingAvatarDecoration = avatarDecorationOverride;
  }
  if (undefined !== profileEffectOverride) {
    pendingProfileEffect = profileEffectOverride;
  }
  if (undefined !== profileFrameOverride) {
    pendingProfileFrame = profileFrameOverride;
  }
  if (undefined !== displayNameStylesOverride) {
    pendingDisplayNameStyles = displayNameStylesOverride;
  }
  const obj3 = { pendingValue: pendingProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
  profileEffect = undefined;
  const getProfilePreviewValue = guildId(set[16]).getProfilePreviewValue;
  guildId(set[16]);
  if (tmp5 != null) {
    profileEffect = tmp5.profileEffect;
  }
  profileEffect1 = undefined;
  if (tmp5 != null) {
    const _guildMemberProfile = tmp5._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj3);
  let profilePreviewValue2;
  if (!flag) {
    const obj4 = { pendingValue: pendingProfileFrame, userValue: profileFrame, guildValue: profileFrame1, guildId };
    profileFrame = undefined;
    const getProfilePreviewValue2 = guildId(set[16]).getProfilePreviewValue;
    guildId(set[16]);
    if (tmp5 != null) {
      profileFrame = tmp5.profileFrame;
    }
    profileFrame1 = undefined;
    if (tmp5 != null) {
      const _guildMemberProfile2 = tmp5._guildMemberProfile;
      if (_guildMemberProfile2 != null) {
        profileFrame1 = _guildMemberProfile2.profileFrame;
      }
    }
    profilePreviewValue2 = getProfilePreviewValue2(obj4);
  }
  let skuId1;
  const tmp4Result = require("useMaybeFetchProfileFrame");
  if (profilePreviewValue2 != null) {
    skuId1 = profilePreviewValue2.skuId;
  }
  const tmp4ResultResult = tmp4Result(skuId1);
  importDefault = tmp4ResultResult;
  const obj5 = { userId: user.id, image: pendingAvatar };
  const tmpResult6 = guildId(set[18]);
  const pendingAvatarSrc = tmpResult6.getPendingAvatarSrc(obj5);
  const arr2 = require("useBadges")(tmp5, pendingLegacyUsernameDisabled);
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp26 = first(react.useState({ width: 0, height: 0 }), 2);
  first = tmp26[0];
  react = tmp26[1];
  const items2 = [tmp4ResultResult, first.width];
  const callback = react.useCallback((nativeEvent) => {
    size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
    closure_4(size);
  }, []);
  const memo = react.useMemo(() => {
    let num2;
    let overflowBottom;
    let overflowHorizontal;
    let overflowTop;
    if (null != closure_1) {
      const layers = closure_1.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(closure_1, first.width));
      let num = 0;
      scaleProfileFrameDefault(closure_1, first.width);
      if (layers.some((type) => "staple" === type.type && "top" === type.anchor)) {
        num = overflowTop;
      }
      const layers2 = closure_1.layers;
      const obj = { marginTop: num, marginBottom: num2, marginHorizontal: overflowHorizontal };
      num2 = 0;
      if (layers2.some((type) => "staple" === type.type && "bottom" === type.anchor)) {
        num2 = overflowBottom;
      }
      return obj;
    }
  }, items2);
  const obj6 = { theme, primaryColor, secondaryColor, children: closure_9(View, obj7) };
  obj7 = { style: items3, pointerEvents: "none", accessibilityLabel, accessibilityRole: "image", accessible: true, children: closure_10(View, obj8) };
  items3 = [tmp8.profileContainer, memo, style];
  let tmp30Result = null != tmp4ResultResult;
  obj8 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 }, children: items4 };
  const ThemeContextProvider = guildId(tmp2[29]).ThemeContextProvider;
  if (tmp30Result) {
    const obj9 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(set[22]).ProfileFrameLayerOrder.BACK, containerWidth: null, containerHeight: null };
    ({ width: obj11.containerWidth, height: obj11.containerHeight } = first);
    const tmp4Result7 = require("ProfileFrame");
    tmp30Result = closure_9(tmp4Result7, obj9);
  }
  items4 = [tmp30Result, , ];
  const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: items5 };
  const obj12 = { user, displayProfile: tmp5, bannerHeight: guildId(set[24]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT, pendingBanner, pendingAvatarSrc, pendingAccentColor: tmp38, pendingThemeColors: tmp39, disableInteraction: true };
  tmp38 = undefined;
  const tmp4Result8 = require("UserProfileBanner");
  if (null != pendingAccentColor) {
    tmp38 = pendingAccentColor;
  }
  tmp39 = undefined;
  if (null != pendingThemeColors) {
    tmp39 = pendingThemeColors;
  }
  items5 = [closure_9(tmp4Result8, obj12), , ];
  const obj13 = { style: tmp8.profileInnerContent, children: items6 };
  items6 = [closure_9(require("UserProfileAvatar"), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: items7, children: items8 };
  items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp41 = !tmp30Result5;
  const tmp4Result9 = require("UserProfileGradientContainer");
  if (!tmp30Result5) {
    tmp41 = { paddingTop };
    const obj15 = { paddingTop };
  }
  items7[2] = tmp41;
  if (tmp30Result5) {
    const obj16 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj17.style, emojiOnlyCustomStatusBubble: obj17.emojiOnlyStyle } = tmp9);
    tmp30Result5 = closure_9(tmp4(tmp2[26]), obj16);
  }
  items8 = [tmp30Result5, , ];
  const obj18 = { user, themeType: constants.PREVIEW, displayName, pronouns: pendingPronouns, badges: items1, badgeContainerBackground: containerBackground, showBadgeToastOnPress: false, pendingDisplayNameStyles, guildId };
  const tmp4Result10 = require("UserProfilePrimaryInfo");
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  if (pendingPronouns == null) {
    let pronouns;
    if (tmp5 != null) {
      pronouns = tmp5.pronouns;
    }
    pendingPronouns = pronouns;
  }
  items8[1] = closure_9(tmp4Result10, obj18);
  let tmp30Result6 = !compact;
  if (tmp30Result6) {
    const obj19 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: items9, bioLineClamp: 1 };
    items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj20 = { backgroundColor: containerBackground };
    items9[2] = obj20;
    tmp30Result6 = closure_9(tmp4(tmp2[27]), obj19);
  }
  items8[2] = tmp30Result6;
  items6[1] = closure_10(tmp4Result9, obj14);
  items5[1] = closure_10(View, obj13);
  let tmp30Result7 = null != profilePreviewValue;
  if (tmp30Result7) {
    let skuId;
    const obj21 = { skuId: profilePreviewValue.skuId, style: tmp8.profileEffect };
    const tmp4Result11 = require("ProfileEffect");
    if (null != profileEffectRestartKey) {
      const _HermesInternal = HermesInternal;
      skuId = "" + profilePreviewValue.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = profilePreviewValue.skuId;
    }
    tmp30Result7 = closure_9(tmp4Result11, obj21, skuId);
  }
  items5[2] = tmp30Result7;
  items4[1] = closure_10(View, obj10);
  let tmp30Result8 = null != tmp4ResultResult;
  if (tmp30Result8) {
    const obj40 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(set[22]).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
    ({ width: obj22.containerWidth, height: obj22.containerHeight } = first);
    const tmp4Result12 = require("ProfileFrame");
    tmp30Result8 = closure_9(tmp4Result12, obj40);
  }
  items4[2] = tmp30Result8;
  return closure_9(ThemeContextProvider, obj6);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default tmp4;