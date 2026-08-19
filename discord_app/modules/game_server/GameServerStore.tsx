// discord_app/modules/game_server/GameServerStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import gameServerResponseToInstanceDefault from "utils/gameServerResponseToInstance.tsx";

function handleGameServerInstanceCreated(arg0) {
  ({ guildId, gameServer } = arg0);
  if (null != guildId) {
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp3);
    obj1 = {};
    const merged2 = Object.assign(tmp3.instances);
    obj1[gameServer.id] = gameServerResponseToInstanceDefault(gameServer);
    obj.instances = obj1;
    obj[guildId] = obj;
  }
}
let c2 = 86400000;
let closure_3 = {};
let closure_4 = { catalog: {}, hasFetchedCatalog: false, catalogLastFetchedAt: "r" };
const PersistedStore = initializeDefault.PersistedStore;
class GameServerStore extends PersistedStore {
}
const prototype = GameServerStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_3 = arg0;
  }
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getStateForGuild"] = function getStateForGuild(arg0) {
  let tmp;
  if (null != arg0) {
    tmp = dependencyMap[arg0];
  }
  return tmp;
};
prototype["getGlobalCatalogState"] = function getGlobalCatalogState() {
  return closure_4;
};
prototype["getGlobalCatalogGame"] = function getGlobalCatalogGame(arg0) {
  closure_0 = arg0;
  const values = Object.values(closure_4.catalog);
  return values.find((item, index) => item.gameId === closure_0);
};
prototype["getLowestGameCostForGuild"] = function getLowestGameCostForGuild(closure_0) {
  if (null == closure_0) {
    return null;
  } else {
    let catalog;
    if (dependencyMap[closure_0] != null) {
      catalog = tmp7.catalog;
    }
    if (catalog == null) {
      catalog = {};
    }
    const values = Object.values(catalog);
    let applyResult = null;
    if (0 !== values.length) {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(values.map((item, index) => item.baseCost), 0);
      const _Math2 = Math;
      applyResult = HermesBuiltin.apply(items, Math);
    }
    return applyResult;
  }
};
prototype["hasFetchedCatalog"] = function hasFetchedCatalog(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let hasFetchedCatalog;
    if (dependencyMap[arg0] != null) {
      hasFetchedCatalog = tmp3.hasFetchedCatalog;
    }
    tmp = true === hasFetchedCatalog;
  }
  return tmp;
};
prototype["hasFetchedInstances"] = function hasFetchedInstances(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let hasFetchedInstances;
    if (dependencyMap[arg0] != null) {
      hasFetchedInstances = tmp3.hasFetchedInstances;
    }
    tmp = true === hasFetchedInstances;
  }
  return tmp;
};
prototype["shouldFetchCatalogForGuild"] = function shouldFetchCatalogForGuild(arg0) {
  let catalogLastFetchedAt;
  if (dependencyMap[arg0] != null) {
    catalogLastFetchedAt = tmp.catalogLastFetchedAt;
  }
  let tmp3 = null == catalogLastFetchedAt;
  if (!tmp3) {
    const _Date = Date;
    const sum = catalogLastFetchedAt + c2;
    tmp3 = sum < Date.now();
  }
  return tmp3;
};
prototype["shouldFetchInstancesForGuild"] = function shouldFetchInstancesForGuild(arg0) {
  let prop;
  if (dependencyMap[arg0] != null) {
    prop = tmp.instancesLastFetchedAt;
  }
  let tmp3 = null == prop;
  if (!tmp3) {
    const _Date = Date;
    const sum = prop + 300000;
    tmp3 = sum < Date.now();
  }
  return tmp3;
};
prototype["shouldFetchGlobalCatalog"] = function shouldFetchGlobalCatalog() {
  const catalogLastFetchedAt = closure_4.catalogLastFetchedAt;
  let tmp = null == catalogLastFetchedAt;
  if (!tmp) {
    const _Date = Date;
    const sum = catalogLastFetchedAt + c2;
    tmp = sum < Date.now();
  }
  return tmp;
};
GameServerStore.displayName = "GameServerStore";
GameServerStore.persistKey = "GameServerStore";
const gameServerStore = new GameServerStore(dispatcherDefault, {
  LOGOUT: function handleReset() {
    closure_3 = {};
    closure_4 = { catalog: {}, hasFetchedCatalog: false, catalogLastFetchedAt: "r" };
  },
  GAME_SERVER_FETCH_CATALOG_SUCCESS: function handleFetchCatalogSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(obj);
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    obj.catalog = guildId.catalog;
    obj.hasFetchedCatalog = true;
    obj.catalogLastFetchedAt = Date.now();
    obj[guildId] = obj;
  },
  GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: function handleFetchGlobalCatalogSuccess(catalog) {
    const obj = { catalog: catalog.catalog, hasFetchedCatalog: true, catalogLastFetchedAt: Date.now() };
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleFetchInstancesSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    const merged = Object.assign(obj);
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    obj.instances = guildId.instances;
    obj.hasFetchedInstances = true;
    obj.instancesLastFetchedAt = Date.now();
    obj[guildId] = obj;
  },
  GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: function handleFetchProductSuccess(guildId) {
    guildId = guildId.guildId;
    let obj = {};
    ({ skuId, instructions } = guildId);
    const merged = Object.assign(obj);
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    if (null == obj[guildId]) {
      obj1 = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj1[0] = {};
      obj1[1] = {};
      obj1[2] = {};
      obj1[3] = {};
      obj[guildId] = obj1;
    }
    const obj2 = {};
    const merged2 = Object.assign(obj[guildId].instructions);
    obj2[skuId] = instructions;
    obj.instructions = obj2;
    obj[guildId] = obj;
  },
  GAME_SERVER_UPDATE_INSTANCE_SUCCESS: function handleUpdateInstanceSuccess(arg0) {
    ({ guildId, instance } = arg0);
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp2);
    obj1 = {};
    const merged2 = Object.assign(tmp2.instances);
    obj1[instance.id] = instance;
    obj.instances = obj1;
    obj[guildId] = obj;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleFetchBoostEntitlementsSuccess(arg0) {
    ({ guildId, unlockedGameServers } = arg0);
    const values = Object.values(unlockedGameServers);
    let obj = {};
    const reduced = values.reduce((acc, item, index) => {
      let num = callback(table[0])(item);
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    const merged = Object.assign(obj);
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    obj = {};
    const merged1 = Object.assign(obj[guildId]);
    obj.entitlements = unlockedGameServers;
    obj.appliedBoosts = reduced;
    obj[guildId] = obj;
  },
  GAME_SERVER_CREATE: handleGameServerInstanceCreated,
  GAME_SERVER_UPDATE: handleGameServerInstanceCreated,
  GAME_SERVER_DELETE: function handleGameServerInstanceDeleted(arg0) {
    ({ guildId, gameServerId } = arg0);
    if (null != guildId) {
      if (null == obj[guildId]) {
        obj = { catalog: null, instances: null, instructions: null, entitlements: null };
        obj[0] = {};
        obj[1] = {};
        obj[2] = {};
        obj[3] = {};
        obj[guildId] = obj;
      }
      const instances = tmp6.instances;
      delete tmp[tmp2];
      obj = {};
      const merged = Object.assign(obj);
      obj = {};
      const merged1 = Object.assign(tmp6);
      obj[guildId] = obj;
    }
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleGameServerEntitlementCreated(arg0) {
    ({ guildId, entitlements } = arg0);
    closure_0 = undefined;
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    closure_0 = tmp2;
    const found = entitlements.filter((item, index) => {
      const sku = item.sku;
      let game_server;
      if (sku != null) {
        const tenant_metadata = sku.tenant_metadata;
        if (tenant_metadata != null) {
          const guild_monetization = tenant_metadata.guild_monetization;
          if (guild_monetization != null) {
            game_server = guild_monetization.game_server;
          }
        }
      }
      return null != game_server;
    });
    const item = found.forEach((item, index) => {
      entitlements.entitlements[item.id] = item;
    });
    const values = Object.values(tmp2.entitlements);
    obj = {};
    const reduced = values.reduce((acc, item, index) => {
      let num = callback(table[0])(item);
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp2);
    obj.appliedBoosts = reduced;
    obj[guildId] = obj;
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleGameServerEntitlementDeleted(arg0) {
    ({ guildId, entitlements } = arg0);
    closure_0 = undefined;
    if (null == obj[guildId]) {
      obj = { catalog: null, instances: null, instructions: null, entitlements: null };
      obj[0] = {};
      obj[1] = {};
      obj[2] = {};
      obj[3] = {};
      obj[guildId] = obj;
    }
    closure_0 = tmp2;
    const item = entitlements.forEach((item, index) => {
      delete tmp2[tmp];
    });
    const values = Object.values(tmp2.entitlements);
    obj = {};
    const reduced = values.reduce((acc, item, index) => {
      let num = callback(table[0])(item);
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp2);
    obj.appliedBoosts = reduced;
    obj[guildId] = obj;
  }
});
const result = require("obj132").fileFinishedImporting("modules/game_server/GameServerStore.tsx");

export default gameServerStore;