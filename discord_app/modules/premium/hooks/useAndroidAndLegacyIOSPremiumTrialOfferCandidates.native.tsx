// discord_app/modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import ProductIds from "../native/ProductIds.android.tsx";
import useTrialOffer from "../useTrialOffer.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";

require = fn;
const PremiumConstants = fn(1373);
({
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c3,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_4,
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: hasOwnProperty,
  PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: metroRequire,
  PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_7,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: closure_8,
} = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx",
);

export const useAndroidAndLegacyIOSPremiumTrialOfferCandidates =
  function useAndroidAndLegacyIOSPremiumTrialOfferCandidates() {
    const items = [IAPStore];
    const offerIds = useStateFromStores.useStateFromStoresObject(items, () => ({
      isFetchingProducts: IAPStore.isFetchingProducts(),
      offerIds: IAPStore.getOfferIds(),
    })).offerIds;
    const trialOffer = useTrialOffer.useTrialOffer(timestampProducer);
    let values = Object.values(ProductIds.TrialIdToProductOfferId[timestampProducer]);
    let tmp4 = null;
    if (values.every((item) => offerIds.has(item))) {
      tmp4 = trialOffer;
    }
    let tmpResult = tmp(7449);
    const trialOffer1 = tmpResult.useTrialOffer(React3);
    values = Object.values(tmp(7240).TrialIdToProductOfferId[React3]);
    let tmp6 = null;
    if (values.every((item) => offerIds.has(item))) {
      tmp6 = trialOffer1;
    }
    tmpResult = tmp(7449);
    const trialOffer2 = tmpResult.useTrialOffer(React4);
    const values1 = Object.values(tmp(7240).TrialIdToProductOfferId[React4]);
    let tmp8 = null;
    if (values1.every((item) => offerIds.has(item))) {
      tmp8 = trialOffer2;
    }
    const trialOffer3 = useTrialOffer.useTrialOffer(hasOwnProperty);
    const values2 = Object.values(tmp(7240).TrialIdToProductOfferId[hasOwnProperty]);
    let tmp10 = null;
    if (values2.every((item) => offerIds.has(item))) {
      tmp10 = trialOffer3;
    }
    const tmpResult1 = useTrialOffer;
    const trialOffer4 = useTrialOffer.useTrialOffer(React5);
    const values3 = Object.values(tmp(7240).TrialIdToProductOfferId[React5]);
    let tmp12 = null;
    if (values3.every((item) => offerIds.has(item))) {
      tmp12 = trialOffer4;
    }
    const items1 = [tmp12, tmp4, tmp6, tmp8, ,];
    const tmpResult2 = useTrialOffer;
    const trialOffer5 = useTrialOffer.useTrialOffer(React6);
    const values4 = Object.values(tmp(7240).TrialIdToProductOfferId[React6]);
    let tmp14 = null;
    if (values4.every((item) => offerIds.has(item))) {
      tmp14 = trialOffer5;
    }
    items1[4] = tmp14;
    items1[5] = tmp10;
    return items1.find((item) => null != item);
  };
