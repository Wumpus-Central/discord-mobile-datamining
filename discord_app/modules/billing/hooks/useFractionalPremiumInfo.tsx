// discord_app/modules/billing/hooks/useFractionalPremiumInfo.tsx
import hooksDefault from "../../../../_runtime/04043_hooks.js";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import _createGatewayCheckoutContext from "../../../utils/BillingUtils.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../../stores/UserStore.tsx";
import closure_6 from "../../../stores/billing/SubscriptionStore.tsx";
import closure_7 from "../../../stores/game_store/EntitlementStore.tsx";
import ME from "../../../Constants.tsx";
import GuildFeatures from "../../premium/PremiumConstants.tsx";

require = arg1;
function calculateFractionalPremiumInfo(isFetching) {
  let flag = isFetching.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  ({ entitlements, unactivatedFractionalPremiumUnits, premiumSubscription, fetchedAllEntitlements, excludeReverseTrialFromCountdown } = isFetching);
  let obj = { isFractionalPremiumActive: false, fractionalState: constants3.NONE, startsAt: hooksDefault(0), endsAt: hooksDefault(0), currentEntitlementId: "", currentEntitlementEndsAt: hooksDefault(0), unactivatedUnits: [], fetched: fetchedAllEntitlements };
  if (flag) {
    obj = {};
    const merged = Object.assign(obj);
    obj.fetched = false;
    return obj;
  } else {
    if (null != isFetching.currentUser) {
      const found = entitlements.filter((endsAt) => null != endsAt.endsAt && null != endsAt.startsAt);
      const sorted = found.sort((endsAt, endsAt2) => {
        let tmp2 = null != endsAt.endsAt;
        if (tmp2) {
          tmp2 = null != endsAt2.endsAt;
        }
        callback(table[8])(tmp2, "endsAt should not be null");
        let num = -1;
        if (endsAt.endsAt >= endsAt2.endsAt) {
          let num2 = 0;
          if (endsAt.endsAt > endsAt2.endsAt) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      });
      const reversed = sorted.reverse();
      if (sorted.length > 0) {
        const _Array = Array;
        const mapped = Array.from(entitlements.values()).map((id) => id.id);
        const arr = Array.from(entitlements.values());
        obj = { extra: null };
        obj1 = { entitlementIds: null };
        obj1[0] = mapped;
        obj[0] = obj1;
        const result = _createGatewayCheckoutContext.captureBillingMessage("fractional redemption entitlements should have startsAt/endsAt", obj);
        const _Error = Error;
        error = new Error("fractional redemption entitlements should have startsAt/endsAt");
        throw error;
      }
      let first = sorted[0];
      if (first == null) {
        first = null;
      }
      if (null == first) {
        if (excludeReverseTrialFromCountdown) {
          let sourceType;
          if (first != null) {
            sourceType = first.sourceType;
          }
          excludeReverseTrialFromCountdown = sourceType === constants.REVERSE_TRIAL;
        }
        const obj2 = { isFractionalPremiumActive: null, fractionalState: null, startsAt: null, endsAt: null, currentEntitlementId: null, currentEntitlementEndsAt: null, unactivatedUnits: null, fetched: null };
        obj2[0] = null != first;
        obj2[1] = tmp7;
        if (null != first) {
          let tmp11 = tmp2(4043)(first.startsAt);
        } else {
          tmp11 = tmp2(4043)(0);
        }
        obj2[2] = tmp11;
        if (null != first) {
          const obj4 = getPremiumPlanItem;
          let tmp2ResultResult = tmp2(4043)(obj4.extendDateWithUnconsumedFractionalPremium(first.endsAt, unactivatedFractionalPremiumUnits, undefined, excludeReverseTrialFromCountdown));
          const tmp2Result = tmp2(4043);
        } else {
          tmp2ResultResult = tmp2(4043)(0);
        }
        obj2[3] = tmp2ResultResult;
        let str = "";
        if (null != first) {
          str = first.id;
        }
        obj2[4] = str;
        if (null != first) {
          let tmp18 = tmp2(4043)(first.endsAt);
        } else {
          tmp18 = tmp2(4043)(0);
        }
        obj2[5] = tmp18;
        obj2[6] = unactivatedFractionalPremiumUnits;
        obj2[7] = fetchedAllEntitlements;
        return obj2;
      } else {
        if (null == premiumSubscription) {
          const FP_ONLY = tmp.FP_ONLY;
        }
        const FP_SUB_PAUSED = tmp.FP_SUB_PAUSED;
      }
    }
    return obj;
  }
}
({ EntitlementSourceTypes: closure_8, EntitlementTypes: c9, SubscriptionStatusTypes: c10 } = ME);
({ FractionalPremiumStates: unpackModuleId, PREMIUM_SUBSCRIPTION_APPLICATION: closure_12 } = GuildFeatures);
let result = require("set").fileFinishedImporting("modules/billing/hooks/useFractionalPremiumInfo.tsx");

export default function useFractionalPremiumInfo() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { forceFetch: false, excludeReverseTrial: false, excludeReverseTrialFromCountdown: false };
  }
  const forceFetch = obj.forceFetch;
  ({ excludeReverseTrial: importDefault, excludeReverseTrialFromCountdown } = obj);
  let stateFromStores;
  let stateFromStoresArray;
  let stateFromStores1;
  let stateFromStoresArray1;
  let stateFromStores2;
  closure_8 = undefined;
  const items = [stateFromStores1];
  stateFromStores = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items, () => stateFromStores1.getCurrentUser());
  const obj2 = forceFetch(excludeReverseTrialFromCountdown[11]);
  let tmp = excludeReverseTrialFromCountdown;
  const items1 = [stateFromStores2];
  stateFromStoresArray = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStoresArray(items1, () => stateFromStores2.getFractionalPremium({ excludeReverseTrial: closure_1 }));
  let obj3 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items2 = [stateFromStores2];
  stateFromStores1 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
  const obj4 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items3 = [stateFromStores2];
  stateFromStoresArray1 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStoresArray(items3, () => stateFromStores2.getUnactivatedFractionalPremiumUnits());
  const obj5 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items4 = [stateFromStoresArray1];
  stateFromStores2 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items4, () => stateFromStoresArray1.getPremiumTypeSubscription());
  let fetchingAllEntitlements = null != stateFromStores;
  if (fetchingAllEntitlements) {
    fetchingAllEntitlements = !tmp3.fetchingAllEntitlements;
  }
  if (fetchingAllEntitlements) {
    let fetchedAllEntitlements = tmp3.fetchedAllEntitlements;
    let tmp9 = !fetchedAllEntitlements;
    if (fetchedAllEntitlements) {
      tmp9 = forceFetch;
    }
    fetchingAllEntitlements = tmp9;
  }
  if (!fetchingAllEntitlements) {
    fetchingAllEntitlements = tmp3.fetchingAllEntitlements;
  }
  if (!fetchingAllEntitlements) {
    let tmp10 = null != stateFromStores;
    if (tmp10) {
      let applicationIdsFetching = tmp3.applicationIdsFetching;
      tmp10 = !applicationIdsFetching.has(closure_12);
    }
    if (tmp10) {
      let applicationIdsFetched = tmp3.applicationIdsFetched;
      tmp10 = !applicationIdsFetched.has(closure_12);
    }
    fetchingAllEntitlements = tmp10;
  }
  if (!fetchingAllEntitlements) {
    const applicationIdsFetching2 = tmp3.applicationIdsFetching;
    fetchingAllEntitlements = applicationIdsFetching2.has(closure_12);
  }
  const tmp14 = stateFromStores(stateFromStoresArray.useState(calculateFractionalPremiumInfo({ isFetching: fetchingAllEntitlements, entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown })), 2);
  closure_8 = tmp14[1];
  importDefault(tmp[12])(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = !stateFromStores2.fetchingAllEntitlements;
    }
    if (tmp3) {
      const fetchedAllEntitlements = stateFromStores2.fetchedAllEntitlements;
      let tmp6 = !fetchedAllEntitlements;
      if (fetchedAllEntitlements) {
        tmp6 = forceFetch;
      }
      tmp3 = tmp6;
    }
    if (tmp3) {
      let obj = forceFetch(excludeReverseTrialFromCountdown[13]);
      obj = { entitlementType: null };
      obj[0] = closure_1_9.FRACTIONAL_REDEMPTION;
      const userEntitlements = obj.fetchUserEntitlements(obj);
    }
    let tmp11 = null != stateFromStores;
    if (tmp11) {
      const applicationIdsFetching = stateFromStores2.applicationIdsFetching;
      tmp11 = !applicationIdsFetching.has(closure_1_12);
    }
    if (tmp11) {
      const applicationIdsFetched = stateFromStores2.applicationIdsFetched;
      tmp11 = !applicationIdsFetched.has(closure_1_12);
    }
    if (tmp11) {
      const userEntitlementsForApplication = forceFetch(excludeReverseTrialFromCountdown[13]).fetchUserEntitlementsForApplication(closure_1_12);
      const obj3 = forceFetch(excludeReverseTrialFromCountdown[13]);
    }
  });
  const items5 = [stateFromStores, stateFromStoresArray, stateFromStores2, stateFromStoresArray1, stateFromStores1, excludeReverseTrialFromCountdown];
  const effect = stateFromStoresArray.useEffect(() => {
    closure_0 = closure_1_13({ entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown });
    callback((arg0) => {
      let tmp = callback;
      if (obj.isEqual(arg0, callback)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, items5);
  return tmp14[0];
};