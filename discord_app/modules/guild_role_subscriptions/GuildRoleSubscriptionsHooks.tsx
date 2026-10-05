// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx
import react2 from "../../../_runtime/00576_react.js";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore.tsx";
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators.tsx";
import useRequestDefault from "../../hooks/useRequest.tsx";
import subscriptionUtils from "subscriptionUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let _require, c3, c7, closure_4, closure_5, dependencyMap, guildId;

const FetchState = GuildRoleSubscriptionsStore2.FetchState;
let closure_10 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_3;
      let connected;
      let countryCode;
      let includeSoftDeleted;
      let ref;
      let refetchOnMount;
      let tmp11;
      let tmp13;
      let tmp4;
      let tmp7;
      let tmp8;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(17);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ refetchOnMount, includeSoftDeleted, countryCode } = tmp4);
      const dontFetchWhileTrue = tmp4.dontFetchWhileTrue;
      let tmp5 = undefined !== refetchOnMount && refetchOnMount;
      dependencyMap = tmp5;
      includeSoftDeleted = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GatewayConnectionStore];
        class S {
          constructor() {
            return connected.isConnected();
          }
        }
        cResult[2] = items;
        cResult[3] = S;
        tmp8 = S;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildRoleSubscriptionsStore];
        class S {
          constructor() {
            return connected.isConnected();
          }
        }
        cResult[4] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[4];
      }
      if (cResult[5] !== arg0) {
        const fn = function _() {
          let FETCHED;
          if (null != closure_0) {
            FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
          } else {
            FETCHED = FetchState.FETCHED;
          }
          return FETCHED;
        };
        cResult[5] = arg0;
        class S {
          constructor() {
            return connected.isConnected();
          }
        }
        cResult[6] = fn;
        tmp13 = fn;
      } else {
        tmp13 = cResult[6];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp11, tmp13);
      const obj5 = ref;
      ref = ref.useRef(tmp5);
      if (cResult[7] === countryCode) {
        if (cResult[8] === dontFetchWhileTrue) {
          if (cResult[9] === arg0) {
            if (cResult[10] === (undefined === includeSoftDeleted || includeSoftDeleted)) {
              if (cResult[11] === stateFromStores) {
                let tmp16;
                let tmp17;
                let tmp22;
                if (cResult[12] === tmp5) {
                  tmp16 = cResult[13];
                  tmp17 = cResult[14];
                }
                const effect = obj5.useEffect(tmp16, tmp17);
                class S {
                  constructor() {
                    return connected.isConnected();
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
                      return connected.isConnected();
                    }
                  }
                  cResult[16] = obj3;
                  tmp22 = obj3;
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
          if (null != closure_0) {
            if (stateFromStores) {
              if (true !== dontFetchWhileTrue) {
                const tmp5 = closure_3 || tmp4 === FetchState.NOT_FETCHED;
                if (tmp5) {
                  ref.current = false;
                  const obj2 = { includeSoftDeleted, countryCode };
                  const obj = GuildRoleSubscriptionsActionCreatorsAll;
                  const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(
                    closure_0,
                    obj2,
                  );
                }
              }
            }
          }
        }
      }
      const items2 = [
        stateFromStores,
        arg0,
        undefined === includeSoftDeleted || includeSoftDeleted,
        tmp5,
        countryCode,
        dontFetchWhileTrue,
      ];
      cResult[7] = countryCode;
      cResult[8] = dontFetchWhileTrue;
      cResult[9] = arg0;
      cResult[10] = undefined === includeSoftDeleted || includeSoftDeleted;
      cResult[11] = stateFromStores;
      cResult[12] = tmp5;
      cResult[13] = D;
      cResult[14] = items2;
      tmp17 = items2;
      tmp16 = D;
    }
  : (arg0) => {
      let closure_0;
      let connected;
      let tmp5;
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
      let obj2 = require("get initialized");
      const items = [GatewayConnectionStore];
      const stateFromStores = obj2.useStateFromStores(items, () => connected.isConnected());
      const items1 = [GuildRoleSubscriptionsStore];
      const obj3 = require("get initialized");
      const stateFromStores1 = obj3.useStateFromStores(items1, () => {
        let FETCHED;
        if (null != closure_0) {
          FETCHED = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuildFetchState(tmp);
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
              const tmp5 = flag || tmp4 === FetchState.NOT_FETCHED;
              if (tmp5) {
                ref.current = false;
                const obj2 = { includeSoftDeleted: false, countryCode };
                const obj = GuildRoleSubscriptionsActionCreatorsAll;
                const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(
                  closure_0,
                  obj2,
                );
              }
            }
          }
        }
      }, items2);
      const listingsLoaded = stateFromStores1 === FetchState.FETCHED && true !== tmp5;
      return { listingsLoaded };
    };
let closure_11 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionListingsForGroup(arg0, arg1) {
      let closure_0;
      let includeSoftDeleted;
      let includeUnpublished;
      let tmp4;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = {};
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      ({ includeSoftDeleted, includeUnpublished } = tmp4);
      let closure_1 = tmp5;
      let tmp6 = undefined === includeUnpublished || includeUnpublished;
      let closure_2 = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleSubscriptionsStore];
        cResult[2] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === arg0) {
        if (cResult[4] === (undefined !== includeSoftDeleted && includeSoftDeleted)) {
          let tmp9;
          let tmp10;
          if (cResult[5] === tmp6) {
            tmp9 = cResult[6];
            tmp10 = cResult[7];
          }
          const tmpResult = tmp(504);
          return tmpResult.useStateFromStoresArray(tmp7, tmp9, tmp10);
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
                let soft_deleted = tmp6.soft_deleted && !closure_1;
                if (!soft_deleted) {
                  let published = tmp6.published || closure_2;
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
      const items1 = [arg0, undefined !== includeSoftDeleted && includeSoftDeleted, tmp6];
      cResult[3] = arg0;
      cResult[4] = undefined !== includeSoftDeleted && includeSoftDeleted;
      cResult[5] = tmp6;
      cResult[6] = fn;
      cResult[7] = items1;
      tmp10 = items1;
      tmp9 = fn;
    }
  : function useSubscriptionListingsForGroup(arg0) {
      let closure_0;
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
      const obj2 = require("get initialized");
      return obj2.useStateFromStoresArray(
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
                  let soft_deleted = tmp6.soft_deleted && !flag;
                  if (!soft_deleted) {
                    let published = tmp6.published || flag2;
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionListing(arg0) {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : function useSubscriptionListing(arg0) {
      let closure_0;
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let subscriptionListing = null;
        if (null != closure_0) {
          subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(tmp);
        }
        return subscriptionListing;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionGroupListing(arg0) {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : function useSubscriptionGroupListing(arg0) {
      let closure_0;
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let subscriptionGroupListing = null;
        if (null != closure_0) {
          subscriptionGroupListing = GuildRoleSubscriptionsStore.getSubscriptionGroupListing(tmp);
        }
        return subscriptionGroupListing;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGroupListingsForGuild(arg0) {
      let closure_0;
      let first;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(4);
      const obj2 = require("GroupListingsFetchContext");
      const groupListingsFetchContext = obj2.useGroupListingsFetchContext("useGroupListingsForGuild");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        if (cResult[2] === groupListingsFetchContext) {
          tmp7 = cResult[3];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7);
      }
      const fn = function n() {
        if (null != closure_0) {
          let subscriptionGroupListingsForGuild;
          if (groupListingsFetchContext) {
            subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
          }
          return subscriptionGroupListingsForGuild;
        }
        subscriptionGroupListingsForGuild = closure_10;
      };
      cResult[1] = arg0;
      cResult[2] = groupListingsFetchContext;
      cResult[3] = fn;
      tmp7 = fn;
    }
  : function useGroupListingsForGuild(arg0) {
      let closure_0;
      _require = arg0;
      const obj = require("GroupListingsFetchContext");
      let closure_1 = obj.useGroupListingsFetchContext("useGroupListingsForGuild");
      const items = [GuildRoleSubscriptionsStore];
      const obj2 = require("get initialized");
      return obj2.useStateFromStores(items, () => {
        if (null != closure_0) {
          let subscriptionGroupListingsForGuild;
          if (closure_1) {
            subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
          }
          return subscriptionGroupListingsForGuild;
        }
        subscriptionGroupListingsForGuild = closure_10;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionListingsForGuild(arg0, arg1) {
      let closure_0;
      let tmp4;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(6);
      const tmp = _require;
      if (cResult[0] !== arg1) {
        let obj2 = arg1;
        if (undefined === arg1) {
          obj2 = { includeSoftDeleted: false, sortDeletedListingsLast: false };
        }
        cResult[0] = arg1;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      let closure_1 = tmp4;
      let tmp5 = closure_11(arg0);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildRoleSubscriptionsStore];
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === arg0) {
        let tmp8;
        if (cResult[4] === tmp4) {
          tmp8 = cResult[5];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStoresArray(tmp6, tmp8);
      }
      const fn = function p() {
        if (null != closure_0) {
          let subscriptionGroupListingsForGuild =
            GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp2);
        } else {
          subscriptionGroupListingsForGuild = closure_10;
        }
        const items = [];
        for (const item10011 of subscriptionGroupListingsForGuild) {
          let subscription_listings_ids = item10011.subscription_listings_ids;
          for (const item10017 of subscription_listings_ids) {
            let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10017);
            let tmp9 = subscriptionListing;
            let tmp10 = null == subscriptionListing;
            if (!tmp10) {
              let includeSoftDeleted = closure_1.includeSoftDeleted;
              let soft_deleted = !includeSoftDeleted;
              if (soft_deleted) {
                soft_deleted = tmp9.soft_deleted;
              }
              tmp10 = soft_deleted;
            }
            if (!tmp10) {
              let arr = items.push(tmp9);
            }
            continue;
          }
          continue;
        }
        let tmp16 = items;
        if (closure_1.includeSoftDeleted) {
          tmp16 = items;
          if (closure_1.sortDeletedListingsLast) {
            const items1 = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(
              items1,
              items.filter((soft_deleted) => !soft_deleted.soft_deleted),
              0,
            );
            HermesBuiltin.arraySpread(
              items1,
              items.filter((soft_deleted) => soft_deleted.soft_deleted),
              arraySpreadResult,
            );
            tmp16 = items1;
          }
        }
        return tmp16;
      };
      cResult[3] = arg0;
      cResult[4] = tmp4;
      cResult[5] = fn;
      tmp8 = fn;
    }
  : function useSubscriptionListingsForGuild(arg0) {
      let closure_0;
      _require = arg0;
      let obj = arg1;
      if (arg1 === undefined) {
        obj = { includeSoftDeleted: false, sortDeletedListingsLast: false };
      }
      closure_11(arg0);
      let items = [GuildRoleSubscriptionsStore];
      const obj2 = require("get initialized");
      return obj2.useStateFromStoresArray(items, () => {
        if (null != closure_0) {
          let subscriptionGroupListingsForGuild =
            GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp2);
        } else {
          subscriptionGroupListingsForGuild = closure_10;
        }
        const items = [];
        for (const item10011 of subscriptionGroupListingsForGuild) {
          let subscription_listings_ids = item10011.subscription_listings_ids;
          for (const item10017 of subscription_listings_ids) {
            let subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(item10017);
            let tmp9 = subscriptionListing;
            let tmp10 = null == subscriptionListing;
            if (!tmp10) {
              let includeSoftDeleted = obj.includeSoftDeleted;
              let soft_deleted = !includeSoftDeleted;
              if (soft_deleted) {
                soft_deleted = tmp9.soft_deleted;
              }
              tmp10 = soft_deleted;
            }
            if (!tmp10) {
              let arr = items.push(tmp9);
            }
            continue;
          }
          continue;
        }
        let tmp16 = items;
        if (obj.includeSoftDeleted) {
          tmp16 = items;
          if (obj.sortDeletedListingsLast) {
            const items1 = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(
              items1,
              items.filter((soft_deleted) => !soft_deleted.soft_deleted),
              0,
            );
            HermesBuiltin.arraySpread(
              items1,
              items.filter((soft_deleted) => soft_deleted.soft_deleted),
              arraySpreadResult,
            );
            tmp16 = items1;
          }
        }
        return tmp16;
      });
    };
let closure_13 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let closure_1;
      let loading;
      let stateFromStoresArray;
      let tmp10;
      let tmp11;
      let tmp6;
      let tmp8;
      let tmp = loading;
      let obj = loading(stateFromStoresArray[6]);
      const cResult = obj.c(12);
      [loading, closure_1] = react.useState(false);
      if (cResult[0] !== arr) {
        const mapped = arr.map(tmp(tmp2[11]).getRoleSubscriptionPlanId);
        cResult[0] = arr;
        cResult[1] = mapped;
        tmp6 = mapped;
      } else {
        tmp6 = cResult[1];
      }
      let closure_2 = tmp6;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[2] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== tmp6) {
        const fn = function f() {
          let didFetchListingForSubscriptionPlanId;
          return closure_2.filter(
            (item) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(item),
          );
        };
        const items1 = [tmp6];
        cResult[3] = tmp6;
        cResult[4] = fn;
        cResult[5] = items1;
        tmp11 = items1;
        tmp10 = fn;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const tmpResult = tmp(stateFromStoresArray[7]);
      stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp8, tmp10, tmp11);
      if (cResult[6] === loading) {
        let tmp13;
        let tmp14;
        let tmp16;
        if (cResult[7] === stateFromStoresArray) {
          tmp13 = cResult[8];
          tmp14 = cResult[9];
        }
        const effect = react.useEffect(tmp13, tmp14);
        if (cResult[10] !== loading) {
          const obj3 = { loading };
          cResult[10] = loading;
          cResult[11] = obj3;
          tmp16 = obj3;
        } else {
          tmp16 = cResult[11];
        }
        return tmp16;
      }
      const fn2 = function v() {
        const tmp = !first && stateFromStoresArray.length > 0;
        if (tmp) {
          closure_1(true);
          const allPromises = Promise.all(
            stateFromStoresArray.map((item) => {
              const obj = closure_1_2(stateFromStoresArray[8]);
              return obj.fetchSubscriptionListingForPlan(item);
            }),
          );
          const catchPromise = allPromises.catch(() => {});
          catchPromise.then(() => {
            closure_1_1(false);
          });
        }
      };
      const items2 = [loading, stateFromStoresArray];
      cResult[6] = loading;
      cResult[7] = stateFromStoresArray;
      cResult[8] = fn2;
      cResult[9] = items2;
      tmp14 = items2;
      tmp13 = fn2;
    }
  : (arg0) => {
      let closure_0;
      let closure_2;
      let loading;
      _require = arg0;
      [loading, closure_2] = react.useState(false);
      const items = [arg0];
      const memo = react.useMemo(() => closure_0.map(subscriptionUtils.getRoleSubscriptionPlanId), items);
      let obj = require("get initialized");
      const items1 = [GuildRoleSubscriptionsStore];
      const items2 = [memo];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items1,
        () => {
          let didFetchListingForSubscriptionPlanId;
          return memo.filter(
            (item) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(item),
          );
        },
        items2,
      );
      const items3 = [loading, stateFromStoresArray];
      const effect = react.useEffect(() => {
        const tmp = !loading && stateFromStoresArray.length > 0;
        if (tmp) {
          closure_2(true);
          const allPromises = Promise.all(
            stateFromStoresArray.map((item) => {
              const obj = closure_1_2(memo[8]);
              return obj.fetchSubscriptionListingForPlan(item);
            }),
          );
          const catchPromise = allPromises.catch(() => {});
          catchPromise.then(() => {
            closure_1_2(false);
          });
        }
      }, items3);
      return { loading };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useArchiveSubscriptionListing() {
      let error;
      let loading;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp2 = useRequestDefault;
      [tmp4, tmp5] = tmp2(GuildRoleSubscriptionsActionCreatorsAll.archiveSubscriptionListing);
      ({ loading, error } = tmp5);
      _slicedToArray(tmp2(GuildRoleSubscriptionsActionCreatorsAll.archiveSubscriptionListing), 2);
      if (cResult[0] === tmp4) {
        if (cResult[1] === error) {
          let tmp6;
          if (cResult[2] === loading) {
            tmp6 = cResult[3];
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
      const tmp = useRequestDefault;
      const tmp2 = _slicedToArray(tmp(GuildRoleSubscriptionsActionCreatorsAll.archiveSubscriptionListing), 2);
      return { error: tmp2[1].error, submitting: tmp2[1].loading, archiveSubscriptionListing: tmp2[0] };
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionsSettings(arg0) {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : function useSubscriptionsSettings(arg0) {
      let closure_0;
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let subscriptionSettings;
        if (null != closure_0) {
          subscriptionSettings = GuildRoleSubscriptionsStore.getSubscriptionSettings(tmp);
        }
        return subscriptionSettings;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionTrial(arg0) {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : function useSubscriptionTrial(arg0) {
      let closure_0;
      _require = arg0;
      const items = [GuildRoleSubscriptionsStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let subscriptionTrial = null;
        if (null != closure_0) {
          subscriptionTrial = GuildRoleSubscriptionsStore.getSubscriptionTrial(tmp);
        }
        return subscriptionTrial;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionTrialsForGroup(arg0) {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp4 = closure_12(arg0);
      const tmp = _require;
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function n() {
          let subscriptionTrial;
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        const items1 = [tmp4];
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
    }
  : function useSubscriptionTrialsForGroup(arg0) {
      let closure_0;
      const tmp = closure_12(arg0);
      _require = tmp;
      const items = [GuildRoleSubscriptionsStore];
      const items1 = [tmp];
      const obj = require("get initialized");
      return obj.useStateFromStoresArray(
        items,
        () => {
          let subscriptionTrial;
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useSubscriptionTrialsForGuild(arg0) {
      let closure_0;
      let first;
      let tmp7;
      let tmp8;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp4 = closure_13(arg0);
      const tmp = _require;
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4) {
        const fn = function n() {
          let subscriptionTrial;
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        };
        const items1 = [tmp4];
        cResult[1] = tmp4;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
    }
  : function useSubscriptionTrialsForGuild(arg0) {
      let closure_0;
      const tmp = closure_13(arg0);
      _require = tmp;
      const items = [GuildRoleSubscriptionsStore];
      const items1 = [tmp];
      const obj = require("get initialized");
      return obj.useStateFromStoresArray(
        items,
        () => {
          let subscriptionTrial;
          const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
          return mapped.filter(GlobalUtils.isNotNullish);
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx");

export const useFetchListingsForGuild = tmp2;
export const useCreateSubscriptionGroupListing = function useCreateSubscriptionGroupListing() {
  let closure_0;
  let first;
  let obj = function _createSubscriptionGroupListing() {
    obj = _asyncToGenerator(async (arg0, arg1) => {
      let closure_2;
      closure_0 = arg0;
      closure_1 = arg1;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
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
              closure_2_0(true);
              closure_2_1(null);
              c5 = 2;
              const obj3 = tmp(c3[8]);
              c3 = 3;
              c6 = 1;
              const obj5 = { value: obj3.createSubscriptionGroupListing(closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (1 === c3) {
            c5 = 0;
            closure_130_0(false);
            throw closure_4;
          } else if (2 === c3) {
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
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp32) {
          closure_4 = tmp32;
          if (0 === c5) {
            c6 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c3 = 1;
          } else {
            c3 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    loading: first,
    createSubscriptionGroupListing(arg0, arg1) {
      return obj(...arguments);
    },
    error: tmp3[0],
  };
  return obj;
};
export const useUpdateSubscriptionGroupListing = function useUpdateSubscriptionGroupListing() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let obj3;
    closure_0 = arg0;
    closure_1 = arg1;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
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
            let closure_3 = tmp;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            c4 = 3;
            c7 = 1;
            const obj5 = { value: obj3.updateSubscriptionGroupListing(closure_0, closure_1, closure_2), done: false };
            obj3 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c4) {
          c6 = 0;
          closure_0(false);
          throw closure_5;
        } else if (2 === c4) {
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
      } catch (tmp33) {
        closure_5 = tmp33;
        if (0 === c6) {
          c7 = 3;
          throw tmp33;
        } else if (1 === tmp35) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    updateSubscriptionGroupListing: useCallback(function (arg0, arg1, arg2) {
      return closure_0(...arguments);
    }, []),
    error: first1,
  };
  return obj;
};
export const useSubscriptionListingsForGroup = tmp3;
export const useSubscriptionListing = tmp4;
export const useSubscriptionGroupListing = tmp5;
export const useGroupListingsForGuild = tmp6;
export const useSubscriptionListingsForGuild = tmp7;
export const useFetchListingsForSubscriptions = tmp8;
export const useDeleteSubscriptionListing = function useDeleteSubscriptionListing() {
  let closure_0;
  let first;
  let obj = function _deleteSubscriptionListing() {
    obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
      let obj2;
      closure_0 = arg0;
      closure_1 = arg1;
      let closure_2 = arg2;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
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
              let closure_3 = tmp;
              c6 = 2;
              closure_2_0(true);
              closure_2_1(null);
              c4 = 3;
              c7 = 1;
              const obj5 = { value: obj2.deleteSubscriptionListing(closure_0, closure_1, closure_2), done: false };
              obj2 = closure_2(closure_3[8]);
              return obj5;
            }
          } else if (1 === c4) {
            c6 = 0;
            closure_131_0(false);
            throw closure_5;
          } else if (2 === c4) {
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
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
            closure_131_0(false);
            c7 = 3;
            return { value: true, done: true };
          }
        } catch (tmp33) {
          closure_5 = tmp33;
          if (0 === c6) {
            c7 = 3;
            throw tmp33;
          } else if (1 === tmp35) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    error: tmp3[0],
    submitting: first,
    deleteSubscriptionListing(arg0, arg1, arg2) {
      return obj(...arguments);
    },
  };
  return obj;
};
export const useArchiveSubscriptionListing = tmp9;
export const usePublishSubscriptionListing = function usePublishSubscriptionListing() {
  let closure_0;
  let first;
  let obj = function _publishSubscriptionListing() {
    obj = _asyncToGenerator(async (guildId) => {
      let c0;
      let c1;
      let c2;
      let obj6;
      let tmp12;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (guildId === 1) {
          throw value;
        } else if (guildId === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let groupListingId;
          let listingId;
          c6 = 2;
          if (0 === c5) {
            if (guildId === 1) {
              c6 = 3;
              throw value;
            } else if (guildId === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp12;
              guildId = undefined;
              groupListingId = undefined;
              listingId = undefined;
              ({ guildId: c0, groupListingId: c1, listingId: c2 } = closure_0);
              c5 = 1;
              c6 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c5) {
            if (guildId === 1) {
              c6 = 3;
              throw value;
            } else if (guildId === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c4 = 2;
              closure_130_0(true);
              closure_130_1(null);
              const obj5 = { guildId, groupListingId, listingId, data: { published: true } };
              c5 = 4;
              c6 = 1;
              const obj7 = { value: obj6.updateSubscriptionListing(obj5), done: false };
              obj6 = listingId(closure_3[8]);
              return obj7;
            }
          } else if (2 === c5) {
            c4 = 0;
            tmp12 = closure_130_0(false);
            throw closure_3;
          } else if (3 === c5) {
            tmp12 = closure_3;
            closure_130_1(closure_3);
            c4 = 0;
            closure_130_0(false);
            c6 = 3;
            return { value: "IconComponent", done: null };
          } else if (guildId === 1) {
            c6 = 3;
            throw value;
          } else if (guildId === 2) {
            c4 = 0;
            closure_130_0(false);
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
            closure_130_0(false);
            c6 = 3;
            return { value: true, done: true };
          }
        } catch (tmp24) {
          closure_3 = tmp24;
          if (0 === c4) {
            c6 = 3;
            throw tmp24;
          } else if (1 === tmp26) {
            c5 = 2;
          } else {
            c5 = 3;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    error: tmp3[0],
    submitting: first,
    publishSubscriptionListing(arg0) {
      return obj(...arguments);
    },
    clearError() {
      return closure_1(null);
    },
  };
  return obj;
};
export const useSubscriptionsSettings = tmp10;
export const useUpdateSubscriptionsSettings = function useUpdateSubscriptionsSettings() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0, arg1) => {
    let obj2;
    closure_0 = arg0;
    closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
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
            let closure_2 = tmp;
            closure_0(true);
            closure_1(null);
            c5 = 2;
            c3 = 3;
            c6 = 1;
            const obj5 = { value: obj2.updateSubscriptionsSettings(closure_0, closure_1), done: false };
            obj2 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c3) {
          c5 = 0;
          closure_0(false);
          throw closure_4;
        } else {
          if (2 === c3) {
            c5 = 1;
            closure_1(closure_4);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_0(false);
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c5 = 1;
          }
          c5 = 0;
          closure_0(false);
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp29) {
        closure_4 = tmp29;
        if (0 === c5) {
          c6 = 3;
          throw tmp29;
        } else if (1 === tmp31) {
          c3 = 1;
        } else {
          c3 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    updateSubscriptionsSettings: useCallback(function (arg0, arg1) {
      return closure_0(...arguments);
    }, []),
    error: first1,
  };
  return obj;
};
export const useDeleteSubscriptionGroupListing = function useDeleteSubscriptionGroupListing() {
  let closure_0;
  let first;
  let obj = function _deleteSubscriptionGroupListing() {
    obj = _asyncToGenerator(async (arg0, arg1) => {
      let closure_2;
      closure_0 = arg0;
      closure_1 = arg1;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
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
              closure_2_0(true);
              closure_2_1(null);
              const obj3 = tmp(c3[8]);
              c3 = 3;
              c6 = 1;
              const obj5 = { value: obj3.deleteSubscriptionGroupListing(closure_0, closure_1), done: false };
              return obj5;
            }
          } else if (1 === c3) {
            c5 = 0;
            closure_130_0(false);
            throw closure_4;
          } else if (2 === c3) {
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
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp32) {
          closure_4 = tmp32;
          if (0 === c5) {
            c6 = 3;
            throw tmp32;
          } else if (1 === tmp34) {
            c3 = 1;
          } else {
            c3 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, closure_0] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  let closure_1 = tmp3[1];
  obj = {
    error: tmp3[0],
    submitting: first,
    deleteSubscriptionGroupListing(arg0, arg1) {
      return obj(...arguments);
    },
  };
  return obj;
};
export const useFetchSubscriptionsSettings = function useFetchSubscriptionsSettings() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0) => {
    let obj2;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
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
            tmp(null);
            c4 = 2;
            c2 = 3;
            c5 = 1;
            const obj5 = { value: obj2.fetchSubscriptionsSettings(closure_0), done: false };
            obj2 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c2) {
          c4 = 0;
          closure_0(false);
          throw closure_3;
        } else {
          if (2 === c2) {
            c4 = 1;
            tmp(closure_3);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_0(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c4 = 1;
          }
          c4 = 0;
          closure_0(false);
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp28) {
        closure_3 = tmp28;
        if (0 === c4) {
          c5 = 3;
          throw tmp28;
        } else if (1 === tmp30) {
          c2 = 1;
        } else {
          c2 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    fetchSubscriptionsSettings: useCallback(function (arg0) {
      return closure_0(...arguments);
    }, []),
    error: first1,
  };
  return obj;
};
export const useUpdateSubscriptionsTrial = function useUpdateSubscriptionsTrial() {
  let closure_0;
  let closure_1;
  let first;
  let first1;
  [first, closure_0] = react.useState(false);
  [first1, closure_1] = react.useState(null);
  const useCallback = react.useCallback;
  closure_0 = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let obj2;
    closure_0 = arg0;
    closure_1 = arg1;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
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
            let closure_3 = tmp;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            c4 = 3;
            c7 = 1;
            const obj5 = { value: obj2.updateSubscriptionTrial(closure_0, closure_1, closure_2), done: false };
            obj2 = GuildRoleSubscriptionsActionCreatorsAll;
            return obj5;
          }
        } else if (1 === c4) {
          c6 = 0;
          closure_0(false);
          throw closure_5;
        } else {
          if (2 === c4) {
            c6 = 1;
            closure_1(closure_5);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_0(false);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c6 = 1;
          }
          c6 = 0;
          closure_0(false);
          c7 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp30) {
        closure_5 = tmp30;
        if (0 === c6) {
          c7 = 3;
          throw tmp30;
        } else if (1 === tmp32) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  let obj = {
    loading: first,
    updateSubscriptionTrial: useCallback(function (arg0, arg1, arg2) {
      return closure_0(...arguments);
    }, []),
    error: first1,
  };
  return obj;
};
export const useSubscriptionTrial = tmp11;
export const useSubscriptionTrialsForGroup = tmp12;
export const useSubscriptionTrialsForGuild = tmp13;
