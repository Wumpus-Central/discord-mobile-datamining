// === Module 9967: usePremiumFeatureUpsellGetNitro ===

// Module 9967 (usePremiumFeatureUpsellGetNitro)
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 4884 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7422 */;
import UserOfferActionCreators from "UserOfferActionCreators" /* 8062 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import UserOfferStore from "UserOfferStore" /* 7450 */;

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
    const tmp5 = UserOfferStore.hasFetchedOffer() && !obj.hasAnyUnexpiredOffer();
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
        const items = [resolved, ];
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
        Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          onPress();
        }).catch(() => {
          const intl = closure_1_0(1114).intl;
          page(4258).presentFailedToast(intl.string(closure_1_0(1114).t.R0RpRX));
        }).finally(() => closure_1_4(false));
        const catchPromise = Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          onPress();
        }).catch(() => {
          const intl = closure_1_0(1114).intl;
          page(4258).presentFailedToast(intl.string(closure_1_0(1114).t.R0RpRX));
        });
      }
    }
    closure_1();
    isFetchingOfferResult = obj.isFetchingOffer();
    const bestActiveInput = ChatInputUtils.getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
  }, items1);
  return { loading: loading[0], onPress };
};