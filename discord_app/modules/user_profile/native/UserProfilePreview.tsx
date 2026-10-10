// discord_app/modules/user_profile/native/UserProfilePreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import scaleProfileFrameDefault from "../../collectibles/profile_frames/scaleProfileFrame.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

const require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
const View = fn(17).View;
const Constants = fn(6904);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7, UserProfileThemeTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num = arg2;
  if (arg2 == null) {
    num = 263;
  }
  const obj = {
    profileContainer: { position: "relative", width: "100%", maxWidth: num },
    profileContentContainer: null,
    profileInnerContent: null,
    aboutMeCard: null,
    profileEffect: null,
  };
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

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfilePreview(arg0) {
      const cResult = guildId(576).c(90);
      ({ user, displayName, guildId } = arg0);
      ({
        avatarDecorationOverride,
        profileEffectOverride,
        profileEffectRestartKey,
        profileFrameOverride,
        displayNameStylesOverride,
        style,
        isPremiumTryItOut,
        compact,
        hideFrame,
        additionalBadges,
      } = arg0);
      let tmp4 = undefined !== isPremiumTryItOut;
      ({ accessibilityLabel, maxWidth } = arg0);
      if (tmp4) {
        tmp4 = isPremiumTryItOut;
      }
      isPremiumTryItOut = tmp4;
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
      if (cResult[1] === guildId) {
        if (cResult[2] === tmp4) {
          let tmp9 = cResult[3];
        }
        const stateFromStoresObject = guildId(504).useStateFromStoresObject(first, tmp9);
        ({
          pendingAvatar,
          pendingBanner,
          pendingAccentColor,
          pendingThemeColors,
          pendingAvatarDecoration,
          pendingProfileEffect,
          pendingProfileFrame,
          pendingDisplayNameStyles,
          pendingPronouns,
        } = stateFromStoresObject);
        ({ pendingGlobalName, pendingLegacyUsernameDisabled, pendingPrimaryGuildId } = stateFromStoresObject);
        const tmp12 = isPremiumTryItOut(8310)(user.id, guildId);
        if (cResult[4] === tmp12) {
          if (cResult[5] === tmp4) {
            if (cResult[6] === pendingThemeColors) {
              if (cResult[7] === user) {
                let tmp13 = cResult[8];
              }
              ({ theme, primaryColor, secondaryColor } = tmp11(8353)(tmp13));
              const tmp18 = closure_12(tmp5, null != primaryColor, maxWidth);
              tmp11(8367)();
              const tmp14 = tmp11(8353)(tmp13);
              const tmp16 = null != primaryColor;
              const customStatusActivity = guildId(10512).useCustomStatusActivity();
              if (cResult[9] === primaryColor) {
                if (cResult[10] === secondaryColor) {
                  if (cResult[11] === theme) {
                    let tmp22 = cResult[12];
                  }
                  const userProfileColors = guildId(8364).useUserProfileColors(tmp22);
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
                  if (tmp12 != null) {
                    profileEffect = tmp12.profileEffect;
                  }
                  let profileEffect1;
                  if (tmp12 != null) {
                    const _guildMemberProfile = tmp12._guildMemberProfile;
                    if (_guildMemberProfile != null) {
                      profileEffect1 = _guildMemberProfile.profileEffect;
                    }
                  }
                  if (cResult[13] === pendingProfileEffect) {
                    if (cResult[14] === guildId) {
                      if (cResult[15] === profileEffect1) {
                        let profileFrame;
                        if (tmp12 != null) {
                          const _guildMemberProfile2 = tmp12._guildMemberProfile;
                          if (_guildMemberProfile2 != null) {
                            profileFrame = _guildMemberProfile2.profileFrame;
                          }
                        }
                        if (cResult[18] === profileFrame) {
                          let profileFrame1;
                          if (tmp12 != null) {
                            profileFrame1 = tmp12.profileFrame;
                          }
                          if (cResult[19] === profileFrame1) {
                            if (cResult[20] === pendingProfileFrame) {
                              if (cResult[21] === guildId) {
                                if (cResult[22] === tmp6) {
                                  let tmp30 = cResult[23];
                                }
                                let skuId;
                                if (tmp30 != null) {
                                  skuId = tmp30.skuId;
                                }
                                const tmp11ResultResult = tmp11(8327)(skuId);
                                if (cResult[24] === pendingAvatar) {
                                  const userPrimaryGuild = guildId(8289).useUserPrimaryGuild(pendingPrimaryGuildId);
                                  const arr2 = tmp11(8368)(tmp12, pendingLegacyUsernameDisabled);
                                  if (cResult[27] !== arr2) {
                                    const _Symbol = Symbol;
                                    if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                                      function we(id) {
                                        return id.id;
                                      }
                                      cResult[29] = we;
                                      let tmp45 = we;
                                    } else {
                                      tmp45 = cResult[29];
                                    }
                                    const _Set = Set;
                                    const set = new Set(arr2.map(tmp45));
                                    cResult[27] = arr2;
                                    cResult[28] = set;
                                  } else {
                                    dependencyMap = tmp44;
                                    if (cResult[30] !== cResult[28]) {
                                      function ke(id) {
                                        return !set.has(id.id);
                                      }
                                      cResult[30] = tmp44;
                                      cResult[31] = ke;
                                      let tmp51 = ke;
                                    } else {
                                      tmp51 = cResult[31];
                                    }
                                    const items1 = [];
                                    HermesBuiltin.arraySpread(
                                      additionalBadges.filter(tmp51),
                                      HermesBuiltin.arraySpread(arr2, 0),
                                    );
                                    const _Symbol2 = Symbol;
                                    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                                      let size = { width: 0, height: 0 };
                                      cResult[32] = size;
                                      let tmp57 = size;
                                    } else {
                                      tmp57 = cResult[32];
                                    }
                                    const arraySpreadResult = HermesBuiltin.arraySpread(arr2, 0);
                                    [tmp61, _slicedToArray] = noop.useState(tmp57);
                                    const _Symbol3 = Symbol;
                                    if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                      class Le {
                                        constructor(arg0) {
                                          size = {
                                            width: Math.floor(arg0.nativeEvent.layout.width),
                                            height: Math.floor(arg0.nativeEvent.layout.height),
                                          };
                                          tmp = closure_3(size);
                                          return;
                                        }
                                      }
                                      cResult[33] = Le;
                                    } else {
                                      class Le {
                                        constructor(arg0) {
                                          size = {
                                            width: Math.floor(arg0.nativeEvent.layout.width),
                                            height: Math.floor(arg0.nativeEvent.layout.height),
                                          };
                                          tmp = closure_3(size);
                                          return;
                                        }
                                      }
                                    }
                                    if (null == tmp11ResultResult) {
                                      class Le {
                                        constructor(arg0) {
                                          size = {
                                            width: Math.floor(arg0.nativeEvent.layout.width),
                                            height: Math.floor(arg0.nativeEvent.layout.height),
                                          };
                                          tmp = closure_3(size);
                                          return;
                                        }
                                      }
                                      const items2 = [tmp18.profileContainer, undefined, style];
                                      cResult[41] = undefined;
                                      cResult[42] = style;
                                      cResult[43] = tmp18.profileContainer;
                                      cResult[44] = items2;
                                    } else {
                                      class Le {
                                        constructor(arg0) {
                                          size = {
                                            width: Math.floor(arg0.nativeEvent.layout.width),
                                            height: Math.floor(arg0.nativeEvent.layout.height),
                                          };
                                          tmp = closure_3(size);
                                          return;
                                        }
                                      }
                                      const tmp64 = tmp11(8350)(tmp11ResultResult, tmp61.width);
                                      cResult[34] = tmp61.width;
                                      cResult[35] = tmp11ResultResult;
                                      cResult[36] = tmp64;
                                    }
                                    const tmp60 = _slicedToArray(noop.useState(tmp57), 2);
                                  }
                                  const tmpResult8 = guildId(8289);
                                }
                                const tmp11Result = tmp11(8327);
                                const obj2 = { userId: user.id, image: pendingAvatar };
                                const pendingAvatarSrc = guildId(8293).getPendingAvatarSrc(obj2);
                                cResult[24] = pendingAvatar;
                                cResult[25] = user.id;
                                cResult[26] = pendingAvatarSrc;
                                const tmpResult9 = guildId(8293);
                              }
                            }
                          }
                        }
                        let profilePreviewValue;
                        if (!tmp6) {
                          class Le {
                            constructor(arg0) {
                              size = {
                                width: Math.floor(arg0.nativeEvent.layout.width),
                                height: Math.floor(arg0.nativeEvent.layout.height),
                              };
                              tmp = closure_3(size);
                              return;
                            }
                          }
                          let obj3 = {
                            pendingValue: pendingProfileFrame,
                            userValue: null,
                            guildValue: null,
                            guildId: null,
                          };
                          if (tmp12 != null) {
                            class Le {
                              constructor(arg0) {
                                size = {
                                  width: Math.floor(arg0.nativeEvent.layout.width),
                                  height: Math.floor(arg0.nativeEvent.layout.height),
                                };
                                tmp = closure_3(size);
                                return;
                              }
                            }
                          }
                          obj3.userValue = undefined;
                          if (tmp12 != null) {
                            class Le {
                              constructor(arg0) {
                                size = {
                                  width: Math.floor(arg0.nativeEvent.layout.width),
                                  height: Math.floor(arg0.nativeEvent.layout.height),
                                };
                                tmp = closure_3(size);
                                return;
                              }
                            }
                            if (tmp34 != null) {
                              class Le {
                                constructor(arg0) {
                                  size = {
                                    width: Math.floor(arg0.nativeEvent.layout.width),
                                    height: Math.floor(arg0.nativeEvent.layout.height),
                                  };
                                  tmp = closure_3(size);
                                  return;
                                }
                              }
                            }
                          }
                          obj3.guildValue = undefined;
                          obj3.guildId = guildId;
                          profilePreviewValue = obj9.getProfilePreviewValue(obj3);
                        }
                        if (tmp12 != null) {
                          class Le {
                            constructor(arg0) {
                              size = {
                                width: Math.floor(arg0.nativeEvent.layout.width),
                                height: Math.floor(arg0.nativeEvent.layout.height),
                              };
                              tmp = closure_3(size);
                              return;
                            }
                          }
                          if (tmp36 != null) {
                            class Le {
                              constructor(arg0) {
                                size = {
                                  width: Math.floor(arg0.nativeEvent.layout.width),
                                  height: Math.floor(arg0.nativeEvent.layout.height),
                                };
                                tmp = closure_3(size);
                                return;
                              }
                            }
                          }
                        }
                        cResult[18] = undefined;
                        if (tmp12 != null) {
                          class Le {
                            constructor(arg0) {
                              size = {
                                width: Math.floor(arg0.nativeEvent.layout.width),
                                height: Math.floor(arg0.nativeEvent.layout.height),
                              };
                              tmp = closure_3(size);
                              return;
                            }
                          }
                        }
                        cResult[19] = undefined;
                        cResult[20] = pendingProfileFrame;
                        cResult[21] = guildId;
                        cResult[22] = tmp6;
                        cResult[23] = profilePreviewValue;
                        tmp30 = profilePreviewValue;
                      }
                    }
                  }
                  const tmpResult7 = guildId(8364);
                  const obj4 = {
                    pendingValue: pendingProfileEffect,
                    userValue: profileEffect,
                    guildValue: profileEffect1,
                    guildId,
                  };
                  const profilePreviewValue1 = guildId(8290).getProfilePreviewValue(obj4);
                  cResult[13] = pendingProfileEffect;
                  cResult[14] = guildId;
                  cResult[15] = profileEffect1;
                  cResult[16] = profileEffect;
                  cResult[17] = profilePreviewValue1;
                  const tmpResult10 = guildId(8290);
                }
              }
              const obj5 = { theme, primaryColor, secondaryColor };
              cResult[9] = primaryColor;
              cResult[10] = secondaryColor;
              cResult[11] = theme;
              cResult[12] = obj5;
              tmp22 = obj5;
              const tmpResult6 = guildId(10512);
            }
          }
        }
        const obj6 = { user, displayProfile: tmp12, pendingThemeColors, isPreview: tmp4 };
        cResult[4] = tmp12;
        cResult[5] = tmp4;
        cResult[6] = pendingThemeColors;
        cResult[7] = user;
        cResult[8] = obj6;
        tmp13 = obj6;
        const tmpResult = guildId(504);
      }
      const fn = function v() {
        const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
        if (isPremiumTryItOut) {
          const tryItOutChanges = UserProfileSettingsStore.getTryItOutChanges();
          const obj3 = {};
          const merged = Object.assign(pendingChanges);
          ({
            tryItOutAvatar: obj2.pendingAvatar,
            tryItOutBanner: obj2.pendingBanner,
            tryItOutThemeColors: obj2.pendingThemeColors,
            tryItOutAvatarDecoration: obj2.pendingAvatarDecoration,
            tryItOutProfileEffect: obj2.pendingProfileEffect,
            tryItOutDisplayNameStyles: obj2.pendingDisplayNameStyles,
          } = tryItOutChanges);
          return obj3;
        } else {
          return pendingChanges;
        }
      };
      cResult[1] = guildId;
      cResult[2] = tmp4;
      cResult[3] = fn;
      tmp9 = fn;
      const obj = guildId(576);
    }
  : function UserProfilePreview(compact) {
      ({ user, displayName, guildId } = compact);
      ({
        avatarDecorationOverride,
        profileEffectOverride,
        profileEffectRestartKey,
        profileFrameOverride,
        displayNameStylesOverride,
        isPremiumTryItOut,
      } = compact);
      ({ accessibilityLabel, style } = compact);
      if (isPremiumTryItOut === undefined) {
        isPremiumTryItOut = false;
      }
      let flag = compact.compact;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = compact.hideFrame;
      if (flag2 === undefined) {
        flag2 = false;
      }
      ({ additionalBadges, maxWidth } = compact);
      if (additionalBadges === undefined) {
        additionalBadges = [];
      }
      dependencyMap = undefined;
      let set;
      let first;
      closure_5 = undefined;
      const items = [UserProfileSettingsStore];
      const stateFromStoresObject = guildId(504).useStateFromStoresObject(items, () => {
        const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
        if (isPremiumTryItOut) {
          const tryItOutChanges = UserProfileSettingsStore.getTryItOutChanges();
          const obj3 = {};
          const merged = Object.assign(pendingChanges);
          ({
            tryItOutAvatar: obj2.pendingAvatar,
            tryItOutBanner: obj2.pendingBanner,
            tryItOutThemeColors: obj2.pendingThemeColors,
            tryItOutAvatarDecoration: obj2.pendingAvatarDecoration,
            tryItOutProfileEffect: obj2.pendingProfileEffect,
            tryItOutDisplayNameStyles: obj2.pendingDisplayNameStyles,
          } = tryItOutChanges);
          return obj3;
        } else {
          return pendingChanges;
        }
      });
      ({
        pendingAccentColor,
        pendingThemeColors,
        pendingAvatarDecoration,
        pendingProfileEffect,
        pendingProfileFrame,
        pendingDisplayNameStyles,
        pendingPronouns,
      } = stateFromStoresObject);
      ({ pendingAvatar, pendingBanner, pendingGlobalName, pendingLegacyUsernameDisabled, pendingPrimaryGuildId } =
        stateFromStoresObject);
      const tmp5 = isPremiumTryItOut(8310)(user.id, guildId);
      let obj = guildId(504);
      ({ theme, primaryColor, secondaryColor } = isPremiumTryItOut(8353)({
        user,
        displayProfile: tmp5,
        pendingThemeColors,
        isPreview: isPremiumTryItOut,
      }));
      const tmp8 = closure_12(flag, null != primaryColor, maxWidth);
      const tmp9 = isPremiumTryItOut(8367)();
      const tmp6 = isPremiumTryItOut(8353)({
        user,
        displayProfile: tmp5,
        pendingThemeColors,
        isPreview: isPremiumTryItOut,
      });
      const customStatusActivity = guildId(10512).useCustomStatusActivity();
      let tmp28Result5 = null != customStatusActivity && !flag;
      const obj2 = guildId(10512);
      const userProfileColors = guildId(8364).useUserProfileColors({ theme, primaryColor, secondaryColor });
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
      const tmpResult = guildId(8364);
      let obj3 = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
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
      let str = guildId(8290).getProfilePreviewValue(obj3);
      let profilePreviewValue;
      if (!flag2) {
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
        profilePreviewValue = guildId(8290).getProfilePreviewValue(obj4);
        const tmpResult6 = guildId(8290);
      }
      let skuId1;
      const tmpResult5 = guildId(8290);
      if (profilePreviewValue != null) {
        skuId1 = profilePreviewValue.skuId;
      }
      const tmp4ResultResult = isPremiumTryItOut(8327)(skuId1);
      dependencyMap = tmp4ResultResult;
      const tmp4Result = isPremiumTryItOut(8327);
      const pendingAvatarSrc = guildId(8293).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
      const obj5 = { userId: user.id, image: pendingAvatar };
      const tmpResult7 = guildId(8293);
      const userPrimaryGuild = guildId(8289).useUserPrimaryGuild(pendingPrimaryGuildId);
      const arr2 = isPremiumTryItOut(8368)(tmp5, pendingLegacyUsernameDisabled);
      let str2 = globalThis;
      set = new Set(arr2.map((id) => id.id));
      const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
      const tmp24 = set(first.useState({ width: 0, height: 0 }), 2);
      first = tmp24[0];
      closure_5 = tmp24[1];
      const items2 = [tmp4ResultResult, first.width];
      const callback = first.useCallback((nativeEvent) => {
        const size = {
          width: Math.floor(nativeEvent.nativeEvent.layout.width),
          height: Math.floor(nativeEvent.nativeEvent.layout.height),
        };
        closure_5(size);
      }, []);
      const memo = first.useMemo(() => {
        if (null != closure_2) {
          const layers = closure_2.layers;
          ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(closure_2, first.width));
          let num = 0;
          if (
            layers.some((type) => {
              let tmp = "staple" === type.type;
              if (tmp) {
                tmp = "top" === type.anchor;
              }
              return tmp;
            })
          ) {
            num = overflowTop;
          }
          const obj = { marginTop: num, marginBottom: null, marginHorizontal: null };
          const layers2 = closure_2.layers;
          let num2 = 0;
          if (
            layers2.some((type) => {
              let tmp = "staple" === type.type;
              if (tmp) {
                tmp = "bottom" === type.anchor;
              }
              return tmp;
            })
          ) {
            num2 = overflowBottom;
          }
          obj.marginBottom = num2;
          obj.marginHorizontal = overflowHorizontal;
          return obj;
        }
      }, items2);
      const obj6 = { theme, primaryColor, secondaryColor, children: null };
      const obj7 = {
        style: null,
        pointerEvents: "none",
        accessibilityLabel,
        accessibilityRole: "image",
        accessible: true,
        children: null,
      };
      const items3 = [tmp8.profileContainer, memo, style];
      obj7.style = items3;
      const obj8 = {
        importantForAccessibility: "no-hide-descendants",
        accessibilityElementsHidden: true,
        style: { flexShrink: 1 },
        children: null,
      };
      let tmp28Result = null != tmp4ResultResult;
      if (tmp28Result) {
        const obj9 = {
          frame: tmp4ResultResult,
          filterLayer,
          profileThemeType: constants.PREVIEW,
          frameOrder: guildId(8333).ProfileFrameLayerOrder.BACK,
          containerWidth: null,
          containerHeight: null,
        };
        ({ width: obj14.containerWidth, height: obj14.containerHeight } = first);
        tmp28Result = closure_9(tmp4(8346), obj9);
        const tmp4Result7 = tmp4(8346);
      }
      const items4 = [tmp28Result, ,];
      const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: null };
      const obj11 = {
        user,
        displayProfile: tmp5,
        bannerHeight: null,
        pendingBanner: null,
        pendingAvatarSrc: null,
        pendingAccentColor: null,
        pendingThemeColors: null,
        disableInteraction: true,
      };
      const tmpResult8 = guildId(8289);
      obj11.bannerHeight = guildId(9006).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
      obj11.pendingBanner = pendingBanner;
      obj11.pendingAvatarSrc = pendingAvatarSrc;
      let tmp36;
      if (null != pendingAccentColor) {
        tmp36 = pendingAccentColor;
      }
      obj11.pendingAccentColor = tmp36;
      let tmp37;
      if (null != pendingThemeColors) {
        tmp37 = pendingThemeColors;
      }
      obj11.pendingThemeColors = tmp37;
      const items5 = [closure_9(isPremiumTryItOut(8372), obj11), ,];
      const obj12 = { style: tmp8.profileInnerContent, children: null };
      const items6 = [
        closure_9(isPremiumTryItOut(8381), {
          user,
          guildId,
          pendingAvatarSrc,
          pendingAvatarDecoration,
          backgroundColor: avatarBackground,
          disableStatus: true,
        }),
      ];
      const obj13 = {
        fallbackBackground: gradientFallbackBackground,
        primaryColor,
        secondaryColor,
        containerStyle: null,
        children: null,
      };
      const items7 = [, ,];
      ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
      let tmp39 = !tmp28Result5;
      const tmp4Result8 = isPremiumTryItOut(8372);
      if (!tmp28Result5) {
        const obj15 = { paddingTop };
        tmp39 = obj15;
      }
      items7[2] = tmp39;
      obj13.containerStyle = items7;
      if (tmp28Result5) {
        const obj16 = {
          customStatusActivity,
          themeType: constants.PREVIEW,
          hasCustomProfileTheme: tmp7,
          style: null,
          emojiOnlyStyle: null,
        };
        ({ customStatusBubble: obj20.style, emojiOnlyCustomStatusBubble: obj20.emojiOnlyStyle } = tmp9);
        tmp28Result5 = closure_9(tmp4(10513), obj16);
      }
      const items8 = [tmp28Result5, ,];
      const obj17 = {
        user,
        themeType: constants.PREVIEW,
        displayName: null,
        pronouns: null,
        badges: null,
        badgeContainerBackground: null,
        showBadgeToastOnPress: false,
        pendingDisplayNameStyles: null,
        primaryGuildOverride: null,
        guildId: null,
      };
      const tmp4Result9 = isPremiumTryItOut(10530);
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
      obj17.primaryGuildOverride = userPrimaryGuild;
      obj17.guildId = guildId;
      items8[1] = closure_9(isPremiumTryItOut(10531), obj17);
      let tmp28Result6 = !flag;
      if (!flag) {
        const obj18 = {
          userId: user.id,
          displayProfile: tmp5,
          themeType: constants.PREVIEW,
          style: null,
          bioLineClamp: 1,
        };
        const items9 = [tmp9.card, tmp8.aboutMeCard];
        const obj19 = { backgroundColor: containerBackground };
        items9[2] = obj19;
        obj18.style = items9;
        tmp28Result6 = closure_9(tmp4(10612), obj18);
      }
      items8[2] = tmp28Result6;
      obj13.children = items8;
      items6[1] = closure_10(tmp4Result9, obj13);
      obj12.children = items6;
      items5[1] = closure_10(closure_5, obj12);
      if (null == str) {
        items5[2] = tmp46;
        obj10.children = items5;
        items4[1] = closure_10(tmp29, obj10);
        let tmp28Result7 = null != tmp4ResultResult;
        if (tmp28Result7) {
          const obj21 = {
            frame: tmp4ResultResult,
            filterLayer,
            profileThemeType: constants.PREVIEW,
            frameOrder: guildId(8333).ProfileFrameLayerOrder.FRONT,
            containerWidth: null,
            containerHeight: null,
          };
          ({ width: obj25.containerWidth, height: obj25.containerHeight } = first);
          tmp28Result7 = closure_9(tmp4(8346), obj21);
          const tmp4Result11 = tmp4(8346);
        }
        items4[2] = tmp28Result7;
        obj8.children = items4;
        obj7.children = closure_10(tmp29, obj8);
        obj6.children = closure_9(tmp29, obj7);
        return closure_9(guildId(4827).ThemeContextProvider, obj6);
      } else {
        const obj22 = { skuId: str.skuId, style: tmp8.profileEffect };
        if (null != profileEffectRestartKey) {
          str = "-";
          str2 = "";
          let skuId = "" + str.skuId + "-" + profileEffectRestartKey;
        } else {
          skuId = `-`.skuId;
        }
        closure_9(tmp4(9004), obj22, skuId);
        const tmp4Result12 = tmp4(9004);
      }
      const tmp4Result10 = isPremiumTryItOut(10531);
    };
