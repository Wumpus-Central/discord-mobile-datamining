// === Module 10487: UserProfilePreview ===

// Module 10487 (UserProfilePreview)
import nativeDefault from "native" /* 587 */;
import useDisplayProfileDefault from "useDisplayProfile" /* 8286 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8326 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8260 */;

const require = globalThis.__r;

const require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
const View = fn(17).View;
const Constants = fn(6891);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7, UserProfileThemeTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num = arg2;
  if (arg2 == null) {
    num = 263;
  }
  const obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: null, profileInnerContent: null, aboutMeCard: null, profileEffect: null };
  const obj2 = { overflow: "hidden", minHeight: 350, borderWidth: 1, borderColor: null, borderRadius: null };
  const colors = nativeDefault.colors;
  if (arg1) {
    let BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  obj2.borderColor = BACKGROUND_SURFACE_HIGH;
  obj2.borderRadius = tmp4(587).radii.lg;
  obj.profileContentContainer = obj2;
  obj.profileInnerContent = { flexGrow: 1 };
  obj.aboutMeCard = { marginTop: tmp4(587).space.PX_12 };
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfilePreview(arg0) {
  const cResult = guildId(576).c(88);
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
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function v() {
      return UserProfileSettingsStore.getPendingChanges(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = guildId(576);
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(first, tmp8);
  ({ pendingAvatar, pendingBanner, pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp11 = useDisplayProfileDefault(user.id, guildId);
  if (cResult[3] === tmp11) {
    if (cResult[4] === pendingThemeColors) {
      if (cResult[5] === user) {
        let tmp12 = cResult[6];
      }
      ({ theme, primaryColor, secondaryColor } = tmp10(8329)(tmp12));
      const tmp17 = closure_12(tmp4, null != primaryColor, maxWidth);
      tmp10(8343)();
      const tmp13 = tmp10(8329)(tmp12);
      const tmp15 = null != primaryColor;
      const customStatusActivity = guildId(10488).useCustomStatusActivity();
      if (cResult[7] === primaryColor) {
        if (cResult[8] === secondaryColor) {
          if (cResult[9] === theme) {
            let tmp21 = cResult[10];
          }
          const userProfileColors = guildId(8340).useUserProfileColors(tmp21);
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
                if (tmp11 != null) {
                  const _guildMemberProfile2 = tmp11._guildMemberProfile;
                  if (_guildMemberProfile2 != null) {
                    profileFrame = _guildMemberProfile2.profileFrame;
                  }
                }
                if (cResult[16] === profileFrame) {
                  let profileFrame1;
                  if (tmp11 != null) {
                    profileFrame1 = tmp11.profileFrame;
                  }
                  if (cResult[17] === profileFrame1) {
                    if (cResult[18] === pendingProfileFrame) {
                      if (cResult[19] === guildId) {
                        if (cResult[20] === tmp5) {
                          let tmp29 = cResult[21];
                        }
                        let skuId;
                        if (tmp29 != null) {
                          skuId = tmp29.skuId;
                        }
                        const tmp10ResultResult = tmp10(8303)(skuId);
                        if (cResult[22] === pendingAvatar) {
                          const arr2 = tmp10(8344)(tmp11, pendingLegacyUsernameDisabled);
                          if (cResult[25] !== arr2) {
                            const _Symbol = Symbol;
                            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                              cResult[27] = Se;
                            } else {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                            }
                            const _Set = Set;
                            const set = new Set(arr2.map(Se));
                            cResult[25] = arr2;
                            cResult[26] = set;
                          } else {
                            class Se {
                              constructor(arg0) {
                                return arg0.id;
                              }
                            }
                            importDefault = tmp42;
                            if (cResult[28] !== tmp42) {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                              cResult[28] = tmp42;
                              cResult[29] = tmp50;
                            } else {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                            }
                            const items1 = [];
                            HermesBuiltin.arraySpread(additionalBadges.filter(tmp50), HermesBuiltin.arraySpread(arr2, 0));
                            const _Symbol2 = Symbol;
                            if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                              cResult[30] = tmp57;
                            } else {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                            }
                            const arraySpreadResult = HermesBuiltin.arraySpread(arr2, 0);
                            [tmp61, dependencyMap] = noop.useState(tmp57);
                            const _Symbol3 = Symbol;
                            if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                              cResult[31] = tmp63;
                            } else {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                            }
                            if (null == tmp10ResultResult) {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                              const items2 = [tmp17.profileContainer, undefined, style];
                              cResult[39] = undefined;
                              cResult[40] = style;
                              cResult[41] = tmp17.profileContainer;
                              cResult[42] = items2;
                            } else {
                              class Se {
                                constructor(arg0) {
                                  return arg0.id;
                                }
                              }
                              const tmp65 = tmp10(8326)(tmp10ResultResult, tmp61.width);
                              cResult[32] = tmp61.width;
                              cResult[33] = tmp10ResultResult;
                              cResult[34] = tmp65;
                            }
                            const tmp60 = _slicedToArray(noop.useState(tmp57), 2);
                          }
                        }
                        const tmp10Result = tmp10(8303);
                        const obj2 = { userId: user.id, image: pendingAvatar };
                        const pendingAvatarSrc = guildId(8269).getPendingAvatarSrc(obj2);
                        cResult[22] = pendingAvatar;
                        cResult[23] = user.id;
                        cResult[24] = pendingAvatarSrc;
                        const tmpResult7 = guildId(8269);
                      }
                    }
                  }
                }
                let profilePreviewValue;
                if (!tmp5) {
                  class Se {
                    constructor(arg0) {
                      return arg0.id;
                    }
                  }
                  const obj3 = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
                  if (tmp11 != null) {
                    class Se {
                      constructor(arg0) {
                        return arg0.id;
                      }
                    }
                  }
                  obj3.userValue = undefined;
                  if (tmp11 != null) {
                    class Se {
                      constructor(arg0) {
                        return arg0.id;
                      }
                    }
                    if (tmp33 != null) {
                      class Se {
                        constructor(arg0) {
                          return arg0.id;
                        }
                      }
                    }
                  }
                  obj3.guildValue = undefined;
                  obj3.guildId = guildId;
                  profilePreviewValue = obj9.getProfilePreviewValue(obj3);
                }
                if (tmp11 != null) {
                  class Se {
                    constructor(arg0) {
                      return arg0.id;
                    }
                  }
                  if (tmp35 != null) {
                    class Se {
                      constructor(arg0) {
                        return arg0.id;
                      }
                    }
                  }
                }
                cResult[16] = undefined;
                if (tmp11 != null) {
                  class Se {
                    constructor(arg0) {
                      return arg0.id;
                    }
                  }
                }
                cResult[17] = undefined;
                cResult[18] = pendingProfileFrame;
                cResult[19] = guildId;
                cResult[20] = tmp5;
                cResult[21] = profilePreviewValue;
                tmp29 = profilePreviewValue;
              }
            }
          }
          const tmpResult6 = guildId(8340);
          const obj4 = { pendingValue: pendingProfileEffect, userValue: profileEffect, guildValue: profileEffect1, guildId };
          const profilePreviewValue1 = guildId(8266).getProfilePreviewValue(obj4);
          cResult[11] = pendingProfileEffect;
          cResult[12] = guildId;
          cResult[13] = profileEffect;
          cResult[14] = profileEffect1;
          cResult[15] = profilePreviewValue1;
          const tmpResult8 = guildId(8266);
        }
      }
      const obj5 = { theme, primaryColor, secondaryColor };
      cResult[7] = primaryColor;
      cResult[8] = secondaryColor;
      cResult[9] = theme;
      cResult[10] = obj5;
      tmp21 = obj5;
      const tmpResult5 = guildId(10488);
    }
  }
  const obj6 = { user, displayProfile: tmp11, pendingThemeColors };
  cResult[3] = tmp11;
  cResult[4] = pendingThemeColors;
  cResult[5] = user;
  cResult[6] = obj6;
  tmp12 = obj6;
  const tmpResult = guildId(504);
}) : (function UserProfilePreview(hideFrame) {
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
  let set;
  let first;
  noop = undefined;
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = guildId(set[10]).useStateFromStoresObject(items, () => UserProfileSettingsStore.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp5 = require("useDisplayProfile")(user.id, guildId);
  let obj = guildId(set[10]);
  ({ theme, primaryColor, secondaryColor } = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors }));
  const tmp8 = closure_12(compact, null != primaryColor, maxWidth);
  const tmp9 = require("UserProfileSharedStyles")();
  const tmp6 = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors });
  const customStatusActivity = guildId(set[14]).useCustomStatusActivity();
  let tmp27Result5 = null != customStatusActivity && !compact;
  const obj2 = guildId(set[14]);
  const userProfileColors = guildId(set[15]).useUserProfileColors({ theme, primaryColor, secondaryColor });
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
  const tmpResult = guildId(set[15]);
  const obj3 = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp5 != null) {
    profileEffect = tmp5.profileEffect;
  }
  obj3.userValue = profileEffect;
  let profileEffect1;
  if (tmp5 != null) {
    const _guildMemberProfile = tmp5._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj3.guildValue = profileEffect1;
  obj3.guildId = guildId;
  let str = guildId(set[16]).getProfilePreviewValue(obj3);
  let profilePreviewValue;
  if (!flag) {
    const obj4 = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
    let profileFrame;
    if (tmp5 != null) {
      profileFrame = tmp5.profileFrame;
    }
    obj4.userValue = profileFrame;
    let profileFrame1;
    if (tmp5 != null) {
      const _guildMemberProfile2 = tmp5._guildMemberProfile;
      if (_guildMemberProfile2 != null) {
        profileFrame1 = _guildMemberProfile2.profileFrame;
      }
    }
    obj4.guildValue = profileFrame1;
    obj4.guildId = guildId;
    profilePreviewValue = guildId(tmp2[16]).getProfilePreviewValue(obj4);
    const tmpResult5 = guildId(tmp2[16]);
  }
  let skuId1;
  const tmpResult4 = guildId(set[16]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const tmp4ResultResult = require("useMaybeFetchProfileFrame")(skuId1);
  importDefault = tmp4ResultResult;
  const tmp4Result = require("useMaybeFetchProfileFrame");
  const pendingAvatarSrc = guildId(set[18]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const arr2 = require("useBadges")(tmp5, pendingLegacyUsernameDisabled);
  let str2 = globalThis;
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp23 = first(noop.useState({ width: 0, height: 0 }), 2);
  first = tmp23[0];
  noop = tmp23[1];
  const items2 = [tmp4ResultResult, first.width];
  const callback = noop.useCallback((nativeEvent) => {
    const size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
    closure_4(size);
  }, []);
  const memo = noop.useMemo(() => {
    if (null != closure_1) {
      const layers = closure_1.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(closure_1, first.width));
      let num = 0;
      if (layers.some((type) => {
        let tmp = "staple" === type.type;
        if (tmp) {
          tmp = "top" === type.anchor;
        }
        return tmp;
      })) {
        num = overflowTop;
      }
      const obj = { marginTop: num, marginBottom: null, marginHorizontal: null };
      const layers2 = closure_1.layers;
      let num2 = 0;
      if (layers2.some((type) => {
        let tmp = "staple" === type.type;
        if (tmp) {
          tmp = "bottom" === type.anchor;
        }
        return tmp;
      })) {
        num2 = overflowBottom;
      }
      obj.marginBottom = num2;
      obj.marginHorizontal = overflowHorizontal;
      return obj;
    }
  }, items2);
  const obj6 = { theme, primaryColor, secondaryColor, children: null };
  const obj7 = { style: null, pointerEvents: "none", accessibilityLabel, accessibilityRole: "image", accessible: true, children: null };
  const items3 = [tmp8.profileContainer, memo, style];
  obj7.style = items3;
  const obj8 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 }, children: null };
  let tmp27Result = null != tmp4ResultResult;
  if (tmp27Result) {
    const obj9 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(tmp2[22]).ProfileFrameLayerOrder.BACK, containerWidth: null, containerHeight: null };
    ({ width: obj13.containerWidth, height: obj13.containerHeight } = first);
    tmp27Result = closure_9(tmp4(tmp2[21]), obj9);
    const tmp4Result7 = tmp4(tmp2[21]);
  }
  const items4 = [tmp27Result, , ];
  const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: null };
  const obj11 = { user, displayProfile: tmp5, bannerHeight: null, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: true };
  const obj5 = { userId: user.id, image: pendingAvatar };
  const tmpResult6 = guildId(set[18]);
  obj11.bannerHeight = guildId(set[24]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
  obj11.pendingBanner = pendingBanner;
  obj11.pendingAvatarSrc = pendingAvatarSrc;
  let tmp35;
  if (null != pendingAccentColor) {
    tmp35 = pendingAccentColor;
  }
  obj11.pendingAccentColor = tmp35;
  let tmp36;
  if (null != pendingThemeColors) {
    tmp36 = pendingThemeColors;
  }
  obj11.pendingThemeColors = tmp36;
  const items5 = [closure_9(require("UserProfileBanner"), obj11), , ];
  const obj12 = { style: tmp8.profileInnerContent, children: null };
  const items6 = [closure_9(require("UserProfileAvatar"), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp38 = !tmp27Result5;
  const tmp4Result8 = require("UserProfileBanner");
  if (!tmp27Result5) {
    const obj15 = { paddingTop };
    tmp38 = obj15;
  }
  items7[2] = tmp38;
  obj14.containerStyle = items7;
  if (tmp27Result5) {
    const obj16 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: tmp7, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj19.style, emojiOnlyCustomStatusBubble: obj19.emojiOnlyStyle } = tmp9);
    tmp27Result5 = closure_9(tmp4(tmp2[26]), obj16);
  }
  const items8 = [tmp27Result5, , ];
  const obj17 = { user, themeType: constants.PREVIEW, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, showBadgeToastOnPress: false, pendingDisplayNameStyles: null, guildId: null };
  const tmp4Result9 = require("UserProfileGradientContainer");
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  obj17.displayName = displayName;
  if (pendingPronouns == null) {
    let pronouns;
    if (tmp5 != null) {
      pronouns = tmp5.pronouns;
    }
    pendingPronouns = pronouns;
  }
  obj17.pronouns = pendingPronouns;
  obj17.badges = items1;
  obj17.badgeContainerBackground = containerBackground;
  obj17.pendingDisplayNameStyles = pendingDisplayNameStyles;
  obj17.guildId = guildId;
  items8[1] = closure_9(require("UserProfilePrimaryInfo"), obj17);
  let tmp27Result6 = !compact;
  if (!compact) {
    const obj18 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: null, bioLineClamp: 1 };
    const items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj20 = { backgroundColor: containerBackground };
    items9[2] = obj20;
    obj18.style = items9;
    tmp27Result6 = closure_9(tmp4(tmp2[27]), obj18);
  }
  items8[2] = tmp27Result6;
  obj14.children = items8;
  items6[1] = closure_10(tmp4Result9, obj14);
  obj12.children = items6;
  items5[1] = closure_10(View, obj12);
  if (null == str) {
    items5[2] = tmp45;
    obj10.children = items5;
    items4[1] = closure_10(View, obj10);
    let tmp27Result7 = null != tmp4ResultResult;
    if (tmp27Result7) {
      const obj21 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(tmp2[22]).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
      ({ width: obj24.containerWidth, height: obj24.containerHeight } = first);
      tmp27Result7 = closure_9(tmp4(tmp2[21]), obj21);
      const tmp4Result11 = tmp4(tmp2[21]);
    }
    items4[2] = tmp27Result7;
    obj8.children = items4;
    obj7.children = closure_10(View, obj8);
    obj6.children = closure_9(View, obj7);
    return closure_9(guildId(tmp2[29]).ThemeContextProvider, obj6);
  } else {
    const obj22 = { skuId: str.skuId, style: tmp8.profileEffect };
    if (null != profileEffectRestartKey) {
      str = "-";
      str2 = "";
      let skuId = "" + str.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = `-`.skuId;
    }
    closure_9(tmp4(tmp2[28]), obj22, skuId);
    const tmp4Result12 = tmp4(tmp2[28]);
  }
  const tmp4Result10 = require("UserProfilePrimaryInfo");
});