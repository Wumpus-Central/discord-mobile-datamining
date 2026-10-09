// === Module 7164: useAndroidAndLegacyIOSPremiumTrialOfferCandidates ===

// Module 7164 (useAndroidAndLegacyIOSPremiumTrialOfferCandidates)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import ProductIds from "ProductIds" /* 7120 */;
import useTrialOffer from "useTrialOffer" /* 7165 */;
import IAPStore from "IAPStore" /* 7125 */;

require = fn;
const PremiumConstants = fn(1392);
({ PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c3, PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_4, PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: hasOwnProperty, PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: metroRequire, PREMIUM_TIER_2_REFERRAL_TRIAL_ID: closure_7, PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: closure_8 } = PremiumConstants);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetTrialOffer(arg0, arg1) {
  const trialOffer = useTrialOffer.useTrialOffer(arg0);
  const values = Object.values(ProductIds.TrialIdToProductOfferId[arg0]);
  let tmp2 = null;
  if (values.every((item) => set.has(item))) {
    tmp2 = trialOffer;
  }
  return tmp2;
}) : (function useGetTrialOffer(arg0, arg1) {
  const trialOffer = useTrialOffer.useTrialOffer(arg0);
  const values = Object.values(ProductIds.TrialIdToProductOfferId[arg0]);
  let tmp2 = null;
  if (values.every((item) => set.has(item))) {
    tmp2 = trialOffer;
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx");

export const useAndroidAndLegacyIOSPremiumTrialOfferCandidates = ReactCompilerGating.isReactCompilerEnabled() ? (function useAndroidAndLegacyIOSPremiumTrialOfferCandidates() {
  const cResult = c.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [IAPStore];
    const fn = function l() {
      return { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const offerIds = useStateFromStores.useStateFromStoresObject(tmp4, tmp5).offerIds;
  const tmp7 = closure_9(timestampProducer, offerIds);
  const tmp8 = closure_9(React3, offerIds);
  const tmp9 = closure_9(React4, offerIds);
  const tmp10 = closure_9(hasOwnProperty, offerIds);
  const tmp11 = closure_9(React5, offerIds);
  const tmp12 = closure_9(closure_1_8, offerIds);
  if (cResult[2] === tmp9) {
    if (cResult[3] === tmp10) {
      if (cResult[4] === tmp12) {
        if (cResult[5] === tmp8) {
          if (cResult[6] === tmp11) {
            if (cResult[7] === tmp7) {
              let tmp13 = cResult[8];
            }
            return tmp13;
          }
        }
      }
    }
  }
  const items1 = [tmp11, tmp7, tmp8, tmp9, tmp12, tmp10];
  const found = items1.find((item) => null != item);
  cResult[2] = tmp9;
  cResult[3] = tmp10;
  cResult[4] = tmp12;
  cResult[5] = tmp8;
  cResult[6] = tmp11;
  cResult[7] = tmp7;
  cResult[8] = found;
  tmp13 = found;
  const tmpResult = useStateFromStores;
}) : (function useAndroidAndLegacyIOSPremiumTrialOfferCandidates() {
  const items = [IAPStore];
  const offerIds = useStateFromStores.useStateFromStoresObject(items, () => ({ isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() })).offerIds;
  const tmp = closure_9(timestampProducer, offerIds);
  const tmp2 = closure_9(React3, offerIds);
  const tmp3 = closure_9(React4, offerIds);
  const items1 = [closure_9(React5, offerIds), tmp, tmp2, tmp3, closure_9(closure_1_8, offerIds), closure_9(hasOwnProperty, offerIds)];
  return items1.find((item) => null != item);
});