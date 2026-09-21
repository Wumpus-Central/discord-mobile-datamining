// === Module 17419: useGiftingPromotionAssetsReady ===

// Module 17419 (useGiftingPromotionAssetsReady)
import MarketingComponentHooks from "MarketingComponentHooks" /* 11013 */;
import usePreloadedAssetDefault from "usePreloadedAsset" /* 17420 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default function useGiftingPromotionAssetsReady(asset, asset2) {
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(asset);
  const status = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl).status;
  let asset1;
  if (asset2 != null) {
    asset1 = asset2.asset;
  }
  const themeAndReducedMotionAwareAssetUrl1 = MarketingComponentHooks.useThemeAndReducedMotionAwareAssetUrl(asset1);
  const status2 = usePreloadedAssetDefault(themeAndReducedMotionAwareAssetUrl1).status;
  let tmp8 = "skipped" === status;
  if (!tmp8) {
    tmp8 = "preloaded" === status;
  }
  const obj2 = { isGiftCoachmarkAssetReady: tmp8, isGiftReminderAssetReady: null };
  let tmp9 = "skipped" === status2;
  if (!tmp9) {
    tmp9 = "preloaded" === status2;
  }
  obj2.isGiftReminderAssetReady = tmp9;
  return obj2;
};