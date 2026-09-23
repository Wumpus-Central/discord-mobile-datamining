// === Module 16668: MobileGameCommunitiesActionCreators ===

// Module 16668 (MobileGameCommunitiesActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import _modDef1472 from "module_1472" /* 1472 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 14070 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15966 */;

require = fn;
let closure_7 = async function _fetchDetectedGameCommunities() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          let guilds;
          const tmp19 = (function getDetectedGameIds() {
            const obj = {};
            for (const item10010 of tmp) {
              obj[item10010] = appInstalled.isAppInstalled(item10010);
              continue;
            }
            return closure_1_0(closure_1_2[5]).getGameIdsForDetectedGames(obj);
          })();
          closure_128_0 = tmp19;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
          const obj4 = { game_ids: tmp19, limit: 20, ignored_guild_ids: null };
          const _Array = Array;
          obj4.ignored_guild_ids = Array.from(dismissedGuildIds.getDismissedGuildIds());
          request.query = _modDef1472.stringify(obj4);
          c2 = 1;
          c3 = 1;
          const obj5 = { value: HTTP.get(request), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        guilds = value.body.guilds;
        const obj7 = { type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds, gameIds: closure_128_0 };
        closure_129_1(closure_129_2[8]).dispatch(obj7);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp14) {
      c3 = tmp;
      throw tmp14;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const initialize = fn(504);
let obj2 = {
  getQueryId(arg0) {
    let str = null;
    if (arg0) {
      str = "mobile-game-communities";
    }
    return str;
  },
  get() {
    return MobileGameCommunitiesStore.getPresentableUpsellGuilds();
  },
  load: null,
  staleAfter: null,
  failureStaleAfter: null
};
let closure_8 = asyncGeneratorStep(async () => {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - MobileGameCommunitiesStore.getLastFetchedAt() >= 86400000) {
            c1 = 1;
            c0 = 1;
            const obj4 = {
              value: (function fetchDetectedGameCommunities() {
                          const self = this;
                          const apply = closure_1_7.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(),
              done: false
            };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
});
obj2.load = function() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
obj2.staleAfter = DurationsDefault.Seconds.DAY;
obj2.failureStaleAfter = DurationsDefault.Seconds.MINUTE;
const fetchStore = initialize.createFetchStore(MobileGameCommunitiesStore, obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

export const useMobileGameCommunities = fetchStore;
export const dismissGuild = function dismissGuild(guildId) {
  DispatcherDefault.dispatch({ type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId });
};