// discord_app/modules/game_profile/GameProfileStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let _null;

const React = {};
const React2 = {};
const _false = {};
const React3 = {};
const hasOwnProperty = {};
const metroRequire = {};
let c7 = null;
const Store = get_initializedDefault.Store;
class GameProfileStore extends Store {
  getSimilarGames(gameId) {
    return closure_0[gameId];
  }
  getShopCollectionSkuIds(arg0) {
    return closure_1[arg0];
  }
  hasShopCollectionBeenFetched(arg0) {
    let flag = closure_2[arg0];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isShopCollectionFetching(arg0) {
    let flag = closure_3[arg0];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getAnnouncements(arg0) {
    return closure_4[arg0];
  }
  hasAnnouncementsBeenFetched(arg0) {
    let flag = closure_5[arg0];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  isAnnouncementsFetching(arg0) {
    let flag = closure_6[arg0];
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  getPendingReturn() {
    return c7;
  }
}
const prototype = GameProfileStore.prototype;
GameProfileStore.displayName = "GameProfileStore";
const obj = {
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
    let gameId1;
    if (_null != null) {
      gameId1 = _null.gameId;
    }
    if (gameId1 === gameId) {
      let channelId1;
      if (_null != null) {
        channelId1 = _null.channelId;
      }
      if (channelId1 === channelId) {
        let initialScrollOffset1;
        if (_null != null) {
          initialScrollOffset1 = _null.initialScrollOffset;
        }
        if (initialScrollOffset1 === initialScrollOffset) {
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
  },
};
const gameProfileStore = new GameProfileStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/game_profile/GameProfileStore.tsx");

export default gameProfileStore;
