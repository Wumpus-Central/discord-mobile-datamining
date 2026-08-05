import { set } from "../../utils/PlatformUtils.tsx";
import { isMetaQuest } from "MetaQuestUtils.android.tsx";
// discord_app/modules/device/BillingPlatformUtils.tsx
const result = require("set").fileFinishedImporting("modules/device/BillingPlatformUtils.tsx");

export const isPremiumGiftingSupported = function isPremiumGiftingSupported() {
  return !isMetaQuest /* isMetaQuest */.isMetaQuest();
};
export const isGooglePlayBillingSupported = function isGooglePlayBillingSupported() {
  let isAndroidResult = set /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = !isMetaQuest /* isMetaQuest */.isMetaQuest();
    const tmpResult = isMetaQuest /* isMetaQuest */;
  }
  return isAndroidResult;
};
export const isCollectibleGiftingSupported = function isCollectibleGiftingSupported() {
  return !isMetaQuest /* isMetaQuest */.isMetaQuest();
};
export const isSocialLayerStorefrontGiftingSupported = function isSocialLayerStorefrontGiftingSupported() {
  return !isMetaQuest /* isMetaQuest */.isMetaQuest();
};