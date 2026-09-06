// === Module 8760: GameProfileHttpUtils ===

// Module 8760 (GameProfileHttpUtils)
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import StoreUtils from "StoreUtils" /* 4802 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2025 */;
import GameProfileStore from "GameProfileStore" /* 8682 */;

require = fn;
let closure_8 = async function _getShopCollection() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = collectionId;
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId });
    const request = { url: Endpoints.STOREFRONT_COLLECTION_WITH_PRODUCTS(collectionId), query: { locale: locale.locale }, rejectWithError: false, retries: 2 };
    await StoreUtils.httpGetWithCountryCodeQuery(request);
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[5]).dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: closure_129_0 });
      c6 = 3;
      closure_130_1(closure_130_2[5]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const products = value.body.products;
      closure_129_1 = products.flatMap((sku_ids) => sku_ids.sku_ids);
      closure_130_1(closure_130_2[5]).dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: closure_129_0, skuIds: closure_129_1 });
      c4 = 0;
      closure_130_1(closure_130_2[5]);
    }
    return value;
  })();
};
let closure_9 = async function _fetchSimilarGames(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp2;
          closure_2 = tmp5;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: Endpoints.SIMILAR_GAMES(closure_0), rejectWithError: true };
          c4 = 1;
          c5 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const similar_games = value.body.similar_games;
        importDefault = similar_games;
        if (similar_games == null) {
          importDefault = [];
        }
        closure_130_1 = importDefault.filter((item) => {
          let tmp = item !== closure_1_0;
          if (tmp) {
            tmp = !set.has(item);
          }
          return tmp;
        });
        obj = closure_131_1(closure_131_2[5]);
        const obj4 = { type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: closure_130_0, games: closure_130_1 };
        obj.dispatch(obj4);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp18) {
      c5 = tmp;
      throw tmp18;
    }
  }
};
let closure_10 = async function _getGameAnnouncements() {
  closure_1 = arg1;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value) => {
    closure_5 = tmp3;
    closure_4 = tmp5;
    closure_132_0 = gameId;
    let obj1 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId };
    DispatcherDefault.dispatch(obj1);
    if (closure_1 != null) {
      const limit = closure_1.limit;
    }
    const obj2 = {};
    if (null != limit) {
      obj2.limit = closure_1.limit;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GAME_ANNOUNCEMENTS(gameId), query: obj2, rejectWithError: false };
    await HTTP.get(request);
    if (1 === tmp8) {
      c7 = 0;
      obj1 = closure_133_1(closure_133_2[5]);
      obj1.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: closure_132_0 });
      c9 = 3;
    } else if (arg0 === 1) {
      c9 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      const obj5 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS", gameId: closure_132_0, messages: null, channelId: null, guildId: null };
      obj5.messages = closure_133_0(closure_133_2[11]).toAnnouncementMessages(body.messages);
      const channel_id = body.channel_id;
      channelId = channel_id;
      if (channel_id == null) {
        channelId = undefined;
      }
      obj5.channelId = channelId;
      const guild_id = body.guild_id;
      guildId = guild_id;
      if (guild_id == null) {
        guildId = undefined;
      }
      obj5.guildId = guildId;
      closure_133_1(closure_133_2[5]).dispatch(obj5);
      c7 = 0;
      closure_133_0(closure_133_2[11]);
      closure_133_1(closure_133_2[5]);
    }
    return value;
  })();
};
const Endpoints = fn(1074).Endpoints;
let closure_7 = fn(8761).SIMILAR_GAMES_BLOCKED_GAME_IDS;
fn(504);
const initialize = {
  getQueryId(arg0, arg1) {
    let combined = null;
    if (arg1) {
      const _HermesInternal = HermesInternal;
      combined = "similar-games:" + arg0;
    }
    return combined;
  },
  get(gameId) {
    let similarGames = GameProfileStore.getSimilarGames(gameId);
    if (similarGames == null) {
      similarGames = null;
    }
    return similarGames;
  },
  load(arg0) {
    return (function fetchSimilarGames() {
      const self = this;
      const apply = closure_1_9.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(arg0);
  },
  retryConfig: {
    backoff() {
      let tmp = BackoffDefault;
      const result = 5 * DurationsDefault.Millis.SECOND;
      tmp = new tmp(result, 5 * DurationsDefault.Millis.MINUTE);
      return tmp;
    }
  },
  failureStaleAfter: DurationsDefault.Seconds.MINUTE
};
const fetchStore = initialize.createFetchStore(GameProfileStore, initialize);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/GameProfileHttpUtils.tsx");

export const getShopCollection = function getShopCollection() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useSimilarGameIds = fetchStore;
export const getGameAnnouncements = function getGameAnnouncements() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};