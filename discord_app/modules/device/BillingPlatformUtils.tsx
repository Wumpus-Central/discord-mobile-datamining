// === Module 4231: BillingPlatformUtils ===

// Module 4231 (BillingPlatformUtils)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !MetaQuestUtils.isMetaQuest();
    const tmpResult = MetaQuestUtils;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !MetaQuestUtils.isMetaQuest();
};
export const isSocialLayerStorefrontPurchaseSupported = function isSocialLayerStorefrontPurchaseSupported() {
  return !MetaQuestUtils.isMetaQuest();
};