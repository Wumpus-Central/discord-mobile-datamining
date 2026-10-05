// discord_app/modules/game_server/OwnedGameServersStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GameServerConstants from "GameServerConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function handleGameServerUpsert(gameServer) {
  gameServer = undefined;
  if (null == gameServer.guildId) {
    let mapped;
    let tmp2 = closure_1;
    if (-1 === closure_1.findIndex((id) => id.id === gameServer.id)) {
      const items = [];
      items[HermesBuiltin.arraySpread(items, closure_1, 0)] = gameServer;
      mapped = items;
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
              const obj = { subscription_id: id.subscription_id };
              const merged = Object.assign(gameServer);
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
const Store = get_initializedDefault.Store;
class OwnedGameServersStore extends Store {
  getGameServers() {
    return closure_1;
  }
  getMaxServers() {
    return maxServers;
  }
}
const prototype = OwnedGameServersStore.prototype;
OwnedGameServersStore.displayName = "OwnedGameServersStore";
let obj = {
  LOGOUT: function handleReset() {
    closure_1 = [];
    maxServers = GAME_SERVER_SHOP_MAX_INSTANCES;
  },
  GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function handleFetchMyServersSuccess(arg0) {
    let gameServers;
    ({ gameServers, maxServers } = arg0);
    closure_1 = gameServers.map((subscription_id) => {
      let closure_0 = subscription_id;
      const found = closure_1_1.find((id) => id.id === id.id);
      let tmp2 = subscription_id;
      if (null == subscription_id.subscription_id) {
        subscription_id = undefined;
        if (found != null) {
          subscription_id = found.subscription_id;
        }
        tmp2 = subscription_id;
        if (null != subscription_id) {
          const obj = { subscription_id: found.subscription_id };
          const merged = Object.assign(subscription_id);
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
};
const ownedGameServersStore = new OwnedGameServersStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/game_server/OwnedGameServersStore.tsx");

export default ownedGameServersStore;
