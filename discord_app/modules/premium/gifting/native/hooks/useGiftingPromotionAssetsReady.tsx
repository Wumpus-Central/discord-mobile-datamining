// discord_app/modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx
import MarketingComponentHooks from "../../../promotions/MarketingComponentHooks.tsx";
import usePreloadedAssetDefault from "../../../../image/usePreloadedAsset.native.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default function useGiftingPromotionAssetsReady(asset, asset2) {
  let obj = MarketingComponentHooks;
  asset = undefined;
  if (asset != null) {
    asset = asset.asset;
  }
  const themeAndReducedMotionAwareAssetUrl = obj.useThemeAndReducedMotionAwareAssetUrl(asset);
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
  obj = { isGiftCoachmarkAssetReady: tmp8, isGiftReminderAssetReady: null };
  let tmp9 = "skipped" === status2;
  if (!tmp9) {
    tmp9 = "preloaded" === status2;
  }
  obj.isGiftReminderAssetReady = tmp9;
  return obj;
}
