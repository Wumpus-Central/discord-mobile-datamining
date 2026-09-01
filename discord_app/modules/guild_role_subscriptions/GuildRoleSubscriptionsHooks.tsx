// === Module 14808: useFetchListingsForGuild ===

// Module 14808 (useFetchListingsForGuild)
import _fetchSubscriptionsSettingsAll from "_fetchSubscriptionsSettings" /* 6102 */;
import useRequestDefault from "useRequest" /* 11770 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "noop" /* 19 */;
import closure_7 from "_handleConnectionOpen" /* 5221 */;
import closure_8 from "makeGroupListingIndexSubscriptionListingTag" /* 4115 */;
import { FetchState } from "makeGroupListingIndexSubscriptionListingTag" /* 4115 */;

const require = arg1;
function useFetchListingsForGuild(guildId) {
  const _require = guildId;
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
  let stateFromStores;
  let ref;
  const items = [closure_7];
  stateFromStores = _require(countryCode[5]).useStateFromStores(items, () => connected.isConnected());
  const obj2 = _require(countryCode[5]);
  const items1 = [closure_8];
  const stateFromStores1 = _require(countryCode[5]).useStateFromStores(items1, () => {
    if (null != closure_0) {
      let FETCHED = closure_1_8.getSubscriptionGroupListingsForGuildFetchState(tmp);
    } else {
      FETCHED = closure_1_9.FETCHED;
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
            tmp5 = tmp4 === closure_1_9.NOT_FETCHED;
          }
          if (tmp5) {
            ref.current = false;
            let obj = flag2(countryCode[6]);
            obj = { includeSoftDeleted: null, countryCode: null };
            obj[0] = false;
            obj[1] = countryCode;
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
let closure_10 = [];
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHooks.tsx");

export { useFetchListingsForGuild };
export const useCreateSubscriptionGroupListing = function useCreateSubscriptionGroupListing() {
  function _createSubscriptionGroupListing() {
    const self = this;
    const tmp = closure_1_4((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c3 = 0;
      c6 = 0;
      c5 = 0;
      return (function*(arg0, arg1) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === table) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp4;
                callback(true);
                callback2(null);
                c5 = 2;
                let obj2 = closure_1_2(table[6]);
                table = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.createSubscriptionGroupListing(callback, callback2);
                return obj1;
              }
            } else if (1 === tmp8) {
              c5 = 0;
              callback(false);
              throw closure_4;
            } else if (2 === tmp8) {
              c5 = 1;
              callback2(closure_4);
              c5 = 0;
              callback(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              callback(false);
              c6 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              c5 = 0;
              callback(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp36) {
            closure_4 = tmp36;
            if (tmp5 === c5) {
              c6 = tmp3;
              throw tmp36;
            } else if (tmp2 === tmp38) {
              table = tmp2;
            } else {
              table = tmp;
            }
          }
        }
      })();
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    loading: tmp[0],
    createSubscriptionGroupListing(arg0, arg1) {
      const self = this;
      const apply = _createSubscriptionGroupListing.apply;
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
  const tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = undefined;
  closure_0 = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp4;
              callback(true);
              callback2(null);
              c6 = 2;
              let obj2 = closure_2_2(closure_2_3[6]);
              c4 = 3;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj2.updateSubscriptionGroupListing(callback, callback2, closure_2);
              return obj1;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            callback(false);
            throw closure_5;
          } else if (2 === tmp8) {
            c6 = 1;
            callback2(closure_5);
            c6 = 0;
            callback(false);
            c7 = 3;
            return { value: "HermesInternal", done: null };
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            callback(false);
            c7 = 3;
            obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            c6 = 0;
            callback(false);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  return {
    loading: tmp[0],
    updateSubscriptionGroupListing: React.useCallback(function(arg0, arg1, arg2) {
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
  const _require = id;
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
  const items = [closure_8];
  const items1 = [id, flag, flag2];
  return _require(589).useStateFromStoresArray(items, () => {
    if (null == stateFromStoresArray) {
      return [];
    } else {
      const subscriptionGroupListing = closure_1_8.getSubscriptionGroupListing(tmp);
      if (null == subscriptionGroupListing) {
        return [];
      } else {
        const items = [];
        const subscription_listings_ids = subscriptionGroupListing.subscription_listings_ids;
        for (const item10009 of subscription_listings_ids) {
          let tmp4 = closure_1_8;
          let subscriptionListing = closure_1_8.getSubscriptionListing(item10009);
          let tmp6 = subscriptionListing;
          if (null != subscriptionListing) {
            let tmp7 = subscriptionListing;
            let soft_deleted = tmp6.soft_deleted;
            if (soft_deleted) {
              let tmp8 = flag;
              soft_deleted = !flag;
            }
            if (!soft_deleted) {
              let tmp9 = subscriptionListing;
              let published = tmp6.published;
              if (!published) {
                published = flag2;
              }
              if (published) {
                let tmp10 = subscriptionListing;
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
  const _require = editStateId;
  const items = [closure_8];
  return _require(589).useStateFromStores(items, () => {
    let subscriptionListing = null;
    if (null != closure_0) {
      subscriptionListing = closure_1_8.getSubscriptionListing(tmp);
    }
    return subscriptionListing;
  });
};
export const useSubscriptionGroupListing = function useSubscriptionGroupListing(arg0) {
  const _require = arg0;
  const items = [closure_8];
  return _require(589).useStateFromStores(items, () => {
    let subscriptionGroupListing = null;
    if (null != closure_0) {
      subscriptionGroupListing = closure_1_8.getSubscriptionGroupListing(tmp);
    }
    return subscriptionGroupListing;
  });
};
export const useGroupListingsForGuild = function useGroupListingsForGuild(guildId) {
  const _require = guildId;
  closure_1 = _require(14809).useGroupListingsFetchContext("useGroupListingsForGuild");
  const obj = _require(14809);
  const items = [closure_8];
  return _require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      if (closure_1) {
        let subscriptionGroupListingsForGuild = closure_1_8.getSubscriptionGroupListingsForGuild(tmp);
      }
      return subscriptionGroupListingsForGuild;
    }
    subscriptionGroupListingsForGuild = closure_1_10;
  });
};
export const useSubscriptionListingsForGuild = function useSubscriptionListingsForGuild(guildId, arg1) {
  const _require = guildId;
  let obj = arg1;
  if (arg1 === undefined) {
    obj = { includeSoftDeleted: false, sortDeletedListingsLast: false };
  }
  useFetchListingsForGuild(guildId);
  const items = [closure_8];
  return _require(589).useStateFromStoresArray(items, () => {
    let tmp = stateFromStoresArray;
    if (null != stateFromStoresArray) {
      let subscriptionGroupListingsForGuild = closure_1_8.getSubscriptionGroupListingsForGuild(tmp);
    } else {
      subscriptionGroupListingsForGuild = closure_1_10;
    }
    tmp = subscriptionGroupListingsForGuild;
    subscriptionGroupListingsForGuild[Symbol.iterator]();
  });
};
export const useFetchListingsForSubscriptions = (arg0) => {
  const _require = arg0;
  let tmp = callback2(React.useState(false), 2);
  const loading = tmp[0];
  closure_2 = tmp[1];
  const items = [arg0];
  const memo = React.useMemo(() => lib.map(lib(memo[9]).getRoleSubscriptionPlanId), items);
  const items1 = [closure_8];
  const items2 = [memo];
  const stateFromStoresArray = _require(memo[5]).useStateFromStoresArray(items1, () => memo.filter((arg0) => !didFetchListingForSubscriptionPlanId.getDidFetchListingForSubscriptionPlanId(arg0)), items2);
  const items3 = [loading, stateFromStoresArray];
  const effect = React.useEffect(() => {
    let tmp = !loading;
    if (!loading) {
      tmp = stateFromStoresArray.length > 0;
    }
    if (tmp) {
      callback(true);
      const allPromises = Promise.all(stateFromStoresArray.map((arg0) => callback(table[6]).fetchSubscriptionListingForPlan(arg0)));
      Promise.all(stateFromStoresArray.map((arg0) => callback(table[6]).fetchSubscriptionListingForPlan(arg0))).catch(() => {

      }).then(() => {
        callback(false);
      });
      const catchPromise = Promise.all(stateFromStoresArray.map((arg0) => callback(table[6]).fetchSubscriptionListingForPlan(arg0))).catch(() => {

      });
    }
  }, items3);
  return { loading };
};
export const useDeleteSubscriptionListing = function useDeleteSubscriptionListing() {
  function _deleteSubscriptionListing() {
    const self = this;
    const tmp = closure_1_4((arg0, arg1, arg2) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      c4 = 0;
      c7 = 0;
      c6 = 0;
      return (function*(arg0, arg1, arg2) {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_3 = tmp4;
                c6 = 2;
                callback(true);
                callback2(null);
                obj1 = callback3(closure_1_3[6]);
                c4 = 3;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.deleteSubscriptionListing(callback, callback2, callback3);
                return obj1;
              }
            } else if (1 === tmp8) {
              c6 = 0;
              callback(false);
              throw closure_5;
            } else if (2 === tmp8) {
              c6 = 1;
              callback2(closure_5);
              c6 = 0;
              callback(false);
              c7 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 0;
              callback(false);
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c6 = 0;
              callback(false);
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
      })();
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    deleteSubscriptionListing(arg0, arg1, arg2) {
      const self = this;
      const apply = _deleteSubscriptionListing.apply;
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
  const tmp2 = callback2(useRequestDefault(_fetchSubscriptionsSettingsAll.archiveSubscriptionListing), 2);
  return { error: tmp2[1].error, submitting: tmp2[1].loading, archiveSubscriptionListing: tmp2[0] };
};
export const usePublishSubscriptionListing = function usePublishSubscriptionListing() {
  function _publishSubscriptionListing() {
    const self = this;
    const tmp = closure_1_4((arg0) => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      const iter = (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp8 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c2 = tmp4;
                let callback2 = tmp6;
                let callback;
                callback2 = undefined;
                c2 = undefined;
                ({ guildId: c0, groupListingId: c1, listingId: c2 } = callback);
                c5 = 1;
                c6 = 1;
                return { value: "PX_16", done: null };
              }
            } else if (1 === tmp9) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                c4 = 2;
                callback(true);
                callback2(null);
                const obj2 = { guildId: null, groupListingId: null, listingId: null, data: null };
                obj2[0] = callback;
                obj2[1] = callback2;
                obj2[2] = c2;
                obj2[3] = { published: true };
                c5 = 4;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = closure_1_2(closure_1_3[6]).updateSubscriptionListing(obj2);
                return obj3;
              }
            } else if (2 === tmp9) {
              c4 = 0;
              callback(false);
              throw closure_3;
            } else if (3 === tmp9) {
              c4 = 1;
              callback2(closure_3);
              c4 = 0;
              callback(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              callback(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = 0;
              callback(false);
              c6 = 3;
              return { value: true, done: true };
            }
          } catch (tmp30) {
            closure_3 = tmp30;
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
      })();
      iter.next();
      return iter;
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    publishSubscriptionListing(arg0) {
      const self = this;
      const apply = _publishSubscriptionListing.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    clearError() {
      return callback(null);
    }
  };
};
export const useSubscriptionsSettings = function useSubscriptionsSettings(guildId) {
  const _require = guildId;
  const items = [closure_8];
  return _require(589).useStateFromStores(items, () => {
    let subscriptionSettings;
    if (null != closure_0) {
      subscriptionSettings = closure_1_8.getSubscriptionSettings(tmp);
    }
    return subscriptionSettings;
  });
};
export const useUpdateSubscriptionsSettings = function useUpdateSubscriptionsSettings() {
  const tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = undefined;
  closure_0 = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp4;
              callback(true);
              callback2(null);
              c5 = 2;
              obj1 = closure_2_2(closure_2_3[6]);
              c3 = 3;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.updateSubscriptionsSettings(callback, callback2);
              return obj1;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            callback(false);
            throw closure_4;
          } else {
            if (2 === tmp8) {
              c5 = 1;
              callback2(closure_4);
              c5 = 0;
              callback(false);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c5 = 1;
            }
            c5 = 0;
            callback(false);
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  return {
    loading: tmp[0],
    updateSubscriptionsSettings: React.useCallback(function(arg0, arg1) {
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
  function _deleteSubscriptionGroupListing() {
    const self = this;
    const tmp = closure_1_4((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c3 = 0;
      c6 = 0;
      c5 = 0;
      return (function*(arg0, arg1) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === table) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp4;
                c5 = 2;
                callback(true);
                callback2(null);
                let obj2 = closure_1_2(table[6]);
                table = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj2.deleteSubscriptionGroupListing(callback, callback2);
                return obj1;
              }
            } else if (1 === tmp8) {
              c5 = 0;
              callback(false);
              throw closure_4;
            } else if (2 === tmp8) {
              c5 = 1;
              callback2(closure_4);
              c5 = 0;
              callback(false);
              c6 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              callback(false);
              c6 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              c5 = 0;
              callback(false);
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp36) {
            closure_4 = tmp36;
            if (tmp5 === c5) {
              c6 = tmp3;
              throw tmp36;
            } else if (tmp2 === tmp38) {
              table = tmp2;
            } else {
              table = tmp;
            }
          }
        }
      })();
    });
    closure_2 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  return {
    error: tmp2[0],
    submitting: tmp[0],
    deleteSubscriptionGroupListing(arg0, arg1) {
      const self = this;
      const apply = _deleteSubscriptionGroupListing.apply;
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
  const tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c5 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp4;
              callback(true);
              closure_1_1(null);
              c4 = 2;
              obj1 = closure_2_2(closure_2_3[6]);
              c2 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.fetchSubscriptionsSettings(callback);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            callback(false);
            throw closure_3;
          } else {
            if (2 === tmp8) {
              c4 = 1;
              closure_1_1(closure_3);
              c4 = 0;
              callback(false);
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c4 = 1;
            }
            c4 = 0;
            callback(false);
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  return {
    loading: tmp[0],
    fetchSubscriptionsSettings: React.useCallback(function(arg0) {
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
  const tmp = callback2(React.useState(false), 2);
  closure_0 = tmp[1];
  const tmp2 = callback2(React.useState(null), 2);
  closure_1 = tmp2[1];
  closure_0 = undefined;
  closure_0 = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c7 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp4;
              callback(true);
              callback2(null);
              c6 = 2;
              obj1 = closure_2_2(closure_2_3[6]);
              c4 = 3;
              c7 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.updateSubscriptionTrial(callback, callback2, closure_2);
              return obj1;
            }
          } else if (1 === tmp8) {
            c6 = 0;
            callback(false);
            throw closure_5;
          } else {
            if (2 === tmp8) {
              c6 = 1;
              callback2(closure_5);
              c6 = 0;
              callback(false);
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c6 = 1;
            }
            c6 = 0;
            callback(false);
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
  });
  return {
    loading: tmp[0],
    updateSubscriptionTrial: React.useCallback(function(arg0, arg1, arg2) {
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
  const _require = editStateId;
  const items = [closure_8];
  return _require(589).useStateFromStores(items, () => {
    let subscriptionTrial = null;
    if (null != closure_0) {
      subscriptionTrial = closure_1_8.getSubscriptionTrial(tmp);
    }
    return subscriptionTrial;
  });
};
export const useSubscriptionTrialsForGroup = function useSubscriptionTrialsForGroup(arg0) {
  let stateFromStoresArray = arg0;
  const obj = {};
  let flag = obj.includeSoftDeleted;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = obj.includeUnpublished;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let items = [closure_8];
  const items1 = [arg0, flag, flag2];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => {
    if (null == stateFromStoresArray) {
      return [];
    } else {
      const subscriptionGroupListing = closure_1_8.getSubscriptionGroupListing(tmp);
      if (null == subscriptionGroupListing) {
        return [];
      } else {
        const items = [];
        const subscription_listings_ids = subscriptionGroupListing.subscription_listings_ids;
        for (const item10009 of subscription_listings_ids) {
          let tmp4 = closure_1_8;
          let subscriptionListing = closure_1_8.getSubscriptionListing(item10009);
          let tmp6 = subscriptionListing;
          if (null != subscriptionListing) {
            let tmp7 = subscriptionListing;
            let soft_deleted = tmp6.soft_deleted;
            if (soft_deleted) {
              let tmp8 = flag;
              soft_deleted = !flag;
            }
            if (!soft_deleted) {
              let tmp9 = subscriptionListing;
              let published = tmp6.published;
              if (!published) {
                published = flag2;
              }
              if (published) {
                let tmp10 = subscriptionListing;
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
  const obj2 = stateFromStoresArray(589);
  const items2 = [closure_8];
  const items3 = [stateFromStoresArray];
  return stateFromStoresArray(589).useStateFromStoresArray(items2, () => {
    const mapped = stateFromStoresArray.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(stateFromStoresArray(closure_1_3[11]).isNotNullish);
  }, items3);
};
export const useSubscriptionTrialsForGuild = function useSubscriptionTrialsForGuild(guildId) {
  let stateFromStoresArray = guildId;
  closure_1 = { includeSoftDeleted: false, sortDeletedListingsLast: false };
  useFetchListingsForGuild(guildId);
  const items = [closure_8];
  stateFromStoresArray = stateFromStoresArray(589).useStateFromStoresArray(items, () => {
    let tmp = stateFromStoresArray;
    if (null != stateFromStoresArray) {
      let subscriptionGroupListingsForGuild = closure_1_8.getSubscriptionGroupListingsForGuild(tmp);
    } else {
      subscriptionGroupListingsForGuild = closure_1_10;
    }
    tmp = subscriptionGroupListingsForGuild;
    subscriptionGroupListingsForGuild[Symbol.iterator]();
  });
  const obj = stateFromStoresArray(589);
  const items1 = [closure_8];
  const items2 = [stateFromStoresArray];
  return stateFromStoresArray(589).useStateFromStoresArray(items1, () => {
    const mapped = stateFromStoresArray.map((id) => subscriptionTrial.getSubscriptionTrial(id.id));
    return mapped.filter(stateFromStoresArray(closure_1_3[11]).isNotNullish);
  }, items2);
};