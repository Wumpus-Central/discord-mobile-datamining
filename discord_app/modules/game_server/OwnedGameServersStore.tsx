// discord_app/modules/game_server/OwnedGameServersStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GameServerConstants from "GameServerConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleGameServerUpsert(gameServer) {
  gameServer = undefined;
  if (null == gameServer.guildId) {
    if (-1 === closure_1.findIndex((id) => id.id === gameServer.id)) {
      const items = [];
      items[HermesBuiltin.arraySpread(closure_1, 0)] = gameServer;
      let mapped = items;
    } else {
      mapped = closure_1.map((id) => {
        let tmp2 = id;
        if (id.id === gameServer.id) {
          let tmp4 = gameServer;
          if (null == gameServer.subscription_id) {
            let subscription_id;
            if (id != null) {
              subscription_id = id.subscription_id;
            }
            tmp4 = gameServer;
            if (null != subscription_id) {
              const obj = {};
              const merged = Object.assign(gameServer);
              obj.subscription_id = id.subscription_id;
              tmp4 = obj;
            }
          }
          tmp2 = tmp4;
        }
        return tmp2;
      });
    }
    closure_1 = mapped;
  }
}
const GAME_SERVER_SHOP_MAX_INSTANCES = GameServerConstants.GAME_SERVER_SHOP_MAX_INSTANCES;
let closure_1 = [];
let maxServers = GAME_SERVER_SHOP_MAX_INSTANCES;
const Store = initializeDefault.Store;
class OwnedGameServersStore extends Store {}
const prototype = OwnedGameServersStore.prototype;
prototype["getGameServers"] = function getGameServers() {
  return closure_1;
};
prototype["getMaxServers"] = function getMaxServers() {
  return maxServers;
};
OwnedGameServersStore.displayName = "OwnedGameServersStore";
const ownedGameServersStore = new OwnedGameServersStore(DispatcherDefault, {
  LOGOUT: function handleReset() {
    closure_1 = [];
    maxServers = GAME_SERVER_SHOP_MAX_INSTANCES;
  },
  GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function handleFetchMyServersSuccess(arg0) {
    ({ gameServers, maxServers } = arg0);
    closure_1 = gameServers.map((subscription_id) => {
      const found = closure_1_1.find((id) => id.id === subscription_id.id);
      let tmp2 = subscription_id;
      if (null == subscription_id.subscription_id) {
        subscription_id = undefined;
        if (found != null) {
          subscription_id = found.subscription_id;
        }
        tmp2 = subscription_id;
        if (null != subscription_id) {
          const obj = {};
          const merged = Object.assign(subscription_id);
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
      closure_1 = closure_1.filter((id) => id.id !== gameServerId);
    }
  },
});
const result = size.fileFinishedImporting("modules/game_server/OwnedGameServersStore.tsx");

export default ownedGameServersStore;
