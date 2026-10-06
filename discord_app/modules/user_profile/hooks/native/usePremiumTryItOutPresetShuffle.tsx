// discord_app/modules/user_profile/hooks/native/usePremiumTryItOutPresetShuffle.tsx
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import themes from "../../../../design/utils/shared/themes.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import AccessibilityAnnouncer2 from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import ProfilePendingImageTypes from "../../../profile_customization/ProfilePendingImageTypes.tsx";
import UserProfileActionCreators from "../../UserProfileActionCreators.tsx";
import ProfilePendingImageUtils from "../../../profile_customization/ProfilePendingImageUtils.tsx";
import TryItOutPresets from "../../../premium/roadblocks/utils/TryItOutPresets.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserProfileSettingsStore from "../../UserProfileSettingsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require, announceResult, obj1, obj6, setTryItOutPresetResult, tmp3, trackResult;

const AnalyticEvents = Constants.AnalyticEvents;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let tmp4;
      let tmp8;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(9);
      let obj2 = require("native");
      const theme = obj2.useThemeContext().theme;
      if (cResult[0] !== theme) {
        const tmpResult = tmp(4593);
        const isThemeLightResult = tmpResult.isThemeLight(theme);
        cResult[0] = theme;
        cResult[1] = isThemeLightResult;
        tmp4 = isThemeLightResult;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] !== tmp4) {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_2[7]);
            tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
            tmp = closure_0(closure_2[8]);
            obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
            setTryItOutPreset = tmp.setTryItOutPreset;
            obj4 = closure_0(closure_2[9]);
            obj6 = {
              assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET,
              imageUri: tryItOutPresetConfig.getBannerSrc(false),
              staticImageUri: tryItOutPresetConfig.getBannerSrc(true),
              description: tryItOutPresetConfig.getBannerAltText(),
              originalAsset: "formatToPlainString",
            };
            obj1.banner = obj4.createPendingImage(obj6);
            themeColors = tryItOutPresetConfig.themeColors;
            obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
            obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
            obj1.lastPreset = arg0;
            setTryItOutPresetResult = setTryItOutPreset(obj1);
            return;
          }
        }
        cResult[2] = tmp4;
        cResult[3] = T;
      } else {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_2[7]);
            tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
            tmp = closure_0(closure_2[8]);
            obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
            setTryItOutPreset = tmp.setTryItOutPreset;
            obj4 = closure_0(closure_2[9]);
            obj6 = {
              assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET,
              imageUri: tryItOutPresetConfig.getBannerSrc(false),
              staticImageUri: tryItOutPresetConfig.getBannerSrc(true),
              description: tryItOutPresetConfig.getBannerAltText(),
              originalAsset: "formatToPlainString",
            };
            obj1.banner = obj4.createPendingImage(obj6);
            themeColors = tryItOutPresetConfig.themeColors;
            obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
            obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
            obj1.lastPreset = arg0;
            setTryItOutPresetResult = setTryItOutPreset(obj1);
            return;
          }
        }
      }
      T = tmp6;
      if (cResult[4] !== tmp6) {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_2[7]);
            tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
            tmp = closure_0(closure_2[8]);
            obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
            setTryItOutPreset = tmp.setTryItOutPreset;
            obj4 = closure_0(closure_2[9]);
            obj6 = {
              assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET,
              imageUri: tryItOutPresetConfig.getBannerSrc(false),
              staticImageUri: tryItOutPresetConfig.getBannerSrc(true),
              description: tryItOutPresetConfig.getBannerAltText(),
              originalAsset: "formatToPlainString",
            };
            obj1.banner = obj4.createPendingImage(obj6);
            themeColors = tryItOutPresetConfig.themeColors;
            obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
            obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
            obj1.lastPreset = arg0;
            setTryItOutPresetResult = setTryItOutPreset(obj1);
            return;
          }
        }
        const items = [tmp6];
        cResult[4] = tmp6;
        cResult[5] = tmp9;
        cResult[6] = items;
        tmp8 = items;
      } else {
        class T {
          constructor(arg0) {
            obj = closure_0(closure_2[7]);
            tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
            tmp = closure_0(closure_2[8]);
            obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
            setTryItOutPreset = tmp.setTryItOutPreset;
            obj4 = closure_0(closure_2[9]);
            obj6 = {
              assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET,
              imageUri: tryItOutPresetConfig.getBannerSrc(false),
              staticImageUri: tryItOutPresetConfig.getBannerSrc(true),
              description: tryItOutPresetConfig.getBannerAltText(),
              originalAsset: "formatToPlainString",
            };
            obj1.banner = obj4.createPendingImage(obj6);
            themeColors = tryItOutPresetConfig.themeColors;
            obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
            obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
            obj1.lastPreset = arg0;
            setTryItOutPresetResult = setTryItOutPreset(obj1);
            return;
          }
        }
        tmp8 = cResult[6];
      }
      const effect = react.useEffect(tmp9, tmp8);
      if (cResult[7] !== tmp6) {
        class I {
          constructor() {
            tryItOutLastPreset = closure_4.getTryItOutChanges().tryItOutLastPreset;
            obj = closure_0(closure_2[7]);
            randomTryItOutPreset = obj.getRandomTryItOutPreset(tryItOutLastPreset);
            obj2 = closure_0(closure_2[7]);
            tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
            obj4 = closure_1(closure_2[11]);
            trackResult = obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
            tmp3 = closure_1(randomTryItOutPreset);
            AccessibilityAnnouncer = closure_0(closure_2[12]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[13]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj1 = { presetName: null };
            M2Hj9s = closure_0(closure_2[13]).t.M2Hj9s;
            obj1.presetName = tryItOutPresetConfig.getName();
            announceResult = announce(formatToPlainString(M2Hj9s, obj1));
            return;
          }
        }
        cResult[7] = tmp6;
        cResult[8] = I;
      } else {
        class I {
          constructor() {
            tryItOutLastPreset = closure_4.getTryItOutChanges().tryItOutLastPreset;
            obj = closure_0(closure_2[7]);
            randomTryItOutPreset = obj.getRandomTryItOutPreset(tryItOutLastPreset);
            obj2 = closure_0(closure_2[7]);
            tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
            obj4 = closure_1(closure_2[11]);
            trackResult = obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
            tmp3 = closure_1(randomTryItOutPreset);
            AccessibilityAnnouncer = closure_0(closure_2[12]).AccessibilityAnnouncer;
            announce = AccessibilityAnnouncer.announce;
            intl = closure_0(closure_2[13]).intl;
            formatToPlainString = intl.formatToPlainString;
            obj1 = { presetName: null };
            M2Hj9s = closure_0(closure_2[13]).t.M2Hj9s;
            obj1.presetName = tryItOutPresetConfig.getName();
            announceResult = announce(formatToPlainString(M2Hj9s, obj1));
            return;
          }
        }
      }
      return I;
    }
  : () => {
      let obj = native;
      const theme = obj.useThemeContext().theme;
      let obj2 = themes;
      const isThemeLightResult = obj2.isThemeLight(theme);
      const require = isThemeLightResult;
      const items = [isThemeLightResult];
      const callback = react.useCallback((lastPreset) => {
        let obj3;
        let obj4;
        let themeColors;
        const obj = TryItOutPresets;
        const tryItOutPresetConfig = obj.getTryItOutPresetConfig(lastPreset);
        const obj2 = {
          banner: obj4.createPendingImage(obj3),
          themeColors: require ? themeColors.light : themeColors.dark,
          displayNameStyles: tryItOutPresetConfig.displayNameStyles,
          lastPreset,
        };
        const setTryItOutPreset = UserProfileActionCreators.setTryItOutPreset;
        UserProfileActionCreators;
        obj4 = ProfilePendingImageUtils;
        themeColors = tryItOutPresetConfig.themeColors;
        obj3 = {
          assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET,
          imageUri: tryItOutPresetConfig.getBannerSrc(false),
          staticImageUri: tryItOutPresetConfig.getBannerSrc(true),
          description: tryItOutPresetConfig.getBannerAltText(),
          originalAsset: "formatToPlainString",
        };
        setTryItOutPreset(obj2);
      }, items);
      const items1 = [callback];
      const effect = react.useEffect(() => {
        if (!UserProfileSettingsStore.hasTryItOutChanges()) {
          const obj = TryItOutPresets;
          callback(obj.getRandomTryItOutPreset());
        }
      }, items1);
      const items2 = [callback];
      return react.useCallback(() => {
        const tryItOutLastPreset = UserProfileSettingsStore.getTryItOutChanges().tryItOutLastPreset;
        const obj = TryItOutPresets;
        const randomTryItOutPreset = obj.getRandomTryItOutPreset(tryItOutLastPreset);
        const obj2 = TryItOutPresets;
        const tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
        callback(randomTryItOutPreset);
        const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
        const announce = AccessibilityAnnouncer.announce;
        const intl = intl2.intl;
        const formatToPlainString = intl.formatToPlainString;
        const obj3 = { presetName: tryItOutPresetConfig.getName() };
        const M2Hj9s = intl2.t.M2Hj9s;
        announce(formatToPlainString(M2Hj9s, obj3));
      }, items2);
    };
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/usePremiumTryItOutPresetShuffle.tsx");

export default tmp2;
