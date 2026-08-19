// discord_app/modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx
import contextDefault from "../../../../app_analytics/useAnalyticsLocations.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../../_runtime/00019_noop.js";
import reset from "../../../../../stores/billing/SubscriptionStore.tsx";
import emitChanges from "../../../../../stores/billing/UserOfferStore.tsx";
import { PremiumTypes } from "../../../PremiumConstants.tsx";
import { AnalyticsObjectTypes } from "../../../../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx");

export default function usePremiumFeatureUpsellGetNitro(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  importDefault = arg1;
  closure_2 = arg2;
  dependencyMap = arg3;
  let items = arg4;
  if (arg4 === undefined) {
    items = [];
  }
  let callback;
  let analyticsLocations;
  const loading = callback(analyticsLocations.useState(false), 2);
  callback = loading[1];
  analyticsLocations = contextDefault(items).analyticsLocations;
  closure_6 = analyticsLocations.useRef(0);
  const items1 = [arg2, analyticsLocations, arg1, arg0, arg3];
  const onPress = analyticsLocations.useCallback(() => {
    const premiumTypeSubscription = ref.getPremiumTypeSubscription(false);
    const result = ref.hasFetchedSubscriptions();
    let tmp3 = null == premiumTypeSubscription;
    if (!tmp3) {
      const _Object = Object;
      tmp3 = 0 === Object.keys(premiumTypeSubscription).length;
    }
    let obj = onPress;
    const tmp5 = onPress.hasFetchedOffer() && !obj.hasAnyUnexpiredOffer();
    if (result) {
      if (tmp3) {
        if (tmp5) {
          obj = { page: null, objectType: null };
          obj[0] = closure_2;
          obj[1] = AnalyticsObjectTypes.BUY;
          obj[0] = obj;
          obj[1] = analyticsLocations;
          obj[2] = callback ? PremiumTypes.TIER_0 : PremiumTypes.TIER_2;
          callback2(7393)(obj, dependencyMap);
        }
      }
    }
    if (!result) {
      if (ref.current < 5) {
        callback3(true);
        if (result) {
          let resolved = Promise.resolve();
        } else {
          resolved = callback(4466).fetchSubscriptions();
          const obj2 = callback(4466);
        }
        const items = [resolved, ];
        if (isFetchingOfferResult) {
          let resolved1 = Promise.resolve();
        } else {
          resolved1 = callback(7876).fetchUserOffer("usePremiumFeatureUpsellGetNitro");
          const obj3 = callback(7876);
        }
        items[1] = resolved1;
        const allPromises = Promise.all(items);
        const nextPromise = Promise.all(items).then((result) => {
          ref.current = ref.current + 1;
          callback4();
        });
        Promise.all(items).then((result) => {
          ref.current = ref.current + 1;
          callback4();
        }).catch((error) => {
          const intl = callback(1236).intl;
          callback2(4093).presentFailedToast(intl.string(callback(1236).t.R0RpRX));
        }).finally(() => callback3(false));
        const catchPromise = Promise.all(items).then((result) => {
          ref.current = ref.current + 1;
          callback4();
        }).catch((error) => {
          const intl = callback(1236).intl;
          callback2(4093).presentFailedToast(intl.string(callback(1236).t.R0RpRX));
        });
      }
    }
    callback2();
    isFetchingOfferResult = obj.isFetchingOffer();
    const bestActiveInput = callback(4237).getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
    const obj4 = callback(4237);
  }, items1);
  return { loading: loading[0], onPress };
};