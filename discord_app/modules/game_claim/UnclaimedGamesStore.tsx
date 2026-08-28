// === Module 15712: getMap ===

// Module 15712 (getMap)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = null;
const Store = initializeDefault.Store;
class UnclaimedGamesStore extends Store {
}
const prototype = UnclaimedGamesStore.prototype;
prototype["getMap"] = function getMap() {
  return c0;
};
prototype["getUnclaimedGameIdsForGuild"] = function getUnclaimedGameIdsForGuild(arg0) {
  let items;
  if (c0 != null) {
    items = tmp[arg0];
  }
  if (items == null) {
    items = [];
  }
  return items;
};
prototype["hasUnclaimedGames"] = function hasUnclaimedGames(arg0) {
  let tmp2;
  if (c0 != null) {
    tmp2 = tmp[arg0];
  }
  let tmp4 = null != tmp2;
  if (tmp4) {
    tmp4 = tmp2.length > 0;
  }
  return tmp4;
};
prototype["getGuildIdsWithUnclaimedGames"] = function getGuildIdsWithUnclaimedGames() {
  if (null == closure_0) {
    return [];
  } else {
    const _Object = Object;
    const keys = Object.keys(closure_0);
    return keys.filter((arg0) => {
      let items = table[arg0];
      if (items == null) {
        items = [];
      }
      return items.length > 0;
    });
  }
};
UnclaimedGamesStore.displayName = "UnclaimedGamesStore";
const unclaimedGamesStore = new UnclaimedGamesStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    c0 = null;
  },
  UNCLAIMED_GAMES_FETCH_SUCCESS: function handleFetchSuccess(guildIdToGameIds) {
    guildIdToGameIds = guildIdToGameIds.guildIdToGameIds;
  }
});
const result = require("set").fileFinishedImporting("modules/game_claim/UnclaimedGamesStore.tsx");

export default unclaimedGamesStore;