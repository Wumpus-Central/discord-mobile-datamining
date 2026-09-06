// === Module 7393: useFractionalPremiumInfo ===

// Module 7393 (useFractionalPremiumInfo)
import _modDef38 from "module_38" /* 38 */;
import _modDef4153 from "module_4153" /* 4153 */;
import PremiumUtils from "PremiumUtils" /* 4218 */;
import BillingUtils from "BillingUtils" /* 4233 */;
import EntitlementActionCreators from "EntitlementActionCreators" /* 7400 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;

require = fn;
function calculateFractionalPremiumInfo(isFetching) {
  let flag = isFetching.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  ({ entitlements, unactivatedFractionalPremiumUnits, premiumSubscription, fetchedAllEntitlements, excludeReverseTrialFromCountdown } = isFetching);
  let obj = { isFractionalPremiumActive: false, fractionalState: constants4.NONE, startsAt: _modDef4153(0), endsAt: _modDef4153(0), currentEntitlementId: "", currentEntitlementEndsAt: _modDef4153(0), unactivatedUnits: [], fetched: fetchedAllEntitlements };
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
        _modDef38(tmp2, "endsAt should not be null");
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
        const obj1 = { entitlementIds: mapped };
        obj.extra = obj1;
        const result = BillingUtils.captureBillingMessage("fractional redemption entitlements should have startsAt/endsAt", obj);
        const _Error = Error;
        const error = new Error("fractional redemption entitlements should have startsAt/endsAt");
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
        const obj2 = { isFractionalPremiumActive: null != first, fractionalState: tmp7, startsAt: null, endsAt: null, currentEntitlementId: null, currentEntitlementEndsAt: null, unactivatedUnits: null, fetched: null };
        if (null != first) {
          let tmp11 = _modDef4153(first.startsAt);
        } else {
          tmp11 = _modDef4153(0);
        }
        obj2.startsAt = tmp11;
        if (null != first) {
          const obj4 = PremiumUtils;
          let tmp2ResultResult = _modDef4153(obj4.extendDateWithUnconsumedFractionalPremium(first.endsAt, unactivatedFractionalPremiumUnits, undefined, excludeReverseTrialFromCountdown));
          const tmp2Result = _modDef4153;
        } else {
          tmp2ResultResult = _modDef4153(0);
        }
        obj2.endsAt = tmp2ResultResult;
        let str = "";
        if (null != first) {
          str = first.id;
        }
        obj2.currentEntitlementId = str;
        if (null != first) {
          let tmp18 = _modDef4153(first.endsAt);
        } else {
          tmp18 = _modDef4153(0);
        }
        obj2.currentEntitlementEndsAt = tmp18;
        obj2.unactivatedUnits = unactivatedFractionalPremiumUnits;
        obj2.fetched = fetchedAllEntitlements;
        return obj2;
      } else {
        if (null == premiumSubscription) {
          const FP_ONLY = constants4.FP_ONLY;
        }
        const FP_SUB_PAUSED = constants4.FP_SUB_PAUSED;
      }
    }
    return obj;
  }
}
const Constants = fn(1074);
({ EntitlementSourceTypes: closure_8, EntitlementTypes: closure_9, SubscriptionStatusTypes: c10 } = Constants);
const PremiumConstants = fn(1373);
({ FractionalPremiumStates: closure_11, PREMIUM_SUBSCRIPTION_APPLICATION: closure_12 } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/hooks/useFractionalPremiumInfo.tsx");

export default function useFractionalPremiumInfo() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = { forceFetch: false, excludeReverseTrial: false, excludeReverseTrialFromCountdown: false };
  }
  const forceFetch = obj.forceFetch;
  ({ excludeReverseTrial: importDefault, excludeReverseTrialFromCountdown } = obj);
  let stateFromStores1;
  let stateFromStores2;
  closure_8 = undefined;
  const items = [stateFromStores1];
  const stateFromStores = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items, () => stateFromStores1.getCurrentUser());
  const obj2 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items1 = [stateFromStores2];
  const stateFromStoresArray = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStoresArray(items1, () => EntitlementStore.getFractionalPremium({ excludeReverseTrial }));
  let obj3 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items2 = [stateFromStores2];
  stateFromStores1 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
  const obj4 = forceFetch(excludeReverseTrialFromCountdown[11]);
  const items3 = [stateFromStores2];
  const stateFromStoresArray1 = forceFetch(excludeReverseTrialFromCountdown[11]).useStateFromStoresArray(items3, () => stateFromStores2.getUnactivatedFractionalPremiumUnits());
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
  require("useMountEffect")(() => {
    let tmp3 = null != stateFromStores;
    if (tmp3) {
      tmp3 = !EntitlementStore.fetchingAllEntitlements;
    }
    if (tmp3) {
      const fetchedAllEntitlements = EntitlementStore.fetchedAllEntitlements;
      let tmp6 = !fetchedAllEntitlements;
      if (fetchedAllEntitlements) {
        tmp6 = forceFetch;
      }
      tmp3 = tmp6;
    }
    if (tmp3) {
      const obj = { entitlementType: constants2.FRACTIONAL_REDEMPTION };
      const userEntitlements = obj.fetchUserEntitlements(obj);
    }
    let tmp11 = null != stateFromStores;
    if (tmp11) {
      const applicationIdsFetching = EntitlementStore.applicationIdsFetching;
      tmp11 = !applicationIdsFetching.has(closure_2_12);
    }
    if (tmp11) {
      const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
      tmp11 = !applicationIdsFetched.has(closure_2_12);
    }
    if (tmp11) {
      const userEntitlementsForApplication = EntitlementActionCreators.fetchUserEntitlementsForApplication(closure_2_12);
    }
  });
  const items5 = [stateFromStores, stateFromStoresArray, stateFromStores2, stateFromStoresArray1, stateFromStores1, excludeReverseTrialFromCountdown];
  const effect = stateFromStoresArray.useEffect(() => {
    closure_0 = calculateFractionalPremiumInfo({ entitlements: stateFromStoresArray, unactivatedFractionalPremiumUnits: stateFromStoresArray1, currentUser: stateFromStores, premiumSubscription: stateFromStores2, fetchedAllEntitlements: stateFromStores1, excludeReverseTrialFromCountdown });
    closure_8((arg0) => {
      let tmp = closure_0;
      if (obj.isEqual(arg0, closure_0)) {
        tmp = arg0;
      }
      return tmp;
    });
  }, items5);
  return tmp14[0];
};