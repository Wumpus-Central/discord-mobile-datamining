// discord_app/modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import NitroFileUploadExperiments from "../experiments/NitroFileUploadExperiments.tsx";
import useIsPremiumSubscriber from "../useIsPremiumSubscriber.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PremiumTypes = PremiumConstants.PremiumTypes;
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = function useNitroFileUploadAnnouncementEligible(
  MainViewTooltipActionSheets,
) {
  let isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  if (isPremiumSubscriber) {
    isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(MainViewTooltipActionSheets);
  }
  return isPremiumSubscriber;
};
export const useNitroFileUploadUpsellEligible = function useNitroFileUploadUpsellEligible(MainViewTooltipActionSheets) {
  const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
  return (
    NitroFileUploadExperiments.useNonNitroFileUploadMarketingEnabled(MainViewTooltipActionSheets) &&
    !isPremiumSubscriber
  );
};
