// discord_app/modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import PremiumTypeUtils from "../../../../utils/PremiumTypeUtils.tsx";
import TieredTenureBadgeUtils from "../../../user_profile/TieredTenureBadgeUtils.tsx";
import useTieredTenureBadgeForUser from "useTieredTenureBadgeForUser.tsx";
import TenureBadgeWithheldStateExperiment from "../../experiments/TenureBadgeWithheldStateExperiment.tsx";
import UserProfileStore from "../../../user_profile/UserProfileStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";

require = fn;
const PremiumConstants = fn(1391);
({ PremiumTypes: hasOwnProperty, TENURE_BADGES: metroRequire } = PremiumConstants);
const TieredTenureBadgeStatus = { UPCOMING: "upcoming", WITHHELD: "withheld", EARNED: "earned" };
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTieredTenureBadge() {
      const cResult = c.c(2);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const tmpResult = initialize;
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(id);
      if (tieredTenureBadgeForUser == null) {
        tieredTenureBadgeForUser = null;
      }
      return tieredTenureBadgeForUser;
    }
  : function useTieredTenureBadge() {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(id);
      if (tieredTenureBadgeForUser == null) {
        tieredTenureBadgeForUser = null;
      }
      return tieredTenureBadgeForUser;
    };
let closure_8 = tmp3;
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePremiumSinceForUser(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserProfileStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : function usePremiumSinceForUser(arg0) {
      _require = arg0;
      const items = [UserProfileStore];
      return require("initialize").useStateFromStores(items, () => {
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
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePremiumSince() {
      const cResult = require("c").c(8);
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
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const isPremiumExactlyResult = tmp(1988).isPremiumExactly(stateFromStores, closure_5.TIER_2);
        cResult[2] = stateFromStores;
        cResult[3] = isPremiumExactlyResult;
        let tmp8 = isPremiumExactlyResult;
        const tmpResult3 = tmp(1988);
      } else {
        tmp8 = cResult[3];
      }
      _require = tmp8;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        cResult[4] = items1;
        let tmp11 = items1;
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
        let tmp14 = items2;
        let tmp13 = fn2;
      } else {
        tmp13 = cResult[6];
        tmp14 = cResult[7];
      }
      const tmpResult = require("initialize");
      let stateFromStores1 = require("initialize").useStateFromStores(tmp11, tmp13, tmp14);
      if (stateFromStores != null) {
        const id = stateFromStores.id;
      }
      if (stateFromStores1 == null) {
        stateFromStores1 = closure_9(id);
      }
      return stateFromStores1;
    }
  : function usePremiumSince() {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      const isPremiumExactlyResult = PremiumTypeUtils.isPremiumExactly(stateFromStores, closure_5.TIER_2);
      const require = isPremiumExactlyResult;
      const items1 = [SubscriptionStore];
      const items2 = [isPremiumExactlyResult];
      let stateFromStores1 = initialize.useStateFromStores(
        items1,
        () => {
          const premiumSubscription = SubscriptionStore.getPremiumSubscription();
          let premiumSince = null;
          if (null != premiumSubscription) {
            premiumSince = null;
            if (isPremiumExactlyResult) {
              premiumSince = premiumSubscription.premiumSince;
            }
          }
          return premiumSince;
        },
        items2,
      );
      if (stateFromStores != null) {
        const id = stateFromStores.id;
      }
      if (stateFromStores1 == null) {
        stateFromStores1 = closure_9(id);
      }
      return stateFromStores1;
    };
let closure_10 = tmp5;
fn(558);
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTieredTenureEarnedOnDate() {
      let getEarnedOnDate = require;
      let earnedOnDate2 = dependencyMap;
      const cResult = c.c(5);
      const tmp3 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SubscriptionStore];
        const fn = function t() {
          return premiumTypeSubscription.getPremiumTypeSubscription();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const earnedOnDate = initialize;
      let premiumSince = earnedOnDate.useStateFromStores(tmp4, tmp5);
      let tmp7 = null;
      if (null != tmp3) {
        tmp7 = null;
        if (null != premiumSince) {
          tmp7 = null;
          if (null != premiumSince.premiumSince) {
            if (cResult[2] === tmp3) {
            }
            const earnedOnDate1 = TieredTenureBadgeUtils;
            getEarnedOnDate = earnedOnDate1.getEarnedOnDate;
            earnedOnDate2 = getEarnedOnDate(tmp3, premiumSince.premiumSince);
            cResult[2] = tmp3;
            premiumSince = premiumSince.premiumSince;
            cResult[3] = premiumSince;
            cResult[4] = earnedOnDate2;
          }
        }
      }
      return tmp7;
    }
  : function useTieredTenureEarnedOnDate() {
      const tmp = closure_8();
      const items = [SubscriptionStore];
      const stateFromStores = initialize.useStateFromStores(items, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      let earnedOnDate = null;
      if (null != tmp) {
        earnedOnDate = null;
        if (null != stateFromStores) {
          earnedOnDate = null;
          if (null != stateFromStores.premiumSince) {
            earnedOnDate = TieredTenureBadgeUtils.getEarnedOnDate(tmp, stateFromStores.premiumSince);
            const tmp2Result = TieredTenureBadgeUtils;
          }
        }
      }
      return earnedOnDate;
    };
let closure_11 = tmp7;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTieredTenureBadgesFromSubscriptionData() {
      const cResult = c.c(6);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SubscriptionStore];
        class S {
          constructor() {
            return closure_1_4.getPremiumTypeSubscription();
          }
        }
        cResult[2] = items1;
        cResult[3] = S;
        let tmp9 = S;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = initialize;
      const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
      const tmpResult4 = initialize;
      if (tmpResult5.isPremiumExactly(stateFromStores, hasOwnProperty.TIER_2)) {
        let premiumSince;
        if (stateFromStores1 != null) {
          premiumSince = stateFromStores1.premiumSince;
        }
        if (cResult[4] !== premiumSince) {
          const earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(premiumSince);
          class S {
            constructor() {
              return closure_1_4.getPremiumTypeSubscription();
            }
          }
          cResult[5] = earnedTenureBadge;
          const tmpResult6 = TieredTenureBadgeUtils;
        }
        class S {
          constructor() {
            return closure_1_4.getPremiumTypeSubscription();
          }
        }
      } else {
        return null;
      }
      tmpResult5 = PremiumTypeUtils;
    }
  : function useTieredTenureBadgesFromSubscriptionData() {
      const items = [UserStore];
      const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [SubscriptionStore];
      const stateFromStores1 = initialize.useStateFromStores(items1, () =>
        premiumTypeSubscription.getPremiumTypeSubscription(),
      );
      let earnedTenureBadge = null;
      if (obj3.isPremiumExactly(stateFromStores, hasOwnProperty.TIER_2)) {
        let premiumSince;
        if (stateFromStores1 != null) {
          premiumSince = stateFromStores1.premiumSince;
        }
        earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(premiumSince);
        const tmpResult = TieredTenureBadgeUtils;
      }
      return earnedTenureBadge;
    };
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTieredTenureBadgeDataForUser(arg0) {
      const tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(arg0);
      let tmp2 = null;
      if (null != tieredTenureBadgeForUser) {
        tmp2 = dependencyMap[tieredTenureBadgeForUser];
      }
      return tmp2;
    }
  : function useTieredTenureBadgeDataForUser(arg0) {
      const tieredTenureBadgeForUser = useTieredTenureBadgeForUser.useTieredTenureBadgeForUser(arg0);
      let tmp2 = null;
      if (null != tieredTenureBadgeForUser) {
        tmp2 = dependencyMap[tieredTenureBadgeForUser];
      }
      return tmp2;
    };
let closure_12 = tmp9;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/hooks/useTenureBadging.tsx");

export { TieredTenureBadgeStatus };
export const useTieredTenureBadge = tmp3;
export const usePremiumSinceForUser = tmp4;
export const usePremiumSince = tmp5;
export const useTieredTenureBadgesFromSubscriptionData = tmp6;
export const useTieredTenureEarnedOnDate = tmp7;
export const useTieredTenureBadgeData = ReactCompilerGating.isReactCompilerEnabled()
  ? function useTieredTenureBadgeData() {
      const obj = c;
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp7Result = closure_12(id);
      const tmp10 = closure_11();
      const tmp11 = closure_10();
      if (null != tmp7Result) {
        if (cResult[2] === tmp7Result) {
          if (cResult[3] === tmp10) {
            let tmp26 = cResult[4];
          }
          return tmp26;
        }
        const obj2 = {};
        const merged = Object.assign(tmp7Result);
        obj2.earnedOnDate = tmp10;
        obj2.status = obj.EARNED;
        cResult[2] = tmp7Result;
        cResult[3] = tmp10;
        cResult[4] = obj2;
        tmp26 = obj2;
      } else if (null == tmp11) {
        return null;
      } else {
        let result;
        if (stateFromStores != null) {
          result = stateFromStores.hasPaidTier2Subscription();
        }
        if (!result) {
          if (cResult[5] !== tmp11) {
            const _Symbol = Symbol;
            let forResult = Symbol.for("react.early_return_sentinel");
            const earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(tmp11);
            let result1 = null != earnedTenureBadge;
            if (result1) {
              result1 = TenureBadgeWithheldStateExperiment.shouldShowWithheldTenureBadge("useTieredTenureBadgeData");
              const tmpResult5 = TenureBadgeWithheldStateExperiment;
            }
            if (result1) {
              const obj3 = {};
              const merged1 = Object.assign(dependencyMap[earnedTenureBadge]);
              obj3.earnedOnDate = TieredTenureBadgeUtils.getEarnedOnDate(earnedTenureBadge, tmp11);
              obj3.status = obj.WITHHELD;
              forResult = obj3;
              const tmpResult6 = TieredTenureBadgeUtils;
            }
            cResult[5] = tmp11;
            cResult[6] = forResult;
            let tmp13 = forResult;
            const tmpResult4 = TieredTenureBadgeUtils;
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
          const obj4 = {};
          const _Object = Object;
          const merged2 = Object.assign(Object.values(dependencyMap)[0]);
          obj4.status = obj.UPCOMING;
          cResult[7] = obj4;
          let tmp21 = obj4;
        } else {
          tmp21 = cResult[7];
        }
        return tmp21;
      }
      const tmpResult = initialize;
    }
  : function useTieredTenureBadgeData() {
      const obj = initialize;
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      const tmp3Result = closure_12(id);
      const tmp7 = closure_10();
      if (null != tmp3Result) {
        const obj2 = {};
        const merged = Object.assign(tmp3Result);
        obj2.earnedOnDate = tmp6;
        obj2.status = obj.EARNED;
        return obj2;
      } else if (null == tmp7) {
        return null;
      } else {
        let result;
        if (stateFromStores != null) {
          result = stateFromStores.hasPaidTier2Subscription();
        }
        if (!result) {
          const earnedTenureBadge = TieredTenureBadgeUtils.getEarnedTenureBadge(tmp7);
          if (null != earnedTenureBadge) {
            if (tmpResult3.shouldShowWithheldTenureBadge("useTieredTenureBadgeData")) {
              const obj3 = {};
              const merged1 = Object.assign(dependencyMap[earnedTenureBadge]);
              obj3.earnedOnDate = TieredTenureBadgeUtils.getEarnedOnDate(earnedTenureBadge, tmp7);
              obj3.status = obj.WITHHELD;
              return obj3;
            }
            tmpResult3 = TenureBadgeWithheldStateExperiment;
          }
          const tmpResult = TieredTenureBadgeUtils;
        }
        const obj4 = {};
        const _Object = Object;
        const merged2 = Object.assign(Object.values(dependencyMap)[0]);
        obj4.status = obj.UPCOMING;
        return obj4;
      }
      tmp6 = closure_11();
    };
export const useTieredTenureBadgeDataForUser = tmp9;
