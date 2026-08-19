// discord_app/modules/game_server/OwnedGameServersStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import str11 from "GameServerConstants.tsx";

function handleGameServerUpsert(gameServer) {
  gameServer = undefined;
  if (null == gameServer.guildId) {
    if (-1 === mapped.findIndex((item, index) => item.id === gameServer.id)) {
      const items = [];
      items[HermesBuiltin.arraySpread(mapped, 0)] = gameServer;
      mapped = items;
    } else {
      mapped = mapped.map((item, index) => {
        let tmp2 = item;
        if (item.id === gameServer.id) {
          let tmp4 = gameServer;
          if (null == gameServer.subscription_id) {
            let subscription_id;
            if (item != null) {
              subscription_id = item.subscription_id;
            }
            tmp4 = gameServer;
            if (null != subscription_id) {
              const obj = {};
              const merged = Object.assign(gameServer);
              obj.subscription_id = item.subscription_id;
              tmp4 = obj;
            }
          }
          tmp2 = tmp4;
        }
        return tmp2;
      });
    }
  }
}
const GAME_SERVER_SHOP_MAX_INSTANCES = str11.GAME_SERVER_SHOP_MAX_INSTANCES;
let closure_1 = [];
const Store = initializeDefault.Store;
class OwnedGameServersStore extends Store {
}
const prototype = OwnedGameServersStore.prototype;
prototype["getGameServers"] = function getGameServers() {
  return closure_1;
};
prototype["getMaxServers"] = function getMaxServers() {
  return GAME_SERVER_SHOP_MAX_INSTANCES;
};
OwnedGameServersStore.displayName = "OwnedGameServersStore";
const ownedGameServersStore = new OwnedGameServersStore(dispatcherDefault, {
  LOGOUT: function handleReset() {
    closure_1 = [];
    closure_2 = GAME_SERVER_SHOP_MAX_INSTANCES;
  },
  GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function handleFetchMyServersSuccess(arg0) {
    ({ gameServers, maxServers } = arg0);
    closure_1 = gameServers.map((item, index) => {
      closure_0 = item;
      const found = closure_1.find((item, index) => item.id === item.id);
      let tmp2 = item;
      if (null == item.subscription_id) {
        let subscription_id;
        if (found != null) {
          subscription_id = found.subscription_id;
        }
        tmp2 = item;
        if (null != subscription_id) {
          const obj = {};
          const merged = Object.assign(item);
          obj.subscription_id = found.subscription_id;
          tmp2 = obj;
        }
      }
      return tmp2;
    });
    if (maxServers == null) {
      maxServers = GAME_SERVER_SHOP_MAX_INSTANCES;
    }
  },
  GAME_SERVER_CREATE: handleGameServerUpsert,
  GAME_SERVER_UPDATE: handleGameServerUpsert,
  GAME_SERVER_DELETE: function handleGameServerDeleted(gameServerId) {
    gameServerId = gameServerId.gameServerId;
    if (null == gameServerId.guildId) {
      closure_1 = closure_1.filter((item, index) => item.id !== gameServerId);
    }
  }
});
const result = obj132.fileFinishedImporting("modules/game_server/OwnedGameServersStore.tsx");

export default ownedGameServersStore;