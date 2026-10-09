// === Module 14826: usePremiumTryItOutPresetShuffle ===

// Module 14826 (usePremiumTryItOutPresetShuffle)
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 6677 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8275 */;
import ProfilePendingImageUtils from "ProfilePendingImageUtils" /* 14765 */;
import TryItOutPresets from "TryItOutPresets" /* 14827 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8268 */;

require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePremiumTryItOutPresetShuffle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function usePremiumTryItOutPresetShuffle() {
  const cResult = require("c").c(9);
  const tmp4 = useThemeDefault();
  if (cResult[0] !== tmp4) {
    const isThemeLightResult = require("shared").isThemeLight(tmp4);
    cResult[0] = tmp4;
    cResult[1] = isThemeLightResult;
    let tmp5 = isThemeLightResult;
    const tmpResult = require("shared");
  } else {
    tmp5 = cResult[1];
  }
  _require = tmp5;
  if (cResult[2] !== tmp5) {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        obj3 = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        obj5 = closure_0(closure_2[9]);
        obj7 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj5.createPendingImage(obj7);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = obj3.setTryItOutPreset(obj1);
        return;
      }
    }
    cResult[2] = tmp5;
    cResult[3] = T;
  } else {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        obj3 = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        obj5 = closure_0(closure_2[9]);
        obj7 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj5.createPendingImage(obj7);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = obj3.setTryItOutPreset(obj1);
        return;
      }
    }
  }
  importDefault = T;
  if (cResult[4] !== T) {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        obj3 = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        obj5 = closure_0(closure_2[9]);
        obj7 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj5.createPendingImage(obj7);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = obj3.setTryItOutPreset(obj1);
        return;
      }
    }
    const items = [T];
    cResult[4] = T;
    cResult[5] = tmp10;
    cResult[6] = items;
    let tmp9 = items;
  } else {
    class T {
      constructor(arg0) {
        obj = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj.getTryItOutPresetConfig(arg0);
        obj3 = closure_0(closure_2[8]);
        obj1 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
        obj5 = closure_0(closure_2[9]);
        obj7 = { assetOrigin: closure_0(closure_2[10]).AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" };
        obj1.banner = obj5.createPendingImage(obj7);
        themeColors = tryItOutPresetConfig.themeColors;
        obj1.themeColors = closure_0 ? themeColors.light : themeColors.dark;
        obj1.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
        obj1.lastPreset = arg0;
        setTryItOutPresetResult = obj3.setTryItOutPreset(obj1);
        return;
      }
    }
    tmp9 = cResult[6];
  }
  const effect = noop.useEffect(tmp10, tmp9);
  if (cResult[7] !== T) {
    class I {
      constructor() {
        obj = closure_0(closure_2[7]);
        randomTryItOutPreset = obj.getRandomTryItOutPreset(closure_4.getTryItOutChanges().tryItOutLastPreset);
        obj2 = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
        obj4 = closure_1(closure_2[11]);
        trackResult = obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
        tmp3 = closure_1(randomTryItOutPreset);
        AccessibilityAnnouncer = closure_0(closure_2[6]).AccessibilityAnnouncer;
        intl = closure_0(closure_2[12]).intl;
        obj1 = { presetName: tryItOutPresetConfig.getName() };
        announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.M2Hj9s, obj1));
        return;
      }
    }
    cResult[7] = T;
    cResult[8] = I;
  } else {
    class I {
      constructor() {
        obj = closure_0(closure_2[7]);
        randomTryItOutPreset = obj.getRandomTryItOutPreset(closure_4.getTryItOutChanges().tryItOutLastPreset);
        obj2 = closure_0(closure_2[7]);
        tryItOutPresetConfig = obj2.getTryItOutPresetConfig(randomTryItOutPreset);
        obj4 = closure_1(closure_2[11]);
        trackResult = obj4.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
        tmp3 = closure_1(randomTryItOutPreset);
        AccessibilityAnnouncer = closure_0(closure_2[6]).AccessibilityAnnouncer;
        intl = closure_0(closure_2[12]).intl;
        obj1 = { presetName: tryItOutPresetConfig.getName() };
        announceResult = AccessibilityAnnouncer.announce(intl.formatToPlainString(closure_0(closure_2[12]).t.M2Hj9s, obj1));
        return;
      }
    }
  }
  return I;
}) : (function usePremiumTryItOutPresetShuffle() {
  const tmp = callback(4992)();
  const isThemeLightResult = shared.isThemeLight(tmp);
  const require = isThemeLightResult;
  const items = [isThemeLightResult];
  callback = noop.useCallback((lastPreset) => {
    const tryItOutPresetConfig = TryItOutPresets.getTryItOutPresetConfig(lastPreset);
    const obj2 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
    const obj3 = UserProfileActionCreators;
    const obj5 = ProfilePendingImageUtils;
    obj2.banner = obj5.createPendingImage({ assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "gap" });
    const themeColors = tryItOutPresetConfig.themeColors;
    obj2.themeColors = isThemeLightResult ? themeColors.light : themeColors.dark;
    obj2.displayNameStyles = tryItOutPresetConfig.displayNameStyles;
    obj2.lastPreset = lastPreset;
    obj3.setTryItOutPreset(obj2);
  }, items);
  const items1 = [callback];
  const effect = noop.useEffect(() => {
    if (!UserProfileSettingsStore.hasTryItOutChanges()) {
      callback(TryItOutPresets.getRandomTryItOutPreset());
    }
  }, items1);
  const items2 = [callback];
  return noop.useCallback(() => {
    const randomTryItOutPreset = TryItOutPresets.getRandomTryItOutPreset(UserProfileSettingsStore.getTryItOutChanges().tryItOutLastPreset);
    const tryItOutPresetConfig = TryItOutPresets.getTryItOutPresetConfig(randomTryItOutPreset);
    AnalyticsUtilsDefault.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
    callback(randomTryItOutPreset);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(util.t.M2Hj9s, { presetName: tryItOutPresetConfig.getName() }));
  }, items2);
});