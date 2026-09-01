// discord_app/modules/premium/hooks/usePremiumTrialOffer.android.tsx
import set from "../../../../_runtime/00002_set.js";
import useAndroidAndLegacyIOSPremiumTrialOfferCandidates from "useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx";

const result = set.fileFinishedImporting("modules/premium/hooks/usePremiumTrialOffer.android.tsx");

export const usePremiumTrialOffer = function usePremiumTrialOffer(arg0) {
  return useAndroidAndLegacyIOSPremiumTrialOfferCandidates.useAndroidAndLegacyIOSPremiumTrialOfferCandidates(arg0);
};
