// === Module 16157: UnclaimedGamesStore ===

// Module 16157 (UnclaimedGamesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let guildIdToGameIds = null;
const Store = get_initializedDefault.Store;
class UnclaimedGamesStore extends Store {
  getMap() {
    return guildIdToGameIds;
  }
  getUnclaimedGameIdsForGuild(arg0) {
    let items;
    if (guildIdToGameIds != null) {
      items = tmp[arg0];
    }
    if (items == null) {
      items = [];
    }
    return items;
  }
  hasUnclaimedGames(arg0) {
    let tmp2;
    if (guildIdToGameIds != null) {
      tmp2 = tmp[arg0];
    }
    return null != tmp2 && tmp2.length > 0;
  }
  getGuildIdsWithUnclaimedGames() {
    if (null == guildIdToGameIds) {
      return [];
    } else {
      let closure_0 = guildIdToGameIds;
      const _Object = Object;
      const keys = Object.keys(guildIdToGameIds);
      return keys.filter((item) => {
        let items = closure_0[item];
        if (items == null) {
          items = [];
        }
        return items.length > 0;
      });
    }
  }
}
const prototype = UnclaimedGamesStore.prototype;
UnclaimedGamesStore.displayName = "UnclaimedGamesStore";
const obj = {
  LOGOUT: function handleLogout() {
    guildIdToGameIds = null;
  },
  UNCLAIMED_GAMES_FETCH_SUCCESS: function handleFetchSuccess(guildIdToGameIds) {
    guildIdToGameIds = guildIdToGameIds.guildIdToGameIds;
  }
};
const unclaimedGamesStore = new UnclaimedGamesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/game_claim/UnclaimedGamesStore.tsx");

export default unclaimedGamesStore;