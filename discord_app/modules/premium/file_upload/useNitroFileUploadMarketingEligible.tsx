// === Module 19417: useNitroFileUploadMarketingEligible ===

// Module 19417 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1387 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 8282 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export function useNitroFileUploadAnnouncementEligible(MainViewTooltipActionSheets) {
  let isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets);
  }
  return isPremiumSubscriber;
}
export function useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets) {
  const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  return NitroFileUploadExperiments.useNonNitroFileUploadMarketingEnabled(MainViewTooltipActionSheets) && !isPremiumSubscriber;
}