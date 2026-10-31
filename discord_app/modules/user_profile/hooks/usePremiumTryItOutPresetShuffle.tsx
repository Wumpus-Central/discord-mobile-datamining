// discord_app/modules/user_profile/hooks/usePremiumTryItOutPresetShuffle.tsx
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import shared from "../../../design/shared.tsx";
import ProfilePendingImageTypes from "../../profile_customization/ProfilePendingImageTypes.tsx";
import UserProfileActionCreators from "../UserProfileActionCreators.tsx";
import ProfilePendingImageUtils from "../../profile_customization/ProfilePendingImageUtils.tsx";
import TryItOutPresets from "../../premium/roadblocks/utils/TryItOutPresets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserProfileSettingsStore from "../UserProfileSettingsStore.tsx";

require = fn;
const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/usePremiumTryItOutPresetShuffle.tsx");

export default function usePremiumTryItOutPresetShuffle() {
  const tmp = callback(5253)();
  const isThemeLightResult = shared.isThemeLight(tmp);
  require = isThemeLightResult;
  const items = [isThemeLightResult];
  callback = noop.useCallback((lastPreset) => {
    const tryItOutPresetConfig = TryItOutPresets.getTryItOutPresetConfig(lastPreset);
    const obj2 = { banner: null, themeColors: null, displayNameStyles: null, lastPreset: null };
    const obj3 = UserProfileActionCreators;
    const obj5 = ProfilePendingImageUtils;
    obj2.banner = obj5.createPendingImage({
      assetOrigin: ProfilePendingImageTypes.AssetOriginTypes.NEW_ASSET,
      imageUri: tryItOutPresetConfig.getBannerSrc(false),
      staticImageUri: tryItOutPresetConfig.getBannerSrc(true),
      description: tryItOutPresetConfig.getBannerAltText(),
      originalAsset: "ind",
    });
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
    const randomTryItOutPreset = TryItOutPresets.getRandomTryItOutPreset(
      UserProfileSettingsStore.getTryItOutChanges().tryItOutLastPreset,
    );
    const tryItOutPresetConfig = TryItOutPresets.getTryItOutPresetConfig(randomTryItOutPreset);
    AnalyticsUtilsDefault.track(AnalyticEvents.TRY_IT_OUT_PRESET_SHUFFLED, { preset: randomTryItOutPreset });
    callback(randomTryItOutPreset);
    const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
    const intl = util.intl;
    AccessibilityAnnouncer.announce(
      intl.formatToPlainString(util.t.M2Hj9s, { presetName: tryItOutPresetConfig.getName() }),
    );
  }, items2);
}
