// discord_app/modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import reset from "reset";
import emitChanges from "emitChanges";
import { PremiumTypes } from "GuildFeatures";
import { AnalyticsObjectTypes } from "ME";
import { context } from "../../../../app_analytics/useAnalyticsLocations.tsx";

const require = arg1;
let result = require("reset").fileFinishedImporting("modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx");

export default function usePremiumFeatureUpsellGetNitro(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  const importDefault = arg1;
  let closure_2 = arg2;
  const dependencyMap = arg3;
  let items = arg4;
  if (arg4 === undefined) {
    items = [];
  }
  let callback;
  let analyticsLocations;
  let reset;
  let onPress;
  const loading = callback(analyticsLocations.useState(false), 2);
  callback = loading[1];
  analyticsLocations = context(items).analyticsLocations;
  reset = analyticsLocations.useRef(0);
  const items1 = [arg2, analyticsLocations, arg1, arg0, arg3];
  onPress = analyticsLocations.useCallback(() => {
    const premiumTypeSubscription = ref.getPremiumTypeSubscription(false);
    const result = ref.hasFetchedSubscriptions();
    let tmp3 = null == premiumTypeSubscription;
    if (!tmp3) {
      const _Object = Object;
      tmp3 = 0 === Object.keys(premiumTypeSubscription).length;
    }
    let obj = onPress;
    const isFetchingOfferResult = obj.isFetchingOffer();
    if (result) {
      if (tmp3) {
        if (tmp5) {
          obj = { analyticsLocation: null, analyticsLocations: null, premiumType: null };
          obj = { page: null, objectType: null };
          obj[0] = closure_2;
          obj[1] = outer1_9.BUY;
          obj[0] = obj;
          obj[1] = analyticsLocations;
          obj[2] = callback ? outer1_8.TIER_0 : outer1_8.TIER_2;
          callback2(6954)(obj, dependencyMap);
        }
      }
    }
    if (!result) {
      if (ref.current < 5) {
        callback3(true);
        if (result) {
          let resolved = Promise.resolve();
        } else {
          resolved = callback(4686).fetchSubscriptions();
          const obj2 = callback(4686);
        }
        const items = [resolved, ];
        if (isFetchingOfferResult) {
          let resolved1 = Promise.resolve();
        } else {
          resolved1 = callback(7658).fetchUserOffer("usePremiumFeatureUpsellGetNitro");
          const obj3 = callback(7658);
        }
        items[1] = resolved1;
        const allPromises = Promise.all(items);
        const nextPromise = Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          callback4();
        });
        Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          callback4();
        }).catch(() => {
          const intl = callback(1236).intl;
          callback2(4061).presentFailedToast(intl.string(callback(1236).t.R0RpRX));
        }).finally(() => callback3(false));
        const catchPromise = Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          callback4();
        }).catch(() => {
          const intl = callback(1236).intl;
          callback2(4061).presentFailedToast(intl.string(callback(1236).t.R0RpRX));
        });
      }
    }
    callback2();
    tmp5 = onPress.hasFetchedOffer() && !obj.hasAnyUnexpiredOffer();
    const bestActiveInput = callback(4205).getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
  }, items1);
  return { loading: loading[0], onPress };
};