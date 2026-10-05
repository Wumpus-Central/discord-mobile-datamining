// discord_app/modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react from "../../../../_runtime/00576_react.js";
import ProductIds from "../native/ProductIds.android.tsx";
import useTrialOffer from "../useTrialOffer.tsx";
import IAPStore from "../../../stores/native/IAPStore.android.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({
  PREMIUM_TIER_2_LIKELIHOOD_TRIAL_ID: c3,
  PREMIUM_TIER_2_REACTIVATION_TRIAL_ID: closure_4,
  PREMIUM_TIER_0_LIKELIHOOD_TRIAL_ID: hasOwnProperty,
  PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID: metroRequire,
  PREMIUM_TIER_2_REFERRAL_TRIAL_ID: metroImportDefault,
  PREMIUM_TIER_2_HFU_TWO_WEEK_TRIAL_ID: metroImportAll,
} = PremiumConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0 = arg1;
      const obj = useTrialOffer;
      const trialOffer = obj.useTrialOffer(arg0);
      const values = Object.values(ProductIds.TrialIdToProductOfferId[arg0]);
      let tmp2 = null;
      if (values.every((item) => set.has(item))) {
        tmp2 = trialOffer;
      }
      return tmp2;
    }
  : (arg0, arg1) => {
      let closure_0 = arg1;
      const obj = useTrialOffer;
      const trialOffer = obj.useTrialOffer(arg0);
      const values = Object.values(ProductIds.TrialIdToProductOfferId[arg0]);
      let tmp2 = null;
      if (values.every((item) => set.has(item))) {
        tmp2 = trialOffer;
      }
      return tmp2;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      let obj = react;
      const cResult = obj.c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [IAPStore];
        class R {
          constructor() {
            const obj = { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
            return obj;
          }
        }
        cResult[0] = items;
        cResult[1] = R;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = useStateFromStores;
      const offerIds = tmpResult.useStateFromStoresObject(tmp4, R).offerIds;
      const tmp7 = closure_9(metroRequire, offerIds);
      const tmp8 = closure_9(_false, offerIds);
      const tmp9 = closure_9(React3, offerIds);
      const tmp10 = closure_9(hasOwnProperty, offerIds);
      const tmp11 = closure_9(metroImportDefault, offerIds);
      const tmp12 = closure_9(metroImportAll, offerIds);
      if (cResult[2] === tmp9) {
        if (cResult[3] === tmp10) {
          if (cResult[4] === tmp12) {
            if (cResult[5] === tmp8) {
              if (cResult[6] === tmp11) {
                let tmp13;
                if (cResult[7] === tmp7) {
                  tmp13 = cResult[8];
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
    }
  : () => {
      let obj = useStateFromStores;
      const items = [IAPStore];
      const offerIds = obj.useStateFromStoresObject(items, () => {
        const obj = { isFetchingProducts: IAPStore.isFetchingProducts(), offerIds: IAPStore.getOfferIds() };
        return obj;
      }).offerIds;
      const tmp = closure_9(metroRequire, offerIds);
      const tmp2 = closure_9(_false, offerIds);
      const items1 = [, , , , ,];
      const tmp3 = closure_9(React3, offerIds);
      const tmp4 = closure_9(hasOwnProperty, offerIds);
      items1[0] = closure_9(metroImportDefault, offerIds);
      items1[1] = tmp;
      items1[2] = tmp2;
      items1[3] = tmp3;
      items1[4] = closure_9(metroImportAll, offerIds);
      items1[5] = tmp4;
      return items1.find((item) => null != item);
    };
const result = size.fileFinishedImporting(
  "modules/premium/hooks/useAndroidAndLegacyIOSPremiumTrialOfferCandidates.native.tsx",
);

export const useAndroidAndLegacyIOSPremiumTrialOfferCandidates = tmp3;
