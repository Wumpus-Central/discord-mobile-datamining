// === Module 8891: usePremiumFeatureUpsellGetNitro ===

// Module 8891 (usePremiumFeatureUpsellGetNitro)
import contextDefault from "context" /* 5905 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "reset" /* 4113 */;
import closure_7 from "emitChanges" /* 7129 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;
import { AnalyticsObjectTypes } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/premium/roadblocks/native/hooks/usePremiumFeatureUpsellGetNitro.tsx");

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
  closure_6 = undefined;
  let onPress;
  const loading = callback(analyticsLocations.useState(false), 2);
  callback = loading[1];
  analyticsLocations = contextDefault(items).analyticsLocations;
  closure_6 = analyticsLocations.useRef(0);
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
          obj[1] = closure_1_9.BUY;
          obj[0] = obj;
          obj[1] = analyticsLocations;
          obj[2] = callback ? closure_1_8.TIER_0 : closure_1_8.TIER_2;
          callback2(7101)(obj, dependencyMap);
        }
      }
    }
    if (!result) {
      if (ref.current < 5) {
        callback3(true);
        if (result) {
          let resolved = Promise.resolve();
        } else {
          resolved = callback(4790).fetchSubscriptions();
          const obj2 = callback(4790);
        }
        const items = [resolved, ];
        if (isFetchingOfferResult) {
          let resolved1 = Promise.resolve();
        } else {
          resolved1 = callback(7903).fetchUserOffer("usePremiumFeatureUpsellGetNitro");
          const obj3 = callback(7903);
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
          callback2(4161).presentFailedToast(intl.string(callback(1236).t.R0RpRX));
        }).finally(() => callback3(false));
        const catchPromise = Promise.all(items).then(() => {
          ref.current = ref.current + 1;
          callback4();
        }).catch(() => {
          const intl = callback(1236).intl;
          callback2(4161).presentFailedToast(intl.string(callback(1236).t.R0RpRX));
        });
      }
    }
    callback2();
    tmp5 = onPress.hasFetchedOffer() && !obj.hasAnyUnexpiredOffer();
    const bestActiveInput = callback(4307).getBestActiveInput();
    if (bestActiveInput != null) {
      bestActiveInput.closeCustomKeyboard();
    }
  }, items1);
  return { loading: loading[0], onPress };
};