// discord_app/modules/game_profile/GameProfileHttpUtils.tsx
import dispatcher from "dispatcher";
import _getSystemLocale from "_getSystemLocale";
import importDefaultResult from "getSimilarGames";
import { Endpoints } from "ME";
import { SIMILAR_GAMES_BLOCKED_GAME_IDS as closure_7 } from "set";
import initialize from "initialize";

const require = arg1;
function _getShopCollection() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              const dependencyMap = tmp3;
              let callback2 = tmp7;
              callback2 = undefined;
              const obj1 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: null };
              obj1[1] = callback;
              outer1_1(outer1_2[5]).dispatch(obj1);
              let locale = 1;
              const obj9 = outer1_1(outer1_2[5]);
              const obj2 = { url: null, query: null, rejectWithError: false, retries: 2 };
              obj2[0] = c6.STOREFRONT_COLLECTION_WITH_PRODUCTS(callback);
              let obj3 = { locale: null };
              obj3[0] = locale.locale;
              obj2[1] = obj3;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = callback(outer1_2[6]).httpGetWithCountryCodeQuery(obj2);
              return obj4;
            }
          } else {
            if (1 === tmp7) {
              locale = 0;
              obj3 = callback2(709);
              const obj5 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_ERROR", collectionId: null };
              obj5[1] = callback;
              obj3.dispatch(obj5);
              c6 = 3;
            } else if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 !== 2) {
              const products = body.body.products;
              callback2 = products.flatMap((sku_ids) => sku_ids.sku_ids);
              obj = callback2(709);
              const obj6 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: null, skuIds: null };
              obj6[1] = callback;
              obj6[2] = callback2;
              obj.dispatch(obj6);
              locale = 0;
            }
            locale = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = body;
            return obj7;
          }
        } catch (tmp22) {
          let dispatcher = tmp22;
          if (tmp4 === locale) {
            c6 = tmp2;
            throw tmp22;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _getShopCollection = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSimilarGames() {
  const self = this;
  let tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let dispatcher = tmp2;
              const table = tmp5;
              let lib;
              const HTTP = callback(outer1_2[7]).HTTP;
              const obj1 = { url: null, rejectWithError: true };
              obj1[0] = outer1_6.SIMILAR_GAMES(callback);
              c4 = 1;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = body;
            return obj3;
          } else {
            const similar_games = body.body.similar_games;
            lib = similar_games;
            if (similar_games == null) {
              lib = [];
            }
            lib = lib.filter((arg0) => {
              let tmp = arg0 !== closure_0;
              if (tmp) {
                tmp = !outer1_7.has(arg0);
              }
              return tmp;
            });
            obj = lib(table[5]);
            const obj4 = { type: "GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS", gameId: null, games: null };
            obj4[1] = callback;
            obj4[2] = lib;
            obj.dispatch(obj4);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp18) {
          c5 = tmp;
          throw tmp18;
        }
      }
    })();
  });
  const _fetchSimilarGames = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getGameAnnouncements() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, body) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_5 = tmp3;
              let _getSystemLocale = tmp5;
              body = undefined;
              let obj1 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: null };
              obj1[1] = callback;
              callback2(outer1_2[5]).dispatch(obj1);
              let c7 = 1;
              let limit;
              if (body != null) {
                limit = tmp44.limit;
              }
              const obj2 = {};
              if (null != limit) {
                obj2.limit = tmp44.limit;
              }
              const HTTP = callback(outer1_2[7]).HTTP;
              const obj3 = { url: null, query: null, rejectWithError: false };
              obj3[0] = outer1_6.GAME_ANNOUNCEMENTS(callback);
              obj3[1] = obj2;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj3);
              return obj4;
            }
          } else {
            if (1 === tmp8) {
              c7 = 0;
              obj1 = body(709);
              const obj5 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_ERROR", gameId: null };
              obj5[1] = callback;
              obj1.dispatch(obj5);
              c9 = 3;
            } else if (arg0 === 1) {
              c9 = 3;
              throw body;
            } else if (arg0 !== 2) {
              body = body.body;
              const obj6 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_SUCCESS", gameId: null, messages: null, channelId: null, guildId: null };
              obj6[1] = callback;
              const obj9 = body(709);
              obj6[2] = callback(8661).toAnnouncementMessages(body.messages);
              const channel_id = body.channel_id;
              let dependencyMap = channel_id;
              if (channel_id == null) {
                dependencyMap = undefined;
              }
              obj6[3] = dependencyMap;
              const guild_id = body.guild_id;
              let c3 = guild_id;
              if (guild_id == null) {
                c3 = undefined;
              }
              obj6[4] = c3;
              obj9.dispatch(obj6);
              c7 = 0;
              const obj11 = callback(8661);
            }
            c7 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp25) {
          let closure_6 = tmp25;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp25;
          } else {
            c8 = tmp;
          }
        }
      }
    })();
  });
  const _getGameAnnouncements = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c5 = importDefaultResult;
initialize = {
  getQueryId(arg0, arg1) {
    let combined = null;
    if (arg1) {
      const _HermesInternal = HermesInternal;
      combined = "similar-games:" + arg0;
    }
    return combined;
  },
  get(arg0) {
    let similarGames = importDefaultResult.getSimilarGames(arg0);
    if (similarGames == null) {
      similarGames = null;
    }
    return similarGames;
  },
  load(arg0) {
    return (function fetchSimilarGames(arg0) {
      const self = this;
      const apply = closure_9.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(arg0);
  },
  retryConfig: initialize,
  failureStaleAfter: require("set").Seconds.MINUTE
};
initialize = {
  backoff() {
    let tmp = importDefault(584);
    const result = 5 * importDefault(687).Millis.SECOND;
    tmp = new tmp(result, 5 * importDefault(687).Millis.MINUTE);
    return tmp;
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, initialize);
let result = require("getSimilarGames").fileFinishedImporting("modules/game_profile/GameProfileHttpUtils.tsx");

export const getShopCollection = function getShopCollection(arg0) {
  const self = this;
  const apply = _getShopCollection.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const useSimilarGameIds = fetchStore;
export const getGameAnnouncements = function getGameAnnouncements(arg0, arg1) {
  const self = this;
  const apply = _getGameAnnouncements.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};