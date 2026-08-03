// === Module 8781: getSimilarGames ===

// Module 8781 (getSimilarGames)
import { Store } from "initialize";

let closure_0 = {};
let closure_1 = {};
let closure_2 = {};
let closure_3 = {};
let closure_4 = {};
let closure_5 = {};
let closure_6 = {};
let c7 = null;
class GameProfileStore extends Store {
}
const prototype = GameProfileStore.prototype;
prototype["getSimilarGames"] = function getSimilarGames(arg0) {
  return table[arg0];
};
prototype["getShopCollectionSkuIds"] = function getShopCollectionSkuIds(arg0) {
  return table2[arg0];
};
prototype["hasShopCollectionBeenFetched"] = function hasShopCollectionBeenFetched(arg0) {
  let flag = table3[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isShopCollectionFetching"] = function isShopCollectionFetching(arg0) {
  let flag = table4[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getAnnouncements"] = function getAnnouncements(arg0) {
  return table5[arg0];
};
prototype["hasAnnouncementsBeenFetched"] = function hasAnnouncementsBeenFetched(arg0) {
  let flag = table6[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["isAnnouncementsFetching"] = function isAnnouncementsFetching(arg0) {
  let flag = table7[arg0];
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["getPendingReturn"] = function getPendingReturn() {
  return c7;
};
GameProfileStore.displayName = "GameProfileStore";
const gameProfileStore = new GameProfileStore(require("dispatcher"), {
  GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS: function handleGetSimilarGamesSuccess(gameId) {
    closure_0[gameId.gameId] = gameId.games;
  },
  GAME_PROFILE_GET_SHOP_COLLECTION_START: function handleGetShopCollectionStart(collectionId) {
    closure_3[collectionId.collectionId] = true;
  },
  GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS: function handleGetShopCollectionSuccess(collectionId) {
    collectionId = collectionId.collectionId;
    closure_1[collectionId] = collectionId.skuIds;
    closure_2[collectionId] = true;
    closure_3[collectionId] = false;
  },
  GAME_PROFILE_GET_SHOP_COLLECTION_ERROR: function handleGetShopCollectionError(collectionId) {
    collectionId = collectionId.collectionId;
    closure_2[collectionId] = true;
    closure_3[collectionId] = false;
  },
  GAME_PROFILE_GET_ANNOUNCEMENTS_START: function handleGetAnnouncementsStart(gameId) {
    closure_6[gameId.gameId] = true;
  },
  GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS: function handleGetAnnouncementsSuccess(gameId) {
    gameId = gameId.gameId;
    closure_4[gameId] = { messages: gameId.messages, channelId: gameId.channelId, guildId: gameId.guildId };
    closure_5[gameId] = true;
    closure_6[gameId] = false;
  },
  GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR: function handleGetAnnouncementsError(gameId) {
    gameId = gameId.gameId;
    closure_5[gameId] = true;
    closure_6[gameId] = false;
  },
  GAME_PROFILE_SET_PENDING_RETURN: function handleSetPendingReturn(arg0) {
    let channelId;
    let gameId;
    let initialScrollOffset;
    ({ gameId, channelId, initialScrollOffset } = arg0);
    gameId = undefined;
    if (_null != null) {
      gameId = _null.gameId;
    }
    if (gameId === gameId) {
      channelId = undefined;
      if (_null != null) {
        channelId = _null.channelId;
      }
      if (channelId === channelId) {
        initialScrollOffset = undefined;
        if (_null != null) {
          initialScrollOffset = _null.initialScrollOffset;
        }
        if (initialScrollOffset === initialScrollOffset) {
          return false;
        }
      }
    }
    _null = { gameId, channelId, initialScrollOffset };
  },
  GAME_PROFILE_CLEAR_PENDING_RETURN: function handleClearPendingReturn(arg0) {
    if (null != _null) {
      if (_null.gameId === tmp) {
        _null = null;
      }
    }
    return false;
  }
});
const result = require("set").fileFinishedImporting("modules/game_profile/GameProfileStore.tsx");

export default gameProfileStore;