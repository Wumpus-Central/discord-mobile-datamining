// discord_app/modules/game_server/GameServerStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import getPowerupEntitlementPriceDefault from "../premium/powerups/utils/getPowerupEntitlementPrice.tsx";
import gameServerResponseToInstanceDefault from "utils/gameServerResponseToInstance.tsx";
import size from "../../../_runtime/metro/00002__.js";

let sku;

function handleGameServerInstanceCreated(arg0) {
  let gameServer;
  let guildId;
  let obj4;
  ({ guildId, gameServer } = arg0);
  if (null != guildId) {
    if (null == obj2[guildId]) {
      obj = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj;
    }
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = { instances: obj4 };
    const merged1 = Object.assign(tmp3);
    obj4 = {};
    const merged2 = Object.assign(tmp3.instances);
    obj4[gameServer.id] = gameServerResponseToInstanceDefault(gameServer);
    obj2[guildId] = obj3;
  }
}
let c2 = 86400000;
let obj2 = {};
let obj = { catalog: {}, hasFetchedCatalog: false, catalogLastFetchedAt: "r" };
const PersistedStore = get_initializedDefault.PersistedStore;
class GameServerStore extends PersistedStore {
  initialize(arg0) {}
  getState() {
    return obj2;
  }
  getStateForGuild(arg0) {
    let tmp;
    if (null != arg0) {
      tmp = obj2[arg0];
    }
    return tmp;
  }
  getGlobalCatalogState() {
    return obj;
  }
  getGlobalCatalogGame(arg0) {
    let closure_0 = arg0;
    const values = Object.values(obj.catalog);
    return values.find((gameId) => gameId.gameId === closure_0);
  }
  getLowestGameCostForGuild(arg0) {
    if (null == arg0) {
      return null;
    } else {
      let catalog;
      const _Object = Object;
      if (obj2[arg0] != null) {
        catalog = tmp8.catalog;
      }
      if (catalog == null) {
        catalog = {};
      }
      const values2 = values(catalog);
      let applyResult = null;
      if (0 !== values2.length) {
        const _Math = Math;
        const items = [];
        HermesBuiltin.arraySpread(
          items,
          values2.map((baseCost) => baseCost.baseCost),
          0,
        );
        const _Math2 = Math;
        applyResult = HermesBuiltin.apply(min, items, Math);
      }
      return applyResult;
    }
  }
  hasFetchedCatalog(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let hasFetchedCatalog;
      if (obj2[arg0] != null) {
        hasFetchedCatalog = tmp3.hasFetchedCatalog;
      }
      tmp = true === hasFetchedCatalog;
    }
    return tmp;
  }
  hasFetchedInstances(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let hasFetchedInstances;
      if (obj2[arg0] != null) {
        hasFetchedInstances = tmp3.hasFetchedInstances;
      }
      tmp = true === hasFetchedInstances;
    }
    return tmp;
  }
  shouldFetchCatalogForGuild(arg0) {
    let catalogLastFetchedAt;
    if (obj2[arg0] != null) {
      catalogLastFetchedAt = tmp.catalogLastFetchedAt;
    }
    let tmp3 = null == catalogLastFetchedAt;
    if (!tmp3) {
      const _Date = Date;
      const sum = catalogLastFetchedAt + c2;
      tmp3 = sum < Date.now();
    }
    return tmp3;
  }
  shouldFetchInstancesForGuild(arg0) {
    let prop;
    if (obj2[arg0] != null) {
      prop = tmp.instancesLastFetchedAt;
    }
    let tmp3 = null == prop;
    if (!tmp3) {
      const _Date = Date;
      const sum = prop + 300000;
      tmp3 = sum < Date.now();
    }
    return tmp3;
  }
  shouldFetchGlobalCatalog() {
    const catalogLastFetchedAt = obj.catalogLastFetchedAt;
    let tmp = null == catalogLastFetchedAt;
    if (!tmp) {
      const _Date = Date;
      const sum = catalogLastFetchedAt + c2;
      tmp = sum < Date.now();
    }
    return tmp;
  }
}
const prototype = GameServerStore.prototype;
GameServerStore.displayName = "GameServerStore";
GameServerStore.persistKey = "GameServerStore";
obj = {
  LOGOUT: function handleReset() {},
  GAME_SERVER_FETCH_CATALOG_SUCCESS: function handleFetchCatalogSuccess(guildId) {
    guildId = guildId.guildId;
    obj = {};
    const catalog = guildId.catalog;
    const merged = Object.assign(obj2);
    if (null == obj2[guildId]) {
      obj2 = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj2;
    }
    const obj3 = { catalog, hasFetchedCatalog: true, catalogLastFetchedAt: Date.now() };
    const merged1 = Object.assign(obj2[guildId]);
    obj[guildId] = obj3;
    obj2 = obj;
  },
  GAME_SERVER_FETCH_GLOBAL_CATALOG_SUCCESS: function handleFetchGlobalCatalogSuccess(catalog) {
    obj = { catalog: catalog.catalog, hasFetchedCatalog: true, catalogLastFetchedAt: Date.now() };
  },
  GAME_SERVER_FETCH_INSTANCES_SUCCESS: function handleFetchInstancesSuccess(guildId) {
    guildId = guildId.guildId;
    obj = {};
    const instances = guildId.instances;
    const merged = Object.assign(obj2);
    if (null == obj2[guildId]) {
      obj2 = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj2;
    }
    const obj3 = { instances, hasFetchedInstances: true, instancesLastFetchedAt: Date.now() };
    const merged1 = Object.assign(obj2[guildId]);
    obj[guildId] = obj3;
    obj2 = obj;
  },
  GAME_SERVER_FETCH_GAME_INSTRUCTIONS_SUCCESS: function handleFetchProductSuccess(guildId) {
    let instructions;
    let obj5;
    let skuId;
    guildId = guildId.guildId;
    obj = {};
    ({ skuId, instructions } = guildId);
    const merged = Object.assign(obj2);
    if (null == obj2[guildId]) {
      obj2 = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj2;
    }
    const obj3 = { instructions: obj5 };
    const merged1 = Object.assign(obj2[guildId]);
    if (null == obj2[guildId]) {
      const obj4 = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj4;
    }
    obj5 = {};
    const merged2 = Object.assign(obj2[guildId].instructions);
    obj5[skuId] = instructions;
    obj[guildId] = obj3;
    obj2 = obj;
  },
  GAME_SERVER_UPDATE_INSTANCE_SUCCESS: function handleUpdateInstanceSuccess(arg0) {
    let guildId;
    let instance;
    let obj4;
    ({ guildId, instance } = arg0);
    if (null == obj2[guildId]) {
      obj = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj;
    }
    obj2 = {};
    const merged = Object.assign(obj2);
    const obj3 = { instances: obj4 };
    const merged1 = Object.assign(tmp2);
    obj4 = {};
    const merged2 = Object.assign(tmp2.instances);
    obj4[instance.id] = instance;
    obj2[guildId] = obj3;
  },
  GUILD_BOOST_ENTITLEMENTS_FETCH_SUCCESS: function handleFetchBoostEntitlementsSuccess(arg0) {
    let guildId;
    let unlockedGameServers;
    ({ guildId, unlockedGameServers } = arg0);
    const values = Object.values(unlockedGameServers);
    obj = {};
    const reduced = values.reduce((acc, item) => {
      let num = getPowerupEntitlementPriceDefault(item);
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    const merged = Object.assign(obj2);
    if (null == obj2[guildId]) {
      obj2 = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj2;
    }
    const obj3 = { entitlements: unlockedGameServers, appliedBoosts: reduced };
    const merged1 = Object.assign(obj2[guildId]);
    obj[guildId] = obj3;
    obj2 = obj;
  },
  GAME_SERVER_CREATE: handleGameServerInstanceCreated,
  GAME_SERVER_UPDATE: handleGameServerInstanceCreated,
  GAME_SERVER_DELETE: function handleGameServerInstanceDeleted(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      if (null == obj2[guildId]) {
        obj = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
        obj2[guildId] = obj;
      }
      delete obj2[guildId].instances[tmp];
      obj2 = {};
      const merged = Object.assign(obj2);
      const obj3 = {};
      const merged1 = Object.assign(tmp5);
      obj2[guildId] = obj3;
    }
  },
  GUILD_POWERUP_ENTITLEMENTS_CREATE: function handleGameServerEntitlementCreated(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    let closure_0;
    if (null == obj2[guildId]) {
      obj = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj;
    }
    closure_0 = tmp2;
    const found = entitlements.filter((sku) => {
      sku = sku.sku;
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
    const item = found.forEach((id) => {
      entitlements.entitlements[id.id] = id;
    });
    const values = Object.values(tmp2.entitlements);
    obj2 = {};
    const reduced = values.reduce((acc, item) => {
      let num = getPowerupEntitlementPriceDefault(item);
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    const merged = Object.assign(obj2);
    const obj3 = { appliedBoosts: reduced };
    const merged1 = Object.assign(tmp2);
    obj2[guildId] = obj3;
  },
  GUILD_POWERUP_ENTITLEMENTS_DELETE: function handleGameServerEntitlementDeleted(arg0) {
    let entitlements;
    let guildId;
    ({ guildId, entitlements } = arg0);
    let closure_0;
    if (null == obj2[guildId]) {
      obj = { catalog: {}, instances: {}, instructions: {}, entitlements: {} };
      obj2[guildId] = obj;
    }
    closure_0 = tmp2;
    const item = entitlements.forEach((item) => {
      delete closure_0.entitlements[item.id];
    });
    const values = Object.values(tmp2.entitlements);
    obj2 = {};
    const reduced = values.reduce((acc, item) => {
      let num = getPowerupEntitlementPriceDefault(item);
      if (num == null) {
        num = 0;
      }
      return acc + num;
    }, 0);
    const merged = Object.assign(obj2);
    const obj3 = { appliedBoosts: reduced };
    const merged1 = Object.assign(tmp2);
    obj2[guildId] = obj3;
  },
};
const gameServerStore = new GameServerStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/game_server/GameServerStore.tsx");

export default gameServerStore;
