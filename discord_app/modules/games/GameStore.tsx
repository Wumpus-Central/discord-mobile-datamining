// === Module 4276: map ===

// Module 4276 (map)
import applicationId from "applicationId";
import { Store } from "initialize";
import set from "isDiscordProxiedAssetUrl";

let map = new Map();
let set = new Set();
let set1 = new Set();
let set2 = new Set();
class GameStore extends Store {
}
const prototype = GameStore.prototype;
prototype["isFetching"] = function isFetching(arg0) {
  return set.has(arg0);
};
prototype["didFetchingFail"] = function didFetchingFail(gameId) {
  return set1.has(gameId);
};
prototype["getGame"] = function getGame(gameId) {
  return map.get(gameId);
};
prototype["hasNoData"] = function hasNoData(gameId) {
  return set2.has(gameId);
};
prototype["getCoverImageUrl"] = function getCoverImageUrl(arg0, size) {
  const value = map.get(arg0);
  let coverURL;
  if (value != null) {
    coverURL = value.getCoverURL();
  }
  if (null == coverURL) {
    return null;
  } else if (null == size) {
    return coverURL;
  } else {
    let str = importDefault(1467).toURLSafe(coverURL);
    str = coverURL;
    if (null != str) {
      const searchParams = str.searchParams;
      const result = searchParams.set("size", size.size.toString());
      str = str.toString();
      const str2 = size.size;
    }
    return str;
  }
};
GameStore.displayName = "NewGameStore";
const gameStore = new GameStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    const map = new Map();
    const set = new Set();
    const set1 = new Set();
    const set2 = new Set();
  },
  GAME_FETCH: function handleFetch(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      set.add(arg0);
      set2.delete(arg0);
    });
  },
  GAME_FETCH_CANCELLED: function handleFetchCancelled(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => set.delete(arg0));
  },
  GAME_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let gameIds;
    let games;
    ({ gameIds, games } = arg0);
    let set;
    set = new Set(gameIds);
    const item = gameIds.forEach((arg0) => {
      set2.delete(arg0);
      set3.delete(arg0);
    });
    const item1 = games.forEach((id) => {
      set.delete(id.id);
      const result = outer1_3.set(id.id, new outer1_2(id));
    });
    const item2 = set.forEach((arg0) => {
      if (!set.has(arg0)) {
        set4.add(arg0);
      }
    });
  },
  GAME_FETCH_FAILURE: function handleFetchFailure(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      set.delete(arg0);
      set2.add(arg0);
    });
  }
});
let result = set.fileFinishedImporting("modules/games/GameStore.tsx");

export default gameStore;