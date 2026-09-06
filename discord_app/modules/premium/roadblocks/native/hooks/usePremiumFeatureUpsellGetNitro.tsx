// discord_app/modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx
import ChatInputUtils from "../../../../../utils/native/ChatInputUtils.tsx";
import actions_BillingActionCreators from "../../../../billing/actions/BillingActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../../native/openPremiumPlanSelectionActionSheet.tsx";
import UserOfferActionCreators from "../../../UserOfferActionCreators.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import SubscriptionStore from "../../../../../stores/billing/SubscriptionStore.tsx";
import UserOfferStore from "../../../../../stores/billing/UserOfferStore.tsx";

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const AnalyticsObjectTypes = fn(1074).AnalyticsObjectTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx");

export default function usePremiumFeatureUpsellGetNitro(arg0, arg1, page, arg3) {
  closure_0 = arg0;
  importDefault = arg1;
  dependencyMap = arg3;
  let items = arg4;
  if (arg4 === undefined) {
    items = [];
  }
  _slicedToArray = undefined;
  let analyticsLocations;
  const loading = _slicedToArray(analyticsLocations.useState(false), 2);
  _slicedToArray = loading[1];
  analyticsLocations = useAnalyticsLocationsDefault(items).analyticsLocations;
  analyticsLocations.useRef(0);
  const items1 = [page, analyticsLocations, arg1, arg0, arg3];
  const onPress = analyticsLocations.useCallback(() => {
    const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription(false);
    const result = SubscriptionStore.hasFetchedSubscriptions();
    let tmp3 = null == premiumTypeSubscription;
    if (!tmp3) {
      const _Object = Object;
      tmp3 = 0 === Object.keys(premiumTypeSubscription).length;
    }
    let obj = UserOfferStore;
    const isFetchingOfferResult = obj.isFetchingOffer();
    if (result) {
      if (tmp3) {
        if (tmp5) {
          obj = { analyticsLocation: null, analyticsLocations: null, premiumType: null };
          obj = { page, objectType: AnalyticsObjectTypes.BUY };
          obj.analyticsLocation = obj;
          obj.analyticsLocations = analyticsLocations;
          obj.premiumType = closure_0 ? PremiumTypes.TIER_0 : PremiumTypes.TIER_2;
          openPremiumPlanSelectionActionSheetDefault(obj, dependencyMap);
        }
      }
    }
    if (!result) {
      if (ref.current < 5) {
        closure_4(true);
        if (result) {
          let resolved = Promise.resolve();
        } else {
          resolved = actions_BillingActionCreators.fetchSubscriptions();
        }
        const items = [resolved];
        if (isFetchingOfferResult) {
          let resolved1 = Promise.resolve();
        } else {
          resolved1 = UserOfferActionCreators.fetchUserOffer("usePremiumFeatureUpsellGetNitro");
        }
        items[1] = resolved1;
        const allPromises = Promise.all(items);
        const nextPromise = Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          onPress();
        });
        Promise.all(items)
          .then(() => {
            ref.current = ref.current + 1;
            onPress();
          })
          .catch(() => {
            const intl = closure_1_0(1114).intl;
            page(4258).presentFailedToast(intl.string(closure_1_0(1114).t.R0RpRX));
          })
          .finally(() => closure_1_4(false));
        const catchPromise = Promise.all(items)
          .then(() => {
            ref.current = ref.current + 1;
            onPress();
          })
          .catch(() => {
            const intl = closure_1_0(1114).intl;
            page(4258).presentFailedToast(intl.string(closure_1_0(1114).t.R0RpRX));
          });
      }
    }
    closure_1();
    tmp5 = UserOfferStore.hasFetchedOffer() && !obj.hasAnyUnexpiredOffer();
    const bestActiveInput = ChatInputUtils.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
  }, items1);
  return { loading: loading[0], onPress };
}
