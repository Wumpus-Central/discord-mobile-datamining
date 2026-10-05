// === Module 18022: GlobalDiscoveryServersFeaturedSearchManager ===

// Module 18022 (GlobalDiscoveryServersFeaturedSearchManager)
import Constants from "Constants" /* 1085 */;
import GlobalDiscoveryServersConstants from "GlobalDiscoveryServersConstants" /* 9249 */;
import GlobalDiscoveryServersSearchResultsStoreDefault from "GlobalDiscoveryServersSearchResultsStore" /* 13517 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let closure_4, constants;

GlobalDiscoveryServersSearchResultsStoreDefault;
let closure_6 = GlobalDiscoveryServersConstants.DISCOVERY_ALL_CATEGORIES_ID;
const Endpoints = Constants.Endpoints;
class GlobalDiscoveryServersFeaturedSearchManager extends AutomaticLifecycleManager {
  constructor() {
    let applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return require.handleConnectionOpen();
      }
    };
    applyArgumentsResult.queue = new Set();
    applyArgumentsResult.isFetchEnabled = false;
    applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
      require.isFetchEnabled = true;
      const queue = require.queue;
      const item = queue.forEach((categoryId) => {
        if (categoryId === closure_2_6) {
          const featuredGuilds = closure_1_0.fetchFeaturedGuilds();
        } else {
          const obj = { categoryId };
          const categoryFeaturedGuilds = closure_1_0.fetchCategoryFeaturedGuilds(obj);
        }
      });
    };
    new Set();
    _asyncToGenerator(async (arg0) => {
      let categoryId;
      let obj10;
      let obj12;
      let stringify;
      closure_0 = arg0;
      if (constants === 2) {
        constants = 3;
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
          let error;
          let total;
          let guilds;
          let _false;
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
              error = tmp;
              closure_0 = undefined;
              total = undefined;
              guilds = undefined;
              if (applyArgumentsResult.isFetchEnabled) {
                let forceRefresh;
                if (closure_0 != null) {
                  forceRefresh = tmp60.forceRefresh;
                }
                _false = forceRefresh;
                if (forceRefresh == null) {
                  _false = false;
                }
                const obj6 = { categoryId };
                if (!_false) {
                  closure_0(error[5]);
                }
                const obj9 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId, reset: true };
                const obj8 = _false(error[6]);
                obj8.dispatch(obj9);
                c5 = 1;
                const HTTP = closure_0(error[7]).HTTP;
                const request = { url: constants.GUILD_DISCOVERY, query: stringify(obj10), oldFormErrors: true, rejectWithError: obj12.rejectWithMigratedError() };
                const get = HTTP.get;
                obj10 = { offset: 0, limit: closure_0(error[9]).GlobalDiscoveryServersLimits.FEATURED_DEFAULT_LIMIT };
                stringify = _false(error[8]).stringify;
                const tmp36 = _false(error[8]);
                obj12 = closure_0(error[7]);
                categoryId = 2;
                constants = 1;
                const obj11 = { value: get(request), done: false };
                return obj11;
              } else {
                const queue = tmp61.queue;
                queue.add(categoryId);
              }
            }
          } else if (1 === categoryId) {
            c5 = 0;
            error = closure_4;
            const obj13 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId, error };
            const obj2 = _false(error[6]);
            obj2.dispatch(obj13);
            const obj14 = { categoryId };
            const obj4 = guilds(error[10]);
            const result = obj4.trackGuildDiscoveryGetFeaturedGuildsFailed(obj14);
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            constants = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            total = closure_0.body.total;
            guilds = closure_0.body.guilds;
            guilds = guilds.map(closure_0(error[5]).fromDiscoverableGuildServer);
            const obj15 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId, guilds, total };
            const obj16 = _false(error[6]);
            obj16.dispatch(obj15);
            c5 = 0;
          }
          constants = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp41) {
          closure_4 = tmp41;
          if (0 === c5) {
            constants = 3;
            throw tmp41;
          } else {
            categoryId = 1;
          }
        }
      }
    });
    applyArgumentsResult.fetchFeaturedGuilds = function() {
      return closure_0(...arguments);
    };
    let closure_0 = _asyncToGenerator(async (categoryId) => {
      let c0;
      let closure_1;
      let closure_2;
      let closure_3;
      let forceRefresh;
      let guilds;
      let items;
      let obj11;
      let obj12;
      let obj13;
      let tmp;
      let tmp46;
      if (1 === guilds) {
        if (categoryId === 1) {
          let c6 = 3;
          throw value;
        } else if (categoryId === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else if (closure_130_1.isFetchEnabled) {
          const obj9 = { categoryId };
          tmp = guilds.getLastFetchTimestamp(obj9);
          const tmp23 = forceRefresh;
          if (!tmp23) {
            categoryId(tmp46[5]);
          }
          const obj10 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_START", categoryId, reset: true };
          const obj8 = applyArgumentsResult(tmp46[6]);
          obj8.dispatch(obj10);
          let c4 = 1;
          const HTTP = categoryId(tmp46[7]).HTTP;
          const request = { url: constants.GUILD_DISCOVERY, query: obj11.stringify(obj12), oldFormErrors: true, rejectWithError: obj13.rejectWithMigratedError() };
          const get = HTTP.get;
          obj12 = { categories: items };
          items = [categoryId];
          obj11 = applyArgumentsResult(tmp46[8]);
          obj13 = categoryId(tmp46[7]);
          guilds = 3;
          c6 = 1;
          const obj14 = { value: get(request), done: false };
          return obj14;
        } else {
          const queue = closure_130_1.queue;
          queue.add(categoryId);
        }
      } else if (2 === guilds) {
        c4 = 0;
        const error = tmp46;
        const obj15 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_FAILURE", categoryId, error };
        const obj2 = applyArgumentsResult(tmp46[6]);
        obj2.dispatch(obj15);
        const obj16 = { categoryId };
        const obj4 = tmp(tmp46[10]);
        const result = obj4.trackGuildDiscoveryGetFeaturedGuildsFailed(obj16);
      } else if (categoryId === 1) {
        c6 = 3;
        throw value;
      } else if (categoryId === 2) {
        c4 = 0;
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        tmp46 = value;
        const total = tmp46.body.total;
        guilds = tmp46.body.guilds;
        guilds = guilds.map(categoryId(tmp46[5]).fromDiscoverableGuildServer);
        const obj17 = { type: "GLOBAL_DISCOVERY_SERVERS_SEARCH_SUCCESS", categoryId, guilds, total };
        const obj18 = applyArgumentsResult(tmp46[6]);
        obj18.dispatch(obj17);
        c4 = 0;
      }
      await "IconComponent";
      applyArgumentsResult = tmp4;
      ({ categoryId: c0, forceRefresh } = categoryId);
      if (forceRefresh === undefined) {
        forceRefresh = false;
      }
      return "Set";
    });
    applyArgumentsResult.fetchCategoryFeaturedGuilds = function() {
      return closure_0(...arguments);
    };
    return applyArgumentsResult;
  }
}
const globalDiscoveryServersFeaturedSearchManager = new GlobalDiscoveryServersFeaturedSearchManager();
let result = size.fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx");

export default globalDiscoveryServersFeaturedSearchManager;