// === Module 4052: isPremiumGiftingSupported ===

// Module 4052 (isPremiumGiftingSupported)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import isMetaQuest from "isMetaQuest" /* 1625 */;

const result = obj132.fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !isMetaQuest.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = obj1322.isAndroid();
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