// === Module 12141: GameServerActionCreators ===

// Module 12141 (GameServerActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import GameServerConstants from "GameServerConstants" /* 4769 */;
import StoreUtils from "StoreUtils" /* 5322 */;
import gameServerResponseToInstanceDefault from "gameServerResponseToInstance" /* 7674 */;
import GameServerMocks from "GameServerMocks" /* 12143 */;
import GameServerStatus from "GameServerStatus" /* 12144 */;
import regionResponseToRegionDefault from "regionResponseToRegion" /* 12146 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import UserStore from "UserStore" /* 1377 */;
import OwnedGameServersStore from "OwnedGameServersStore" /* 12142 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
const f110742 = (body) => {
  body = body.body;
  let game_servers = body.game_servers;
  const dispatch = closure_1_1(closure_1_2[5]).dispatch;
  closure_1_1(closure_1_2[5]);
  if (game_servers == null) {
    game_servers = [];
  }
  const obj = { type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS", gameServers: game_servers, maxServers: body.max_game_servers };
  dispatch(obj);
};
const GAME_SERVER_COLLECTION_ID = GameServerConstants.GAME_SERVER_COLLECTION_ID;
({ AnalyticEvents: metroImportDefault, Endpoints: metroImportAll } = Constants);
let result = size.fileFinishedImporting("modules/game_server/GameServerActionCreators.tsx");

export const fetchGameServerCatalog = function fetchGameServerCatalog(guild_id) {
  let guildId;
  let obj;
  let obj4;
  _require = guild_id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let prop;
      const obj = {
        type: "GAME_SERVER_FETCH_CATALOG_SUCCESS",
        guildId,
        catalog: prop.reduce((acc, id) => {
          acc[id.id] = id;
          return acc;
        }, {})
      };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      prop = GameServerMocks.GAME_SERVER_GAME_MOCKS;
      dispatch(obj);
    }, 5000);
  } else {
    const currentUser = UserStore.getCurrentUser();
    let flag2;
    if (currentUser != null) {
      flag2 = currentUser.isStaff();
    }
    if (flag2 == null) {
      flag2 = false;
    }
    const request = { url: closure_8.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID), query: obj, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError(), retries: 2 };
    const httpGetWithCountryCodeQuery = require("StoreUtils").httpGetWithCountryCodeQuery;
    require("StoreUtils");
    obj = { locale: LocaleStore.locale, guild_id, include_unpublished_products: flag2, include_unpublished_collection: flag2 };
    obj4 = require("HTTPUtils");
    let result = httpGetWithCountryCodeQuery(request);
    return result.then((body) => {
      const products = body.body.products;
      const reduced = products.reduce((acc, item) => {
        const obj = guildId(closure_1_2[9]);
        const result = obj.productToGameServerGame(item);
        acc[result.id] = result;
        return acc;
      }, {});
      let obj = DispatcherDefault;
      const obj2 = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId, catalog: reduced };
      obj.dispatch(obj2);
    });
  }
};
export const fetchGameServerGlobalCatalog = function fetchGameServerGlobalCatalog() {
  let obj;
  let obj4;
  const currentUser = UserStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.isStaff();
  }
  if (flag == null) {
    flag = false;
  }
  const tmp = StoreUtils;
  const request = { url: metroImportAll.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID), query: obj, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError(), retries: 2 };
  const httpGetWithCountryCodeQuery = tmp.httpGetWithCountryCodeQuery;
  obj = { locale: LocaleStore.locale, include_unpublished_products: flag, include_unpublished_collection: flag };
  obj4 = HTTPUtils;
  let result = httpGetWithCountryCodeQuery(request);
  return result.then((body) => {
    const products = body.body.products;
    const reduced = products.reduce((acc, item) => {
      const obj = closure_1_0(closure_1_2[9]);
      const result = obj.productToGameServerGame(item);
      acc[result.id] = result;
      return acc;
    }, {});
    let obj = DispatcherDefault;
    obj.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: reduced });
  });
};
export const fetchGameServerInstances = function fetchGameServerInstances(guildId, arg1) {
  let resolved;
  _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      let prop;
      const obj = {
        type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS",
        guildId,
        instances: prop.reduce((acc, id) => {
          acc[id.id] = id;
          return acc;
        }, {})
      };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      prop = GameServerMocks.GAME_SERVER_INSTANCE_MOCKS;
      dispatch(obj);
    }, 5000);
    resolved = Promise.resolve();
  } else {
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_8.GAME_SERVERS(guildId), rejectWithError: true, retries: 2, signal };
    const get = HTTP.get;
    const value = get(obj);
    resolved = value.then((body) => {
      if (null != body.body) {
        body = body.body;
        const reduced = body.reduce((acc, id) => {
          acc[id.id] = closure_1_1(closure_1_2[10])(id);
          return acc;
        }, {});
        const obj2 = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId, instances: reduced };
        const obj = DispatcherDefault;
        obj.dispatch(obj2);
      }
    });
  }
  return resolved;
};
export const fetchGameServerInstructions = function fetchGameServerInstructions(guildId, skuId) {
  let obj2;
  _require = guildId;
  let obj = require("StoreUtils");
  const request = { url: closure_8.STOREFRONT_PRODUCT_BY_SKU_ID(skuId), query: obj2, rejectWithError: true, retries: 3 };
  obj2 = { locale: LocaleStore.locale };
  const result = obj.httpGetWithCountryCodeQuery(request);
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
      const obj2 = { type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS", guildId, skuId, instructions: pc };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
  });
};
export const acceptGameServerToS = function acceptGameServerToS(arg0, provider) {
  const tmp = arg0;
  if (tmp) {
    const track = AnalyticsUtilsDefault.track;
    const GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED = metroImportDefault.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED;
    AnalyticsUtilsDefault;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    const obj = { user_id: id, provider };
    track(GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, obj);
  }
};
export const resetGameServerRegionState = function resetGameServerRegionState() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
};
export const updateGameServerRegionPingState = function updateGameServerRegionPingState(pingUrl, state) {
  const obj = DispatcherDefault;
  const obj2 = { type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl, state };
  obj.dispatch(obj2);
};
export const enableGameServerForGuild = function enableGameServerForGuild(arg0, arg1, game_server_name, game_server_region) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: metroImportAll.GUILD_POWERUP_TOGGLE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, game_server_region };
  return HTTP.post(request);
};
export const updateGameServerForGuild = function updateGameServerForGuild(arg0, arg1, sku_id, game_server_name) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: metroImportAll.GUILD_POWERUP_UPDATE(arg0, arg1), body: obj, rejectWithError: true, oldFormErrors: true };
  obj = { game_server_name, sku_id };
  return HTTP.patch(request);
};
export const disableGameServerForGuild = function disableGameServerForGuild(arg0, arg1, entitlement_id) {
  let obj;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: metroImportAll.GUILD_POWERUP_TOGGLE(arg0, arg1), query: obj, rejectWithError: true, oldFormErrors: true };
  obj = { entitlement_id };
  return HTTP.del(request);
};
export const fetchGameServerRegions = function fetchGameServerRegions(arg0) {
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: metroImportAll.GAME_SERVER_REGIONS(arg0), rejectWithError: true, oldFormErrors: true, retries: 3 };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let mapped;
    body = body.body;
    const obj = {
      type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
      regions: mapped.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      })
    };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    mapped = body.map(regionResponseToRegionDefault);
    dispatch(obj);
  });
};
export const fetchMyGameServerRegions = function fetchMyGameServerRegions() {
  const HTTP = HTTPUtils.HTTP;
  let obj = { url: metroImportAll.GAME_SERVER_MY_REGIONS, rejectWithError: true, oldFormErrors: true, retries: 3 };
  const value = HTTP.get(obj);
  return value.then((body) => {
    let mapped;
    const regions = body.body.regions;
    const obj = {
      type: "GAME_SERVER_FETCH_REGIONS_SUCCESS",
      regions: mapped.sort((name, name2) => {
        name = name.name;
        return name.localeCompare(name2.name);
      }),
      creationDisabled: true === body.body.creation_disabled
    };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    mapped = regions.map(regionResponseToRegionDefault);
    dispatch(obj);
  });
};
export const fetchMyGameServers = function fetchMyGameServers() {
  const HTTP = HTTPUtils.HTTP;
  const obj = { url: metroImportAll.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 };
  const value = HTTP.get(obj);
  return value.then(f110742);
};
export const optimisticallyMarkGameServerResizing = function optimisticallyMarkGameServerResizing(arg0) {
  let obj2;
  let closure_0 = arg0;
  const gameServers = OwnedGameServersStore.getGameServers();
  const found = gameServers.find((subscription_id) => subscription_id.subscription_id === closure_0);
  if (null != found) {
    const obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: obj2 };
    obj2 = { status: GameServerStatus.GameServerStatus.STARTING };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(found);
    dispatch(obj);
  }
};
export const updateMyGameServerName = function updateMyGameServerName(arg0, name) {
  let closure_0;
  let obj2;
  let obj3;
  let resolved;
  _require = arg0;
  const gameServers = OwnedGameServersStore.getGameServers();
  const found = gameServers.find((subscription_id) => subscription_id.subscription_id === closure_0);
  if (null == found) {
    resolved = Promise.resolve();
  } else {
    let obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: obj2 };
    obj2 = { name };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const merged = Object.assign(found);
    dispatch(obj);
    let HTTP = require("HTTPUtils").HTTP;
    const request = { url: constants.GAME_SERVER_ME(found.id), body: obj3, rejectWithError: true };
    const patch = HTTP.patch;
    obj3 = { name };
    const patchResult = patch(request);
    let nextPromise = patchResult.then(() => {
      const HTTP = closure_0(dependencyMap[8]).HTTP;
      const obj = { url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 };
      const value = HTTP.get(obj);
      const nextPromise = value.then(f110742);
      nextPromise.catch(() => {

      });
    });
    resolved = nextPromise.catch((error) => {
      const HTTP = closure_0(dependencyMap[8]).HTTP;
      const obj = { url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 };
      const value = HTTP.get(obj);
      const nextPromise = value.then(f110742);
      nextPromise.catch(() => {

      });
      throw error;
    });
  }
  return resolved;
};
export const wakeMyGameServer = function wakeMyGameServer(arg0) {
  let closure_0;
  let obj2;
  _require = arg0;
  const gameServers = OwnedGameServersStore.getGameServers();
  const found = gameServers.find((id) => id.id === closure_0);
  if (null != found) {
    let tmp4 = DispatcherDefault;
    let obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: obj2 };
    obj2 = { status: require("GameServerStatus").GameServerStatus.STARTING };
    let dispatch = tmp4.dispatch;
    let merged = Object.assign(found);
    dispatch(obj);
  }
  let HTTP = require("HTTPUtils").HTTP;
  const obj3 = { url: constants.GAME_SERVER_ME_WAKE(arg0), rejectWithError: true };
  const postResult = HTTP.post(obj3);
  let nextPromise = postResult.then((body) => {
    body = body.body;
    const dispatch = DispatcherDefault.dispatch;
    let tmp4 = body;
    DispatcherDefault;
    if (body.status === closure_0(dependencyMap[13]).GameServerStatus.SLEEPING) {
      const obj = { status: closure_0(dependencyMap[13]).GameServerStatus.STARTING };
      const merged = Object.assign(body);
      tmp4 = obj;
    }
    const obj2 = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: tmp4 };
    dispatch(obj2);
  });
  return nextPromise.catch((error) => {
    const HTTP = closure_0(dependencyMap[8]).HTTP;
    let obj = { url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 };
    const value = HTTP.get(obj);
    const nextPromise = value.then(f110742);
    nextPromise.catch(() => {

    });
    throw error;
  });
};
export const wakeGameServer = function wakeGameServer(guildId, arg1) {
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  let obj = { url: closure_8.GAME_SERVER_WAKE(guildId, arg1), rejectWithError: true };
  const postResult = HTTP.post(obj);
  return postResult.then((body) => {
    const obj = DispatcherDefault;
    const obj2 = { type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS", guildId, instance: gameServerResponseToInstanceDefault(body.body) };
    obj.dispatch(obj2);
  });
};