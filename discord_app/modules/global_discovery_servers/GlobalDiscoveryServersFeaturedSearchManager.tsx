// === Module 18298: GlobalDiscoveryServersFeaturedSearchManager ===

// Module 18298 (GlobalDiscoveryServersFeaturedSearchManager)
import GlobalDiscoveryServersSearchResultsStoreDefault from "GlobalDiscoveryServersSearchResultsStore" /* 13978 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7365 */;

let require = fn;
GlobalDiscoveryServersSearchResultsStoreDefault;
let closure_6 = fn(9863).DISCOVERY_ALL_CATEGORIES_ID;
const Endpoints = fn(1074).Endpoints;
const prototype = function GlobalDiscoveryServersFeaturedSearchManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    }
  };
  applyArgumentsResult.queue = new Set();
  applyArgumentsResult.isFetchEnabled = false;
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    applyArgumentsResult.isFetchEnabled = true;
    const queue = applyArgumentsResult.queue;
    const item = queue.forEach((categoryId) => {
      if (categoryId === closure_2_6) {
        const featuredGuilds = closure_1_0.fetchFeaturedGuilds();
      } else {
        const obj = { categoryId };
        const categoryFeaturedGuilds = closure_1_0.fetchCategoryFeaturedGuilds(obj);
      }
    });
  };
  closure_129_1 = applyArgumentsResult;
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    if (constants === 2) {
      constants = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        constants = 2;
        if (0 === categoryId) {
          if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = tmp7;
            closure_130_0 = undefined;
            let total;
            closure_130_2 = undefined;
            if (isFetchEnabled.isFetchEnabled) {
              let forceRefresh;
              if (applyArgumentsResult != null) {
                forceRefresh = applyArgumentsResult.forceRefresh;
              }
              isFetchEnabled = forceRefresh;
              if (forceRefresh == null) {
                isFetchEnabled = false;
              }
              { categoryId: null }.categoryId = categoryId;
              if (!isFetchEnabled) {
                applyArgumentsResult(tmp3[5]);
              }
              const obj9 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId, reset: true };
              isFetchEnabled(tmp3[6]).dispatch(obj9);
              c5 = 1;
              const HTTP = applyArgumentsResult(tmp3[7]).HTTP;
              const request = { url: constants.GUILD_DISCOVERY, query: null, oldFormErrors: true, rejectWithError: null };
              const obj6 = { categoryId: null };
              const obj8 = isFetchEnabled(tmp3[6]);
              const obj10 = { offset: 0, limit: applyArgumentsResult(tmp3[9]).GlobalDiscoveryServersLimits.FEATURED_DEFAULT_LIMIT };
              request.query = isFetchEnabled(tmp3[8]).stringify(obj10);
              const obj11 = isFetchEnabled(tmp3[8]);
              request.rejectWithError = applyArgumentsResult(tmp3[7]).rejectWithMigratedError();
              categoryId = 2;
              constants = 1;
              const obj12 = { value: HTTP.get(request), done: false };
              return obj12;
            } else {
              const queue = tmp64.queue;
              queue.add(categoryId);
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            closure_130_3 = closure_4;
            const obj14 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId, error: closure_130_3 };
            isFetchEnabled(tmp3[6]).dispatch(obj14);
            const obj2 = isFetchEnabled(tmp3[6]);
            const obj15 = { categoryId };
            const result = closure_2(tmp3[10]).trackGuildDiscoveryGetFeaturedGuildsFailed(obj15);
            const obj4 = closure_2(tmp3[10]);
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_0 = value;
            total = closure_130_0.body.total;
            const guilds = closure_130_0.body.guilds;
            closure_130_2 = guilds.map(applyArgumentsResult(tmp3[5]).fromDiscoverableGuildServer);
            const obj16 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId, guilds: closure_130_2, total };
            isFetchEnabled(tmp3[6]).dispatch(obj16);
            c5 = 0;
            const obj17 = isFetchEnabled(tmp3[6]);
          }
          c5 = 0;
          constants = 3;
          const obj = { value, done: true };
          return obj;
        }
        constants = 3;
      } catch (tmp43) {
        closure_4 = tmp43;
        if (tmp4 === c5) {
          constants = tmp2;
          throw tmp43;
        } else {
          categoryId = tmp;
        }
      }
    }
  });
  applyArgumentsResult.fetchFeaturedGuilds = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_130_1 = applyArgumentsResult;
  closure_130_0 = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === lastFetchTimestamp) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            isFetchEnabled = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            ({ categoryId: closure_129_0, forceRefresh } = applyArgumentsResult);
            if (forceRefresh === undefined) {
              forceRefresh = false;
            }
            closure_129_1 = forceRefresh;
            let lastFetchTimestamp2;
            closure_129_3 = undefined;
            let total;
            closure_129_5 = undefined;
            lastFetchTimestamp = 1;
            c6 = 1;
            return { value: "flex", done: true };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else if (closure_130_1.isFetchEnabled) {
              const obj9 = { categoryId: closure_129_0 };
              lastFetchTimestamp2 = lastFetchTimestamp.getLastFetchTimestamp(obj9);
              if (!closure_129_1) {
                applyArgumentsResult(tmp49[5]);
              }
              const obj10 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: closure_129_0, reset: true };
              isFetchEnabled(tmp49[6]).dispatch(obj10);
              c4 = 1;
              const HTTP = applyArgumentsResult(tmp49[7]).HTTP;
              const request = { url: constants.GUILD_DISCOVERY, query: null, oldFormErrors: true, rejectWithError: null };
              const obj8 = isFetchEnabled(tmp49[6]);
              const obj12 = { categories: null };
              const items = [closure_129_0];
              obj12.categories = items;
              request.query = isFetchEnabled(tmp49[8]).stringify(obj12);
              const obj11 = isFetchEnabled(tmp49[8]);
              request.rejectWithError = applyArgumentsResult(tmp49[7]).rejectWithMigratedError();
              lastFetchTimestamp = 3;
              c6 = 1;
              const obj14 = { value: HTTP.get(request), done: false };
              return obj14;
            } else {
              const queue = closure_130_1.queue;
              queue.add(closure_129_0);
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
              closure_129_6 = tmp49;
              const obj15 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: closure_129_0, error: closure_129_6 };
              isFetchEnabled(tmp49[6]).dispatch(obj15);
              const obj2 = isFetchEnabled(tmp49[6]);
              const obj16 = { categoryId: closure_129_0 };
              const result = tmp3(tmp49[10]).trackGuildDiscoveryGetFeaturedGuildsFailed(obj16);
              const obj4 = tmp3(tmp49[10]);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_3 = value;
              total = closure_129_3.body.total;
              const guilds = closure_129_3.body.guilds;
              closure_129_5 = guilds.map(applyArgumentsResult(tmp49[5]).fromDiscoverableGuildServer);
              const obj17 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: closure_129_0, guilds: closure_129_5, total };
              isFetchEnabled(tmp49[6]).dispatch(obj17);
              c4 = 0;
              const obj18 = isFetchEnabled(tmp49[6]);
            }
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c6 = 3;
        }
      } catch (tmp49) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp49;
        } else {
          lastFetchTimestamp = tmp;
        }
      }
    }
  });
  applyArgumentsResult.fetchCategoryFeaturedGuilds = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx");

export default prototype1;