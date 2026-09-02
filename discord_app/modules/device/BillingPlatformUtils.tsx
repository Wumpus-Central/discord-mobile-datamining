// === Module 4152: isPremiumGiftingSupported ===

// Module 4152 (isPremiumGiftingSupported)
import set from "set" /* 2 */;
import set2 from "set" /* 1234 */;
import isMetaQuest from "isMetaQuest" /* 1623 */;

const result = set.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = set2.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !isMetaQuest.isMetaQuest();
    const tmpResult = isMetaQuest;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isSocialLayerStorefrontPurchaseSupported = function isSocialLayerStorefrontPurchaseSupported() {
  return !isMetaQuest.isMetaQuest();
};