// === Module 11651: fetchGameServerCatalog ===

// Module 11651 (fetchGameServerCatalog)
import sendRequest from "sendRequest" /* 530 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import gameServerResponseToInstanceDefault from "gameServerResponseToInstance" /* 4284 */;
import _httpGetWithCountryCodeQuery from "_httpGetWithCountryCodeQuery" /* 4384 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import handleGameServerUpsert from "handleGameServerUpsert" /* 11652 */;
import { GAME_SERVER_COLLECTION_ID } from "str11" /* 4263 */;
import ME from "ME" /* 676 */;

require = fn;
({ AnalyticEvents: error, Endpoints: closure_8 } = ME);
let result = require("obj132").fileFinishedImporting("modules/game_server/GameServerActionCreators.tsx");

export const fetchGameServerCatalog = function fetchGameServerCatalog(closure_0) {
  const _require = closure_0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: callback, catalog: null };
      const prop = callback(dependencyMap[6]).GAME_SERVER_GAME_MOCKS;
      obj[2] = prop.reduce((acc, item, index) => {
        acc[item.id] = item;
        return acc;
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
    obj[0] = closure_3.locale;
    obj[1] = closure_0;
    obj[2] = flag2;
    obj[3] = flag2;
    obj[1] = obj;
    const obj2 = _require(4384);
    obj[3] = _require(530).rejectWithMigratedError();
    let result = obj2.httpGetWithCountryCodeQuery(obj);
    return result.then((result) => {
      const products = result.body.products;
      const reduced = products.reduce((acc, item, index) => {
        const result = callback(table[9]).productToGameServerGame(item);
        acc[result.id] = result;
        return acc;
      }, {});
      const obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId: closure_0, catalog: reduced };
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
  { url: closure_8.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID), query: obj, oldFormErrors: true, rejectWithError: null, retries: 2 };
  obj = { locale: closure_3.locale, include_unpublished_products: flag, include_unpublished_collection: flag };
  const obj2 = _httpGetWithCountryCodeQuery;
  obj[3] = sendRequest.rejectWithMigratedError();
  let result = obj2.httpGetWithCountryCodeQuery(obj);
  return result.then((result) => {
    const products = result.body.products;
    const reduced = products.reduce((acc, item, index) => {
      const result = callback(table[9]).productToGameServerGame(item);
      acc[result.id] = result;
      return acc;
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
      const obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: callback, instances: null };
      const prop = callback(dependencyMap[6]).GAME_SERVER_INSTANCE_MOCKS;
      obj[2] = prop.reduce((acc, item, index) => {
        acc[item.id] = item;
        return acc;
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
    resolved = value.then((result) => {
      if (null != result.body) {
        const body = result.body;
        const reduced = body.reduce((acc, item, index) => {
          acc[item.id] = callback(table[10])(item);
          return acc;
        }, {});
        const obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId: null, instances: null };
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
  closure_1 = arg1;
  let obj = _require(4384);
  { url: closure_8.STOREFRONT_PRODUCT_BY_SKU_ID(arg1), query: obj, rejectWithError: true, retries: 3 };
  obj = { locale: closure_3.locale };
  const result = obj.httpGetWithCountryCodeQuery(obj);
  return result.then((result) => {
    if (null != result.body) {
      const tenant_metadata = result.body.tenant_metadata;
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
      callback(dependencyMap[5]);
      const obj = { type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS", guildId: null, skuId: null, instructions: null };
      obj[1] = closure_0;
      obj[2] = callback;
      obj[3] = pc;
      obj.dispatch(obj);
    }
  });
};
export const acceptGameServerToS = function acceptGameServerToS(arg0, arg1) {
  if (arg0) {
    let obj = expandEventPropertiesDefault;
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
  dispatcherDefault.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
};
export const updateGameServerRegionPingState = function updateGameServerRegionPingState(pingUrl, state) {
  const obj = { type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl, state };
  obj.dispatch(obj);
};
export const enableGameServerForGuild = function enableGameServerForGuild(arg0, arg1, game_server_name, game_server_region) {
  const HTTP = sendRequest.HTTP;
  { url: closure_8.GUILD_POWERUP_TOGGLE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, game_server_region };
  return HTTP.post(obj);
};
export const updateGameServerForGuild = function updateGameServerForGuild(arg0, arg1, sku_id, game_server_name) {
  const HTTP = sendRequest.HTTP;
  { url: closure_8.GUILD_POWERUP_UPDATE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, sku_id };
  return HTTP.patch(obj);
};
export const disableGameServerForGuild = function disableGameServerForGuild(arg0, arg1, entitlement_id) {
  const HTTP = sendRequest.HTTP;
  { url: closure_8.GUILD_POWERUP_TOGGLE(arg0, arg1), query: obj, rejectWithError: true, oldFormErrors: true };
  obj = { entitlement_id };
  return HTTP.del(obj);
};
export const fetchGameServerRegions = function fetchGameServerRegions(arg0) {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: closure_8.GAME_SERVER_REGIONS(arg0), rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((result) => {
    callback(709);
    const obj = { type: "GAME_SERVER_FETCH_REGIONS_SUCCESS", regions: null };
    const body = result.body;
    const mapped = body.map(callback(11656));
    obj[1] = mapped.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    obj.dispatch(obj);
  });
};
export const fetchMyGameServerRegions = function fetchMyGameServerRegions() {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: closure_8.GAME_SERVER_MY_REGIONS, rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((result) => {
    callback(709);
    const obj = { type: "GAME_SERVER_FETCH_REGIONS_SUCCESS", regions: null, creationDisabled: null };
    const regions = result.body.regions;
    const mapped = regions.map(callback(11656));
    obj[1] = mapped.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    obj[2] = true === result.body.creation_disabled;
    obj.dispatch(obj);
  });
};
export const fetchMyGameServers = function fetchMyGameServers() {
  const HTTP = sendRequest.HTTP;
  const value = HTTP.get({ url: closure_8.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((result) => {
    const body = result.body;
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
  const found = gameServers.find((item, index) => item.subscription_id === closure_0);
  if (null != found) {
    const obj = {};
    const merged = Object.assign(found);
    obj.status = _require(11654).GameServerStatus.STARTING;
    obj[2] = obj;
    obj.dispatch(obj);
  }
};
export const updateMyGameServerName = function updateMyGameServerName(arg0, name) {
  const _require = arg0;
  const gameServers = store.getGameServers();
  const found = gameServers.find((item, index) => item.subscription_id === closure_0);
  if (null == found) {
    let resolved = Promise.resolve();
  } else {
    const obj = {};
    const merged = Object.assign(found);
    obj.name = name;
    obj[2] = obj;
    obj.dispatch(obj);
    let HTTP = _require(530).HTTP;
    obj1 = { url: null, body: null, rejectWithError: true };
    obj1[0] = closure_8.GAME_SERVER_ME(found.id);
    const obj2 = { name: null };
    obj2[0] = name;
    obj1[1] = obj2;
    const patchResult = HTTP.patch(obj1);
    resolved = HTTP.patch(obj1).then((result) => {
      const HTTP = callback(530).HTTP;
      const value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value.then((result) => {
        const body = result.body;
        let obj = callback(table[5]);
        let game_servers = body.game_servers;
        if (game_servers == null) {
          game_servers = [];
        }
        obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
        obj.dispatch(obj);
      }).catch((error) => {

      });
    }).catch((error) => {
      const HTTP = callback(530).HTTP;
      const value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value.then((result) => {
        const body = result.body;
        let obj = callback(table[5]);
        let game_servers = body.game_servers;
        if (game_servers == null) {
          game_servers = [];
        }
        obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
        obj.dispatch(obj);
      }).catch((error) => {

      });
      throw error;
    });
    const nextPromise = HTTP.patch(obj1).then((result) => {
      const HTTP = callback(530).HTTP;
      const value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value.then((result) => {
        const body = result.body;
        let obj = callback(table[5]);
        let game_servers = body.game_servers;
        if (game_servers == null) {
          game_servers = [];
        }
        obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
        obj.dispatch(obj);
      }).catch((error) => {

      });
    });
  }
  return resolved;
};
export const wakeMyGameServer = function wakeMyGameServer(arg0) {
  const _require = arg0;
  const gameServers = store.getGameServers();
  const found = gameServers.find((item, index) => item.id === closure_0);
  if (null != found) {
    let obj = {};
    let merged = Object.assign(found);
    obj.status = _require(11654).GameServerStatus.STARTING;
    obj[2] = obj;
    obj.dispatch(obj);
  }
  let HTTP = _require(530).HTTP;
  obj1 = { url: closure_8.GAME_SERVER_ME_WAKE(arg0), rejectWithError: true };
  const postResult = HTTP.post({ url: closure_8.GAME_SERVER_ME_WAKE(arg0), rejectWithError: true });
  return HTTP.post({ url: closure_8.GAME_SERVER_ME_WAKE(arg0), rejectWithError: true }).then((result) => {
    const body = result.body;
    let obj = callback2(709);
    let tmp3 = body;
    if (body.status === callback(11654).GameServerStatus.SLEEPING) {
      obj = {};
      const merged = Object.assign(body);
      obj.status = callback(11654).GameServerStatus.STARTING;
      tmp3 = obj;
    }
    obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: "Force Native Crash" };
    obj[2] = tmp3;
    obj.dispatch(obj);
  }).catch((error) => {
    const HTTP = callback(530).HTTP;
    const value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
    value.then((result) => {
      const body = result.body;
      let obj = callback(table[5]);
      let game_servers = body.game_servers;
      if (game_servers == null) {
        game_servers = [];
      }
      obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
      obj.dispatch(obj);
    }).catch((error) => {

    });
    throw error;
  });
};
export const wakeGameServer = function wakeGameServer(arg0, arg1) {
  const _require = arg0;
  const HTTP = _require(530).HTTP;
  let obj = { url: closure_8.GAME_SERVER_WAKE(arg0, arg1), rejectWithError: true };
  return HTTP.post({ url: closure_8.GAME_SERVER_WAKE(arg0, arg1), rejectWithError: true }).then((result) => {
    const obj = { type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId: closure_0, instance: gameServerResponseToInstanceDefault(result.body) };
    obj.dispatch(obj);
  });
};