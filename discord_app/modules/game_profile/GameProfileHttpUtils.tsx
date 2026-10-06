// === Module 8447: GameProfileHttpUtils ===

// Module 8447 (GameProfileHttpUtils)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import StoreUtils from "StoreUtils" /* 5329 */;
import SimilarGamesConstants from "SimilarGamesConstants" /* 8448 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import StorefrontProductRecord from "StorefrontProductRecord" /* 7086 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import GameProfileStore from "GameProfileStore" /* 8360 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let channelId, closure_2, closure_3, closure_5, closure_6, games, guildId, limit, products, skuIds;

let obj = function _getShopCollection() {
  let locale;
  obj = _asyncToGenerator(async (collectionId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj6;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              products = undefined;
              skuIds = undefined;
              const obj5 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId };
              const obj11 = DispatcherDefault;
              obj11.dispatch(obj5);
              c4 = 1;
              const request = { url: Endpoints.STOREFRONT_COLLECTION_WITH_PRODUCTS(collectionId), query: obj6, rejectWithError: false, retries: 2 };
              const httpGetWithCountryCodeQuery = StoreUtils.httpGetWithCountryCodeQuery;
              StoreUtils;
              c5 = 2;
              c6 = 1;
              obj6 = { locale: locale.locale, include_pricing: true, with_bundled_skus: true };
              const obj8 = { value: httpGetWithCountryCodeQuery(request), done: false };
              return obj8;
            }
          } else {
            if (1 === c5) {
              c4 = 0;
              const obj10 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId };
              const obj2 = closure_130_1(closure_130_2[6]);
              obj2.dispatch(obj10);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              products = value.body.products;
              products = products.map(closure_130_4.fromServer);
              skuIds = products.flatMap((skuIds) => skuIds.skuIds);
              const obj12 = { type: "STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS", skuIds, products };
              const obj7 = closure_130_1(closure_130_2[6]);
              obj7.dispatch(obj12);
              const obj13 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId, skuIds };
              const obj9 = closure_130_1(closure_130_2[6]);
              obj9.dispatch(obj13);
              c4 = 0;
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          closure_3 = tmp12;
          if (0 === c4) {
            c6 = 3;
            throw tmp12;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchSimilarGames() {
  obj = _asyncToGenerator(async (gameId) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0) => {
      let tmp;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              games = undefined;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c4 = 1;
              c5 = 1;
              const obj4 = { url: Endpoints.SIMILAR_GAMES(gameId), rejectWithError: true };
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const similar_games = value.body.similar_games;
            games = similar_games;
            if (similar_games == null) {
              games = [];
            }
            games = games.filter((item) => {
              const tmp = item !== gameId && !set.has(item);
              return tmp;
            });
            const obj7 = { type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId, games };
            obj = closure_131_1(closure_131_2[6]);
            obj.dispatch(obj7);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c5 = 3;
          throw tmp13;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getGameAnnouncements() {
  obj = _asyncToGenerator(async (gameId, arg1) => {
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value) => {
      let obj10;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              body = undefined;
              const obj5 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId };
              const obj11 = DispatcherDefault;
              obj11.dispatch(obj5);
              c7 = 1;
              limit = undefined;
              if (closure_1 != null) {
                limit = closure_1.limit;
              }
              const obj6 = {};
              if (null != limit) {
                obj6.limit = closure_1.limit;
              }
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.GAME_ANNOUNCEMENTS(gameId), query: obj6, rejectWithError: false };
              const get = HTTP.get;
              limit = get(request);
              c8 = 2;
              c9 = 1;
              return { value: limit, done: false };
            }
          } else {
            if (1 === tmp4) {
              c7 = 0;
              const obj8 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId };
              const obj2 = closure_133_1(closure_133_2[6]);
              obj2.dispatch(obj8);
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              limit = closure_133_1(closure_133_2[6]).dispatch;
              const obj9 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS", gameId, messages: obj10.toAnnouncementMessages(body.messages), channelId, guildId };
              closure_133_1(closure_133_2[6]);
              const channel_id = body.channel_id;
              channelId = channel_id;
              obj10 = closure_133_0(closure_133_2[12]);
              if (channel_id == null) {
                channelId = undefined;
              }
              const guild_id = body.guild_id;
              guildId = guild_id;
              if (guild_id == null) {
                guildId = undefined;
              }
              limit(obj9);
              c7 = 0;
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp21) {
          closure_6 = tmp21;
          if (0 === c7) {
            c9 = 3;
            throw tmp21;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_8 = SimilarGamesConstants.SIMILAR_GAMES_BLOCKED_GAME_IDS;
obj = {
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
    function fetchSimilarGames() {
      return obj(...arguments);
    }
    return fetchSimilarGames(arg0);
  },
  retryConfig: {
    backoff() {
      const tmp = BackoffDefault;
      const result = 5 * DurationsDefault.Millis.SECOND;
      const tmp2 = new tmp(result, 5 * DurationsDefault.Millis.MINUTE);
      return tmp2;
    }
  },
  failureStaleAfter: DurationsDefault.Seconds.MINUTE
};
const fetchStore = get_initialized.createFetchStore(GameProfileStore, obj);
let result = size.fileFinishedImporting("modules/game_profile/GameProfileHttpUtils.tsx");

export const getShopCollection = function getShopCollection() {
  return obj(...arguments);
};
export const useSimilarGameIds = fetchStore;
export const getGameAnnouncements = function getGameAnnouncements() {
  return obj(...arguments);
};