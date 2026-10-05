// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import PremiumTypeUtils from "../../../../utils/PremiumTypeUtils.tsx";
import TieredTenureBadgeUtils from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import useTieredTenureBadgeForUser2 from "useTieredTenureBadgeForUser.tsx";
import TenureBadgeWithheldStateExperiment from "../../experiments/TenureBadgeWithheldStateExperiment.tsx";
import UserProfileStore from "../../../user_profile/UserProfileStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import PremiumConstants from "../../PremiumConstants.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require;

let hasOwnProperty;
let metroRequire;
({ PremiumTypes: hasOwnProperty, TENURE_BADGES: metroRequire } = PremiumConstants);
const TieredTenureBadgeStatus = { UPCOMING: "upcoming", WITHHELD: "withheld", EARNED: "earned" };
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let id;
      const useTieredTenureBadgeForUser = useTieredTenureBadgeForUser2.useTieredTenureBadgeForUser;
      useTieredTenureBadgeForUser2;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let tieredTenureBadgeForUser = useTieredTenureBadgeForUser(id);
      if (tieredTenureBadgeForUser == null) {
        tieredTenureBadgeForUser = null;
      }
      return tieredTenureBadgeForUser;
    }
  : () => {
      let currentUser;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id;
      const useTieredTenureBadgeForUser = useTieredTenureBadgeForUser2.useTieredTenureBadgeForUser;
      useTieredTenureBadgeForUser2;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let tieredTenureBadgeForUser = useTieredTenureBadgeForUser(id);
      if (tieredTenureBadgeForUser == null) {
        tieredTenureBadgeForUser = null;
      }
      return tieredTenureBadgeForUser;
    };
let closure_8 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          if (null == closure_0) {
            return null;
          } else {
            const userProfile = UserProfileStore.getUserProfile(tmp);
            let premiumSince;
            if (userProfile != null) {
              premiumSince = userProfile.premiumSince;
            }
            return premiumSince;
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [UserProfileStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        if (null == closure_0) {
          return null;
        } else {
          const userProfile = UserProfileStore.getUserProfile(tmp);
          let premiumSince;
          if (userProfile != null) {
            premiumSince = userProfile.premiumSince;
          }
          return premiumSince;
        }
      });
    };
let closure_9 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let currentUser;
      let id;
      let tmp11;
      let tmp13;
      let tmp14;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const tmpResult3 = require("PremiumTypeUtils");
        const isPremiumExactlyResult = tmpResult3.isPremiumExactly(stateFromStores, closure_5.TIER_2);
        cResult[2] = stateFromStores;
        cResult[3] = isPremiumExactlyResult;
        tmp8 = isPremiumExactlyResult;
      } else {
        tmp8 = cResult[3];
      }
      _require = tmp8;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        cResult[4] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== tmp8) {
        const fn2 = function p() {
          const premiumSubscription = SubscriptionStore.getPremiumSubscription();
          let premiumSince = null;
          if (null != premiumSubscription) {
            premiumSince = null;
            if (closure_0) {
              premiumSince = premiumSubscription.premiumSince;
            }
          }
          return premiumSince;
        };
        const items2 = [tmp8];
        cResult[5] = tmp8;
        cResult[6] = fn2;
        cResult[7] = items2;
        tmp14 = items2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[6];
        tmp14 = cResult[7];
      }
      const tmpResult4 = require("get initialized");
      let stateFromStores1 = tmpResult4.useStateFromStores(tmp11, tmp13, tmp14);
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (stateFromStores1 == null) {
        stateFromStores1 = closure_9(id);
      }
      return stateFromStores1;
    }
  : () => {
      let currentUser;
      let id;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj2 = PremiumTypeUtils;
      const isPremiumExactlyResult = obj2.isPremiumExactly(stateFromStores, closure_5.TIER_2);
      const require = isPremiumExactlyResult;
      const items1 = [SubscriptionStore];
      const items2 = [isPremiumExactlyResult];
      const obj3 = get_initialized;
      let stateFromStores1 = obj3.useStateFromStores(
        items1,
        () => {
          const premiumSubscription = SubscriptionStore.getPremiumSubscription();
          let premiumSince = null;
          if (null != premiumSubscription) {
            premiumSince = null;
            if (require) {
              premiumSince = premiumSubscription.premiumSince;
            }
          }
          return premiumSince;
        },
        items2,
      );
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      if (stateFromStores1 == null) {
        stateFromStores1 = closure_9(id);
      }
      return stateFromStores1;
    };
let closure_10 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let premiumTypeSubscription;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react;
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        class S {
          constructor() {
            return premiumTypeSubscription.getPremiumTypeSubscription();
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        tmp9 = S;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult4 = get_initialized;
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp9);
      const tmpResult5 = PremiumTypeUtils;
      if (tmpResult5.isPremiumExactly(stateFromStores, hasOwnProperty.TIER_2)) {
        let premiumSince;
        if (stateFromStores1 != null) {
          premiumSince = stateFromStores1.premiumSince;
        }
        if (cResult[4] !== premiumSince) {
          const tmpResult6 = TieredTenureBadgeUtils;
          const earnedTenureBadge = tmpResult6.getEarnedTenureBadge(premiumSince);
          class S {
            constructor() {
              return premiumTypeSubscription.getPremiumTypeSubscription();
            }
          }
          cResult[5] = earnedTenureBadge;
        }
        class S {
          constructor() {
            return premiumTypeSubscription.getPremiumTypeSubscription();
          }
        }
      } else {
        return null;
      }
    }
  : () => {
      let currentUser;
      let premiumTypeSubscription;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [SubscriptionStore];
      const obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      let earnedTenureBadge = null;
      const obj3 = PremiumTypeUtils;
      if (obj3.isPremiumExactly(stateFromStores, hasOwnProperty.TIER_2)) {
        let premiumSince;
        const getEarnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge;
        TieredTenureBadgeUtils;
        if (stateFromStores1 != null) {
          premiumSince = stateFromStores1.premiumSince;
        }
        earnedTenureBadge = getEarnedTenureBadge(premiumSince);
      }
      return earnedTenureBadge;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let premiumTypeSubscription;
      let tmp5;
      let tmp6;
      const obj = react;
      const cResult = obj.c(5);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionStore];
        const fn = function n() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      let tmp9 = null;
      if (null != tmp4) {
        tmp9 = null;
        if (null != stateFromStores) {
          tmp9 = null;
          if (null != stateFromStores.premiumSince) {
            if (cResult[2] === tmp4) {
              let tmp10;
              if (cResult[3] === stateFromStores.premiumSince) {
                tmp10 = cResult[4];
              }
              tmp9 = tmp10;
            }
            const tmpResult2 = TieredTenureBadgeUtils;
            const earnedOnDate = tmpResult2.getEarnedOnDate(tmp4, stateFromStores.premiumSince);
            cResult[2] = tmp4;
            cResult[3] = stateFromStores.premiumSince;
            cResult[4] = earnedOnDate;
            tmp10 = earnedOnDate;
          }
        }
      }
      return tmp9;
    }
  : () => {
      let premiumTypeSubscription;
      const tmp = closure_8();
      const items = [SubscriptionStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => premiumTypeSubscription.getPremiumTypeSubscription());
      let earnedOnDate = null;
      if (null != tmp) {
        earnedOnDate = null;
        if (null != stateFromStores) {
          earnedOnDate = null;
          if (null != stateFromStores.premiumSince) {
            const tmp2Result = TieredTenureBadgeUtils;
            earnedOnDate = tmp2Result.getEarnedOnDate(tmp, stateFromStores.premiumSince);
          }
        }
      }
      return earnedOnDate;
    };
let closure_11 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let tmp4;
      let tmp5;
      let tmpResult6;
      const obj = react;
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp7Result = closure_12(id);
      const tmp10 = closure_11();
      const tmp11 = closure_10();
      if (null != tmp7Result) {
        if (cResult[2] === tmp7Result) {
          let tmp26;
          if (cResult[3] === tmp10) {
            tmp26 = cResult[4];
          }
          return tmp26;
        }
        const obj2 = { earnedOnDate: tmp10, status: obj.EARNED };
        const merged = Object.assign(tmp7Result);
        cResult[2] = tmp7Result;
        cResult[3] = tmp10;
        cResult[4] = obj2;
        tmp26 = obj2;
      } else if (null == tmp11) {
        return null;
      } else {
        let tmp21;
        let result;
        if (stateFromStores != null) {
          result = stateFromStores.hasPaidTier2Subscription();
        }
        if (!result) {
          let tmp13;
          if (cResult[5] !== tmp11) {
            const _Symbol = Symbol;
            let forResult = Symbol.for("react.early_return_sentinel");
            const tmpResult4 = TieredTenureBadgeUtils;
            const earnedTenureBadge = tmpResult4.getEarnedTenureBadge(tmp11);
            let result1 = null != earnedTenureBadge;
            if (result1) {
              const tmpResult5 = TenureBadgeWithheldStateExperiment;
              result1 = tmpResult5.shouldShowWithheldTenureBadge("useTieredTenureBadgeData");
            }
            if (result1) {
              const obj3 = { earnedOnDate: tmpResult6.getEarnedOnDate(earnedTenureBadge, tmp11), status: obj.WITHHELD };
              const merged1 = Object.assign(metroRequire[earnedTenureBadge]);
              forResult = obj3;
              tmpResult6 = TieredTenureBadgeUtils;
            }
            cResult[5] = tmp11;
            cResult[6] = forResult;
            tmp13 = forResult;
          } else {
            tmp13 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (tmp13 !== Symbol.for("react.early_return_sentinel")) {
            return tmp13;
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { status: obj.UPCOMING };
          const _Object = Object;
          const merged2 = Object.assign(Object.values(metroRequire)[0]);
          cResult[7] = obj4;
          tmp21 = obj4;
        } else {
          tmp21 = cResult[7];
        }
        return tmp21;
      }
    }
  : () => {
      let currentUser;
      let tmpResult4;
      const obj = get_initialized;
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp3Result = closure_12(id);
      const tmp6 = closure_11();
      const tmp7 = closure_10();
      if (null != tmp3Result) {
        const obj2 = { earnedOnDate: tmp6, status: obj.EARNED };
        const merged = Object.assign(tmp3Result);
        return obj2;
      } else if (null == tmp7) {
        return null;
      } else {
        let result;
        if (stateFromStores != null) {
          result = stateFromStores.hasPaidTier2Subscription();
        }
        if (!result) {
          const tmpResult = TieredTenureBadgeUtils;
          const earnedTenureBadge = tmpResult.getEarnedTenureBadge(tmp7);
          if (null != earnedTenureBadge) {
            const tmpResult3 = TenureBadgeWithheldStateExperiment;
            if (tmpResult3.shouldShowWithheldTenureBadge("useTieredTenureBadgeData")) {
              const obj3 = { earnedOnDate: tmpResult4.getEarnedOnDate(earnedTenureBadge, tmp7), status: obj.WITHHELD };
              const merged1 = Object.assign(metroRequire[earnedTenureBadge]);
              tmpResult4 = TieredTenureBadgeUtils;
              return obj3;
            }
          }
        }
        const _Object = Object;
        const obj4 = { status: obj.UPCOMING };
        const merged2 = Object.assign(Object.values(metroRequire)[0]);
        return obj4;
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = useTieredTenureBadgeForUser2;
      const tieredTenureBadgeForUser = obj.useTieredTenureBadgeForUser(arg0);
      let tmp2 = null;
      if (null != tieredTenureBadgeForUser) {
        tmp2 = metroRequire[tieredTenureBadgeForUser];
      }
      return tmp2;
    }
  : (arg0) => {
      const obj = useTieredTenureBadgeForUser2;
      const tieredTenureBadgeForUser = obj.useTieredTenureBadgeForUser(arg0);
      let tmp2 = null;
      if (null != tieredTenureBadgeForUser) {
        tmp2 = metroRequire[tieredTenureBadgeForUser];
      }
      return tmp2;
    };
let closure_12 = tmp9;
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export { TieredTenureBadgeStatus };
export const useTieredTenureBadge = tmp3;
export const usePremiumSinceForUser = tmp4;
export const usePremiumSince = tmp5;
export const useTieredTenureBadgesFromSubscriptionData = tmp6;
export const useTieredTenureEarnedOnDate = tmp7;
export const useTieredTenureBadgeData = tmp8;
export const useTieredTenureBadgeDataForUser = tmp9;
