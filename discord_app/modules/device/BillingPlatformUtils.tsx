// discord_app/modules/device/BillingPlatformUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import obj1322 from "../../utils/PlatformUtils.tsx";
import isMetaQuest from "MetaQuestUtils.android.tsx";

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