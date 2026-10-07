// discord_app/modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import NitroFileUploadExperiments from "../experiments/NitroFileUploadExperiments.tsx";
import useIsPremiumSubscriber from "../useIsPremiumSubscriber.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PremiumTypes = PremiumConstants.PremiumTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      if (isPremiumSubscriber) {
        isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
      }
      return isPremiumSubscriber;
    }
  : (arg0) => {
      let isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      if (isPremiumSubscriber) {
        isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
      }
      return isPremiumSubscriber;
    };
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = tmp2;
export const useNitroFileUploadUpsellEligible = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      return NitroFileUploadExperiments.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
    }
  : (arg0) => {
      const isPremiumSubscriber = useIsPremiumSubscriber.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      return NitroFileUploadExperiments.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
    };
