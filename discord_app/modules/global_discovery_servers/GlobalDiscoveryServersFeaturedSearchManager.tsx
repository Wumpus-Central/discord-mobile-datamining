// === Module 17827: GlobalDiscoveryServersFeaturedSearchManager ===

// Module 17827 (GlobalDiscoveryServersFeaturedSearchManager)
import GlobalDiscoveryServersSearchResultsStoreDefault from "GlobalDiscoveryServersSearchResultsStore" /* 13704 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

let require = fn;
GlobalDiscoveryServersSearchResultsStoreDefault;
let closure_6 = fn(9066).DISCOVERY_ALL_CATEGORIES_ID;
const Endpoints = fn(1074).Endpoints;
let prototype = function GlobalDiscoveryServersFeaturedSearchManager() {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
              let obj1 = { categoryId };
              if (!isFetchEnabled) {
                let obj6 = applyArgumentsResult(tmp3[5]);
              }
              let obj7 = isFetchEnabled(tmp3[6]);
              const obj2 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId, reset: true };
              obj7.dispatch(obj2);
              c5 = 1;
              const HTTP = applyArgumentsResult(tmp3[7]).HTTP;
              const request = { url: constants.GUILD_DISCOVERY, query: null, oldFormErrors: true, rejectWithError: null };
              let obj3 = { offset: 0, limit: applyArgumentsResult(tmp3[9]).GlobalDiscoveryServersLimits.FEATURED_DEFAULT_LIMIT };
              request.query = isFetchEnabled(tmp3[8]).stringify(obj3);
              const obj11 = isFetchEnabled(tmp3[8]);
              request.rejectWithError = applyArgumentsResult(tmp3[7]).rejectWithMigratedError();
              categoryId = 2;
              constants = 1;
              const obj4 = { value: HTTP.get(request), done: false };
              return obj4;
            } else {
              const queue = tmp64.queue;
              queue.add(categoryId);
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            closure_130_3 = closure_4;
            obj1 = isFetchEnabled(tmp3[6]);
            const obj5 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId, error: closure_130_3 };
            obj1.dispatch(obj5);
            obj3 = closure_2(tmp3[10]);
            obj6 = { categoryId };
            const result = obj3.trackGuildDiscoveryGetFeaturedGuildsFailed(obj6);
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_130_0 = value;
            total = closure_130_0.body.total;
            const guilds = closure_130_0.body.guilds;
            closure_130_2 = guilds.map(applyArgumentsResult(tmp3[5]).fromDiscoverableGuildServer);
            obj7 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId, guilds: closure_130_2, total };
            isFetchEnabled(tmp3[6]).dispatch(obj7);
            c5 = 0;
            const obj17 = isFetchEnabled(tmp3[6]);
          }
          c5 = 0;
          constants = 3;
          obj = { value, done: true };
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
            return { value: "PX_16", done: true };
          }
        } else {
          if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj1 = { value, done: true };
              return obj1;
            } else if (closure_130_1.isFetchEnabled) {
              const obj2 = { categoryId: closure_129_0 };
              lastFetchTimestamp2 = lastFetchTimestamp.getLastFetchTimestamp(obj2);
              if (!closure_129_1) {
                let obj6 = applyArgumentsResult(tmp49[5]);
              }
              let obj7 = isFetchEnabled(tmp49[6]);
              let obj3 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: closure_129_0, reset: true };
              obj7.dispatch(obj3);
              c4 = 1;
              const HTTP = applyArgumentsResult(tmp49[7]).HTTP;
              const request = { url: constants.GUILD_DISCOVERY, query: null, oldFormErrors: true, rejectWithError: null };
              const obj4 = { categories: null };
              const items = [closure_129_0];
              obj4.categories = items;
              request.query = isFetchEnabled(tmp49[8]).stringify(obj4);
              const obj11 = isFetchEnabled(tmp49[8]);
              request.rejectWithError = applyArgumentsResult(tmp49[7]).rejectWithMigratedError();
              lastFetchTimestamp = 3;
              c6 = 1;
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            } else {
              const queue = closure_130_1.queue;
              queue.add(closure_129_0);
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
              closure_129_6 = tmp49;
              obj1 = isFetchEnabled(tmp49[6]);
              obj6 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: closure_129_0, error: closure_129_6 };
              obj1.dispatch(obj6);
              obj3 = tmp3(tmp49[10]);
              obj7 = { categoryId: closure_129_0 };
              const result = obj3.trackGuildDiscoveryGetFeaturedGuildsFailed(obj7);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_3 = value;
              total = closure_129_3.body.total;
              const guilds = closure_129_3.body.guilds;
              closure_129_5 = guilds.map(applyArgumentsResult(tmp49[5]).fromDiscoverableGuildServer);
              const obj8 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: closure_129_0, guilds: closure_129_5, total };
              isFetchEnabled(tmp49[6]).dispatch(obj8);
              c4 = 0;
              const obj18 = isFetchEnabled(tmp49[6]);
            }
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
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
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx");

export default prototype;