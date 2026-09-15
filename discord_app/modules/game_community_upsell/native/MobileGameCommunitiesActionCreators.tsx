// === Module 16376: MobileGameCommunitiesActionCreators ===

// Module 16376 (MobileGameCommunitiesActionCreators)
import DurationsDefault from "Durations" /* 1091 */;
import _modDef1472 from "module_1472" /* 1472 */;
import MobileGameCommunitiesStore from "MobileGameCommunitiesStore" /* 15720 */;
import Backoff from "Backoff" /* 559 */;
import Dispatcher from "Dispatcher" /* 573 */;

const require = globalThis.__r;

const require = fn;
const Endpoints = fn(1074).Endpoints;
const importDefaultResult2 = new Backoff(DurationsDefault.Millis.SECOND, DurationsDefault.Millis.MINUTE, true);
const subscription = Dispatcher.subscribe("LOGOUT", () => importDefaultResult2.succeed());
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_community_upsell/native/MobileGameCommunitiesActionCreators.tsx");

export const fetchMobileGameCommunities = function fetchMobileGameCommunities(gameIdsForDetectedGames, arg1, arg2) {
  _require = gameIdsForDetectedGames;
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  let num = arg2;
  if (arg2 === undefined) {
    num = 20;
  }
  const HTTP = require("HTTPUtils").HTTP;
  const request = { url: Endpoints.MOBILE_GAME_COMMUNITIES, query: _modDef1472.stringify({ game_ids: gameIdsForDetectedGames, limit: num, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
  value = HTTP.get(request);
  return value.then((body) => {
    pending.succeed();
    closure_2_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds });
  }, () => {
    closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
    if (!pending.pending) {
      pending.fail(() => {
        let game_ids = Array.from(closure_3.getLastFetchedGameIds());
        let items = Array.from(closure_3.getDismissedGuildIds());
        if (items === undefined) {
          items = [];
        }
        let HTTP = game_ids(dependencyMap[5]).HTTP;
        let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
        let value = HTTP.get(request);
        let obj2 = closure_1(dependencyMap[6]);
        value.then((body) => {
          pending.succeed();
          closure_2_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds });
        }, () => {
          closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
          if (!pending.pending) {
            pending.fail(() => {
              let game_ids = Array.from(closure_3.getLastFetchedGameIds());
              let items = Array.from(closure_3.getDismissedGuildIds());
              if (items === undefined) {
                items = [];
              }
              let HTTP = game_ids(dependencyMap[5]).HTTP;
              let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
              let value = HTTP.get(request);
              let obj2 = closure_1(dependencyMap[6]);
              value.then(() => { ... }, () => { ... }).catch(/* F124447 */ function() { ... });
            });
          }
          let obj = closure_1_1(dependencyMap[4]);
        }).catch(() => {

        });
      });
    }
    let obj = closure_1_1(dependencyMap[4]);
  });
};
export const fetchMobileGameCommunitiesIfStale = function fetchMobileGameCommunitiesIfStale() {
  if (!importDefaultResult2.pending) {
    const _Date = Date;
    const timestamp = Date.now();
    if (timestamp - MobileGameCommunitiesStore.getLastFetchedAt() >= 15000) {
      const _Array = Array;
      const game_ids = Array.from(MobileGameCommunitiesStore.getLastFetchedGameIds());
      const _Array2 = Array;
      let items = Array.from(MobileGameCommunitiesStore.getDismissedGuildIds());
      if (items === undefined) {
        items = [];
      }
      const HTTP = game_ids(1271).HTTP;
      const request = { url: Endpoints.MOBILE_GAME_COMMUNITIES, query: null, oldFormErrors: true, rejectWithError: true };
      const obj2 = { game_ids, limit: 20, ignored_guild_ids: items };
      request.query = _modDef1472.stringify(obj2);
      value = HTTP.get(request);
      return value.then((body) => {
        pending.succeed();
        closure_2_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds });
      }, () => {
        closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
        if (!pending.pending) {
          pending.fail(() => {
            let game_ids = Array.from(closure_3.getLastFetchedGameIds());
            let items = Array.from(closure_3.getDismissedGuildIds());
            if (items === undefined) {
              items = [];
            }
            let HTTP = game_ids(dependencyMap[5]).HTTP;
            let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
            let value = HTTP.get(request);
            let obj2 = closure_1(dependencyMap[6]);
            value.then((body) => {
              pending.succeed();
              closure_2_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_SUCCESS", guilds: body.body.guilds, gameIds });
            }, () => {
              closure_1_1(dependencyMap[4]).dispatch({ type: "MOBILE_GAME_COMMUNITIES_FETCH_FAILURE" });
              if (!pending.pending) {
                pending.fail(() => {
                  let game_ids = Array.from(closure_3.getLastFetchedGameIds());
                  let items = Array.from(closure_3.getDismissedGuildIds());
                  if (items === undefined) {
                    items = [];
                  }
                  let HTTP = game_ids(dependencyMap[5]).HTTP;
                  let request = { url: constants.MOBILE_GAME_COMMUNITIES, query: closure_1(dependencyMap[6]).stringify({ game_ids, limit: 20, ignored_guild_ids: items }), oldFormErrors: true, rejectWithError: true };
                  let value = HTTP.get(request);
                  let obj2 = closure_1(dependencyMap[6]);
                  value.then(() => { ... }, () => { ... }).catch(/* F124447 */ function() { ... });
                });
              }
              let obj = closure_1_1(dependencyMap[4]);
            }).catch(() => {

            });
          });
        }
        let obj = closure_1_1(dependencyMap[4]);
      });
    }
  }
};
export const dismissGuild = function dismissGuild(guildId) {
  Dispatcher.dispatch({ type: "MOBILE_GAME_COMMUNITIES_DISMISS_GUILD", guildId });
};