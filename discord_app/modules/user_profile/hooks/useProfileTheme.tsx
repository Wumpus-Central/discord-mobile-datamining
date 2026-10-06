// === Module 7910: useProfileTheme ===

// Module 7910 (useProfileTheme)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import shims from "shims" /* 586 */;
import Constants from "Constants" /* 1085 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import useAvatarColor from "useAvatarColor" /* 7826 */;
import useProfileThemeOverrideStore from "useProfileThemeOverrideStore" /* 7911 */;
import UserProfileGradientUtils from "UserProfileGradientUtils" /* 7912 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useEffectiveThemeOverride = useProfileThemeOverrideStore.useEffectiveThemeOverride;
const ThemeTypes = Constants.ThemeTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isPreview) => {
  let displayProfile;
  let forceUserTheme;
  let pendingAvatarSrc;
  let pendingThemeColors;
  let tmp21;
  let tmp22;
  let tmp6;
  let tmp7;
  let user;
  const obj = react;
  const cResult = obj.c(23);
  ({ user, displayProfile, pendingThemeColors, pendingAvatarSrc, forceUserTheme } = isPreview);
  isPreview = isPreview.isPreview;
  const tmp4 = useThemeDefault();
  const tmp5 = useEffectiveThemeOverride();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return AccessibilityStore.syncProfileThemeWithUserTheme;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  let guildId;
  const tmp10 = cResult[2];
  if (displayProfile != null) {
    guildId = displayProfile.guildId;
  }
  if (tmp10 === guildId) {
    if (cResult[3] === pendingAvatarSrc) {
      let tmp12;
      let tmp17;
      if (cResult[4] === user) {
        tmp12 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult8 = shims;
        const result = tmpResult8.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
        cResult[6] = result;
        tmp17 = result;
      } else {
        tmp17 = cResult[6];
      }
      const tmpResult9 = useAvatarColor;
      [tmp21, tmp22] = tmpResult9.useAvatarColors(tmp12, tmp17, false);
      _slicedToArray(tmpResult9.useAvatarColors(tmp12, tmp17, false), 2);
      if (null != tmp5) {
        return tmp5;
      } else {
        let canEditThemes;
        if (displayProfile != null) {
          canEditThemes = displayProfile.canEditThemes;
        }
        if (!canEditThemes) {
          if (!isPreview) {
            let tmp24;
            if (cResult[7] !== tmp4) {
              const obj2 = { theme: tmp4, primaryColor: null, secondaryColor: null };
              cResult[7] = tmp4;
              cResult[8] = obj2;
              tmp24 = obj2;
            } else {
              tmp24 = cResult[8];
            }
            return tmp24;
          }
        }
        if (cResult[9] === tmp4) {
          if (cResult[10] === displayProfile) {
            if (cResult[11] === forceUserTheme) {
              if (cResult[12] === pendingThemeColors) {
                if (cResult[13] === tmp21) {
                  if (cResult[14] === tmp22) {
                    let tmp25;
                    let tmp26;
                    let tmp27;
                    let DARK;
                    if (cResult[15] === stateFromStores) {
                      tmp25 = cResult[16];
                      tmp26 = cResult[17];
                      tmp27 = cResult[18];
                    }
                    if (tmp27 !== ThemeTypes.ASH) {
                      let isThemeLightResult = tmp27 === ThemeTypes.ASH;
                      if (isThemeLightResult) {
                        const tmpResult10 = shared;
                        isThemeLightResult = tmpResult10.isThemeLight(tmp4);
                      }
                      DARK = tmp27;
                      if (isThemeLightResult) {
                        DARK = ThemeTypes.DARK;
                      }
                    } else {
                      shared;
                      DARK = tmp4;
                    }
                    if (cResult[19] === tmp25) {
                      if (cResult[20] === tmp26) {
                        let tmp35;
                        if (cResult[21] === DARK) {
                          tmp35 = cResult[22];
                        }
                        return tmp35;
                      }
                    }
                    const obj3 = { theme: DARK, primaryColor: tmp25, secondaryColor: tmp26 };
                    cResult[19] = tmp25;
                    cResult[20] = tmp26;
                    cResult[21] = DARK;
                    cResult[22] = obj3;
                    tmp35 = obj3;
                  }
                }
              }
            }
          }
        }
        let previewThemeColors;
        if (displayProfile != null) {
          previewThemeColors = displayProfile.getPreviewThemeColors(pendingThemeColors);
        }
        let first;
        if (previewThemeColors != null) {
          first = previewThemeColors[0];
        }
        if (first == null) {
          const tmpResult12 = utils_ColorUtils;
          first = tmpResult12.hex2int(tmp21);
        }
        let hex2intResult;
        if (previewThemeColors != null) {
          hex2intResult = previewThemeColors[1];
        }
        if (hex2intResult == null) {
          const tmpResult13 = utils_ColorUtils;
          hex2intResult = tmpResult13.hex2int(tmp22);
        }
        let tmp31 = tmp4;
        if (!stateFromStores) {
          tmp31 = tmp4;
          if (!forceUserTheme) {
            const tmpResult14 = UserProfileGradientUtils;
            let profileTheme = tmpResult14.getProfileTheme(first);
            if (profileTheme == null) {
              profileTheme = tmp4;
            }
            tmp31 = profileTheme;
          }
        }
        cResult[9] = tmp4;
        cResult[10] = displayProfile;
        cResult[11] = forceUserTheme;
        cResult[12] = pendingThemeColors;
        cResult[13] = tmp21;
        cResult[14] = tmp22;
        cResult[15] = stateFromStores;
        cResult[16] = first;
        cResult[17] = hex2intResult;
        cResult[18] = tmp31;
        tmp27 = tmp31;
        tmp26 = hex2intResult;
        tmp25 = first;
      }
    }
  }
  let tmp13 = pendingAvatarSrc;
  if (pendingAvatarSrc == null) {
    let avatarURL;
    if (user != null) {
      let guildId1;
      const getAvatarURL = user.getAvatarURL;
      if (displayProfile != null) {
        guildId1 = displayProfile.guildId;
      }
      avatarURL = getAvatarURL(guildId1, 80);
    }
    tmp13 = avatarURL;
  }
  let guildId2;
  if (displayProfile != null) {
    guildId2 = displayProfile.guildId;
  }
  cResult[2] = guildId2;
  cResult[3] = pendingAvatarSrc;
  cResult[4] = user;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((arg0) => {
  let displayProfile;
  let forceUserTheme;
  let isPreview;
  let pendingAvatarSrc;
  let pendingThemeColors;
  let user;
  ({ user, displayProfile, pendingAvatarSrc } = arg0);
  ({ pendingThemeColors, isPreview, forceUserTheme } = arg0);
  const tmp2 = useThemeDefault();
  const tmp3 = useEffectiveThemeOverride();
  const items = [AccessibilityStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
  if (pendingAvatarSrc == null) {
    let avatarURL;
    if (user != null) {
      let guildId;
      const getAvatarURL = user.getAvatarURL;
      if (displayProfile != null) {
        guildId = displayProfile.guildId;
      }
      avatarURL = getAvatarURL(guildId, 80);
    }
    pendingAvatarSrc = avatarURL;
  }
  const tmp4Result = shims;
  const result = tmp4Result.unsafe_getResolvedRawColor("PRIMARY_530", { saturation: 1 });
  const tmp4Result7 = useAvatarColor;
  _slicedToArray(tmp4Result7.useAvatarColors(pendingAvatarSrc, result, false), 2);
  if (null != tmp3) {
    return tmp3;
  } else {
    let DARK;
    let canEditThemes;
    if (displayProfile != null) {
      canEditThemes = displayProfile.canEditThemes;
    }
    if (!canEditThemes) {
      if (!isPreview) {
        return { theme: tmp2, primaryColor: null, secondaryColor: null };
      }
    }
    let previewThemeColors;
    if (displayProfile != null) {
      previewThemeColors = displayProfile.getPreviewThemeColors(pendingThemeColors);
    }
    let first;
    if (previewThemeColors != null) {
      first = previewThemeColors[0];
    }
    if (first == null) {
      const tmp4Result8 = utils_ColorUtils;
      first = tmp4Result8.hex2int(tmp10);
    }
    let hex2intResult;
    if (previewThemeColors != null) {
      hex2intResult = previewThemeColors[1];
    }
    if (hex2intResult == null) {
      const tmp4Result9 = utils_ColorUtils;
      hex2intResult = tmp4Result9.hex2int(tmp11);
    }
    let tmp16 = tmp2;
    if (!stateFromStores) {
      tmp16 = tmp2;
      if (!forceUserTheme) {
        const tmp4Result10 = UserProfileGradientUtils;
        let profileTheme = tmp4Result10.getProfileTheme(first);
        if (profileTheme == null) {
          profileTheme = tmp2;
        }
        tmp16 = profileTheme;
      }
    }
    if (tmp16 !== ThemeTypes.ASH) {
      let isThemeLightResult = tmp16 === ThemeTypes.ASH;
      if (isThemeLightResult) {
        const tmp4Result11 = shared;
        isThemeLightResult = tmp4Result11.isThemeLight(tmp2);
      }
      DARK = tmp16;
      if (isThemeLightResult) {
        DARK = ThemeTypes.DARK;
      }
    } else {
      shared;
      DARK = tmp2;
    }
    return { theme: DARK, primaryColor: first, secondaryColor: hex2intResult };
  }
});
let result = size.fileFinishedImporting("modules/user_profile/hooks/useProfileTheme.tsx");

export default tmp2;