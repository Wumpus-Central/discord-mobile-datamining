import _getSystemLocale from "_getSystemLocale";
import mergeGuildAvatar from "mergeGuildAvatar";
import handleGameServerUpsert from "handleGameServerUpsert";
import { GAME_SERVER_COLLECTION_ID } from "str11";
import ME from "ME";

let error;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: error, Endpoints: metroImportAll } = ME);
let result = require("handleGameServerUpsert").fileFinishedImporting("modules/game_server/GameServerActionCreators.tsx");

export const fetchGameServerCatalog = function fetchGameServerCatalog(closure_0) {
  const _require = closure_0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: callback, catalog: null };
      const prop = callback(outer1_2[6]).GAME_SERVER_GAME_MOCKS;
      obj[2] = prop.reduce((arg0, id) => {
        arg0[id.id] = id;
        return arg0;
      }, {});
      obj.dispatch(obj);
    }, 5000);
  } else {
    const currentUser = authStore.getCurrentUser();
    let flag2;
    if (currentUser != null) {
      flag2 = currentUser.isStaff();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    let obj = { url: null, query: null, oldFormErrors: true, rejectWithError: null, retries: 2 };
    obj[0] = closure_8.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID);
    obj = { locale: null, guild_id: null, include_unpublished_products: null, include_unpublished_collection: null };
    obj[0] = _getSystemLocale.locale;
    obj[1] = closure_0;
    obj[2] = flag2;
    obj[3] = flag2;
    obj[1] = obj;
    const obj2 = _require(4522);
    obj[3] = _require(530).rejectWithMigratedError();
    let result = obj2.httpGetWithCountryCodeQuery(obj);
    return result.then((body) => {
      const products = body.body.products;
      const reduced = products.reduce((arg0, id) => {
        const result = callback(table[9]).productToGameServerGame(id);
        arg0[result.id] = result;
        return arg0;
      }, {});
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: closure_0, catalog: reduced };
      obj.dispatch(obj);
    });
  }
};
export const fetchGameServerGlobalCatalog = function fetchGameServerGlobalCatalog() {
  const currentUser = authStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.isStaff();
  }
  if (flag == null) {
    flag = false;
  }
  obj = { url: closure_8.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID), query: obj, oldFormErrors: true, rejectWithError: null, retries: 2 };
  obj = { locale: _getSystemLocale.locale, include_unpublished_products: flag, include_unpublished_collection: flag };
  const obj2 = require(4522) /* _httpGetWithCountryCodeQuery */;
  obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
  let result = obj2.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    const products = body.body.products;
    const reduced = products.reduce((arg0, id) => {
      const result = callback(table[9]).productToGameServerGame(id);
      arg0[result.id] = result;
      return arg0;
    }, {});
    callback(table[5]).dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: reduced });
  });
};
export const fetchGameServerInstances = function fetchGameServerInstances(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: callback, instances: null };
      const prop = callback(outer1_2[6]).GAME_SERVER_INSTANCE_MOCKS;
      obj[2] = prop.reduce((arg0, id) => {
        arg0[id.id] = id;
        return arg0;
      }, {});
      obj.dispatch(obj);
    }, 5000);
    let resolved = Promise.resolve();
  } else {
    const HTTP = _require(530).HTTP;
    let obj = { url: null, rejectWithError: true, retries: 2, signal: null };
    obj[0] = closure_8.GAME_SERVERS(arg0);
    obj[3] = arg2;
    const value = HTTP.get(obj);
    resolved = value.then((body) => {
      if (null != body.body) {
        body = body.body;
        const reduced = body.reduce((arg0, id) => {
          arg0[id.id] = callback(table[10])(id);
          return arg0;
        }, {});
        let obj = outer1_1(outer1_2[5]);
        obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: null, instances: null };
        obj[1] = closure_0;
        obj[2] = reduced;
        obj.dispatch(obj);
      }
    });
  }
  return resolved;
};
export const fetchGameServerInstructions = function fetchGameServerInstructions(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = _require(4522);
  obj = { url: closure_8.STOREFRONT_PRODUCT_BY_SKU_ID(arg1), query: obj, rejectWithError: true, retries: 3 };
  obj = { locale: _getSystemLocale.locale };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((body) => {
    if (null != body.body) {
      const tenant_metadata = body.body.tenant_metadata;
      let pc;
      if (tenant_metadata != null) {
        const guild_monetization = tenant_metadata.guild_monetization;
        if (guild_monetization != null) {
          const game_server = guild_monetization.game_server;
          if (game_server != null) {
            pc = game_server.instructions.pc;
          }
        }
      }
      if (pc == null) {
        pc = [];
      }
      let obj = callback(outer1_2[5]);
      obj = { type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS", guildId: null, skuId: null, instructions: null };
      obj[1] = closure_0;
      obj[2] = callback;
      obj[3] = pc;
      obj.dispatch(obj);
    }
  });
};
export const acceptGameServerToS = function acceptGameServerToS(arg0, arg1) {
  if (arg0) {
    let obj = importDefault(698);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj = { user_id: null, provider: null };
    obj[0] = id;
    obj[1] = arg1;
    obj.track(constants.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, obj);
  }
};
export const resetGameServerRegionState = function resetGameServerRegionState() {
  importDefault(709).dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
};
export const updateGameServerRegionPingState = function updateGameServerRegionPingState(pingUrl, state) {
  let obj = importDefault(709);
  obj = { type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl, state };
  obj.dispatch(obj);
};
export const enableGameServerForGuild = function enableGameServerForGuild(arg0, arg1, game_server_name, game_server_region) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: closure_8.GUILD_POWERUP_TOGGLE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, game_server_region };
  return HTTP.post(obj);
};
export const updateGameServerForGuild = function updateGameServerForGuild(arg0, arg1, sku_id, game_server_name) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: closure_8.GUILD_POWERUP_UPDATE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, sku_id };
  return HTTP.patch(obj);
};
export const disableGameServerForGuild = function disableGameServerForGuild(arg0, arg1, entitlement_id) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  obj = { url: closure_8.GUILD_POWERUP_TOGGLE(arg0, arg1), query: obj, rejectWithError: true, oldFormErrors: true };
  obj = { entitlement_id };
  return HTTP.del(obj);
};
export const fetchGameServerRegions = function fetchGameServerRegions(arg0) {
  const HTTP = require(530) /* sendRequest */.HTTP;
  const value = HTTP.get({ url: closure_8.GAME_SERVER_REGIONS(arg0), rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((body) => {
    let obj = callback(709);
    obj = { type: "GAME_SERVER_FETCH_REGIONS_SUCCESS", regions: null };
    body = body.body;
    const mapped = body.map(callback(11760));
    obj[1] = mapped.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    obj.dispatch(obj);
  });
};
export const fetchMyGameServerRegions = function fetchMyGameServerRegions() {
  const HTTP = require(530) /* sendRequest */.HTTP;
  const value = HTTP.get({ url: closure_8.GAME_SERVER_MY_REGIONS, rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((body) => {
    let obj = callback(709);
    obj = { type: "GAME_SERVER_FETCH_REGIONS_SUCCESS", regions: null, creationDisabled: null };
    const regions = body.body.regions;
    const mapped = regions.map(callback(11760));
    obj[1] = mapped.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    obj[2] = true === body.body.creation_disabled;
    obj.dispatch(obj);
  });
};
export const fetchMyGameServers = function fetchMyGameServers() {
  const HTTP = require(530) /* sendRequest */.HTTP;
  const value = HTTP.get({ url: closure_8.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((body) => {
    body = body.body;
    let obj = callback(table[5]);
    let game_servers = body.game_servers;
    if (game_servers == null) {
      game_servers = [];
    }
    obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
    obj.dispatch(obj);
  });
};
export const optimisticallyMarkGameServerResizing = function optimisticallyMarkGameServerResizing(arg0) {
  const _require = arg0;
  const gameServers = store.getGameServers();
  const found = gameServers.find((subscription_id) => subscription_id.subscription_id === closure_0);
  if (null != found) {
    let obj = importDefault(709);
    obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: "text-md/semibold" };
    obj = {};
    const merged = Object.assign(found);
    obj.status = _require(11758).GameServerStatus.STARTING;
    obj[2] = obj;
    obj.dispatch(obj);
  }
};
export const updateMyGameServerName = function updateMyGameServerName(arg0, name) {
  const _require = arg0;
  const gameServers = store.getGameServers();
  const found = gameServers.find((subscription_id) => subscription_id.subscription_id === closure_0);
  if (null == found) {
    let resolved = Promise.resolve();
  } else {
    let obj = importDefault(709);
    obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: "text-md/semibold" };
    obj = {};
    const merged = Object.assign(found);
    obj.name = name;
    obj[2] = obj;
    obj.dispatch(obj);
    let HTTP = _require(530).HTTP;
    const obj1 = { url: null, body: null, rejectWithError: true };
    obj1[0] = closure_8.GAME_SERVER_ME(found.id);
    const obj2 = { name: null };
    obj2[0] = name;
    obj1[1] = obj2;
    const patchResult = HTTP.patch(obj1);
    resolved = HTTP.patch(obj1).then(() => {
      const HTTP = callback(530).HTTP;
      const value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value.then((body) => {
        body = body.body;
        let obj = callback(table[5]);
        let game_servers = body.game_servers;
        if (game_servers == null) {
          game_servers = [];
        }
        obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
        obj.dispatch(obj);
      }).catch(() => {

      });
    }).catch((arg0) => {
      const HTTP = callback(530).HTTP;
      const value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value.then((body) => {
        body = body.body;
        let obj = callback(table[5]);
        let game_servers = body.game_servers;
        if (game_servers == null) {
          game_servers = [];
        }
        obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
        obj.dispatch(obj);
      }).catch(() => {

      });
      throw arg0;
    });
    const nextPromise = HTTP.patch(obj1).then(() => {
      const HTTP = callback(530).HTTP;
      const value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value.then((body) => {
        body = body.body;
        let obj = callback(table[5]);
        let game_servers = body.game_servers;
        if (game_servers == null) {
          game_servers = [];
        }
        obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
        obj.dispatch(obj);
      }).catch(() => {

      });
    });
  }
  return resolved;
};
export const wakeGameServer = function wakeGameServer(arg0, arg1) {
  const _require = arg0;
  const HTTP = _require(530).HTTP;
  let obj = { url: closure_8.GAME_SERVER_WAKE(arg0, arg1), rejectWithError: true };
  return HTTP.post({ url: closure_8.GAME_SERVER_WAKE(arg0, arg1), rejectWithError: true }).then((body) => {
    let obj = outer1_1(outer1_2[5]);
    obj = { type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: closure_0, instance: outer1_1(outer1_2[10])(body.body) };
    obj.dispatch(obj);
  });
};