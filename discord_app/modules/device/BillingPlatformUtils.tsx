// discord_app/modules/device/BillingPlatformUtils.tsx
const result = require("set").fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !require("MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = require("../../utils/PlatformUtils.tsx") /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require("MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
    const tmpResult = require("MetaQuestUtils.android.tsx") /* isMetaQuest */;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !require("MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !require("MetaQuestUtils.android.tsx") /* isMetaQuest */.isMetaQuest();
};