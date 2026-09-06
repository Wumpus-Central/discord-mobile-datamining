// === Module 16193: UnclaimedGamesStore ===

// Module 16193 (UnclaimedGamesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let guildIdToGameIds = null;
const Store = initializeDefault.Store;
class UnclaimedGamesStore extends Store {
}
const prototype = UnclaimedGamesStore.prototype;
prototype["getMap"] = function getMap() {
  return guildIdToGameIds;
};
prototype["getUnclaimedGameIdsForGuild"] = function getUnclaimedGameIdsForGuild(arg0) {
  let items;
  if (guildIdToGameIds != null) {
    items = tmp[arg0];
  }
  if (items == null) {
    items = [];
  }
  return items;
};
prototype["hasUnclaimedGames"] = function hasUnclaimedGames(arg0) {
  let tmp2;
  if (guildIdToGameIds != null) {
    tmp2 = tmp[arg0];
  }
  let tmp4 = null != tmp2;
  if (tmp4) {
    tmp4 = tmp2.length > 0;
  }
  return tmp4;
};
prototype["getGuildIdsWithUnclaimedGames"] = function getGuildIdsWithUnclaimedGames() {
  if (null == guildIdToGameIds) {
    return [];
  } else {
    closure_0 = guildIdToGameIds;
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
};
UnclaimedGamesStore.displayName = "UnclaimedGamesStore";
const unclaimedGamesStore = new UnclaimedGamesStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    guildIdToGameIds = null;
  },
  UNCLAIMED_GAMES_FETCH_SUCCESS: function handleFetchSuccess(guildIdToGameIds) {
    guildIdToGameIds = guildIdToGameIds.guildIdToGameIds;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_claim/UnclaimedGamesStore.tsx");

export default unclaimedGamesStore;