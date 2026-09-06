// discord_app/modules/game_server/GameServerActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import gameServerResponseToInstanceDefault from "utils/gameServerResponseToInstance.tsx";
import StoreUtils from "../../utils/StoreUtils.tsx";
import GameServerMocks from "mocks/GameServerMocks.tsx";
import GameServerStatus from "../../../discord_common/js/shared/shared-constants/GameServerStatus.tsx";
import regionResponseToRegionDefault from "utils/regionResponseToRegion.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import OwnedGameServersStore from "OwnedGameServersStore.tsx";

require = fn;
const GAME_SERVER_COLLECTION_ID = fn(4451).GAME_SERVER_COLLECTION_ID;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_server/GameServerActionCreators.tsx");

export const fetchGameServerCatalog = function fetchGameServerCatalog(guild_id) {
  _require = guild_id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId, catalog: null };
      const prop = GameServerMocks.GAME_SERVER_GAME_MOCKS;
      obj.catalog = prop.reduce((acc, id) => {
        acc[id.id] = id;
        return acc;
      }, {});
      obj.dispatch(obj);
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
    const request = {
      url: closure_8.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID),
      query: null,
      oldFormErrors: true,
      rejectWithError: null,
      retries: 2,
    };
    let obj = {
      locale: LocaleStore.locale,
      guild_id,
      include_unpublished_products: flag2,
      include_unpublished_collection: flag2,
    };
    request.query = obj;
    const obj2 = require("StoreUtils");
    request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
    let result = obj2.httpGetWithCountryCodeQuery(request);
    return result.then((body) => {
      const products = body.body.products;
      const reduced = products.reduce((acc, item) => {
        const result = guildId(closure_1_2[9]).productToGameServerGame(item);
        acc[result.id] = result;
        return acc;
      }, {});
      const obj = { type: "GAME_SERVER_FETCH_CATALOG_SUCCESS", guildId, catalog: reduced };
      obj.dispatch(obj);
    });
  }
};
export const fetchGameServerGlobalCatalog = function fetchGameServerGlobalCatalog() {
  const currentUser = UserStore.getCurrentUser();
  let flag;
  if (currentUser != null) {
    flag = currentUser.isStaff();
  }
  if (flag == null) {
    flag = false;
  }
  const request = {
    url: React6.STOREFRONT_COLLECTION_WITH_PRODUCTS(GAME_SERVER_COLLECTION_ID),
    query: { locale: LocaleStore.locale, include_unpublished_products: flag, include_unpublished_collection: flag },
    oldFormErrors: true,
    rejectWithError: null,
    retries: 2,
  };
  const obj = { locale: LocaleStore.locale, include_unpublished_products: flag, include_unpublished_collection: flag };
  const obj2 = StoreUtils;
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  let result = obj2.httpGetWithCountryCodeQuery(request);
  return result.then((body) => {
    const products = body.body.products;
    const reduced = products.reduce((acc, item) => {
      const result = closure_1_0(closure_1_2[9]).productToGameServerGame(item);
      acc[result.id] = result;
      return acc;
    }, {});
    DispatcherDefault.dispatch({ type: "GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS", catalog: reduced });
  });
};
export const fetchGameServerInstances = function fetchGameServerInstances(guildId, arg1, signal) {
  _require = guildId;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (flag) {
    const _setTimeout = setTimeout;
    const timerId = setTimeout(() => {
      const obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId, instances: null };
      const prop = GameServerMocks.GAME_SERVER_INSTANCE_MOCKS;
      obj.instances = prop.reduce((acc, id) => {
        acc[id.id] = id;
        return acc;
      }, {});
      obj.dispatch(obj);
    }, 5000);
    let resolved = Promise.resolve();
  } else {
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_8.GAME_SERVERS(guildId), rejectWithError: true, retries: 2, signal };
    value = HTTP.get(obj);
    resolved = value.then((body) => {
      if (null != body.body) {
        body = body.body;
        const reduced = body.reduce((acc, id) => {
          acc[id.id] = closure_1_1(closure_1_2[10])(id);
          return acc;
        }, {});
        const obj = { type: "GAME_SERVER_FETCH_INSTANCES_SUCCESS", guildId, instances: reduced };
        obj.dispatch(obj);
      }
    });
  }
  return resolved;
};
export const fetchGameServerInstructions = function fetchGameServerInstructions(guildId, skuId) {
  _require = guildId;
  require("StoreUtils");
  const request = {
    url: closure_8.STOREFRONT_PRODUCT_BY_SKU_ID(skuId),
    query: null,
    rejectWithError: true,
    retries: 3,
  };
  let obj = { locale: LocaleStore.locale };
  request.query = obj;
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
      const obj = { type: "GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS", guildId, skuId, instructions: pc };
      obj.dispatch(obj);
    }
  });
};
export const acceptGameServerToS = function acceptGameServerToS(arg0, provider) {
  if (arg0) {
    let obj = AnalyticsUtilsDefault;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    obj = { user_id: id, provider };
    obj.track(constants.GAME_SERVER_HOSTING_THIRD_PARTY_CONSENT_ACCEPTED, obj);
  }
};
export const resetGameServerRegionState = function resetGameServerRegionState() {
  DispatcherDefault.dispatch({ type: "GAME_SERVER_REGION_PING_STATE_RESET" });
};
export const updateGameServerRegionPingState = function updateGameServerRegionPingState(pingUrl, state) {
  const obj = { type: "GAME_SERVER_REGION_PING_STATE_UPDATE", pingUrl, state };
  obj.dispatch(obj);
};
export const enableGameServerForGuild = function enableGameServerForGuild(
  arg0,
  arg1,
  game_server_name,
  game_server_region,
) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React6.GUILD_POWERUP_TOGGLE(arg0, arg1),
    body: { game_server_name, game_server_region },
    rejectWithError: true,
    oldFormErrors: true,
  };
  return HTTP.post(request);
};
export const updateGameServerForGuild = function updateGameServerForGuild(arg0, arg1, sku_id, game_server_name) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React6.GUILD_POWERUP_UPDATE(arg0, arg1),
    body: { game_server_name, sku_id },
    rejectWithError: true,
    oldFormErrors: true,
  };
  return HTTP.patch(request);
};
export const disableGameServerForGuild = function disableGameServerForGuild(arg0, arg1, entitlement_id) {
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React6.GUILD_POWERUP_TOGGLE(arg0, arg1),
    query: { entitlement_id },
    rejectWithError: true,
    oldFormErrors: true,
  };
  return HTTP.del(request);
};
export const fetchGameServerRegions = function fetchGameServerRegions(arg0) {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: React6.GAME_SERVER_REGIONS(arg0), rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((body) => {
    const obj = { type: "GAME_SERVER_FETCH_REGIONS_SUCCESS", regions: null };
    body = body.body;
    const mapped = body.map(regionResponseToRegionDefault);
    obj.regions = mapped.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    obj.dispatch(obj);
  });
};
export const fetchMyGameServerRegions = function fetchMyGameServerRegions() {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: React6.GAME_SERVER_MY_REGIONS, rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((body) => {
    const obj = { type: "GAME_SERVER_FETCH_REGIONS_SUCCESS", regions: null, creationDisabled: null };
    const regions = body.body.regions;
    const mapped = regions.map(regionResponseToRegionDefault);
    obj.regions = mapped.sort((name, name2) => {
      name = name.name;
      return name.localeCompare(name2.name);
    });
    obj.creationDisabled = true === body.body.creation_disabled;
    obj.dispatch(obj);
  });
};
export const fetchMyGameServers = function fetchMyGameServers() {
  const HTTP = HTTPUtils.HTTP;
  value = HTTP.get({ url: React6.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
  return value.then((body) => {
    body = body.body;
    let obj = closure_1_1(dependencyMap[5]);
    let game_servers = body.game_servers;
    if (game_servers == null) {
      game_servers = [];
    }
    obj = {
      type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS",
      gameServers: game_servers,
      maxServers: body.max_game_servers,
    };
    obj.dispatch(obj);
  });
};
export const optimisticallyMarkGameServerResizing = function optimisticallyMarkGameServerResizing(arg0) {
  closure_0 = arg0;
  const gameServers = OwnedGameServersStore.getGameServers();
  const found = gameServers.find((subscription_id) => subscription_id.subscription_id === closure_0);
  if (null != found) {
    let obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: "LOCAL_PAYMENT_NOT_ENABLED" };
    obj = {};
    const merged = Object.assign(found);
    obj.status = GameServerStatus.GameServerStatus.STARTING;
    obj.gameServer = obj;
    obj.dispatch(obj);
  }
};
export const updateMyGameServerName = function updateMyGameServerName(arg0, name) {
  _require = arg0;
  const gameServers = OwnedGameServersStore.getGameServers();
  const found = gameServers.find((subscription_id) => subscription_id.subscription_id === closure_0);
  if (null == found) {
    let resolved = Promise.resolve();
  } else {
    let obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: "LOCAL_PAYMENT_NOT_ENABLED" };
    obj = {};
    const merged = Object.assign(found);
    obj.name = name;
    obj.gameServer = obj;
    obj.dispatch(obj);
    let HTTP = require("HTTPUtils").HTTP;
    const request = { url: constants.GAME_SERVER_ME(found.id), body: null, rejectWithError: true };
    const obj1 = { name };
    request.body = obj1;
    const patchResult = HTTP.patch(request);
    resolved = HTTP.patch(request)
      .then(() => {
        const HTTP = closure_0(1272).HTTP;
        value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
        value
          .then((body) => {
            body = body.body;
            let obj = closure_1_1(dependencyMap[5]);
            let game_servers = body.game_servers;
            if (game_servers == null) {
              game_servers = [];
            }
            obj = {
              type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS",
              gameServers: game_servers,
              maxServers: body.max_game_servers,
            };
            obj.dispatch(obj);
          })
          .catch(() => {});
      })
      .catch((error) => {
        const HTTP = closure_0(1272).HTTP;
        value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
        value
          .then((body) => {
            body = body.body;
            let obj = closure_1_1(dependencyMap[5]);
            let game_servers = body.game_servers;
            if (game_servers == null) {
              game_servers = [];
            }
            obj = {
              type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS",
              gameServers: game_servers,
              maxServers: body.max_game_servers,
            };
            obj.dispatch(obj);
          })
          .catch(() => {});
        throw error;
      });
    const nextPromise = HTTP.patch(request).then(() => {
      const HTTP = closure_0(1272).HTTP;
      value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value
        .then((body) => {
          body = body.body;
          let obj = closure_1_1(dependencyMap[5]);
          let game_servers = body.game_servers;
          if (game_servers == null) {
            game_servers = [];
          }
          obj = {
            type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS",
            gameServers: game_servers,
            maxServers: body.max_game_servers,
          };
          obj.dispatch(obj);
        })
        .catch(() => {});
    });
  }
  return resolved;
};
export const wakeMyGameServer = function wakeMyGameServer(arg0) {
  _require = arg0;
  const gameServers = OwnedGameServersStore.getGameServers();
  const found = gameServers.find((id) => id.id === closure_0);
  if (null != found) {
    let obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: "LOCAL_PAYMENT_NOT_ENABLED" };
    obj = {};
    let merged = Object.assign(found);
    obj.status = require("GameServerStatus").GameServerStatus.STARTING;
    obj.gameServer = obj;
    obj.dispatch(obj);
  }
  let HTTP = require("HTTPUtils").HTTP;
  const obj1 = { url: constants.GAME_SERVER_ME_WAKE(arg0), rejectWithError: true };
  const postResult = HTTP.post({ url: constants.GAME_SERVER_ME_WAKE(arg0), rejectWithError: true });
  return HTTP.post({ url: constants.GAME_SERVER_ME_WAKE(arg0), rejectWithError: true })
    .then((body) => {
      body = body.body;
      let obj = DispatcherDefault;
      let tmp3 = body;
      if (body.status === closure_0(12485).GameServerStatus.SLEEPING) {
        obj = {};
        const merged = Object.assign(body);
        obj.status = closure_0(12485).GameServerStatus.STARTING;
        tmp3 = obj;
      }
      obj = { type: "GAME_SERVER_UPDATE", guildId: "Array", gameServer: tmp3 };
      obj.dispatch(obj);
    })
    .catch((error) => {
      const HTTP = closure_0(1272).HTTP;
      value = HTTP.get({ url: constants.GAME_SERVERS_ME, rejectWithError: true, oldFormErrors: true, retries: 3 });
      value
        .then((body) => {
          body = body.body;
          let obj = closure_1_1(dependencyMap[5]);
          let game_servers = body.game_servers;
          if (game_servers == null) {
            game_servers = [];
          }
          obj = {
            type: "GAME_SERVER_FETCH_MY_SERVERS_SUCCESS",
            gameServers: game_servers,
            maxServers: body.max_game_servers,
          };
          obj.dispatch(obj);
        })
        .catch(() => {});
      throw error;
    });
};
export const wakeGameServer = function wakeGameServer(guildId, arg1) {
  _require = guildId;
  const HTTP = require("HTTPUtils").HTTP;
  let obj = { url: closure_8.GAME_SERVER_WAKE(guildId, arg1), rejectWithError: true };
  return HTTP.post({ url: closure_8.GAME_SERVER_WAKE(guildId, arg1), rejectWithError: true }).then((body) => {
    const obj = {
      type: "GAME_SERVER_UPDATE_INSTANCE_SUCCESS",
      guildId,
      instance: gameServerResponseToInstanceDefault(body.body),
    };
    obj.dispatch(obj);
  });
};
