// discord_app/modules/game_profile/GameProfileHttpUtils.tsx
import failsDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import setDefault from "../../utils/Durations.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../user_settings/LocaleStore.tsx";
import importDefaultResult from "GameProfileStore.tsx";
import { Endpoints } from "../../Constants.tsx";
import { SIMILAR_GAMES_BLOCKED_GAME_IDS as closure_7 } from "../../../discord_common/js/shared/shared-constants/SimilarGamesConstants.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
function _getShopCollection() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      dependencyMap = tmp3;
      obj1 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_START", collectionId: null };
      obj1[1] = callback;
      closure_1_1(closure_1_2[5]).dispatch(obj1);
      let locale = 1;
      const obj9 = closure_1_1(closure_1_2[5]);
      const obj2 = { url: null, query: null, rejectWithError: false, retries: 2 };
      obj2[0] = c6.STOREFRONT_COLLECTION_WITH_PRODUCTS(callback);
      let obj3 = { locale: null };
      obj3[0] = locale.locale;
      obj2[1] = obj3;
      yield callback(closure_1_2[6]).httpGetWithCountryCodeQuery(obj2);
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
        const obj = callback2(709);
        const obj6 = { type: "GAME_PROFILE_GET_SHOP_COLLECTION_SUCCESS", collectionId: null, skuIds: null };
        obj6[1] = callback;
        obj6[2] = callback2;
        obj.dispatch(obj6);
        locale = 0;
      }
      locale = 0;
      return body;
    })();
  });
  closure_8 = tmp;
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
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
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
              closure_3 = tmp2;
              const table = tmp5;
              let lib;
              const HTTP = callback(closure_1_2[7]).HTTP;
              obj1 = { url: null, rejectWithError: true };
              obj1[0] = closure_1_6.SIMILAR_GAMES(callback);
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
                tmp = !closure_1_7.has(arg0);
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
  closure_9 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, body) {
      closure_5 = tmp3;
      closure_4 = tmp5;
      obj1 = { type: "GAME_PROFILE_GET_ANNOUNCEMENTS_START", gameId: null };
      obj1[1] = callback;
      callback2(closure_1_2[5]).dispatch(obj1);
      c7 = 1;
      if (body != null) {
        const limit = tmp44.limit;
      }
      const obj2 = {};
      if (null != limit) {
        obj2.limit = tmp44.limit;
      }
      const HTTP = callback(closure_1_2[7]).HTTP;
      const obj3 = { url: null, query: null, rejectWithError: false };
      obj3[0] = closure_1_6.GAME_ANNOUNCEMENTS(callback);
      obj3[1] = obj2;
      yield HTTP.get(obj3);
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
        obj6[2] = callback(9551).toAnnouncementMessages(body.messages);
        const channel_id = body.channel_id;
        dependencyMap = channel_id;
        if (channel_id == null) {
          dependencyMap = undefined;
        }
        obj6[3] = dependencyMap;
        const guild_id = body.guild_id;
        c3 = guild_id;
        if (guild_id == null) {
          c3 = undefined;
        }
        obj6[4] = c3;
        obj9.dispatch(obj6);
        c7 = 0;
        const obj11 = callback(9551);
      }
      c7 = 0;
      return body;
    })();
  });
  closure_10 = tmp;
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
  failureStaleAfter: setDefault.Seconds.MINUTE
};
initialize = {
  backoff() {
    let tmp = failsDefault;
    const result = 5 * setDefault.Millis.SECOND;
    tmp = new tmp(result, 5 * setDefault.Millis.MINUTE);
    return tmp;
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, initialize);
let result = require("set").fileFinishedImporting("modules/game_profile/GameProfileHttpUtils.tsx");

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