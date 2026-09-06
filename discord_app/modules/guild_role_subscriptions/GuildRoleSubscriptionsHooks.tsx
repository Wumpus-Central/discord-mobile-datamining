// === Module 15212: GuildRoleSubscriptionsHooks ===

// Module 15212 (GuildRoleSubscriptionsHooks)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 7255 */;
import useRequestDefault from "useRequest" /* 12203 */;
import subscriptionUtils from "subscriptionUtils" /* 15214 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4193 */;

require = fn;
function useFetchListingsForGuild(guildId) {
  _require = guildId;
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
  const obj2 = require("initialize");
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
  const items2 = [stateFromStores, guildId, flag2, flag, countryCode, dontFetchWhileTrue];
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
            const obj = { includeSoftDeleted: false, countryCode };
            const allSubscriptionListingsDataForGuild = obj.fetchAllSubscriptionListingsDataForGuild(closure_0, obj);
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
}
const FetchState = fn(4193).FetchState;
let closure_10 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx");

export { useFetchListingsForGuild };
export const useCreateSubscriptionGroupListing = function useCreateSubscriptionGroupListing() {
  closure_2 = async function _createSubscriptionGroupListing(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            _require(true);
            importDefault(null);
            c5 = 2;
            let obj2 = tmp4(c3[6]);
            c3 = 3;
            c6 = 1;
            const obj1 = { value: obj2.createSubscriptionGroupListing(closure_0, closure_1), done: false };
            return obj1;
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
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          obj = { value, done: true };
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
    error: tmp2[0]
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp4;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            let obj2 = GuildRoleSubscriptionsActionCreatorsAll;
            c4 = 3;
            c7 = 1;
            const obj1 = { value: obj2.updateSubscriptionGroupListing(closure_0, closure_1, closure_2), done: false };
            return obj1;
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
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_0(false);
          c7 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          c6 = 0;
          closure_0(false);
          c7 = 3;
          obj = { value, done: true };
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
    updateSubscriptionGroupListing: noop.useCallback(function(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0]
  };
};
export const useSubscriptionListingsForGroup = function useSubscriptionListingsForGroup(id, arg1) {
  _require = id;
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
  const items = [GuildRoleSubscriptionsStore];
  const items1 = [id, flag, flag2];
  return require("initialize").useStateFromStoresArray(items, () => {
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
  }, items1);
};
export const useSubscriptionListing = function useSubscriptionListing(editStateId) {
  _require = editStateId;
  const items = [GuildRoleSubscriptionsStore];
  return require("initialize").useStateFromStores(items, () => {
    let subscriptionListing = null;
    if (null != closure_0) {
      subscriptionListing = GuildRoleSubscriptionsStore.getSubscriptionListing(tmp);
    }
    return subscriptionListing;
  });
};
export const useSubscriptionGroupListing = function useSubscriptionGroupListing(arg0) {
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
export const useGroupListingsForGuild = function useGroupListingsForGuild(guildId) {
  _require = guildId;
  closure_1 = require("GroupListingsFetchContext").useGroupListingsFetchContext("useGroupListingsForGuild");
  const obj = require("GroupListingsFetchContext");
  const items = [GuildRoleSubscriptionsStore];
  return require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        let subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
      }
      return subscriptionGroupListingsForGuild;
    }
    subscriptionGroupListingsForGuild = closure_10;
  });
};
export const useSubscriptionListingsForGuild = function useSubscriptionListingsForGuild(guildId, arg1) {
  _require = guildId;
  if (arg1 === undefined) {
    const obj = { includeSoftDeleted: false, sortDeletedListingsLast: false };
  }
  useFetchListingsForGuild(guildId);
  const items = [GuildRoleSubscriptionsStore];
  return require("initialize").useStateFromStoresArray(items, () => {
    let tmp = stateFromStoresArray;
    if (null != stateFromStoresArray) {
      let subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
    } else {
      subscriptionGroupListingsForGuild = closure_10;
    }
    tmp = subscriptionGroupListingsForGuild;
    subscriptionGroupListingsForGuild[Symbol.iterator]();
  });
};
export const useFetchListingsForSubscriptions = (arg0) => {
  _require = arg0;
  let tmp = _slicedToArray(noop.useState(false), 2);
  const loading = tmp[0];
  closure_2 = tmp[1];
  const items = [arg0];
  const memo = noop.useMemo(() => closure_0.map(subscriptionUtils.getRoleSubscriptionPlanId), items);
  const items1 = [GuildRoleSubscriptionsStore];
  const items2 = [memo];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => memo.filter((item) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(item)), items2);
  const items3 = [loading, stateFromStoresArray];
  const effect = noop.useEffect(() => {
    let tmp = !loading;
    if (!loading) {
      tmp = stateFromStoresArray.length > 0;
    }
    if (tmp) {
      closure_2(true);
      const allPromises = Promise.all(stateFromStoresArray.map((item) => closure_1_2(memo[6]).fetchSubscriptionListingForPlan(item)));
      Promise.all(stateFromStoresArray.map((item) => closure_1_2(memo[6]).fetchSubscriptionListingForPlan(item))).catch(() => {

      }).then(() => {
        closure_1_2(false);
      });
      const catchPromise = Promise.all(stateFromStoresArray.map((item) => closure_1_2(memo[6]).fetchSubscriptionListingForPlan(item))).catch(() => {

      });
    }
  }, items3);
  return { loading };
};
export const useDeleteSubscriptionListing = function useDeleteSubscriptionListing() {
  closure_2 = async function _deleteSubscriptionListing(arg0) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 2;
            _require(true);
            importDefault(null);
            let obj1 = closure_2(tmp4[6]);
            c4 = 3;
            c7 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.deleteSubscriptionListing(closure_0, closure_1, closure_2);
            return obj1;
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
          return { value: "HermesInternal", done: null };
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
    }
  };
};
export const useArchiveSubscriptionListing = function useArchiveSubscriptionListing() {
  const tmp2 = _slicedToArray(useRequestDefault(GuildRoleSubscriptionsActionCreatorsAll.archiveSubscriptionListing), 2);
  return { error: tmp2[1].error, submitting: tmp2[1].loading, archiveSubscriptionListing: tmp2[0] };
};
export const usePublishSubscriptionListing = function usePublishSubscriptionListing() {
  closure_2 = async function _publishSubscriptionListing(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp6;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            ({ guildId: closure_129_0, groupListingId: closure_129_1, listingId: closure_129_2 } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            c4 = 2;
            closure_130_0(true);
            closure_130_1(null);
            const obj2 = { guildId: closure_129_0, groupListingId: closure_129_1, listingId: closure_129_2, data: { published: true } };
            c5 = 4;
            c6 = 1;
            const obj3 = { value: tmp4(tmp30[6]).updateSubscriptionListing(obj2), done: false };
            return obj3;
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
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
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
    }
  };
};
export const useSubscriptionsSettings = function useSubscriptionsSettings(guildId) {
  _require = guildId;
  const items = [GuildRoleSubscriptionsStore];
  return require("initialize").useStateFromStores(items, () => {
    let subscriptionSettings;
    if (null != closure_0) {
      subscriptionSettings = GuildRoleSubscriptionsStore.getSubscriptionSettings(tmp);
    }
    return subscriptionSettings;
  });
};
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp4;
            closure_0(true);
            closure_1(null);
            c5 = 2;
            let obj1 = GuildRoleSubscriptionsActionCreatorsAll;
            c3 = 3;
            c6 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.updateSubscriptionsSettings(closure_0, closure_1);
            return obj1;
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
          obj = { value, done: true };
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
    updateSubscriptionsSettings: noop.useCallback(function(arg0, arg1) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0]
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 2;
            _require(true);
            importDefault(null);
            let obj2 = tmp4(c3[6]);
            c3 = 3;
            c6 = 1;
            const obj1 = { value: obj2.deleteSubscriptionGroupListing(closure_0, closure_1), done: false };
            return obj1;
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
          return { value: "HermesInternal", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 0;
          closure_130_0(false);
          c6 = 3;
          obj = { value, done: true };
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
    }
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_0(true);
            tmp4(null);
            c4 = 2;
            let obj1 = GuildRoleSubscriptionsActionCreatorsAll;
            c2 = 3;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.fetchSubscriptionsSettings(closure_0);
            return obj1;
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
          obj = { value, done: true };
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
    fetchSubscriptionsSettings: noop.useCallback(function(arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0]
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
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp4;
            closure_0(true);
            closure_1(null);
            c6 = 2;
            let obj1 = GuildRoleSubscriptionsActionCreatorsAll;
            c4 = 3;
            c7 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.updateSubscriptionTrial(closure_0, closure_1, closure_2);
            return obj1;
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
          obj = { value, done: true };
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
    updateSubscriptionTrial: noop.useCallback(function(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, []),
    error: tmp2[0]
  };
};
export const useSubscriptionTrial = function useSubscriptionTrial(editStateId) {
  _require = editStateId;
  const items = [GuildRoleSubscriptionsStore];
  return require("initialize").useStateFromStores(items, () => {
    let subscriptionTrial = null;
    if (null != closure_0) {
      subscriptionTrial = GuildRoleSubscriptionsStore.getSubscriptionTrial(tmp);
    }
    return subscriptionTrial;
  });
};
export const useSubscriptionTrialsForGroup = function useSubscriptionTrialsForGroup(arg0) {
  _require = arg0;
  const obj = {};
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
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
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
  }, items1);
  closure_129_0 = stateFromStoresArray;
  const obj2 = require("initialize");
  const items2 = [GuildRoleSubscriptionsStore];
  const items3 = [stateFromStoresArray];
  return require("initialize").useStateFromStoresArray(items2, () => {
    const mapped = closure_0.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items3);
};
export const useSubscriptionTrialsForGuild = function useSubscriptionTrialsForGuild(guildId) {
  closure_129_0 = guildId;
  closure_129_1 = { includeSoftDeleted: false, sortDeletedListingsLast: false };
  useFetchListingsForGuild(guildId);
  const items = [GuildRoleSubscriptionsStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    let tmp = stateFromStoresArray;
    if (null != stateFromStoresArray) {
      let subscriptionGroupListingsForGuild = GuildRoleSubscriptionsStore.getSubscriptionGroupListingsForGuild(tmp);
    } else {
      subscriptionGroupListingsForGuild = closure_10;
    }
    tmp = subscriptionGroupListingsForGuild;
    subscriptionGroupListingsForGuild[Symbol.iterator]();
  });
  const obj = stateFromStoresArray(504);
  const items1 = [GuildRoleSubscriptionsStore];
  const items2 = [stateFromStoresArray];
  return stateFromStoresArray(504).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items2);
};