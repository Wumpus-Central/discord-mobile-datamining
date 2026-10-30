// === Module 2060: BillingPlatformUtils ===

// Module 2060 (BillingPlatformUtils)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export function isPremiumGiftingSupported() {
  return !MetaQuestUtils.isMetaQuest();
}
export function isGooglePlayBillingSupported() {
  let isAndroidResult = PlatformUtils.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !MetaQuestUtils.isMetaQuest();
    const tmpResult = MetaQuestUtils;
  }
  return isAndroidResult;
}
export function isCollectibleGiftingSupported() {
  return !MetaQuestUtils.isMetaQuest();
}
export function isSocialLayerStorefrontGiftingSupported() {
  return !MetaQuestUtils.isMetaQuest();
}
export function isSocialLayerStorefrontPurchaseSupported() {
  return !MetaQuestUtils.isMetaQuest();
}