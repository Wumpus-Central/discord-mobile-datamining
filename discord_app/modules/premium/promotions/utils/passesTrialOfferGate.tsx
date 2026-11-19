// discord_app/modules/premium/promotions/utils/passesTrialOfferGate.tsx
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/promotions/utils/passesTrialOfferGate.tsx");

export default function passesTrialOfferGate(trialId, getUserTrialOffer) {
  trialId = undefined;
  if (trialId != null) {
    trialId = trialId.trialId;
  }
  if (null == trialId) {
    return true;
  } else {
    const userTrialOffer = getUserTrialOffer.getUserTrialOffer(trialId.trialId);
    return null != userTrialOffer && !userTrialOffer.hasExpired;
  }
}
