// === Module 8222: GameProfileHttpUtils ===

// Module 8222 (GameProfileHttpUtils)
import BackoffDefault from "Backoff" /* 559 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import StoreUtils from "StoreUtils" /* 5092 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import StorefrontProductRecord from "StorefrontProductRecord" /* 6982 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import GameProfileStore from "GameProfileStore" /* 8135 */;

require = fn;
let closure_9 = async function _getShopCollection() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = collectionId;
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId });
    const request = { url: Endpoints.STOREFRONT_COLLECTION_WITH_PRODUCTS(collectionId), query: { locale: locale.locale, include_pricing: true, with_bundled_skus: true }, rejectWithError: false, retries: 2 };
    await StoreUtils.httpGetWithCountryCodeQuery(request);
    if (1 === tmp7) {
      c4 = 0;
      closure_130_1(closure_130_2[6]).dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: closure_129_0 });
      c6 = 3;
      closure_130_1(closure_130_2[6]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const products = value.body.products;
      closure_129_1 = products.map(closure_130_4.fromServer);
      closure_129_2 = closure_129_1.flatMap((skuIds) => skuIds.skuIds);
      closure_130_1(closure_130_2[6]).dispatch({ type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds: closure_129_2, products: closure_129_1 });
      closure_130_1(closure_130_2[6]);
      closure_130_1(closure_130_2[6]).dispatch({ type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: closure_129_0, skuIds: closure_129_2 });
      c4 = 0;
      closure_130_1(closure_130_2[6]);
    }
    return value;
  })();
};
let closure_10 = async function _fetchSimilarGames(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp2;
          closure_2 = tmp5;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Endpoints.SIMILAR_GAMES(closure_0), rejectWithError: true };
          c4 = 1;
          c5 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj6 = { value, done: true };
        return obj6;
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
        const obj7 = { type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: closure_130_0, games: closure_130_1 };
        closure_131_1(closure_131_2[6]).dispatch(obj7);
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp18) {
      c5 = tmp;
      throw tmp18;
    }
  }
};
let closure_11 = async function _getGameAnnouncements() {
  closure_1 = arg1;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value) => {
    closure_5 = tmp3;
    closure_4 = tmp5;
    closure_132_0 = gameId;
    DispatcherDefault.dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId });
    if (closure_1 != null) {
      const limit = closure_1.limit;
    }
    const obj6 = {};
    if (null != limit) {
      obj6.limit = closure_1.limit;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GAME_ANNOUNCEMENTS(gameId), query: obj6, rejectWithError: false };
    await HTTP.get(request);
    if (1 === tmp8) {
      c7 = 0;
      closure_133_1(closure_133_2[6]).dispatch({ type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: closure_132_0 });
      c9 = 3;
      closure_133_1(closure_133_2[6]);
    } else if (arg0 === 1) {
      c9 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const body = value.body;
      const obj10 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS", gameId: closure_132_0, messages: null, channelId: null, guildId: null };
      obj10.messages = closure_133_0(closure_133_2[12]).toAnnouncementMessages(body.messages);
      const channel_id = body.channel_id;
      channelId = channel_id;
      if (channel_id == null) {
        channelId = undefined;
      }
      obj10.channelId = channelId;
      const guild_id = body.guild_id;
      guildId = guild_id;
      if (guild_id == null) {
        guildId = undefined;
      }
      obj10.guildId = guildId;
      closure_133_1(closure_133_2[6]).dispatch(obj10);
      c7 = 0;
      closure_133_0(closure_133_2[12]);
      closure_133_1(closure_133_2[6]);
    }
    return value;
  })();
};
const Endpoints = fn(1074).Endpoints;
let closure_8 = fn(8223).SIMILAR_GAMES_BLOCKED_GAME_IDS;
const initialize = fn(504);
const fetchStore = initialize.createFetchStore(GameProfileStore, {
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
      const apply = closure_1_10.apply;
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
      const result = 5 * DurationsDefault.Millis.SECOND;
      return new BackoffDefault(result, 5 * DurationsDefault.Millis.MINUTE);
    }
  },
  failureStaleAfter: DurationsDefault.Seconds.MINUTE
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/GameProfileHttpUtils.tsx");

export const getShopCollection = function getShopCollection() {
  const self = this;
  const apply = closure_9.apply;
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
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};