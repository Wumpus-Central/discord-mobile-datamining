// discord_app/modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx
import PremiumConstants from "../PremiumConstants.tsx";
import NitroFileUploadExperiments from "../experiments/NitroFileUploadExperiments.tsx";
import useIsPremiumSubscriber from "../useIsPremiumSubscriber.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PremiumTypes = PremiumConstants.PremiumTypes;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = useIsPremiumSubscriber;
      let isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      const obj2 = NitroFileUploadExperiments;
      if (isPremiumSubscriber) {
        isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
      }
      return isPremiumSubscriber;
    }
  : (arg0) => {
      const obj = useIsPremiumSubscriber;
      let isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      const obj2 = NitroFileUploadExperiments;
      if (isPremiumSubscriber) {
        isPremiumSubscriber = obj2.useNitroFileUploadRolloutEnabled(arg0);
      }
      return isPremiumSubscriber;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = useIsPremiumSubscriber;
      const isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      const obj2 = NitroFileUploadExperiments;
      const tmp2 = obj2.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
      return tmp2;
    }
  : (arg0) => {
      const obj = useIsPremiumSubscriber;
      const isPremiumSubscriber = obj.useIsPremiumSubscriber(PremiumTypes.TIER_2);
      const obj2 = NitroFileUploadExperiments;
      const tmp2 = obj2.useNonNitroFileUploadMarketingEnabled(arg0) && !isPremiumSubscriber;
      return tmp2;
    };
const result = size.fileFinishedImporting("modules/premium/file_upload/useNitroFileUploadMarketingEligible.tsx");

export const useNitroFileUploadAnnouncementEligible = tmp2;
export const useNitroFileUploadUpsellEligible = tmp3;
