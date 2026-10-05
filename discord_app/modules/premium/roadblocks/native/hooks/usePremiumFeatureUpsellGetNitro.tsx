// discord_app/modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx
import Constants from "../../../../../Constants.tsx";
import PremiumConstants from "../../../PremiumConstants.tsx";
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import actions_BillingActionCreators from "../../../../billing/actions/BillingActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../../native/openPremiumPlanSelectionActionSheet.tsx";
import UserOfferActionCreators from "../../../UserOfferActionCreators.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import SubscriptionStore from "../../../../../stores/billing/SubscriptionStore.tsx";
import UserOfferStore from "../../../../../stores/billing/UserOfferStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
const PremiumTypes = PremiumConstants.PremiumTypes;
const AnalyticsObjectTypes = Constants.AnalyticsObjectTypes;
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx");

export default function usePremiumFeatureUpsellGetNitro(arg0, arg1, page, arg3) {
  let closure_1;
  let closure_3;
  let closure_4;
  let loading;
  let closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg3;
  let items = arg4;
  if (arg4 === undefined) {
    items = [];
  }
  _slicedToArray = undefined;
  let analyticsLocations;
  [loading, _slicedToArray] = analyticsLocations.useState(false);
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  const ref = analyticsLocations.useRef(0);
  const items1 = [page, analyticsLocations, arg1, arg0, arg3];
  const onPress = analyticsLocations.useCallback(() => {
    let obj6;
    const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
    const result = SubscriptionStore.hasFetchedSubscriptions();
    let tmp3 = null == premiumTypeSubscription;
    if (!tmp3) {
      const _Object = Object;
      tmp3 = 0 === Object.keys(premiumTypeSubscription).length;
    }
    const tmp5 = UserOfferStore.hasFetchedOffer() && !UserOfferStore.hasAnyUnexpiredOffer();
    const isFetchingOfferResult = UserOfferStore.isFetchingOffer();
    if (result) {
      if (tmp3) {
        if (tmp5) {
          const obj5 = {
            analyticsLocation: obj6,
            analyticsLocations,
            premiumType: closure_0 ? PremiumTypes.TIER_0 : PremiumTypes.TIER_2,
          };
          obj6 = { page, objectType: AnalyticsObjectTypes.BUY };
          openPremiumPlanSelectionActionSheetDefault(obj5, closure_3);
        }
      }
    }
    if (!result) {
      if (ref.current < 5) {
        let resolved;
        let resolved1;
        closure_4(true);
        if (result) {
          resolved = Promise.resolve();
        } else {
          const obj2 = actions_BillingActionCreators;
          resolved = obj2.fetchSubscriptions();
        }
        const items = [resolved];
        if (isFetchingOfferResult) {
          resolved1 = Promise.resolve();
        } else {
          const obj3 = UserOfferActionCreators;
          resolved1 = obj3.fetchUserOffer("usePremiumFeatureUpsellGetNitro");
        }
        items[1] = resolved1;
        const allResult = all(items);
        const nextPromise = allResult.then(() => {
          ref.current = ref.current + 1;
          onPress();
        });
        const catchPromise = nextPromise.catch(() => {
          const presentFailedToast = page(closure_1_3[10]).presentFailedToast;
          page(closure_1_3[10]);
          const intl = closure_1_0(closure_1_3[11]).intl;
          presentFailedToast(intl.string(closure_1_0(closure_1_3[11]).t.R0RpRX));
        });
        catchPromise.finally(() => closure_1_4(false));
      }
    }
    closure_1();
    const obj4 = ChatInputUtils;
    const bestActiveInput = obj4.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
  }, items1);
  return { loading, onPress };
}
