// === Module 7578: useFractionalPremiumInfo ===

// Module 7578 (useFractionalPremiumInfo)
import _modDef38 from "module_38" /* 38 */;
import _modDef2042 from "module_2042" /* 2042 */;
import EntitlementTypes from "EntitlementTypes" /* 2046 */;
import PremiumUtils from "PremiumUtils" /* 2047 */;
import BillingUtils from "BillingUtils" /* 4827 */;
import EntitlementSourceTypes from "EntitlementSourceTypes" /* 7581 */;
import EntitlementActionCreators from "EntitlementActionCreators" /* 7582 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;
import EntitlementStore from "EntitlementStore" /* 7579 */;

const require = globalThis.__r;

require = fn;
function calculateFractionalPremiumInfo(isFetching) {
  let flag = isFetching.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  ({ entitlements, unactivatedFractionalPremiumUnits, premiumSubscription, fetchedAllEntitlements, excludeReverseTrialFromCountdown } = isFetching);
  const obj = { isFractionalPremiumActive: false, fractionalState: constants.NONE, startsAt: _modDef2042(0), endsAt: _modDef2042(0), currentEntitlementId: "", currentEntitlementEndsAt: _modDef2042(0), unactivatedUnits: [], fetched: fetchedAllEntitlements };
  if (flag) {
    const obj2 = {};
    const merged = Object.assign(obj);
    obj2.fetched = false;
    return obj2;
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
        const obj3 = { extra: null };
        const obj6 = { entitlementIds: mapped };
        obj3.extra = obj6;
        const result = BillingUtils.captureBillingMessage("fractional redemption entitlements should have startsAt/endsAt", obj3);
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
          excludeReverseTrialFromCountdown = sourceType === EntitlementSourceTypes.EntitlementSourceTypes.REVERSE_TRIAL;
        }
        const obj7 = { isFractionalPremiumActive: null != first, fractionalState: tmp7, startsAt: null, endsAt: null, currentEntitlementId: null, currentEntitlementEndsAt: null, unactivatedUnits: null, fetched: null };
        if (null != first) {
          let tmp11 = _modDef2042(first.startsAt);
        } else {
          tmp11 = _modDef2042(0);
        }
        obj7.startsAt = tmp11;
        if (null != first) {
          const obj4 = PremiumUtils;
          let tmp2ResultResult = _modDef2042(obj4.extendDateWithUnconsumedFractionalPremium(first.endsAt, unactivatedFractionalPremiumUnits, undefined, excludeReverseTrialFromCountdown));
          const tmp2Result = _modDef2042;
        } else {
          tmp2ResultResult = _modDef2042(0);
        }
        obj7.endsAt = tmp2ResultResult;
        let str = "";
        if (null != first) {
          str = first.id;
        }
        obj7.currentEntitlementId = str;
        if (null != first) {
          let tmp18 = _modDef2042(first.endsAt);
        } else {
          tmp18 = _modDef2042(0);
        }
        obj7.currentEntitlementEndsAt = tmp18;
        obj7.unactivatedUnits = unactivatedFractionalPremiumUnits;
        obj7.fetched = fetchedAllEntitlements;
        return obj7;
      } else {
        if (null == premiumSubscription) {
          const FP_ONLY = constants.FP_ONLY;
        }
        const FP_SUB_PAUSED = constants.FP_SUB_PAUSED;
      }
    }
    return obj;
  }
}
const SubscriptionStatusTypes = fn(1072).SubscriptionStatusTypes;
const PremiumConstants = fn(1385);
({ FractionalPremiumStates: closure_9, PREMIUM_SUBSCRIPTION_APPLICATION: c10 } = PremiumConstants);
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
  const stateFromStores = forceFetch(excludeReverseTrialFromCountdown[12]).useStateFromStores(items, () => stateFromStores1.getCurrentUser());
  let obj2 = forceFetch(excludeReverseTrialFromCountdown[12]);
  const items1 = [stateFromStores2];
  const stateFromStoresArray = forceFetch(excludeReverseTrialFromCountdown[12]).useStateFromStoresArray(items1, () => EntitlementStore.getFractionalPremium({ excludeReverseTrial }));
  let obj3 = forceFetch(excludeReverseTrialFromCountdown[12]);
  const items2 = [stateFromStores2];
  stateFromStores1 = forceFetch(excludeReverseTrialFromCountdown[12]).useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
  const obj4 = forceFetch(excludeReverseTrialFromCountdown[12]);
  const items3 = [stateFromStores2];
  const stateFromStoresArray1 = forceFetch(excludeReverseTrialFromCountdown[12]).useStateFromStoresArray(items3, () => stateFromStores2.getUnactivatedFractionalPremiumUnits());
  const obj5 = forceFetch(excludeReverseTrialFromCountdown[12]);
  const items4 = [stateFromStoresArray1];
  stateFromStores2 = forceFetch(excludeReverseTrialFromCountdown[12]).useStateFromStores(items4, () => stateFromStoresArray1.getPremiumTypeSubscription());
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
      tmp10 = !applicationIdsFetching.has(closure_10);
    }
    if (tmp10) {
      let applicationIdsFetched = tmp3.applicationIdsFetched;
      tmp10 = !applicationIdsFetched.has(closure_10);
    }
    fetchingAllEntitlements = tmp10;
  }
  if (!fetchingAllEntitlements) {
    const applicationIdsFetching2 = tmp3.applicationIdsFetching;
    fetchingAllEntitlements = applicationIdsFetching2.has(closure_10);
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
      const obj2 = { entitlementType: EntitlementTypes.EntitlementTypes.FRACTIONAL_REDEMPTION };
      const userEntitlements = EntitlementActionCreators.fetchUserEntitlements(obj2);
    }
    let tmp10 = null != stateFromStores;
    if (tmp10) {
      const applicationIdsFetching = EntitlementStore.applicationIdsFetching;
      tmp10 = !applicationIdsFetching.has(closure_2_10);
    }
    if (tmp10) {
      const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
      tmp10 = !applicationIdsFetched.has(closure_2_10);
    }
    if (tmp10) {
      const userEntitlementsForApplication = EntitlementActionCreators.fetchUserEntitlementsForApplication(closure_2_10);
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