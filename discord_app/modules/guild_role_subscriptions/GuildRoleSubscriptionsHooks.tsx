// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx
import c from "../../../_runtime/00576_c.js";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators.tsx";
import useRequestDefault from "../../hooks/useRequest.tsx";
import subscriptionUtils from "subscriptionUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore.tsx";

const require = globalThis.__r;

require = fn;
const FetchState = fn(4702).FetchState;
let closure_10 = [];
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchListingsForGuild(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(17);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ refetchOnMount, includeSoftDeleted, countryCode } = tmp4);
      const dontFetchWhileTrue = tmp4.dontFetchWhileTrue;
      dependencyMap = tmp5;
      includeSoftDeleted = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        class S {
          constructor() {
            return closure_1_7.isConnected();
          }
        }
        cResult[2] = items;
        cResult[3] = S;
        let tmp8 = S;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildRoleSubscriptionsStore];
        class S {
          constructor() {
            return closure_1_7.isConnected();
          }
        }
        cResult[4] = items1;
        let tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== arg0) {
        const fn = function _() {
          if (null != closure_0) {
            let FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
          } else {
            FETCHED = FetchState.FETCHED;
          }
          return FETCHED;
        };
        cResult[5] = arg0;
        class S {
          constructor() {
            return closure_1_7.isConnected();
          }
        }
        cResult[6] = fn;
        let tmp13 = fn;
      } else {
        tmp13 = cResult[6];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp11, tmp13);
      ref = ref.useRef(undefined !== refetchOnMount && refetchOnMount);
      if (cResult[7] === countryCode) {
        if (cResult[8] === dontFetchWhileTrue) {
          if (cResult[9] === arg0) {
            if (cResult[10] === tmp6) {
              if (cResult[11] === stateFromStores) {
                if (cResult[12] === tmp5) {
                  let tmp16 = cResult[13];
                  let tmp17 = cResult[14];
                }
                const effect = obj5.useEffect(tmp16, tmp17);
                class S {
                  constructor() {
                    return closure_1_7.isConnected();
                  }
                }
                let tmp21 = stateFromStores1 === FetchState.FETCHED;
                if (tmp21) {
                  tmp21 = true !== tmp20;
                }
                if (cResult[15] !== tmp21) {
                  const obj3 = { listingsLoaded: tmp21 };
                  class S {
                    constructor() {
                      return closure_1_7.isConnected();
                    }
                  }
                  cResult[16] = obj3;
                  let tmp22 = obj3;
                } else {
                  tmp22 = cResult[16];
                }
                return tmp22;
              }
            }
          }
        }
      }
      class D {
        constructor() {
          tmp = closure_0;
          if (null != closure_0) {
            tmp13 = closure_5;
            if (closure_5) {
              tmp2 = dontFetchWhileTrue;
              flag = true;
              if (true !== dontFetchWhileTrue) {
                tmp3 = closure_8;
                tmp5 = refetchOnMount;
                if (!refetchOnMount) {
                  tmp6 = FetchState;
                  tmp5 = tmp4 === FetchState.NOT_FETCHED;
                }
                if (tmp5) {
                  tmp7 = closure_6;
                  flag2 = false;
                  closure_6.current = false;
                  tmp8 = closure_2;
                  tmp9 = closure_3;
                  obj = closure_2(closure_3[8]);
                  obj1 = { includeSoftDeleted: null, countryCode: null };
                  tmp10 = includeSoftDeleted;
                  obj1.includeSoftDeleted = includeSoftDeleted;
                  tmp11 = countryCode;
                  obj1.countryCode = countryCode;
                  allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(tmp, obj1);
                }
              }
            }
          }
          return;
        }
      }
      const items2 = [
        stateFromStores,
        arg0,
        undefined === includeSoftDeleted || includeSoftDeleted,
        undefined !== refetchOnMount && refetchOnMount,
        countryCode,
        dontFetchWhileTrue,
      ];
      cResult[7] = countryCode;
      cResult[8] = dontFetchWhileTrue;
      cResult[9] = arg0;
      cResult[10] = undefined === includeSoftDeleted || includeSoftDeleted;
      cResult[11] = stateFromStores;
      cResult[12] = undefined !== refetchOnMount && refetchOnMount;
      cResult[13] = D;
      cResult[14] = items2;
      tmp17 = items2;
      tmp16 = D;
      obj5 = ref;
      const tmpResult2 = require("initialize");
    }
  : function useFetchListingsForGuild(arg0) {
      _require = arg0;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let flag = obj.refetchOnMount;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = obj.includeSoftDeleted;
      if (flag2 === undefined) {
        flag2 = true;
      }
      const countryCode = obj.countryCode;
      const dontFetchWhileTrue = obj.dontFetchWhileTrue;
      let ref;
      const items = [GatewayConnectionStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => connected.isConnected());
      let obj2 = require("initialize");
      const items1 = [GuildRoleSubscriptionsStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
        if (null != closure_0) {
          let FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
        } else {
          FETCHED = FetchState.FETCHED;
        }
        return FETCHED;
      });
      ref = ref.useRef(flag);
      const items2 = [stateFromStores, arg0, flag2, flag, countryCode, dontFetchWhileTrue];
      const effect = ref.useEffect(() => {
        if (null != closure_0) {
          if (stateFromStores) {
            if (true !== dontFetchWhileTrue) {
              let tmp5 = flag;
              if (!flag) {
                tmp5 = tmp4 === FetchState.NOT_FETCHED;
              }
              if (tmp5) {
                ref.current = false;
                const obj2 = { includeSoftDeleted: false, countryCode };
                const allSubscriptionListingsDataForGuild =
                  GuildRoleSubscriptionsActionCreatorsAll.fetchAllSubscriptionListingsDataForGuild(closure_0, obj2);
              }
            }
          }
        }
      }, items2);
      let listingsLoaded = stateFromStores1 === FetchState.FETCHED;
      if (listingsLoaded) {
        listingsLoaded = true !== tmp5;
      }
      return { listingsLoaded };
    };
let closure_11 = tmp2;
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionListingsForGroup(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(8);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ includeSoftDeleted, includeUnpublished } = tmp4);
      closure_1 = tmp5;
      closure_2 = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleSubscriptionsStore];
        cResult[2] = items;
        let tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === arg0) {
        if (cResult[4] === tmp5) {
          if (cResult[5] === tmp6) {
            let tmp9 = cResult[6];
            let tmp10 = cResult[7];
          }
          return tmp(504).useStateFromStoresArray(tmp7, tmp9, tmp10);
        }
      }
      const fn = function l() {
        if (null == closure_0) {
          return [];
        } else {
          const subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
          if (null == subscriptionGroupListing) {
            return [];
          } else {
            const items = [];
            const subscription_listings_ids = subscriptionGroupListing.subscription_listings_ids;
            for (const item10009 of subscription_listings_ids) {
              let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10009);
              let tmp6 = subscriptionListing;
              if (null != subscriptionListing) {
                let soft_deleted = tmp6.soft_deleted;
                if (soft_deleted) {
                  soft_deleted = !closure_1;
                }
                if (!soft_deleted) {
                  let published = tmp6.published;
                  if (!published) {
                    published = closure_2;
                  }
                  if (published) {
                    let arr = items.push(tmp6);
                  }
                }
              }
              continue;
            }
            return items;
          }
        }
      };
      const items1 = [
        arg0,
        undefined !== includeSoftDeleted && includeSoftDeleted,
        undefined === includeUnpublished || includeUnpublished,
      ];
      cResult[3] = arg0;
      cResult[4] = undefined !== includeSoftDeleted && includeSoftDeleted;
      cResult[5] = undefined === includeUnpublished || includeUnpublished;
      cResult[6] = fn;
      cResult[7] = items1;
      tmp10 = items1;
      tmp9 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : function useSubscriptionListingsForGroup(arg0) {
      _require = arg0;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = {};
      }
      let flag = obj.includeSoftDeleted;
      if (flag === undefined) {
        flag = false;
      }
      let flag2 = obj.includeUnpublished;
      if (flag2 === undefined) {
        flag2 = true;
      }
      let items = [GuildRoleSubscriptionsStore];
      const items1 = [arg0, flag, flag2];
      return require("initialize").useStateFromStoresArray(
        items,
        () => {
          if (null == closure_0) {
            return [];
          } else {
            const subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
            if (null == subscriptionGroupListing) {
              return [];
            } else {
              const items = [];
              const subscription_listings_ids = subscriptionGroupListing.subscription_listings_ids;
              for (const item10009 of subscription_listings_ids) {
                let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10009);
                let tmp6 = subscriptionListing;
                if (null != subscriptionListing) {
                  let soft_deleted = tmp6.soft_deleted;
                  if (soft_deleted) {
                    soft_deleted = !flag;
                  }
                  if (!soft_deleted) {
                    let published = tmp6.published;
                    if (!published) {
                      published = flag2;
                    }
                    if (published) {
                      let arr = items.push(tmp6);
                    }
                  }
                }
                continue;
              }
              return items;
            }
          }
        },
        items1,
      );
    };
let closure_12 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionListing(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          let subscriptionListing = null;
          if (null != closure_0) {
            subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(tmp);
          }
          return subscriptionListing;
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
  : function useSubscriptionListing(arg0) {
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      return require("initialize").useStateFromStores(items, () => {
        let subscriptionListing = null;
        if (null != closure_0) {
          subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(tmp);
        }
        return subscriptionListing;
      });
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionGroupListing(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          let subscriptionGroupListing = null;
          if (null != closure_0) {
            subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
          }
          return subscriptionGroupListing;
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
  : function useSubscriptionGroupListing(arg0) {
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      return require("initialize").useStateFromStores(items, () => {
        let subscriptionGroupListing = null;
        if (null != closure_0) {
          subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
        }
        return subscriptionGroupListing;
      });
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionListingsForGuild(arg0, arg1) {
      _require = arg0;
      const cResult = require("c").c(6);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = { includeSoftDeleted: false, sortDeletedListingsLast: false };
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      closure_1 = tmp4;
      closure_11(arg0);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[2] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === arg0) {
        if (cResult[4] === tmp4) {
          let tmp8 = cResult[5];
        }
        return tmp(504).useStateFromStoresArray(tmp6, tmp8);
      }
      const fn = function p() {
        let tmp = closure_0;
        if (null != closure_0) {
          let subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
        } else {
          subscriptionGroupListingsForGuild = closure_10;
        }
        tmp = subscriptionGroupListingsForGuild;
        subscriptionGroupListingsForGuild[Symbol.iterator]();
      };
      cResult[3] = arg0;
      cResult[4] = tmp4;
      cResult[5] = fn;
      tmp8 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : function useSubscriptionListingsForGuild(arg0) {
      _require = arg0;
      if (arg1 === undefined) {
        const obj = { includeSoftDeleted: false, sortDeletedListingsLast: false };
      }
      closure_11(arg0);
      const items = [GuildRoleSubscriptionsStore];
      return require("initialize").useStateFromStoresArray(items, () => {
        let tmp = closure_0;
        if (null != closure_0) {
          let subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
        } else {
          subscriptionGroupListingsForGuild = closure_10;
        }
        tmp = subscriptionGroupListingsForGuild;
        subscriptionGroupListingsForGuild[Symbol.iterator]();
      });
    };
let closure_13 = tmp7;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGroupListingsForGuild(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      const obj = require("c");
      const tmp = _require;
      const groupListingsFetchContext =
        require("GroupListingsFetchContext").useGroupListingsFetchContext("useGroupListingsForGuild");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === groupListingsFetchContext) {
          let tmp7 = cResult[3];
        }
        return tmp(504).useStateFromStores(first, tmp7);
      }
      const fn = function n() {
        if (null != closure_0) {
          if (groupListingsFetchContext) {
            let subscriptionGroupListingsForGuild =
              GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
          }
          return subscriptionGroupListingsForGuild;
        }
        subscriptionGroupListingsForGuild = closure_10;
      };
      cResult[1] = arg0;
      cResult[2] = groupListingsFetchContext;
      cResult[3] = fn;
      tmp7 = fn;
      const obj2 = require("GroupListingsFetchContext");
    }
  : function useGroupListingsForGuild(arg0) {
      _require = arg0;
      closure_1 = require("GroupListingsFetchContext").useGroupListingsFetchContext("useGroupListingsForGuild");
      const obj = require("GroupListingsFetchContext");
      const items = [GuildRoleSubscriptionsStore];
      return require("initialize").useStateFromStores(items, () => {
        if (null != closure_0) {
          if (closure_1) {
            let subscriptionGroupListingsForGuild =
              GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
          }
          return subscriptionGroupListingsForGuild;
        }
        subscriptionGroupListingsForGuild = closure_10;
      });
    };
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      const cResult = loading(stateFromStoresArray[6]).c(12);
      [loading, importDefault] = noop.useState(false);
      if (cResult[0] !== arr) {
        const mapped = arr.map(tmp(tmp2[11]).getRoleSubscriptionPlanId);
        cResult[0] = arr;
        cResult[1] = mapped;
        let tmp6 = mapped;
      } else {
        tmp6 = cResult[1];
      }
      closure_2 = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[2] = items;
        let tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp6) {
        const fn = function f() {
          return closure_2.filter(
            (item) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(item),
          );
        };
        const items1 = [tmp6];
        cResult[3] = tmp6;
        cResult[4] = fn;
        cResult[5] = items1;
        let tmp11 = items1;
        let tmp10 = fn;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const obj = loading(stateFromStoresArray[6]);
      stateFromStoresArray = loading(stateFromStoresArray[7]).useStateFromStoresArray(tmp8, tmp10, tmp11);
      if (cResult[6] === loading) {
        if (cResult[7] === stateFromStoresArray) {
          let tmp13 = cResult[8];
          let tmp14 = cResult[9];
        }
        const effect = noop.useEffect(tmp13, tmp14);
        if (cResult[10] !== loading) {
          const obj3 = { loading };
          cResult[10] = loading;
          cResult[11] = obj3;
          let tmp16 = obj3;
        } else {
          tmp16 = cResult[11];
        }
        return tmp16;
      }
      class F {
        constructor() {
          tmp = !closure_0;
          if (!closure_0) {
            tmp2 = closure_3;
            num = 0;
            tmp = closure_3.length > 0;
          }
          if (tmp) {
            tmp3 = closure_1;
            flag = true;
            tmp4 = closure_1(true);
            tmp5 = globalThis;
            _Promise = Promise;
            tmp6 = closure_3;
            allPromises = Promise.all(
              closure_3.map((item) => closure_1_2(stateFromStoresArray[8]).fetchSubscriptionListingForPlan(item)),
            );
            catchPromise = allPromises.catch(() => {});
            nextPromise = catchPromise.then(() => {
              closure_1_1(false);
            });
          }
          return;
        }
      }
      const items2 = [loading, stateFromStoresArray];
      cResult[6] = loading;
      cResult[7] = stateFromStoresArray;
      cResult[8] = F;
      cResult[9] = items2;
      tmp14 = items2;
      tmp13 = F;
      const tmpResult = loading(stateFromStoresArray[7]);
    }
  : (arg0) => {
      _require = arg0;
      [loading, closure_2] = noop.useState(false);
      const items = [arg0];
      const memo = noop.useMemo(() => closure_0.map(subscriptionUtils.getRoleSubscriptionPlanId), items);
      const items1 = [GuildRoleSubscriptionsStore];
      const items2 = [memo];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(
        items1,
        () =>
          memo.filter((item) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(item)),
        items2,
      );
      const items3 = [loading, stateFromStoresArray];
      const effect = noop.useEffect(() => {
        let tmp = !loading;
        if (!loading) {
          tmp = stateFromStoresArray.length > 0;
        }
        if (tmp) {
          closure_2(true);
          const allPromises = Promise.all(
            stateFromStoresArray.map((item) => closure_1_2(memo[8]).fetchSubscriptionListingForPlan(item)),
          );
          Promise.all(stateFromStoresArray.map((item) => closure_1_2(memo[8]).fetchSubscriptionListingForPlan(item)))
            .catch(() => {})
            .then(() => {
              closure_1_2(false);
            });
          const catchPromise = Promise.all(
            stateFromStoresArray.map((item) => closure_1_2(memo[8]).fetchSubscriptionListingForPlan(item)),
          ).catch(() => {});
        }
      }, items3);
      return { loading };
    };
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useArchiveSubscriptionListing() {
      const cResult = c.c(4);
      [tmp4, tmp5] = useRequestDefault(GuildRoleSubscriptionsActionCreatorsAll.archiveSubscriptionListing);
      ({ loading, error } = tmp5);
      if (cResult[0] === tmp4) {
        if (cResult[1] === error) {
          if (cResult[2] === loading) {
            let tmp6 = cResult[3];
          }
          return tmp6;
        }
      }
      const obj2 = { error, submitting: loading, archiveSubscriptionListing: tmp4 };
      cResult[0] = tmp4;
      cResult[1] = error;
      cResult[2] = loading;
      cResult[3] = obj2;
      tmp6 = obj2;
    }
  : function useArchiveSubscriptionListing() {
      const tmp2 = _slicedToArray(
        useRequestDefault(GuildRoleSubscriptionsActionCreatorsAll.archiveSubscriptionListing),
        2,
      );
      return { error: tmp2[1].error, submitting: tmp2[1].loading, archiveSubscriptionListing: tmp2[0] };
    };
ReactCompilerGating = fn(558);
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionsSettings(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          let subscriptionSettings;
          if (null != closure_0) {
            subscriptionSettings = GuildRoleSubscriptionsStore.getSubscriptionSettings(tmp);
          }
          return subscriptionSettings;
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
  : function useSubscriptionsSettings(arg0) {
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      return require("initialize").useStateFromStores(items, () => {
        let subscriptionSettings;
        if (null != closure_0) {
          subscriptionSettings = GuildRoleSubscriptionsStore.getSubscriptionSettings(tmp);
        }
        return subscriptionSettings;
      });
    };
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionTrial(arg0) {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          let subscriptionTrial = null;
          if (null != closure_0) {
            subscriptionTrial = GuildRoleSubscriptionsStore.getSubscriptionTrial(tmp);
          }
          return subscriptionTrial;
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
  : function useSubscriptionTrial(arg0) {
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      return require("initialize").useStateFromStores(items, () => {
        let subscriptionTrial = null;
        if (null != closure_0) {
          subscriptionTrial = GuildRoleSubscriptionsStore.getSubscriptionTrial(tmp);
        }
        return subscriptionTrial;
      });
    };
ReactCompilerGating = fn(558);
const tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionTrialsForGroup(arg0) {
      const cResult = require("c").c(4);
      const tmp4 = closure_12(arg0);
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function n() {
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        const items1 = [tmp4];
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
    }
  : function useSubscriptionTrialsForGroup(arg0) {
      const tmp = closure_12(arg0);
      _require = tmp;
      const items = [GuildRoleSubscriptionsStore];
      const items1 = [tmp];
      return require("initialize").useStateFromStoresArray(
        items,
        () => {
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        },
        items1,
      );
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx");

export const useFetchListingsForGuild = tmp2;
export const useCreateSubscriptionGroupListing = function useCreateSubscriptionGroupListing() {
  closure_2 = async function _createSubscriptionGroupListing(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            _require(true);
            importDefault(null);
            c5 = 2;
            c3 = 3;
            c6 = 1;
            const obj5 = { value: tmp4(c3[8]).createSubscriptionGroupListing(closure_0, closure_1), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_130_0(false);
          throw closure_4;
        } else if (2 === tmp8) {
          c5 = 1;
          closure_130_1(closure_4);
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp36) {
        closure_4 = tmp36;
        if (tmp5 === c5) {
          c6 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp38) {
          c3 = tmp2;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    createSubscriptionGroupListing(arg0, arg1) {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    error: tmp2[0],
  };
};
export const useUpdateSubscriptionGroupListing = function useUpdateSubscriptionGroupListing() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp4;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            c4 = 3;
            c7 = 1;
            const obj5 = {
              value: GuildRoleSubscriptionsActionCreatorsAll.updateSubscriptionGroupListing(
                closure_0,
                closure_1,
                closure_2,
              ),
              done: false,
            };
            return obj5;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_0(false);
          throw closure_5;
        } else if (2 === tmp8) {
          c6 = 1;
          closure_1(closure_5);
          c6 = 0;
          closure_0(false);
          c7 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_0(false);
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c6 = 0;
          closure_0(false);
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp37) {
        closure_5 = tmp37;
        if (tmp5 === c6) {
          c7 = tmp3;
          throw tmp37;
        } else if (tmp2 === tmp39) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  return {
    loading: tmp[0],
    updateSubscriptionGroupListing: noop.useCallback(function (arg0, arg1, arg2) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0],
  };
};
export const useSubscriptionListingsForGroup = tmp3;
export const useSubscriptionListing = tmp4;
export const useSubscriptionGroupListing = tmp5;
export const useGroupListingsForGuild = tmp6;
export const useSubscriptionListingsForGuild = tmp7;
export const useFetchListingsForSubscriptions = tmp8;
export const useDeleteSubscriptionListing = function useDeleteSubscriptionListing() {
  closure_2 = async function _deleteSubscriptionListing(arg0) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c6 = 2;
            _require(true);
            importDefault(null);
            c4 = 3;
            c7 = 1;
            const obj5 = {
              value: closure_2(tmp4[8]).deleteSubscriptionListing(closure_0, closure_1, closure_2),
              done: false,
            };
            return obj5;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_131_0(false);
          throw closure_5;
        } else if (2 === tmp8) {
          c6 = 1;
          closure_131_1(closure_5);
          c6 = 0;
          closure_131_0(false);
          c7 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_131_0(false);
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c6 = 0;
          closure_131_0(false);
          c7 = 3;
          return { value: true, done: true };
        }
      } catch (tmp37) {
        closure_5 = tmp37;
        if (tmp5 === c6) {
          c7 = tmp3;
          throw tmp37;
        } else if (tmp2 === tmp39) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    deleteSubscriptionListing(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
  };
};
export const useArchiveSubscriptionListing = tmp9;
export const usePublishSubscriptionListing = function usePublishSubscriptionListing() {
  closure_2 = async function _publishSubscriptionListing(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp6;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            ({ guildId: closure_129_0, groupListingId: closure_129_1, listingId: closure_129_2 } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 2;
            closure_130_0(true);
            closure_130_1(null);
            const obj5 = {
              guildId: closure_129_0,
              groupListingId: closure_129_1,
              listingId: closure_129_2,
              data: { published: true },
            };
            c5 = 4;
            c6 = 1;
            const obj7 = { value: tmp4(tmp30[8]).updateSubscriptionListing(obj5), done: false };
            return obj7;
          }
        } else if (2 === tmp9) {
          c4 = 0;
          closure_130_0(false);
          throw tmp30;
        } else if (3 === tmp9) {
          c4 = 1;
          closure_130_1(tmp30);
          c4 = 0;
          closure_130_0(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          closure_130_0(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          closure_130_0(false);
          c6 = 3;
          return { value: true, done: true };
        }
      } catch (tmp30) {
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp30;
        } else if (tmp2 === tmp32) {
          c5 = tmp;
        } else {
          c5 = tmp3;
        }
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    publishSubscriptionListing(arg0) {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    clearError() {
      return closure_1(null);
    },
  };
};
export const useSubscriptionsSettings = tmp10;
export const useUpdateSubscriptionsSettings = function useUpdateSubscriptionsSettings() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = asyncGeneratorStep(async (arg0, arg1) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp4;
            closure_0(true);
            closure_1(null);
            c5 = 2;
            c3 = 3;
            c6 = 1;
            const obj5 = {
              value: GuildRoleSubscriptionsActionCreatorsAll.updateSubscriptionsSettings(closure_0, closure_1),
              done: false,
            };
            return obj5;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_0(false);
          throw closure_4;
        } else {
          if (2 === tmp8) {
            c5 = 1;
            closure_1(closure_4);
            c5 = 0;
            closure_0(false);
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c5 = 1;
          }
          c5 = 0;
          closure_0(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        closure_4 = tmp33;
        if (tmp5 === c5) {
          c6 = tmp3;
          throw tmp33;
        } else if (tmp2 === tmp35) {
          c3 = tmp2;
        } else {
          c3 = tmp;
        }
      }
    }
  });
  return {
    loading: tmp[0],
    updateSubscriptionsSettings: noop.useCallback(function (arg0, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0],
  };
};
export const useDeleteSubscriptionGroupListing = function useDeleteSubscriptionGroupListing() {
  closure_2 = async function _deleteSubscriptionGroupListing(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c5 = 2;
            _require(true);
            importDefault(null);
            c3 = 3;
            c6 = 1;
            const obj5 = { value: tmp4(c3[8]).deleteSubscriptionGroupListing(closure_0, closure_1), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c5 = 0;
          closure_130_0(false);
          throw closure_4;
        } else if (2 === tmp8) {
          c5 = 1;
          closure_130_1(closure_4);
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp36) {
        closure_4 = tmp36;
        if (tmp5 === c5) {
          c6 = tmp3;
          throw tmp36;
        } else if (tmp2 === tmp38) {
          c3 = tmp2;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    deleteSubscriptionGroupListing(arg0, arg1) {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
  };
};
export const useFetchSubscriptionsSettings = function useFetchSubscriptionsSettings() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0(true);
            tmp4(null);
            c4 = 2;
            c2 = 3;
            c5 = 1;
            const obj5 = {
              value: GuildRoleSubscriptionsActionCreatorsAll.fetchSubscriptionsSettings(closure_0),
              done: false,
            };
            return obj5;
          }
        } else if (1 === tmp8) {
          c4 = 0;
          closure_0(false);
          throw closure_3;
        } else {
          if (2 === tmp8) {
            c4 = 1;
            tmp4(closure_3);
            c4 = 0;
            closure_0(false);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c4 = 1;
          }
          c4 = 0;
          closure_0(false);
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp32) {
        closure_3 = tmp32;
        if (tmp5 === c4) {
          c5 = tmp3;
          throw tmp32;
        } else if (tmp2 === tmp34) {
          c2 = tmp2;
        } else {
          c2 = tmp;
        }
      }
    }
  });
  return {
    loading: tmp[0],
    fetchSubscriptionsSettings: noop.useCallback(function (arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0],
  };
};
export const useUpdateSubscriptionsTrial = function useUpdateSubscriptionsTrial() {
  const tmp = _slicedToArray(noop.useState(false), 2);
  const tmp2 = _slicedToArray(noop.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = asyncGeneratorStep(async (arg0, arg1, arg2) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp4;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            c4 = 3;
            c7 = 1;
            const obj5 = {
              value: GuildRoleSubscriptionsActionCreatorsAll.updateSubscriptionTrial(closure_0, closure_1, closure_2),
              done: false,
            };
            return obj5;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_0(false);
          throw closure_5;
        } else {
          if (2 === tmp8) {
            c6 = 1;
            closure_1(closure_5);
            c6 = 0;
            closure_0(false);
            c7 = 3;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c6 = 1;
          }
          c6 = 0;
          closure_0(false);
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp34) {
        closure_5 = tmp34;
        if (tmp5 === c6) {
          c7 = tmp3;
          throw tmp34;
        } else if (tmp2 === tmp36) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  return {
    loading: tmp[0],
    updateSubscriptionTrial: noop.useCallback(function (arg0, arg1, arg2) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0],
  };
};
export const useSubscriptionTrial = tmp11;
export const useSubscriptionTrialsForGroup = tmp12;
export const useSubscriptionTrialsForGuild = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionTrialsForGuild(arg0) {
      const cResult = require("c").c(4);
      const tmp4 = closure_13(arg0);
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function n() {
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        const items1 = [tmp4];
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
    }
  : function useSubscriptionTrialsForGuild(arg0) {
      const tmp = closure_13(arg0);
      _require = tmp;
      const items = [GuildRoleSubscriptionsStore];
      const items1 = [tmp];
      return require("initialize").useStateFromStoresArray(
        items,
        () => {
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        },
        items1,
      );
    };
