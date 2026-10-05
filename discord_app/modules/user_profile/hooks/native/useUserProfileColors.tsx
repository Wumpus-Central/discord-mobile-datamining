// discord_app/modules/user_profile/hooks/native/useUserProfileColors.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../discord_common/js/shared/Constants.tsx";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useProfileThemeValues from "../../useProfileThemeValues.native.tsx";
import UserProfileGradientUtils from "../../UserProfileGradientUtils.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let theme;

const ThemeTypes = Constants.ThemeTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (theme) => {
      let int2hex2;
      let overlay;
      let overlaySyncedWithUserTheme;
      let primaryColor;
      let secondaryColor;
      let sectionBox;
      let tmp7;
      let tmp8;
      let tmpResult20;
      let tmpResult22;
      const obj = react;
      const cResult = obj.c(21);
      ({ primaryColor, secondaryColor } = theme);
      theme = theme.theme;
      const tmp5 = useThemeDefault();
      const obj2 = useProfileThemeValues;
      const profileThemeValues = obj2.useProfileThemeValues(theme);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function t() {
          return AccessibilityStore.syncProfileThemeWithUserTheme;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp7 = items;
        tmp8 = fn;
      } else {
        [tmp7, tmp8] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      const tmpResult13 = useToken;
      const token = tmpResult13.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp5);
      const tmpResult14 = useToken;
      const token1 = tmpResult14.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp5);
      const tmpResult15 = useToken;
      const token2 = tmpResult15.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp5);
      const tmpResult16 = useToken;
      const token3 = tmpResult16.useToken(nativeDefault.colors.BORDER_MUTED, tmp5);
      const tmpResult17 = useToken;
      const token4 = tmpResult17.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp5);
      const tmpResult18 = useToken;
      const token5 = tmpResult18.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp5);
      if (cResult[2] === token) {
        if (cResult[3] === token1) {
          if (cResult[4] === token2) {
            if (cResult[5] === token3) {
              if (cResult[6] === token4) {
                let tmp17;
                if (cResult[7] === token5) {
                  tmp17 = cResult[8];
                }
                const LIGHT = ThemeTypes.LIGHT;
                const containerBackground = tmp17.containerBackground;
                if (null != primaryColor) {
                  if (null != secondaryColor) {
                    if (null != profileThemeValues) {
                      let tmp20;
                      ({ sectionBox, overlay, overlaySyncedWithUserTheme } = profileThemeValues);
                      if (cResult[9] === tmp17) {
                        if (cResult[10] === overlay) {
                          if (cResult[11] === overlaySyncedWithUserTheme) {
                            if (cResult[12] === primaryColor) {
                              if (cResult[13] === secondaryColor) {
                                if (cResult[14] === sectionBox) {
                                  if (cResult[15] === stateFromStores) {
                                    if (cResult[16] === containerBackground) {
                                      tmp20 = cResult[17];
                                    }
                                    return tmp20;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      let tmp22 = overlay;
                      const calculateOverlayedColor = UserProfileGradientUtils.calculateOverlayedColor;
                      UserProfileGradientUtils;
                      if (stateFromStores) {
                        tmp22 = overlaySyncedWithUserTheme;
                      }
                      const result = calculateOverlayedColor(primaryColor, tmp22);
                      if (cResult[18] === overlay) {
                        let tmp24;
                        if (cResult[19] === secondaryColor) {
                          tmp24 = cResult[20];
                        }
                        const obj3 = {
                          containerBackground,
                          gradientSecondaryBackground: tmp24,
                          avatarBackground: tmpResult20.int2hex(result),
                          statusBackground: int2hex2(tmpResult22.calculateOverlayedColor(result, sectionBox)),
                        };
                        const merged = Object.assign(tmp17);
                        tmpResult20 = utils_ColorUtils;
                        int2hex2 = utils_ColorUtils.int2hex;
                        utils_ColorUtils;
                        cResult[9] = tmp17;
                        cResult[10] = overlay;
                        cResult[11] = overlaySyncedWithUserTheme;
                        cResult[12] = primaryColor;
                        cResult[13] = secondaryColor;
                        cResult[14] = sectionBox;
                        cResult[15] = stateFromStores;
                        cResult[16] = containerBackground;
                        cResult[17] = obj3;
                        tmp20 = obj3;
                        tmpResult22 = UserProfileGradientUtils;
                      }
                      const int2hex = utils_ColorUtils.int2hex;
                      utils_ColorUtils;
                      const tmpResult24 = UserProfileGradientUtils;
                      const int2hexResult = int2hex(tmpResult24.calculateOverlayedColor(secondaryColor, overlay));
                      cResult[18] = overlay;
                      cResult[19] = secondaryColor;
                      cResult[20] = int2hexResult;
                      tmp24 = int2hexResult;
                    }
                  }
                }
                return tmp17;
              }
            }
          }
        }
      }
      const obj4 = {
        gradientFallbackBackground: token,
        gradientSecondaryBackground: token1,
        containerBackground: token2,
        containerBorderColor: token3,
        avatarBackground: token4,
        statusBackground: token5,
      };
      cResult[2] = token;
      cResult[3] = token1;
      cResult[4] = token2;
      cResult[5] = token3;
      cResult[6] = token4;
      cResult[7] = token5;
      cResult[8] = obj4;
      tmp17 = obj4;
    }
  : (theme) => {
      let int2hex;
      let int2hex2;
      let obj4;
      let obj5;
      let obj6;
      let obj7;
      let obj8;
      let obj9;
      let overlay;
      let overlaySyncedWithUserTheme;
      let primaryColor;
      let secondaryColor;
      let sectionBox;
      let tmp3Result10;
      let tmp3Result7;
      let tmp3Result8;
      ({ primaryColor, secondaryColor } = theme);
      theme = theme.theme;
      const tmp2 = useThemeDefault();
      const obj = useProfileThemeValues;
      const profileThemeValues = obj.useProfileThemeValues(theme);
      const items = [AccessibilityStore];
      const obj3 = {
        gradientFallbackBackground: obj4.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2),
        gradientSecondaryBackground: obj5.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2),
        containerBackground: obj6.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp2),
        containerBorderColor: obj7.useToken(nativeDefault.colors.BORDER_MUTED, tmp2),
        avatarBackground: obj8.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp2),
        statusBackground: obj9.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp2),
      };
      const obj2 = get_initialized;
      const stateFromStores = obj2.useStateFromStores(items, () => AccessibilityStore.syncProfileThemeWithUserTheme);
      obj4 = useToken;
      obj5 = useToken;
      obj6 = useToken;
      obj7 = useToken;
      obj8 = useToken;
      obj9 = useToken;
      if (null != primaryColor) {
        if (null != secondaryColor) {
          if (null != profileThemeValues) {
            ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
            let tmp7 = overlay;
            const calculateOverlayedColor = UserProfileGradientUtils.calculateOverlayedColor;
            UserProfileGradientUtils;
            if (stateFromStores) {
              tmp7 = overlaySyncedWithUserTheme;
            }
            const result = calculateOverlayedColor(primaryColor, tmp7);
            const obj10 = {
              containerBackground: tmp6,
              gradientSecondaryBackground: int2hex(tmp3Result7.calculateOverlayedColor(secondaryColor, overlay)),
              avatarBackground: tmp3Result8.int2hex(result),
              statusBackground: int2hex2(tmp3Result10.calculateOverlayedColor(result, sectionBox)),
            };
            const merged = Object.assign(obj3);
            int2hex = utils_ColorUtils.int2hex;
            utils_ColorUtils;
            tmp3Result7 = UserProfileGradientUtils;
            tmp3Result8 = utils_ColorUtils;
            int2hex2 = utils_ColorUtils.int2hex;
            utils_ColorUtils;
            tmp3Result10 = UserProfileGradientUtils;
            return obj10;
          }
        }
      }
      return obj3;
    };
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = tmp2;
