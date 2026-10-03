// discord_app/modules/billing/hooks/useFractionalPremiumInfo.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import EntitlementActionCreators from "../../../actions/EntitlementActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import EntitlementStore from "../../../stores/game_store/EntitlementStore.tsx";

const require = globalThis.__r;

require = fn;
function calculateFractionalPremiumInfo(isFetching) {
  let flag = isFetching.isFetching;
  if (flag === undefined) {
    flag = false;
  }
  ({
    entitlements,
    unactivatedFractionalPremiumUnits,
    premiumSubscription,
    fetchedAllEntitlements,
    excludeReverseTrialFromCountdown,
  } = isFetching);
  const obj = {
    isFractionalPremiumActive: false,
    fractionalState: constants4.NONE,
    startsAt: _modDef4461(0),
    endsAt: _modDef4461(0),
    currentEntitlementId: "",
    currentEntitlementEndsAt: _modDef4461(0),
    unactivatedUnits: [],
    fetched: fetchedAllEntitlements,
  };
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
        const result = BillingUtils.captureBillingMessage(
          "fractional redemption entitlements should have startsAt/endsAt",
          obj3,
        );
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
        const obj7 = {
          isFractionalPremiumActive: null != first,
          fractionalState: tmp7,
          startsAt: null,
          endsAt: null,
          currentEntitlementId: null,
          currentEntitlementEndsAt: null,
          unactivatedUnits: null,
          fetched: null,
        };
        if (null != first) {
          let tmp11 = _modDef4461(first.startsAt);
        } else {
          tmp11 = _modDef4461(0);
        }
        obj7.startsAt = tmp11;
        if (null != first) {
          const obj4 = PremiumUtils;
          let tmp2ResultResult = _modDef4461(
            obj4.extendDateWithUnconsumedFractionalPremium(
              first.endsAt,
              unactivatedFractionalPremiumUnits,
              undefined,
              excludeReverseTrialFromCountdown,
            ),
          );
          const tmp2Result = _modDef4461;
        } else {
          tmp2ResultResult = _modDef4461(0);
        }
        obj7.endsAt = tmp2ResultResult;
        let str = "";
        if (null != first) {
          str = first.id;
        }
        obj7.currentEntitlementId = str;
        if (null != first) {
          let tmp18 = _modDef4461(first.endsAt);
        } else {
          tmp18 = _modDef4461(0);
        }
        obj7.currentEntitlementEndsAt = tmp18;
        obj7.unactivatedUnits = unactivatedFractionalPremiumUnits;
        obj7.fetched = fetchedAllEntitlements;
        return obj7;
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
const Constants = fn(1085);
({ EntitlementSourceTypes: closure_8, EntitlementTypes: closure_9, SubscriptionStatusTypes: c10 } = Constants);
const PremiumConstants = fn(1379);
({ FractionalPremiumStates: closure_11, PREMIUM_SUBSCRIPTION_APPLICATION: closure_12 } = PremiumConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/hooks/useFractionalPremiumInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let obj = arg0;
      const cResult = forceFetch(excludeReverseTrialFromCountdown[12]).c(20);
      if (undefined === arg0) {
        obj = { forceFetch: false, excludeReverseTrial: false, excludeReverseTrialFromCountdown: false };
      }
      forceFetch = obj.forceFetch;
      ({ excludeReverseTrial: importDefault, excludeReverseTrialFromCountdown } = obj);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores1];
        const fn = function u() {
          return stateFromStores1.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj2 = forceFetch(excludeReverseTrialFromCountdown[12]);
      const stateFromStores = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [stateFromStores2];
        cResult[2] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = forceFetch(excludeReverseTrialFromCountdown[13]);
      const stateFromStoresArray = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStoresArray(tmp8, () =>
        EntitlementStore.getFractionalPremium({ excludeReverseTrial }),
      );
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [stateFromStores2];
        class R {
          constructor() {
            return closure_7.fetchedAllEntitlements;
          }
        }
        cResult[3] = items2;
        cResult[4] = R;
        let tmp12 = R;
        let tmp11 = items2;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmpResult5 = forceFetch(excludeReverseTrialFromCountdown[13]);
      stateFromStores1 = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStores(tmp11, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [stateFromStores2];
        class I {
          constructor() {
            return closure_7.getUnactivatedFractionalPremiumUnits();
          }
        }
        cResult[5] = items3;
        cResult[6] = I;
        let tmp16 = I;
        let tmp15 = items3;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const tmpResult6 = forceFetch(excludeReverseTrialFromCountdown[13]);
      const stateFromStoresArray1 = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStoresArray(
        tmp15,
        tmp16,
      );
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [stateFromStoresArray1];
        class I {
          constructor() {
            return closure_7.getUnactivatedFractionalPremiumUnits();
          }
        }
        cResult[7] = items4;
        cResult[8] = tmp22;
        let tmp20 = tmp22;
        let tmp19 = items4;
      } else {
        tmp19 = cResult[7];
        tmp20 = cResult[8];
      }
      const tmpResult7 = forceFetch(excludeReverseTrialFromCountdown[13]);
      stateFromStores2 = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStores(tmp19, tmp20);
      let fetchingAllEntitlements = null != stateFromStores;
      if (fetchingAllEntitlements) {
        fetchingAllEntitlements = !stateFromStores2.fetchingAllEntitlements;
      }
      if (fetchingAllEntitlements) {
        class I {
          constructor() {
            return closure_7.getUnactivatedFractionalPremiumUnits();
          }
        }
        fetchingAllEntitlements = !stateFromStores2.fetchedAllEntitlements;
        const tmp28 = !stateFromStores2.fetchedAllEntitlements;
      }
      if (!fetchingAllEntitlements) {
        fetchingAllEntitlements = stateFromStores2.fetchingAllEntitlements;
      }
      if (!fetchingAllEntitlements) {
        if (null != stateFromStores) {
          let applicationIdsFetching = stateFromStores2.applicationIdsFetching;
          class I {
            constructor() {
              return closure_7.getUnactivatedFractionalPremiumUnits();
            }
          }
        }
        if (null != stateFromStores) {
          let applicationIdsFetched = stateFromStores2.applicationIdsFetched;
          class I {
            constructor() {
              return closure_7.getUnactivatedFractionalPremiumUnits();
            }
          }
        }
        class I {
          constructor() {
            return closure_7.getUnactivatedFractionalPremiumUnits();
          }
        }
      }
      if (!fetchingAllEntitlements) {
        const applicationIdsFetching2 = stateFromStores2.applicationIdsFetching;
        class I {
          constructor() {
            return closure_7.getUnactivatedFractionalPremiumUnits();
          }
        }
      }
      const tmpResult8 = forceFetch(excludeReverseTrialFromCountdown[13]);
      closure_8 = stateFromStores(
        stateFromStoresArray.useState(
          calculateFractionalPremiumInfo({
            isFetching: fetchingAllEntitlements,
            entitlements: stateFromStoresArray,
            unactivatedFractionalPremiumUnits: stateFromStoresArray1,
            currentUser: stateFromStores,
            premiumSubscription: stateFromStores2,
            fetchedAllEntitlements: stateFromStores1,
            excludeReverseTrialFromCountdown,
          }),
        ),
        2,
      )[1];
      if (cResult[9] === stateFromStores) {
        if (cResult[10] === forceFetch) {
          let tmp38 = cResult[11];
        }
        require("useMountEffect")(tmp38);
        class I {
          constructor() {
            return closure_7.getUnactivatedFractionalPremiumUnits();
          }
        }
        const fn2 = function w() {
          closure_0 = calculateFractionalPremiumInfo({
            entitlements: stateFromStoresArray,
            unactivatedFractionalPremiumUnits: stateFromStoresArray1,
            currentUser: stateFromStores,
            premiumSubscription: stateFromStores2,
            fetchedAllEntitlements: stateFromStores1,
            excludeReverseTrialFromCountdown,
          });
          closure_8((arg0) => {
            let tmp = closure_0;
            if (obj.isEqual(arg0, closure_0)) {
              tmp = arg0;
            }
            return tmp;
          });
        };
        const items5 = [
          stateFromStores,
          stateFromStoresArray,
          stateFromStores2,
          stateFromStoresArray1,
          stateFromStores1,
          excludeReverseTrialFromCountdown,
        ];
        cResult[12] = stateFromStores;
        cResult[13] = stateFromStoresArray;
        cResult[14] = excludeReverseTrialFromCountdown;
        cResult[15] = stateFromStores1;
        cResult[16] = stateFromStores2;
        cResult[17] = stateFromStoresArray1;
        cResult[18] = fn2;
        cResult[19] = items5;
      }
      class C {
        constructor() {
          tmp3 = null != closure_3;
          tmp = forceFetch;
          tmp2 = closure_3;
          if (tmp3) {
            tmp4 = closure_7;
            tmp3 = !closure_7.fetchingAllEntitlements;
          }
          if (tmp3) {
            tmp5 = closure_7;
            fetchedAllEntitlements = closure_7.fetchedAllEntitlements;
            tmp6 = !fetchedAllEntitlements;
            if (fetchedAllEntitlements) {
              tmp6 = tmp;
            }
            tmp3 = tmp6;
          }
          if (tmp3) {
            tmp7 = closure_0;
            tmp8 = closure_2;
            obj = closure_0(closure_2[14]);
            obj1 = { entitlementType: null };
            tmp9 = EntitlementTypes;
            obj1.entitlementType = EntitlementTypes.FRACTIONAL_REDEMPTION;
            userEntitlements = obj.fetchUserEntitlements(obj1);
          }
          tmp11 = null != tmp2;
          if (tmp11) {
            tmp12 = closure_7;
            applicationIdsFetching = closure_7.applicationIdsFetching;
            tmp13 = closure_12;
            tmp11 = !applicationIdsFetching.has(closure_12);
          }
          if (tmp11) {
            tmp14 = closure_7;
            applicationIdsFetched = closure_7.applicationIdsFetched;
            tmp15 = closure_12;
            tmp11 = !applicationIdsFetched.has(closure_12);
          }
          if (tmp11) {
            tmp16 = closure_0;
            tmp17 = closure_2;
            obj3 = closure_0(closure_2[14]);
            tmp18 = closure_12;
            userEntitlementsForApplication = obj3.fetchUserEntitlementsForApplication(closure_12);
          }
          return;
        }
      }
      cResult[9] = stateFromStores;
      cResult[10] = forceFetch;
      cResult[11] = C;
      tmp38 = C;
      const tmp37 = stateFromStores(
        stateFromStoresArray.useState(
          calculateFractionalPremiumInfo({
            isFetching: fetchingAllEntitlements,
            entitlements: stateFromStoresArray,
            unactivatedFractionalPremiumUnits: stateFromStoresArray1,
            currentUser: stateFromStores,
            premiumSubscription: stateFromStores2,
            fetchedAllEntitlements: stateFromStores1,
            excludeReverseTrialFromCountdown,
          }),
        ),
        2,
      );
    }
  : () => {
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
      const stateFromStores = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStores(items, () =>
        stateFromStores1.getCurrentUser(),
      );
      let obj2 = forceFetch(excludeReverseTrialFromCountdown[13]);
      const items1 = [stateFromStores2];
      const stateFromStoresArray = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStoresArray(
        items1,
        () => EntitlementStore.getFractionalPremium({ excludeReverseTrial }),
      );
      let obj3 = forceFetch(excludeReverseTrialFromCountdown[13]);
      const items2 = [stateFromStores2];
      stateFromStores1 = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStores(
        items2,
        () => stateFromStores2.fetchedAllEntitlements,
      );
      const obj4 = forceFetch(excludeReverseTrialFromCountdown[13]);
      const items3 = [stateFromStores2];
      const stateFromStoresArray1 = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStoresArray(
        items3,
        () => stateFromStores2.getUnactivatedFractionalPremiumUnits(),
      );
      const obj5 = forceFetch(excludeReverseTrialFromCountdown[13]);
      const items4 = [stateFromStoresArray1];
      stateFromStores2 = forceFetch(excludeReverseTrialFromCountdown[13]).useStateFromStores(items4, () =>
        stateFromStoresArray1.getPremiumTypeSubscription(),
      );
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
      const tmp14 = stateFromStores(
        stateFromStoresArray.useState(
          calculateFractionalPremiumInfo({
            isFetching: fetchingAllEntitlements,
            entitlements: stateFromStoresArray,
            unactivatedFractionalPremiumUnits: stateFromStoresArray1,
            currentUser: stateFromStores,
            premiumSubscription: stateFromStores2,
            fetchedAllEntitlements: stateFromStores1,
            excludeReverseTrialFromCountdown,
          }),
        ),
        2,
      );
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
          const obj2 = { entitlementType: constants2.FRACTIONAL_REDEMPTION };
          const userEntitlements = EntitlementActionCreators.fetchUserEntitlements(obj2);
        }
        let tmp11 = null != stateFromStores;
        if (tmp11) {
          const applicationIdsFetching = EntitlementStore.applicationIdsFetching;
          tmp11 = !applicationIdsFetching.has(__initData);
        }
        if (tmp11) {
          const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
          tmp11 = !applicationIdsFetched.has(__initData);
        }
        if (tmp11) {
          const userEntitlementsForApplication =
            EntitlementActionCreators.fetchUserEntitlementsForApplication(__initData);
        }
      });
      const items5 = [
        stateFromStores,
        stateFromStoresArray,
        stateFromStores2,
        stateFromStoresArray1,
        stateFromStores1,
        excludeReverseTrialFromCountdown,
      ];
      const effect = stateFromStoresArray.useEffect(() => {
        closure_0 = calculateFractionalPremiumInfo({
          entitlements: stateFromStoresArray,
          unactivatedFractionalPremiumUnits: stateFromStoresArray1,
          currentUser: stateFromStores,
          premiumSubscription: stateFromStores2,
          fetchedAllEntitlements: stateFromStores1,
          excludeReverseTrialFromCountdown,
        });
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
