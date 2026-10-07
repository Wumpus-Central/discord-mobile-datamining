// discord_app/modules/user_profile/hooks/native/useUserProfileColors.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import useProfileThemeValues from "../../useProfileThemeValues.native.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

const initialize = obj(504);
const utils_ColorUtils = obj(1103);
const useToken = obj(4586);
const UserProfileGradientUtils = obj(7912);
require = fn;
const ThemeTypes = fn(1096).ThemeTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileColors.tsx");

export const useUserProfileColors = ReactCompilerGating.isReactCompilerEnabled()
  ? (theme) => {
      let obj = require;
      let int2hexResult = dependencyMap;
      const cResult = c.c(21);
      ({ primaryColor, secondaryColor } = theme);
      const tmp4 = useThemeDefault();
      const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme.theme);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function t() {
          return AccessibilityStore.syncProfileThemeWithUserTheme;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
      const objResult = initialize;
      const token = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp4);
      const objResult12 = useToken;
      const token1 = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp4);
      const objResult13 = useToken;
      const token2 = useToken.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp4);
      const objResult14 = useToken;
      const token3 = useToken.useToken(nativeDefault.colors.BORDER_MUTED, tmp4);
      const objResult15 = useToken;
      const token4 = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp4);
      const objResult16 = useToken;
      const token5 = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp4);
      if (cResult[2] === token) {
        if (cResult[3] === token1) {
          if (cResult[4] === token2) {
            if (cResult[5] === token3) {
              if (cResult[6] === token4) {
                if (cResult[7] === token5) {
                  let tmp16 = cResult[8];
                }
                const LIGHT = ThemeTypes.LIGHT;
                const containerBackground = tmp16.containerBackground;
                if (null != primaryColor) {
                  if (null != secondaryColor) {
                    if (null != profileThemeValues) {
                      ({ sectionBox, overlay, overlaySyncedWithUserTheme } = profileThemeValues);
                      if (cResult[9] === tmp16) {
                        if (cResult[10] === overlay) {
                          if (cResult[11] === overlaySyncedWithUserTheme) {
                            if (cResult[12] === primaryColor) {
                              if (cResult[13] === secondaryColor) {
                                if (cResult[14] === sectionBox) {
                                  if (cResult[15] === stateFromStores) {
                                    if (cResult[16] === containerBackground) {
                                      return cResult[17];
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      let tmp19 = overlay;
                      if (stateFromStores) {
                        tmp19 = overlaySyncedWithUserTheme;
                      }
                      const result = UserProfileGradientUtils.calculateOverlayedColor(primaryColor, tmp19);
                      if (cResult[18] === overlay) {
                        if (cResult[19] === secondaryColor) {
                          let tmp21 = cResult[20];
                        }
                        const obj4 = {};
                        const merged = Object.assign(tmp16);
                        obj4.containerBackground = containerBackground;
                        obj4.gradientSecondaryBackground = tmp21;
                        obj4.avatarBackground = utils_ColorUtils.int2hex(result);
                        const objResult19 = utils_ColorUtils;
                        obj = UserProfileGradientUtils;
                        int2hexResult = utils_ColorUtils.int2hex(obj.calculateOverlayedColor(result, sectionBox));
                        obj4.statusBackground = int2hexResult;
                        cResult[9] = tmp16;
                        cResult[10] = overlay;
                        cResult[11] = overlaySyncedWithUserTheme;
                        cResult[12] = primaryColor;
                        cResult[13] = secondaryColor;
                        cResult[14] = sectionBox;
                        cResult[15] = stateFromStores;
                        cResult[16] = containerBackground;
                        cResult[17] = obj4;
                        const objResult20 = utils_ColorUtils;
                      }
                      const objResult18 = UserProfileGradientUtils;
                      const objResult21 = utils_ColorUtils;
                      const int2hexResult1 = objResult21.int2hex(
                        UserProfileGradientUtils.calculateOverlayedColor(secondaryColor, overlay),
                      );
                      cResult[18] = overlay;
                      cResult[19] = secondaryColor;
                      cResult[20] = int2hexResult1;
                      tmp21 = int2hexResult1;
                      const objResult22 = UserProfileGradientUtils;
                    }
                  }
                }
                return tmp16;
              }
            }
          }
        }
      }
      const obj5 = {
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
      cResult[8] = obj5;
      tmp16 = obj5;
      const objResult17 = useToken;
    }
  : (theme) => {
      ({ primaryColor, secondaryColor } = theme);
      const tmp2 = useThemeDefault();
      const profileThemeValues = useProfileThemeValues.useProfileThemeValues(theme.theme);
      const items = [AccessibilityStore];
      const obj3 = {
        gradientFallbackBackground: null,
        gradientSecondaryBackground: null,
        containerBackground: null,
        containerBorderColor: null,
        avatarBackground: null,
        statusBackground: null,
      };
      const stateFromStores = initialize.useStateFromStores(
        items,
        () => AccessibilityStore.syncProfileThemeWithUserTheme,
      );
      obj3.gradientFallbackBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
      obj3.gradientSecondaryBackground = useToken.useToken(nativeDefault.colors.USER_PROFILE_GRADIENT_BACKGROUND, tmp2);
      obj3.containerBackground = useToken.useToken(nativeDefault.colors.CARD_MUTED_BG, tmp2);
      obj3.containerBorderColor = useToken.useToken(nativeDefault.colors.BORDER_MUTED, tmp2);
      obj3.avatarBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER, tmp2);
      obj3.statusBackground = useToken.useToken(nativeDefault.colors.BACKGROUND_SURFACE_HIGH, tmp2);
      if (null != primaryColor) {
        if (null != secondaryColor) {
          if (null != profileThemeValues) {
            ({ overlay, sectionBox, overlaySyncedWithUserTheme } = profileThemeValues);
            let tmp7 = overlay;
            if (stateFromStores) {
              tmp7 = overlaySyncedWithUserTheme;
            }
            const result = UserProfileGradientUtils.calculateOverlayedColor(primaryColor, tmp7);
            const obj10 = {};
            const merged = Object.assign(obj3);
            obj10.containerBackground = tmp6;
            const tmp3Result = UserProfileGradientUtils;
            const tmp3Result6 = utils_ColorUtils;
            obj10.gradientSecondaryBackground = tmp3Result6.int2hex(
              UserProfileGradientUtils.calculateOverlayedColor(secondaryColor, overlay),
            );
            const tmp3Result7 = UserProfileGradientUtils;
            obj10.avatarBackground = utils_ColorUtils.int2hex(result);
            const tmp3Result8 = utils_ColorUtils;
            const tmp3Result9 = utils_ColorUtils;
            obj10.statusBackground = tmp3Result9.int2hex(
              UserProfileGradientUtils.calculateOverlayedColor(result, sectionBox),
            );
            return obj10;
          }
        }
      }
      return obj3;
    };
