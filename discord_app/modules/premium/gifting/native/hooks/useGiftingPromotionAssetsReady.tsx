// discord_app/modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx
import set from "set" /* 2 */;
import useThemeAndReducedMotionAwareAssetUrl from "useThemeAndReducedMotionAwareAssetUrl" /* 10304 */;
import usePreloadedAssetDefault from "usePreloadedAsset" /* 16170 */;

const result = set.fileFinishedImporting("modules/premium/gifting/native/hooks/useGiftingPromotionAssetsReady.tsx");

export default function useGiftingPromotionAssetsReady(asset, asset2) {
  let obj = useThemeAndReducedMotionAwareAssetUrl;
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
  const themeAndReducedMotionAwareAssetUrl1 = useThemeAndReducedMotionAwareAssetUrl.useThemeAndReducedMotionAwareAssetUrl(asset1);
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
  obj[1] = tmp9;
  return obj;
};