// discord_app/modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx
import _navigateToGuild from "_navigateToGuild";
import map from "map";
import { DISCOVERY_ALL_CATEGORIES_ID as closure_6 } from "DEFAULT_DISCOVERY_CATEGORY_ID";
import { Endpoints } from "ME";
import "initialize";

const require = arg1;
let prototype = function GlobalDiscoveryServersFeaturedSearchManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let closure_0 = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return closure_0.handleConnectionOpen();
    }
  };
  applyArgumentsResult.queue = new Set();
  applyArgumentsResult.isFetchEnabled = false;
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    closure_0.isFetchEnabled = true;
    const queue = closure_0.queue;
    const item = queue.forEach((arg0) => {
      if (arg0 === outer1_6) {
        const featuredGuilds = closure_0.fetchFeaturedGuilds();
      } else {
        const obj = { categoryId: null };
        obj[0] = arg0;
        const categoryFeaturedGuilds = closure_0.fetchCategoryFeaturedGuilds(obj);
      }
    });
  };
  closure_0 = undefined;
  let importDefault = applyArgumentsResult;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          constants = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_3 = tmp3;
              let closure_2 = tmp7;
              let lib;
              let total;
              closure_2 = undefined;
              if (outer1_1.isFetchEnabled) {
                let forceRefresh;
                if (tmp64 != null) {
                  forceRefresh = tmp64.forceRefresh;
                }
                total = forceRefresh;
                if (forceRefresh == null) {
                  total = false;
                }
                let obj1 = { categoryId: null };
                obj1[0] = c6;
                if (!total) {
                  let obj6 = lib(outer1_3[5]);
                }
                let obj7 = outer1_1(outer1_3[6]);
                const obj2 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: null, reset: true };
                obj2[1] = c6;
                obj7.dispatch(obj2);
                let c5 = 1;
                const HTTP = lib(outer1_3[7]).HTTP;
                let obj3 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
                obj3[0] = constants.GUILD_DISCOVERY;
                const obj4 = { offset: 0, limit: null };
                obj4[1] = lib(outer1_3[9]).GlobalDiscoveryServersLimits.FEATURED_DEFAULT_LIMIT;
                obj3[1] = outer1_1(outer1_3[8]).stringify(obj4);
                const obj11 = outer1_1(outer1_3[8]);
                obj3[3] = lib(outer1_3[7]).rejectWithMigratedError();
                c6 = 2;
                constants = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = HTTP.get(obj3);
                return obj5;
              } else {
                const queue = tmp65.queue;
                queue.add(c6);
              }
            }
          } else {
            if (1 === tmp7) {
              c5 = 0;
              outer1_3 = _navigateToGuild;
              obj1 = outer1_1(outer1_3[6]);
              obj6 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: null, error: null };
              obj6[1] = c6;
              obj6[2] = outer1_3;
              obj1.dispatch(obj6);
              obj3 = outer1_2(outer1_3[10]);
              obj7 = { categoryId: null };
              obj7[0] = c6;
              const result = obj3.trackGuildDiscoveryGetFeaturedGuildsFailed(obj7);
            } else if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              lib = arg1;
              total = lib.body.total;
              const guilds = lib.body.guilds;
              closure_2 = guilds.map(lib(outer1_3[5]).fromDiscoverableGuildServer);
              const obj8 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: null, guilds: null, total: null };
              obj8[1] = c6;
              obj8[2] = closure_2;
              obj8[3] = total;
              outer1_1(outer1_3[6]).dispatch(obj8);
              c5 = 0;
              const obj17 = outer1_1(outer1_3[6]);
            }
            c5 = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          constants = 3;
        } catch (tmp43) {
          _navigateToGuild = tmp43;
          if (tmp4 === c5) {
            constants = tmp2;
            throw tmp43;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  applyArgumentsResult.fetchFeaturedGuilds = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  closure_0 = undefined;
  importDefault = applyArgumentsResult;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let forceRefresh;
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === lastFetchTimestamp) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c2 = tmp3;
              forceRefresh = tmp7;
              c0 = undefined;
              forceRefresh = undefined;
              ({ categoryId: c0, forceRefresh } = c0);
              if (forceRefresh === undefined) {
                forceRefresh = false;
              }
              c2 = undefined;
              let closure_3;
              let total;
              lastFetchTimestamp = undefined;
              lastFetchTimestamp = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (outer1_1.isFetchEnabled) {
                const obj2 = { categoryId: null };
                obj2[0] = callback;
                const outer1_2 = lastFetchTimestamp.getLastFetchTimestamp(obj2);
                if (!outer1_1) {
                  let obj6 = callback(outer1_3[5]);
                }
                let obj7 = outer1_1(outer1_3[6]);
                let obj3 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId: null, reset: true };
                obj3[1] = c0;
                obj7.dispatch(obj3);
                total = 1;
                const HTTP = callback(outer1_3[7]).HTTP;
                const obj4 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
                obj4[0] = outer1_7.GUILD_DISCOVERY;
                const obj5 = { categories: null };
                const items = [c0];
                obj5[0] = items;
                obj4[1] = outer1_1(outer1_3[8]).stringify(obj5);
                const obj11 = outer1_1(outer1_3[8]);
                obj4[3] = callback(outer1_3[7]).rejectWithMigratedError();
                lastFetchTimestamp = 3;
                c6 = 1;
                obj6 = { value: null, done: false };
                obj6[0] = HTTP.get(obj4);
                return obj6;
              } else {
                const queue = forceRefresh.queue;
                queue.add(callback);
              }
            } else {
              if (2 === tmp7) {
                total = 0;
                c6 = closure_3;
                obj1 = outer1_1(outer1_3[6]);
                obj7 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId: null, error: null };
                obj7[1] = c0;
                obj7[2] = c6;
                obj1.dispatch(obj7);
                obj3 = outer1_2(outer1_3[10]);
                const obj8 = { categoryId: null };
                obj8[0] = c0;
                const result = obj3.trackGuildDiscoveryGetFeaturedGuildsFailed(obj8);
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_3 = arg1;
                total = closure_3.body.total;
                const guilds = closure_3.body.guilds;
                lastFetchTimestamp = guilds.map(callback(outer1_3[5]).fromDiscoverableGuildServer);
                const obj9 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId: null, guilds: null, total: null };
                obj9[1] = c0;
                obj9[2] = lastFetchTimestamp;
                obj9[3] = total;
                outer1_1(outer1_3[6]).dispatch(obj9);
                total = 0;
                const obj18 = outer1_1(outer1_3[6]);
              }
              total = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c6 = 3;
          }
        } catch (tmp49) {
          closure_3 = tmp49;
          if (tmp4 === total) {
            c6 = tmp2;
            throw tmp49;
          } else {
            lastFetchTimestamp = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  applyArgumentsResult.fetchCategoryFeaturedGuilds = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
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
let result = require("DEFAULT_DISCOVERY_CATEGORY_ID").fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx");

export default prototype;