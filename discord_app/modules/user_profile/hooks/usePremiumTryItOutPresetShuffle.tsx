// === Module 16464: usePremiumTryItOutPresetShuffle ===

// Module 16464 (usePremiumTryItOutPresetShuffle)
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import shared from "shared" /* 5016 */;
import ProfilePendingImageTypes from "ProfilePendingImageTypes" /* 7154 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 8730 */;
import ProfilePendingImageUtils from "ProfilePendingImageUtils" /* 16393 */;
import TryItOutPresets from "TryItOutPresets" /* 16465 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePremiumTryItOutPresetShuffle.tsx");

export default function usePremiumTryItOutPresetShuffle() {
  const tmp = callback(5248)();
  const isThemeLightResult = shared.isThemeLight(tmp);
  require = isThemeLightResult;
  const items = [isThemeLightResult];
  callback = noop.useCallback((lastPreset) => {
    const tryItOutPresetConfig = TryItOutPresets.getTryItOutPresetConfig(lastPreset);
    const obj2 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
    const obj3 = UserProfileActionCreators;
    const obj5 = ProfilePendingImageUtils;
    obj2.banner = obj5.createPendingImage({ assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET, imageUri: tryItOutPresetConfig.getBannerSrc(false), staticImageUri: tryItOutPresetConfig.getBannerSrc(true), description: tryItOutPresetConfig.getBannerAltText(), originalAsset: "find" });
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
};