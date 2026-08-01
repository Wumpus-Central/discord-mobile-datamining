// === Module 11588: handleGameServerUpsert ===

// Module 11588 (handleGameServerUpsert)
import { GAME_SERVER_SHOP_MAX_INSTANCES } from "str11";
import { Store } from "initialize";

function handleGameServerUpsert(gameServer) {
  gameServer = gameServer.gameServer;
  gameServer = undefined;
  if (null == gameServer.guildId) {
    if (-1 === mapped.findIndex((id) => id.id === gameServer.id)) {
      const items = [];
      items[HermesBuiltin.arraySpread(mapped, 0)] = gameServer;
      mapped = items;
    } else {
      mapped = mapped.map((id) => {
        let tmp2 = id;
        if (id.id === gameServer.id) {
          let tmp4 = tmp;
          if (null == tmp.subscription_id) {
            let subscription_id;
            if (id != null) {
              subscription_id = id.subscription_id;
            }
            tmp4 = tmp;
            if (null != subscription_id) {
              const obj = {};
              const merged = Object.assign(tmp);
              obj.subscription_id = id.subscription_id;
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
let closure_1 = [];
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
const ownedGameServersStore = new OwnedGameServersStore(require("dispatcher"), {
  LOGOUT: function handleReset() {
    let closure_1 = [];
    let closure_2 = GAME_SERVER_SHOP_MAX_INSTANCES;
  },
  GAME_SERVER_FETCH_MY_SERVERS_SUCCESS: function handleFetchMyServersSuccess(arg0) {
    let gameServers;
    let maxServers;
    ({ gameServers, maxServers } = arg0);
    let closure_1 = gameServers.map((subscription_id) => {
      let closure_0 = subscription_id;
      const found = closure_1.find((id) => id.id === subscription_id.id);
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
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/game_server/OwnedGameServersStore.tsx");

export default ownedGameServersStore;