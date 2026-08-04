// discord_app/modules/device/BillingPlatformUtils.tsx
const result = require("set").fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = require(500) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !require(1577) /* isMetaQuest */.isMetaQuest();
    const tmpResult = require(1577) /* isMetaQuest */;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !require(1577) /* isMetaQuest */.isMetaQuest();
};