// discord_app/modules/billing/hooks/useFractionalPremiumInfo.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import EntitlementActionCreators from "../../../actions/EntitlementActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import EntitlementStore from "../../../stores/game_store/EntitlementStore.tsx";
import Constants from "../../../Constants.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let c10;
let c9;
let closure_12;
let metroImportAll;
let unpackModuleId;
function calculateFractionalPremiumInfo(isFetching) {
  let entitlements;
  let excludeReverseTrialFromCountdown;
  let fetchedAllEntitlements;
  let obj6;
  let premiumSubscription;
  let str;
  let tmp10;
  let tmp17;
  let tmp2ResultResult;
  let unactivatedFractionalPremiumUnits;
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
    fractionalState: unpackModuleId.NONE,
    startsAt: _modDef4461(0),
    endsAt: _modDef4461(0),
    currentEntitlementId: "",
    currentEntitlementEndsAt: _modDef4461(0),
    unactivatedUnits: [],
    fetched: fetchedAllEntitlements,
  };
  const currentUser = isFetching.currentUser;
  if (flag) {
    const obj2 = { fetched: false };
    const merged = Object.assign(obj);
    return obj2;
  } else {
    if (null != currentUser) {
      const found = entitlements.filter((endsAt) => null != endsAt.endsAt && null != endsAt.startsAt);
      const sorted = found.sort((endsAt, endsAt2) => {
        let tmp2 = null != endsAt.endsAt;
        const tmp = _modDef38;
        if (tmp2) {
          tmp2 = null != endsAt2.endsAt;
        }
        tmp(tmp2, "endsAt should not be null");
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
        const arr = Array.from(entitlements.values());
        const mapped = arr.map((id) => id.id);
        const obj3 = { extra: obj6 };
        obj6 = { entitlementIds: mapped };
        const obj5 = BillingUtils;
        const result = obj5.captureBillingMessage(
          "fractional redemption entitlements should have startsAt/endsAt",
          obj3,
        );
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("fractional redemption entitlements should have startsAt/endsAt");
        throw error;
      }
      let first = sorted[0];
      if (first == null) {
        first = null;
      }
      let NONE = unpackModuleId.NONE;
      if (null != first) {
        if (null != premiumSubscription) {
          let FP_ONLY;
          if (premiumSubscription.status === constants3.PAUSED) {
            FP_ONLY = unpackModuleId.FP_SUB_PAUSED;
          }
          NONE = FP_ONLY;
        }
        FP_ONLY = unpackModuleId.FP_ONLY;
      }
      if (excludeReverseTrialFromCountdown) {
        let sourceType;
        if (first != null) {
          sourceType = first.sourceType;
        }
        excludeReverseTrialFromCountdown = sourceType === metroImportAll.REVERSE_TRIAL;
      }
      const obj7 = {
        isFractionalPremiumActive: null != first,
        fractionalState: NONE,
        startsAt: tmp10,
        endsAt: tmp2ResultResult,
        currentEntitlementId: str,
        currentEntitlementEndsAt: tmp17,
        unactivatedUnits: unactivatedFractionalPremiumUnits,
        fetched: fetchedAllEntitlements,
      };
      if (null != first) {
        tmp10 = _modDef4461(first.startsAt);
      } else {
        tmp10 = _modDef4461(0);
      }
      if (null != first) {
        const tmp2Result = _modDef4461;
        const obj4 = PremiumUtils;
        tmp2ResultResult = tmp2Result(
          obj4.extendDateWithUnconsumedFractionalPremium(
            first.endsAt,
            unactivatedFractionalPremiumUnits,
            undefined,
            excludeReverseTrialFromCountdown,
          ),
        );
      } else {
        tmp2ResultResult = _modDef4461(0);
      }
      str = "";
      if (null != first) {
        str = first.id;
      }
      if (null != first) {
        tmp17 = _modDef4461(first.endsAt);
      } else {
        tmp17 = _modDef4461(0);
      }
      return obj7;
    }
    return obj;
  }
}
({ EntitlementSourceTypes: metroImportAll, EntitlementTypes: c9, SubscriptionStatusTypes: c10 } = Constants);
({ FractionalPremiumStates: unpackModuleId, PREMIUM_SUBSCRIPTION_APPLICATION: closure_12 } = PremiumConstants);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let excludeReverseTrial;
      let excludeReverseTrialFromCountdown;
      let forceFetch;
      let stateFromStores1;
      let stateFromStores2;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp16;
      let tmp19;
      let tmp20;
      let tmp4;
      let tmp5;
      let tmp8;
      let obj = arg0;
      let tmp = forceFetch;
      let obj2 = forceFetch(excludeReverseTrialFromCountdown[12]);
      const cResult = obj2.c(20);
      if (undefined === arg0) {
        obj = { forceFetch: false, excludeReverseTrial: false, excludeReverseTrialFromCountdown: false };
      }
      forceFetch = obj.forceFetch;
      ({ excludeReverseTrial: importDefault, excludeReverseTrialFromCountdown } = obj);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let tmp6 = stateFromStores1;
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
      const tmpResult = tmp(excludeReverseTrialFromCountdown[13]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [stateFromStores2];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult5 = tmp(excludeReverseTrialFromCountdown[13]);
      const stateFromStoresArray = tmpResult5.useStateFromStoresArray(tmp8, () => {
        const obj = { excludeReverseTrial: importDefault };
        return EntitlementStore.getFractionalPremium(obj);
      });
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [stateFromStores2];
        class R {
          constructor() {
            return stateFromStores2.fetchedAllEntitlements;
          }
        }
        cResult[3] = items2;
        cResult[4] = R;
        tmp12 = R;
        tmp11 = items2;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmpResult6 = tmp(excludeReverseTrialFromCountdown[13]);
      stateFromStores1 = tmpResult6.useStateFromStores(tmp11, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [stateFromStores2];
        class I {
          constructor() {
            return stateFromStores2.getUnactivatedFractionalPremiumUnits();
          }
        }
        cResult[5] = items3;
        cResult[6] = I;
        tmp16 = I;
        tmp15 = items3;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const tmpResult7 = tmp(excludeReverseTrialFromCountdown[13]);
      const stateFromStoresArray1 = tmpResult7.useStateFromStoresArray(tmp15, tmp16);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [stateFromStoresArray1];
        class I {
          constructor() {
            return stateFromStores2.getUnactivatedFractionalPremiumUnits();
          }
        }
        cResult[7] = items4;
        cResult[8] = tmp22;
        tmp20 = tmp22;
        tmp19 = items4;
      } else {
        tmp19 = cResult[7];
        tmp20 = cResult[8];
      }
      const tmpResult8 = tmp(excludeReverseTrialFromCountdown[13]);
      stateFromStores2 = tmpResult8.useStateFromStores(tmp19, tmp20);
      let fetchingAllEntitlements = null != stateFromStores;
      const useState = stateFromStoresArray.useState;
      if (fetchingAllEntitlements) {
        fetchingAllEntitlements = !stateFromStores2.fetchingAllEntitlements;
      }
      if (fetchingAllEntitlements) {
        const tmp28 = !stateFromStores2.fetchedAllEntitlements;
        class I {
          constructor() {
            return stateFromStores2.getUnactivatedFractionalPremiumUnits();
          }
        }
        fetchingAllEntitlements = tmp28;
      }
      if (!fetchingAllEntitlements) {
        fetchingAllEntitlements = stateFromStores2.fetchingAllEntitlements;
      }
      if (!fetchingAllEntitlements) {
        if (null != stateFromStores) {
          let applicationIdsFetching = stateFromStores2.applicationIdsFetching;
          class I {
            constructor() {
              return stateFromStores2.getUnactivatedFractionalPremiumUnits();
            }
          }
        }
        if (null != stateFromStores) {
          let applicationIdsFetched = stateFromStores2.applicationIdsFetched;
          class I {
            constructor() {
              return stateFromStores2.getUnactivatedFractionalPremiumUnits();
            }
          }
        }
        class I {
          constructor() {
            return stateFromStores2.getUnactivatedFractionalPremiumUnits();
          }
        }
      }
      if (!fetchingAllEntitlements) {
        const applicationIdsFetching2 = stateFromStores2.applicationIdsFetching;
        class I {
          constructor() {
            return stateFromStores2.getUnactivatedFractionalPremiumUnits();
          }
        }
      }
      let closure_8 = stateFromStores(
        useState(
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
      stateFromStores(
        useState(
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
      if (cResult[9] === stateFromStores) {
        let tmp38;
        if (cResult[10] === forceFetch) {
          tmp38 = cResult[11];
        }
        require("useMountEffect")(tmp38);
        class I {
          constructor() {
            return stateFromStores2.getUnactivatedFractionalPremiumUnits();
          }
        }
        const fn2 = function w() {
          let obj = {
            entitlements: stateFromStoresArray,
            unactivatedFractionalPremiumUnits: stateFromStoresArray1,
            currentUser: stateFromStores,
            premiumSubscription: stateFromStores2,
            fetchedAllEntitlements: stateFromStores1,
            excludeReverseTrialFromCountdown,
          };
          let closure_0 = calculateFractionalPremiumInfo(obj);
          let tmp = closure_8((arg0) => {
            let tmp = closure_0;
            const obj = forceFetch(excludeReverseTrialFromCountdown[16]);
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
          let tmp3 = null != stateFromStores && !EntitlementStore.fetchingAllEntitlements;
          if (tmp3) {
            const fetchedAllEntitlements = EntitlementStore.fetchedAllEntitlements;
            let tmp6 = !fetchedAllEntitlements;
            if (fetchedAllEntitlements) {
              tmp6 = forceFetch;
            }
            tmp3 = tmp6;
          }
          if (tmp3) {
            const obj2 = { entitlementType: constants.FRACTIONAL_REDEMPTION };
            const obj = EntitlementActionCreators;
            const userEntitlements = obj.fetchUserEntitlements(obj2);
          }
          let tmp11 = null != stateFromStores;
          if (tmp11) {
            const applicationIdsFetching = EntitlementStore.applicationIdsFetching;
            tmp11 = !applicationIdsFetching.has(closure_12);
          }
          if (tmp11) {
            const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
            tmp11 = !applicationIdsFetched.has(closure_12);
          }
          if (tmp11) {
            const obj3 = EntitlementActionCreators;
            const userEntitlementsForApplication = obj3.fetchUserEntitlementsForApplication(closure_12);
          }
        }
      }
      cResult[9] = stateFromStores;
      cResult[10] = forceFetch;
      cResult[11] = C;
      tmp38 = C;
    }
  : () => {
      let excludeReverseTrial;
      let excludeReverseTrialFromCountdown;
      let obj = arg0;
      if (arg0 === undefined) {
        obj = { forceFetch: false, excludeReverseTrial: false, excludeReverseTrialFromCountdown: false };
      }
      const forceFetch = obj.forceFetch;
      ({ excludeReverseTrial: importDefault, excludeReverseTrialFromCountdown } = obj);
      let stateFromStores1;
      let stateFromStores2;
      let closure_8;
      let obj2 = forceFetch(excludeReverseTrialFromCountdown[13]);
      const items = [stateFromStores1];
      const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getCurrentUser());
      let obj3 = forceFetch(excludeReverseTrialFromCountdown[13]);
      let tmp3 = stateFromStores2;
      const items1 = [stateFromStores2];
      const stateFromStoresArray = obj3.useStateFromStoresArray(items1, () => {
        const obj = { excludeReverseTrial: importDefault };
        return EntitlementStore.getFractionalPremium(obj);
      });
      const items2 = [stateFromStores2];
      const obj4 = forceFetch(excludeReverseTrialFromCountdown[13]);
      stateFromStores1 = obj4.useStateFromStores(items2, () => stateFromStores2.fetchedAllEntitlements);
      const items3 = [stateFromStores2];
      const obj5 = forceFetch(excludeReverseTrialFromCountdown[13]);
      const stateFromStoresArray1 = obj5.useStateFromStoresArray(items3, () =>
        stateFromStores2.getUnactivatedFractionalPremiumUnits(),
      );
      const items4 = [stateFromStoresArray1];
      const obj6 = forceFetch(excludeReverseTrialFromCountdown[13]);
      stateFromStores2 = obj6.useStateFromStores(items4, () => stateFromStoresArray1.getPremiumTypeSubscription());
      let fetchingAllEntitlements = null != stateFromStores;
      const useState = stateFromStoresArray.useState;
      const obj7 = stateFromStoresArray;
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
        useState(
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
      const first = tmp14[0];
      require("useMountEffect")(() => {
        let tmp3 = null != stateFromStores && !EntitlementStore.fetchingAllEntitlements;
        if (tmp3) {
          const fetchedAllEntitlements = EntitlementStore.fetchedAllEntitlements;
          let tmp6 = !fetchedAllEntitlements;
          if (fetchedAllEntitlements) {
            tmp6 = forceFetch;
          }
          tmp3 = tmp6;
        }
        if (tmp3) {
          const obj2 = { entitlementType: constants.FRACTIONAL_REDEMPTION };
          const obj = EntitlementActionCreators;
          const userEntitlements = obj.fetchUserEntitlements(obj2);
        }
        let tmp11 = null != stateFromStores;
        if (tmp11) {
          const applicationIdsFetching = EntitlementStore.applicationIdsFetching;
          tmp11 = !applicationIdsFetching.has(closure_12);
        }
        if (tmp11) {
          const applicationIdsFetched = EntitlementStore.applicationIdsFetched;
          tmp11 = !applicationIdsFetched.has(closure_12);
        }
        if (tmp11) {
          const obj3 = EntitlementActionCreators;
          const userEntitlementsForApplication = obj3.fetchUserEntitlementsForApplication(closure_12);
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
      const effect = obj7.useEffect(() => {
        let obj = {
          entitlements: stateFromStoresArray,
          unactivatedFractionalPremiumUnits: stateFromStoresArray1,
          currentUser: stateFromStores,
          premiumSubscription: stateFromStores2,
          fetchedAllEntitlements: stateFromStores1,
          excludeReverseTrialFromCountdown,
        };
        let closure_0 = calculateFractionalPremiumInfo(obj);
        let tmp = closure_8((arg0) => {
          let tmp = closure_0;
          const obj = forceFetch(excludeReverseTrialFromCountdown[16]);
          if (obj.isEqual(arg0, closure_0)) {
            tmp = arg0;
          }
          return tmp;
        });
      }, items5);
      return first;
    };
let result = size.fileFinishedImporting("modules/billing/hooks/useFractionalPremiumInfo.tsx");

export default tmp4;
