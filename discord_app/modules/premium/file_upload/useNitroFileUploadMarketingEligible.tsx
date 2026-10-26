// === Module 18434: useNitroFileUploadMarketingEligible ===

// Module 18434 (useNitroFileUploadMarketingEligible)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import NitroFileUploadExperiments from "NitroFileUploadExperiments" /* 5032 */;
import useIsPremiumSubscriber from "useIsPremiumSubscriber" /* 11083 */;
import "ReactCompilerGating";
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNitroFileUploadAnnouncementEligible(arg0) {
  let isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
  }
  return isPremiumSubscriber;
}) : (function useNitroFileUploadAnnouncementEligible(arg0) {
  let isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
  }
  return isPremiumSubscriber;
});
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = tmp2;
export const useNitroFileUploadUpsellEligible = ReactCompilerGating.isReactCompilerEnabled() ? (function useNitroFileUploadUpsellEligible(arg0) {
  const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  return NitroFileUploadExperiments.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
}) : (function useNitroFileUploadUpsellEligible(arg0) {
  const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  return NitroFileUploadExperiments.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
});